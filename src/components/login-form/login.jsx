import { useNavigate } from "react-router-dom";
import { userLogin } from "../../API/authLogin";
import { useLogin } from "../../context/Login-context";
import { useEffect } from "react";
export const Login = () => {
  const { loginDispatch, email, password } = useLogin();

  const navigate = useNavigate();
  let d = "";

  const onEmailChange = (e) => {
    loginDispatch({
      type: "Email",
      payload: e.target.value,
    });
  };

  const onPasswordChange = (e) => {
    loginDispatch({
      type: "Password",
      payload: e.target.value,
    });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const data = await userLogin(email, password);
    d = data;
    loginDispatch({
      type: "Token",
      payload: data,
    });

    console.log(d);

    if (d === "OK") {
      navigate("/success");
    } else {
      navigate("/failure");
    }
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className="h-[210px] w-[400px] flex flex-col gap-2"
    >
      <div className="flex flex-col gap-1">
        <span>Email*</span>
        <input
          onChange={onEmailChange}
          type="email"
          placeholder="abc@gmail.com"
          className="p-1 rounded-sm outline-none"
        />
      </div>

      <div className="flex flex-col gap-1">
        <span> Password*</span>
        <input
          onChange={onPasswordChange}
          placeholder="Enter Password"
          type="password"
          className="p-1 rounded-sm outline-none"
        />
      </div>
      <div className="flex justify-center items-center rounded-sm ">
        <button className="button bg-purple-500 btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
          Login
        </button>
      </div>
    </form>
  );
};
