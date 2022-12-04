function pulaLinha() {

    document.write("<br>");
}

function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

var loginCadastrado = "Thalita";
var senhaCadastrada = "thalita12345";

var tentativas = 1;

while (tentativas <= 3) {

     loginInformado = prompt("Informe seu login");
     senhaInformada = prompt("Informe sua senha");


    if( loginCadastrado == loginInformado && senhaCadastrada == senhaInformada ) {

        mostra("Bem-vindo ao sistema " + loginInformado);

        break; 

    } else {

        alert("Login inválido. Tente novamente");
        tentativas++;

    }


}