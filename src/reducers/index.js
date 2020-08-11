import { combineReducers } from 'redux';
import cryptocurrenciesReducer from './cryptocurrenciesReducer';

export default combineReducers({
  cryptocurrencies: cryptocurrenciesReducer
});
