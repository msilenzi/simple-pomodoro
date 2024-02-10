import PropTypes from 'prop-types'
import { createContext, useCallback, useEffect, useReducer } from 'react'
import { BellSound } from '@Assets/sounds'
import pomodoroReducer, {
  POMODORO_ACTIONS,
  pomodoroInitialState,
} from './pomodoroReducer'

export const PomodoroContext = createContext(pomodoroInitialState)

function initReducer() {
  const settings =
    JSON.parse(localStorage.getItem('settings')) ??
    pomodoroInitialState.settings

  return {
    settings,
    current: {
      ...pomodoroInitialState.current,
      time: settings.times.pomodoro * 60,
    },
  }
}

export function PomodoroProvider({ children }) {
  const [state, dispatch] = useReducer(pomodoroReducer, null, initReducer)
  const { settings, current } = state

  function __getElapsedTime(stage) {
    return settings.times[stage] * 60 - current.time
  }

  function __jumpToStage(newStage) {
    const payload = {
      stage: newStage,
      time: settings.times[newStage] * 60 - __getElapsedTime(current.stage),
    }

    if (payload.time < 0) return false

    dispatch({ type: POMODORO_ACTIONS.JUMP_TO_STAGE, payload })
    return true
  }

  const nextStage = useCallback(() => {
    if (current.stage !== 'pomodoro') {
      dispatch({
        type: POMODORO_ACTIONS.CHANGE_TO_POMODORO,
        payload: {
          step: current.step === settings.steps ? 1 : current.step + 1,
        },
      })
    } else if (current.step === settings.steps) {
      dispatch({
        type: POMODORO_ACTIONS.CHANGE_TO_LONG_BREAK,
        payload: {
          step: current.step,
        },
      })
    } else {
      dispatch({
        type: POMODORO_ACTIONS.CHANGE_TO_SHORT_BREAK,
        payload: {
          step: current.step,
        },
      })
    }
  }, [current.stage, current.step, settings.steps])

  function toggleIsRunning() {
    dispatch({ type: POMODORO_ACTIONS.TOGGLE_IS_RUNNING })
  }

  function resetStage() {
    dispatch({ type: POMODORO_ACTIONS.RESET_STAGE })
  }

  function jumpToStep(step) {
    if (step === current.step) return

    if (
      step === settings.steps &&
      current.stage === 'shortBreak' &&
      !__jumpToStage('longBreak')
    ) {
      changeToPomodoro(1)
    } else if (current.stage === 'longBreak' && !__jumpToStage('shortBreak')) {
      changeToPomodoro(step + 1)
    } else {
      dispatch({ type: POMODORO_ACTIONS.JUMP_TO_STEP, payload: { step } })
    }
  }

  function changeToPomodoro(step) {
    dispatch({ type: POMODORO_ACTIONS.CHANGE_TO_POMODORO, payload: { step } })
  }

  function changeToShortBreak(step) {
    dispatch({
      type: POMODORO_ACTIONS.CHANGE_TO_SHORT_BREAK,
      payload: { step },
    })
  }

  function changeToLongBreak(step) {
    dispatch({ type: POMODORO_ACTIONS.CHANGE_TO_LONG_BREAK, payload: { step } })
  }

  function setTime(stage, newTimeMinutes) {
    if (newTimeMinutes === settings.times[stage]) return

    const newTimeSeconds = newTimeMinutes * 60

    if (stage === current.stage) {
      const newCurrentTime = newTimeSeconds - __getElapsedTime(stage)

      if (newCurrentTime > 0) {
        dispatch({
          type: POMODORO_ACTIONS.SET_CURRENT_TIME,
          payload: { time: newCurrentTime },
        })
      } else {
        nextStage()
      }
    }

    dispatch({
      type: POMODORO_ACTIONS.SET_TIME_SETTING,
      payload: { stage, newTime: newTimeMinutes },
    })
  }

  function setAutostartBreaks(value) {
    if (value === settings.autostartBreaks) return

    dispatch({
      type: POMODORO_ACTIONS.SET_AUTOSTART_BREAKS,
      payload: { value },
    })
  }

  function setAutostartPomodoros(value) {
    if (value === settings.autostartPomodoros) return

    dispatch({
      type: POMODORO_ACTIONS.SET_AUTOSTART_POMODOROS,
      payload: { value },
    })
  }

  function setSteps(newSteps) {
    if (newSteps === settings.steps) return

    if (current.step >= newSteps) {
      jumpToStep(newSteps)
      if (current.stage === 'shortBreak' && !__jumpToStage('longBreak')) {
        changeToPomodoro(1)
      }
    } else if (current.stage === 'longBreak' && !__jumpToStage('shortBreak')) {
      changeToPomodoro(current.step + 1)
    }

    dispatch({ type: POMODORO_ACTIONS.SET_STEPS, payload: { steps: newSteps } })
  }

  useEffect(() => {
    localStorage.setItem('settings', JSON.stringify(state.settings))
  }, [state.settings])

  useEffect(() => {
    let intervalId
    if (current.isRunning) intervalId = setInterval(updateTimer, 1000)
    return () => clearInterval(intervalId)

    function updateTimer() {
      if (current.time > 0) {
        dispatch({ type: POMODORO_ACTIONS.DECREMENT_TIME })
      } else {
        new Audio(BellSound).play()
        nextStage()
      }
    }
  }, [current, settings.steps, nextStage])

  return (
    <PomodoroContext.Provider
      value={{
        settings,
        current,
        toggleIsRunning,
        nextStage,
        resetStage,
        jumpToStep,
        changeToPomodoro,
        changeToShortBreak,
        changeToLongBreak,
        setTime,
        setAutostartBreaks,
        setAutostartPomodoros,
        setSteps,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  )
}

PomodoroProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
