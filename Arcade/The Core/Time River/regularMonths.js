function regularMonths(currMonth) {
  let [month, year] = currMonth.split('-').map(Number);

  while (++month) {
    if (month > 12) {
      month = 1;
      year++;
    }

    if (new Date(year, month - 1, 1).getDay() === 1)
      return `${month < 10 ? `0${month}` : month}-${year}`;
  }
}
