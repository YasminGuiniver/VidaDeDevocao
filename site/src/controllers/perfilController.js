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
    var nome = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;
    var imagem = req.file.filename;
    var telefone = req.body.telefone;
    var idUsuario = req.body.id;


    perfilModel.atualizarPerfil(nome, email, senha, imagem, telefone, idUsuario).then(function (resultado) {
        res.status(200).json(resultado);
    });
}

function desativarConta(req, res) {
    var idUsuario = req.params.id;

    perfilModel.desativarConta(idUsuario).then(function(resultado) {
        res.status(200).json(resultado);
    })
}

module.exports = {
    listarRotina,
    listaPerfil,
    atualizarPerfil,
    desativarConta
}