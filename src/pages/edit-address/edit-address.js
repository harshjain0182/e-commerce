export const AddressEdit = () => {
  const onSaveClick = () => {};
  return (
    <div className="min-h-screen bg-zinc-300 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 w-[350px] bg-white p-6 rounded-lg shadow-lg">
        <input
          className="outline-none p-2 "
          type="text"
          maxLength={20}
          placeholder="Enter Name"
        />
        <input
          className="outline-none p-2 "
          type="text"
          maxLength={50}
          placeholder="Enter main Address"
        />
        <input
          className="outline-none p-2 "
          type="text"
          maxLength={25}
          placeholder="landmark"
        />
        <input
          className="outline-none p-2 "
          type="text"
          maxLength={10}
          placeholder="Mob. No"
        />
        <input
          className="outline-none p-2 "
          type="text"
          inputMode="numeric"
          maxLength={6}
          placeholder="PINCODE"
        />
        <button
          className="button bg-purple-500 btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin"
          onClick={ onSaveClick }
        >
          Save Address
        </button>
      </div>
    </div>
  );
};
