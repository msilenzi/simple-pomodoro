import PropTypes from 'prop-types'
import { createContext, useReducer } from 'react'
import pomodoroReducer, { pomodoroInitialState } from './pomodoroReducer'

export const PomodoroContext = createContext(pomodoroInitialState)

export function PomodoroProvider({ children }) {
  const [{ settings, current }, dispatch] = useReducer(
    pomodoroReducer,
    pomodoroInitialState
  )

  return (
    <PomodoroContext.Provider value={{ settings, current }}>
      {children}
    </PomodoroContext.Provider>
  )
}

PomodoroProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
