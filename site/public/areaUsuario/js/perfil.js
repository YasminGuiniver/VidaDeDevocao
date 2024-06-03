b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

var imagemUser = sessionStorage.IMAGEM_USUARIO;

if (imagemUser) {
    document.getElementById('img_perfil').src = `imgsUsuarios/${imagemUser}`;
} else {
    document.getElementById('img_perfil').src = `imgsUsuarios/padraoUser.png`;
}

function listar () {
    var idUsuario = sessionStorage.ID_USUARIO;
}

 // Abrir modal de atualizar
 document.getElementById("btnAtualizar").addEventListener("click", function() {
    document.getElementById("modalAtualizar").style.display = "block";
});

// Abrir modal de deletar
document.getElementById("btnDeletar").addEventListener("click", function() {
    document.getElementById("modalDeletar").style.display = "block";
});

document.getElementById("btnCancelar").addEventListener("click", function() {
    document.getElementById("modalAtualizar").style.display = "none";
});

// Fechar modal ao clicar no botão fechar
document.querySelectorAll(".close").forEach(function(closeBtn) {
    closeBtn.addEventListener("click", function() {
        this.closest(".modal").style.display = "none";
    });
});



// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
};