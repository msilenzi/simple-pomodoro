import PropTypes from 'prop-types'
import { Gear } from '@Assets/icons'

function SettingButton({ handleClick }) {
  return (
    <button onClick={handleClick} className="setting__btn btn">
      <Gear />
    </button>
  )
}

SettingButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default SettingButton
