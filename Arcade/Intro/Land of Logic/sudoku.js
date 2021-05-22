function sudoku(grid) {
  return checkRow(grid) && checkColumn(grid) && checkSubGrid(grid);
}

function checkRow(grid) {
  return (
    grid.map(el => (el = [...new Set(el)])).filter(el => el.length === 9)
      .length === 9
  );
}

function checkColumn(grid) {
  let subGrid = [];

  for (let i = 0; i < grid.length; i++) {
    subGrid.push([]);
    for (let j = 0; j < grid.length; j++) {
      subGrid[i].push(grid[j][i]);
    }
  }

  return checkRow(subGrid);
}

function checkSubGrid(grid) {
  for (let i = 0; i < grid.length; i += 3) {
    for (let j = 0; j < grid.length; j += 3) {
      let subGrid = [];
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          subGrid.push(grid[k][l]);
        }
      }
      if (new Set(subGrid).size !== 9) return false;
    }
  }

  return true;
}
