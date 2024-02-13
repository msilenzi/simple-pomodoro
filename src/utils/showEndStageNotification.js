import { notificationMessages } from '@Assets/data'
import getRandomNumber from './getRandomNumber'
import Favicon from '/pomo-timer.png'

function notify(newStage) {
  const rndIndex = getRandomNumber(0, notificationMessages[newStage].length - 1)
  const notification = notificationMessages[newStage][rndIndex]

  new Notification(notification, {
    icon: Favicon,
    renotify: true,
    tag: 'end-stage',
  })
}

function showEndStageNotification(newStage) {
  if (!('Notification' in window)) {
    alert('This browser does not support desktop notification')
    return
  }

  if (Notification.permission === 'granted') {
    notify(newStage)
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        notify(newStage)
      }
    })
  }
}

export default showEndStageNotification
