$(document).ready(function () {
    $('#opcion1').click(function (event) {
        event.preventDefault();

        $.ajax({
            url: 'html/archivo1.html', // Ruta relativa al archivo1.html
            dataType: 'html',
            success: function (data) {
                $('#contenido').html(data);
            }
        });
    });

    $('#opcion2').click(function (event) {
        event.preventDefault();

        $.ajax({
            url: 'html/archivo2.html', // Ruta relativa al archivo2.html
            dataType: 'html',
            success: function (data) {
                $('#contenido').html(data);
            }
        });
    });

    $('#opcion3').click(function (event) {
        event.preventDefault();

        $.ajax({
            url: 'html/archivo3.html', // Ruta relativa al archivo3.html
            dataType: 'html',
            success: function (data) {
                $('#contenido').html(data);
            }
        });
    });
});
