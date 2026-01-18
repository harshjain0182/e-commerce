import { useAddress } from "../../context/address-context";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { useParams } from "react-router-dom";

export const AddressPage = () => {
  const { addresses, addressDispatch } = useAddress();

  const navigate = useNavigate();

  const onDeleteClick = (id) => {
    addressDispatch({
      type: "Remove_Address",
      payload: id,
    });
  };

  const {total} = useParams();

  const onEditClick = (id) => {
    navigate(`/editaddress/${id}/${total}`);
  };

  const onAddNewAddressCLick = () => {
    navigate("/newaddress/" + total);
  };

  const [selectedAddressId, setSelectedAddressId] = useState(null);
  
  const loadScript = (src) => {
    return new Promise(resolve => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onError = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    const options = {
      key: "rzp_test_S44gExxDqpCLIK",
      amount: total * 100,
      currency: "INR",
      "name" : 'e-bazaar',
      description: "Thank you for shopping with us.",

      handler: ({payment_id}) => {
        navigate("/")
      }
    }

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="sticky top-0 z-50">
      <Navbar />

      <main className="min-h-screen bg-zinc-300 flex flex-col justify-center items-center gap-4 overflow-x-auto overflow-y-auto">
        <div className="flex justify-center items-center gap-1">
          <span
            className="material-symbols-outlined cursor-pointer text-purple-500"
            onClick={onAddNewAddressCLick}
          >
            add
          </span>
          <span className="cursor-pointer" onClick={onAddNewAddressCLick}>
            Add new Address
          </span>
        </div>

        <div className="flex flex-col gap-1">
          {addresses.map((addr) => (
            <label
              key={addr.id}
              className="flex items-start justify-between w-full  p-4 rounded"
            >
              <input
                type="radio"
                name="address"
                checked={selectedAddressId === addr.id}
                onChange={() => setSelectedAddressId(addr.id)}
              />

              <div>
                <p>
                  <b>{addr.uname}</b>
                </p>
                <p>{addr.mainAdd}</p>
                <p>{addr.landmark}</p>
                <p>{addr.mob}</p>
                <p>{addr.pincode}</p>
              </div>
              <div className="flex flex-col gap-3">
                <span
                  className="material-symbols-outlined cursor-pointer"
                  onClick={() => onEditClick(addr.id)}
                >
                  edit
                </span>
                <span
                  className="material-symbols-outlined cursor-pointer"
                  onClick={() => onDeleteClick(addr.id)}
                >
                  delete
                </span>
              </div>
            </label>
          ))}
        </div>

        <div>
          <button className="button bg-purple-500 btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin" onClick={displayRazorpay}>
            Place Order
          </button>
        </div>
      </main>
    </div>
  );
};
