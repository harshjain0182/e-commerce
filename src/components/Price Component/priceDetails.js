import { useCart } from "../../context";
import { useAddress } from "../../context/address-context";
import { findCartValue } from "../../utils-function/findCartValue";
import { priceAfterDiscount } from "../../utils-function/priceAfterDiscount";
import { useNavigate } from "react-router-dom";

export const TotalPayment = () => {
  const { state } = useCart();
  const deliveryCharges = 60;
  const price = findCartValue(state.cart);
  const { discount, finalPrice, total } = priceAfterDiscount(price);

  const navigate = useNavigate();

  const { addresses } = useAddress();
  const onPlaceOrderClicks = () => {
    if (addresses.length > 0) {
      navigate("/address");
    } else {
      navigate("/newaddress");
    }
  };
  return (
    <div className="shrink-0 w-[400px] bg-white rounded-lg p-4 h-[270px] sticky top-40 z-100">
      <p className="text-center text-lg font-bold mb-4 border-b">
        Price Details
      </p>

      <div className="flex text-sm font-medium text-gray-700 mb-2">
        <p>Total Amount of cart</p>
        <p className="ml-auto">₹{price}</p>
      </div>

      <div className="flex text-sm font-medium text-gray-700 mb-2 border-b">
        <p>Discount (30%) </p>
        <p className="ml-auto">₹{discount}</p>
      </div>

      <div className="flex text-sm font-medium text-gray-700 mb-2">
        <p>Price after Discount</p>
        <p className="ml-auto">₹{finalPrice}</p>
      </div>

      <div className="flex text-sm font-medium text-gray-700 mb-2 border-b">
        <p>Delivery Charges</p>
        <p className="ml-auto">₹{deliveryCharges}</p>
      </div>

      <div className="flex text-sm font-medium text-gray-700 mb-2">
        <p>Total:</p>
        <p className="ml-auto">₹{total}</p>
      </div>

      <div>
        <button
          className="btn-primary rounded-full px-8 py-3 text-white font-semibold hover:bg-purple-700 transition cursor-pointer w-[360px]"
          onClick={onPlaceOrderClicks}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};
