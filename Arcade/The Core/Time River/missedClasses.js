function missedClasses(year, daysOfTheWeek, holidays) {
  return holidays
    .map(el => {
      el = new Date(`${el}-${year}`);
      return el.getMonth() <= 5
        ? new Date(year + 1, el.getMonth(), el.getDate())
        : el;
    })
    .filter(
      el =>
        daysOfTheWeek.map(el => (el === 7 ? 0 : el)).indexOf(el.getDay()) >= 0,
    ).length;
}
