$(document).ready(function() {
  // Función para mostrar el reproductor emergente y reproducir el video
  function mostrarReproductor(url) {
    $('#video-source').attr('src', url);
    $('#video')[0].load();
    $('#reproductor').show();
  }

  // Función para ocultar el reproductor emergente
  function ocultarReproductor() {
    $('#video')[0].pause();
    $('#video-source').attr('src', '');
    $('#reproductor').hide();
  }

  // Evento de clic en cualquier enlace
  $('a').click(function(e) {
    e.preventDefault(); // Evitar la acción predeterminada del enlace
    var url = $(this).attr('href');
    mostrarReproductor(url);
  });

  // Evento de clic en el botón "Cerrar"
  $('#cerrar').click(function() {
    ocultarReproductor();
  });
});





$(document).ready(function(){
$("select").change(function(){
$(this).find("option:selected").each(function(){
var optionValue = $(this).attr("value");
if(optionValue){
$(".box").not("." + optionValue).hide();
$("." + optionValue).show();} else{
$(".box").hide();}});}).change();});