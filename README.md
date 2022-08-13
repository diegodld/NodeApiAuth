# NodeApiAuth
API de cadastro e autenticação de usuários com nodeJS e MongoDB.
<p>Esse projeto foi desenvolvido para praticar meus conhecimentos de Nodejs e construção de APIs.</p>

## Rotas

GET - https://node-api-auth.vercel.app/users
Retorna todos os usuários cadastrados

GET - https://node-api-auth.vercel.app/user/:id
Retorna um usuário por id (necessário token de autenticação)

POST - https://node-api-auth.vercel.app/auth/register
Cadastrar um usuário 

POST - https://node-api-auth.vercel.app/auth/login
Fazer login 

## Exemplos

### Cadastro

{
		"name":"Nome",
		"email":"email@email.com",
		"password":"123456",
		"confirmPassword":"123456"
}

### Login

{
		"email":"email@email.com",
		"password":"123456"
}


## Tecnologias Utilizadas

+ NodeJS
+ Express
+ MongoDB
+ Mongoose
+ JWT
+ bcrypt
