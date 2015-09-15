$(document).ready(function() {
	$("#error").hide();


	$("#login-form").submit(function(event) {

		//Guardar en variables el valor que tengan las cajas de texto
		var nombre = $("#name").val();
		var apellido = $("#apellido").val();
		var mail = $("#mail").val();
		var telefono = $("#telefono").val();
		var password = $("#password").val();

		

		//si nombre es distinto de vacio
		if(nombre!= 0 && nombre.length>=3){
			console.log("nombre :" +nombre);
			$("#name").removeClass('error2');
		}else{
			$("#name").addClass('error2');
			$("#error").fadeIn();
		}

		//si apellido es distinto de vacio
		if(apellido!= 0 && apellido.length >= 3){
			console.log("apellido :" +apellido);
			$("#apellido").removeClass('error2');
		}else{
			$("#apellido").addClass('error2');
			$("#error").fadeIn();
		}

		//si email es distinto de vacio
		if(mail!= 0) {
			console.log("mail :" +mail);
			$("#mail").removeClass('error2');

		}else{
			$("#mail").addClass('error2')
			$("#error").fadeIn();
		}

		//si telefono es distinto de vacio
		if(telefono!= 0 && telefono.length == 8) {
			console.log("telefono :" +telefono);
			$("#telefono").removeClass('error2');
		}else{
			$("#telefono").addClass('error2')
			//$("#error").html("<span>teléfono más largo!!</span>");
			$("#error").fadeIn();
		}


		//si password es distinto de vacio
		if(password!= 0 ) {
			console.log("password :" +password);
			$("#password").removeClass('error2');

		}else{
			$("#password").addClass('error2')
			$("#error").fadeIn();
		}


		/*if(nombre+apellido+mail+telefono+password!= 0 ) {

			alert("Formulario enviado correctamente");
		}else{
			$("#error").fadeIn();
		}*/


		/*var error = 0;

		// SI ES DIFERENTE DE vacio se muestra el error
		if(error!= 0){ 
			$("#error").fadeIn();
		}else{
			$("#error").hide();
		}*/

		//para que no se cargue la pag
		event.preventDefault();

	});
	
});