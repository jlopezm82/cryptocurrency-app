import React, { useEffect, useState } from 'react';

import Error from './Error'
import useCurrency from '../hooks/useCurrency';
import useCryptocurrency from '../hooks/useCryptocurrency';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getCryptocurrenciesAction, getCryptocurrencyPriceByCurrencyAction } from '../actions/cryptocurrencyActions';

function CryptocurrencyForm() {

  const CURRENCIES = [
    { code: 'USD', name: 'United States Dollar' },
    { code: 'COP', name: 'Colombian Peso' },
    { code: 'MXN', name: 'Mexican Peso' },
    { code: 'EUR', name: 'Euro' }
  ];

  const [ error, setError ] = useState(false);

  // get state
  const cryptocurrencies = useSelector( state => state.cryptocurrencies.cryptocurrencies );
  const errorCallingAPI = useSelector( state => state.cryptocurrencies.error );
  const loading = useSelector( state => state.cryptocurrencies.loading );

  // use useCryptocurrency
  const [ cryptocurrency, SelectCryptocurrency ] = useCryptocurrency('Criptocurrency', '', cryptocurrencies);
  // use useCurrency
  const [ currency, SelectCurrency ] = useCurrency('Currency', '', CURRENCIES);

  const dispatch = useDispatch();

  const getCryptocurrencyPriceByCurrency = (currency, cryptocurrency) => dispatch( getCryptocurrencyPriceByCurrencyAction(currency, cryptocurrency) );

  const quoteCurrency = event => {
    event.preventDefault();

    if( currency === '' || cryptocurrency === '') {
      setError(true);
      return;
    }

    setError(false);

    getCryptocurrencyPriceByCurrency(currency, cryptocurrency);
  }

  useEffect( () => {
    // Call API
    const loadCryptocurrencies = () => dispatch( getCryptocurrenciesAction() );
    loadCryptocurrencies();
  }, [] );

  return(
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h3 className="text-center mb-4 font-weight-bold">Currencies</h3>

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
              <button type="submit" className="btn btn-primary d-block w-100">Quote</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CryptocurrencyForm;
