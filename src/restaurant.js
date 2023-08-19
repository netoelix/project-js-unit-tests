/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (menuObj) => {
  const order = [];
  const menu = {
    fetchMenu: () => menuObj,
    consumption: order,
  };
  return menu;
};
console.log(createMenu({ food: {}, drinks: {}, }));

module.exports = createMenu;
