var database = require("../database/config")


function cadastroContato(nome, email, mensagem) {
    var instrucaoSql = `
    INSERT INTO tbContato (nomeCliente, emailCliente, mensagemCliente, momentoContato) VALUES (
    '${nome}', '${email}', '${mensagem}', now());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
   cadastroContato
}