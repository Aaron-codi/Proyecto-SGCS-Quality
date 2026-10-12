const botones = document.querySelectorAll('.nav-btn');

const secciones = document.querySelectorAll('.seccion');

Panel(botones, secciones);


function Panel(botones, secciones){

    botones.forEach(btn => {

        btn.addEventListener('click', () => {

            // Quitar "activo" de todos los botones
            botones.forEach(b => b.classList.remove('activo'));

            // Activar el botón que fue presionado
            btn.classList.add('activo');


            // Ocultar todas las secciones
            secciones.forEach(sec => sec.classList.remove('activa'));


            // Obtener el destino del botón
            const destino = btn.dataset.target;


            // Buscar la sección correspondiente
            document.getElementById(destino).classList.add('activa');

        });

    });

}