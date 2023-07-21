<?php
// Verificar si se recibieron los datos esperados
if (isset($_POST['usuario']) && isset($_POST['password'])) {
    $usuario = $_POST['usuario'];
    $password = $_POST['password'];

    // Leer los datos almacenados en el archivo de texto (users.txt)
    $fileData = '';
    if (file_exists('users.txt')) {
        $fileData = file_get_contents('users.txt');
    }

    // Verificar si el usuario ya está registrado
    if (strpos($fileData, "$usuario:") !== false) {
        echo "ERROR: El usuario ya está registrado.";
        exit;
    }

    // Guardar los datos en el archivo de texto (users.txt)
    $data = "$usuario:$password\n";
    file_put_contents('users.txt', $data, FILE_APPEND);

    echo "OK";
} else {
    echo "ERROR: Datos de registro incompletos.";
}
?>
