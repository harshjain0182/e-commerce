export const findProductsInWl = ( wishList, id) => wishList.length > 0 && wishList.some(product => id === product.id);
