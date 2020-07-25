import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import serviceImg from '../../images/pet.png';

export default function Logon() {
    const history = useHistory();

    return (
        <Link to="/services/info" rel="noopener noreferrer">
            <div class="col-12-services">
                <div class="background-services"></div>
                <img src={serviceImg} />
                <h2>Tosa</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorum est repellat commodi ipsa dolorem illum tempora, vel non laudantium, blanditiis ducimus laborum in nemo animi! Dolor nulla ut veniam.</p>
                <button>R$: 15,35</button>
            </div>
        </Link>
    );
}