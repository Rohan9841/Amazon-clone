import SubtotalStyles from "../styles/SubtotalStyles";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvider";
import { useState } from "react";
import { getBasketTotal } from "./reducer";

const Subtotal = () => {

    const subtotalStyles = SubtotalStyles();

    const [{ basket }, dispatch] = useStateValue();
    const [totalPrice, setTotalPrice] = useState(0);

    return (
        <div className={subtotalStyles.subtotal}>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items):
                        <strong>{value}</strong>
                        </p>
                        <small className={subtotalStyles.subtotal_gift}>
                            <input
                                className={subtotalStyles.subtotal_input}
                                type="checkbox" />
                            This order contains a giftR
                    </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button className={subtotalStyles.subtotal_button}>Proceed to checkout</button>
        </div>
    );
}

export default Subtotal;