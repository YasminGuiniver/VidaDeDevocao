window.onload = function contato () {
    let btnAbrirModal = document.getElementById("openModal");
    let modal = document.getElementById("myModal");
    let btnFecharModal = document.getElementsByClassName("close")[0];
    let btnFecharModalDentro = document.getElementById('botaoFinal');

    let inputNome = document.getElementById('nomeContatoInput');
    let inputEmail = document.getElementById('emailContatoInput');
    let inputTelefone = document.getElementById('telefoneContatoInput');
    let inputMensagem = document.getElementById('mensagemContatoText');
    
    btnAbrirModal.onclick = function () {
        modal.style.display = "block";
    }
    
    btnFecharModal.onclick = function () {
        modal.style.display = "none";
        inputNome.value = "";
        inputEmail.value = "";
        inputTelefone.value = "";
        inputMensagem.value = "";
    }
    
    btnFecharModalDentro.onclick = function () {
        modal.style.display = "none";
        inputNome.value = "";
        inputEmail.value = "";
        inputTelefone.value = "";
        inputMensagem.value = "";
    }
    
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}



