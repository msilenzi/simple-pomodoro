import { pomodoroPresets } from '@Assets/data'

export const pomodoroInitialState = {
  settings: {
    times: pomodoroPresets.test.times,
    autoStartPomodoros: true, //! false
    autoStartBreaks: true, //! false
    steps: 4,
  },
  current: {
    time: pomodoroPresets.test.times.pomodoro * 60,
    stage: 'pomodoro',
    step: 1,
    isRunning: false,
  },
}

export const POMODORO_ACTIONS = Object.freeze({
  DECREMENT_TIME: 'DECREMENT_TIME',
  TOGGLE_IS_RUNNING: 'TOGGLE_IS_RUNNING',
  CHANGE_TO_POMODORO: 'CHANGE_TO_POMODORO',
  CHANGE_TO_LONG_BREAK: 'CHANGE_TO_LONG_BREAK',
  CHANGE_TO_SHORT_BREAK: 'CHANGE_TO_SHORT_BREAK',
})

//! Remove "= pomodoroInitialState", it's only for IntelliSense
function pomodoroReducer(state = pomodoroInitialState, { type, payload }) {
  console.log(type)
  switch (type) {
    case POMODORO_ACTIONS.DECREMENT_TIME:
      return {
        ...state,
        current: {
          ...state.current,
          time: state.current.time - 1,
        },
      }

    case POMODORO_ACTIONS.TOGGLE_IS_RUNNING:
      return {
        ...state,
        current: {
          ...state.current,
          isRunning: !state.current.isRunning,
        },
      }

    case POMODORO_ACTIONS.CHANGE_TO_POMODORO:
      return {
        ...state,
        current: {
          ...state.current,
          time: state.settings.times.pomodoro * 60,
          stage: 'pomodoro',
          isRunning: state.settings.autoStartPomodoros,
          step:
            state.current.step === state.settings.steps
              ? 1
              : state.current.step + 1,
        },
      }

    case POMODORO_ACTIONS.CHANGE_TO_LONG_BREAK:
      return {
        ...state,
        current: {
          ...state.current,
          time: state.settings.times.longBreak * 60,
          stage: 'longBreak',
          isRunning: state.settings.autoStartBreaks,
        },
      }

    case POMODORO_ACTIONS.CHANGE_TO_SHORT_BREAK:
      return {
        ...state,
        current: {
          ...state.current,
          time: state.settings.times.shortBreak * 60,
          stage: 'shortBreak',
          isRunning: state.settings.autoStartBreaks,
        },
      }

    default:
      throw new Error(`No case for type ${type} found in pomodoroReducer.`)
  }
}

export default pomodoroReducer
