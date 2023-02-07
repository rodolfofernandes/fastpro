# Awesome Project Build with TypeORM

Este projeto trabalha usando docker

1. Clonar o projeto
2. Rodar `docker-compose --build`
3. Entrar no container da aplicação
4. Rodar migrations usando o comando : `yarn migration:run`
5. Caso necessário é possível rodar a seed para popular o banco de dados: `yarn seed`

# Rota de login

<h1>http://localhost:3333/auth/login</h1>

<h3> Passar Login e senha </h3>

<code> "email": "rodolfoluiz.fernandes@outlook.com
"senha: "123456"
</code>
