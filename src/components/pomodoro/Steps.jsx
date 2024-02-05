import PropTypes from 'prop-types'

function Steps() {
  return (
    <div className="flex flex-centered g-3">
      <Step />
      <Step />
      <Step isActive />
      <Step />
    </div>
  )
}

function Step({ isActive = false }) {
  return (
    <button className="pomodoro__step btn" data-is-active={isActive}></button>
  )
}

Step.propTypes = {
  isActive: PropTypes.bool,
}

export default Steps
