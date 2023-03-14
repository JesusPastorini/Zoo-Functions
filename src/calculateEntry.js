const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const objCont = {};
  let cont = 0;
  let cont1 = 0;
  let cont2 = 0;
  entrants.forEach(element => {
      if (element.age < 18 && element.age > 0) {
        objCont.child = (cont += 1); 
  } else if (element.age >= 18 && element.age < 50) {
      objCont.adult = (cont1 += 1);
  } else if (element.age >= 50) {
    objCont.senior = (cont2 += 1);}
});
return objCont;
};

const calculateEntry = (entrants) => {
  let valor = 0;
  if (entrants === undefined) return valor;
  entrants.forEach(element => {
    if (element.age < 18 && element.age > 0) {
      valor += data.prices.child;
} else if (element.age >= 18 && element.age < 50) {
  valor += data.prices.adult;
} else if (element.age >= 50) {
  valor += data.prices.senior;
}  
});
  return parseFloat(valor.toFixed(2));
};
console.log(calculateEntry([
  { name: 'aaaa', age: 5 },
  { name: 'bbbb', age: 5 },
  { name: 'cccc', age: 5 },
  { name: 'dddd', age: 18 },
  { name: 'eeee', age: 18 },
  { name: 'ffff', age: 50 },
]))
module.exports = { calculateEntry, countEntrants };
