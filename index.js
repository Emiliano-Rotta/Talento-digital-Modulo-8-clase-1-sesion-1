// APIs RESTful

// es una interfaz que permite a diferentes sistemas comunicarse entre sí utilizando un conjunto de reglas basadas en el protocolo HTTP(Hypertext Transfer Protocol) 


// HTTP(Hypertext Transfer Protocol): es un protocolo de comunicación utilizado para la transmisión de datos en la web.

// const express = require ('express')
// const app = express()
// const PORT = 3000
// app.use(express.json()); // Middleware para parsear JSON SIEMPRE PARA EL POST Y PUT

// app.get('/api/saludo',(req, res)=>{
//     res.json({mensaje: 'Hola a todos'})
// })

// app.post('/api/reservas',(req, res)=>{
//     const { nombre, fechaInicio, fechaFin} = req.body
//     res.json({
//         mensaje:"Reserva creada con exito",
//         datos: {nombre, fechaInicio, fechaFin}
//     })
// })

// app.listen(PORT, () =>{
//     console.log(`Servidor corriendo en el puerto: ${PORT}`)
// })


// REST (Representational State Transfer) es un estilo de arquitectura que define un conjunto de restricciones y prácticas para crear servicios web escalables, simples y eficientes.

// REST sirve para:
// Conectar aplicaciones (frontend con backend, microservicios entre sí).
// Permitir la interoperabilidad entre sistemas heterogéneos.


// Reglas de una arquitectura REST
// 1 Utilizar verbos HTTP correctamente.
// 2 Trabajar con recursos representados por URLs claras y simples.
// 3 Enviar respuestas claras con códigos de estado HTTP.


// Ejercicio:
// Diseñar rutas para una API de un blog:
// GET /posts
// POST /posts
// PUT /posts/:id
// DELETE /posts/:id


// const express = require ('express')
// const app = express()
// const PORT = 3000
// app.use(express.json()); 

// app.get('/post',(req, res)=>{
//     res.json([{ id: 1, titulo: 'Primer post' }, { id: 2, titulo: 'Segundo post' }]);
// })

// app.post('/post',(req, res)=>{
//     const { titulo, contenido } = req.body
//     res.status(201).json({ mensaje: 'Post creado', titulo, contenido });
// })

// app.put('/post/:id',(req, res)=>{
//     const { id } = req.params;
//     const { titulo, contenido } = req.body
//     res.json({ mensaje: `Post ${id} actualizado`, titulo, contenido });
// })

// app.delete('/post/:id',(req, res)=>{
//     const { id } = req.params;
//     res.json({ mensaje: `Post ${id} eliminado` });
// })

// app.listen(PORT, () =>{
//     console.log(`Servidor corriendo en el puerto: ${PORT}`)
// })


//Busqueda y filtro

// const express = require ('express')
// const app = express()
// const PORT = 3000
// app.use(express.json()); 
// const productos = [
//     { id: 1, nombre: 'Camiseta', categoria: 'ropa', precio: 20 },
//     { id: 2, nombre: 'Pantalón', categoria: 'ropa', precio: 40 },
//     { id: 3, nombre: 'Zapatos', categoria: 'calzado', precio: 50 }
// ];
// app.get('/productos', (req, res) => {
//     const { categoria, precio_min } = req.query; // despues le paso en la url http://localhost:3000/productos?categoria=ropa&precio_min=25.

//     let resultado = productos;

//     if (categoria) {
//         resultado = resultado.filter(prod => prod.categoria === categoria);
//     }
//     if (precio_min) {
//         resultado = resultado.filter(prod => prod.precio >= Number(precio_min));
//     }

//     res.json(resultado);
// });



// app.listen(PORT, () =>{
//     console.log(`Servidor corriendo en el puerto: ${PORT}`)
// })



// HATEOAS (Hypermedia As The Engine Of Application State)
// En REST, HATEOAS permite que las respuestas de una API incluyan enlaces a otras acciones posibles. Esto guía al cliente sobre cómo interactuar con los datos



const express = require('express');
const app = express();
const PORT = 3000;

const usuarios = [
    { id: 1, nombre: 'Juan', email: 'juan@example.com' },
    { id: 2, nombre: 'Ana', email: 'ana@example.com' },
    { id: 3, nombre: 'Luis', email: 'luis@example.com' }
];

// Endpoint HATEOAS para obtener información de un usuario
app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const usuario = usuarios.find(u => u.id === parseInt(id));

    if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.json({
        usuario: {
            id: usuario.id,
            nombre: usuario.nombre,
            email: usuario.email
        },
        links: [
            { rel: 'self', href: `http://localhost:3000/usuarios/${id}` },
            { rel: 'edit', href: `http://localhost:3000/usuarios/${id}/editar` },
            { rel: 'delete', href: `http://localhost:3000/usuarios/${id}/eliminar` },
            { rel: 'collection', href: `http://localhost:3000/usuarios` },
            { rel: 'friends', href: `http://localhost:3000/usuarios/${id}/amigos` }
        ]
    });
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


