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
    
    const btn = event.target.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_xwvzs8o', 'template_qvln0lg', templateParams)
        .then(function(response) {
            alert('¡Mensaje enviado! Gracias por contactarme.');
            event.target.reset();
        }, function(error) {
            alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
        })
        .finally(() => {
            btn.textContent = originalText;
            btn.disabled = false;
        });
}
