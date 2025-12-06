// Initialise EmailJS
emailjs.init("KYSHbFWNFT_lS-9XH");  // Remplace par ta clé publique

// Gestion de l'événement du formulaire
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm("GmailNaraction", "template_awkt2uo", form)
            .then(() => {
                alert("Votre message a bien été envoyé !");
                form.reset();
            })
            .catch((error) => {
                alert("Une erreur est survenue : " + JSON.stringify(error) + "rééssayer plus tard");
            });
    });
});