function verPregunta(elemento) {
   var pregunta;
   for (var i = 1; i < elemento; i++) {
     pregunta= document.getElementById("preg" + i);
     pregunta.className="oculto";
   }
   pregunta = document.getElementById("preg" + elemento);
   pregunta.className= "";
   return false;
}

function validar() {
   var form = document.formulario;
   var personaje = document.formulario.personaje;
   var heroe = document.formulario.heroe;
   var elemento = document.formulario.consola;
   var elemento2 = document.formulario.saga;
   var elemento3 = document.formulario.destacado;

   if (personaje.value == 0 || personaje.value == " ") {
      alert("El campo del personaje está vacío, por favor rellenelo");
      form.personaje.value = "";
      form.personaje.focus();
      return false;
   }
   if (!elemento.checked) {
      alert("El campo de las plataformas esta vacío, por favor rellenelo");
      return false;
   }
   if (!elemento2.checked) {
      alert("El campo de la saga esta vacío, por favor rellenelo");
      return false;
   }
   if (!elemento3.checked) {
      alert("El campo de que destacas esta vacío, por favor rellenelo");
      return false;
   }
   if (heroe.value == 0 || heroe.value == " ") {
      alert("El campo del heroe está vacío, por favor rellenelo");
      form.heroe.value = "";
      form.heroe.focus();
      return false;
   }

}