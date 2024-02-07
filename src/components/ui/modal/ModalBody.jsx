import PropTypes from 'prop-types'

function ModalBody({children}) {
  return (
    <div className="modal__body">
      {children}
    </div>
  )
}

ModalBody.propTypes = {
  children: PropTypes.node.isRequired
}

export default ModalBody
