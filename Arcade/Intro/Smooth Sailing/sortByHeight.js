function sortByHeight(a) {
  let positionTree = [];

  for (let i = 0; i < a.length; i++) if (a[i] === -1) positionTree.push(i);

  let sortedPeople = a.filter(el => el > 0).sort((a, b) => a - b);

  for (let i = 0; i < positionTree.length; i++)
    sortedPeople.splice(positionTree[i], 0, -1);

  return sortedPeople;
}
