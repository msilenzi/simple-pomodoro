import PropTypes from 'prop-types'
import { Play, Reset, Skip } from '@Assets/icons'

function Controls() {
  return (
    <div className="flex flex-centered g-5 mt-4">
      <Control icon={<Reset />} />
      <Control icon={<Play />} />
      <Control icon={<Skip />} />
    </div>
  )
}

function Control({ icon }) {
  return <button className="pomodoro__control btn">{icon}</button>
}

Control.propTypes = {
  icon: PropTypes.element.isRequired,
}

export default Controls
