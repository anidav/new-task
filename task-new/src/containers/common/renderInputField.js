import React from 'react';

const renderInputField = ({ input, label, className, type, meta: { touched, error } }) => (
  <div> 
    <p>{touched && error && <span>{error}</span>}</p> 
    <input {...input} placeholder={label} type={type} className={className}/>      
  </div>
);

export default renderInputField;
