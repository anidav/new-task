import React from 'react';
// import { Field, reduxForm } from 'redux-form';

const renderSelectField = field => (
  <div>
    <select {...field.input} placeholder={label}/>
    {field.touched && field.error && <div className="error">{field.error}</div>}
  </div>
);
export default renderSelectField;