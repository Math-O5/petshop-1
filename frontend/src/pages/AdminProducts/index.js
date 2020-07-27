import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import axios from 'axios';

import './styles.css';

// componentes
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';

export default function Logon() {
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [description, setDescription] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [priceSold, setPriceSold] = useState('');
    const [filepath, setFilepath] = useState('');
    const [quantityStore, setQuantityStore] = useState('');
    const [type, setType] = useState([]);
    const [animal, setAnimal] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            try {
                const response = await axios.get("/product");
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };

        loadData();
    }, []);

    const selectRow = (id) => {
        history.push(`/products/${id}`);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        try {
            const data = {
                title,
                slug,
                description,
                brand,
                price,
                priceSold,
                filepath,
                quantityStore,
                type,
                animal
            }
            
            const response = await axios.post("/product", data);

            products.push(data);
            setShowModal(false);

            setTitle('');
            setSlug('');
            setDescription('');
            setBrand('');
            setPriceSold('');
            setFilepath('');
            setQuantityStore('');
            setType([]);
            setAnimal([]);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };

    return (
        <>
            <Modal show={showModal} handleClose={() => setShowModal(false)}>
                <div className="modal-content">
                    <h4 className="modal-title text-light">
                        Cadastrar Produto
                    </h4>
                    <div className="modal-body">
                    <form method="post" onSubmit={handleSubmit}>
                        <div className="row">
                            <label for="name">Nome do Produto: </label>
                            <input
                            value={title}
                            name="title"
                            className="form-control"
                            type="text"
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                            
                            />
                        </div>
                        <div className="row">
                            <label for="name">Slug do Produto: </label>
                            <input
                            value={slug}
                            name="slug"
                            className="form-control"
                            type="text"
                            onChange={(e) => {
                                setSlug(e.target.value);
                            }}
                            
                            />
                        </div>
                        <div className="row">
                                <label for="name">Descrição da Aula: </label>
                                <textarea 
                                value={description}
                                name="description" 
                                class="form-control"
                                rows="5"
                                placeholder="Insira uma descrição da aula aqui"
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                }}
                                />
                        </div>
                        <div className="row">
                                <label for="name">Marca: </label>
                                <input 
                                value={brand}
                                name="price" 
                                class="form-control"
                                onChange={(e) => {
                                    setBrand(e.target.value);
                                }}
                                />
                        </div>
                        <div className="row">
                                <label for="name">Preço da Venda: </label>
                                <input 
                                value={price}
                                name="price" 
                                class="form-control"
                                onChange={(e) => {
                                    setPrice(e.target.value);
                                }}
                                />
                        </div>
                        <div className="row">
                                <label for="name">Preço de Compra: </label>
                                <input 
                                value={priceSold}
                                name="price" 
                                class="form-control"
                                onChange={(e) => {
                                    setPriceSold(e.target.value);
                                }}
                                />
                        </div>
                        <div className="row">
                                <label for="name">Quantidade do estoque: </label>
                                <input 
                                value={quantityStore}
                                name="price" 
                                class="form-control"
                                onChange={(e) => {
                                    setQuantityStore(e.target.value);
                                }}
                                />
                        </div>
                        <div className="row">
                                <label for="name">Animal: </label>
                                <input 
                                value={animal}
                                name="price" 
                                class="form-control"
                                onChange={(e) => {
                                    let a = e.target.value;
                                    setAnimal(a.split(" "));
                                }}
                                />
                        </div>
                        <div className="row">
                                <label for="name">Tipo do produto: </label>
                                <input 
                                value={type}
                                name="price" 
                                class="form-control"
                                onChange={(e) => {
                                    let a = e.target.value;
                                    setType(a.split(" "));
                                }}
                                />
                        </div>
                        <div className="row">
                                <label for="name">Caminho da foto: </label>
                                <input 
                                value={filepath}
                                name="price" 
                                class="form-control"
                                onChange={(e) => {
                                    setFilepath(e.target.value);
                                }}
                                />
                        </div>
                        <button type="submit" className="btn">Cadastrar</button>
                        <button className="btn close" 
                            onClick={() => setShowModal(false)}>Fechar</button>
                    </form>
                    </div>
                </div>
            </Modal>
    
            <main class="products" id="admin">
                <div class="title">
                    <h1>Produtos</h1>
                    <button 
                        class="button"
                        onClick={() => {
                            setShowModal(true);
                          }}>
                        Adicionar
                    </button>
                </div>

                <div class="filter">
                    <input type="text" name="search" id="search" />
                    <select name="Ordenar por" id="sort-products">
                        <option value="" selected></option>
                        <option value="Preço">Preço</option>
                        <option value="Nome">Nome</option>
                        <option value="Marca">Marca</option>
                    </select>
                </div>

                <table>
                    <thead>
                        <td>nome</td>
                        <td>preço de venda</td>
                        <td>preço de compra</td>
                        <td>quant. estoque</td>
                        <td>quant. vendida</td>
                        <td>lucro</td>
                    </thead>
                    <tbody>
                    {loading && (<Loading />)}
                    {products.map(product => (
                        <tr key={product._id} onClick={() => selectRow(product._id)} >
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.price}</td>
                            <td>22</td>
                            <td>4</td>
                            <td>R$ 80.00</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

            </main>
        </>
    );
}