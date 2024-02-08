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

  useEffect(() => {
    let intervalId
    if (current.isRunning) intervalId = setInterval(updateTimer, 1000)
    return () => clearInterval(intervalId)

    function updateTimer() {
      if (current.time > 0) {
        dispatch({ type: POMODORO_ACTIONS.DECREMENT_TIME })
        return
      }

      if (current.stage === 'pomodoro') {
        if (current.step === settings.steps) {
          dispatch({ type: POMODORO_ACTIONS.CHANGE_TO_LONG_BREAK })
        } else {
          dispatch({ type: POMODORO_ACTIONS.CHANGE_TO_SHORT_BREAK })
        }
        return
      }

      dispatch({type: POMODORO_ACTIONS.CHANGE_TO_POMODORO})
    }
  }, [current, settings.steps])

  return (
    <PomodoroContext.Provider value={{ settings, current, toggleIsRunning }}>
      {children}
    </PomodoroContext.Provider>
  )

  function toggleIsRunning() {
    dispatch({ type: POMODORO_ACTIONS.TOGGLE_IS_RUNNING })
  }
}

PomodoroProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
