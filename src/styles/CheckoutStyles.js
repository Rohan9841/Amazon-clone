import { makeStyles } from "@material-ui/core";

const CheckoutStyles = makeStyles(theme => ({
    checkout: {
        display: 'flex',
        padding: '20px',
        backgroundColor: theme.palette.white.main,
        height: 'max-content'
    },

    checkout_ad: {
        width: '100%',
        marginBottom: '10px'
    },

    checkout_title: {
        marginRight: '10px',
        padding: '10px',
        borderBottom: '1px solid lightgray'
    }
}));

export default CheckoutStyles;