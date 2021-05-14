function chessBoardCellColor(cell1, cell2) {
  return checkColor(cell1) === checkColor(cell2);
}

function checkColor(cell) {
  let column = 'ABCDEFGH';

  if ((column.indexOf(cell[0]) + 1) % 2 === 0)
    return cell[1] % 2 === 0 ? true : false;
  else return cell[1] % 2 === 0 ? false : true;
}
