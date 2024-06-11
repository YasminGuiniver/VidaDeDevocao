function entrar() {

    let modal = document.getElementById("myModal");
    let btnFecharModal = document.getElementsByClassName("close")[0];
    let btnFecharModalDentro = document.getElementById('botaoFinal');

    var emailVar = emailInput.value;
    var senhaVar = txtSenha.value;

    if (emailVar == "" || senhaVar == "") {
        modal.style.display = "block";
        btnFecharModal.onclick = function () {
            modal.style.display = "none";
        }
        btnFecharModalDentro.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        return false;
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                if(json.status == 0) {
                    texto_modal_login.innerHTML = "Essa conta não existe"
                    modal.style.display = "block";

                    btnFecharModalDentro.onclick = function () {
                        modal.style.display = "none";
                    }
            
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                } else {
                    sessionStorage.IMAGEM_USUARIO = json.imagem;
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.ID_USUARIO = json.id;
    
                    setTimeout(function () {
                        window.location = "./areaUsuario/dashboard.html";
                    }, 1000);
                }

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            modal.style.display = "block";
            btnFecharModal.onclick = function () {
                modal.style.display = "none";
            }
            btnFecharModalDentro.onclick = function () {
                modal.style.display = "none";
            }

            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
            return false;
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}