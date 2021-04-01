import ProductStyles from "../styles/ProductStyles";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, image, price, rating }) => {

    const productStyles = ProductStyles();

    const [state, dispatch] = useStateValue();

    console.log("this is the basket >>> ", state.basket);
    const addToBasket = () => {
        // dispatch the item to the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className={productStyles.product}>
            <div className={productStyles.product_info}>
                <p>{title}</p>
                <p className={productStyles.product_price}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className={productStyles.product_rating}>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>⭐</p>
                        ))}
                </div>
            </div>

            <img
                className={productStyles.product_image}
                src={image}
                alt=""
            />
            <button onClick={addToBasket} className={productStyles.product_button}>Add to Basket</button>
        </div>
    );
}

export default Product;