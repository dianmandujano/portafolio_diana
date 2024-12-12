document.querySelectorAll('.navegacion__elemento a').forEach((link) => {
    link.addEventListener('click', (event) => {
        document.querySelectorAll('.navegacion__elemento a').forEach((item) => {
            item.classList.remove('activo');
        });
        event.target.classList.add('activo');
    });
});

// formulario de contacto //
const form = document.querySelector('.contacto__formulario');
form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const nombre = form.querySelector('input[type="text"]').value;
    const correo = form.querySelector('input[type="email"]').value;
    const mensaje = form.querySelector('textarea').value;

    if (nombre && correo && mensaje) {
        alert(`¡Gracias, ${nombre}! He recibido tu mensaje: "${mensaje}"`);
        form.reset(); // Limpia los campos del formulario
    } else {
        alert('Por favor, rellena todos los campos antes de enviar el formulario.');
    }
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPos > sectionTop && scrollPos < sectionTop + sectionHeight) {
            const id = section.getAttribute('id');
            document.querySelectorAll('.navegacion__elemento a').forEach((link) => {
                link.classList.remove('activo');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('activo');
                }
            });
        }
    });
});