document.addEventListener('DOMContentLoaded', function()
{
    const currentPath = window.location.pathname;
    const menuLinks = document.querySelectorAll('nav a');

    menuLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || (currentPath === '/' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
});