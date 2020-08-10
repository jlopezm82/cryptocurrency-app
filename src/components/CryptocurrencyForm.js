import React, { useEffect, useState } from 'react';

import Error from './Error'
import useCurrency from '../hooks/useCurrency';
import useCryptocurrency from '../hooks/useCryptocurrency';
import { API_URL } from '../config';


function CryptocurrencyForm({ setCurrency, setCryptocurrency }) {

  // state cryptocurrencies list
  const [ cryptocurenciesList, setCryptocurrencies ] = useState([]);
  const [ error, setError ] = useState(false);

  const CURRENCIES = [
    { code: 'USD', name: 'United States Dollar' },
    { code: 'COP', name: 'Colombian Peso' },
    { code: 'MXN', name: 'Mexican Peso' },
    { code: 'EUR', name: 'Euro' }
  ];

  // use useCurrency
  const [ currency, SelectCurrency ] = useCurrency('Currency', '', CURRENCIES);

  // use useCryptocurrency
  const [ cryptocurrency, SelectCryptocurrency ] = useCryptocurrency('Criptocurrency', '', cryptocurenciesList);

  // call API
  useEffect(() => {
    const callAPI = async () => {
      const url = `${API_URL}/cryptocurrencies`;
      await fetch(url, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(response => {
        setCryptocurrencies(response)
      })
      .catch(error => console.log(error));
    }
    callAPI();
  }, []);

  const quoteCurrency = event => {
    event.preventDefault();

    if( currency === '' || cryptocurrency === '') {
      setError(true);
      return;
    }

    // pass data to main component
    setError(false);
    setCurrency(currency);
    setCryptocurrency(cryptocurrency);
  }

  return(
    <div className="col-md-6">
      <h3>Currencies</h3>
      <form onSubmit={quoteCurrency}>
        <div className="form-group">
          { error ? <Error message="You must select both" /> : null }
        </div>
        <div className="form-group">
          <SelectCurrency />
        </div>
        <div className="form-group">
          <SelectCryptocurrency />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Quote</button>
        </div>
      </form>
    </div>
  )
}

export default CryptocurrencyForm;
