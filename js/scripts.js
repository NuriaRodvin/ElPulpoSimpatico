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
    console.log(`Cargando idioma: ${lang}`); // Mensaje de depuración
    fetch(`lang/${lang}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar el archivo de idioma: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Idioma cargado correctamente:", data); // Mensaje de depuración

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

            // Actualizar textos específicos de cada página
            const welcomeTitle = document.querySelector("main h2");
            if (welcomeTitle) welcomeTitle.textContent = data.welcome;

            const welcomeDescription = document.querySelector("main p");
            if (welcomeDescription) welcomeDescription.textContent = data.description;

            // Actualizar textos del formulario de contacto (si está en la página)
            const formLabels = document.querySelectorAll("#contact-form label");
            if (formLabels.length > 0) {
                formLabels[0].textContent = data.form_name;
                formLabels[1].textContent = data.form_email;
                formLabels[2].textContent = data.form_message;
                document.querySelector("#contact-form button").textContent = data.form_submit;
            }
        })
        .catch(error => {
            console.error("Error cargando idioma:", error);
            alert("Hubo un error al cargar el idioma. Por favor, recarga la página.");
        });
}

// Función para abrir/cerrar desplegables
function toggleDescription(id) {
    const detailsElement = document.getElementById(id);
    detailsElement.open = !detailsElement.open; // Abre o cierra el desplegable
}
// Función para aceptar cookies
function acceptCookies() {
    const acceptButton = document.getElementById("accept-cookies-btn");
    if (acceptButton) {
        acceptButton.textContent = "Aceptado"; // Cambia el texto del botón
        acceptButton.disabled = true; // Deshabilita el botón para que no se pueda hacer clic de nuevo
        acceptButton.style.backgroundColor = "#4CAF50"; // Cambia el color del botón a verde (opcional)
        acceptButton.style.cursor = "default"; // Cambia el cursor a predeterminado (opcional)

        // Guardar en localStorage que el usuario ha aceptado las cookies
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