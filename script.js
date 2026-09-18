const dialog = document.querySelector('#contactDialog');
const openButton = document.querySelector('[data-action="contact"]');
const closeButton = document.querySelector('.dialog-close');
const textarea = document.querySelector('textarea[name="message"]');
const count = document.querySelector('#count');

openButton.addEventListener('click', () => dialog.showModal());
closeButton.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
textarea.addEventListener('input', () => {
  count.textContent = textarea.value.length.toLocaleString('fr-FR');
});
document.querySelectorAll('[data-pending="true"]').forEach((button) => {
  button.addEventListener('click', () => {
    button.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-4px)' }, { transform: 'translateX(4px)' }, { transform: 'translateX(0)' }], { duration: 260 });
  });
});
