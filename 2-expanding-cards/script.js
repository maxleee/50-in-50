const panels = document.querySelectorAll('.panel');
const buttons = document.querySelectorAll('.panel-button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    removeActiveClasses();
    button.setAttribute('aria-expanded', true);
    setTimeout(() => {
      button.parentElement.classList.add('visible');
    }, 20);
  });
});

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('visible');
  });
  buttons.forEach(button => {
    button.setAttribute('aria-expanded', false);
  });
}

// function activePanel(e) {
//   console.log(e.currentTarget);
//   removeActiveClasses();
//   e.currentTarget.setAttribute('aria-expanded');
// }
