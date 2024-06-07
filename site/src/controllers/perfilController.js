var perfilModel = require('../models/perfilModel');

function listaPerfil(req, res) {
    var idUsuario = req.params.id;
    perfilModel.listaPerfil(idUsuario).then(function (resultado) {
            res.status(200).json(resultado);
        })
}

function listarRotina(req, res) {
    perfilModel.listarRotina().then(function (resultado) {
        res.status(200).json(resultado);
    })
}

module.exports = {
    listarRotina,
    listaPerfil
}