import { useNavigate } from "react-router-dom";
import { userLogin } from "../../API/authLogin";
import { useLogin } from "../../context/Login-context";

export const Login = () => {

    const {loginDispatch, email, password} = useLogin();

    const navigate = useNavigate();

    const onFormSubmit = async (e) => {
        e.preventDefault();
        const data = await userLogin(email, password);

        loginDispatch({
            type: 'Token',
            payload: data
        });

        if(data === "ok"){
            navigate('/success');
        }
        else{
            navigate('/failure');
        }
    }

    const onEmailChange = (e) => {
        loginDispatch({
            type: 'Email',
            payload: e.target.value
        })
    }

    const onPasswordChange = (e) => {
        loginDispatch({
            type: 'Password',
            payload: e.target.value
        })
    }

    return (
        <form onSubmit={onFormSubmit} className="h-[210px] w-[400px] flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                        <span>Email*</span>
                        <input onChange={onEmailChange} type="email" placeholder="abc@gmail.com" className="p-1 rounded-sm outline-none" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <span> Password*</span>
                        <input onChange={onPasswordChange} placeholder="Enter Password" type="password" className="p-1 rounded-sm outline-none"/>
                    </div>
                    <div className="flex justify-center items-center rounded-sm ">
                        <button className="button bg-purple-500 btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                            Login
                        </button>
                    </div>
        </form>
    );
};
