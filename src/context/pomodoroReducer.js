import { pomodoroPresets } from '@Assets/data'

export const pomodoroInitialState = {
  settings: {
    times: pomodoroPresets.normal.times,
    autostartPomodoros: false,
    autostartBreaks: false,
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
  CHANGE_TO_POMODORO: 'CHANGE_TO_POMODORO',
  CHANGE_TO_LONG_BREAK: 'CHANGE_TO_LONG_BREAK',
  CHANGE_TO_SHORT_BREAK: 'CHANGE_TO_SHORT_BREAK',
  RESET_STAGE: 'RESET_STAGE',
  JUMP_TO_STEP: 'JUMP_TO_STEP',
  SET_TIME_SETTING: 'SET_TIME_SETTING',
  SET_CURRENT_TIME: 'SET_CURRENT_TIME',
  SET_AUTOSTART_BREAKS: 'SET_AUTOSTART_BREAKS',
  SET_AUTOSTART_POMODOROS: 'SET_AUTOSTART_POMODOROS',
  SET_STEPS: 'SET_STEPS',
  JUMP_TO_STAGE: 'JUMP_TO_STAGE',
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

    case POMODORO_ACTIONS.CHANGE_TO_POMODORO:
      return {
        ...state,
        current: {
          ...state.current,
          time: state.settings.times.pomodoro * 60,
          stage: 'pomodoro',
          isRunning:
            state.settings.autostartPomodoros && state.current.isRunning,
          step: payload.step,
        },
      }

    case POMODORO_ACTIONS.CHANGE_TO_LONG_BREAK:
      return {
        ...state,
        current: {
          ...state.current,
          time: state.settings.times.longBreak * 60,
          stage: 'longBreak',
          isRunning: state.settings.autostartBreaks && state.current.isRunning,
          step: payload.step,
        },
      }

    case POMODORO_ACTIONS.CHANGE_TO_SHORT_BREAK:
      return {
        ...state,
        current: {
          ...state.current,
          time: state.settings.times.shortBreak * 60,
          stage: 'shortBreak',
          isRunning: state.settings.autostartBreaks && state.current.isRunning,
          step: payload.step,
        },
      }

    case POMODORO_ACTIONS.RESET_STAGE:
      return {
        ...state,
        current: {
          ...state.current,
          time: state.settings.times[state.current.stage] * 60,
        },
      }

    case POMODORO_ACTIONS.JUMP_TO_STEP:
      return {
        ...state,
        current: {
          ...state.current,
          step: payload.step,
        },
      }

    case POMODORO_ACTIONS.SET_TIME_SETTING:
      return {
        ...state,
        settings: {
          ...state.settings,
          times: {
            ...state.settings.times,
            [payload.stage]: payload.newTime,
          },
        },
      }

    case POMODORO_ACTIONS.SET_CURRENT_TIME:
      return {
        ...state,
        current: {
          ...state.current,
          time: payload.time,
        },
      }

    case POMODORO_ACTIONS.SET_AUTOSTART_BREAKS:
      return {
        ...state,
        settings: {
          ...state.settings,
          autostartBreaks: payload.value,
        },
      }

    case POMODORO_ACTIONS.SET_AUTOSTART_POMODOROS:
      return {
        ...state,
        settings: {
          ...state.settings,
          autostartPomodoros: payload.value,
        },
      }

    case POMODORO_ACTIONS.SET_STEPS:
      return {
        ...state,
        current: {
          ...state.current,
          step: payload.step,
        },
        settings: {
          ...state.settings,
          steps: payload.steps,
        },
      }

    case POMODORO_ACTIONS.JUMP_TO_STAGE:
      return {
        ...state,
        current: {
          ...state.current,
          stage: payload.stage,
          time: payload.time,
        },
      }

    default:
      throw new Error(`No case for type ${type} found in pomodoroReducer.`)
  }
}

export default pomodoroReducer
