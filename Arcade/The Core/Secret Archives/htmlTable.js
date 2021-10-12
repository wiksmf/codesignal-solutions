function htmlTable(table, row, column) {
  return (
    table
      .split('<tr>')
      [row + 1]?.split('<td>')
      [column + 1]?.split('</td>')[0] || 'No such cell'
  );
}
