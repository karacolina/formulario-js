$(document).ready(function() {
	$(".form #error").hide();


	$("#login-form").submit(function(event) {

		//Guardar en variables el valor que tengan las cajas de texto
		var nombre = $("#name").val();
		var apellido = $("#apellido").val();
		var mail = $("#mail").val();
		var telefono = $("#telefono").val();
		var password = $("#password").val();


		//si nombre es distinto de vacio
		if(nombre != ""){
			console.log("nombre :" +nombre);

		}else{
			$("#name").addClass('error2');
			$("#error").fadeIn();

		}

		//si apellido es distinto de vacio
		if(apellido != ""){
			console.log("apellido :" +apellido);

		}else{
			$(".form-control").addClass('error2');
			$("#error").fadeIn();

		}

		//para que no se cargue la pag
		event.preventDefault();


		
	});
	
});