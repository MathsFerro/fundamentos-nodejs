const express = require('express');
const app = express();

/**
 * 1° Paramêtro: Rota
 * 2° Parametro:
 *  Request: está recebendo da requisição
 *  Response: vai retornar da nossa requisição 
 * 
 * Método:
 *  app.get("/", (request, response) => { }
 */


/**
 * GET -> Buscar um informação dentro do servidor
 * POST -> Inserir uma informação no servidor
 * PUT -> Alterar uma inforamção no servidor
 * PATCH -> Alterar uma inforamção específica
 * DELETE -> Deletar uma informação no servidor
 */

app.get("/courses", (request, response) => {
  return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response) => {
  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
})

app.patch("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
})

app.delete("/courses/:id", (request, response) => {
  return response.json(["Curso 6", "Curso 2", "Curso 4"]);
})

// Porta da aplicação
app.listen(3333);


// Comandos
/* 
  
  yarn init -y
    Cria o package.json

  yarn add express
    (ver descr depois)

  yarn add nodemon -D
    Reinicia a aplicação cada vez que salva algum arquivo

*/