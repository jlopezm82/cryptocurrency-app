import React, { useState, useEffect } from 'react';
import CryptocurrencyForm from './CryptocurrencyForm';
import Quotation from './Quotation';
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
      <div className="row">
        <div className="col-md">
          <h1>Hello cryptocurrency app</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <CryptocurrencyForm
            setCurrency={setCurrency}
            setCryptocurrency={setCryptocurrency}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Quotation result={result} />
        </div>
      </div>
    </div>
  );
}

export default Main;
