const board = document.querySelector('#board'),
      SQUARES_NUMBER = 500;

for(let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));

    square.addEventListener('mouseleave', () => removeColor(square));

    board.append(square);
}

let a, b, c;

function setColor(el) {
    el.style.background = `rgb(${a}, ${b}, ${c})`;
    el.style.boxShadow = `0 0 2px rgb(${a}, ${b}, ${c}), 0 0 10px rgb(${a}, ${b}, ${c})`
}

function removeColor(el) {
    el.style.background = '#1d1d1d';
    el.style.boxShadow = `0 0 2px #000`
    a = Math.floor(Math.random() * 255),
    b = Math.floor(Math.random() * 255),
    c = Math.floor(Math.random() * 255);
}
