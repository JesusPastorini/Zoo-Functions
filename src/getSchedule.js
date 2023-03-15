const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const objDays = {
  Tuesday: {
    officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
    exhibition: data.species.filter(({ availability }) => availability.includes('Tuesday'))
      .map(({ name }) => name),
  },
  Wednesday: {
    officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
    exhibition: data.species.filter(({ availability }) => availability.includes('Wednesday'))
      .map(({ name }) => name),
  },
  Thursday: {
    officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
    exhibition: data.species.filter(({ availability }) => availability.includes('Thursday'))
      .map(({ name }) => name),
  },
  Friday: {
    officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
    exhibition: data.species.filter(({ availability }) => availability.includes('Friday'))
      .map(({ name }) => name),
  },
  Saturday: {
    officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
    exhibition: data.species.filter(({ availability }) => availability.includes('Saturday'))
      .map(({ name }) => name),
  },
  Sunday: {
    officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
    exhibition: data.species.filter(({ availability }) => availability.includes('Sunday'))
      .map(({ name }) => name),
  },
  Monday: {
    exhibition: 'The zoo will be closed!',
    officeHour: 'CLOSED',
  },
};
const getSchedule = (scheduleTarget) => {
  const testaAnimal = data.species.find((fin) => fin.name === scheduleTarget);
  const testDia = Object.keys(hours).filter((fin) => fin === scheduleTarget)[0];
  if (testaAnimal) {
    return data.species.find((fin) => scheduleTarget === fin.name).availability;
  } if (testDia) {
    return { [scheduleTarget]: objDays[scheduleTarget] };
  }
  return objDays;
};

module.exports = getSchedule;
