function sudoku(grid) {
  return checkRow(grid) && checkColumn(grid) && checkSubgrid(grid);
}

function checkRow(grid) {
  return grid.map(el => [...new Set(el)]).filter(el => el.length === 9).length === 9;
}

function checkColumn(grid) {
  let reverseGrid = [];
  
  for (let i = 0; i < grid.length; i++) {
      reverseGrid.push([]);
      for (let j = 0; j < grid[i].length; j++) {
          reverseGrid[i].push(grid[j][i]);
      }
  }
  
  return checkRow(reverseGrid);
}

function checkSubgrid(grid) {
  for (let i = 0; i < grid.length; i += 3) {
      for (let j = 0; j < grid.length; j += 3) {
          let subgrid = [];
          for (let k = i; k < i + 3; k++) 
              for (let l = j; l < j + 3; l++) 
                  subgrid.push(grid[k][l]);
      
          if (new Set(subgrid).size !== 9) return false;
      }
  }
 
  return true;
}
