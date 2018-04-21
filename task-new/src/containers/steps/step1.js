import React, {Component} from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import validate from '../common/validate';
import { connect } from 'react-redux';
import renderInputField from '../common/renderInputField';
import * as countries from '../../shared/countries';
import * as states from '../../shared/states';

class Step1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showStatesSelect: false,
            countryStates: undefined
        }         
    }
    
    renderSelectOptions = (arr) => {    
        return arr.map((value, index) => {  
            return <option value = {value.code} key ={index}>{value.name}</option>;    
        })
    };
    
    onCountryChange = (event) => {
        const statesList = states.states[event.target.value];
        // console.log(statesList);
        if(statesList) {
            this.setState({
                countryStates: statesList,
                showStatesSelect : true
            });
        } 
        else {
            this.props.change('state', "");
            this.setState({
                showStatesSelect : false,
                countryStates : undefined                
            });
        }   
    }
    render() {

    const { handleSubmit, countryStates} = this.props;
    return (        
        <div className="fieldset">
            <p className="steps">Step 1 / 3 </p>
            <form onSubmit={handleSubmit}>
                <Field
                    name="firstName"
                    type="text"
                    className="field"
                    component={renderInputField}
                    label="First Name..."
                />
                <Field
                    name="lastName"
                    type="text"
                    className="field"
                    component={renderInputField}
                    label="Last Name..."
                />
                <Field
                    name="country"
                    className="field"
                    component="select" 
                    onChange={this.onCountryChange}                 
                >                
                    <option value="">Select Country</option>                              
                    {this.renderSelectOptions(countries.countries)}   
                </Field>
                {this.state.showStatesSelect &&  <Field 
                    name="state"
                    className="field"
                    component="select"                           
                >                
                    <option value="">Select State</option>                              
                    {this.renderSelectOptions(this.state.countryStates)} 
                </Field> 
                }              
                <Field
                    name="city"
                    type="text"
                    className="field"
                    component={renderInputField}
                    label="City..."
                />
                <Field
                    name="address"
                    type="text"
                    className="field"
                    component={renderInputField}
                    label="Address..."
                />
                <Field
                    name="address2"
                    type="text"
                    className="field"
                    component={renderInputField}
                    label="Address2..."
                />
                <Field
                    name="legal"
                    className="field"
                    component="select"
                    label="legal..."
                >
                    <option value="company">Company</option>
                    <option value="individual">Individual</option>
                </Field>
                <div className="button_div">
                    <button type="submit" onClick={this.props.getCountries} className="button_item">Next</button>
                </div>
            </form>
        </div>
    );
};
}
Step1 =  reduxForm({
    form: 'wizard', 
    destroyOnUnmount: false, 
    forceUnregisterOnUnmount: true, 
    validate,
})(Step1);

const selector = formValueSelector('wizard') 

Step1 = connect(state => {
    const countryStates = selector(state, 'state')  
    return {
        countryStates
    }
})(Step1);

export default Step1;