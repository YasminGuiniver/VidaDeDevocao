var express = require("express");
var router = express.Router();

var jogoController = require('../controllers/jogoController');

router.post("/cadastroPontuacao", function (req, res) {
    jogoController.cadastrarPontuacao(req, res);
});

module.exports = router;