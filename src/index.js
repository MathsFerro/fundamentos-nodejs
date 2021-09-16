const express = require('express');
const app = express();

// 1° Paramêtro: Rota
// 2° Parametro: {
// Request está recebendo da requisição
// Resp vai retornar da nossa requisição }
app.get("/", (request, response) => {
  return response.json({
    message: "Hello World!"
  });

});

// Porta da aplicação
app.listen(3333);
