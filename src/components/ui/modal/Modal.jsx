import PropTypes from 'prop-types'

function Modal({ children, visible, size, ...otherProps }) {
  return (
    <div className="modal__container">
      <dialog {...otherProps} className={`modal modal--${size}`} open={visible}>
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
}

export default Modal
