
const db = require('../db');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.listAllUsers = (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).json(results);
    });
};

exports.createUser = (req, res) => {
    const { nombre, email, contraseña } = req.body;
    db.query('INSERT INTO usuarios (nombre, email, contraseña) VALUES (?, ?, ?)', 
            [nombre, email, contraseña], 
            (err, results) => {
                if (err) {
                    return res.status(500).send(err);
                }
                res.status(201).send('Usuario creado con éxito');
            });
};

exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { nombre, email, contraseña } = req.body;
    db.query('UPDATE usuarios SET nombre = ?, email = ?, contraseña = ? WHERE id = ?', 
            [nombre, email, contraseña, id], 
            (err, results) => {
                if (err) {
                    return res.status(500).send(err);
                }
                res.status(200).send('Usuario actualizado con éxito');
            });
};

exports.deleteUser = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM usuarios WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(200).send('Usuario eliminado con éxito');
    });
};




//Estas funciones siguientes se encargarán del registro y del inicio de sesión de los usuarios

exports.signup = async (req, res) => {
    const { nombre, email, contraseña } = req.body;
    try {
        const contraseñaHash = await bcrypt.hash(contraseña, 10);
        db.query('INSERT INTO usuarios (nombre, email, contraseña) VALUES (?, ?, ?)', 
                [nombre, email, contraseñaHash], (err, results) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.status(201).send('Usuario registrado con éxito');
                });
    } catch (err) {
        res.status(500).send('Error en el servidor');
    }
};

exports.signin = (req, res) => {
    const { email, contraseña } = req.body;
    db.query('SELECT * FROM usuarios WHERE email = ?', [email], async (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        if (results.length == 0) {
            return res.status(401).send('Usuario no encontrado');
        }

        const usuario = results[0];
        const contraseñaValida = await bcrypt.compare(contraseña, usuario.contraseña);
        if (!contraseñaValida) {
            return res.status(401).send('Contraseña incorrecta');
        }

        const token = jwt.sign({ id: usuario.id }, 'Iamdying', { expiresIn: '24h' });
        res.status(200).json({ token });
    });
};