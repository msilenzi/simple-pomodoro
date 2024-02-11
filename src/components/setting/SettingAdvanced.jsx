import PropTypes from 'prop-types'
import { ToggleSwitch } from '@Components/ui/form'
import { usePomodoroContext } from '@Hooks'
import { useForm } from '@Hooks/useForm'

function SettingAdvanced() {
  const { settings, setAutostartBreaks, setAutostartPomodoros, setSteps } =
    usePomodoroContext()
  const { formState, setFormState, handleInputChange } = useForm({
    autostartPomodoros: settings.autostartPomodoros,
    autostartBreaks: settings.autostartBreaks,
    steps: settings.steps,
  })

  function handleAutostartBreaksChange(e) {
    handleInputChange(e)
    setAutostartBreaks(e.target.checked)
  }

  function handleAutostartPomodorosChange(e) {
    handleInputChange(e)
    setAutostartPomodoros(e.target.checked)
  }

  function handleBlur(e) {
    const value = parseInt(e.target.value, 10)
    const min = parseInt(e.target.min, 10)
    const max = parseInt(e.target.max, 10)

    setFormState({ ...formState, steps: value })

    if (isNaN(value) || value < min || value > max) {
      setFormState({ ...formState, steps: settings.steps })
    } else {
      setSteps(value)
    }
  }

  return (
    <div className="flex flex-column g-3">
      <ToggleOption
        id="autostartBreaks"
        label="Auto start breaks"
        checked={formState.autostartBreaks}
        onChange={handleAutostartBreaksChange}
      />
      <ToggleOption
        id="autostartPomodoros"
        label="Auto start pomodoros"
        checked={formState.autostartPomodoros}
        onChange={handleAutostartPomodorosChange}
      />
      <div className="flex justify-content-between align-items-center">
        <label htmlFor="steps">Long break intervals</label>
        <input
          type="number"
          name="steps"
          id="steps"
          className="input-text"
          style={{ width: '15%' }}
          min="1"
          max="8"
          step="1"
          value={formState.steps}
          onChange={handleInputChange}
          onBlur={handleBlur}
        />
      </div>
    </div>
  )
}

function ToggleOption({ id, label, checked, onChange }) {
  return (
    <div className="flex align-items-center justify-content-between">
      <label htmlFor={id}>{label}</label>
      <ToggleSwitch
        id={id}
        size="0.7em"
        checked={checked}
        onChange={onChange}
      />
    </div>
  )
}

ToggleOption.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default SettingAdvanced
