document.addEventListener('DOMContentLoaded', () => {
  // Modal Solução Proposta
  const modal = document.getElementById("tutorialModal");
  const btn = document.getElementById("abrirTutorial");
  const span = document.querySelector(".close");

  if (btn && modal && span) {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
    });

    span.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
      if (e.target == modal) {
        modal.style.display = "none";
      }
    });
  }

  // Validação do formulário de contato (mantido)
  const formContato = document.getElementById("form-contato");
  if (formContato) {
    formContato.addEventListener("submit", function(e) {
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
      formContato.reset();
    });
  }

  // Animações de entrada com IntersectionObserver
  const fadeElements = document.querySelectorAll('.fade-in, .slide-in-left');

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.3
  });

  fadeElements.forEach(el => {
    appearOnScroll.observe(el);
  });
});
