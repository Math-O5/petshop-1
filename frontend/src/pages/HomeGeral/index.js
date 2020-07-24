import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import bannerMainImg from '../../images/banner_main.png';
import dogBannerImg from '../../images/dog_banner.png';
import productImg from '../../images/product.jpg';
import arrowImg from '../../images/arrow.png';

// componentes
import ProductItem from '../../components/ProductItem';


export default function Logon() {
    const history = useHistory();

    return (
        <main>
            <section className="banner">
                <div className="banner_left">
                    <img src={bannerMainImg} alt="Dog smiling" className="banner_left_one" />

                    <div className="content">
                        <h1>Cadastre-se</h1> 
                        <p>Vero nisi doloremque, at accusantium iure, error architecto dolor aperiam aspernatur modi corrupti minus in obcaecati qui.</p>

                        <a href="../home/home_user.html"><button className="button">CADASTRE-SE</button></a>
                    </div>
                </div>
                <img src={dogBannerImg} alt="Dog smiling" className="banner_right" />
            </section>

            <section className="products">
                <div className="text">
                    <h2>Nossos produtos</h2>
                    <a href="../product/products.html">
                        <p>Ver mais</p>
                    </a>
                    <a href="../product/product_detail.html"><img src={arrowImg} alt="enter" /></a>
                </div>
                <div className="preview">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </section>

            
            <section className="products">
                <div className="text">
                    <h2>Nossos serviços</h2>
                    <a href="../service/services.html">
                        <p>Ver mais</p>
                        <img src={arrowImg} alt="enter" />
                    </a>
                </div>
                <div className="preview">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </section>


        </main>
    );
}