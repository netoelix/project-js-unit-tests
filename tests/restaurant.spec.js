const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    expect(createMenu()).toMatchObject(fetchMenu);
    expect(typeof createMenu()).toEqual('function');
  });
  it('Verifica se a função `createMenu` retorna um objeto com as chaves `food` e `drinks`', () => {
    expect(createMenu()).toContainEqual('food', 'drinks');
  })
  it('Verifica se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função createMenu', () => {
    expect(createMenu()).toContainEqual({food: {},drinks: {},});
  })
});
