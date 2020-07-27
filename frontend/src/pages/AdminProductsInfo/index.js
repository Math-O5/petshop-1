import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import axios from 'axios';

import './styles.css';

// componentes
import productImg from '../../images/product.jpg';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';

export default function Logon(props) {
    const history = useHistory();
    const [showModalEdit, setShowModalEdit] = useState(false);

    const productId = props.match.params.id;

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`/product/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };

        loadData();
    }, []);

    const handleEditSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        try {
            const response = await axios.put("/product", product);

            setShowModalEdit(false);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    return (
        <>
            <Modal show={showModalEdit} handleClose={() => setShowModalEdit(false)}>
                <div className="modal-content">
                    <h4 className="modal-title text-light">
                        Editar Produto
                    </h4>
                    <div className="modal-body">
                    <form method="post" onSubmit={handleEditSubmit}>
                        <div className="row">
                            <label for="name">Nome do Produto: </label>
                            <input
                            value={product.title}
                            name="title"
                            className="form-control"
                            type="text"
                            onChange={(e) => {
                                product.title = (e.target.value);
                            }}
                            
                            />
                        </div>
                        <div className="row">
                            <label for="name">Slug do Produto: </label>
                            <input
                            value={product.slug}
                            name="slug"
                            className="form-control"
                            type="text"
                            onChange={(e) => {
                                product.slug = (e.target.value);
                            }}
                            
                            />
                        </div>
                        <div className="row">
                                <label for="name">Descrição da Aula: </label>
                                <textarea 
                                value={product.description}
                                name="description" 
                                class="form-control"
                                rows="5"
                                placeholder="Insira uma descrição da aula aqui"
                                onChange={(e) => {
                                    product.description = (e.target.value);
                                }}
                                />
                        </div>
                        <div className="row">
                                <label for="name">Marca: </label>
                                <input 
                                value={product.brand}
                                name="price" 
                                class="form-control"
                                onChange={(e) => {
                                    product.brand = (e.target.value);
                                }}
                                />
                        </div>
                        <div className="row">
                                <label for="name">Preço da Venda: </label>
                                <input 
                                value={product.price}
                                name="price" 
                                class="form-control"
                                onChange={(e) => {
                                    product.price = Number(e.target.value);
                                }}
                                />
                        </div>
                        <div className="row">
                                <label for="name">Preço de Compra: </label>
                                <input 
                                value={product.priceSold}
                                name="price" 
                                class="form-control"
                                onChange={(e) => {
                                    product.price = Number(e.target.value);
                                }}
                                />
                        </div>
                        <div className="row">
                                <label for="name">Quantidade do estoque: </label>
                                <input 
                                value={product.quantityStore}
                                name="price" 
                                class="form-control"
                                onChange={(e) => {
                                    product.quantityStore = Number(e.target.value);
                                }}
                                />
                        </div>
                        <div className="row">
                                <label for="name">Animal: </label>
                                <input 
                                value={product.animals}
                                name="price" 
                                class="form-control"
                                onChange={(e) => {
                                    let a = e.target.value;
                                    product.animals = (a.split(" "));
                                }}
                                />
                        </div>
                        <div className="row">
                                <label for="name">Tipo do produto: </label>
                                <input 
                                value={product.type}
                                name="price" 
                                class="form-control"
                                onChange={(e) => {
                                    let a = e.target.value;
                                    product.type = (a.split(" "));
                                }}
                                />
                        </div>
                        <div className="row">
                                <label for="name">Caminho da foto: </label>
                                <input 
                                value={product.filepath}
                                name="price" 
                                class="form-control"
                                onChange={(e) => {
                                    product.filepath = (e.target.value);
                                }}
                                />
                        </div>
                        <button type="submit" className="btn">Cadastrar</button>
                        <button className="btn close" 
                            onClick={() => setShowModalEdit(false)}>Fechar</button>
                    </form>
                    </div>
                </div>
            </Modal>
            <main class="products" id="admin">
                <div class="title">
                    <h1>Produtos</h1>
                    <Link to="/products"><button class="button">Voltar</button></Link>
                </div>
                <div class="info row">
                {loading && (<Loading />)}                
                {!loading && (<>
                    <div class="img-container">
                        <img src={productImg} alt="Imagem do produto" />
                    </div>
                    <div>
                        <div class="row">
                            <p>Nome:</p>
                            <p>{product.title}</p>
                        </div>
                        <div class="row">
                            <p>Descrição:</p>
                            <p>{product.description}</p>
                        </div>
                        <div class="row">
                            <p>Marca:</p>
                            <p>{product.brand}</p>
                        </div>
                        <div class="row">
                            <p>preço de venda:</p>
                            <p>R${product.price}</p>
                        </div>
                        <div class="row">
                            <p>Preço de compra:</p>
                            <p>R${product.price}</p>
                        </div>
                        <div class="row">
                            <p>Quant. estoque:</p>
                            <p>{product.quantityStore}</p>
                        </div>
                        <div class="row">
                            <p>Quant. vendida:</p>
                            <p>{product.quantitySold}</p>
                        </div>
                        <div class="row">
                            <p>Lucro:</p>
                            <p>R${(product.price * product.quantitySold)}</p>
                        </div>
                    </div>
                </>)}
                </div>

                <div class="row options">
                    <button class="button edit" onClick={() => setShowModalEdit(true)}>Editar</button>
                    <button class="button delete">Deletar</button>
                </div>

            </main>
        </>
    );
}