/* CORE/MAIN.JS
   Lógica del sitio web para Global Universal Trade
*/

document.addEventListener('DOMContentLoaded', () => {
    
    console.log("Sistema Global Universal Trade: ONLINE 🟢");

    // --- 1. AÑO AUTOMÁTICO EN EL FOOTER ---
    // Busca un elemento con la clase .footer__year y pone el año actual
    const yearElement = document.querySelector('.footer__year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // --- 2. SIMULACIÓN DE ENVÍO DE FORMULARIO ---
    const contactForm = document.querySelector('.form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(evento) {
            // Evita que la página se recargue de verdad (prevent default)
            evento.preventDefault();
            
            // Simular tiempo de carga (UX profesional)
            const boton = contactForm.querySelector('.form__boton');
            const textoOriginal = boton.textContent;
            
            boton.textContent = "Enviando...";
            boton.style.opacity = "0.7";
            boton.disabled = true;

            setTimeout(() => {
                alert("¡Gracias! Hemos recibido tu solicitud. Te contactaremos en breve.");
                contactForm.reset(); // Limpia los campos
                
                // Restaurar botón
                boton.textContent = textoOriginal;
                boton.style.opacity = "1";
                boton.disabled = false;
            }, 1500);
        });
    }

    // --- 3. EFECTO DE NAVEGACIÓN SUAVE (Smooth Scroll) ---
    // Aplica para todos los enlaces internos (que empiezan con #)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});