import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from '../../components/navigation/navigation';
import Title from '../../components/title/title';
import RegistrationContainer from './../registration/registration';
import Success from '../steps/success';
// import { Values } from "redux-form-website-template";

export default class App extends Component {
    render() {
        return (
            <div>
                <Navigation />        
                <Title />     
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={ RegistrationContainer }  />
                        <Route path="/success" component={Success} />
                    </div>
                </BrowserRouter>
                {/* <Values form="wizard" /> */}
            </div>
        )
    }
}