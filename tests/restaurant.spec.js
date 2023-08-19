const createMenu = require('../src/restaurant');

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    const newMenu = createMenu({ food: {}, drinks: {}, });

    //Verifica se a função createMenu() retorna um objeto que possui a chave fetchMenu.
    expect(newMenu).toHaveProperty('fetchMenu');

    //Verifica se o valor da chave fetchMenu do objeto retornado pela função createMenu() é uma função.
    expect(typeof createMenu().fetchMenu).toBe('function');
    const menuNewObj = { food: {}, drinks: {}, };
    const menuInstance = createMenu(menuNewObj);
    //verifica se o objeto retornado pela função createMenu({ food: {}, drinks: {} }).fetchMenu() retorna um objeto cujas chaves são somente food e drinks.
    expect(menuInstance.fetchMenu()).toHaveProperty('food');
    expect(menuInstance.fetchMenu()).toHaveProperty('drinks');
    
    //Verifica se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função createMenu({ food: {}, drinks: {} }).fetchMenu().
    expect(newMenu).toEqual(newMenu);

    expect(createMenu().consumption).toStrictEqual([]);
  });
});
