const input = document.querySelector('.input');
const container = document.querySelector('.container');

function handleFocus() {
    let focusBox = document.querySelector('.focusBox');
    if (!focusBox) {
        focusBox = document.createElement('div');
        container.appendChild(focusBox);
        focusBox.classList.add('focusBox');
    }
}

function handleBlur() {
    const focusBox = document.querySelector('.focusBox');
    if (focusBox) {
        container.removeChild(focusBox);
    }
}
input.addEventListener('focus', handleFocus);
input.addEventListener('blur', handleBlur);

