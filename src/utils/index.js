function changeFormat(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(number)
}

function calculateDaysBetween(startDay, endDay) {
  const date = new Date()
  const currentMonth = date.getMonth()

  const year = new Date().getFullYear()

  const startDate = new Date(`${year}-${currentMonth >= 10 ? currentMonth : `0${currentMonth}` }-${startDay}`)
  const endDate = new Date(`${year}-${currentMonth >= 10 ? currentMonth : `0${currentMonth + 1}`}-${endDay}`)

  const diffInMs = Math.abs(endDate - startDate)
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))

  return diffInDays + 1
}

function getDayToday() {
  const date = new Date()
  return date.getDate()
}

function getDaysInMonth() {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const nextMonth = new Date(year, month + 1, 1)
  const daysInMonth = (nextMonth - date) / (1000 * 60 * 60 * 24)
  return daysInMonth
}

export { changeFormat, calculateDaysBetween, getDayToday }
