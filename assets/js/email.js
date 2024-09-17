// Gestion du formulaire
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Collecter les données du formulaire
    const nameSender = document.getElementById('name-field').value;
    const emailSender = document.getElementById('email-field').value;
    const sujet = document.getElementById('subject-field').value;
    const message = document.getElementById('message-field').value;

    // Paramètres à envoyer à EmailJS
    const templateParams = {
      name_sender: nameSender,
      email_sender: emailSender,
      sujet: sujet,
      message: message
    };

    // Envoi de l'e-mail avec EmailJS
    emailjs.send('service_p73gulf', 'template_xqt9jxi', templateParams)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        document.querySelector('.sent-message').style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
      }, function (error) {
        console.log('FAILED...', error);
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.sent-message').style.display = 'none';
      });
  });