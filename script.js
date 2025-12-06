document.addEventListener('DOMContentLoaded', () => {
     const langButtons = document.querySelectorAll('.lang-option');

     // Sélectionne tous les éléments avec data-lang, mais exclut les boutons
     const contentElements = Array.from(document.querySelectorAll('[data-lang]'))
     .filter(el => !el.classList.contains('lang-option'));

    // Fonction pour afficher la langue sélectionnée
    function showLanguage(lang) {
        contentElements.forEach(el => {
            el.style.display = (el.getAttribute('data-lang') === lang) ? 'block' : 'none';
        });
    }

    // Vérifier la langue sauvegardée dans localStorage
    const savedLang = localStorage.getItem('selectedLang') || 'fr';
    showLanguage(savedLang);

    // Mettre à jour les boutons
    langButtons.forEach(btn => {
        btn.classList.toggle('active-lang', btn.getAttribute('data-lang') === savedLang);
    });

    // Gestion du clic sur les boutons
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');

            // Afficher le contenu correspondant
            showLanguage(selectedLang);

            // Sauvegarder la langue
            localStorage.setItem('selectedLang', selectedLang);

            // Mettre à jour les boutons
            langButtons.forEach(b => b.classList.remove('active-lang'));
            this.classList.add('active-lang');
        });
    });
});