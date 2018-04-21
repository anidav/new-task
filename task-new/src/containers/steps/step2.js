import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../common/validate';

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

class Step2 extends Component {
  render() {
  const { handleSubmit, previousPage } = this.props;
  return (
    <div className="fieldset">
      <p className="steps">Step 2 / 3</p>
      <div className="package">
        <form onSubmit={handleSubmit}>            
          <div>
            <label>
              <Field name="package" component="input" type="radio" value="standard" />
              {' '}
              Standard
            </label>
            <label>
              <Field name="package" component="input" type="radio" value="premium" />
              {' '}
              Premium
            </label>
            <Field name="package" component={renderError} />
          </div>    
          <div className="button_div">
            <button type="button" className="button_item" onClick={previousPage}>
              Previous
            </button>
            <button type="submit" className="button_item">Next</button>
          </div>
          </form>
        </div>
    </div>
  );
};
}
export default reduxForm({
  form: 'wizard', 
  destroyOnUnmount: false, 
  forceUnregisterOnUnmount: true, 
  validate,
})(Step2);

