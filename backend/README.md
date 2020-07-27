# Petshop Backend

# Ligar o servidor: Config
Crie o arquivo 'config.js' na pasta backend e copie e cole o seguinte:
```
global.SALT_KEY = 'Choose_A_Aleatory_String_With_More_Than_10_Caracteres'
global.SALT_NUMBER = PUT_A_CONSTANT_HERE

// Put the mongoURI to progress. You can generate one here: https://cloud.mongodb.com
module.exports = {
    mongoURI: 'mongodb+srv://<UserMongoBd>:<PasswordMongoDb>@cluster0-lcyw1.mongodb.net/test'
};
```
Após isso, execute:
```
npm install
npm start
```
ou
```
nodemon bin/server.js
```
# Conta Admin
URL: http://localhost:3000/admin/login/
request: 
```
    "email": "Paruabu@gmail.com",
    "password": "goingToSelva"
```

## Dicionario

Obs: Todos os TOKENS podem ser passado no BODY, QUERY ou ID da requisição. 

Roles: Quem pode acessar: All (não precisa se cadastrar). User (No minimo usuário). Admin(No mínimo Admin).

URL: Rota do serviço.

Method: método http.

Request: Parâmetros em JSON que serçao enviado na requisição.

Response: Retorno da requisição.

# Serivce 

## GET 

### Get all services

Rota utilizado por qualquer cliente, retorna todos os serviços.

URL: http://localhost:3000/service/
Method: GET
Roles: All
request: none
Response: 
```
[{
    "_id": "5f1b2cc959bad9276fe06412",
    "title": "Tosa radical",
    "description": "Tosa bem curta",
    "filepath": "/assets/empty.jpeg"
    "price": 120.45,
    "__v": 0
    }]
```

### Get one service by ID
URL: http://localhost:3000/service/:id

### Get one service by SLUG
URL: http://localhost:3000/service/slug/:slug

### Get one service by PartnerHours
URL: http://localhost:3000/service/slug/:slug
Given part of the name of a partner and a list of hours returns a list with title and partner name of the services offered in, at least, one of these hours. 

Method: GET
Roles: Users
request: none
Response: 

* success
```
{
        "hours": [
            "10",
            "11",
            "14",
            "15",
            "16"
        ],
        "_id": "5f1b2cc959bad9276fe06412",
        "title": "Tosa radical",
        "slug": "tosa-radical",
        "description": "Tosa bem curta",
        "partner": "Luis Braga",
        "price": 120.45,
        "filepath": "/assets/empty.jpeg"
        "__v": 0
}
```
* No such id
```
{
    "message": "Falha ao buscar serviço"
}
```

## POST / PUT
### Create service
URL: http://localhost:3000/service/
Method: POST/PUT
Roles: Admin
request:
```
{ 
	"title": "Tosa radical", 
	"slug": "tosa-radical", 
	"description": "Tosa bem curta", 
	"partner": "Luis Braga", 
	"price": 120.45,             
        "filepath": "/assets/empty.jpeg"
	"hours": [10, 11, 14, 15, 16]
}
```
response:
```
{
    "message": "Service cadastrado com sucesso!"
}
```

### Create Slot
URL: http://localhost:3000/service/:id/new/slot
Method: POST
Roles: Admin
request:
```
{
    "date": "12-12-1999",
    "hours": [10, 19, 17],
}
```
response:
```
{
    "message": "Service cadastrado com sucesso!"
}
```

### Reserve Slot
URL: http://localhost:3000/service/:id/reserve
Method: POST
Roles: User
request:
```
{
    "date": "12-12-1999",
    "hours": [10, 19],
}
```
response:
```
{
    "message": "Service reservado com sucesso!"
}
```

## DELETE
URL: http://localhost:3000/service/:id
Method: DELETE
Roles: Admin
request: none
response(if fail):
```
{
    message: 'Falha ao deletar',
}
```

# Users

## GET 
### Get All Users (Admin Only)
URL: http://localhost:3000/user/
Method: GET
Roles: Admin
request: none
response: 
* success
```
[
    {
        "petsId": [],
        "_id": "5f1b7cdc6a606c7ad4b448c8",
        "username": "Joel123",
        "email": "joel@gmail.com",
        "tel": "5511941675429",
        "born": "28-11-1999",
        "role": "User",
    }
]
```
### GET All Admins (Admin Only)
URL: http://localhost:3000/admin/
Method: GET
Roles: Admin
request: none
response: 
* success
```
[
    {
        "petsId": [],
        "_id": "5f1b7cdc6a606c7ad4b448c8",
        "username": "Joel123",
        "email": "joel@gmail.com",
        "tel": "5511941675429",
        "born": "28-11-1999",
        "role": "Admin",
    }
]
```
* fail
```
{
    "message": "Acesso Restrito"
}
```
### Retrieve User by Id
URL: http://localhost:3000/user/:id
Method: GET
Roles: user
request: 
```
http://localhost:3000/user/Joel123
`````
```
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWI3Y2RjNmE2MDZjN2FkNGI0NDhjOCIsImVtYWlsIjoiam9lbEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IkpvZWwxMjMiLCJpYXQiOjE1OTU2MzkyNDEsImV4cCI6MTU5NTcyNTY0MX0.qDrAtVUcmH77p15UiNiJ4w4wToTSeLZNVNmrV12YyY0"
}
```
response:
```
{
    "petsId": [],
    "_id": "5f1b7cdc6a606c7ad4b448c8",
    "username": "Joel123",
    "email": "joel@gmail.com",
    "tel": "5511941675429",
    "born": "28-11-1999",
    "role": "User",
    "carId": "adhjdADAdgaZCwan232hcui21bb"
}
```
## POST 
### Register (everybody)
URL: http://localhost:3000/user/new/register/
Method: POST
Roles: All
request: 
```
{
	"username": "Joel123",	
	"email": "joel@gmail.com",
	"password": "goingToparty123",
	"cpassword": "goingToparty123",
	"tel": "5511941675429",
	"born": "28-11-1999",
	"filepath": "windows32/logo.jpeg",
	"address": " Av. Trabalhador São Carlense, 400 - Centro Cep:13566-590"
}
```
response:
* success
```
{
    "id": "5f1df0a2885e6544e681eba5",
    "username": "Tultimate",
    "email": "Tultimate@gmail.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWRmMGEyODg1ZTY1NDRlNjgxZWJhNSIsImVtYWlsIjoiVHVsdGltYXRlQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiVHVsdGltYXRlIiwiaWF0IjoxNTk1Nzk3NjY2LCJleHAiOjE1OTU4ODQwNjZ9.umxbA__r96h18mxwsXlUzK6j5kkHZ0obX7rk2zG8JV8",
    "role": "User",
    "message": "User cadastrado com sucesso!"
}
```
* When error
```
{
    "message": "O username não tem menos de 5 caracteres."
}
```
```
{
  "message": "O endereço não contém informações suficientes."
}
```
```
{
    "message": "Falha ao autenticar user"
}
```
 (...)
 
### Register Admin (Admin Only)
Essa rota registra um novo usuário de role usuário ou administrador, apenas um administrador tem a permissão. 

URL: http://localhost:3000/admin/new/register/
Method: POST
Roles: Admin
request: The role say if new user is admin or user, and token ensure that it's the admin sending the request. 
```
{
	"username": "erincu1",	
	"email": "enricoxudu@gmail.com",
	"password": "goingToFlow",
	"cpassword": "goingToFlow",
	"tel": "6667070707070",
	"born": "28-11-1939",
	"role": "Admin",
	"filepath": "windows32/logo.jpeg",
	"address": " Av. Amazonas São Carlense, 400 - Mata Cep:Arvore-3"
}
```
### Login (everybody)
URL: http://localhost:3000/user/login/
Method: POST
Roles: All
request: 
```
{
	"email": "joel@gmail.com",
	"password": "goingToparty123"
}
```
response:
```
{
    "id": "5f1b7cdc6a606c7ad4b448c8",
    "username": "Joel123",
    "email": "joel@gmail.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWI3Y2RjNmE2MDZjN2FkNGI0NDhjOCIsImVtYWlsIjoiam9lbEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IkpvZWwxMjMiLCJpYXQiOjE1OTU2Mzg5MzIsImV4cCI6MTU5NTcyNTMzMn0.KP00P7lK-waOX4z39_4BI1n-xm-VMPlPpni9RWY4yMs",
    "role": "User",
    "sucess": true,
    "message": "Acesso liberado!"
}
```
### Login Admin(Admin Only)
URL: http://localhost:3000/admin/login/
Method: POST
Roles: All
request: 
```
{
	"email": "enrico@gmail.com",
	"password": "Trans-Siberian-Orchestra"
}
```
response:
```
{
    "id": "5f1bc3a33c5192323a3aa53d",
    "username": "EnRico",
    "email": "enrico@gmail.com",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWJjM2EzM2M1MTkyMzIzYTNhYTUzZCIsImVtYWlsIjoiZW5yaWNvQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiRW5SaWNvIiwiaWF0IjoxNTk1NjU1Mzc0LCJleHAiOjE1OTU3NDE3NzR9.VAxdRYXmpCSSaDViIHwPmgh3sFi3mH3uQcwFZsU-1TM",
    "role": "Admin",
    "sucess": true,
    "message": "Acesso liberado!"
}
```
## Delete
### Excluir a próprio conta
Excluir conta, apenas o usuário pode usar essa rota.

URL: http://localhost:3000/users/delete/:id
Method: GET
Roles: user

### Excluir qualquer conta
Excluir conta, paenas o admin pode usar essa rota sobre qualquer Id.

URL: http://localhost:3000/admin/delete/:id
Method: GET
Roles: admin

responses: 
* success
```
{
    "_id": "5f1b7cdc6a606c7ad4b448c8",
    "message": "Deletado"
}
```
* Delete on CASCADE:
`"carId": "adhjdADAdgaZCwan232hcui21bb"`

# Produtos 
## GET 
### Get All Products
URL: http://localhost:3000/product/
Method: GET
Roles: user

### Get Product By Id
URL: http://localhost:3000/product/:id
Method: GET
Roles: user

### Get Product By Slug
URL: http://localhost:3000/product/slug/
Method: GET
Roles: user
request:
```
{
    "slug": "ração"
}
```
### Get Product By Types
URL: http://localhost:3000/product/types/:type
Method: GET
Roles: user

response:
```
[
    {
        "type": [
            "ração",
            "gato"
        ],
        "_id": "5f1be2961dd11e50f6bbf119",
        "title": "Ração Mial",
        "slug": "Ração nutritiva",
        "description": "Essa ração fará seu gato forte e disposto para brincar.",
        "filepath": "windows32/denovonao.jpeg",
        "price": 120.99,
        "quantityStore": 100,
        "quantitySold": 0,
        "createdAt": "2020-07-25T07:43:18.115Z",
        "updatedAt": "2020-07-25T07:43:18.115Z",
        "__v": 0
    }
]
```

## POST / PUT
### Create Product (Admin Only)
URL: http://localhost:3000/product/
Method: POST / PUT
Roles: Admin
request:
```
{
	"title": "Bebeou",
	"slug": "bebedoros",
	"description": "Um bebedouro maroto.",
	"filepath": "windows32/denovonao.jpeg",
	"price": 120.99,
	"quantityStore": 100,
	"type": ["alimentacao"],
	"animals": ["gato"],
	"brand": "pet-green",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWMyZWQ5ZjMwYjNlMTZmZmUyNzNlOCIsImVtYWlsIjoiUGFydWFidUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IkVyaWNQYXJ1IiwiaWF0IjoxNTk1ODAwMjI3LCJleHAiOjE1OTU4ODY2Mjd9.ZzH7dcg7vfNkQcBqZ0BgBRac7SV-JLtnoN_U5UQl0E8"
}
```
response:
```
{
    "message": "Produto cadastrado com sucesso!"
}
```
# Cart
## GET 
### GET All Carts (Admin Only)
URL: http://localhost:3000/cart/ 
Method: GET
Roles: Admin
Request:
```
{
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWMxN2ZhMDc1ODI3N2FmMDEzZGRjMyIsImVtYWlsIjoiUGFydUNhYnVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJQYXJ1MSIsImlhdCI6MTU5NTY3Njc0MywiZXhwIjoxNTk1NzYzMTQzfQ.wGMkzypsgjJLE9ULO9vEy1zagvBvVeyyqA2H1EN0xeo",
}
```
Response:
```
[
    {
        "_id": "5f1c0c7de9a8a96f56072aee",
        "products": [],
        "createdAt": "2020-07-25T10:42:05.964Z",
        "updatedAt": "2020-07-25T10:42:05.964Z",
        "__v": 0
    },
    {
        "_id": "5f1c0d86cf020b7217b1bfc6",
        "products": [],
        "createdAt": "2020-07-25T10:46:30.137Z",
        "updatedAt": "2020-07-25T10:46:30.137Z",
        "__v": 0
    },
]
```
### Get Cart By UserId
URL: http://localhost:3000/cart/buy/
Method: GET
Roles: User
Request:
```
{
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWMxN2ZhMDc1ODI3N2FmMDEzZGRjMyIsImVtYWlsIjoiUGFydUNhYnVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJQYXJ1MSIsImlhdCI6MTU5NTY3Njc0MywiZXhwIjoxNTk1NzYzMTQzfQ.wGMkzypsgjJLE9ULO9vEy1zagvBvVeyyqA2H1EN0xeo",
}
```
Response:
```
{
    "_id": "5f1c2ed9f30b3e16ffe273e7",
    "products": [],
    "createdAt": "2020-07-25T13:08:41.562Z",
    "updatedAt": "2020-07-25T13:08:41.562Z",
    "__v": 0
}
```
## POST 
### Add or Update Product on Cart
Adminnistrador publica um produto ou modifica. Se a quantidade for zero ou menos, o produto é excluído do estoque. O novo produto inicia com quantidades vendidas zero e não pode ser diretamente modificada.

URL: http://localhost:3000/cart/
Method: POST
Roles: User
Request:
```
 "productId": "5f1c31496dcbb418bd09ed0b",
 "quantity": 6,
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWMxN2ZhMDc1ODI3N2FmMDEzZGRjMyIsImVtYWlsIjoiUGFydUNhYnVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJQYXJ1MSIsImlhdCI6MTU5NTY3Njc0MywiZXhwIjoxNTk1NzYzMTQzfQ.wGMkzypsgjJLE9ULO9vEy1zagvBvVeyyqA2H1EN0xeo"
```
Response success:
```
{
    "message": "Item adicionado ao carrinho"
}
```
Response fail:
```
{
    "message": "Acesso Restrito"
}
```
### Buy: Store in Orders
Efetua a compra de todo carrinho. Após esse post, o cartão será válidado, a compra será efetuada, o estoque dos produtos decrementará e as unidades vendidas aumentarão. O pedido seŕa salvo em Orders, com o preço atual da vendo e se o delivery já foi feito ou não. 

URL: http://localhost:3000/cart/buy
Method: POST
Roles: User
Request:
```
 "productId": "5f1c31496dcbb418bd09ed0b",
 "quantity": 6,
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWMxN2ZhMDc1ODI3N2FmMDEzZGRjMyIsImVtYWlsIjoiUGFydUNhYnVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJQYXJ1MSIsImlhdCI6MTU5NTY3Njc0MywiZXhwIjoxNTk1NzYzMTQzfQ.wGMkzypsgjJLE9ULO9vEy1zagvBvVeyyqA2H1EN0xeo"
```
Response success:
```
{
    "message": "Item adicionado ao carrinho"
}
```
Response fail:
```
{
    "message": "Acesso Restrito"
}
```
## DELETE
URL: http://localhost:3000/cart/
Method: DELETE
Roles: User
Request:
```
 "productId": "5f1c31496dcbb418bd09ed0b",
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWMxN2ZhMDc1ODI3N2FmMDEzZGRjMyIsImVtYWlsIjoiUGFydUNhYnVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJQYXJ1MSIsImlhdCI6MTU5NTY3Njc0MywiZXhwIjoxNTk1NzYzMTQzfQ.wGMkzypsgjJLE9ULO9vEy1zagvBvVeyyqA2H1EN0xeo"
```
Response success:
```
{
    "message": 'Item removido ao carrinho'
}
```
Response fail:
```
{
    "message": 'Item não foi removido do carrinho'
}
```

# Pets
## GET
### Get All Pets (Admin Only)
URL: http://localhost:3000/pet
Method: POST 
Roles: Admin
Request:
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWMxN2ZhMDc1ODI3N2FmMDEzZGRjMyIsImVtYWlsIjoiUGFydUNhYnVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJQYXJ1MSIsImlhdCI6MTU5NTY3Njc0MywiZXhwIjoxNTk1NzYzMTQzfQ.wGMkzypsgjJLE9ULO9vEy1zagvBvVeyyqA2H1EN0xeo"
}
```
Response:
```
[
    {
        "_id": "5f1ca77919314e734e3a382a",
        "name": "Pitucu",
        "age": 2,
        "race": "Viralatar",
        "description": "Esse cãozinho é bem aninamo, não o de trela, ele não sabe parar",
        "owner": "5f1c17fa0758277af013ddc3",
        "createdAt": "2020-07-25T21:43:21.964Z",
        "updatedAt": "2020-07-25T21:43:21.964Z",
        "__v": 0
    },
    {
        "_id": "5f1ca7b319314e734e3a382b",
        "name": "Leco Leco",
        "age": 3,
        "race": "Viralata",
        "description": "Esse gato é bem aninamo, não o de trela, ele não sabe parar",
        "owner": "5f1c17fa0758277af013ddc3",
        "createdAt": "2020-07-25T21:44:19.788Z",
        "updatedAt": "2020-07-25T21:44:19.788Z",
        "__v": 0
    }
]
```
### Get All yours Pet 
URL: http://localhost:3000/pet/perfil/geral
Method: POST 
Roles: Users
Request:
```
{
     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWNkMWM5YWZmMTE4MWNlYmUyNjBmNSIsImVtYWlsIjoidWx0aW1hdGVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJVbHRpbWF0ZSIsImlhdCI6MTU5NTcyNDI1OSwiZXhwIjoxNTk1ODEwNjU5fQ.dteGfF8a93whEGAeSA4zwcPYmKrAkH1Z4Jl-lTh_-Vk"
}
```
Response:
```
{
    "pets": [
        {
            "_id": "5f1cd1fcaff1181cebe260f6",
            "name": "Loco LiLico Loco",
            "age": 2,
            "race": "Viralata",
            "description": "Esse gato é bem aninamo, não o de trela, ele não sabe parar",
            "owner": "5f1cd1c9aff1181cebe260f5",
            "createdAt": "2020-07-26T00:44:44.024Z",
            "updatedAt": "2020-07-26T00:44:44.024Z",
            "__v": 0
        },
        {
            "_id": "5f1cd1ffaff1181cebe260f7",
            "name": "Loco LiLico Loco",
            "age": 2,
            "race": "Viralata",
            "description": "Esse gato é bem aninamo, não o de trela, ele não sabe parar",
            "owner": "5f1cd1c9aff1181cebe260f5",
            "createdAt": "2020-07-26T00:44:47.419Z",
            "updatedAt": "2020-07-26T00:44:47.419Z",
            "__v": 0
        }
    ],
    "message": "success"
}
```

### Get by petId 
URL: http://localhost:3000/pet/:id
Method: GET
Roles: Users
Request:
```
{
     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWNkMWM5YWZmMTE4MWNlYmUyNjBmNSIsImVtYWlsIjoidWx0aW1hdGVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJVbHRpbWF0ZSIsImlhdCI6MTU5NTcyNDI1OSwiZXhwIjoxNTk1ODEwNjU5fQ.dteGfF8a93whEGAeSA4zwcPYmKrAkH1Z4Jl-lTh_-Vk"
}
```
Response:
```
{
    "_id": "5f1cd1fcaff1181cebe260f6",
    "name": "Loco LiLico Loco",
    "age": 2,
    "race": "Viralata",
    "description": "Esse gato é bem aninamo, não o de trela, ele não sabe parar",
    "owner": "5f1cd1c9aff1181cebe260f5",
    "createdAt": "2020-07-26T00:44:44.024Z",
    "updatedAt": "2020-07-26T00:44:44.024Z",
    "__v": 0
}
```

## DELETE
### Delete user Pet(Admin Only)
### Delete your Pet
Excluir pet, apenas o próprio usuário pode usar essa rota.

URL: http://localhost:3000/pet/:id
Method: Delete
Roles: User
Request:
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWNkMWM5YWZmMTE4MWNlYmUyNjBmNSIsImVtYWlsIjoidWx0aW1hdGVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJVbHRpbWF0ZSIsImlhdCI6MTU5NTcyNDI1OSwiZXhwIjoxNTk1ODEwNjU5fQ.dteGfF8a93whEGAeSA4zwcPYmKrAkH1Z4Jl-lTh_-Vk"
}
```
## POST 
URL: http://localhost:3000/pet
Method: POST 
Roles: User
Request:
```
{
    "name": "Leco Leco",
    "age": 3,
    "race": "Viralata",
    "description": "Esse gato é bem aninamo, não o de trela, ele não sabe parar",
    "filepath": "images/cat.png",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWNkMWM5YWZmMTE4MWNlYmUyNjBmNSIsImVtYWlsIjoidWx0aW1hdGVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJVbHRpbWF0ZSIsImlhdCI6MTU5NTcyNDI1OSwiZXhwIjoxNTk1ODEwNjU5fQ.dteGfF8a93whEGAeSA4zwcPYmKrAkH1Z4Jl-lTh_-Vk"
}
```
Response:
```
{
   "message": "Pet registrado com sucesso"
}
```
## PUT
URL: http://localhost:3000/pet
Method: PUT
Roles: User
Request:
```
{
    "name": "Leco Leco",
    "age": 3,
    "race": "Viralata",
    "description": "Esse gato é bem aninamo, não o de trela, ele não sabe parar",
    "filepath": "images/cat.png",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMWNkMWM5YWZmMTE4MWNlYmUyNjBmNSIsImVtYWlsIjoidWx0aW1hdGVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJVbHRpbWF0ZSIsImlhdCI6MTU5NTcyNDI1OSwiZXhwIjoxNTk1ODEwNjU5fQ.dteGfF8a93whEGAeSA4zwcPYmKrAkH1Z4Jl-lTh_-Vk"
}
```
Response:
```
{
   "message": "Pet editado com sucesso"
}
```
