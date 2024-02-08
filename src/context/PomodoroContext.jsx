import PropTypes from 'prop-types'
import { createContext, useEffect, useReducer } from 'react'
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

    if (current.isRunning) {
      intervalId = setInterval(() => {
        dispatch({ type: POMODORO_ACTIONS.DECREMENT_TIME })
      }, 1000)
    }

    return () => clearInterval(intervalId)
  }, [current.isRunning])

  function toggleIsRunning() {
    dispatch({ type: POMODORO_ACTIONS.TOGGLE_IS_RUNNING })
  }

  return (
    <PomodoroContext.Provider value={{ settings, current, toggleIsRunning }}>
      {children}
    </PomodoroContext.Provider>
  )
}

PomodoroProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
