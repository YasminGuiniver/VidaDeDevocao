var express = require("express");
var router = express.Router();

var perfilController = require('../controllers/perfilController');

const upload = require("../config/configUpload");

router.get("/listarRotinas", function(req, res) {
    perfilController.listarRotina(req, res);
})

router.get("/listarPerfilUsuario/:id", function (req, res) {
    perfilController.listaPerfil(req, res);
});

router.put("/atualizarPerfil", upload.single('imagem'), function(req, res) {
    perfilController.atualizarPerfil(req, res);
});

router.put("/desativarConta", function(req, res) {
    perfilController.desativarConta(req, res);
});

module.exports = router;