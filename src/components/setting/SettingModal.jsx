import PropTypes from 'prop-types'
import { Modal } from '@Components/ui/modal'
import SettingTimes from './SettingTimes'
import SettingPresets from './SettingPresets'
import SettingAdvanced from './SettingAdvanced'

function SettingModal({ visible, handleClose }) {
  return (
    <Modal visible={visible} size="medium" handleClose={handleClose}>
      <Modal.Header title="Settings" showClose handleClose={handleClose} />
      <Modal.Body>
        <SettingTimes />
        <SettingPresets />
        <hr className="setting__divider my-4" />
        <SettingAdvanced />
      </Modal.Body>
    </Modal>
  )
}

SettingModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default SettingModal
