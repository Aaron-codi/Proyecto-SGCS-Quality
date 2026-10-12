const botonesHerramientas = document.querySelectorAll('.btn-filtro');
const cajasHerramientas = document.querySelectorAll('.caja-tecnica');
const alineacionCAJA = document.querySelectorAll('.alineacionHerramientas');

botonesHerramientas.forEach(btn => {

    btn.addEventListener('click', () => {

        const filtro = btn.dataset.filtro;

        cajasHerramientas.forEach(caja => {

            if (filtro === 'todos') {
                caja.style.display = 'block';



            } else if (caja.classList.contains(filtro)) {
                caja.style.display = 'block';
                

            } else {
                caja.style.display = 'none';
                
            }

        });

    });

});