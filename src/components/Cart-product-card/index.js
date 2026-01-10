
import { useCart } from "../../context";

export const CartProductCard = ({product}) => {

    const {cartDispatch} = useCart();

    const onRemoveClick = (id) =>{
        cartDispatch({
            type: 'remove_from_cart',
            payload: id
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
            ${product.price}
            <span className="discount padding-all-8">
              (30% OFF)
            </span>
          </p>
        </div>

        <div className="quantity-container d-flex gap">
          <p className="q-title">Quantity:</p>

          <div className="count-container d-flex align-center gap">
            <button className="count">-</button>
            <span className="count-value">1</span>
            <button className="count">+</button>
          </div>
        </div>

        <div className="flex gap-2">
            <div className="cta-btn d-flex gap">
          <button className=" button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin" onClick={() => onRemoveClick(product.id)}>
            Remove From Cart
          </button>
        </div>

        <div className="cta-btn d-flex gap">
          <button className=" button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin">
            Move to Wishlist
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};
