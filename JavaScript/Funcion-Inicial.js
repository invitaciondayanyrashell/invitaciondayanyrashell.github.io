const preloader = document.getElementById('preloader');
const mainContent = document.getElementById('mainContent');
const wrapper = document.querySelector('.invitation-wrapper');

window.addEventListener('load', () => {
    // Agregamos fade-out al preloader
    preloader.classList.add('fade-out');

    // Esperamos 1 segundo para que termine la transición
    setTimeout(() => {
        preloader.style.display = 'none'; // ocultamos completamente
        mainContent.classList.add('visible'); // mostramos el contenido principal
        wrapper.classList.add('visible');     // mostramos el contenido del sobre y botón
    }, 2500);
});
//Abrir la Invitacion
document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openInvitationBtn");

    openBtn.addEventListener("click", () => {
        // Abrir otra página en la misma ventana
        window.location.href = "Invitacion.html";

        // Si quieres abrir en una nueva pestaña, usa:
        // window.open("https://tu-pagina-destino.com", "_blank");
    });
});


function updateInvitation() {
    const params = new URLSearchParams(window.location.search);
    const dynamicName = document.getElementById("dynamicName");
    const guestCount = document.getElementById("guestCount");

    let nameText = "";
    let countText = "";

    // 1️⃣ Caso: Familia
    if (params.has("Familia1") || params.has("Familia2")) {
        const fam1 = params.get("Familia1") || "";
        const fam2 = params.get("Familia2") || "";

        const nombresFamilia = [];
        if (fam1.trim() !== "") nombresFamilia.push(fam1);
        if (fam2.trim() !== "") nombresFamilia.push(fam2);

        nameText = nombresFamilia.length > 0 ? `Familia ${nombresFamilia.join(" ")}` : "Familia";
    } 
    // 2️⃣ Caso: Dos personas
    else if (params.has("Persona1") || params.has("Persona2")) {
        const p1 = params.get("Persona1") || "";
        const p2 = params.get("Persona2") || "";

        const nombresPersonas = [];
        if (p1.trim() !== "") nombresPersonas.push(p1);
        if (p2.trim() !== "") nombresPersonas.push(p2);

        nameText = nombresPersonas.length > 0 ? nombresPersonas.join(" & ") : "Invitado";
    }
    // 3️⃣ Caso: Persona individual
    else if (params.has("Nombre") && params.has("Apellido")) {
        const nombre = params.get("Nombre") || "";
        const apellido = params.get("Apellido") || "";
        nameText = `${nombre} ${apellido}`.trim();
        if (nameText === "") nameText = "Invitado";
    } 
    else {
        nameText = "Invitado";
    }

    // Cantidad
    const cantidad = params.has("Cantidad") ? parseInt(params.get("Cantidad")) : 1;
    countText = cantidad === 1 ? "Invitación válida para 1 persona" : `Invitación válida para ${cantidad} personas`;

    // Actualizar HTML
    dynamicName.textContent = nameText;
    guestCount.textContent = countText;
}

window.addEventListener("load", updateInvitation);




