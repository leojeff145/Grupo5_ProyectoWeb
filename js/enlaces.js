document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('opcion1').addEventListener('click', function (event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('contenido').innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET', 'html/quienes_somos.html', true);
        xhr.send();
    });        
});
