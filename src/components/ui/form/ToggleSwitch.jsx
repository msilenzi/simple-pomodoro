import PropTypes from 'prop-types'

function ToggleSwitch({ id = '', size = '1em', ...otherProps }) {
  return (
    <div className="toggle" style={{ fontSize: size }}>
      <input {...otherProps} type="checkbox" id={id} name={id} />
      <label></label>
    </div>
  )
}

ToggleSwitch.propTypes = {
  id: PropTypes.string,
  size: PropTypes.string,
}

export default ToggleSwitch
