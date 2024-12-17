const express = require('express');
const router = express.Router();
let libros = require('../data/libros');

// Obtener todos los libros
router.get('/', (req, res) => {
    res.json({
        data: libros,
        links: [
            { rel: 'self', href: '/libros' },
            { rel: 'create', href: '/libros' }
        ]
    });
});

// Obtener un libro específico
router.get('/:id', (req, res) => {
    const libro = libros.find(l => l.id === parseInt(req.params.id));
    if (!libro) return res.status(404).json({ error: 'Libro no encontrado' });

    res.json({
        data: libro,
        links: [
            { rel: 'self', href: `/libros/${libro.id}` },
            { rel: 'update', href: `/libros/${libro.id}` },
            { rel: 'delete', href: `/libros/${libro.id}` },
            { rel: 'collection', href: '/libros' }
        ]
    });
});

// Crear un nuevo libro
router.post('/', (req, res) => {
    const { titulo, autor, genero, anio } = req.body;
    const nuevoLibro = { id: libros.length + 1, titulo, autor, genero, anio };
    libros.push(nuevoLibro);
    res.status(201).json({
        data: nuevoLibro,
        links: [
            { rel: 'self', href: `/libros/${nuevoLibro.id}` },
            { rel: 'collection', href: '/libros' }
        ]
    });
});

module.exports = router;
