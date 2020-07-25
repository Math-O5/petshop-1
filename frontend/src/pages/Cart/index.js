import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';


export default function Logon() {
    const history = useHistory();

    return (
        <div class="container">
            <div class="container-carrinho">
                <h1>CARRINHO</h1>
                <div class="carrinho-content">
                    <div class="items">
                        <table>
                            <tr>
                                <th>Produto</th>
                                <th>Preço</th>
                                <th>Quantidade</th>
                                <th>Total</th>
                            </tr>
                            <tr>
                                <td>Ração</td>
                                <td>R$40,00</td>
                                <td>
                                    <input type="text" name="qtd" id="qtd" value="1" /> 
                                    <button>+</button>
                                    <button>-</button>
                                </td>
                                <td>R$40,00</td>
                            </tr>
                            <tr>
                                <td>Ração</td>
                                <td>R$40,00</td>
                                <td>
                                    <input type="text" name="qtd" id="qtd" value="1" /> 
                                    <button>+</button>
                                    <button>-</button>
                                </td>
                                <td>R$40,00</td>
                            </tr>
                            <tr>
                                <td>Ração</td>
                                <td>R$40,00</td>
                                <td>
                                    <input type="text" name="qtd" id="qtd" value="1" /> 
                                    <button>+</button>
                                    <button>-</button>
                                </td>
                                <td>R$40,00</td>
                            </tr>
                            <tr>
                                <td>Ração</td>
                                <td>R$40,00</td>
                                <td>
                                    <input type="text" name="qtd" id="qtd" value="1" /> 
                                    <button>+</button>
                                    <button>-</button>
                                </td>
                                <td>R$40,00</td>
                            </tr>
                            <tr>
                                <td>Ração</td>
                                <td>R$40,00</td>
                                <td>
                                    <input type="text" name="qtd" id="qtd" value="1" /> 
                                    <button>+</button>
                                    <button>-</button>
                                </td>
                                <td>R$40,00</td>
                            </tr>
                            <tr>
                                <td>Ração</td>
                                <td>R$40,00</td>
                                <td>
                                    <input type="text" name="qtd" id="qtd" value="1" /> 
                                    <button>+</button>
                                    <button>-</button>
                                </td>
                                <td>R$40,00</td>
                            </tr>
                            <tr>
                                <td>Ração</td>
                                <td>R$40,00</td>
                                <td>
                                    <input type="text" name="qtd" id="qtd" value="1" /> 
                                    <button>+</button>
                                    <button>-</button>
                                </td>
                                <td>R$40,00</td>
                            </tr>
                            <tr>
                                <td>Ração</td>
                                <td>R$40,00</td>
                                <td>
                                    <input type="text" name="qtd" id="qtd" value="1" /> 
                                    <button>+</button>
                                    <button>-</button>
                                </td>
                                <td>R$40,00</td>
                            </tr>
                            <tr>
                                <td>Ração</td>
                                <td>R$40,00</td>
                                <td>
                                    <input type="text" name="qtd" id="qtd" value="1" /> 
                                    <button>+</button>
                                    <button>-</button>
                                </td>
                                <td>R$40,00</td>
                            </tr>
                        </table>
                        
                    </div>
                    
                    <div class="resumo">
                        <h2>Resumo</h2>
                        <table>
                            <tr>
                                <th>Produto</th>
                                <td>R$40,00</td>
                            </tr>
                            <tr>
                                <th>Frete</th>
                                <td>R$ 0,00</td>
                            </tr>
                        </table>
                        <table class="total">
                            <tr>
                                <th>
                                    Total
                                </th>
                                <td>
                                    R$40,00
                                </td>
                            </tr>
                        </table>

                        <form action="#">
                            <button type="submit">PROSSEGUIR COM COMPRA</button>
                        </form>
                    </div>
                    
                </div>
                <form action="#" class="frete">
                    <label for="cep-frete">Calcule o frete:</label>
                    <input type="text" name="cep-frete" id="cep-frete" placeholder="00000-000" />

                    <button type="submit">Calcular</button>
                </form>
            </div>
            
        </div>
    );
}