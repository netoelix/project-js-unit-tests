/* eslint-disable max-len */
// Siga as orientações do README!

const hasItemInMenu = (menuObj, item) => {
  const foodKeys = Object.keys(menuObj.food);
  const drinksKeys = Object.keys(menuObj.drinks);

  for (let index = 0; index < foodKeys.length; index += 1) {
    if (foodKeys[index] === item) {
      return true;
    }
  }

  for (let index = 0; index < drinksKeys.length; index += 1) {
    if (drinksKeys[index] === item) {
      return true;
    }
  }

  return false;
};

const createMenu = (menuObj) => {
  const orderArray = [];
  const menu = {
    fetchMenu: () => menuObj,
    consumption: orderArray,
    order: (item) => {
      const hasFood = hasItemInMenu(menuObj, item);      
      if (hasFood) {
        orderArray.push(item);
        return orderArray;
      } 
      return 'Item indisponível';
    },
    pay: () => {
      let total = 0;
      for (const item of orderArray) {
        if (menuObj.food[item]) {
          total += menuObj.food[item];
        } else if (menuObj.drinks[item]) {
          total += menuObj.drinks[item];
        }
      }
      return total * 1.1;
    },
  };
  return menu;
};
module.exports = createMenu;
