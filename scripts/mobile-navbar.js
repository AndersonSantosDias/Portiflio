const menuDiv = document.querySelector('.menu-mobile');
const btnMenu = document.querySelector('.btn-menu');
const navLinksMobile = document.querySelectorAll('.nav-link-mobile');

function toggleMenu() {    
    btnMenu.classList.toggle('animar');
    menuDiv.classList.toggle('abrir');

    const isExpanded = menuDiv.classList.contains('abrir');
    btnMenu.setAttribute('aria-expanded', isExpanded);
}

btnMenu.addEventListener('click', toggleMenu);

navLinksMobile.forEach(link => {
    link.addEventListener('click', () => {
        if (menuDiv.classList.contains('abrir')) {
            toggleMenu();
        }
    });
});