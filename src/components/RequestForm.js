import React, { useState, useEffect } from 'react';
import { API_URL } from '../config';
import Message from './Message';

// redux
import { useSelector } from 'react-redux';

const RequestForm = () => {

  // redux
  // get state
  const cryptocurrencyPrice = useSelector( state => state.cryptocurrencies.cryptocurrencyPrice );

  const [ fullName, setFullName ] = useState('');
  const [ identification, setIdentification ] = useState('');
  const [ birthday, setBirthday ] = useState('');
  const [ saved, setSaved ] = useState(false);

  const [ currency, setCurrency] = useState('');
  const [ quotedValue, setQuotedValue] = useState('');
  const [ cryptocurrency, setCryptocurrency] = useState('');

  useEffect(() => {
    setCurrency(cryptocurrencyPrice.currency);
    setQuotedValue(cryptocurrencyPrice.price);
    setCryptocurrency(cryptocurrencyPrice.code);
  }, [cryptocurrencyPrice] );

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRequest = {
      fullName: fullName,
      identification: identification,
      currency: currency,
      quotedValue: quotedValue,
      cryptocurrency: cryptocurrency,
      birthday: birthday
    };

    saveRequest(newRequest);

    event.currentTarget.reset();
  };

  const saveRequest = async(newRequest) => {
    const url = `${API_URL}/requests`;
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify(newRequest)
    })
    .then(response => response.json())
    .then((response) => {
      setSaved(true);
    })
    .catch(error => console.log(error));
  };

  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <h3 className="text-center mb-4 font-weight-bold">Request</h3>

          { saved ? <Message text="Request saved in http://localhost:3004/requests" /> : null }

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                className="form-control"
                placeholder="Enter full name"
                type="text"
                name="fullName"
                onChange={event => setFullName(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="identification">Identification</label>
              <input
                id="identification"
                className="form-control"
                placeholder="Enter identification"
                type="number"
                min="0"
                name="identification"
                onChange={event => setIdentification(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="currencySelected">Currency Selected</label>
              <input
                id="currencySelected"
                className="form-control"
                placeholder="--"
                type="text"
                value={currency || ''}
                name="currencySelected"
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="quotedValue">Quoted Value</label>
              <input
                id="quotedValue"
                className="form-control"
                placeholder="--"
                value={quotedValue || ''}
                type="text"
                name="quotedValue"
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="cryptocurrencySelected">Cryptocurrency Selected</label>
              <input
                id="cryptocurrencySelected"
                className="form-control"
                placeholder="--"
                type="text"
                value={cryptocurrency || ''}
                name="cryptocurrencySelected"
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="birthday">Birthday</label>
              <input
                id="birthday"
                className="form-control"
                type="date"
                name="birthday"
                onChange={event => setBirthday(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary d-block w-100">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RequestForm;
