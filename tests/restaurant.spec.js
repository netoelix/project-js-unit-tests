const createMenu = require('../src/restaurant');

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    const menuData = {
      food: {
        pizza: 10,
        burger: 8,
      },
      drinks: {
        coke: 2,
        juice: 4,
      },
    };

    const newMenu = createMenu(menuData);

    expect(newMenu).toHaveProperty('fetchMenu');
    expect(typeof newMenu.fetchMenu).toBe('function');
    
    const fetchedMenu = newMenu.fetchMenu();
    expect(Object.keys(fetchedMenu)).toEqual(['food', 'drinks']);
    
    expect(fetchedMenu).toEqual(menuData);

    expect(newMenu.consumption).toStrictEqual([]);

    const menu = createMenu(menuData);
    const result = menu.order('pizza');
    const resultIndisponible = menu.order('salad');

    expect(result).toEqual(['pizza']);
    expect(menu.consumption).toEqual(['pizza']);
    expect(resultIndisponible).toBe('Item indisponível');

    menu.order('pizza');
    menu.order('burger');
    menu.order('pizza');

    expect(menu.consumption).toEqual(['pizza', 'pizza', 'burger', 'pizza']);

    const totalPrice = menu.pay();

    expect(totalPrice).toBeCloseTo(42, -1);
  });
});
