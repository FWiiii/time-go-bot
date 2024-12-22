export function timeToDate(tagetDate: Date) {
  const now = new Date()
  const diff = tagetDate.getTime() - now.getTime()
  const diffInDays = Math.floor(diff / (1000 * 60 * 60 * 24))
  const diffInHours = Math.floor(diff / (1000 * 60 * 60)) % 24
  const diffInMinutes = Math.floor(diff / (1000 * 60)) % 60
  const diffInSeconds = Math.floor(diff / 1000) % 60
  return { diffInDays, diffInHours, diffInMinutes, diffInSeconds }
}
