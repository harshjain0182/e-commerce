export const priceAfterDiscount = (price) => {

    const discountRate = 0.30;
    const deliveryCharge = 60;

    const discount = price * discountRate;
    const discountdPrice = price - discount;
    const total = discountdPrice + deliveryCharge;
    return {
        discount: Number(discount.toFixed(2)),
        finalPrice: Number(discountdPrice.toFixed(2)),
        total: Number(total.toFixed(2))
    };
}