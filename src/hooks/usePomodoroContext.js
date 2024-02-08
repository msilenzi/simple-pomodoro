import { PomodoroContext } from '@Context/PomodoroContext'
import { useContext } from 'react'

function usePomodoroContext() {
  const context = useContext(PomodoroContext)

  if (!context) {
    throw new Error('usePomodoroContext must be used within PomodoroContext')
  }

  return context
}

export default usePomodoroContext
