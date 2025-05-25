document.getElementById("form-contato").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (nome === "" || email === "" || mensagem === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Por favor, insira um email válido.");
    return;
  }

  alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
  document.getElementById("form-contato").reset();
});

document.addEventListener('DOMContentLoaded', () => {
  const faqButtons = document.querySelectorAll('.faq-question');

  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const item = button.parentElement;

      document.querySelectorAll('.faq-item').forEach(el => {
        if (el !== item) {
          el.classList.remove('active');
          el.querySelector('.faq-answer').style.maxHeight = null;
        }
      });

      item.classList.toggle('active');
      const answer = item.querySelector('.faq-answer');
      if (item.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = null;
      }
    });
  });
});
