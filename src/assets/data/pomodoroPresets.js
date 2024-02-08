const pomodoroPresets = {
  test: {
    title: 'Test',
    times: {
      pomodoro: 0.05,
      shortBreak: 0.05,
      longBreak: 0.05,
    },
  },
  normal: {
    title: 'Normal',
    times: {
      pomodoro: 25,
      shortBreak: 5,
      longBreak: 15,
    },
  },
  large: {
    title: 'Large',
    times: {
      pomodoro: 45,
      shortBreak: 8,
      longBreak: 25,
    },
  },
  extended: {
    title: 'Extended',
    times: {
      pomodoro: 90,
      shortBreak: 20,
      longBreak: 60,
    },
  },
}

export default pomodoroPresets
