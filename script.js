function randomColorGenerator() {
  let rValue = Math.random() * (255 - 1) + 1;
  rValue = Math.round(rValue);
  let gValue = Math.random() * (255 - 1) + 1;
  gValue = Math.round(gValue);
  let bValue = Math.random() * (255 - 1) + 1;
  bValue = Math.round(bValue);

  const valorRGB = `rgb(${rValue}, ${gValue}, ${bValue})`;
  return valorRGB;
}

function colorPaletteGenerator() {
  const corUm = document.querySelector('#color2');
  corUm.style.backgroundColor = randomColorGenerator();
  const corDois = document.querySelector('#color3');
  corDois.style.backgroundColor = randomColorGenerator();
  const cortres = document.querySelector('#color4');
  cortres.style.backgroundColor = randomColorGenerator();
  const corPreto = document.querySelector('#color1');
  corPreto.style.backgroundColor = 'black';
}

let num = 5;
const table = document.querySelector('table');

function tableGenerator() {
  for (let index = 0; index < num; index += 1) {
    const line = document.createElement('tr');
    table.appendChild(line);
    for (let aux = 0; aux < num; aux += 1) {
      const column = document.createElement('td');
      column.innerText = '';
      column.className = 'pixel';
      line.appendChild(column);
    }
  }
}

function blackSelected() {
  document.querySelector('#color1').classList.add('selected');
  document.querySelector('#color2').classList.remove('selected');
  document.querySelector('#color3').classList.remove('selected');
  document.querySelector('#color4').classList.remove('selected');
}

function loadingFunction() {
  colorPaletteGenerator();
  tableGenerator();
  blackSelected();
}
window.onload = loadingFunction;

const selectionColor1 = document.getElementsByClassName('color')[0];
const selectionColor2 = document.getElementsByClassName('color')[1];
const selectionColor3 = document.getElementsByClassName('color')[2];
const selectionColor4 = document.getElementsByClassName('color')[3];

function changeSelectedColor(event) {
  for (let index = 0; index < 4; index += 1) {
    document.getElementsByClassName('color')[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

selectionColor1.addEventListener('click', changeSelectedColor);
selectionColor2.addEventListener('click', changeSelectedColor);
selectionColor3.addEventListener('click', changeSelectedColor);
selectionColor4.addEventListener('click', changeSelectedColor);


const cleaner = document.querySelector('#clear-board');
function clearBoard() {
  for (let key = 0; key < (num ^ 2); key += 1) {
    document.getElementsByTagName('td')[key].style.backgroundColor = 'white';
  }
}
cleaner.addEventListener('click', clearBoard);


const tablePixel = document.getElementById('pixel-board');

function colorizer(event) {
  const pintar = event.target;
  pintar.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

tablePixel.addEventListener('click', colorizer);

const sizeSelected = document.querySelector('#board-size');

function sizeChanger() {
  document.querySelector('#pixel-board').innerHTML = '';
  num = sizeSelected.value;
  if (sizeSelected.value === '') {
    alert('Invalid board');
  }
  if (sizeSelected.value < 5) {
    num = 5;
  }
  if (sizeSelected.value > 50) {
    num = 50;
  }
  tableGenerator();
}

document.querySelector('#generate-board').addEventListener('click', sizeChanger);
