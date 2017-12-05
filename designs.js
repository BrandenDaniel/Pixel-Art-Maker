//Select color input
let color = $('#colorPicker').val();
$('#colorPicker').on("change", function() {
  color = $(this).val();
});

//Height input
let height = $('#input_height').val();
$('#input_height').on("change", function() {
  height = $(this).val();
});

//Width Input
let width = $('#input_width').val();

$('#input_width').on("change", function() {
  width = $(this).val();
});

//Table selector
let tableHeight = $('#pixel_canvas');

//MakeGrid() function that's a anonymous callback
$('#submit').click(function() {
  tableHeight.empty();
  for (let i = 1; i <= height; i++) {
    tableHeight.append('<tr></tr>');
  }
  for (let y = 1; y <= width; y++) {
    $('tr').append('<td></td>');
  }
  $('td').click(function() {
    $(this).css("background-color", color);
  });
});
