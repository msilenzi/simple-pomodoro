import { usePomodoroContext } from '@Hooks'
import PropTypes from 'prop-types'

function Steps() {
  const {
    current: { step },
    settings: { steps },
    changeToStep,
  } = usePomodoroContext()

  return (
    <div className="flex flex-centered g-4">
      {Array.from({ length: steps }, (_, i) => (
        <Step
          key={i}
          isActive={step === i + 1}
          onClick={() => changeToStep(i + 1)}
        />
      ))}
    </div>
  )
}

function Step({ isActive = false, ...otherProps }) {
  return (
    <button
      {...otherProps}
      className="pomodoro__step btn"
      data-is-active={isActive}
    ></button>
  )
}

Step.propTypes = {
  isActive: PropTypes.bool,
}

export default Steps
