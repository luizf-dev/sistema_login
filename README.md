# Sistema de Login e Cadastro

Este projeto é um sistema de login e cadastro desenvolvido em React. Ele salva os dados dos usuários no `localStorage`, verifica as credenciais durante o login e redireciona para uma página de boas-vindas. Além disso, utiliza alertas do SweetAlert2 e navegação com React Router.

## Tecnologias Utilizadas

- React
- React Router
- SweetAlert2
- CryptoJS

## Funcionalidades

- **Cadastro de Usuário**: Permite aos usuários se cadastrarem com um email, nome de usuário e senha. A senha é criptografada antes de ser salva no `localStorage`.

- **Login de Usuário**: Permite aos usuários fazerem login com email e senha. A senha é descriptografada e comparada com a senha armazenada.

- **Redirecionamento**: Após o login bem-sucedido, o usuário é redirecionado para uma página de boas-vindas.

- **Alertas**: Utiliza o SweetAlert2 para exibir mensagens de sucesso e erro.

- **Proteção de Rota**: Garante que a página de boas-vindas só seja acessível após o login.



