var dashboardModel = require('../models/dashboardModel');

function listarVersiculos(req, res) {
    dashboardModel.listarVersiculos().then(function (resultado) {
            res.status(200).json(resultado);
        })
}

module.exports = {
    listarVersiculos
}
