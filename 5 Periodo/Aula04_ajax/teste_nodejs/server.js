const express = require('express'); //Aqui, estamos importando o módulo express, que é um framework web para Node.js que simplifica a criação de aplicativos web e APIs.
const app = express(); //Instância do aplicativo Express chamada app. Todas as funcionalidades do Express serão acessadas por meio desta instância.
const port = 3000; //Porta na qual o servidor irá escutar as requisições.

app.get('/', (req, res) => {
    res.json("teste");
});
/*Aqui, estamos definindo uma rota para lidar com requisições GET 
para a raiz do servidor ('/'). Quando uma requisição GET é feita 
para a raiz, uma função de callback é chamada. Essa função recebe 
dois parâmetros: req (objeto da requisição) e res (objeto de resposta). 
Neste caso, estamos simplesmente enviando a string "teste" como uma 
resposta JSON usando o método res.json().*/

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
/*Aqui, estamos iniciando o servidor Express e fazendo ele escutar 
na porta especificada. Quando o servidor é iniciado com sucesso, 
uma mensagem é exibida no console indicando onde o servidor está rodando.*/
