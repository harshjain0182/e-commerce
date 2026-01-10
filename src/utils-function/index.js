export const findProducts = (cart, id) => cart.length > 0 && cart.some(product => id === product.id);
