const boxes = Array.from(document.querySelectorAll('.box'));
const mainContent = document.querySelector('.main-content');
const container = document.querySelector('.container');
const miniContainer = document.querySelector('.mini-boxes-container');

function collapseAll() {
  boxes.forEach(b => b.classList.remove('expanded'));
  mainContent.classList.remove('expanded');
  container.classList.remove('expanded');
  miniContainer.classList.remove('active');
  miniContainer.innerHTML = '';
}

function expandBox(targetBox) {
  collapseAll();

  targetBox.classList.add('expanded');
  mainContent.classList.add('expanded');
  container.classList.add('expanded');

  miniContainer.innerHTML = '';
  boxes.forEach(b => {
    if (b !== targetBox) {
      const mini = document.createElement('div');
      mini.className = 'mini-box';
      mini.textContent = b.getAttribute('data-box') || b.textContent.trim();
      mini.style.backgroundColor = window.getComputedStyle(b).backgroundColor;

      mini.addEventListener('click', (e) => {
        e.stopPropagation();
        expandBox(b);
      });

      miniContainer.appendChild(mini);
    }
  });
  miniContainer.classList.add('active');
}

boxes.forEach(b => {
  b.addEventListener('click', (e) => {
    e.stopPropagation();
    if (b.classList.contains('expanded')) {
      collapseAll();
    } else {// script.js
const boxes = Array.from(document.querySelectorAll('.box'));
const mainContent = document.querySelector('.main-content');
const container = document.querySelector('.container');
const miniContainer = document.querySelector('.mini-boxes-container');

function collapseAll() {
  boxes.forEach(b => b.classList.remove('expanded'));
  mainContent.classList.remove('expanded');
  container.classList.remove('expanded');
  miniContainer.classList.remove('active');
  miniContainer.innerHTML = '';
}

function expandBox(targetBox) {
  // clean first
  collapseAll();

  // mark expanded state
  targetBox.classList.add('expanded');
  mainContent.classList.add('expanded');
  container.classList.add('expanded');

  // prepare thumbnails for other boxes
  miniContainer.innerHTML = '';
  boxes.forEach(b => {
    if (b !== targetBox) {
      const mini = document.createElement('div');
      mini.className = 'mini-box';
      mini.textContent = b.getAttribute('data-box') || b.textContent.trim();
      mini.style.backgroundColor = window.getComputedStyle(b).backgroundColor;

      mini.addEventListener('click', (e) => {
        e.stopPropagation();
        expandBox(b); // switch expanded box
      });

      miniContainer.appendChild(mini);
    }
  });

  miniContainer.classList.add('active');
}

// clicking a box toggles expand (click small to expand; click again collapses)
boxes.forEach(b => {
  b.addEventListener('click', (e) => {
    e.stopPropagation();
    if (b.classList.contains('expanded')) {
      collapseAll();
    } else {
      expandBox(b);
    }
  });
});

// clicking outside any .box or .mini-box collapses
document.addEventListener('click', (e) => {
  if (!e.target.closest('.box') && !e.target.closest('.mini-box')) {
    collapseAll();
  }
});
      expandBox(b);
    }
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.box') && !e.target.closest('.mini-box')) {
    collapseAll();
  }
});