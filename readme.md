# Projeto EC021 - Tópicos Avançados II
**Grupo:**
Filipe Campos de Lima - 839
Lucas Lopes de Souza - 1267

## Estrutura

```
├── _config
|   └── configuration.js
├── _model
|   └── Meme.js
├── _routes
|   ├── auth.js
|   └── meme.js
├── _services
|   └── authAPIService.js
├── _util
|   └── util.js
└── app.js
```


## Bibliotecas

**[Restify](http://restify.com)**
> Utilizada para expor a REST API.
	
**[Axios](https://github.com/axios/axios)**
> Utilizada para para realizar as chamadas HTTP

**[Mongoose](https://mongoosejs.com)**
> Utilizada para realizar a interação com o banco de dados.
	
**[Body-Parser](https://www.npmjs.com/package/body-parser)**
> Utilizada para realizar o parse do corpo da request antes da manipulação da requisição.
	
**[CORS](https://www.npmjs.com/package/cors)**
> Utilizada como um middleware para ativar o CORS e suas opções.
	
**[Restify-Router](https://www.npmjs.com/package/restify-router)**
> Utilizada para facilitar as definições das rotas no Restify.


## Configuração

- **Pré-requisitos:**
Ter o Node instalado;

- **Instalação dos pacotes:**
Através de um terminal, na pasta raiz do projeto executar o comando *"npm install"*.

## Rodando o Projeto

Através de um terminal, na pasta raiz do projeto executar o comando *"node app.js"*.

```