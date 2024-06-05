var express = require("express");
var router = express.Router();

var dashboard = require('../controllers/dashboardController');

router.get("/listarVersiculos", function (req, res) {
    dashboard.listarVersiculos(req, res);
});

router.get("/listarQuantidadePontos/:id", function (req, res) {
    dashboard.listarQuantidadePontos(req, res);
});

router.get("/momentoCadastro/:id", function(req, res) {
    dashboard.momentoUsuarioCadastrado(req, res);
})

module.exports = router;