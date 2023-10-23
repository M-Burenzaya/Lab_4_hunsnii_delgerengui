const dialog = document.getElementById('dialog');
const content = document.getElementById('content');
const close = document.getElementById('close');

document.getElementById('potato').addEventListener('click', () => {
    content.innerHTML = 'This is information about potatoes.';
    dialog.style.display = 'block';
});

document.getElementById('carrot').addEventListener('click', () => {
    content.innerHTML = 'This is information about carrots.';
    dialog.style.display = 'block';
});

document.getElementById('cabbage').addEventListener('click', () => {
    content.innerHTML = 'This is information about cabbage.';
    dialog.style.display = 'block';
});

close.addEventListener('click', () => {
    dialog.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === dialog) {
        dialog.style.display = 'none';
    }
});
