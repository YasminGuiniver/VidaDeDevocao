var database = require("../database/config")


function listarVersiculos() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente.")
    var instrucaoSql = `
    SELECT idVersiculo AS id, CONCAT(tbLivro.nomeLivro, ' ', tbVersiculo.numeroCapitulo, ':', tbVersiculo.numeroVersiculo) AS Referencia FROM tbVersiculo
    JOIN tbLivro ON tbVersiculo.fkLivro = tbLivro.idLivro;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarVersiculos
};