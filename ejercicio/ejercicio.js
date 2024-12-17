//Diseña una API RESTful para gestionar una aplicación de biblioteca. 
 
// La API debe incluir los siguientes recursos y funcionalidades:

// Recursos principales:

// Libros: Cada libro debe tener un título, un autor, un género, y el año de publicación.
// Usuarios: Cada usuario debe tener un nombre, un email y una lista de libros prestados.

// Endpoints requeridos:
// Obtener la lista de todos los libros.
// Obtener detalles de un libro específico.
// Crear, actualizar y eliminar libros.

// Consultar todos los usuarios registrados.
// Obtener detalles de un usuario específico.
// Registrar libros prestados por un usuario (incluyendo la fecha de préstamo).

// HATEOAS:
// Todos los endpoints deben incluir enlaces relacionados que permitan navegar por los recursos. Por ejemplo:

// Un libro debe incluir enlaces para actualizar, eliminar, o registrar un préstamo.
// Un usuario debe incluir enlaces para ver sus libros prestados o editar su información.

// Requisitos adicionales:
// Utilizar un servidor basado en Express.js.
// Los datos deben estar almacenados en arrays simulando bases de datos.
// Respetar buenas prácticas, como modularización de código, uso de middlewares para manejar errores y rutas claras.


//estructura del proyecto (Pueden hacerlo todo en index.js)
// /biblioteca-api
// |-- index.js
// |-- routes/
// |   |-- libros.js
// |   |-- usuarios.js
// |-- data/
// |   |-- libros.js
// |   |-- usuarios.js
