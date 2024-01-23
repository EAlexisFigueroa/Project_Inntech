const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifyToken = require('../middlewares/authMiddleware'); // Asegúrate de que el path sea correcto

// Rutas para manejar las operaciones CRUD de usuarios
router.get('/users', userController.listAllUsers);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// Rutas para manejar el registro y el inicio de sesión de usuarios
router.post('/signup', userController.signup);
router.post('/signin', userController.signin);

// Ruta protegida que requiere autenticación
router.get('/user-data', verifyToken, (req, res) => {
    // Si el token es válido, la información del usuario estará en req.user
    res.send(req.user);
});

module.exports = router;


