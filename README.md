# Awesome Project Build with TypeORM

Este projeto trabalha usando docker

1. Clonar o projeto
2. Rodar `docker-compose --build`
3. Entrar no container da aplicação
4. Rodar migrations usando o comando : `yarn migration:run`
5. Caso necessário é possível rodar a seed para popular o banco de dados: `yarn seed`

# Rota de login

<h3>http://localhost:3333/auth/login</h1>

<h4> Passar Login e senha </h3>
Método Post
<code>{
"email": "rodolfoluiz.fernandes@outlook.com
"senha: "123456"
}
</code>

<p>O retorno da rota de ve ser um token utilizado para fazer as requisiçoes da rota do poke api

# Rota de Cadastro de usuário

Método Post

<h3>http://localhost:3333/users/create  </h3>

<h4> Enviar Name, Telephone, Email, Password </h3>

<code>{
"name": "Teste de novo usuario",
"telephone": "13996882202",
"email": "rodolfo.fernandes@outlook.com",
"password": "123456"
}
</code>

# Rota de listagem de pokemons

Método GET

<h3> http://localhost:3333/pokemon/0 </h3>

<p> para a paginação sómente é necessário trocar o valor 0 pelo offset desejado e a API retornará 20 pokemons a partir do offSet indicado

<p> É necessário utilizar o token gerado pelo login para acessar a rota, a api retornará os pokemons com suas abilidades e ID para que possam ser usados no Front End
