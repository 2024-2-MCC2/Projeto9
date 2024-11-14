const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para criar novo usuário
router.post('/register', userController.createUser);

// Rota para buscar usuário por email (para login)
router.post('/login', userController.getUserByEmail);

// Rota para atualizar usuário
router.put('/update/:id', userController.updateUser);

// Rota para deletar usuário
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
