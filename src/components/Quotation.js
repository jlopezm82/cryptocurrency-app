import React from 'react';
import { useSelector } from 'react-redux';
import RequestForm from './RequestForm';

const Quotation = () => {

  // redux get state
  const cryptocurrencyPrice = useSelector( state => state.cryptocurrencies.cryptocurrencyPrice );

  if( Object.keys(cryptocurrencyPrice).length === 0) return null;

  return(
    <>
      <div className="row justify-content-center mt-3">
        <div className="col-md-6">
          <div className="alert alert-primary" role="alert">
            The Price is: {cryptocurrencyPrice.price}
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <RequestForm />
      </div>
    </>
  );
}

export default Quotation;
