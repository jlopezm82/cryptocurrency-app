import React, { useState, useEffect } from 'react';
import CryptocurrencyForm from './CryptocurrencyForm';
import Quotation from './Quotation';
import Header from './Header';
import Footer from './Footer';
import { API_URL } from '../config';

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
      <Footer />
    </div>
  );
}

export default Main;
