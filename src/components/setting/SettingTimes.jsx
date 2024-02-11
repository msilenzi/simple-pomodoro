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

  function handleBlur(e) {
    const stage = e.target.name
    const value = parseInt(e.target.value, 10)
    const min = parseInt(e.target.min, 10)
    const max = parseInt(e.target.max, 10)

    setFormState({ ...formState, [stage]: value })

    if (isNaN(value) || value < min || value > max) {
      setFormState({ ...formState, [stage]: settings.times[stage] })
    } else {
      setTime(stage, value)
    }
  }

  return (
    <div className="setting__times mb-4">
      <InputGroup
        id="pomodoro"
        type="number"
        label="Pomodoro"
        min="1"
        max="120"
        step="1"
        value={formState.pomodoro}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      <InputGroup
        id="shortBreak"
        type="number"
        label="Short Break"
        min="1"
        max="120"
        step="1"
        value={formState.shortBreak}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      <InputGroup
        id="longBreak"
        type="number"
        label="Long Break"
        min="1"
        max="120"
        step="1"
        value={formState.longBreak}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
    </div>
  )
}

export default SettingTimes
