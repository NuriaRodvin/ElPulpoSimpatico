// Selector de idioma
document.addEventListener("DOMContentLoaded", () => {
    const languageSelector = document.getElementById("language-selector");
    const defaultLang = localStorage.getItem("lang") || "es";

    // Cargar el idioma guardado
    loadLanguage(defaultLang);

    // Establecer la opción correcta en el selector de idioma
    languageSelector.value = defaultLang;

    // Cambiar idioma al seleccionar una opción
    languageSelector.addEventListener("change", (event) => {
        const selectedLang = event.target.value;
        loadLanguage(selectedLang);
        localStorage.setItem("lang", selectedLang);
    });
});

function loadLanguage(lang) {
    console.log(`Cargando idioma: ${lang}`);
    fetch(`lang/${lang}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar el archivo de idioma: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Idioma cargado correctamente:", data);

            // Actualizar textos comunes en todas las páginas
            const headerTitle = document.querySelector("header h1");
            if (headerTitle) headerTitle.textContent = data.title;

            const navHome = document.querySelector("nav ul li a[href='index.html']");
            if (navHome) navHome.textContent = data.nav_home;

            const navAdoption = document.querySelector("nav ul li a[href='adopcion.html']");
            if (navAdoption) navAdoption.textContent = data.nav_adoption;

            const navAbout = document.querySelector("nav ul li a[href='nosotros.html']");
            if (navAbout) navAbout.textContent = data.nav_about;

            const navContact = document.querySelector("nav ul li a[href='contacto.html']");
            if (navContact) navContact.textContent = data.nav_contact;

            const navDonations = document.querySelector("nav ul li a[href='donativos.html']");
            if (navDonations) navDonations.textContent = data.nav_donations;

            // Actualizar textos específicos de cada página
            const welcomeTitle = document.querySelector(".welcome-section h2");
            if (welcomeTitle) welcomeTitle.textContent = data.welcome;

            const welcomeDescription = document.querySelector(".welcome-section p");
            if (welcomeDescription) welcomeDescription.textContent = data.description;

            const servicesTitle = document.querySelector(".services-section h2");
            if (servicesTitle) servicesTitle.textContent = data.services_title;

            const servicesList = document.querySelectorAll(".services-section ul li");
            if (servicesList.length > 0) {
                servicesList.forEach((item, index) => {
                    item.textContent = data.services_list[index];
                });
            }

            const adoptionTitle = document.querySelector(".adopcion-section h2");
            if (adoptionTitle) adoptionTitle.textContent = data.adoption_title;

            const adoptionDescription = document.querySelector(".adopcion-section p");
            if (adoptionDescription) adoptionDescription.textContent = data.adoption_description;

            const aboutTitle = document.querySelector(".nosotros-section h2");
            if (aboutTitle) aboutTitle.textContent = data.about_title;

            const aboutDescription = document.querySelector(".nosotros-section p");
            if (aboutDescription) aboutDescription.textContent = data.about_description;

            const contactTitle = document.querySelector(".contacto-section h2");
            if (contactTitle) contactTitle.textContent = data.contact_title;

            const donationsTitle = document.querySelector(".donativos-section h2");
            if (donationsTitle) donationsTitle.textContent = data.donations_title;

            const donationsDescription = document.querySelector(".donativos-section p");
            if (donationsDescription) donationsDescription.textContent = data.donations_description;

            const videoTitle = document.querySelector(".video-section h2");
            if (videoTitle) videoTitle.textContent = data.video_title;

            const newsTitle = document.querySelector(".sidebar li:nth-child(1) a");
            if (newsTitle) newsTitle.textContent = data.news_title;

            const newsDescription = document.querySelector(".sidebar li:nth-child(1) p");
            if (newsDescription) newsDescription.textContent = data.news_description;

            const lawTitle = document.querySelector(".sidebar li:nth-child(2) a");
            if (lawTitle) lawTitle.textContent = data.law_title;

            const lawDescription = document.querySelector(".sidebar li:nth-child(2) p");
            if (lawDescription) lawDescription.textContent = data.law_description;

            const recommendationsTitle = document.querySelector(".sidebar li:nth-child(3) a");
            if (recommendationsTitle) recommendationsTitle.textContent = data.recommendations_title;

            const recommendationsDescription = document.querySelector(".sidebar li:nth-child(3) p");
            if (recommendationsDescription) recommendationsDescription.textContent = data.recommendations_description;

            // Actualizar textos del formulario de contacto (si está en la página)
            const formLabels = document.querySelectorAll("#contact-form label");
            if (formLabels.length > 0) {
                formLabels[0].textContent = data.form_name;
                formLabels[1].textContent = data.form_email;
                formLabels[2].textContent = data.form_message;
                document.querySelector("#contact-form button").textContent = data.form_submit;
            }

            // Actualizar textos de cookies
            const cookiesMessage = document.querySelector(".cookies-section p");
            if (cookiesMessage) cookiesMessage.textContent = data.cookies_message;

            const acceptCookiesButton = document.getElementById("accept-cookies-btn");
            if (acceptCookiesButton) acceptCookiesButton.textContent = data.accept_cookies;

            const readMoreLink = document.getElementById("read-more-link");
            if (readMoreLink) readMoreLink.textContent = data.read_more;

            // Actualizar textos de adopción
            const smallBreedsTitle = document.querySelector(".raza-columna h3");
            if (smallBreedsTitle) smallBreedsTitle.textContent = data.adoption_small_breeds;

            const smallBreedsDescription = document.querySelector(".raza-columna p");
            if (smallBreedsDescription) smallBreedsDescription.textContent = data.adoption_small_breeds_description;

            const mediumBreedsTitle = document.querySelectorAll(".raza-columna h3")[1];
            if (mediumBreedsTitle) mediumBreedsTitle.textContent = data.adoption_medium_breeds;

            const mediumBreedsDescription = document.querySelectorAll(".raza-columna p")[1];
            if (mediumBreedsDescription) mediumBreedsDescription.textContent = data.adoption_medium_breeds_description;

            const largeBreedsTitle = document.querySelectorAll(".raza-columna h3")[2];
            if (largeBreedsTitle) largeBreedsTitle.textContent = data.adoption_large_breeds;

            const largeBreedsDescription = document.querySelectorAll(".raza-columna p")[2];
            if (largeBreedsDescription) largeBreedsDescription.textContent = data.adoption_large_breeds_description;

            const adoptionCare = document.querySelectorAll(".raza-columna p strong");
            if (adoptionCare.length > 0) {
                adoptionCare.forEach(item => {
                    item.textContent = data.adoption_care;
                });
            }

            const adoptionChihuahua = document.querySelector(".perros-list li:nth-child(1) p");
            if (adoptionChihuahua) adoptionChihuahua.textContent = data.adoption_chihuahua;

            const adoptionPomeranian = document.querySelector(".perros-list li:nth-child(2) p");
            if (adoptionPomeranian) adoptionPomeranian.textContent = data.adoption_pomeranian;

            const adoptionYorkshire = document.querySelector(".perros-list li:nth-child(3) p");
            if (adoptionYorkshire) adoptionYorkshire.textContent = data.adoption_yorkshire;

            const adoptionBeagle = document.querySelectorAll(".perros-list li p")[3];
            if (adoptionBeagle) adoptionBeagle.textContent = data.adoption_beagle;

            const adoptionFrenchBulldog = document.querySelectorAll(".perros-list li p")[4];
            if (adoptionFrenchBulldog) adoptionFrenchBulldog.textContent = data.adoption_french_bulldog;

            const adoptionSchnauzer = document.querySelectorAll(".perros-list li p")[5];
            if (adoptionSchnauzer) adoptionSchnauzer.textContent = data.adoption_schnauzer;

            const adoptionGermanShepherd = document.querySelectorAll(".perros-list li p")[6];
            if (adoptionGermanShepherd) adoptionGermanShepherd.textContent = data.adoption_german_shepherd;

            const adoptionLabrador = document.querySelectorAll(".perros-list li p")[7];
            if (adoptionLabrador) adoptionLabrador.textContent = data.adoption_labrador;

            const adoptionGoldenRetriever = document.querySelectorAll(".perros-list li p")[8];
            if (adoptionGoldenRetriever) adoptionGoldenRetriever.textContent = data.adoption_golden_retriever;

            // Actualizar textos de "Nosotros"
            const aboutActionDirect = document.querySelector(".nosotros-section h3");
            if (aboutActionDirect) aboutActionDirect.textContent = data.about_action_direct;

            const aboutActionDirectDescription = document.querySelector(".nosotros-section p");
            if (aboutActionDirectDescription) aboutActionDirectDescription.textContent = data.about_action_direct_description;

            const aboutActionDivulgative = document.querySelectorAll(".nosotros-section h3")[1];
            if (aboutActionDivulgative) aboutActionDivulgative.textContent = data.about_action_divulgative;

            const aboutActionDivulgativeDescription = document.querySelectorAll(".nosotros-section p")[1];
            if (aboutActionDivulgativeDescription) aboutActionDivulgativeDescription.textContent = data.about_action_divulgative_description;

            // Actualizar textos de "Contacto"
            const contactName = document.querySelector("#contact-form label[for='nombre']");
            if (contactName) contactName.textContent = data.contact_name;

            const contactEmail = document.querySelector("#contact-form label[for='email']");
            if (contactEmail) contactEmail.textContent = data.contact_email;

            const contactMessage = document.querySelector("#contact-form label[for='mensaje']");
            if (contactMessage) contactMessage.textContent = data.contact_message;

            const contactSelectOption = document.querySelector("#consulta option[value='']");
            if (contactSelectOption) contactSelectOption.textContent = data.contact_select_option;

            const contactAdoption = document.querySelector("#consulta option[value='adopcion']");
            if (contactAdoption) contactAdoption.textContent = data.contact_adoption;

            const contactDonation = document.querySelector("#consulta option[value='donativo']");
            if (contactDonation) contactDonation.textContent = data.contact_donation;

            const contactOther = document.querySelector("#consulta option[value='otro']");
            if (contactOther) contactOther.textContent = data.contact_other;

            const contactSend = document.querySelector("#contact-form button");
            if (contactSend) contactSend.textContent = data.contact_send;

            // Actualizar textos de "Donativos"
            const donationsHowToDonate = document.querySelector(".donativos-section h3");
            if (donationsHowToDonate) donationsHowToDonate.textContent = data.donations_how_to_donate;

            const donationsBankTransfer = document.querySelector(".donativos-section ul li:nth-child(1) strong");
            if (donationsBankTransfer) donationsBankTransfer.textContent = data.donations_bank_transfer;

            const donationsCreditCard = document.querySelector(".donativos-section ul li:nth-child(2) strong");
            if (donationsCreditCard) donationsCreditCard.textContent = data.donations_credit_card;

            const donationsPayPal = document.querySelector(".donativos-section ul li:nth-child(3) strong");
            if (donationsPayPal) donationsPayPal.textContent = data.donations_paypal;

            const donationsBizum = document.querySelector(".donativos-section ul li:nth-child(4) strong");
            if (donationsBizum) donationsBizum.textContent = data.donations_bizum;

            const donationsQuestions = document.querySelector(".donativos-section h3:nth-of-type(2)");
            if (donationsQuestions) donationsQuestions.textContent = data.donations_questions;

            const donationsContactEmail = document.querySelector(".donativos-section a[href^='mailto']");
            if (donationsContactEmail) donationsContactEmail.textContent = data.donations_contact_email;

            const donationsTaxBenefits = document.querySelector(".donativos-section h3:nth-of-type(3)");
            if (donationsTaxBenefits) donationsTaxBenefits.textContent = data.donations_tax_benefits;

            const donationsTaxBenefitsDescription = document.querySelector(".donativos-section p:nth-of-type(3)");
            if (donationsTaxBenefitsDescription) donationsTaxBenefitsDescription.textContent = data.donations_tax_benefits_description;
        })
        .catch(error => {
            console.error("Error cargando idioma:", error);
            alert("Hubo un error al cargar el idioma. Por favor, recarga la página.");
        });
}

// Función para aceptar cookies
function acceptCookies() {
    const acceptButton = document.getElementById("accept-cookies-btn");
    if (acceptButton) {
        acceptButton.textContent = "Aceptado";
        acceptButton.disabled = true;
        acceptButton.style.backgroundColor = "#4CAF50";
        acceptButton.style.cursor = "default";
        localStorage.setItem("cookiesAccepted", "true");
    }
}

// Verificar si el usuario ya aceptó las cookies al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    const acceptButton = document.getElementById("accept-cookies-btn");

    if (cookiesAccepted === "true" && acceptButton) {
        acceptButton.textContent = "Aceptado";
        acceptButton.disabled = true;
        acceptButton.style.backgroundColor = "#4CAF50";
        acceptButton.style.cursor = "default";
    }
});

// Script para el formulario de contacto
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const confirmationMessage = document.getElementById("confirmation-message");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const consulta = document.getElementById("consulta").value;
            const mensaje = document.getElementById("mensaje").value.trim();

            if (nombre === "" || email === "" || consulta === "" || mensaje === "") {
                alert("Por favor, completa todos los campos del formulario.");
                return;
            }

            confirmationMessage.style.display = "block";
            contactForm.reset();
        });
    }
});

// Script para el botón "Hacerte Socio"
document.addEventListener("DOMContentLoaded", () => {
    const hacerteSocioBtn = document.getElementById("hacerte-socio-btn");
    const camposSocio = document.getElementById("campos-socio");

    if (hacerteSocioBtn && camposSocio) {
        let modoSocioActivo = false;

        hacerteSocioBtn.addEventListener("click", () => {
            modoSocioActivo = !modoSocioActivo;

            if (modoSocioActivo) {
                camposSocio.style.display = "block";
                hacerteSocioBtn.style.backgroundColor = "#FFA500";
                hacerteSocioBtn.textContent = "Modo Socio Activado";
            } else {
                camposSocio.style.display = "none";
                hacerteSocioBtn.style.backgroundColor = "";
                hacerteSocioBtn.textContent = "Hacerte Socio";
            }
        });
    }
});

//carrusel
// Añadir esto a la función loadLanguage en el then(data => {...})
const aboutCarouselTitles = document.querySelectorAll('.carousel-slide h2, .carousel-slide h3');
if (aboutCarouselTitles.length > 0) {
    aboutCarouselTitles[0].textContent = data.about_title;
    aboutCarouselTitles[1].textContent = data.about_action_direct;
    aboutCarouselTitles[2].textContent = data.about_action_direct_description;
    aboutCarouselTitles[3].textContent = data.about_action_divulgative;
    aboutCarouselTitles[4].textContent = data.about_action_divulgative_description;
}

const teamSectionTitle = document.querySelector('.team-section h2');
if (teamSectionTitle) teamSectionTitle.textContent = data.about_team;

const teamMembers = document.querySelectorAll('.team-member p');
if (teamMembers.length > 0) {
    teamMembers[0].textContent = data.about_team_member_1;
    teamMembers[1].textContent = data.about_team_member_2;
}