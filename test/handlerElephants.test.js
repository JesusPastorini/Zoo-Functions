const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se `handlerElephants` é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Verifica se o resultado é undefined caso não seja passado nenhum parâmetro.', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Verifica se o resultado é null caso não seja passado um parâmetro diferente do solicitado.', () => {
    expect(handlerElephants('locat')).toBe(null);
  });
  it('Verifica o resultado caso não seja uma string.', () => {
    expect(handlerElephants(23)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica o resultado dependendo do parâmetro pasado.', () => {
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toBe(10.5);
    expect(handlerElephants('location')).toBe('NW');
  });
});
