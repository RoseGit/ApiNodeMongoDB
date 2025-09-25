/*for run the app npm start*/
'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

// Usar la variable de entorno MONGO_URI export MONGO_URI="mongodb+srv://..."
var mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/curso_node_angular';
console.log(mongoUri);

mongoose.connect(mongoUri)
    .then(() => {
        // Si la conexión es exitosa, se ejecuta este bloque
        console.log('La conexión a la base de datos está funcionando correctamente...');
        if (process.env.CODESPACE_NAME) {
            console.log(`🔗 Forwarded URL: https://${process.env.CODESPACE_NAME}-${port}.githubpreview.dev`);
        }



        // Inicia tu servidor Express solo DESPUÉS de una conexión exitosa a la DB
        app.listen(port, function() {
            console.log("Servidor del api rest de musica escuchando en http://localhost:" + port);
        });
    })
    .catch(err => {
        // Si hay un error en la conexión, se ejecuta este bloque
        console.error('Error al conectar a la base de datos:', err);
        // Opcional: podrías querer lanzar el error para que el proceso falle
        // throw err;
    });
