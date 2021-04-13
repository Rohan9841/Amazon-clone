import { makeStyles } from "@material-ui/core";

const LoginStyles = makeStyles(theme => ({

    root: {
        backgroundColor: 'white',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    logo: {
        objectFit: 'contain',
        width: '100px',
        // marginRight: 'auto',
        // marginLeft: 'auto',
        marginLeft: '20px',
        marginTop: '20px',
        marginRight: 'auto',
        marginLeft: 'auto'
    },

    loginContainer: {
        width: '300px',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '5px',
        border: '1px solid lightgray',
        padding: '20px',

        '& h1': {
            fontWeight: '500',
            marginBottom: '20px'
        }
    },

    form: {
        '& h5': {
            marginBottom: '5px',
        },

        '& input': {
            height: '30px',
            marginBottom: '10px',
            backgroundColor: 'white',
            width: '98%'
        },

        '& p': {
            marginTop: '15px',
            fontSize: '12px'
        }
    },

    signInButton: {
        background: theme.palette.button.main,
        borderRadius: '2px',
        width: '100%',
        height: '30px',
        border: '1px solid',
        marginTop: '10px',
        borderColor: theme.palette.border.main

    },

    createAccountButton: {
        borderRadius: '2px',
        width: '100%',
        height: '30px',
        border: '1px solid',
        marginTop: '10px',
        borderColor: 'darkgray'
    }


}))

export default LoginStyles;