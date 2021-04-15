import { Link, useHistory } from "react-router-dom";
import PaymentStyles from "../styles/PaymentStyles";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from './StateProvider';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from './axios';

const Payment = () => {

    const paymentStyles = PaymentStyles();
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {

        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'POST',

                //stripe expects the total in a currenices subunits (change dollar to cents by multiplying by 100)
                //? is used as a query parameter
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
        return () => {
            console.log('cleanup in Payment.js');
        }
    }, [basket])

    const handleSubmit = async (e) => {
        e.preventDefault();

        //do all the fancy stripe stuff
        setProcessing(true);


        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent == payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace('/ordersS')
        })
    }

    const handleChange = (e) => {
        //Listen for the changes int the CardElement
        //and display any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className={paymentStyles.root}>
            <h1>Checkout ({<Link to="/checkout">{basket?.length} items</Link>})</h1>

            <div className={paymentStyles.section}>
                <div className={paymentStyles.title}>
                    <h3>Delivery Address</h3>
                </div>
                <div className={paymentStyles.address}>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>

            <div className={paymentStyles.section}>
                <div className={paymentStyles.title}>
                    <h3>Review items and delivery</h3>
                </div>
                <div className={paymentStyles.items}>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className={paymentStyles.section}>
                <div className={paymentStyles.title}>
                    <h3>Payment Method</h3>
                </div>
                <div className={paymentStyles.details}>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />
                        <div className={paymentStyles.priceContainer}>
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </div>

                        {/* errror */}
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Payment;