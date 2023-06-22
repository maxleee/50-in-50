const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
    setTimeout(() => {
      panel.classList.add('visible');
    }, 20);
  });
});

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
    panel.classList.remove('visible');
  });
}
