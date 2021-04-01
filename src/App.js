import { MuiThemeProvider } from '@material-ui/core';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Images from './components/Image/Images';
import UploadImage from './components/Image/UploadImage';
import theme from './utils/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <div className="app">
        <MuiThemeProvider theme={theme}>
          <Header />
          <Switch>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            {/* <UploadImage /> */}
            {/* <Images /> */}
          </Switch>

        </MuiThemeProvider>
      </div>
    </Router>
  );
}

export default App;