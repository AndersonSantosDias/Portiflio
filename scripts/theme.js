const body = document.body;
const themeLocalStorageKey = 'theme';

function updateThemeImages() {
    const isDarkMode = body.classList.contains('dark');
    
    const themedImages = document.querySelectorAll('[data-light-img][data-dark-img]');
    
    themedImages.forEach(element => {
        const newImage = isDarkMode ? element.dataset.darkImg : element.dataset.lightImg;
        element.tagName === 'IMG' 
            ? element.src = newImage 
            : element.style.backgroundImage = `url('${newImage}')`;
    });
}

function applyInitialTheme() {
    const savedTheme = localStorage.getItem(themeLocalStorageKey);
    if (savedTheme === 'dark') {
        body.classList.add('dark');
    }
    updateThemeImages(); 
}

function ToggleTheme() {
    body.classList.toggle('dark');
    const isDarkMode = body.classList.contains('dark');
    isDarkMode 
        ? localStorage.setItem(themeLocalStorageKey, 'dark') 
        : localStorage.removeItem(themeLocalStorageKey);
    updateThemeImages();
}

const themeButtons = document.querySelectorAll('.theme-btn');
themeButtons.forEach(btn => btn.addEventListener('click', ToggleTheme));

document.addEventListener('DOMContentLoaded', applyInitialTheme);
