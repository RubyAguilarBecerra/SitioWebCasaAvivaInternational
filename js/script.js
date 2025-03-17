document.addEventListener('DOMContentLoaded', () => {
  const storySection = document.querySelector('.story-section');

  window.addEventListener('scroll', () => {
      const sectionTop = storySection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Verifica si la sección está en el viewport
      if (sectionTop < windowHeight - 100) {
          storySection.classList.add('appear'); // Aplica la animación
      }
  });
});
