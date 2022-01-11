# Testando aplicações NodeJS com Jest e SuperTest

Projeto desenvolvido baseado no vídeo
[Criando testes na aplicação com Jest e SuperTest - Code/drops #93](https://www.youtube.com/watch?v=18Dgf7lb9QA).

Este projeto tem como objetivo criar testes com [Jest](https://jestjs.io/) e [SuperTest](https://www.npmjs.com/package/supertest) para uma API simples desenvolvida com NodeJS.


## Tecnologias utilizadas
* NodeJS
* Express
* Prisma
* Jest

## Pré-requisitos: NodeJS, NPM/YARN

```bash
# Clonar repositório
git clone https://github.com/brunocoelhor/node-testes-jest.git
```

```bash
# Entrar na pasta do projeto
cd node-testes-jest
```

```bash
# Instalar dependências
yarn install
```

## Inicializar o processo do Jest para criar o arquivo de configuração

```bash
yarn jest --init
```

### Configurações do Jest para este projeto

```
✔ It seems that you already have a jest configuration, do you want to override it? … yes

✔ Would you like to use Typescript for the configuration file? … yes
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … no
✔ Which provider should be used to instrument code for coverage? › v8
✔ Automatically clear mock calls, instances and results before every test? … yes
```

### Executando os testes

```bash
yarn jest --init
```

### Os arquivos de teste são
* src/modules/createUser/CreateUserController.spec.ts
* src/modules/createUser/CreateUserService.spec.ts

### O arquivo de configuração do Prisma para os testes é
* prisma/prisma-environment-jest.js