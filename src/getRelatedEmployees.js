const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((dat) => dat.managers.find((manag) =>
  manag === id));
const getRelatedEmployees = (managerId) => {
  const managerIs = isManager(managerId);
  if (managerIs === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const aux = employees.filter((emp) => emp.managers.includes(managerId));
    return aux.map((element) => `${element.firstName} ${element.lastName}`);
  }
};

console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
