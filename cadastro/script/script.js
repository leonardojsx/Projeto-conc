document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('inome').value.trim();
  const sobrenome = document.getElementById('isobre').value.trim();
  const email = document.getElementById('iemail').value.trim();
  const senha = document.getElementById('isenha').value;

  if (!nome || !sobrenome || !email || senha.length < 8) {
    alert('Preencha todos os campos corretamente!');
    return;
  }

  const cliente = {
    nome: nome,
    sobrenome: sobrenome,
    email: email,
    senha: senha
  };
  localStorage.setItem('clienteCadastro', JSON.stringify(cliente));

  window.location.href = '../pglogin/index.html';
});