document.querySelectorAll('[data-dialog-open]').forEach((button) => {
  button.addEventListener('click', () => {
    document.getElementById(button.dataset.dialogOpen)?.showModal();
  });
});
document.querySelectorAll('dialog').forEach((dialog) => {
  dialog.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
});
document.querySelectorAll('textarea[maxlength]').forEach((textarea) => {
  const count = document.getElementById(textarea.dataset.countTarget || 'count');
  textarea.addEventListener('input', () => {
    if (count) count.textContent = textarea.value.length.toLocaleString('fr-FR');
  });
});
document.querySelectorAll('[data-pending="true"]').forEach((button) => {
  button.addEventListener('click', () => {
    button.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-4px)' }, { transform: 'translateX(4px)' }, { transform: 'translateX(0)' }], { duration: 260 });
  });
});
