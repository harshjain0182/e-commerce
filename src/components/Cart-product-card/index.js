import { findProductsInWl } from "../../utils-function/findProductinWl";
import { useCart } from "../../context";
import { useNavigate } from "react-router-dom";

export const CartProductCard = ({ product }) => {

  const navigate = useNavigate()

  const { cartDispatch, state } = useCart();

  const onRemoveClick = (id) => {
    cartDispatch({
      type: 'remove_from_cart',
      payload: id
    })
  }

  const onDecrementClick = (product) => {
    product.qty === 1 ? (cartDispatch({
      type: 'remove_from_cart',
      payload: product.id
    })) :
      (cartDispatch({
        type: 'decrement_click',
        payload: product.id
      }));
  }

  const onIncrementClick = (id) => {
    cartDispatch({
      type: 'increment_click',
      payload: id
    })
  }

  const isProductInWishlist = findProductsInWl(state.wishList, product.id);

  const onMoveToWishlistClick = (product) => {
    isProductInWishlist ? navigate('/wishlist') :
    cartDispatch({
      type: "add_to_wishlist",
      payload: product
    });

    cartDispatch({
      type: "remove_from_cart",
      payload: product.id
    });
  };

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
            ${product.price}
            <span className="discount padding-all-8">
              (30% OFF)
            </span>
          </p>
        </div>

        <div className="quantity-container d-flex gap">
          <p className="q-title">Quantity:</p>

          <div className="count-container d-flex align-center gap">
            <button className="count" onClick={() => onDecrementClick(product)}>-</button>
            <span className="count-value">{product.qty}</span>
            <button className="count" onClick={() => onIncrementClick(product.id)}>+</button>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="cta-btn d-flex gap">
            <button className=" button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin" onClick={() => onRemoveClick(product.id)}>
              Remove From Cart
            </button>
          </div>

          <div className="cta-btn d-flex gap">
            <button className=" button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin" onClick={() => onMoveToWishlistClick(product)}>
              Move to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
