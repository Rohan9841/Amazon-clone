import { makeStyles } from "@material-ui/core";

const HeaderStyles = makeStyles(theme => ({
    header: {
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.black.main,
        position: 'sticky',
        top: '0',
        zIndex: '100'
    },
    header_logo: {
        width: '100px',
        objectFit: 'contain',
        margin: '0 20px',
        marginTop: '18px'
    },
    header_search: {
        display: 'flex',
        flex: '1',
        alignItems: 'center',
        borderRadius: '24px'
    },
    header_searchInput: {
        height: '12px',
        padding: '10px',
        border: 'none',
        width: '100%'
    },
    header_searchIcon: {
        padding: '5px',
        backgroundColor: theme.palette.yellow.main,
        height: '22px !important'
    },
    header_nav: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    header_option: {
        color: theme.palette.white.main,
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '10px',
        marginRight: '10px',
    },
    header_optionLineOne: {
        fontSize: '10px'
    },
    header_optionLineTwo: {
        fontSize: '13px',
        fontWeight: '800'
    },
    header_optionBasket: {
        color: theme.palette.white.main,
        display: 'flex',
        alignItems: 'center'
    },
    header_basketCount: {
        marginLeft: '10px',
        marginRight: '10px'
    }

}));

export default HeaderStyles;