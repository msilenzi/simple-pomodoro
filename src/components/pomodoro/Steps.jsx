import { usePomodoroContext } from '@Hooks'
import PropTypes from 'prop-types'

function Steps() {
  const {
    current: { step },
    settings: { steps },
  } = usePomodoroContext()

  return (
    <div className="flex flex-centered g-4">
      {Array.from({ length: steps }, (_, i) => (
        <Step key={i} isActive={step - 1 === i} />
      ))}
    </div>
  )
}

function Step({ isActive = false }) {
  return (
    <button className="pomodoro__step btn" data-is-active={isActive}></button>
  )
}

Step.propTypes = {
  isActive: PropTypes.bool,
}

export default Steps
