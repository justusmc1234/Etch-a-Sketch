const BOARD = document.querySelector(`#draw`)
const RESET = document.querySelector(`#reset`);
const GRID = document.querySelector(`#grid-size`);
const RANDOM = document.querySelector(`#color-change`);

let change = (event) =>{
  if(event.target.classList.value.includes(`color`)){
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  event.target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  }
  else{
  event.target.style.backgroundColor = `black`
  }
}

let makeGrid = (size = 16) => {
  BOARD.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size; ++i){
    for (let j = 0; j < size; ++j){
      const CELL = document.createElement('div');
      CELL.classList.add(`cell`);
      CELL.style = `background-color : silver`;
      BOARD.appendChild(CELL);
    }
  }
}

let clearGrid = () =>{
  let container = document.querySelector(`#draw`);
  while (container.firstElementChild){
    container.removeChild(container.lastChild);
  }
}

GRID.addEventListener('click', () =>{
let result = prompt('Please enter a number between 4-24!');
let newResult = +result;
  if((newResult >= 4 && newResult <= 24)){
    clearGrid();
    makeGrid(newResult);
  }
  else{
  alert(`${result} is not a valid paremeter!`);
  }
})

RANDOM.addEventListener('click', ()=>{
  let cell = document.querySelectorAll('.cell')
  cell.forEach((elem)=>{
    elem.classList.add('color');
  })
});


BOARD.addEventListener(`mouseover`, change);
RESET.addEventListener('click', () =>{
  clearGrid();
  makeGrid();
})

makeGrid();



