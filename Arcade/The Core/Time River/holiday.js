function holiday(x, weekDay, month, yearNumber) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const currentMonth = months.indexOf(month);
  const currentWeekday = weekDays.indexOf(weekDay);
  let currentDay = 0;

  for (let i = 1; i <= 31; i++) {
    let newDate = new Date(yearNumber, currentMonth, i);

    if (currentMonth !== newDate.getMonth()) break;
    if (currentWeekday === newDate.getDay()) currentDay++;
    if (currentDay === x) return i;
  }

  return -1;
}
