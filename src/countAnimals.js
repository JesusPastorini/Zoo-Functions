const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === undefined) {
    const newObj = {};
    data.species.forEach((fe) => {
      newObj[fe.name] = data.species.find((spe) =>
        spe.name === fe.name).residents.length;
    });
    return newObj;
  }
  if (animal.sex === undefined) {
    return data.species.find((spe) =>
      spe.name === animal.species).residents.length;
  }
  return data.species.find((spe) =>
    spe.name === animal.species).residents.filter((fil) =>
    animal.sex === fil.sex).length;
};
module.exports = countAnimals;
