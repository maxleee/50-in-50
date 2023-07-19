const progress = document.querySelector('.progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;
update();

next.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (currentActive > index) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }

    if (currentActive > index + 1) {
      if (!circle.querySelector('.inserted-complete')) {
        circle.insertAdjacentHTML(
          'afterbegin',
          "<span class='sr-only inserted-complete'>Completed Step</span>"
        );
      }
    } else {
      circle.querySelector('.inserted-complete')?.remove();
    }

    if (currentActive === index + 1) {
      circle.insertAdjacentHTML(
        'afterbegin',
        "<span class='sr-only inserted-current'>Current Step</span>"
      );
    } else {
      circle.querySelector('.inserted-current')?.remove();
    }
  });

  const actives = document.querySelectorAll('.active');

  progress.style.width = `${((actives.length - 1) / (circles.length - 1)) * 100}%`;

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }

  document.title = `Step ${currentActive} of ${circles.length} | Progress Steps`;
}
