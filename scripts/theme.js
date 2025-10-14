const body = document.body;
const themeLocalStorageKey = 'theme';

function updateProjectImages() {
    const isDarkMode = body.classList.contains('dark');
    
    // Seleciona todos os containers de imagem de projeto
    const desktopImages = document.querySelectorAll('.img-container');
    desktopImages.forEach(container => {
        const newImgUrl = isDarkMode ? container.dataset.darkImg : container.dataset.lightImg;
        container.style.backgroundImage = `url('${newImgUrl}')`;
    });

    // Seleciona todas as imagens mobile
    const mobileImages = document.querySelectorAll('img.mobile');
    mobileImages.forEach(img => {
        const newSrc = isDarkMode ? img.dataset.darkImg : img.dataset.lightImg;
        img.src = newSrc;
    });
}

function applyInitialTheme() {
    const savedTheme = localStorage.getItem(themeLocalStorageKey);
    if (savedTheme === 'dark') {
        body.classList.add('dark');
    }
    updateProjectImages(); // Atualiza as imagens ao carregar a página
}

function ToggleTheme() {
    body.classList.toggle('dark');
    
    // Salva a preferência de tema atual
    if (body.classList.contains('dark')) {
        localStorage.setItem(themeLocalStorageKey, 'dark');
    } else {
        // Remove a chave se o tema for o claro (padrão)
        localStorage.removeItem(themeLocalStorageKey);
    }

    updateProjectImages(); // Atualiza as imagens na troca de tema
}

// Adiciona o evento de clique a todos os botões de tema
const themeButtons = document.querySelectorAll('.theme-btn');
themeButtons.forEach(btn => btn.addEventListener('click', ToggleTheme));

// Aplica o tema e as imagens corretas quando a página é carregada
document.addEventListener('DOMContentLoaded', applyInitialTheme);
