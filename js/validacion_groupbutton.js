// JavaScript Document

 // Obtener el formulario de los radio buttons y el formulario principal
        const radioForm = document.getElementById('radio-form');
        const mainForm = document.getElementById('form');

        // Agregar evento de escucha al formulario de los radio buttons
        radioForm.addEventListener('change', function() {
            const selectedOption = radioForm.querySelector('input[name="casamodelo"]:checked').value;
            document.getElementById('casamodelo_hidden').value = selectedOption;
        });

        // Validar el formulario antes de enviarlo
        mainForm.addEventListener('submit', function(event) {
            const selectedOption = radioForm.querySelector('input[name="casamodelo"]:checked');
            if (!selectedOption) {
                event.preventDefault();
                alert("Por favor, seleccione una opción de la casa");
            }
        });