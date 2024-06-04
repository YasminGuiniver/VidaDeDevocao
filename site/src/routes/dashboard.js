var express = require("express");
var router = express.Router();

var dashboard = require('../controllers/dashboardController');

router.get("/listarVersiculos", function (req, res) {
    dashboard.listarVersiculos(req, res);
});

module.exports = router;