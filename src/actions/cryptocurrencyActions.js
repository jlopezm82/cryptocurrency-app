import {
  START_DOWNLOAD_CRYPTOCURRENCIES,
  DOWNLOAD_CRYPTOCURRENCIES_SUCCESS,
  DOWNLOAD_CRYPTOCURRENCIES_ERROR,
  START_DOWNLOAD_CRYPTOCURRENCY_PRICE,
  DOWNLOAD_CRYPTOCURRENCY_PRICE_SUCCESS,
  DOWNLOAD_CRYPTOCURRENCY_PRICE_ERROR
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

export function getCryptocurrencyPriceByCurrencyAction(currency, cryptocurrency) {
  return async (dispatch) => {
    dispatch( downloadCryptocurrencyPriceByCurrency() );
    try {
      const url = `${API_URL}/prices?code=${cryptocurrency}&currency=${currency}`;
      await fetch(url, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(response => {
        //setResult(response[0])
        dispatch( downloadCryptocurrencyPriceSuccess(response[0]) );
      })
      .catch(error => dispatch( downloadCryptocurrencyPriceError() ) );
    } catch (error) {
      dispatch( downloadCryptocurrencyPriceError() );
    }
  }
}

const downloadCryptocurrencyPriceByCurrency = () => ({
  type: START_DOWNLOAD_CRYPTOCURRENCY_PRICE,
  payload: true
});

const downloadCryptocurrencyPriceSuccess = (cryptocurrency) => ({
  type: DOWNLOAD_CRYPTOCURRENCY_PRICE_SUCCESS,
  payload: cryptocurrency
});

const downloadCryptocurrencyPriceError = () => ({
  type: DOWNLOAD_CRYPTOCURRENCY_PRICE_ERROR,
  payload: true
});
