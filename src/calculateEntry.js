const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((element) => {
    if (element.age < 18 && element.age > 0) {
      child += 1;
    } else if (element.age >= 18 && element.age < 50) {
      adult += 1;
    } else {
      senior += 1;
    }
  });
  return { child, adult, senior };
};

const calculateEntry = (entrants) => {
  if (entrants === undefined) return 0;
  const obj = countEntrants(entrants);
  return obj.child * prices.child + obj.adult * prices.adult + obj.senior * prices.senior;
};

module.exports = { calculateEntry, countEntrants };
