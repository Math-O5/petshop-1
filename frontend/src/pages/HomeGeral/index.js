import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import axios from 'axios';

import './styles.css';

import bannerMainImg from '../../images/banner_main.png';
import dogBannerImg from '../../images/dog_banner.png';
import arrowImg from '../../images/arrow.png';

// componentes
import ProductItem from '../../components/ProductItem';
import Loading from '../../components/Loading';

export default function Logon() {
    const history = useHistory();
    
    const [products, setProducts] = useState([]);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const responseProducts = await axios.get("/product");
                setProducts(responseProducts.data);
                
                const responseServices = await axios.get("/service");
                setServices(responseServices.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };

        loadData();
    }, []);

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
                    {loading && (<Loading />)}
                    {products.slice(0,Math.min(products.length, 5)).map(product => (
                        <ProductItem data={product}/>
                    ))}
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
                    {loading && (<Loading />)}
                    {services.slice(0,Math.min(services.length, 5)).map(product => (
                        <ProductItem data={product}/>
                    ))}
                </div>
            </section>


        </main>

    );
}