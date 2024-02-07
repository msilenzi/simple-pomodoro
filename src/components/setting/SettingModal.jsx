import PropTypes from 'prop-types'
import { Modal } from '@Components/ui/modal'
import { InputGroup } from '@Components/ui/form'

function SettingModal({ visible, handleClose }) {
  return (
    <Modal visible={visible} size="medium" handleClose={handleClose}>
      <Modal.Header title="Settings" showClose handleClose={handleClose} />
      <Modal.Body>
        <div className="setting__times">
          <InputGroup
            id="setting-work"
            type="number"
            label="Pomodoro"
            min="1"
          />
          <InputGroup
            id="setting-short"
            type="number"
            label="Short Break"
            min="1"
          />
          <InputGroup
            id="setting-long"
            type="number"
            label="Long Break"
            min="1"
          />
        </div>
      </Modal.Body>
    </Modal>
  )
}

SettingModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default SettingModal
