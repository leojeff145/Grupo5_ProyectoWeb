 function validateForm() {
      // Obtener los valores de los campos del formulario
      const titulo = document.getElementById('titulo').value;
      const operacion = document.getElementById('operacion').value;
      const descripcion = document.getElementById('descripcion').value;
      const precio = parseFloat(document.getElementById('precio').value);
      const habitaciones = parseInt(document.getElementById('habitaciones').value);
      const caracteristicas = document.getElementById('caracteristicas').value;
      const tipo = document.getElementById('tipo').value;
      const ubicacion = document.getElementById('ubicacion').value;
      const servicios = document.getElementById('servicios').value;

      // Validaciones básicas
      if (titulo.trim() === '' || descripcion.trim() === '' || caracteristicas.trim() === '' || ubicacion.trim() === '' || servicios.trim() === '') {
        alert('Por favor, completa todos los campos mostrados a continuación');
        return false;
      }

      if (isNaN(precio) || precio <= 0) {
        alert('El precio debe ser un número válido mayor que cero.');
        return false;
      }

      if (isNaN(habitaciones) || habitaciones <= 0) {
        alert('El número de habitaciones debe ser un valor válido mayor que cero.');
        return false;
      }

      // Obtener los archivos multimedia seleccionados
      const fotosFiles = document.getElementById('fotos').files;
      const videosFiles = document.getElementById('videos').files;

      // Aquí puedes hacer lo que desees con los archivos multimedia seleccionados
      // Por ejemplo, puedes mostrar su nombre o tamaño en el alert o enviarlos al servidor.

      // Mostrar los datos en un alert
      const mensaje = `Título: ${titulo}\nTipo de Operación: ${operacion}\nDescripción: ${descripcion}\nPrecio: ${precio}\nHabitaciones: ${habitaciones}\nCaracterísticas Generales: ${caracteristicas}\nTipo de Inmueble: ${tipo}\nUbicación del Inmueble: ${ubicacion}\nServicios Generales: ${servicios}`;
      alert(mensaje);

      // Se podría enviar el formulario a un servidor aquí en lugar de mostrar un alert
      // utilizando AJAX o enviando los datos a través de un formulario POST

      // Devolvemos false para evitar que el formulario se envíe de manera tradicional
      return false;

    }
validateForm();