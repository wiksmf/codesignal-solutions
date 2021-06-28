function pairOfShoes(shoes) {
  let found = true;

  while (shoes.length) {
    let currentShoe = shoes.pop();
    let pair = shoes.findIndex(
      el => el[1] === currentShoe[1] && el[0] !== currentShoe[0],
    );

    pair >= 0 ? shoes.splice(pair, 1) : (found = false);
  }

  return found;
}
