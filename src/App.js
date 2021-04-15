import { MuiThemeProvider } from '@material-ui/core';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Images from './components/Image/Images';
import UploadImage from './components/Image/UploadImage';
import theme from './utils/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Login from './components/Auth/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51IgVirDuKBO4v6MwtHEbC2ICyv9pmNgOj1jGT6MDI18pWppFbHyOszuwiQgleXoMFzRj3QEP5y8pNUhtoSwx7sm700vRiUwlvd");

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads...
    //will check if the user logs in or logs out
    auth.onAuthStateChanged(authUser => {
      console.log('User is >>> ', authUser);
      if (authUser) {
        //the user just logged in or was logged in
        // console.log('Auth user is found when logging in. Value is: ', authUser)
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //user is logged out
        // console.log('There is no Auth user when logging in')
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    // return () => {
    //   console.log('cleanup in app.js');
    // }
  }, [])

  return (
    <Router>
      <div className="app">
        <MuiThemeProvider theme={theme}>

          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
            {/* <UploadImage /> */}
            {/* <Images /> */}
          </Switch>

        </MuiThemeProvider>
      </div>
    </Router >
  );
}

export default App;