const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Iamdying',
    database: 'Project_NewInntech'
});

connection.connect(error => {
    if (error) throw error;
    console.log("Conectado exitosamente a la base de datos.");
});

module.exports = connection;
