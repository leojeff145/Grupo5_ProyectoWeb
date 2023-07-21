document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('opcion_quienes').addEventListener('click', function (event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('mostrar').innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET', 'html/quienes_somos.html', true);
        xhr.send();
    });

    //galeria compra
    document.getElementById('comp_casa').addEventListener('click', function (event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('mostrar').innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET', 'html/casa.html', true);
        xhr.send();
    });

    document.getElementById('comp_depar').addEventListener('click', function (event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('mostrar').innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET', 'html/depa.html', true);
        xhr.send();
    });
    
    document.getElementById('comp_terreno').addEventListener('click', function (event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('mostrar').innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET', 'html/terreno.html', true);
        xhr.send();
    });   

    //galeria arrriendo
    document.getElementById('arriendo_casa').addEventListener('click', function (event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('mostrar').innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET', 'html/casa.html', true);
        xhr.send();
    });

    document.getElementById('arriendo_depar').addEventListener('click', function (event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('mostrar').innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET', 'html/depa.html', true);
        xhr.send();
    });
    
    document.getElementById('arriendo_terreno').addEventListener('click', function (event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('mostrar').innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET', 'html/terreno.html', true);
        xhr.send();
    });

    //pie de pagina
    document.getElementById('politicas').addEventListener('click', function (event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('mostrar').innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET', 'html/poli_priv.html', true);
        xhr.send();
    });
    
    document.getElementById('terminos').addEventListener('click', function (event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('mostrar').innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET', 'html/term_condi.html', true);
        xhr.send();
    });

    document.getElementById('cookies').addEventListener('click', function (event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('mostrar').innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET', 'html/cookies.html', true);
        xhr.send();
    });

    document.getElementById('btn_contacto').addEventListener('click', function (event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('ver_form').innerHTML = xhr.responseText;

                // Accede al archivo JavaScript asignado en el contenido cargado
                var scriptElement = document.createElement('script');
                scriptElement.src = 'js/validacion_groupbutton.js';
                document.getElementById('ver_form').appendChild(scriptElement);
            }
        };
        xhr.open('GET', 'html/form_contacto.html', true);
        xhr.send();
    });

    document.getElementById('opc_contacto').addEventListener('click', function (event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('ver_form').innerHTML = xhr.responseText;

                // Accede al archivo JavaScript asignado en el contenido cargado
                var scriptElement = document.createElement('script');
                scriptElement.src = 'js/validacion_groupbutton.js';
                document.getElementById('ver_form').appendChild(scriptElement);
            }
        };
        xhr.open('GET', 'html/form_contacto.html', true);
        xhr.send();
    });

    document.getElementById('btn_visita').addEventListener('click', function (event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('ver_form').innerHTML = xhr.responseText;

                // Accede al archivo JavaScript asignado en el contenido cargado
                var scriptElement = document.createElement('script');
                var scriptElement2 = document.createElement('script');
                scriptElement.src = 'js/validacion_groupbutton.js';
                scriptElement2.src = 'js/validarci.js';
                document.getElementById('ver_form').appendChild(scriptElement);
                document.getElementById('ver_form').appendChild(scriptElement2);
            }
        };
        xhr.open('GET', 'html/form_visita.html', true);
        xhr.send();
    });
});

