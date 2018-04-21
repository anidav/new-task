import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../common/validate';
import renderInputField from '../common/renderInputField';
// import { Link } from 'react-router-dom';
     

class Step3 extends Component { 
    showResults(values) {
        console.log(`You have registered as:\n\n${JSON.stringify(values, null, 2)}`);          
    }   
    
    render() {
    const { handleSubmit, previousPage, pristine, submitting} = this.props;    
    return (
        <div className="fieldset">
            <p className="steps">Step 3 / 3</p>
            <form onSubmit={handleSubmit(values => this.showResults(values))}>
                <Field
                    name="cardNumber"
                    type="number"
                    className="field"
                    component={renderInputField}
                    label="Credit Card Number..."
                />
                <Field
                    name="cardName"
                    type="text"
                    className="field"
                    component={renderInputField}
                    label="Credit Card Name..."
                />
                <Field
                    name="cardCvc"
                    type="number"
                    className="field"
                    component={renderInputField}
                    label="Credit Card Cvc..."
                />
                <Field
                    name="cardExpDate"
                    type="date"
                    className="field"
                    component={renderInputField}
                    label="Credit Card Expiration Date..."
                />
                <div className="button_div">
                    <button type="button" className="button_item" onClick={previousPage}>
                        Previous
                    </button>  
                    {/* <Link to ="/success">                 */}
                    <button type="submit" className="button_item" disabled={pristine || submitting}>
                        Sign Up
                    </button>   
                    {/* </Link>                           */}
                </div>
            </form>        
        </div>
    )
}
}
export default reduxForm({
    form: 'wizard', 
    destroyOnUnmount: false, 
    forceUnregisterOnUnmount: true, 
    validate,
})(Step3);

