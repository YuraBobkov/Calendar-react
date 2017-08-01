import React from 'react';

const Input = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <input className="form-control" {...input} type={type} />
    <div className="error">
      {touched ? error : ''}
    </div>
  </div>
);

export default Input;