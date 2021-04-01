import { makeStyles } from "@material-ui/core";

const CheckoutProductStyles = makeStyles(theme => ({

    root: {
        display: 'flex',
        marginTop: '20px',
        marginBottom: '20px',
    },

    info: {
        paddingLeft: '20px'
    },

    btn: {
        background: theme.palette.button.main,
        border: '1px solid',
        marginTop: '10px',
        borderColor: theme.palette.border.main,
        color: '#111'
    },

    image: {
        width: '180px',
        height: '180px',
        objectFit: 'contain'
    },

    rating: {
        display: 'flex'
    },

    title: {
        fontSize: '17px',
        fontWeight: '700'
    }

}))

export default CheckoutProductStyles;