import React from 'react';
import CryptocurrencyForm from './CryptocurrencyForm';
import Quotation from './Quotation';
import Header from './Header';
import Footer from './Footer';

// Redux
import { Provider } from 'react-redux';
import store from '../store';

function Main() {

  return (
    <Provider store={store} >
      <div className="container">
        <Header />
        <div className="row justify-content-center">
          <CryptocurrencyForm />
        </div>
        <Quotation />
        <Footer />
      </div>
    </Provider>
  );
}

export default Main;
