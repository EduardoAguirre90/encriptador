

//* funcion para asignar texto a los elementos
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
asignarTextoElemento("h1","Challenge: Encriptador");

//* funcion para copiar texto contenido de los recuadros con texto
function copiar(){
    let textoEncriptado = document.getElementById("texto_encriptado").value;
    //*console.log(typeof(textoEncriptado));
    //*console.log(textoEncriptado);
    if(textoEncriptado === ""){
        asignarTextoElemento("h2","agrega el texto encriptado");
    } else {
        navigator.clipboard.writeText(textoEncriptado);
        asignarTextoElemento("h2","");
        }
    return;
}

//* funcion para encriptar el texto
function encriptar(){
    //* obtenemos el contenido mediante id
    let contenidoHTML = document.getElementById("texto_desencriptado").value;
    //* se almacena la informacion en un array
    let cadenaTextoHTML=contenidoHTML.split("");
    //*console.log(typeof(caontenidoHTML));
    console.log(contenidoHTML);
    console.log(cadenaTextoHTML);
    console.log("Texto: ", [cadenaTextoHTML.length-1]);
    //* cambia los caracteres del array
    let textoModificado=cadenaTextoHTML.map(function(caracter){
        if (caracter === "a"){
            return "ai";
        } else if(caracter === "e"){
            return "enter";
        }else if(caracter === "i"){
            return "imes";
        } else if(caracter === "o"){
            return "ober";
        }else if(caracter === "u"){
            return "ufat";
        }else {
            return caracter;
        }
    });
    //* se une nuevamente formando la nueva cadena
    let resultadoTexto=textoModificado.join("");
    console.log(resultadoTexto);
    document.getElementById("texto_encriptado").innerText=resultadoTexto;
    
    //*alert("click desde la funcion");
}



//* funcion para desencriptar el texto
function desencriptar(){
    //* obtenemos el contenido mediante id
    let contenidoHTML = document.getElementById("texto_encriptado").value;
    //* se almacena la informacion en un array
    let cadenaTextoHTML=contenidoHTML.split("");
    //*console.log(typeof(caontenidoHTML));
    console.log(contenidoHTML);
    console.log(cadenaTextoHTML);
    console.log("Texto: ", [cadenaTextoHTML.length-1]);

    let resultadoTexto=contenidoHTML.replace(/ai/g,"a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");
    console.log(resultadoTexto);

    document.getElementById("texto_desencriptado").innerText=resultadoTexto;
    
    //*alert("click desde la funcion");
}

//* funcion para limpiar
function limpiar (){
    document.querySelector("#aviso").value = "";

}




