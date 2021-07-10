function boxBlur(image) {
  let newImage = image.slice(2).map(el => el.slice(2));
  
  return newImage.map((subArray, subArrayIndex) => 
      subArray.map((_, elIndex) => {
          let sum = 0;
          
          for (let i = 0; i < 3; i++)
              for (let j = 0; j < 3; j++) 
                  sum += image[subArrayIndex + i][elIndex + j];
          
  
          return Math.floor(sum / 9);
      }) 
  );
}