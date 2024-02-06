import PropTypes from 'prop-types'

function Modal({ children }) {
  return (
    <div className="modal__container">
      <dialog className='modal__dialog'>
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
}

export default Modal
