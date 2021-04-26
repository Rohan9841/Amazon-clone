import { useState } from "react";
import { db } from "../firebase";
import OrdersStyles from "../styles/OrdersStyles";
import { useStateValue } from "./StateProvider";

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [{ basket, user }, dispatch] = useStateValue();

    const ordersStyles = OrdersStyles();

    useEffect(() => {
        if (user) {
            db.collection('users')
                .doc(user?.uid)
                .collections('orders')
                .orderBy('created', 'desc')
            onSnapshot(snapshot => (
                setOrders(snapshot.docs.maps(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        } else {
            setOrders([]);
        }
        return () => {
            console.log('cleanup in Orders.js');
        }
    }, [input])

    return (
        <div className={ordersStyles.orders}>
            <h1>Your Orders</h1>
            <div className={ordersStyles.order}>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    );
}

export default Orders;