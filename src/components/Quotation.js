import React from 'react';

const Quotation = ({ result }) => {

  if( Object.keys(result).length === 0) return null;

  return(
    <div className="col-md-6">
      <div className="alert alert-primary" role="alert">
        The Price is: {result.price}
      </div>
    </div>
  );
}

export default Quotation;
