import userEvent from "@testing-library/user-event";
import CheckoutStyles from "../styles/CheckoutStyles";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

const Checkout = () => {

    const [{ basket, user }, dispatch] = useStateValue();

    const checkoutStyles = CheckoutStyles();

    return (
        <div className={checkoutStyles.checkout}>
            <div className={checkoutStyles.checkout_left}>
                <img
                    className={checkoutStyles.checkout_ad}
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._
                    CB423492668_.jpg"
                    alt=""
                />

                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className={checkoutStyles.checkout_title}>Your Shopping Basket</h2>

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}

                        />
                    ))}
                </div>
            </div>

            <div className={checkoutStyles.checkout_right}>
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;