document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão

    const email = document.getElementById('iemail').value;
    const senha = document.getElementById('isenha').value;

    if (email === 'leo@gmail.com' && senha === '12345678') {
      window.location.href = "../pgprincipal/index.html";
    } else {
      alert('E-mail ou senha incorretos');
    }
  });