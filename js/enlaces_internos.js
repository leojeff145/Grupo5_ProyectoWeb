document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('opcion_quienes').addEventListener('click', function (event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('mostrar').innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET', 'sis_html/quienes_somos.html', true);
        xhr.send();
    });

    //galeria compra
    document.getElementById('comp_casa').addEventListener('click', function (event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('mostrar').innerHTML = xhr.responseText;

                // Accede al archivo JavaScript asignado en el contenido cargado
                var scriptElement = document.createElement('script');
                scriptElement.src = '../js/enlaces_detalle.js';
                document.getElementById('mostrar').appendChild(scriptElement);
            }
        };
        xhr.open('GET', 'sis_html/casa.html', true);
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
        xhr.open('GET', 'sis_html/depa.html', true);
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
        xhr.open('GET', 'sis_html/terreno.html', true);
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
        xhr.open('GET', 'sis_html/casa.html', true);
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
        xhr.open('GET', 'sis_html/depa.html', true);
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
        xhr.open('GET', 'sis_html/terreno.html', true);
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
        xhr.open('GET', 'sis_html/poli_priv.html', true);
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
        xhr.open('GET', 'sis_html/term_condi.html', true);
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
        xhr.open('GET', 'sis_html/cookies.html', true);
        xhr.send();
    });

    document.getElementById('btn_contacto').addEventListener('click', function (event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('ver_form').innerHTML = xhr.responseText;

            }
        };
        xhr.open('GET', 'sis_html/form_contacto.html', true);
        xhr.send();
    });

    document.getElementById('opc_contacto').addEventListener('click', function (event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('ver_form').innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET', 'sis_html/form_contacto.html', true);
        xhr.send();
    });

    document.getElementById('btn_visita').addEventListener('click', function (event) {
        event.preventDefault();

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('ver_form').innerHTML = xhr.responseText;

                var scriptElement = document.createElement('script');                
                scriptElement.src = '../js/validarci.js';
                document.getElementById('ver_form').appendChild(scriptElement);
            }
        };
        xhr.open('GET', 'sis_html/form_visita.html', true);
        xhr.send();
    });   
});

function llamar_detalle_casa(){
    // Realizar la solicitud GET y cargar contenido y script de manera asincrónica
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('galeria_in').innerHTML = xhr.responseText;

            // Accede al archivo JavaScript asignado en el contenido cargado
            var scriptElement = document.createElement('script');
            scriptElement.src = '../js/fun_detalle.js';
            document.getElementById('galeria_in').appendChild(scriptElement);
        }
    };
    xhr.open('GET', 'sis_html/arriendo_casa.html', true);
    xhr.send();
}

function llamar_detalle_casa1(){
    // Realizar la solicitud GET y cargar contenido y script de manera asincrónica
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('galeria_in').innerHTML = xhr.responseText;

            // Accede al archivo JavaScript asignado en el contenido cargado
            var scriptElement = document.createElement('script');
            scriptElement.src = '../js/fun_detalle.js';
            document.getElementById('galeria_in').appendChild(scriptElement);
        }
    };
    xhr.open('GET', 'sis_html/arriendo_casa_1.html', true);
    xhr.send();
}

function llamar_detalle_depa(){
    // Realizar la solicitud GET y cargar contenido y script de manera asincrónica
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('galeria_in').innerHTML = xhr.responseText;

            // Accede al archivo JavaScript asignado en el contenido cargado
            var scriptElement = document.createElement('script');
            scriptElement.src = '../js/fun_detalle.js';
            document.getElementById('galeria_in').appendChild(scriptElement);
        }
    };
    xhr.open('GET', 'sis_html/arriendo_depa.html', true);
    xhr.send();
}

function llamar_detalle_depa1(){
    // Realizar la solicitud GET y cargar contenido y script de manera asincrónica
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('galeria_in').innerHTML = xhr.responseText;

            // Accede al archivo JavaScript asignado en el contenido cargado
            var scriptElement = document.createElement('script');
            scriptElement.src = '../js/fun_detalle.js';
            document.getElementById('galeria_in').appendChild(scriptElement);
        }
    };
    xhr.open('GET', 'sis_html/arriendo_depa_1.html', true);
    xhr.send();
}