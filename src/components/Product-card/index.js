export const ProductCard = ({ product }) => {
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
                            {product.price}
                            <span className="discount">(30% OFF)</span>
                        </p>
                    </div>
                    <div className="cta-btn">
                        <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                            <span className="material-symbols-outlined">
                                shopping_cart
                            </span>
                            Add To Cart
                        </button>

                        <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
                            <span className="material-symbols-outlined">
                                favorite
                            </span>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}