function olaJavaScript() {
  /* 
        Formas de criar variavel
        var
        let
        const
    */
  //document acessa o DOM do HTML
  let login = document.getElementById("login").value;
  let password = document.getElementById("password").value;

  if (login == "Cesul" && password == "cesul") {
    alert("Login realizado com sucesso !");
  } else {
    alert("Usuário ou Senha incorreta.");
  }
}
