import CheckoutProductStyles from "../styles/CheckoutProductStyles";
import { useStateValue } from "./StateProvider";


const CheckoutProduct = ({ id, image, title, price, rating }) => {

    const checkoutProductStyles = CheckoutProductStyles();

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }
    return (
        <div className={checkoutProductStyles.root}>
            <img
                className={checkoutProductStyles.image}
                src={image}
                alt=""
            />

            <div className={checkoutProductStyles.info}>
                <p className={checkoutProductStyles.title}>{title}</p>
                <p className={checkoutProductStyles.price}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className={checkoutProductStyles.rating}>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket} className={checkoutProductStyles.btn}>Remove from basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;