import { usePomodoroContext } from '@Hooks'
import PropTypes from 'prop-types'

function Stages() {
  const {current} = usePomodoroContext()

  return (
    <div className="flex flex-centered g-2 mb-4">
      <Stage name="Pomodoro" isActive={current.stage === 'pomodoro'} />
      <Stage name="Short Break" isActive={current.stage === 'shortBreak'} />
      <Stage name="Long Break" isActive={current.stage === 'longBreak'} />
    </div>
  )
}

function Stage({ name, isActive = false }) {
  return (
    <button className="pomodoro__stage btn btn-sm" data-is-active={isActive}>
      {name}
    </button>
  )
}

Stage.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
}

export default Stages
