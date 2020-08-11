import {
  START_DOWNLOAD_CRYPTOCURRENCIES,
  DOWNLOAD_CRYPTOCURRENCIES_SUCCESS,
  DOWNLOAD_CRYPTOCURRENCIES_ERROR
} from '../types';
import { API_URL } from '../config';

export function getCryptocurrenciesAction() {
  return async (dispatch) => {
    dispatch( downloadCryptocurrencies() );
    try {
      const url = `${API_URL}/cryptocurrencies`;
      await fetch(url, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(response => {
        dispatch( downloadCryptocurrenciesSuccess(response) );
      })
      .catch(error => dispatch( downloadCryptocurrenciesError() ));
    } catch (error) {
      console.log('catch getCryptocurrenciesAction');
      dispatch( downloadCryptocurrenciesError() );
    }
  }
}

const downloadCryptocurrencies = () => ({
  type: START_DOWNLOAD_CRYPTOCURRENCIES,
  payload: true
});

const downloadCryptocurrenciesSuccess = (cryptocurrencies) => ({
  type: DOWNLOAD_CRYPTOCURRENCIES_SUCCESS,
  payload: cryptocurrencies
});

const downloadCryptocurrenciesError = () => ({
  type: DOWNLOAD_CRYPTOCURRENCIES_ERROR,
  payload: true
});
