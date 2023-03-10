const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const colaborador = data.employees.filter((dat) =>
    dat.firstName === employeeName || dat.lastName === employeeName);
  const [desestruturando = {}] = colaborador;
  return desestruturando;
};
module.exports = getEmployeeByName;
