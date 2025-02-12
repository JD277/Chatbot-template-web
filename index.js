// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Control del overlay
    const navbarToggler = document.querySelector('.navbar-toggler');
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    document.body.appendChild(overlay);
  
    navbarToggler.addEventListener('click', function() {
      overlay.style.display = 'block';
    });
  
    overlay.addEventListener('click', function() {
      navbarToggler.click(); // Cierra el menú al hacer clic en el overlay
    });
  
    // Cerrar menú al hacer clic en un enlace (solo móvil)
    document.querySelectorAll('#navbarNav .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if(window.innerWidth < 992) {
          navbarToggler.click();
          overlay.style.display = 'none';
        }
      });
    });
  });