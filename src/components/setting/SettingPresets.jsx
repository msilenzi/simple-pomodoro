import PropTypes from 'prop-types'
import { pomodoroPresets } from '@Assets/data'

function SettingPresets() {
  return (
    <>
      <p>You can also choose one of the following options:</p>
      <div className="flex flex-column g-3">
        {Object.values(pomodoroPresets).map(({ title, times }) => (
          <TimeOption
            title={title}
            pomodoro={times.pomodoro.toString()}
            short={times.shortBreak.toString()}
            long={times.longBreak.toString()}
            key={title}
          />
        ))}
      </div>
    </>
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

export default SettingPresets
