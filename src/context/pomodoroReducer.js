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

export const POMODORO_ACTIONS = Object.freeze({})

function pomodoroReducer(state, { type, payload }) {
  switch (type) {
    default:
      throw new Error(`No case for type ${type} found in pomodoroReducer.`)
  }
}

export default pomodoroReducer
