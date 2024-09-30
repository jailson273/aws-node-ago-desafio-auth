Parte #2

API para criar usuário

POST /api/v1/users
Permite a criação de um novo usuário

name

- Obrigatório, caso não seja enviado, deve retornar status 400 e { “error”: “name is required” }.

email

- Obrigatório se não for enviado ou se não for um e-mail valido, deve retornar status 400 e { “error”: “email is invalid” }
- Caso exista um usuário cadastrado com o e-mail enviado, deve retornar status 409 e { "error": "email already registered" }

password

- Obrigatório deve ter pelo menos 6 caracteres letras e número
- Caso não seja enviado ou se a senha não tiver pelo menos 6 caracteres e não ter letras e números, deve retornar status 400 e { “error”: “password must be at least 6 characters long with letters and numbers” }.
- Deve ser criptografado antes de salvar no banco.

id

- Não deve ser enviado no body, porém deve ser gerado antes de ser inserido no banco, seguir o padrão uuid, o próprio node possui um método que faz isso.

active

- Não deve ser enviado no body, porém deve ser salvo por padrão com true.

Em caso de SUCESSO deve retornar status 201 e um json com o id do usuário criado { “id”: “98e0e9ea-f3b8-4f85-9099-0ead80a330dc” }.

Em caso de ERRO deve retornar status 500 e { “error”: “oops, an internal error occurred and it was not possible to create this user” }.

IMPORTANTE
Separar o projeto nas seguintes responsabilidades:

- src/ - pasta padrão do código fonte do projeto, a estrutura do projeto vai ficar dentro dessa pasta

- routes/: direciona as requisições para o controller
- controllers/: recebe e responde as requisições das rotas
- services/: responsável pelas regras de negocio
- repositories/: responsável por se comunicar e fazer as operações do banco de dados

nesse primeiro momento não utilizar ORM
utilizar as libs express, dotenv, mysql2, cors
priorizar o uso de premisses
variáveis sensíveis como senha e usuário de banco colocar no .env (não commitar esse arquivo em repositórios), commitar um .env.example com as variáveis necessárias para o projeto (dados fake)

procurar usar o conceito de injeção de dependência (pesquisar), é importante para os próximos passos
procurar usar o typescript
procurar configurar o projeto com eslint (vou enviar um passo a passa para quem pedir)
