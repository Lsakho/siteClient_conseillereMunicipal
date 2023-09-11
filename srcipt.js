const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
const contactForm = document.querySelector('.contact-form'); // Sélectionnez le formulaire de contact
const contactText = document.querySelector('.contact-form p'); // Sélectionnez le texte du formulaire de contact

if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
    contactForm.classList.add('dark-mode'); // Ajoutez la classe au formulaire de contact
    contactText.classList.add('dark-mode'); // Ajoutez la classe au texte du formulaire de contact
}

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        contactForm.classList.add('dark-mode'); // Ajoutez la classe au formulaire de contact
        contactText.classList.add('dark-mode'); // Ajoutez la classe au texte du formulaire de contact
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
        contactForm.classList.remove('dark-mode'); // Supprimez la classe du formulaire de contact
        contactText.classList.remove('dark-mode'); // Supprimez la classe du texte du formulaire de contact
    }
    console.log("Mode sombre activé :", darkModeToggle.checked);

});
