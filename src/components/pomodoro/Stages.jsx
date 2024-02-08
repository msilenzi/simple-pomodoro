import { usePomodoroContext } from '@Hooks'
import PropTypes from 'prop-types'

function Stages() {
  const { current, jumpToPomodoro, jumpToShortBreak, jumpToLongBreak } =
    usePomodoroContext()

  return (
    <div className="flex flex-centered g-2 mb-4">
      <Stage
        name="Pomodoro"
        isActive={current.stage === 'pomodoro'}
        onClick={() => jumpToPomodoro(current.step)}
      />
      <Stage
        name="Short Break"
        isActive={current.stage === 'shortBreak'}
        onClick={() => jumpToShortBreak(current.step)}
      />
      <Stage
        name="Long Break"
        isActive={current.stage === 'longBreak'}
        onClick={() => jumpToLongBreak(4)}
      />
    </div>
  )
}

function Stage({ name, isActive = false, ...otherProps }) {
  return (
    <button
      {...otherProps}
      className="pomodoro__stage btn btn-sm"
      data-is-active={isActive}
    >
      {name}
    </button>
  )
}

Stage.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
}

export default Stages
