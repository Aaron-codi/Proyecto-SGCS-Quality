const buscador = document.getElementById("buscador");
const elementos = document.querySelectorAll(".elemento");



buscador.addEventListener("input", function() {

    let textoBuscado = buscador.value.toLowerCase();


    elementos.forEach(function(elemento,indice) {

        let contenido = elemento.textContent.toLowerCase();


        if (contenido.startsWith(textoBuscado)) {

            elemento.style.display = "block";
            

        } else {

            
            elemento.style.display = "none";
            


        }

    });

});