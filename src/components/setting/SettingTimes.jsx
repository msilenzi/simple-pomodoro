import { InputGroup } from '@Components/ui/form'
import { usePomodoroContext } from '@Hooks'
import { useForm } from '@Hooks/useForm'
import { useEffect } from 'react'

function SettingTimes() {
  const { settings, setTime } = usePomodoroContext()

  const { formState, setFormState, handleInputChange } = useForm({
    pomodoro: settings.times.pomodoro,
    shortBreak: settings.times.shortBreak,
    longBreak: settings.times.longBreak,
  })

  useEffect(() => {
    setFormState({
      pomodoro: settings.times.pomodoro,
      shortBreak: settings.times.shortBreak,
      longBreak: settings.times.longBreak,
    })
  }, [settings.times, setFormState])

  return (
    <div className="setting__times mb-4">
      <InputGroup
        id="pomodoro"
        type="number"
        label="Pomodoro"
        min="1"
        value={formState.pomodoro}
        onChange={handleInputChange}
        onBlur={() => setTime('pomodoro', formState.pomodoro)}
      />
      <InputGroup
        id="shortBreak"
        type="number"
        label="Short Break"
        min="1"
        value={formState.shortBreak}
        onChange={handleInputChange}
        onBlur={() => setTime('shortBreak', formState.shortBreak)}
      />
      <InputGroup
        id="longBreak"
        type="number"
        label="Long Break"
        min="1"
        value={formState.longBreak}
        onChange={handleInputChange}
        onBlur={() => setTime('longBreak', formState.longBreak)}
      />
    </div>
  )
}

export default SettingTimes
