b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

var imagemUser = sessionStorage.IMAGEM_USUARIO;

if (imagemUser) {
    document.getElementById('img_perfil').src = `imgsUsuarios/${imagemUser}`;
} else {
    document.getElementById('img_perfil').src = `imgsUsuarios/padraoUser.png`;
}

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

    





