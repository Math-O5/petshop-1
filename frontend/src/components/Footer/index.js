import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import logoImg from '../../images/logo.png';
import facebookImg from '../../images/facebook.svg';
import instagramImg from '../../images/instagram.svg';
import twitterImg from '../../images/twitter.svg';
import linkedinImg from '../../images/linkedin.svg';

export default function Logon() {
    const history = useHistory();

    return (
        <footer>
            <div class="content">
                <img src={logoImg} alt="Logo" class="logo" />
                <div class="adress">
                    <p>Rua XXXXXX, 111</p>
                    <p>São Carlos, Sp</p>
                    <p>Brasil</p>
                </div>
                <div class="contact">
                    <p>+55 99 99999 9999</p>
                    <p>email@example.com</p>
                </div>
                <div class="social">
                    <img src={facebookImg} alt="facebook link" />
                    <img src={instagramImg} alt="instagram link" />
                    <img src={twitterImg} alt="twitter link" />
                    <img src={linkedinImg} alt="linkedin link" />
                </div>
            </div>
            <p class="end">2020 web. Em desenvolvimento.</p>
        </footer>
    );
}