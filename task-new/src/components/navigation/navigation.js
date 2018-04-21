import React, { Component } from 'react';
import './navigation.css';
import facebook from './../../assets/logos/facebook_logo.png';
import twitter from './../../assets/logos/twitter_logo.png';
import mail from './../../assets/logos/mail_logo.png';
import skype from './../../assets/logos/skype_logo.png';

export default class Navigation extends Component {
    render() {        
        return (
            <nav className="navigation">
                <div>
                    <a className="register" href="/">register</a>           
                </div>
                <div className="logos">
                    <a href="https://www.facebook.com/">
                        <img className="logo" src={facebook} alt="facebook_logo" />
                    </a>
                    <a href="https://twitter.com">
                        <img className="logo" src={twitter} alt="twitter_logo" />
                    </a>
                    <a href="https://mail.ru">
                        <img className="logo" src={mail} alt="mail_logo" />
                    </a>
                    <a href="https://www.skype.com">
                        <img className="logo" src={skype} alt="skype_logo" />
                    </a>
                </div>  
            </nav>          
        );
    }
}
  
  