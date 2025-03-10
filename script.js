function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const themeIcon = document.querySelector('.theme-toggle i');
    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
}

function handleSubmit(event) {
    event.preventDefault();
    
    // Mostrar indicador de carga
    const btn = event.target.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    // Obtener los valores del formulario
    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Enviar el email usando EmailJS
    emailjs.send(
        'service_xwvzs8o', // Reemplaza con tu Service ID
        'template_qvln0lg', // Reemplaza con tu Template ID
        templateParams
    )
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('¡Mensaje enviado! Gracias por contactarme.');
        event.target.reset();
    }, function(error) {
        console.log('FAILED...', error);
        alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
    })
    .finally(() => {
        // Restaurar el botón
        btn.textContent = originalText;
        btn.disabled = false;
    });
}
