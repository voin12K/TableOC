var cells = {};

for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 3; j++) {
        var cellId = 'cell_' + i + '_' + j;
        cells[cellId] = document.getElementById(cellId);

        cells[cellId].addEventListener('input', function(event) {
            var cellId = event.target.id;
            var cellValue = event.target.value;
            console.log('Значение ' + cellId + ' изменилось на: ' + cellValue);
            
            var parts = cellId.split('_');
            var row = parseInt(parts[1]);
            var col = parseInt(parts[2]);
            var square = document.getElementById('square_' + row + '_' + col);
            square.textContent = (parseFloat(cellValue) ** 2);
        });
    }
}
