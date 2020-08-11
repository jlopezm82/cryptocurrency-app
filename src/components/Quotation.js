import React from 'react';
import { useSelector } from 'react-redux';

const Quotation = () => {

  // redux get state
  const cryptocurrencyPrice = useSelector( state => state.cryptocurrencies.cryptocurrencyPrice );

  if( Object.keys(cryptocurrencyPrice).length === 0) return null;

  return(
    <div className="col-md-6">
      <div className="alert alert-primary" role="alert">
        The Price is: {cryptocurrencyPrice.price}
      </div>
    </div>
  );
}

export default Quotation;
