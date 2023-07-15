function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
        document.getElementById('menu').style.borderBottomRightRadius = '0';
        document.getElementById('menu').style.borderBottomLeftRadius = '0';
    } else {
        document.getElementById('menu').style.borderRadius = '10px';
    }
}

// Función para abrir el modal
function openModal() {
    var modal = document.getElementById("myModal");
    modal.showModal();
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.close();
}
