import PropTypes from 'prop-types'
import { Close } from '@Assets/icons'

function ModalHeader({ title, description, showClose = false, handleClose }) {
  return (
    <header className="modal__header mb-3 pb-2">
      <div>
        <h3 className="h4 m-0">{title}</h3>
        {showClose && (
          <button className="modal__close-btn btn btn-sm" onClick={handleClose}>
            <Close />
          </button>
        )}
      </div>
      {description && <p className="m-0 mt-2 font-small">{description}</p>}
    </header>
  )
}

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  showClose: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
}

export default ModalHeader
