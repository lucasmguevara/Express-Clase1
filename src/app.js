const path = require('path');

require('dotenv').config()

const express = require('express');
const app = express();

app.get('/', function(req, res) {
    // res.send('<h1>Bienvenido</h1>'); // Devuelve un texto
    res.sendFile(path.join(__dirname, '/views/Index.html')); // Devuelve un archivo
})

app.get('/contacto', function(req, res) {
    // res.send('<h1>Bienvenido a la página de contacto</h1>');
    res.sendFile(path.join(__dirname, '/views/Contacto.html')); // Devuelve un archivo
})

app.listen(process.env.PUERTO, function() {
    console.log("Servidor iniciado en puerto: " + process.env.PUERTO + "...")
});