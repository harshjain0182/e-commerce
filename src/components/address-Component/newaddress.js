import { useState } from "react";
import { useAddress } from "../../context/address-context";
import { useNavigate } from "react-router-dom";

export const NewAddress = () => {
  
  const [form, setForm] = useState({
    uname: '',
    mainAdd: '',
    landmark : '',
    mob: '',
    pincode: ''
  });

  const onHandleChange = (e) => {
    const {name, value} = e.target;
    setForm(prev => 
    ({
        ...prev,
        [name] : value
    }));
  }
  
  const {addresses,addressDispatch} = useAddress();
  const navigate = useNavigate();

  const onSaveClick = () => {
    addressDispatch({
      type: "Add_Address",
      payload: form
    });
    navigate('/address')
  };
  
  return (
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
        onClick={() => onSaveClick()}
      >
        Save Address
      </button>
    </div>
  );
};
