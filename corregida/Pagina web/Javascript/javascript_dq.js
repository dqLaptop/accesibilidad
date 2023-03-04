function ocultarindice() {
    var contenido= document.getElementById("indice");
        if(contenido.className=="indice") {
            contenido.className="oculto";
        }else{
            contenido.className="indice";
        }
   
}
function ocultarMostrarInfo(elemento){
    var parrafo = document.getElementById("contenidos_" + elemento);
    var enlace= document.getElementById("enlace_" + elemento);
    if(parrafo.style.display=="none"){
        parrafo.style.display="block";
        enlace.innerHTML="Ocultar contenido";
    }else{
        parrafo.style.display="none";
        enlace.innerHTML="Mostrar contenido";
    }
    
    
}






