const resetButton = document.querySelector('.resetButton')
const changePixel = document.querySelector('.changePixel')
// const colorfulButton = document.querySelector('.colorfulButton')
const grid = document.querySelector('.grid');
const gridItem = document.querySelector('.grid-item')

grid.addEventListener("mouseover", function(event) {
  event.target.classList.replace("grid-item", 'color');
});

function makeRows(rows, cols) {
  grid.style.setProperty('--grid-rows', rows);
  grid.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement('div');
    grid.appendChild(cell).className = 'grid-item';
  };
};

resetButton.addEventListener('click', function() {
  grid.innerHTML = ''
  makeRows(16,16)
  console.log('reset')
})

// colorfulButton.addEventListener('click', function() {
//   grid.innerHTML = ''
//   grid.style.backgroundColor = 'red'
//   makeRows(16, 16)
//   console.log('colorful')
// })

changePixel.addEventListener('click', function() {
  let pixel = prompt('Enter a number from 0 to 100')
  if (pixel > 0 && pixel <= 100) {
    grid.innerHTML = ''
    makeRows(pixel, pixel)
  } else {
    alert('Oops')
  }
  
})


makeRows(16, 16);

