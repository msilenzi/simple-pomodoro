import { usePomodoroContext } from '@Hooks'
import { secondsToTime } from '@Utils'

function Timer() {
  const { current } = usePomodoroContext()

  return (
    <h2 className="pomodoro__timer fw-700 m-0">
      {secondsToTime(current.time)}
    </h2>
  )
}

export default Timer
