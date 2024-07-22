document.addEventListener('DOMContentLoaded', () => {
    const textArea = document.querySelector('textarea');
    const contenedorResultado = document.querySelector('.seccion__resultado');
    const mensajeError = document.querySelector('.error-message');
    const botonEncriptar = document.querySelector('.boton__encriptar');
    const botonDesencriptar = document.querySelector('.boton__desencriptar');
    const botonCopiar = document.querySelector('.boton__oculto');
    const imgPlaceholder = document.querySelector('#ocultar__img');

    // Mapeo de letras y sus reemplazos para encriptar/desencriptar
    const matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];

    // Función para encriptar texto
    function encriptar(texto) {
        let textoEncriptado = texto.toLowerCase();
        matrizCodigo.forEach(([letra, reemplazo]) => {
            textoEncriptado = textoEncriptado.replaceAll(letra, reemplazo);
        });
        return textoEncriptado;
    }

    // Función para desencriptar texto
    function desencriptar(texto) {
        let textoDesencriptado = texto.toLowerCase();
        matrizCodigo.forEach(([letra, reemplazo]) => {
            textoDesencriptado = textoDesencriptado.replaceAll(reemplazo, letra);
        });
        return textoDesencriptado;
    }

    // Manejar el clic en el botón "Encriptar"
    function manejarEncriptar() {
        const texto = textArea.value.trim();
        if (texto) {
            const textoEncriptado = encriptar(texto);
            contenedorResultado.innerText = textoEncriptado;
            imgPlaceholder.style.display = "none";
            textArea.value = "";
            botonCopiar.style.display = "block";
            mensajeError.style.display = "none";
        } else {
            mostrarError('Por favor, ingrese un texto para encriptar.');
        }
    }

    // Manejar el clic en el botón "Desencriptar"
    function manejarDesencriptar() {
        const texto = textArea.value.trim();
        if (texto) {
            const textoDesencriptado = desencriptar(texto);
            contenedorResultado.innerText = textoDesencriptado;
            textArea.value = "";
            botonCopiar.style.display = "block";
            mensajeError.style.display = "none";
        } else {
            mostrarError('Por favor, ingrese un texto para desencriptar.');
        }
    }

    // Mostrar mensaje de error
    function mostrarError(mensaje) {
        mensajeError.innerText = mensaje;
        mensajeError.style.display = "block";
    }

    // Copiar el texto encriptado/desencriptado al portapapeles
    function manejarCopiar() {
        const texto = contenedorResultado.innerText;
        if (texto) {
            navigator.clipboard.writeText(texto).then(() => {
                alert('Texto copiado al portapapeles');
            }).catch(err => {
                console.error('Error al copiar el texto: ', err);
            });
        }
    }

    // Event Listeners para los botones
    botonEncriptar.addEventListener('click', manejarEncriptar);
    botonDesencriptar.addEventListener('click', manejarDesencriptar);
    botonCopiar.addEventListener('click', manejarCopiar);
});