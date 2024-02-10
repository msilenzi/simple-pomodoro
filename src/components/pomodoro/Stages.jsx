import { usePomodoroContext } from '@Hooks'
import PropTypes from 'prop-types'

function Stages() {
  const {
    current,
    settings,
    changeToPomodoro,
    changeToShortBreak,
    changeToLongBreak,
  } = usePomodoroContext()

  return (
    <div className="flex flex-centered g-2 mb-4">
      <Stage
        name="Pomodoro"
        isActive={current.stage === 'pomodoro'}
        onClick={() => changeToPomodoro(current.step)}
      />
      <Stage
        name="Short Break"
        isActive={current.stage === 'shortBreak'}
        disabled={current.step === settings.steps}
        onClick={() => changeToShortBreak(current.step)}
      />
      <Stage
        name="Long Break"
        isActive={current.stage === 'longBreak'}
        onClick={() => changeToLongBreak(settings.steps)}
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
