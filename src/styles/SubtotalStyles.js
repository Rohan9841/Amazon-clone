import { makeStyles } from "@material-ui/core";

const SubtotalStyles = makeStyles(theme => ({
    subtotal: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '300px',
        height: '100px',
        padding: '20px',
        backgroundColor: theme.palette.grey.main,
        border: '1px solid #dddddd',
        borderRadius: '3px'
    },

    subtotal_gift: {
        display: 'flex',
        alignItems: 'center'
    },

    subtotal_input: {
        marginRight: '5px'
    },

    subtotal_button: {
        background: theme.palette.button.main,
        borderRadius: '2px',
        width: '100%',
        height: '30px',
        border: '1px solid',
        marginTop: '10px',
        borderColor: theme.palette.border.main,
        color: '#111'
    }

}))

export default SubtotalStyles;