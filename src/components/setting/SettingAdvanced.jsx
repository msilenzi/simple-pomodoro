import PropTypes from 'prop-types'
import { ToggleSwitch } from "@Components/ui/form"

function SettingAdvanced() {
  return (
    <div className="flex flex-column g-3">
      <ToggleOption id="auto-break" label="Auto start breaks" />
      <ToggleOption id="auto-pomodoros" label="Auto start pomodoros" />
      <div className="flex justify-content-between align-items-center">
        <label htmlFor="intervals">Long break intervals</label>
        <input
          type="number"
          name="intervals"
          id="intervals"
          className="input-text"
          style={{ width: '15%' }}
          min={1}
          max={6}
        />
      </div>
    </div>
  )
}

function ToggleOption({ id, label }) {
  return (
    <div className="flex align-items-center justify-content-between">
      <label htmlFor={id}>{label}</label>
      <ToggleSwitch id={id} size="0.7em" />
    </div>
  )
}

ToggleOption.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default SettingAdvanced
