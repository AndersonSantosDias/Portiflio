const menuDiv = document.querySelector('.menu-mobile');
const btnMenu = document.querySelector('.btn-menu');
const navLinksMobile = document.querySelectorAll('.nav-link-mobile');

function toggleMenu() {    
    btnMenu.classList.toggle('animar');
    menuDiv.classList.toggle('abrir');

    const isExpanded = menuDiv.classList.contains('abrir');
    btnMenu.setAttribute('aria-expanded', isExpanded);
}

// Adiciona o evento de clique ao botão do menu
btnMenu.addEventListener('click', toggleMenu);

// Adiciona um evento de clique a cada link do menu mobile
// para fechar o menu ao navegar para uma seção
navLinksMobile.forEach(link => {
    link.addEventListener('click', () => {
        if (menuDiv.classList.contains('abrir')) {
            toggleMenu();
        }
    });
});