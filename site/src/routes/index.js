var express = require("express");
var router = express.Router();

var contatoController = require("../controllers/contatoController");

router.get("/", function (req, res) {
    res.render("index");
});

router.post("/contato", function(req, res) {
    contatoController.cadastroContato(req, res);
});

module.exports = router;