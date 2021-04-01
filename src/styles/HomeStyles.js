import { makeStyles } from "@material-ui/core";

const HomeStyles = makeStyles(theme => ({
    home: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1500px'
    },
    home_image: {
        width: '100%',
        zIndex: '-1',
        marginBottom: '-150px',
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))'
    },
    home_row: {
        display: 'flex',
        zIndex: '1',
        marginLeft: '5px',
        marginRight: '5px',

    }
}))

export default HomeStyles;