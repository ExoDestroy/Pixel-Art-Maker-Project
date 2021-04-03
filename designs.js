// Select color input
let colorInput = document.body.querySelector('h2');
let colorToChoose = colorInput[1].querySelector('#colorPicker');

 // Select size input
const sizeForm = document.querySelector('form');
let sizeHeight = sizeForm.querySelector('#inputHeight');
let sizeWidth = sizeForm.querySelector('#inputWidth');
let submit = sizeForm.querySelector("submit");

// When size is submitted by the user, call makeGrid()
submit.addEventListener('click', function(evt) {
    evt.classList.toggle('myTable');
    makeGrid();
});

function makeGrid() {

// Your code goes here!
    const getTableGrid = document.body.querySelector('h2');
    let tableGrid = getTableGrid[2].querySelector('#pixelCanvas');
    for (let r = sizeWidth; r <= sizeWidth; r--) {
        for (let c = sizeHeight; c <= sizeHeight; c--) {
            const grid = tableGird[r][c];
            grid[r][c].addEventListener('click', function () {
                grid[r][c] = colorToChoose;
            });
        }
    }

};
