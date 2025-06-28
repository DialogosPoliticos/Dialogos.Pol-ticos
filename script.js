// Simula carregamento da página
window.addEventListener('load', () => {
  // Remove loader e mostra conteúdo
  document.getElementById('loader').style.display = 'none';
  document.body.classList.add('loaded');
});
