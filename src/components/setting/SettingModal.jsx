import PropTypes from 'prop-types'
import { Modal } from '@Components/ui/modal'
import { InputGroup } from '@Components/ui/form'

function SettingModal({ visible, handleClose }) {
  return (
    <Modal visible={visible} size="medium" handleClose={handleClose}>
      <Modal.Header title="Settings" showClose handleClose={handleClose} />
      <Modal.Body>
        <div className="setting__times mb-4">
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
        <p>You can also choose one of the following options:</p>
        <div className="flex flex-column g-3">
          <TimeOption title="Normal" pomodoro="25" short="5" long="15" />
          <TimeOption title="Large" pomodoro="45" short="8" long="30" />
          <TimeOption title="Normal" pomodoro="25" short="5" long="15" />
        </div>
      </Modal.Body>
    </Modal>
  )
}

function TimeOption({ title, pomodoro, short, long }) {
  return (
    <div className="setting__preset p-3" role="button">
      <p className="fw-700 m-0 mb-2">{title}</p>
      <p className="m-0">
        {pomodoro} min &bull; {short} min &bull; {long} min
      </p>
    </div>
  )
}

TimeOption.propTypes = {
  title: PropTypes.string.isRequired,
  pomodoro: PropTypes.string.isRequired,
  short: PropTypes.string.isRequired,
  long: PropTypes.string.isRequired,
}

SettingModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default SettingModal
