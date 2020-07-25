import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import productImg from '../../images/product.jpg';

export default function Logon({
    data
}) {
    const history = useHistory();

    return (
        <div className="product">
            <Link to={`/products/${data._id}`}>
                <img src={productImg} alt="Produto" />
                <div className="product-description">
                    <h2>{data.title}</h2>
                    <span>R${data.price}</span>
                    <p>{data.description}</p>
                </div>
            </Link>
            
        </div>
    );
}