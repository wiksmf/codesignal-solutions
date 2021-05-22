function addBorder(picture) {
  let pictureLength = picture[0].length + 2;

  return [
    '*'.repeat(pictureLength),
    ...picture.map(el => `*${el}*`),
    '*'.repeat(pictureLength),
  ];
}
