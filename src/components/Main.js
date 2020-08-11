import React, { useState, useEffect } from 'react';
import CryptocurrencyForm from './CryptocurrencyForm';
import Quotation from './Quotation';
import Header from './Header';
import Footer from './Footer';
import RequestForm from './RequestForm';
import { API_URL } from '../config';

// Redux
import { Provider } from 'react-redux';
import store from '../store';

function Main() {

  const [ currency, setCurrency ] = useState('');
  const [ cryptocurrency, setCryptocurrency ] = useState('');
  const [ result, setResult ] = useState({});

  useEffect(() => {

    const quoteCurrency = async () => {
      // prevent first execution
      if( currency === '' ) return;

      const url = `${API_URL}/prices?code=${cryptocurrency}&currency=${currency}`;
      await fetch(url, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(response => {
        setResult(response[0])
      })
      .catch(error => console.log(error));
    }

    quoteCurrency();

  }, [currency, cryptocurrency]);

  return (
    <Provider store={store} >
      <div className="container">
        <Header />
        <div className="row">
          <CryptocurrencyForm
            setCurrency={setCurrency}
            setCryptocurrency={setCryptocurrency}
          />
        </div>
        <div className="row">
          <Quotation result={result} />
        </div>
        <div className="row">
          { result.price ? <RequestForm currency={currency} quotedValue={result.price} cryptocurrency={cryptocurrency} /> : null }
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default Main;
