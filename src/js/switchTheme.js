const refs = {
    switchBtn: document.getElementById('theme-switch-toggle'),
    body: document.body,
}
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function onSwitchTheme(event) {
    if (event.target.checked) {
        changeTheme(Theme.LIGHT, Theme.DARK);
        return
    }
    changeTheme(Theme.DARK, Theme.LIGHT);
};

function changeTheme(themeToRemove, themeToAdd) {
    refs.body.classList.remove(themeToRemove);
    refs.body.classList.add(themeToAdd);
    localStorage.setItem('theme', themeToAdd);
}

refs.body.classList.add(localStorage.getItem('theme') === null ? Theme.LIGHT : localStorage.getItem('theme'));

refs.switchBtn.checked = localStorage.getItem('theme') === Theme.DARK;

refs.switchBtn.addEventListener('change', onSwitchTheme);