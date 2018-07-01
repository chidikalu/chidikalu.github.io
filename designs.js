// Select color input
// Select size input
let color, height, width;

$('#sizePicker').submit(function (event){
    // To prevent the page from reloading
    event.preventDefault();
    // To remove the previous table created
    height = $('#inputHeight').val();
    width = $('#inputWeight').val();
    //To run the function when clicked
    makeGrid(height, width);
})

function makeGrid(rows, columns) {
    //To create rows based on the entries
    $('tr').remove();
    for (let i = 1; i <= rows; i++){
        $('#pixelCanvas').append('<tr id= table' + i + '></tr>');
        for (let j = 1; j <= columns; j++) {
            $('#table' + i).append('<td></td>');
        }
    }
    //To Add color to the table cells
    //To modify the columns based on the entries
    $('td').click(function addColor() {
        color = $('#colorPicker').val()
        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else{
            $(this).attr('style', 'background-color:' + color)
        }
    })
}



