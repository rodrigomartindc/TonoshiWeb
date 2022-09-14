const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(path.resolve(__dirname, '')));

app.listen(3003, () => {
    console.log('Servidor corriendo en http://localhost:3003')
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})