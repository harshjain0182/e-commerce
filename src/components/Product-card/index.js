import { useNavigate } from "react-router-dom";
import { useCart } from "../../context"
import { findProducts } from "../../utils-function";
import { findProductsInWl } from "../../utils-function/findProductinWl";

export const ProductCard = ({ product }) => {

    const { state, cartDispatch } = useCart();

    const navigate = useNavigate()

    const isProductInCart = findProducts(state.cart, product.id);

    const oncartClick = () => {
        if (isProductInCart) {
            navigate('/Cart');
        }
        else {
            cartDispatch({
                type: "add_to_cart",
                payload: product
            })
        }
    }

    const isProductInWishlist = findProductsInWl(state.wishList, product.id);
    
    const onAddToWishlistClick = () => {
        if (isProductInWishlist) {
            navigate('/wishlist');
        }
        else {
            cartDispatch({
                type: "add_to_wishlist",
                payload: product
            })
        }
    }

    return (
        <>
            <div className="card card-vertical d-flex direction-column relative truncate">
                <div className="card-image-container relative">
                    <img className="card-image" src={product.images[0]} alt="card" />
                </div>
                <div className="card-details">
                    <div className="card-title">{product.title}</div>
                    <div className="card-description">
                        <p className="card-price">
                            ₹{product.price}
                            <span className="discount">(30% OFF)</span>
                        </p>
                    </div>
                    <div className="cta-btn">
                        <button onClick={oncartClick} className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                            <span className="material-symbols-outlined">
                                {isProductInCart ? "shopping_cart_checkout" : "shopping_cart"}
                            </span>
                            {isProductInCart ? 'Go to Cart' : 'Add to Cart'}
                        </button>

                        <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin" onClick={onAddToWishlistClick}>
                            <span className="material-symbols-outlined ">
                                favorite
                            </span>
                            {isProductInWishlist ? 'Go to Wishlist' : 'Add to Wishlist'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}