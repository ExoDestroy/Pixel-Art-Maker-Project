// Select color and size inputs
const colorPicker = document.getElementById('colorPicker');
const rows = document.getElementById('inputHeight');
const columns = document.getElementById('inputWidth');
const canvas = document.getElementById('pixelCanvas');
const form = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', function(x) {
  pixelCanvas.innerHTML = '';
  x.preventDefault();
  makeGrid();
});

// When user clicks on a specific box, fills in the user's selected color
pixelCanvas.addEventListener('click', function(y) {
  if (y.target.nodeName === 'TD') {
    // Line of code that fills in the color of the selected box
    y.target.style.backgroundColor = colorPicker.value;    
  }
})

// The function responsible for forming the grid
function makeGrid() {
  // Nested loop for making a x by y grid
  for (let i = 0; i < rows.value; i++) {
    const row = pixelCanvas.insertRow(0);
    for (let o = 0; o < columns.value; o++) {
      row.insertCell(0);
    }
  }

}