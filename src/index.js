const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

const usernameDb = 'Joao';
const passwordDb = '684007ja';
const URL_CONNECTION = `mongodb+srv://${usernameDb}:${passwordDb}@cluster0-m6ri6.mongodb.net/test?retryWrites=true&w=majority`
const optionsDb = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(URL_CONNECTION,optionsDb);

//Configuração validos para todas as rotas
app.use(cors());
app.use(express.json());
app.use(routes)
//Acesso as Rotas(caminhos) e resposta do servidor
//Metodos HTTP : get(LISTAR OU BUSCAR), post(CRIAR UMA INFORMAÇÃO EX SALVAR), put(EDITAR), delete

//Tipos de parâmetros:

// Query Params: request.query (Filtros, ordenação, paginação)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)


// MongoDB (Banco Não-Relacional)

app.post('/users', (request, response) => {
    console.log("BODY => " + request.body);
    const messageObject = { 
        message: 'Hello Jpars' 
    };
    return response.json(messageObject);
});


// Escolha da porta para acesso
const PORT = 3333;

app.listen(PORT);