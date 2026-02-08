import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAddress } from "../../context/address-context";
import { Navbar } from "../../components/Navbar";

export const AddressEdit = () => {
  const [form, setForm] = useState({
    uname: "",
    mainAdd: "",
    landmark: "",
    mob: "",
    pincode: "",
  });

  const { addresses, addressDispatch } = useAddress();
  const { id } = useParams();

  const addressToEdit = addresses.find((addr) => addr.id === id);

  useEffect(() => {
    if (addressToEdit) {
      setForm({
        uname: addressToEdit.uname,
        mainAdd: addressToEdit.mainAdd,
        landmark: addressToEdit.landmark,
        mob: addressToEdit.mob,
        pincode: addressToEdit.pincode,
      });
    }
  }, [addressToEdit]);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const onSaveClick = () => {
    if (form.mainAdd === "" || form.mob === "" || form.pincode === ""){
      alert("Enter valid address");
    }
    else {
      addressDispatch({
        type: "Edit_Address",
        payload: {
        id,
        ...form,
      },
      });
      navigate(`/address`);
    }
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main className="min-h-screen bg-zinc-300 flex flex-col justify-center items-center overflow-x-auto">
        <div className="flex flex-col gap-4 w-[350px] bg-white p-6 rounded-lg shadow-lg">
          <input
            className="outline-none p-2 "
            type="text"
            maxLength={20}
            placeholder="Enter Name"
            name="uname"
            value={form.uname}
            onChange={onHandleChange}
          />
          <input
            className="outline-none p-2 "
            type="text"
            maxLength={50}
            placeholder="Enter main Address"
            name="mainAdd"
            value={form.mainAdd}
            onChange={onHandleChange}
          />
          <input
            className="outline-none p-2 "
            type="text"
            maxLength={25}
            placeholder="landmark"
            name="landmark"
            value={form.landmark}
            onChange={onHandleChange}
          />
          <input
            className="outline-none p-2 "
            type="text"
            maxLength={10}
            placeholder="Mob. No"
            name="mob"
            value={form.mob}
            onChange={onHandleChange}
          />
          <input
            className="outline-none p-2 "
            type="text"
            inputMode="numeric"
            maxLength={6}
            placeholder="PINCODE"
            name="pincode"
            value={form.pincode}
            onChange={onHandleChange}
          />
          <button
            className="button bg-purple-500 btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"
            onClick={onSaveClick}
          >
            Save Address
          </button>
        </div>
      </main>
    </div>
  );
};
