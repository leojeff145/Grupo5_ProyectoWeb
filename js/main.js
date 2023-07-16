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

// Función para abrir el modal
function openModal_r() {
    var modal = document.getElementById("modal_r");
    modal.showModal();
}

// Función para cerrar el modal
function closeModal_r() {
    var modal = document.getElementById("modal_r");
    modal.close();
}








