import React, { useEffect, useState } from 'react';

import Error from './Error'
import useCurrency from '../hooks/useCurrency';
import useCryptocurrency from '../hooks/useCryptocurrency';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getCryptocurrenciesAction } from '../actions/cryptocurrencyActions';

function CryptocurrencyForm({ setCurrency, setCryptocurrency }) {

  const [ error, setError ] = useState(false);

  const CURRENCIES = [
    { code: 'USD', name: 'United States Dollar' },
    { code: 'COP', name: 'Colombian Peso' },
    { code: 'MXN', name: 'Mexican Peso' },
    { code: 'EUR', name: 'Euro' }
  ];

  // use useCurrency
  const [ currency, SelectCurrency ] = useCurrency('Currency', '', CURRENCIES);

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

  /** TODO
   *  implementing Redux
   * */
  const dispatch = useDispatch();

  useEffect( () => {
    // Call API
    const loadCryptocurrencies = () => dispatch( getCryptocurrenciesAction() );
    loadCryptocurrencies();
  }, [] );

  // get state
  const cryptocurrencies = useSelector( state => state.cryptocurrencies.cryptocurrencies );
  // use useCryptocurrency
  const [ cryptocurrency, SelectCryptocurrency ] = useCryptocurrency('Criptocurrency', '', cryptocurrencies);

  const errorCallingAPI = useSelector( state => state.cryptocurrencies.error );
  const loading = useSelector( state => state.cryptocurrencies.loading );

  return(
    <div className="col-md-6">
      <h3>Currencies</h3>

      { errorCallingAPI ? <p className="font-weight-bold alert alert-danger text-center mt-4">There was an error calling API</p> : null }

      { loading ? <p className="text-center">Loading...</p> : null }

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
