var contatoModel = require("../models/contatoModel");

function cadastroContato(req, res) {

    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var mensagem = req.body.mensagemServer;

    contatoModel.cadastroContato(nome, email, mensagem).then(function(resposta) {
        res.status(200).json(resposta);
    });
}

module.exports = {
    cadastroContato
}