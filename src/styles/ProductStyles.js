import { makeStyles } from "@material-ui/core";

const ProductStyles = makeStyles(theme => ({
    product: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: '10px',
        padding: '20px',
        width: '100%',
        maxHeight: '400px',
        minWidth: '100px',
        backgroundColor: theme.palette.white.main,
        zIndex: '1'
    },

    product_info: {
        height: '100px',
        marginBottom: '15px'
    },

    product_price: {
        marginTop: '5px'
    },

    product_rating: {
        display: 'flex'
    },

    product_image: {
        maxHeight: '200px',
        width: '100%',
        objectFit: 'contain',
        marginBottom: '15px'
    },

    product_button: {
        background: theme.palette.button.main,
        border: '1px solid',
        marginTop: '10px',
        borderColor: theme.palette.border.main,
        color: '#111'
    }
}))

export default ProductStyles;