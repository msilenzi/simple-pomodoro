import PropTypes from 'prop-types'

function ModalBody({children}) {
  return (
    <div>
      {children}
    </div>
  )
}

ModalBody.propTypes = {
  children: PropTypes.node.isRequired
}

export default ModalBody
