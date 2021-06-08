function houseOfCats(legs) {
  let people = [];

  for (let i = (legs / 2) % 2; i <= legs / 2; i += 2) {
    people.push(i);
  }

  return people;
}
