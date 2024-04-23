const express = require('express');
const app = express();
const port = 3000;

const cors = require('cors'); // importar o pacote cors

app.use(cors({
    origin: 'http://127.0.0.1:5500' // Substitua pelo domínio da sua aplicação front-end
}));


app.get('/', (req, res) => {
    res.json("teste");
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
