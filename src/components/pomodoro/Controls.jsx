import PropTypes from 'prop-types'
import { Play, Reset, Skip, Pause } from '@Assets/icons'
import { usePomodoroContext } from '@Hooks'

function Controls() {
  const {
    current: { isRunning },
    toggleIsRunning,
  } = usePomodoroContext()

  return (
    <div className="flex flex-centered g-5 mt-5">
      <Control icon={<Reset />} />
      <Control
        icon={isRunning ? <Pause /> : <Play />}
        onClick={toggleIsRunning}
      />
      <Control icon={<Skip />} />
    </div>
  )
}

function Control({ icon, ...otherProps }) {
  return (
    <button {...otherProps} className="pomodoro__control btn">
      {icon}
    </button>
  )
}

Control.propTypes = {
  icon: PropTypes.element.isRequired,
}

export default Controls
