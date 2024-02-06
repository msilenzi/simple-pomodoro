import PropTypes from 'prop-types'
import { Modal } from '@Components/ui/modal'

function SettingModal({ visible, handleClose }) {
  return (
    <Modal visible={visible} size="medium">
      <Modal.Header
        title="This is a modal"
        description="This is a modal description in the modal header lorem ipsum dolor sit amet"
        showClose
        handleClose={handleClose}
      />
      This is the modal content with some more content
      <Modal.Footer>
        <button className='btn btn-md btn-primary ml-auto mr-0' style={{display: 'block'}}>Hola</button>
      </Modal.Footer>
    </Modal>
  )
}

SettingModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default SettingModal
