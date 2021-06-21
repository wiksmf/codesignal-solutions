function addBorder(picture) {
  return [
      '*'.repeat(picture[0].length + 2),
      ...picture.map(el => el = `*${el}*`),
      '*'.repeat(picture[0].length + 2)
  ]
}
