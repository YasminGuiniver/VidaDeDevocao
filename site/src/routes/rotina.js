var express = require("express");
var router = express.Router();

const rotinaController = require("../controllers/rotinaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/verificaRotina/:id", function (req, res) {
    rotinaController.verificaRotina(req, res);
});

router.post("/cadastrarRotina", function(req, res) {
    rotinaController.cadastrarRotinaUsuario(req,res);
})

router.get("/listarRotina/:id", function(req, res) {
    rotinaController.listarRotinaUsuario(req, res);
})

module.exports = router;