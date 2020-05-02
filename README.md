<h1>Pet Shop Online :dog: </h1>


<h2 style="color:#1589F0;">Desenvolvedores</h2>
<p>Mathias Fernandes, n° 10734352<p>
<p>Enrique Teles, n° 10724326</p>
<p>Marcus Pará, n° 11031663</p>

***

<h2>Descrição</h2>
<p> <strong>Pet Shop Online</strong> é um site desenvolvido utilizando HTML5, CSS3 e React. O intuito foi apenas utilizar os conceitos de web para produzir um site com navegabilidade, acessibilidade, funcionalidades e uma interface agradável.</p>

<h2>Running... localhost:8000/index.html</h2>

```
python3 -m http.server 
```
```
python -m SimpleHTTPServer
```

<h2>Fluxograma recomendado para o usuário</h2>
<p align="center">
	<img src="/fluxo_de_navegacao.png" width="50%" heigth="50%" alt="fluxograma_de_navegação"></img>
</p>
</br>
<h2>Funcionalidades implementadas</h2>
<table style="text-align:center; width:100%">
  <tr>
    <th>Cliente</th>
    <th>Home</th> 	
    <th>About</th>    
    <th>Login</th>
    <th>Produtos</th> 
    <th>Serviços</th> 
    <th>Perfil</th> 
    <th>Carrinhos</th> 
    <th>Pets</th>
    <th>Relatório</th> 
  </tr>
  <tr>
    <td>Público</td>
    <td>V</td>
    <td>V</td>
    <td>Re</td>
    <td>V</td>
    <td>V</td>
    <td>:x:</td>
    <td>:x:</td>
    <td>:x:</td>
   <td>:x:</td>
  </tr>
  <tr>
    <td>Usuário</td>
     <td>V</td>
    <td>V</td>
    <td>Entrar</td>
    <td>V/C</td>
    <td>V/Ag</td>
    <td>V/E</td>
    <td>V/E/R</td>
    <td>V/E/A/R</td>
    <td>:x:</td>
  </tr>
  <tr>
    <td>Admin</td>
    <td>V</td>
    <td>V</td>
    <td>V/A/E/R</td>
    <td>V/A/E/R</td>
    <td>V/A/E/R</td>
    <td>V/A/R</td>
    <td>V/R</td>
    <td>V/R</td>
    <td>V</td>
  </tr>
</table>
</br>
<table>
	<tr>
		<th>Legenda</th>
	</tr>
	<tr>
		<td>V  : Ver</td>
	</tr>
	<tr>
		<td>A  : Adicionar</td>
	</tr>
	<tr>
		<td>E  : Editar</td>
	</tr>
	<tr>
		<td>R  : Remover</td>
	</tr>
	<tr>
		<td>C  : Comprar</td>
	</tr>
	<tr>
		<td>Ag : Agendar>
	</tr>
	<tr>
		<td>Re : Registrar-se>
	</tr>
	<tr>
		<td>:x: : não disponivel</td>
	</tr>

</table>
</br>
<h2>Dados :open_file_folder:</h2>
<p>Informações salvas no banco de dados e a relação entre elas.</p>
<ul>
    <li>Produtos</li>    
    <ul>
        <li>id</li>
        <li>nome</li>
        <li>foto</li>
        <li>Marca : Marca</li>
        <li>typeofPet : string</li>
        <li>preço : double</li>
        <li>quantidVendia : int</li>
    </ul>
    <li>Serviços</li>    
    <ul>
        <li>id</li>
        <li>nome</li>
        <li>preço : double</li>
        <li>detalhes : string</li>
        <li>maximoSlot : int</li> <!-- marca o maximo de slots em dado horario -->
    </ul>
    <li>Reserva</li>    
    <ul>
        <li>id</li>
        <li>Client</li>
        <li>Slot</li>
        <li>Pet</li>
        <li>Servico</li>
    </ul>
    <li>Client</li>    
    <ul>
        <li>id</li>
        <li>nomeCompleto</li>
        <li>login</li>
        <li>password</li>
        <li>foto</li>
        <li>telefone</li>
        <li>nascimento</li>
        <lii>email</li>
        <li>endereço</li>
        <li>cartaoDeCredito</li>
        <li>lista : Pet</li>
        <li>Carrinho</li>
    </ul>
    <li>Pet</li>    
    <ul>
        <li>Client</li>
        <li>id</li>
        <li>nome</li>
        <li>descrição</li>
        <li>raça</li>
        <li>nascimento<li>
    </ul>
    <li>Marcas</li>    
    <ul>
        <li>id : int</li>
        <li>nome : string</li>
        <li>descricao : string</li>
    </ul>
    <li>Carrinho</li>    
    <ul>
        <li>Produto : array<Produto></li>
        <li>quantidade : int</li>
        <li>pendente : boolean</li>
    </ul>
    <li>Slot</li>  <!-- Cada slot é um registro de um serviço preenchido. Um slot só é gravado se estiver nos horários de trabalho. -->  
    <ul>
        <li>data : string</li>
        <li>hora: int</li>
        <li>min: int</li>
    </ul>   
</ul>


