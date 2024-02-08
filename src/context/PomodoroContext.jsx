import PropTypes from 'prop-types'
import { createContext, useCallback, useEffect, useReducer } from 'react'
import pomodoroReducer, {
  POMODORO_ACTIONS,
  pomodoroInitialState,
} from './pomodoroReducer'

export const PomodoroContext = createContext(pomodoroInitialState)

export function PomodoroProvider({ children }) {
  const [state, dispatch] = useReducer(pomodoroReducer, pomodoroInitialState)
  const { settings, current } = state

  const nextStage = useCallback(
    function nextStage() {
      if (current.stage !== 'pomodoro') {
        dispatch({ type: POMODORO_ACTIONS.CHANGE_TO_POMODORO })
      } else if (current.step === settings.steps) {
        dispatch({ type: POMODORO_ACTIONS.CHANGE_TO_LONG_BREAK })
      } else {
        dispatch({ type: POMODORO_ACTIONS.CHANGE_TO_SHORT_BREAK })
      }
    },
    [current.stage, current.step, settings.steps]
  )

  function toggleIsRunning() {
    dispatch({ type: POMODORO_ACTIONS.TOGGLE_IS_RUNNING })
  }

  function resetStage() {
    dispatch({ type: POMODORO_ACTIONS.RESET_STAGE })
  }

  useEffect(() => {
    let intervalId
    if (current.isRunning) intervalId = setInterval(updateTimer, 1000)
    return () => clearInterval(intervalId)

    function updateTimer() {
      if (current.time > 0) {
        dispatch({ type: POMODORO_ACTIONS.DECREMENT_TIME })
      } else {
        nextStage()
      }
    }
  }, [current, settings.steps, nextStage])

  return (
    <PomodoroContext.Provider
      value={{ settings, current, toggleIsRunning, nextStage, resetStage }}
    >
      {children}
    </PomodoroContext.Provider>
  )
}

PomodoroProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
