document.querySelectorAll('[data-static-action]').forEach((el) => {
  el.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Protótipo estático: esta ação representa uma funcionalidade planejada.');
  });
});
