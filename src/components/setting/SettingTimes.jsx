import { InputGroup } from '@Components/ui/form'
import { usePomodoroContext } from '@Hooks'
import { useForm } from '@Hooks/useForm'

function SettingTimes() {
  const { settings } = usePomodoroContext()

  const { formState, handleInputChange } = useForm({
    pomodoro: settings.times.pomodoro,
    shortBreak: settings.times.shortBreak,
    longBreak: settings.times.longBreak,
  })

  return (
    <div className="setting__times mb-4">
      <InputGroup
        id="pomodoro"
        type="number"
        label="Pomodoro"
        min="1"
        value={formState.pomodoro}
        onChange={handleInputChange}
      />
      <InputGroup
        id="shortBreak"
        type="number"
        label="Short Break"
        min="1"
        value={formState.shortBreak}
        onChange={handleInputChange}
      />
      <InputGroup
        id="longBreak"
        type="number"
        label="Long Break"
        min="1"
        value={formState.longBreak}
        onChange={handleInputChange}
      />
    </div>
  )
}

export default SettingTimes
