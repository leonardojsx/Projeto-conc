document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('iemail').value.trim();
  const senha = document.getElementById('isenha').value;

  const cliente = JSON.parse(localStorage.getItem('clienteCadastro'));

  if (cliente && cliente.email === email && cliente.senha === senha) {
    localStorage.setItem('nomeCliente', cliente.nome);
    localStorage.setItem('sobrenomeCliente', cliente.sobrenome);
    window.location.href = '../pgprincipal/index.html';
  } else {
    alert('E-mail ou senha incorretos!');
  }
});