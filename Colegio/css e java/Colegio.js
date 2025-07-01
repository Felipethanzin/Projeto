// Menu hambúrguer toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Newsletter form submission
  const form = document.getElementById('newsletter-form');
  const confirmationMessage = document.getElementById('confirmation-message');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value;

    confirmationMessage.textContent = `Obrigado! Você receberá conteúdos no seu Gmail: ${email}`;
    confirmationMessage.style.display = 'block';

    form.reset();
  });
});
