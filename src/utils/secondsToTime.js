import zeroFill from './zeroFill'

function secondsToTime(timeSeconds) {
  const minutes = Math.floor(timeSeconds / 60)
  const seconds = timeSeconds % 60

  return `${zeroFill(minutes, 2)}:${zeroFill(seconds, 2)}`
}

export default secondsToTime
