var rotinaModel = require("../models/rotinaModel");

function verificaRotina(req, res) {
    var idUsuario = req.params.id;
    rotinaModel.verificaRotina(idUsuario).then(function(resultado) {
        res.status(200).json(resultado);
    });
}

function cadastrarRotinaUsuario (req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var idRotina = req.body.idRotinaServer;

    rotinaModel.cadastrarRotina(idUsuario, idRotina).then(function(resultado) {
        res.status(200).json(resultado);
    })
}

function listarRotinaUsuario(req, res) {
    var idUsuario = req.params.id;

    rotinaModel.listarRotinaUsuario(idUsuario).then(function(resultado) {
        res.status(200).json(resultado);
    });
}

function listarUsuariosComAMesmaRotina(req, res) {
    var idUsuario = req.params.id;

    rotinaModel.listarUsuariosComAMesmaRotina(idUsuario).then(function(resultado) {
        res.status(200).json(resultado);
    })
}

module.exports = {
    verificaRotina,
    cadastrarRotinaUsuario,
    listarRotinaUsuario,
    listarUsuariosComAMesmaRotina
}