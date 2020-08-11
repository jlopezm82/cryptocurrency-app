import {
  START_DOWNLOAD_CRYPTOCURRENCIES,
  DOWNLOAD_CRYPTOCURRENCIES_SUCCESS,
  DOWNLOAD_CRYPTOCURRENCIES_ERROR
} from '../types';

// each reducer has his own state
const initialState = {
  cryptocurrencies: [],
  error: null,
  loading: false
}

export default function( state = initialState, action ) {
  switch( action.type ) {
    case START_DOWNLOAD_CRYPTOCURRENCIES:
      return {
        ...state,
        loading: action.payload
      }
    case DOWNLOAD_CRYPTOCURRENCIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        cryptocurrencies: action.payload
      }
    case DOWNLOAD_CRYPTOCURRENCIES_ERROR:
    return {
      ...state,
      loading: false,
      error: action.payload
    }
    default:
      return state;
  }
}
