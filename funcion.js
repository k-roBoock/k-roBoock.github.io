document.getElementById("boton").onclick = function(){
    console.log("Mostrar mediante evento otra habilidad ");
    document.getElementById("demo").innerHTML = "Vocacón de soporte y servicio. Excelente predisposición. Facilidad para seguir instrucciones y generar resultados de calidad.";
}
function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
  }
  
  function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
  }