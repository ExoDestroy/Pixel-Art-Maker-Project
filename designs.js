// Select color and size inputs
const colorPicker = document.getElementById('colorPicker');
const columns = document.getElementById('inputHeight');
const rows = document.getElementById('inputWidth');
const canvas = document.getElementById('pixelCanvas');
const form = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', function(x) {
  pixelCanvas.innerHTML = '';
  x.preventDefault();
  makeGrid();
});

pixelCanvas.addEventListener('click', function(y) {
  if (y.target.nodeName === 'TD') {
    y.target.style.backgroundColor = colorPicker.value;    
  }
})

function makeGrid() {
  for (let i = 0; i < rows.value; i++) {
    const row = pixelCanvas.insertRow(0);
    for (let o = 0; o < columns.value; o++) {
      row.insertCell(0);
    }
  }

}