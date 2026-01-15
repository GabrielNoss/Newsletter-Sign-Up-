document.addEventListener('DOMContentLoaded', () => {

    //Elementos
    const form = document.querySelector('.signup-form');
    const emailInput = document.getElementById('email');
    const dismissBtn = document.getElementById('dismiss-btn');

    //Tarjetas
    const card = document.querySelector('.card');
    const successCard = document.getElementById('success-card');
    const userEmail = document.getElementById('user-email');

    //Escuchar evento de envio
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const valor = emailInput.value.trim();

        if(validateEmail(valor)) {
            //Email valido
            mostrarExito(valor);
        } else {
            //Email invalido
            mostrarError();
        }


    })

    function validateEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        return regex.test(email);
    }

    function mostrarExito(email) {
        //Mostramos mensaje de exito
        userEmail.textContent = email;

        //Ocultamos el card principal
        card.classList.add('hidden');
        //Mostramos el card de exito
        successCard.classList.remove('hidden');
    }
    function mostrarError() {
        //Evitar duplicados
        const errorPrevio = emailInput.parentElement.querySelector('.error-msg');
        if(errorPrevio) {
            errorPrevio.remove()
        }
        //Crear elemento de mensaje de error
        const mensaje = document.createElement('SPAN');
        mensaje.textContent = 'Valid email required';
        mensaje.classList.add('error-msg');
        mensaje.style.display = 'block';

        //Estilizar el input
        emailInput.classList.add('input-error');

        //Insertar el mensaje
        const labelRow = document.querySelector('.label-row');
        labelRow.appendChild(mensaje);
    }
    //Boton de dismiss
    dismissBtn.addEventListener('click', () => {
        card.classList.remove('hidden');
        successCard.classList.add('hidden');

        //Limpiamos el formulario
        form.reset();

        //Quitar mensaje de error si existe
        const errorPrevio = emailInput.parentElement.querySelector('.error-msg');
        if(errorPrevio) {
            errorPrevio.remove()
        }
        //Limpiar el input
        emailInput.classList.remove('input-error');
    });
    
})



