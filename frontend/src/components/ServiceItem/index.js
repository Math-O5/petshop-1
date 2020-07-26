import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import serviceImg from '../../images/pet.png';

export default function Logon({
    data
}) {
    const history = useHistory();

    return (
        <Link to={`/services/${data._id}`} rel="noopener noreferrer">
            <div class="col-12-services">
                <div class="background-services"></div>
                <img src={serviceImg} />
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <button>R${data.price}</button>
            </div>
        </Link>
    );
}