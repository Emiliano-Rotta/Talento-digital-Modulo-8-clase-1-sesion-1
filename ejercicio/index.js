const express = require('express');

const librosRoutes = require('./routes/libros');
const usuariosRoutes = require('./routes/usuarios');

const app = express();
const PORT = 3000;

// Rutas
app.use('/libros', librosRoutes);
app.use('/usuarios', usuariosRoutes);

// Servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto:${PORT}`);
});

