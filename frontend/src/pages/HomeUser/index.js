import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

import bannerSecondImg from '../../images/banner-second.svg';
import dogBannerImg from '../../images/dog_banner.png';
import productImg from '../../images/product.jpg';
import arrowImg from '../../images/arrow.png';

export default function Logon() {
    const history = useHistory();

    return (
        <main class="user">
            <section class="banner">
                <div class="banner_left">
                    <img src={bannerSecondImg} alt="Dog smiling" class="banner_left_one" />

                    <div class="content">
                        <h1>Cadastre seu pet</h1> 
                        <p>Vero nisi doloremque, at accusantium iure, error architecto dolor aperiam aspernatur modi corrupti minus in obcaecati qui.</p>

                        <a href="../perfil/pets.html"><button class="button">CADASTRE-SE</button></a>
                    </div>
                </div>
                <img src={dogBannerImg} alt="Dog smiling" class="banner_right" />
            </section>

            <section class="products">
                <div class="text">
                    <h2>Nossos produtos</h2>
                    <a href="../product/products.html">
                        <p>Ver mais</p>
                    </a>
                    <a href="../product/product_detail.html"><img src={arrowImg} alt="enter" /></a>
            </div>
                <div class="preview">
                    <div class="item">
                        <a href="/product/product_detail.html">
                            <img src={productImg} alt="Produto" />
                            <div class="product-description">
                                <h2>Ração</h2>
                                <span>R$50,00</span>
                                
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>

                            </div>
                        </a>
                        
                    </div>
                    <div class="item">
                        <a href="/product/product_detail.html">
                            <img src={productImg} alt="Produto" />
                            <div class="product-description">
                                <h2>Ração</h2>
                                <span>R$50,00</span>
                                
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>

                            </div>
                        </a>
                        
                    </div>
                    <div class="item">
                        <a href="/product/product_detail.html">
                            <img src={productImg} alt="Produto" />
                            <div class="product-description">
                                <h2>Ração</h2>
                                <span>R$50,00</span>
                                
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>

                            </div>
                        </a>
                        
                    </div>
                    <div class="item">
                        <a href="/product/product_detail.html">
                            <img src={productImg} alt="Produto" />
                            <div class="product-description">
                                <h2>Ração</h2>
                                <span>R$50,00</span>
                                
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>

                            </div>
                        </a>
                        
                    </div>
                </div>
            </section>

            
            <section class="products">
                <div class="text">
                    <h2>Nossos serviços</h2>
                    <a href="../service/services.html">
                        <p>Ver mais</p>
                        <img src={arrowImg} alt="enter" />
                    </a>
                </div>
                <div class="preview">
                    <div class="item">
                        <a href="/product/product_detail.html">
                            <img src={productImg} alt="Produto" />
                            <div class="product-description">
                                <h2>Ração</h2>
                                <span>R$50,00</span>
                                
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>

                            </div>
                        </a>
                        
                    </div>
                    <div class="item">
                        <a href="/product/product_detail.html">
                            <img src={productImg} alt="Produto" />
                            <div class="product-description">
                                <h2>Ração</h2>
                                <span>R$50,00</span>
                                
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>

                            </div>
                        </a>
                        
                    </div>
                    <div class="item">
                        <a href="/product/product_detail.html">
                            <img src={productImg} alt="Produto" />
                            <div class="product-description">
                                <h2>Ração</h2>
                                <span>R$50,00</span>
                                
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>

                            </div>
                        </a>
                        
                    </div>
                    <div class="item">
                        <a href="/product/product_detail.html">
                            <img src={productImg} alt="Produto" />
                            <div class="product-description">
                                <h2>Ração</h2>
                                <span>R$50,00</span>
                                
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>

                            </div>
                        </a>
                        
                    </div>
                </div>
            </section>

        </main>
    );
}