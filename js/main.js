const btnToggleSidebar = document.getElementById('btnToggleSidebar');
const sidebar = document.getElementById('sidebar');
const btnToggleTheme = document.getElementById('btnToggleTheme');
const body = document.body;

btnToggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

btnToggleTheme.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        btnToggleTheme.textContent = '☀️';
    } else {
        btnToggleTheme.textContent = '🌙';
    }
});
