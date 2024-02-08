import PropTypes from 'prop-types'
import { pomodoroPresets } from '@Assets/data'
import { usePomodoroContext } from '@Hooks'

function SettingPresets() {
  return (
    <>
      <p>You can also choose one of the following options:</p>
      <div className="flex flex-column g-3">
        {Object.values(pomodoroPresets).map(({ title, times }) => (
          <TimeOption
            title={title}
            pomodoro={times.pomodoro}
            shortBreak={times.shortBreak}
            longBreak={times.longBreak}
            key={title}
          />
        ))}
      </div>
    </>
  )
}

function TimeOption({ title, pomodoro, shortBreak, longBreak }) {
  const { settings } = usePomodoroContext()

  const isActive =
    settings.times.pomodoro === pomodoro &&
    settings.times.shortBreak === shortBreak &&
    settings.times.longBreak === longBreak

  return (
    <div
      className="setting__preset p-3"
      data-is-active={isActive}
      role="button"
    >
      <p className="fw-700 m-0 mb-2">{title}</p>
      <p className="m-0">
        {pomodoro} min &bull; {shortBreak} min &bull; {longBreak} min
      </p>
    </div>
  )
}

TimeOption.propTypes = {
  title: PropTypes.string.isRequired,
  pomodoro: PropTypes.number.isRequired,
  shortBreak: PropTypes.number.isRequired,
  longBreak: PropTypes.number.isRequired,
}

export default SettingPresets
