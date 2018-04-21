import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import '../registration/registration.css';

export default class Success extends Component {
  
    render() {
        return (
            <div className="fieldset">
                <div className="congrats">
                    <h2>Congratulations!</h2>
                    <h3>You have been successfully registered!</h3>   
                    {/* <p>Click to <em><ins>Start</ins></em> button for <em><ins>Home page</ins></em></p>                     
                </div> 
                <button className="button_item">Start</button>                                      */}
                </div>
            </div>
        );
    }
}
