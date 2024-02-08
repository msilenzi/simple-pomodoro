import { InputGroup } from '@Components/ui/form'

function SettingTimes() {
  return (
    <div className="setting__times mb-4">
      <InputGroup id="setting-work" type="number" label="Pomodoro" min="1" />
      <InputGroup
        id="setting-short"
        type="number"
        label="Short Break"
        min="1"
      />
      <InputGroup id="setting-long" type="number" label="Long Break" min="1" />
    </div>
  )
}

export default SettingTimes
