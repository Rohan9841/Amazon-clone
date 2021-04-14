import React from 'react'
import HeaderStyles from '../styles/HeaderStyles';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from '../firebase';

const Header = () => {

    const headerStyles = HeaderStyles();

    const [state, { user }, dispatch] = useStateValue();

    console.log("value of user before handleAuthentication: ", user);

    const handleAuthentication = () => {

        if (user) {
            auth.signOut();
            console.log("User has been signed out.");
        } else {
            console.log('There is no user to sign out. Current value of user is: ', user);
        }
    }
    return (
        <div className={headerStyles.header}>
            <Link to="/">
                <img
                    className={headerStyles.header_logo}
                    src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                />
            </Link>
            <div className={headerStyles.header_search}>
                <input className={headerStyles.header_searchInput} type="text" />
                <SearchIcon className={headerStyles.header_searchIcon} />
            </div>

            <div className={headerStyles.header_nav}>
                <Link to={!user && '/login'}>
                    <div className={headerStyles.header_option} onClick={handleAuthentication}>
                        <span className={headerStyles.header_optionLineOne}>Hello Guest</span>
                        <span className={headerStyles.header_optionLineTwo}>{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <div className={headerStyles.header_option}>
                    <span className={headerStyles.header_optionLineOne}>Returns</span>
                    <span className={headerStyles.header_optionLineTwo}>& Orders</span>
                </div>
                <div className={headerStyles.header_option}>
                    <span className={headerStyles.header_optionLineOne}>Your</span>
                    <span className={headerStyles.header_optionLineTwo}>Prime</span>
                </div>
            </div>

            <Link to="/checkout">
                <div className={headerStyles.header_optionBasket}>
                    <ShoppingBasketIcon />
                    <span className={clsx(headerStyles.header_optionLineTwo, headerStyles.header_basketCount)}>{state.basket?.length}</span>
                </div>
            </Link>
        </div>
    )
}

export default Header
