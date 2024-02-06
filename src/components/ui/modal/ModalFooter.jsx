import PropTypes from 'prop-types'

function ModalFooter({ children }) {
  return (
    <footer className='modal__footer mt-3 pt-2'>
      {children}
    </footer>
  )
}

ModalFooter.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ModalFooter
