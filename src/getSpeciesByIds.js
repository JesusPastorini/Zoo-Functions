const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) =>
  data.species.filter((dat) => ids.includes(dat.id));

module.exports = getSpeciesByIds;
