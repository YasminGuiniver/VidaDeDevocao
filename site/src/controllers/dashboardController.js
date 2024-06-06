var dashboardModel = require('../models/dashboardModel');

function listarVersiculos(req, res) {
    dashboardModel.listarVersiculos().then(function (resultado) {
            res.status(200).json(resultado);
        })
}

function listarQuantidadePontos(req, res) {
    var idUsuario = req.params.id;
    dashboardModel.listarQuantidadePontos(idUsuario).then(function (resultado) {
        res.status(200).json(resultado);
    })
}

function momentoUsuarioCadastrado(req, res) {
    var idUsuario = req.params.id;
    dashboardModel.momentoUsuarioCadastrado(idUsuario).then(function (resultado) {
        res.status(200).json(resultado);
    })
}

function mostrarVersiculoCompleto(req, res) {
    var idVersiculo = req.params.id;
    dashboardModel.mostrarVersiculoCompleto(idVersiculo).then(function (resultado) {
        res.status(200).json(resultado);
    })
}

module.exports = {
    listarVersiculos,
    listarQuantidadePontos,
    momentoUsuarioCadastrado,
    mostrarVersiculoCompleto
}
