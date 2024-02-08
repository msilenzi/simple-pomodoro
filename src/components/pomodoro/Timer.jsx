import { usePomodoroContext } from '@Hooks'
import { zeroFill } from '@Utils'

function Timer() {
  const { current } = usePomodoroContext()
  const minutes = Math.floor(current.time / 60)
  const seconds = current.time % 60

  return (
    <h2 className="pomodoro__timer fw-700 m-0">
      {zeroFill(minutes, 2)}:{zeroFill(seconds, 2)}
    </h2>
  )
}

export default Timer
