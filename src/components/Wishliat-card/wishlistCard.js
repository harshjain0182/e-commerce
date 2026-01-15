import { findProducts } from "../../utils-function";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context";

export const WishlistProductCard = ({ product }) => {

  const navigate = useNavigate()

  const { cartDispatch, state } = useCart();

  const onRemoveClick = (id) => {
    cartDispatch({
      type: 'remove_from_wishlist',
      payload: id
    })
  }

  const isProductInCart = findProducts(state.cart, product.id);
  const onAddToCartClick = () => {
    isProductInCart? navigate('/Cart') :

    cartDispatch({
      type: "add_to_cart",
      payload: product
    });

    cartDispatch({
      type: 'remove_from_wishlist',
      payload: product.id
    })
  }
  return (

    <div className="card-horizontal d-flex shadow m-6">
      <div className="card-hori-image-container relative">
        <img
          className="card-image"
          src={product.images[0]}
          alt={product.title}
        />
      </div>

      <div className="card-details d-flex direction-column">

        <div className="card-description">
          <p className="card-des">{product.title}</p>

          <p className="card-price">
            ₹{product.price}
            <span className="discount padding-all-8">
              (30% OFF)
            </span>
          </p>
        </div>

        <div className="flex gap-2">
          <div className="cta-btn d-flex gap">
            <button className=" button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin" onClick={() => onRemoveClick(product.id)}>
              Remove From Wishlist
            </button>
          </div>

          <div className="cta-btn d-flex gap">
            <button className=" button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin" onClick={onAddToCartClick}>
              Move to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
