# pet_shop

<h2>Mathias Fernandes, n°10734352</h2>
<h2>Enrique Teles, n°10724326</h2>
<h2>Marcus Pará, n°XXXX</h2>

<h2>Running... localhost:8000/index.html</h2>

```
python3 -m http.server 
```

```
python -m SimpleHTTPServer
```

<h2>funcionalidades:</h2>
    - sem autentificacao:
        - registrar cliente
        - login
        - home
        - about

    - admin(name, id, photo, phone, email)
        - listar / remover administradores
        - adicionar administrador
        - editar administrador

        - listar / remover clientes
        - adicionar cliente
        - editar cliente

        - listar / remover serviços
        - adicionar serviço
        - editar serviço

        - listar produtos
        - adicionar produto
        - editar produto

        - lucro da loja

    - client (nome, foto, telefone, email, endereço, cartão de crédito, idade)
        (name, id, photo, race, age)
        - ver animais registrados 
        - registrar animal (

        (name, id, photo, description, price, quantity (in stock), quantity sold)
        - visualizar produtos 
        - visualizar produto (opcao de compra)

        (name, id, photo, description, price)
        - visualizar serviços 
        - visualizar serviço)
        - contratar serviço (calendário)

        - carrinho
        - compra

<h2>Tables</h2>
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
        <lii>email<li>
        <li>endereço<li>
        <li>cartaoDeCredito</li>
        <li>lista : Pet<li>
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
