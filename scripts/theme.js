const AllTheme = {
    theme: document.querySelectorAll('.theme-btn'),
    Header: document.querySelector('.header'),
    Logo: document.querySelector('.logo'),
    Nav: document.querySelector('.nav'),
    Icon: document.querySelector('.icon'),
    MenuMobile: document.querySelector('.menu-mobile'),
    BtnMenu: document.querySelector('.btn-menu'),
    Main: document.querySelector('main'),
    apresentacao: document.querySelector('.apresentacao'),
    skills: document.querySelector('.skills'),
    projetos: document.querySelector('.projetos'),
    contato: document.querySelector('.contato')
}

function ToggleTheme() {
    
    Object.values(AllTheme).forEach(el => {
        if (el instanceof NodeList) {
            el.forEach(item => item.classList.toggle('dark'))
        } else if (el) {
            el.classList.toggle('dark')
        }
    })
}
