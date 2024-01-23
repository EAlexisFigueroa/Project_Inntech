Esta es la información inicial del Project_Inntech

Etapa 1: Desarrollo de la API Rest
Esta es la primera etapa de nuestro proyecto, en la cual desarrollaremos una API RESTful utilizando Express para realizar operaciones CRUD de usuarios y habilitar la autenticación JWT.

Requisitos
Asegúrate de tener lo siguiente instalado antes de comenzar:

Node.js: Descargar e Instalar Node.js
npm: Se instala automáticamente con Node.js
Configuración del Proyecto
Clona este repositorio en tu máquina local:
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio


## Instala las dependencias del proyecto:
npm install

Configura la base de datos MySQL y ajusta la configuración en el archivo .env:
DB_HOST=tu-host
DB_USER=tu-usuario
DB_PASSWORD=tu-contraseña
DB_DATABASE=nombre-de-la-base-de-datos


Ejecuta el servidor:
npm start
Rutas de la API
POST /api/signup: Registra un nuevo usuario.
POST /api/signin: Inicia sesión y genera un token JWT.
GET /api/users: Obtiene la lista de usuarios registrados.
GET /api/users/:id: Obtiene un usuario por ID.
PUT /api/users/:id: Actualiza un usuario por ID.
DELETE /api/users/:id: Elimina un usuario por ID.
Uso de la Autenticación JWT


Para acceder a rutas protegidas, debes incluir el token JWT en los encabezados de tus solicitudes HTTP. El token se genera al iniciar sesión exitosamente.

GET /api/users
Authorization: Bearer tu-token-jwt
Contribución


Si deseas contribuir a este proyecto, por favor sigue estos pasos:
Haz un fork del repositorio.
Crea una rama para tu contribución.
Realiza tus cambios y asegúrate de que las pruebas pasen.
Envía un pull request.
