

<h1 align="center">
     <a href="#" alt="FaleMais"> Telzir - FaleMais </a>
</h1>

<h3 align="center">
    A empresa de telefonia Telzir, especializada em chamadas de longa distância nacional,
vai colocar um novo produto no mercado chamado FaleMais. Normalmente um cliente
Telzir pode fazer uma chamada de uma cidade para outra pagando uma tarifa fixa por
minuto, com o preço sendo pré-definido em uma lista com os códigos DDDs de origem
</h3>

  


Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Funcionalidades](#-funcionalidades)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Rodando o Backend (servidor)](#user-content--rodando-o-backend-servidor)
     * [Rodando a aplicação web (Frontend)](#user-content--rodando-a-aplicação-web-frontend)



## 💻 Sobre o projeto

Com o novo produto FaleMais da Telzir o cliente adquire um plano e pode falar de graça até
um determinado tempo (em minutos) e só paga os minutos excedentes. Os minutos
excedentes tem um acréscimo de 10% sobre a tarifa normal do minuto. Os planos são
FaleMais 30 (30 minutos), FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos).

A Telzir, preocupada com a transparência junto aos seus clientes, quer disponibilizar uma
página na web onde o cliente pode calcular o valor da ligação. Ali, o cliente pode escolher os
códigos das cidades de origem e destino, o tempo da ligação em minutos e escolher qual o
plano FaleMais. O sistema deve mostrar dois valores:

 1- O valor da ligação com o plano;

 2- Sem o plano.

---

## 🚀 Como executar o projeto

Este projeto é divido em duas partes:
1. Backend (pasta server) 
2. Frontend (pasta web)

💡O Frontend necessita que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone git@github.com:LucasJCM-coder/Projeto-Telzir.git

# Acesse a pasta do projeto no terminal/cmd
$ cd  Projeto-Telzir

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install


# Cria as seed
$ npm run knex:seed    

# Migra
npm run knex:migrate     

# Execute a aplicação em modo de desenvolvimento
$ npm start

# O servidor inciará na porta:3333 - acesse http://localhost:3333 

```


#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Clone este repositório
$ git clone git@github.com:LucasJCM-coder/Projeto-Telzir.git

# Acesse a pasta do projeto no terminal/cmd
$ cd  Projeto-Telzir

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```


#### 🎲 Rodando os tests (servidor)

```bash

# Clone este repositório
$ git clone git@github.com:LucasJCM-coder/Projeto-Telzir.git

# Acesse a pasta do projeto no terminal/cmd
$ cd  Projeto-Telzir

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# Execute os tests
$ npm test

# O servidor inciará na porta:3333 - acesse http://localhost:3333 

```

