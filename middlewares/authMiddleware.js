const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).send('Acceso denegado. No se proporcionó token.');
    }

    try {
        const verified = jwt.verify(token.split(" ")[1], 'Iamdying');
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send('Token inválido.');
    }
};

module.exports = verifyToken;
