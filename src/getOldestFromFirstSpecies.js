const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const pessoa = data.employees.find((find) => id === find.id).responsibleFor;
  const spcAnimal = data.species.find((find) => find.id === pessoa[0]);
  const velho = spcAnimal.residents.reduce((prev, current) =>
    (prev.age > current.age ? prev : current));
  return [velho.name, velho.sex, velho.age];
};
module.exports = getOldestFromFirstSpecies;
