<?php
// Verificar si se recibieron los datos esperados
if (isset($_POST['usuario']) && isset($_POST['password'])) {
    $usuario = $_POST['usuario'];
    $password = $_POST['password'];

    // Leer los datos almacenados en el archivo de texto (users.txt)
    $fileData = file_get_contents('users.txt');

    // Verificar si existe una línea que coincida con los datos proporcionados
    $lines = explode("\n", $fileData);
    foreach ($lines as $line) {
        $userData = explode(":", $line);
        if ($userData[0] === $usuario && $userData[1] === $password) {
            // El inicio de sesión es válido
            echo "OK";
            exit;
        }
    }

    // Si no se encontró una coincidencia, mostrar un mensaje de error
    echo "ERROR: Credenciales inválidas.";
} else {
    echo "ERROR: Datos de inicio de sesión incompletos.";
}
?>
