import React, { useEffect, useState } from 'react';

import Error from './Error'
import useCurrency from '../hooks/useCurrency';
import useCryptocurrency from '../hooks/useCryptocurrency';


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
      const url = 'http://localhost:3004/cryptocurrencies';
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
    <form
      onSubmit={quoteCurrency}>
      <div>
        { error ? <Error message="You must select both" /> : null }
      </div>

      <SelectCurrency />

      <SelectCryptocurrency />

      <div className="row">
        <div className="col-md">
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Quote</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default CryptocurrencyForm;
