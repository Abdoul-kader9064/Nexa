// =========================================
// 1. GESTION DU MENU MOBILE (BURGER)
// =========================================
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Ouvre/Ferme le menu
    nav.classList.toggle('nav-active');
});

// Ferme le menu quand on clique sur un lien (utile sur mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
    });
});

// =========================================
// 2. GESTION DE LA TRADUCTION (FR / EN)
// =========================================
const btnFr = document.getElementById('btn-fr');
const btnEn = document.getElementById('btn-en');
const elementsToTranslate = document.querySelectorAll('[data-fr]');

function translatePage(lang) {
    elementsToTranslate.forEach(el => {
        // On récupère le texte correspondant à la langue choisie
        const text = el.getAttribute(`data-${lang}`);
        if (text) {
            el.textContent = text;
        }
    });

    // Mise à jour de l'état des boutons
    if (lang === 'fr') {
        btnFr.classList.add('active');
        btnEn.classList.remove('active');
    } else {
        btnEn.classList.add('active');
        btnFr.classList.remove('active');
    }
}

// Événements au clic sur les boutons
btnFr.addEventListener('click', () => translatePage('fr'));
btnEn.addEventListener('click', () => translatePage('en'));
// =========================================
// 3. ANIMATION DU TEXTE NEXA....
// =========================================
window.addEventListener('load', () => {
    const textElement = document.getElementById('typewriter');
    
    // On vérifie que l'élément existe bien sur la page avant de lancer l'animation
    if (textElement) {
        const phrases = [
            "Sourcing de confiance...",
            "Import Chine - Afrique...",
            "Contrôle Qualité Garanti...",
            "Nexa Business International"
        ];

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                textElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                textElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentPhrase.length) {
                isDeleting = true;
                typeSpeed = 2000; // Pause quand le mot est complet
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typeSpeed = 500; // Pause avant le mot suivant
            }

            setTimeout(type, typeSpeed);
        }

        // Lancer l'animation
        setTimeout(type, 500);
    } else {
        console.log("Erreur : L'élément #typewriter n'a pas été trouvé dans le HTML.");
    }
});
// =========================================
// 4. FORMULAIRE DE DEVIS INTELLIGENT
// =========================================
const quoteForm = document.getElementById('nexa-quote-form');

if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Empêche le rechargement de la page
        
        // Récupération des valeurs
        const name = document.getElementById('name').value;
        const product = document.getElementById('product').value;
        const quantity = document.getElementById('quantity').value;
                const country = document.getElementById('country').value;
        const link = document.getElementById('link').value || "Non fourni";

        // ⚠️ METTRE TON NUMÉRO ICI (avec l'indicatif, sans le +)
        const phoneNumber = "22790641271"; 

        // Construction du message WhatsApp
               const message = `Bonjour Nexa Business International,%0A%0AJe souhaite obtenir un devis pour :%0A%0A👤 *Nom/Entreprise:* ${name}%0A📦 *Produit:* ${product}%0A🔢 *Quantité:* ${quantity}%0A🌍 *Pays de livraison:* ${country}%0A🔗 *Lien:* ${link}%0A%0AMerci de me recontacter rapidement.`;

        // Lien WhatsApp
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

        // Ouverture dans un nouvel onglet
        window.open(whatsappUrl, '_blank');
        
        // Réinitialiser le formulaire
        quoteForm.reset();
    });
}