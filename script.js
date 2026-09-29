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

// Sillage d’étoiles discret pour les appareils utilisant une souris.
const finePointer = window.matchMedia('(pointer: fine)').matches;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (finePointer && !reducedMotion) {
  const symbols = ['✦', '⋆', '✧'];
  let lastStarAt = 0;

  const createStar = (x, y, burst = false) => {
    const star = document.createElement('span');
    star.className = 'cursor-star';
    star.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.fontSize = `${burst ? 13 + Math.random() * 11 : 10 + Math.random() * 7}px`;
    star.style.setProperty('--drift-x', `${(Math.random() - .5) * (burst ? 70 : 30)}px`);
    star.style.setProperty('--drift-y', `${-18 - Math.random() * (burst ? 55 : 25)}px`);
    star.style.setProperty('--spin', `${(Math.random() - .5) * 130}deg`);
    document.body.appendChild(star);
    star.addEventListener('animationend', () => star.remove(), { once: true });
  };

  window.addEventListener('pointermove', (event) => {
    const now = performance.now();
    if (now - lastStarAt < 55) return;
    lastStarAt = now;
    createStar(event.clientX, event.clientY);
  }, { passive: true });

  window.addEventListener('pointerdown', (event) => {
    if (event.pointerType !== 'mouse') return;
    for (let i = 0; i < 7; i += 1) createStar(event.clientX, event.clientY, true);
  }, { passive: true });
}
