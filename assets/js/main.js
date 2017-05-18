var tarea = document.getElementById("añade");
var contenedor = document.getElementById("enlace");

tarea.addEventListener("click", function(){
	
	var nuevasTareas = document.createElement("div");
	var inputtttt= document.createElement("input");
	var boton = document.createElement("button");
	var basura = document.createElement("span");
	var guardado = document.createTextNode("Guardar");
	var contenidox = inputtttt.value;
	
	nuevasTareas.appendChild(inputtttt);
	nuevasTareas.appendChild(boton);
	contenedor.appendChild(nuevasTareas);
	boton.appendChild(guardado)

	boton.addEventListener("click", function(){
		
		var container = document.getElementById("boxdos");
		var textArea = document.createElement("textArea");
		textArea.setAttribute("placeholder", "Agrega texto aqui");
		textArea.classList.add("text");
		container.appendChild(textArea);

		var botonDos = document.createElement("button");
		var valorBoton = document.createTextNode("Submit");
		var listado = document.createElement("p");

		container.appendChild(botonDos);
		botonDos.appendChild(valorBoton);				

		botonDos.addEventListener("click", function(){

			var contenido = document.getElementById("box");
			var cont = textArea.value;
			var listado = document.createElement("p");
			var lista = document.createTextNode(cont);
			contenido.appendChild(listado);
			listado.appendChild(lista);

		});
	});
});