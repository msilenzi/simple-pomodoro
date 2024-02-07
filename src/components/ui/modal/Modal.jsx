import PropTypes from 'prop-types'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'
import ModalHeader from './ModalHeader'

function Modal({ children, visible, size, handleClose, ...otherProps }) {
  if (!visible) return null
  
  function close(e) {
    if (e.target === e.currentTarget) handleClose()
  }

  return (
    <div className="modal__container" onClick={close}>
      <dialog {...otherProps} className={`modal modal--${size}`} open>
        {children}
      </dialog>
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  visible: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  handleClose: PropTypes.func.isRequired,
}

Modal.Body = ModalBody
Modal.Footer = ModalFooter
Modal.Header = ModalHeader

export default Modal
