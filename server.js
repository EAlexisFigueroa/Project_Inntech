const express = require('express');
const app = express();

// Importar la conexión a la base de datos
const db = require('./db');

// Importar las rutas de usuario
const userRoutes = require('./routes/userRoutes');

// Middleware para parsear el cuerpo de las peticiones (necesario para POST y PUT)
app.use(express.json());

// Utilizar las rutas definidas en userRoutes
app.use('/api', userRoutes);

app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
