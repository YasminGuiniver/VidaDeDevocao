var express = require("express");
var router = express.Router();

var dashboard = require('../controllers/dashboardController');

router.get("/listarVersiculos", function (req, res) {
    dashboard.listarVersiculos(req, res);
});

router.get("/listarQuantidadePontos/:id", function (req, res) {
    dashboard.listarQuantidadePontos(req, res);
});

module.exports = router;