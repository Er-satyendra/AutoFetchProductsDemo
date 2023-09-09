export default function timeAgo(timestamp) {
  if (timestamp === 0) return null

  const currentTime = new Date().getTime()

  const timeDifference = currentTime - timestamp

  const secondsAgo = Math.floor(timeDifference / 1000)

  if (secondsAgo < 60) {
    return `${secondsAgo} seconds ago`
  }
  const minutesAgo = Math.floor(secondsAgo / 60)
  return `${minutesAgo} minutes ago`
}
