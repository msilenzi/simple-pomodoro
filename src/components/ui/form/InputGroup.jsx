import PropTypes from 'prop-types'

function InputGroup({ id, type, label, ...customProps }) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input {...customProps} id={id} type={type} />
    </div>
  )
}

InputGroup.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default InputGroup
