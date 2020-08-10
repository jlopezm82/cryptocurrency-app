import React, { Fragment, useState } from 'react';

const useCurrency = (label, initialState, options) => {
  //State custom hook
  const [state, setState] = useState(initialState);

  const Select = () => (
    <Fragment>
      <label>{label}</label>
      <select
        className="form-control"
        onChange={ event => setState(event.target.value) }
        value={state}>

        <option value="">- Select one -</option>
        {
          options.map( option => (
            <option key={option.code} value={option.code}>{option.name}</option>
          ))
        }
      </select>
    </Fragment>
  );

  // Return state, interface and fucntion to modify state
  return [state, Select, setState];
}

export default useCurrency;
