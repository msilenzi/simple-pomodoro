import { pomodoroPresets } from '@Assets/data'

export const pomodoroInitialState = {
  settings: {
    times: pomodoroPresets.normal.times,
    autoStartPomodoros: false,
    autoStartBreaks: false,
    steps: 4,
  },
  current: {
    time: pomodoroPresets.normal.times.pomodoro * 60,
    stage: 'pomodoro',
    step: 1,
    isRunning: false,
  },
}

export const POMODORO_ACTIONS = Object.freeze({
  DECREMENT_TIME: 'DECREMENT_TIME',
  TOGGLE_IS_RUNNING: 'TOGGLE_IS_RUNNING',
})

function pomodoroReducer(state, { type, payload }) {
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

    default:
      throw new Error(`No case for type ${type} found in pomodoroReducer.`)
  }
}

export default pomodoroReducer
