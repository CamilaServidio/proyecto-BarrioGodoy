const btnToggleSidebar = document.getElementById('btnToggleSidebar');
const sidebar = document.getElementById('sidebar');
const btnToggleTheme = document.getElementById('btnToggleTheme');
const body = document.body;

// Abrir/cerrar barra lateral
btnToggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Cambiar tema claro/oscuro
btnToggleTheme.addEventListener('click', () => {
    body.classList.toggle('dark');
    btnToggleTheme.innerHTML = body.classList.contains('dark') 
        ? '<i class="fa-solid fa-sun"></i>' 
        : '<i class="fa-solid fa-moon"></i>';
});

// Scroll suave para categorías
document.querySelectorAll('.categorias-bar a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const sectionId = link.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
});
