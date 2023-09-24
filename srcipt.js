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

// Sélectionnez tous les boutons dans la section
const buttons = document.querySelectorAll('section button');

// Fonction pour changer la langue
function changerLangue(langue) {
    // Mettez ici la logique pour changer la langue en fonction de la valeur de 'langue'
    // Par exemple, mettre à jour le contenu en fonction de la langue sélectionnée
    // Vous pouvez ajouter ici votre propre logique pour gérer le changement de langue
    const detail = document.querySelector('.detail');
    const social = document.querySelector('.social');

    if (langue === 'francais') {
        // Code pour passer à la langue française
        detail.innerHTML = `
            <h3>Candidate au Conseil national pour le Parti Socialiste à Genève</h3>
            <h1>Priscille <span style="color:#f92d2d;">Dia-Laplace</span></h1>
            <p>Conseillère municipale(PS) Lancy, Genève</p>
        `;
        social.innerHTML = `
            <a href="https://www.linkedin.com/in/priscille-dia-laplace-982a72b9"><i class='bx bxl-linkedin'></i></a>
            <a href="https://www.instagram.com/priscilledialaplace/"><i class='bx bxl-instagram'></i></a>
            <a href="https://www.facebook.com/priscille.laplace?locale=fr_FR"><i class='bx bxl-facebook-circle'></i></a>
        `;
    } else if (langue === 'deutch') {
        // Code pour passer à la langue allemande
        detail.innerHTML = `
            <h3>Kandidatin für den Nationalrat für die Sozialdemokratische Partei in Genf</h3>
            <h1>Priscille <span style="color:#f92d2d;">Dia-Laplace</span></h1>
            <p>Gemeinderätin (SP) Lancy, Genf</p>
        `;
        social.innerHTML = `
            <a href="https://www.linkedin.com/in/priscille-dia-laplace-982a72b9"><i class='bx bxl-linkedin'></i></a>
            <a href="https://www.instagram.com/priscilledialaplace/"><i class='bx bxl-instagram'></i></a>
            <a href="https://www.facebook.com/priscille.laplace?locale=fr_FR"><i class='bx bxl-facebook-circle'></i></a>
        `;
    } else if (langue === 'italien') {
        // Code pour passer à la langue italienne
        detail.innerHTML = `
            <h3>Candidata al Consiglio nazionale per il Partito Socialista a Ginevra</h3>
            <h1>Priscille <span style="color:#f92d2d;">Dia-Laplace</span></h1>
            <p>Consigliera comunale (PS) Lancy, Ginevra</p>
        `;
        social.innerHTML = `
            <a href="https://www.linkedin.com/in/priscille-dia-laplace-982a72b9"><i class='bx bxl-linkedin'></i></a>
            <a href="https://www.instagram.com/priscilledialaplace/"><i class='bx bxl-instagram'></i></a>
            <a href="https://www.facebook.com/priscille.laplace?locale=fr_FR"><i class='bx bxl-facebook-circle'></i></a>
        `;
    }
}

// Parcourez tous les boutons et ajoutez un gestionnaire d'événements à chacun
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Obtenez la langue à partir de l'attribut data-lang du bouton cliqué
        const langue = button.getAttribute('data-lang');

        // Appelez la fonction changerLangue avec la langue correspondante
        changerLangue(langue);
    });
});


        // Fonction pour basculer les détails
        function toggleDetails(element) {
            // Trouver l'élément parent de la classe "list-group-item"
            const listItem = element.closest('.list-group-item');
            // Trouver l'élément des détails à l'intérieur de "list-item"
            const details = listItem.querySelector('.details');
            
            // Vérifier si les détails sont actuellement visibles
            if (details.style.display === 'block' || details.style.display === '') {
                // Cacher les détails
                details.style.display = 'none';
            } else {
                // Afficher les détails
                details.style.display = 'block';
            }
        }
