const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    }
    if (!values.lastName) {
      errors.lastName = 'Required';
    }
    if(!values.country) {
      errors.country = 'Required';
    }
    if(!values.city) {
      errors.city = 'Required';
    }
    if(!values.address) {
      errors.address = 'Required';
    }
    if(!values.package) {
      errors.package = 'Required';
    }
    if(!values.cardNumber) {
      errors.cardNumber = 'Required';
    }
    if(!values.cardName) {
      errors.cardName = 'Required';
    }
    if(!values.cardCvc) {
      errors.cardCvc = 'Required';
    }
    if(!values.cardExpDate) {
      errors.cardExpDate = 'Required';
    }
    return errors;
  };
  
  export default validate;