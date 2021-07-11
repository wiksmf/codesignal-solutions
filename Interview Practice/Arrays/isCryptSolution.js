function isCryptSolution(crypt, solution) {
  let word = [];

  for (let i = 0; i < crypt.length; i++) {
    let currentWord = '';

    for (let j = 0; j < crypt[i].length; j++)
      solution.forEach(el => {
        if (el[0] === crypt[i][j]) currentWord += el[1];
      });

    word.push(currentWord);
  }

  for (let i = 0; i < word.length - 1; i++)
    if (word[i][0] === '0' && word[i].length !== 1) return false;

  return +word[0] + +word[1] === +word[2];
}
