	$(document).ready(function() {
		$('#return').click(function(evento) {
			$('#back-btn').fadeOut('fast');
				}),
	$(document).ready(function() {
			$('#return').click(function(){
				$('.rightTotal').animate({"margin-left":"100%"}),
				$('#title0').fadeOut('fast');
				});
			});
		

	});
	
	
	$(document).ready(function(){
 		$("#miboton").click(function(){
		$('#title0').fadeIn('fast'),
    	$("#title0").html("<p>Música</p>");
 });
});	

	$(document).ready(function(){
 		$("#boton").click(function(){
		$('#title0').fadeIn('fast'),
    	$("#title0").html("<p>Cineclub</p>");
		});
     
}),
	$(document).ready(function(){
    	$('#boton').click(function(){
			$("#rightTotal").animate({"margin-left": "-100%"});
    }),
	
	$(document).ready(function() {
		$('#boton').click(function(evento) {
			$('#back-btn').fadeIn('fast');
				});
			});			
});
	$(document).on("ready", main);
	
	function cargarNota(url){
		$("#rightTotal").text("Cargando....");
		$("#rightTotal").load(url);
	}
	function main(){
		$("#boton").on("click",function(){
			cargarNota("http://www.farodeoriente.org/prueba/cineclub.html");
			});
		
	}
	
$(document).ready(function(){
   $("#boton").click(function(evento){
      evento.preventDefault();
	  $('#rightTotal').text('Cargando....');
      $("#rightTotal").load("http://www.farodeoriente.org/prueba/cineclub.html");
   });
});

$(document).ready(function(){
   $("#miboton").click(function(evento){
      evento.preventDefault();
	  $('#rightTotal').text('Cargando....');
      $("#rightTotal").load("http://www.farodeoriente.org/prueba/musica.html");
   });
});
	$(document).ready(function(){
    	$('#miboton').click(function(){
			$("#rightTotal").animate({"margin-left": "-100%"});
    }),
	
	$(document).ready(function() {
		$('#miboton').click(function(evento) {
			$('#back-btn').fadeIn('fast');
				});
			});			
});

$(document).ready(function(){
   var refreshId = setInterval(rightTotal, 30000);
   $.ajaxSetup({ cache: false });
 });