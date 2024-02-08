import { Pomodoro } from '@Components/pomodoro'
import { SettingModalWrapper } from '@Components/setting'
import { PomodoroProvider } from '@Context'

function App() {
  return (
    <PomodoroProvider>
      <Pomodoro />
      <SettingModalWrapper />
    </PomodoroProvider>
  )
}

export default App
