function validTime(time) {
  const [hours, minutes] = time.split(':');

  return hours < 24 && minutes < 60;
}
