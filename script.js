const toggleSwitch = document.querySelector('#checkbox');
const modeText = document.querySelector('#mode-text');

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        modeText.textContent = "Dark Mode";
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        modeText.textContent = "Dark Mode";
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        modeText.textContent = "Light Mode";
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);