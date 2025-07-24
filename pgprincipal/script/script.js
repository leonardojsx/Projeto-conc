document.addEventListener('DOMContentLoaded', function() {
  const nome = localStorage.getItem('nomeCliente') || 'Seu nome';
  const sobrenome = localStorage.getItem('sobrenomeCliente') || '';
  document.querySelectorAll('.perfil-descricao')[0].textContent = nome;
  document.querySelectorAll('.perfil-descricao')[1].textContent = sobrenome;

  document.getElementById('abrir-btn').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
  });
});