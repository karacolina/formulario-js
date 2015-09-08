$(document).ready(function() {
	$(".form #error").hide();


	$("#login-form").submit(function(event) {

		

		var nombre = $("#name").val();
		var password = $("#password").val();


		//si nombre es distinto de vacio
		if(nombre != "" && password != ""){

			console.log("nombre :" +nombre);
			console.log("password :" +password);

		}else{
			$(".form-control").addClass('error2');
			$(".form #error").fadeIn();

		}
		


		//para que no se cargue la pag
		event.preventDefault();


		
	});
	
});