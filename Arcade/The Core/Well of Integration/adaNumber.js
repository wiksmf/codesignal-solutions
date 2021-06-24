function adaNumber(line) {
  line = line.toLowerCase().replace(/_/g, '');
  
  if (line.match(/^\d+$/)) return true;
  
  const [_, base, num] = line.match(/^(\d{1,2})#([0-9a-f]+)#$/) || [];
  
  return  num ? [...num].every(el => !isNaN(parseInt(el, base))) && base >= 2 && base <= 16 : false;
}