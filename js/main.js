function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
        document.getElementById('menu').style.borderBottomRightRadius = '0';
        document.getElementById('menu').style.borderBottomLeftRadius = '0';
    } else {
        document.getElementById('menu').style.borderRadius = '10px';
    }
}

function openModal(formId) {
    var modal = document.getElementById("myModal");

    // Realiza una solicitud AJAX para obtener el contenido del formulario
    var xhr = new XMLHttpRequest();
    xhr.open("GET", formId === "loginForm" ? "html/login.html" : "html/register.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // La solicitud se completó y fue exitosa
                modal.innerHTML = xhr.responseText;
                modal.showModal(); // Abre el modal

                // Agregar evento para el envío del formulario
                var form = modal.querySelector("form");
                form.addEventListener("submit", function (event) {
                    event.preventDefault(); // Evita el envío tradicional del formulario
                    sendDataToServer(formId, form); // Envia los datos al servidor
                });
            } else {
                // La solicitud falló
                alert("Error al cargar el formulario");
            }
        }
    };
    xhr.send();
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.close(); // Cierra el modal
}

function sendDataToServer(formId) {
    var modal = document.getElementById("myModal");
    var form = modal.querySelector("form");

    // Obtener los datos del formulario
    var formData = new FormData(form);

    // Realizar una solicitud AJAX para enviar los datos al servidor (archivo PHP)
    var xhr = new XMLHttpRequest();
    xhr.open("POST", formId === "loginForm" ? "php/login_handler.php" : "php/register_handler.php", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // La solicitud se completó y fue exitosa
                // Aquí puedes realizar acciones adicionales después de enviar los datos
                closeModal(); // Cerrar el modal después de un inicio de sesión o registro exitoso, por ejemplo

                // En caso de registro exitoso, muestra un mensaje al usuario
                if (formId === "registerForm") {
                    alert("Registro exitoso. Ahora puedes iniciar sesión.");
                }
            } else {
                // La solicitud falló
                alert("Error al enviar los datos al servidor");
            }
        }
    };
    xhr.send(formData);
}


//Función para enviar los datos del formulario de inicio de sesión al servidor mediante AJAX
function sendLoginDataToServer() {
    var modal = document.getElementById("myModal");
    var form = modal.querySelector("form");

    // Obtener los datos del formulario de inicio de sesión
    var formData = new FormData(form);

    // Realizar una solicitud AJAX para enviar los datos al servidor (archivo PHP)
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "php/login_handler.php", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // La solicitud se completó y fue exitosa
                var response = xhr.responseText;
                if (response === "OK") {
                    // El inicio de sesión es válido, puedes realizar acciones adicionales aquí
                    closeModal(); // Cerrar el modal después de un inicio de sesión exitoso
                    alert("Inicio de sesión exitoso.");
                    //redireccionar a la pagina de inicio
                    window.location.href = "html/index.html";
                } else {
                    // El inicio de sesión es inválido, mostrar mensaje de error
                    alert(response);
                }
            } else {
                // La solicitud falló
                alert("Error al enviar los datos al servidor");
            }
        }
    };
    xhr.send(formData);
}


// Función para validar el formulario de inicio de sesión
function validateLoginForm() {
    var form = document.getElementById("loginForm");
    var usuario = form.querySelector("#usuario").value;
    var password = form.querySelector("#password").value;

    // Validar que los campos no estén vacíos
    if (usuario.trim() === "" || password === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    // Puedes agregar más validaciones si lo deseas
    // Por ejemplo, validar que el campo "usuario" sea un correo electrónico válido

    // Si todo está bien, envía los datos al servidor
    sendLoginDataToServer();
}

// Función para validar el formulario de registro
function validateRegisterForm() {
    var form = document.getElementById("registerForm");
    var usuario = form.querySelector("#usuario").value;
    var password = form.querySelector("#password").value;

    // Validar que los campos no estén vacíos
    if (usuario.trim() === "" || password === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    // Puedes agregar más validaciones si lo deseas
    // Por ejemplo, validar que el campo "usuario" sea un correo electrónico válido

    // Si todo está bien, envía los datos al servidor
    sendDataToServer('registerForm');
}











