// utils-function/findCartValue.js
export const findCartValue = (cart) => {
  return cart.reduce(
    (acc, cur) => acc + (cur.price * cur.qty),
    0
  );
};
