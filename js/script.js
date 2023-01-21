var texto = document.querySelector("#texto-ingresado");
var button = document.querySelector("#boton-encriptar");
var button2 = document.querySelector("#boton-desencriptar")
var copy = document.querySelector("#copiar");
button.onclick = encriptar;
button2.onclick = desencriptar;
copy.addEventListener("click", copiar, false);
document.querySelector("#copiar").style.visibility="hidden"


function encriptar(){
    var mensaje = texto.value;
    mensaje = mensaje.toLowerCase();
    var encriptado = mensaje
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat")
    .replaceAll("o", "ober");
    document.querySelector("#pantalla").innerHTML = encriptado;
    document.querySelector("#munieco").style.display = "none";
    document.querySelector("#sin-mensajes").style.display = "none";
    document.querySelector("#cabecera-pantalla").innerHTML = "Mensaje Encriptado: ";
    document.querySelector("#copiar").style.visibility = "visible";
    
    
}
function desencriptar(){
    var encriptado = texto.value;
    encriptado = encriptado.toLowerCase();
    var desencriptado = encriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u")
    .replaceAll("ober", "o");
    document.querySelector("#pantalla").innerHTML = desencriptado;
    document.querySelector("#munieco").style.display = "none";
    document.querySelector("#sin-mensajes").style.display = "none";
    document.querySelector("#cabecera-pantalla").innerHTML = "Mensaje Desencriptado: ";
    document.querySelector("#copiar").style.visibility = "visible";
    
}


function copiar() {
  var texto = document.querySelector("#pantalla");

  var inputFalso = document.createElement("input");
  inputFalso.setAttribute("value", texto.innerHTML);

  document.body.appendChild(inputFalso);

  inputFalso.select();

  document.execCommand("copy");

  document.body.removeChild(inputFalso);
  alert("Copiado al portapales!");
}
