var jogoModel = require("../models/jogoModel");

function cadastrarPontuacao(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkUsuario = req.body.idServer;
    var pontosTotal = req.body.pontosServer;
   
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        jogoModel.cadastrarPontuacao(fkUsuario, pontosTotal)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

module.exports = {
    cadastrarPontuacao
}