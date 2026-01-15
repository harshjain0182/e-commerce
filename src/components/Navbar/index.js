import { useNavigate } from "react-router-dom";
import { useCart } from "../../context";
import { useLogin } from "../../context/Login-context";

export const Navbar = () => {
  const navigate = useNavigate();

  const {token, loginDispatch} = useLogin();

  const handleLoginClick = () => {
    if (token === "OK") {
      navigate('/auth/login');
    }
    else{
      navigate('/auth/login');
    }
  }

  const { state } = useCart();

  const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="sticky top-0 z-50 flex bg-purple-400 py-4 px-8 text-slate-50">
      <div>
        <h1 className="text-5xl cursor-pointer" onClick={() => navigate("/")}>
          e-Bazaar
        </h1>
      </div>

      <nav className="ml-auto flex gap-6 ">
        <span
          onClick={() => navigate("/wishlist")}
          className="material-symbols-outlined text-3xl cursor-pointer"
        >
          favorite
        </span>
        <span className="wishlist-badge">{state.wishList.length}</span>

        <span
          onClick={() => navigate("/Cart")}
          className="material-symbols-outlined text-3xl cursor-pointer"
        >
          shopping_cart
        </span>
        <span className="cart-badge">{totalQty}</span>

        <div className="profile-wrapper">
          <span onClick={handleLoginClick} className="material-symbols-outlined profile-icon cursor-pointer">
            account_circle
          </span>
          <span className="tooltip">
            {
              token === 'OK' ? 'Click here to Log Out' : 'Login'
            }
          </span>
        </div>
      </nav>
    </header>
  );
};
