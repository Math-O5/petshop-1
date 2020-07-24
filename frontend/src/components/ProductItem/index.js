import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import productImg from '../../images/product.jpg';

export default function Logon() {
    const history = useHistory();

    return (
        <div className="product">
            <Link to="/products/info">
                <img src={productImg} alt="Produto" />
                <div className="product-description">
                    <h2>Ração</h2>
                    <span>R$50,00</span>
                    
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>

                </div>
            </Link>
            
        </div>
    );
}