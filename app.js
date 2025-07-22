const express = require('express');

const database = require('./configs/database');

// Conexão com o banco de dados MongoDB
database.mongoose
    .connect(database.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Conexão estabelecida com o banco");
    }).catch(error => {
        console.error("Conexão não estabelecida com o banco", error);
        process.exit();
    });

// Criação do aplicativo Express
const app = express();

// Vamos enviar e receber JSON na requisição
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;
const HOST = '0.0.0.0';

// Teste de execução
app.listen(PORT, HOST, () => {
    console.log(`Servidor executando na porta ${PORT}`);
});