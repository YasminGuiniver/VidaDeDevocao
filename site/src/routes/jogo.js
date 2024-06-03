var express = require("express");
var router = express.Router();

var jogoController = require('../controllers/jogoController');

router.post("/pontuacao", function (req, res) {
    jogoController.cadastrar(req, res);
});

module.exports = router;