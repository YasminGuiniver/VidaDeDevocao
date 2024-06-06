b_usuario.innerHTML = sessionStorage.NOME_USUARIO;
id = sessionStorage.ID_USUARIO;

var imagemUser = sessionStorage.IMAGEM_USUARIO;

if (imagemUser) {
    document.getElementById('img_perfil').src = `imgsUsuarios/${imagemUser}`;
} else {
    document.getElementById('img_perfil').src = `imgsUsuarios/padraoUser.png`;
}

const momentoBanco = "";

fetch("/areaUsuario/dashboard/listarVersiculos", {
    method: "GET",
})
.then(function (resposta) {
    resposta.json().then((versiculos) => {
        const showRandomVersiculo = () => {
            const randomIndex = Math.floor(Math.random() * versiculos.length);
            referencia_versiculo.innerHTML = versiculos[randomIndex].Referencia;
        };

        showRandomVersiculo();
        const interval = setInterval(showRandomVersiculo, 10000);
    });
})
.catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
});

fetch(`/areaUsuario/dashboard/listarQuantidadePontos/${id}`, {
    method: "GET",
})
.then(function (resposta) {
    resposta.json().then((pontos) => {
        quantidade_pontos.innerHTML = pontos[0].pontosTotais;
    })
}).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
});

function calcularMinutosLogados(momentoBanco) {
    const agora = new Date();
    const diferencaMilissegundos = agora - momentoBanco;
    const diferencaMinutos = Math.floor(diferencaMilissegundos / (1000 * 60));

    return diferencaMinutos;
}

function pegarMomentoCadastroBanco () {
    fetch(`/areaUsuario/dashboard/momentoCadastro/${id}`, {
        method: "GET",
    })
    .then(function (resposta) {
        return resposta.json();
    })
    .then(function (data) {
        if (data.length > 0 && data[0].momento) {
            const momentoBanco = new Date(data[0].momento);

            function atualizarTempoLogado() {
                const minutosLogados = calcularMinutosLogados(momentoBanco);
                tempo_total.innerHTML = `${minutosLogados} mins`;
            }
            

            setInterval(atualizarTempoLogado, 60000);
            atualizarTempoLogado();
            // Formatar a data para exibir em português
            const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const formatoData = new Intl.DateTimeFormat('pt-BR', opcoes);
            const dataFormatada = formatoData.format(momentoBanco);

            console.log(dataFormatada); // Exibe a data formatada em português
            
            
        } else {
            console.log("Dados inválidos recebidos");
        }
    })
    .catch(function (erro) {
        console.log(`#ERRO: ${erro}`);
    });
}

pegarMomentoCadastroBanco();
