function validTime(time) {
  const [hour, minutes] = time.split(':');

  return hour < 24 && minutes <= 59;
}
