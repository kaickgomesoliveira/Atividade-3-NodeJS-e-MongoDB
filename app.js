const express = require('express');
const usuarioRouter = require('./routes/usuarioRouter');
const calculadoraRouter = require('./routes/calculadoraRouter');
const alunoRouter = require('./routes/alunoRouter');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
app.use(express.json());
app.use("/usuarios", usuarioRouter);
app.use("/calc", calculadoraRouter);
app.use("/alunos", alunoRouter);

/*
app.get("/", (request, response) => {
    const nome = request.query.nome ?? "Mundo";
    return response.json({ "mensagem": "Olá, " + nome + "!" });
});

app.get("/soma/:n1/:n2", (request, response) => {
    const n1 = parseFloat(request.params.n1);
    const n2 = parseFloat(request.params.n2);
    const resultado = n1 + n2;
    return response.json({ "resultado": resultado });
});

app.post("/soma", (request, response) => {
    const n1 = parseFloat(request.body.n1);
    const n2 = parseFloat(request.body.n2);
    const resultado = n1 + n2;
    return response.json({ "resultado": resultado });
});
*/

mongoose.connect(process.env.DB_CONEXAO)
    .then(() => {
        app.listen(3000, () => {
            console.log('Conectado ao mongoDB');
            console.log('Servidor rodando na porta: 3000')
        });
    });