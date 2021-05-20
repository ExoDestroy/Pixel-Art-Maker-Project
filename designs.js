// Select color input
/*jslint browser: true*/
/*global $, jQuery, alert*/
var color;

function makeGrid(x, y) {
  'use strict';
  var n, t;
  for (n = 1; n <= x; n += 1) {
    $('#pixelCanvas').append('<tr id=table' + n + '></tr>');
    for (t = 1; t <= y; t += 1) {
      $('#table' + n).append('<td></td>');
    }
  }
  $('tr').remove();
  // Add color to cells
  $('td').click(function addColor() {
    color = $('#colorPicker').val();

    if ($(this).attr('style')) {
      $(this).removeAttr('style');
    } else {
      $(this).attr('style', 'background-color:' + color);
    }
  });

}

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {
  'use strict';
  event.preventDefault();
  var width = $('#inputWeight').val(),
    height = $('#inputHeight').val();
  makeGrid(height, width);
});