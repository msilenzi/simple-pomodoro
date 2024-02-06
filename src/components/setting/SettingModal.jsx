import PropTypes from 'prop-types'
import { Modal } from '@Components/ui/modal'

function SettingModal({ visible }) {
  return (
    <Modal visible={visible} size="medium">
      This is the modal content with some more content
    </Modal>
  )
}

SettingModal.propTypes = {
  visible: PropTypes.bool.isRequired,
}

export default SettingModal
