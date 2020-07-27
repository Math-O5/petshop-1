import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import serviceImg from '../../images/pet.png';

export default function Logon({
    data
}) {
    const history = useHistory();

    return (
        <div className="product">
            <Link to={`/services/${data._id}`}>
                <img src={serviceImg} alt="Produto" />
                <div className="product-description">
                    <h2>{data.title}</h2>
                    <span>R${data.price}</span>
                    <p>{data.description}</p>
                </div>
            </Link>
            
        </div>
    );
}