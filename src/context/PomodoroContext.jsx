import PropTypes from 'prop-types'
import { createContext, useCallback, useEffect, useReducer } from 'react'
import { BellSound } from '@Assets/sounds'
import pomodoroReducer, {
  POMODORO_ACTIONS,
  pomodoroInitialState,
} from './pomodoroReducer'

export const PomodoroContext = createContext(pomodoroInitialState)

export function PomodoroProvider({ children }) {
  const [state, dispatch] = useReducer(pomodoroReducer, pomodoroInitialState)
  const { settings, current } = state

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
    dispatch({ type: POMODORO_ACTIONS.JUMP_TO_STEP, payload: { step } })
  }

  function jumpToPomodoro(step) {
    dispatch({ type: POMODORO_ACTIONS.CHANGE_TO_POMODORO, payload: { step } })
  }

  function jumpToShortBreak(step) {
    dispatch({
      type: POMODORO_ACTIONS.CHANGE_TO_SHORT_BREAK,
      payload: { step },
    })
  }

  function jumpToLongBreak(step) {
    dispatch({ type: POMODORO_ACTIONS.CHANGE_TO_LONG_BREAK, payload: { step } })
  }

  function setTime(stage, newTimeMinutes) {
    newTimeMinutes = parseInt(newTimeMinutes, 10)
    const newTimeSeconds = newTimeMinutes * 60

    if (stage === current.stage) {
      const elapsedTime = settings.times[stage] * 60 - current.time
      const newCurrentTime = newTimeSeconds - elapsedTime

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
    dispatch({
      type: POMODORO_ACTIONS.SET_AUTOSTART_BREAKS,
      payload: { value },
    })
  }

  function setAutostartPomodoros(value) {
    dispatch({
      type: POMODORO_ACTIONS.SET_AUTOSTART_POMODOROS,
      payload: { value },
    })
  }

  function setSteps(newSteps) {
    newSteps = parseInt(newSteps, 10)

    if (newSteps === settings.steps) return

    const payload = {
      current: {
        time: current.time,
        stage: current.stage,
        step: current.step,
        isRunning: current.isRunning,
      },
      settings: {
        steps: newSteps,
      },
    }

    if (current.step > newSteps) {
      payload.current.step = newSteps
      if (current.stage === 'shortBreak') {
        payload.current.stage = 'longBreak'
        const elapsedTime = settings.times.shortBreak * 60 - current.time
        payload.current.time = settings.times.longBreak * 60 - elapsedTime
        if (payload.current.time < 0) {
          payload.current.time = settings.times.pomodoro * 60
          payload.current.stage = 'pomodoro'
          payload.current.isRunning =
            settings.autostartPomodoros && current.isRunning
          payload.current.step = 1
        }
      }
    } else if (current.stage === 'longBreak') {
      payload.current.stage = 'shortBreak'
      const elapsedTime = settings.times.longBreak * 60 - current.time
      payload.current.time = settings.times.shortBreak * 60 - elapsedTime
      if (payload.current.time < 0) {
        payload.current.time = settings.times.pomodoro * 60
        payload.current.stage = 'pomodoro'
        payload.current.isRunning =
          settings.autostartPomodoros && current.isRunning
        payload.current.step = current.step + 1
      }
    }

    dispatch({ type: POMODORO_ACTIONS.SET_STEPS, payload })
  }

  useEffect(() => {
    let intervalId
    if (current.isRunning) intervalId = setInterval(updateTimer, 6)
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
        jumpToPomodoro,
        jumpToShortBreak,
        jumpToLongBreak,
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
