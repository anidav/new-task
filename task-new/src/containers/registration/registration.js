import React, { Component } from 'react';
import './registration.css';
import Step1 from '../steps/step1';
import Step2 from '../steps/step2';
import Step3 from '../steps/step3';
// import Success from '../steps/success';
// import {connect} from 'react-redux';
// import registrationAction from '../../actions/registrationAction';

class RegistrationContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            step : 1
        }
    }
    
    nextPage = () => {          
        this.setState({ step: this.state.step + 1 })                  
    }

    previousPage = () => {
        this.setState({ step: this.state.step - 1 })      
    }     

    render() {
        const {step} =this.state;
        return (
            <div>
                {step === 1 && <Step1 onSubmit = {this.nextPage} /> }
                {step === 2 && <Step2 onSubmit = {this.nextPage} previousPage = {this.previousPage} /> }
                {step === 3 && <Step3 previousPage = {this.previousPage} registrationAction={this.props.registrationAction}/> }
                {/* {step === 4 && <Success />}             */}
            </div>
        );
    }
}
  
  export default RegistrationContainer;
  
// const matchDispatchToProps = dispatch =>({
//     // getCountriesAction: () => dispatch(getCountriesAction()),
//     registrationAction: (data) => dispatch(registrationAction(data)),
//     dispatch
// });

// export default connect(null, matchDispatchToProps)(RegistrationContainer);

