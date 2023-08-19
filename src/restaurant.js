/* eslint-disable max-len */
// Siga as orientações do README!

const hasFoodItem = (menuObj, item) => {
  const foodKeys = Object.keys(menuObj.food);

  for (let foodIndex = 0; foodIndex < foodKeys.length; foodIndex += 1) {
    if (foodKeys[foodIndex] === item) {
      return true;
    }
  }

  return false;
};

const hasDrinksItem = (menuObj, item) => {
  const drinksKeys = Object.keys(menuObj.drinks);

  for (let drinksIndex = 0; drinksIndex < drinksKeys.length; drinksIndex += 1) {
    if (drinksKeys[drinksIndex] === item) {
      return true;
    }
  }

  return false;
};

const hasItemInMenu = (menuObj, item) => hasFoodItem(menuObj, item) || hasDrinksItem(menuObj, item);

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
