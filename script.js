console.log("Funcionando");
console.log(window.location.href);

function realizarLogin() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  if (email === "senai@gmail.com" && senha === "senai") {
    //window.location.href = "../sobre.html";
    window.open("../sobre.html", "_blank");
  } else {
    alert("Credencias incorretas");
    document.getElementById("senha").value = "";
    document.getElementById("senha").placeholder = "Senha invalida";
  }
}

function exibirSenha() {
  var tipo_atual = document.getElementById("senha").type;

  if (tipo_atual === "text") {
    document.getElementById("senha").type = "password";
  } else {
    document.getElementById("senha").type = "text";
  }
}
