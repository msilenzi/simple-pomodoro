import { Pomodoro } from '@Components/pomodoro'
import { SettingModal } from '@Components/setting'
import SettingButton from '@Components/setting/SettingButton'

function App() {
  return (
    <>
      <Pomodoro />
      <SettingModal />
      <SettingButton />
    </>
  )
}

export default App
