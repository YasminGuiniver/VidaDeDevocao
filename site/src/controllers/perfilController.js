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

function atualizarPerfil(req, res) {

    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var telefone = req.body.telefoneServer;
    var senha = req.body.senhaServer;
    var idUsuario = req.body.idServer;
    var rotina = req.body.idRotinaServer;
    var imagem = req.file.filename;


    perfilModel.atualizarPerfil(nome, email, telefone, senha, idUsuario, rotina, imagem).then(function (resultado) {
        res.status(200).json(resultado);
    });
}

module.exports = {
    listarRotina,
    listaPerfil,
    atualizarPerfil
}