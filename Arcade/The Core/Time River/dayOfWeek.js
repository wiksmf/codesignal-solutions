function dayOfWeek(birthdayDate) {
  let birthday = new Date(birthdayDate);
  let day = birthday.getDay();
  let month = birthday.getMonth();
  let year = birthday.getFullYear();
  let totalYears = 1;

  while (totalYears) {
    let nextDate = new Date(birthdayDate);
    nextDate.setYear(year + totalYears);

    if (nextDate.getDay() === day && nextDate.getMonth() === month) break;

    totalYears++;
  }

  return totalYears;
}
