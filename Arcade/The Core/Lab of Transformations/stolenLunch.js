function stolenLunch(note) {
  let alph = 'abcdefghij';
  let nums = '0123456789';
  
  return note.split('').map(el => {
          if (alph.includes(el)) return nums.charAt(alph.indexOf(el))
          else if (nums.includes(el)) return alph.charAt(nums.indexOf(el))
          return el
      }).join('');
}
