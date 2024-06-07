var express = require("express");
var router = express.Router();

var perfilController = require('../controllers/perfilController');


router.get("/listarRotinas", function(req, res) {
    perfilController.listarRotina(req, res);
})

router.get("/listarPerfilUsuario/:id", function (req, res) {
    perfilController.listaPerfil(req, res);
});

module.exports = router;