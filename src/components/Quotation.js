import React from 'react';

const Quotation = ({ result }) => {

  if( Object.keys(result).length === 0) return null;

  return(
    <div className="alert alert-primary" role="alert">
      The Price is: {result.price}
    </div>
  );
}

export default Quotation;
