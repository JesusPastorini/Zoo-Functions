const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se `getOpeningHours` é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Retorna um objeto com o horário de abertura e fechamento da semana toda, caso não seja passado parâmetro.', () => {
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(expected);
  });
  it('Verifica se o horário passado esta correto.', () => {
    expect(getOpeningHours('Wednesday', '12:00-am')).toBe('The zoo is closed');
    expect(getOpeningHours('Wednesday', '08:00-am')).toBe('The zoo is open');
    expect(getOpeningHours('Sunday', '06:00-pm')).toBe('The zoo is open');
    expect(getOpeningHours('Sunday', '09:00-pm')).toBe('The zoo is closed');
  });
  it('dispara erro com a mensagem "O id inserido não é de uma pessoa colaboradora gerente!", quando o id inserido não for de uma pessoa colaboradora genrente', () => {
    expect(() => getOpeningHours('Sunday', '13:00-am')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Sunday', '12:70-am')).toThrow('The minutes must be between 0 and 59');
    expect(() => getOpeningHours('Sunday', '12:70-ph')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => getOpeningHours('Sunda', '12:70-ph')).toThrow('The day must be valid. Example: Monday');
    expect(() => getOpeningHours('Tuesday', '1X:33-PM')).toThrow();
    expect(() => getOpeningHours('aaaaa', '11:33-PM')).toThrow();
  });
});
