import { makeStyles } from "@material-ui/core";

const PaymentStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'white',

        '& h1': {
            textAlign: 'center',
            padding: '10px',
            fontWeight: '400',
            backgroundColor: 'rgb(234, 237, 237)',
            borderBottom: '1px solid lightgray',

            '& a': {
                textDecoration: 'none'
            }
        }
    },

    section: {
        display: 'flex',
        padding: '20px',
        margin: '0 20px',
        borderBottom: '1px solid lightgray'
    },

    title: {
        flex: '0.2'
    },

    address: {
        flex: '0.8'
    },

    items: {
        flex: '0.8'
    },

    details: {
        flex: '0.8'
    },

    priceContainer: {

    }
}))

export default PaymentStyles;