import React from 'react';

const Message = ({ text }) => {
  return(
    <div className="alert alert-success" role="alert">
      {text}
    </div>
  );
}

export default Message;
