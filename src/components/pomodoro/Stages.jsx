import PropTypes from 'prop-types'

function Stages() {
  return (
    <div className="flex flex-centered g-2">
      <Stage name="Pomodoro" isActive />
      <Stage name="Short Break" />
      <Stage name="Long Break" />
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
