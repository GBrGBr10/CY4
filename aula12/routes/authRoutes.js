const express = require('express');
const authController = require('../controller/authController');
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router();

router.post('/login', authController.login);
router.post('/refresh', authController.refresh);
router.post('/logout', authController.logout);

router.get('/perfil', authMiddleware.tokenValidation, (req, res) => {
    res.json( {mensagem: `Bem vindo ${req.user.email}!`} )
});

module.exports = router;