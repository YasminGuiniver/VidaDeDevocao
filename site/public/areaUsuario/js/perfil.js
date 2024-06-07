b_usuario.innerHTML = sessionStorage.NOME_USUARIO;
id = sessionStorage.ID_USUARIO;

var imagemUser = sessionStorage.IMAGEM_USUARIO;

if (imagemUser) {
    document.getElementById('img_perfil').src = `imgsUsuarios/${imagemUser}`;
} else {
    document.getElementById('img_perfil').src = `imgsUsuarios/padraoUser.png`;
}

function listar() {
    var idUsuario = sessionStorage.ID_USUARIO;
}

// Abrir modal de atualizar
document.getElementById("btnAtualizar").addEventListener("click", function () {
    document.getElementById("modalAtualizar").style.display = "block";
});

// Abrir modal de deletar
document.getElementById("btnDeletar").addEventListener("click", function () {
    document.getElementById("modalDeletar").style.display = "block";
});

document.getElementById("btnCancelar").addEventListener("click", function () {
    document.getElementById("modalAtualizar").style.display = "none";
});

// Fechar modal ao clicar no botão fechar
document.querySelectorAll(".close").forEach(function (closeBtn) {
    closeBtn.addEventListener("click", function () {
        this.closest(".modal").style.display = "none";
    });
});

// Fechar modal ao clicar fora dele
window.onclick = function (event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
};

fetch("/areaUsuario/perfil/listarRotinas", {
    method: 'GET'
}).then(function (resposta) {
    resposta.json().then(resposta => {
        resposta.forEach(rotina => {
            select_rotinas.innerHTML += `<option value="1">${rotina.descricao_rotina}</option>`
        })
    })
}).catch(function (erro) {
    console.log(`#ERRO: ${erro}`);
});

fetch(`/areaUsuario/perfil/listarPerfilUsuario/${id}`, {
    method: 'GET'
}).then(function (resposta) {
    resposta.json().then(resposta => {
        document.getElementById('img_perfil_form').src = `imgsUsuarios/${imagemUser}`;
        document.getElementById('nomeForm').value = resposta[0].nome_usuario;
        document.getElementById('emailForm').value = resposta[0].emailUsuario;
        document.getElementById('senhaForm').value = resposta[0].senhaUsuario;
        document.getElementById('telefoneForm').value = formatarTelefone(resposta[0].telefoneUsuario);
        document.getElementById('rotinaForm').value = resposta[0].nome_rotina;

        select_rotinas.innerHTML += `<option selected>${resposta[0].nome_rotina} -- atual</option>`
        nomeModal.value = resposta[0].nome_usuario;
        emailModal.value = resposta[0].emailUsuario;
        senhaModal.value = resposta[0].senhaUsuario;
        telefoneModal.value = formatarTelefone(resposta[0].telefoneUsuario);

        console.log(resposta);
    })
}).catch(function (erro) {
    console.log(`#ERRO: ${erro}`);
});

function formatarTelefone(numero) {
    // Remove todos os caracteres não numéricos
    numero = numero.replace(/\D/g, '');

    return numero.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}