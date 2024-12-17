const express = require('express');
const router = express.Router();
let usuarios = require('../data/usuarios');
let libros = require('../data/libros');

// Obtener todos los usuarios
router.get('/', (req, res) => {
    res.json({
        data: usuarios,
        links: [
            { rel: 'self', href: '/usuarios' },
            { rel: 'create', href: '/usuarios' }
        ]
    });
});

// Obtener un usuario específico
router.get('/:id', (req, res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    res.json({
        data: usuario,
        links: [
            { rel: 'self', href: `/usuarios/${usuario.id}` },
            { rel: 'edit', href: `/usuarios/${usuario.id}` },
            { rel: 'borrowed-books', href: `/usuarios/${usuario.id}/libros` },
            { rel: 'collection', href: '/usuarios' }
        ]
    });
});

// Registrar un préstamo de libro
router.post('/:id/libros', (req, res) => {
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    const { libroId } = req.body;
    const libro = libros.find(l => l.id === libroId);
    if (!libro) return res.status(404).json({ error: 'Libro no encontrado' });

    usuario.librosPrestados.push({ ...libro, fechaPrestamo: new Date() });
    res.status(200).json({
        data: usuario,
        links: [
            { rel: 'self', href: `/usuarios/${usuario.id}` },
            { rel: 'borrowed-books', href: `/usuarios/${usuario.id}/libros` },
            { rel: 'collection', href: '/usuarios' }
        ]
    });
});

module.exports = router;

