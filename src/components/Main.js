import React from 'react';
import CryptocurrencyForm from './CryptocurrencyForm';
import Quotation from './Quotation';
import Header from './Header';
import Footer from './Footer';
import RequestForm from './RequestForm';

// Redux
import { Provider } from 'react-redux';
import store from '../store';

function Main() {

  return (
    <Provider store={store} >
      <div className="container">
        <Header />
        <div className="row">
          <CryptocurrencyForm />
        </div>
        <div className="row">
          <Quotation />
        </div>
        <div className="row">
          <RequestForm />
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default Main;
