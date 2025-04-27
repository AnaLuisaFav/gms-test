# Testes Automatizados - Cadastro de Membros

Este projeto contém testes automatizados utilizando [Cypress](https://www.cypress.io/) para validar o fluxo de cadastro de membros em uma aplicação web.

## Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)
- [Faker.js](https://fakerjs.dev/) (`@faker-js/faker`) para geração dinâmica de dados.

## Pré-requisitos

- Node.js instalado (recomendado: versão 18+)
- npm ou yarn instalados
- Servidor local rodando: [server-gms](https://github.com/EBAC-QE/server-gms)

> **Nota:** O servidor deve estar disponível em `http://127.0.0.1:8080/` para a execução dos testes.

## Instalação

1. **Clone este repositório de testes:**

```bash
git clone https://github.com/AnaLuisaFav/gms-test.git
```

2. **Instale as dependências do projeto:**

```bash
npm install
```

## Executando os testes

Para abrir o Cypress em modo interativo:

```bash
npx cypress open
```

Para executar os testes em modo headless (sem interface):

```bash
npx cypress run
```
