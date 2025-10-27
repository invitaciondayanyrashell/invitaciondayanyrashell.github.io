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

    // 1️⃣ Caso: Familias (F1, F2, C)
    if (params.has("F1") || params.has("F2")) {
        const f1 = params.get("F1") || "";
        const f2 = params.get("F2") || "";

        const nombresFamilia = [];
        if (f1.trim() !== "") nombresFamilia.push(f1);
        if (f2.trim() !== "") nombresFamilia.push(f2);

        nameText = nombresFamilia.length > 0 ? `Familia ${nombresFamilia.join(" ")}` : "Familia";
    } 
    // 2️⃣ Caso: Dos personas (P1, P2, C)
    else if (params.has("P1") || params.has("P2")) {
        const p1 = params.get("P1") || "";
        const p2 = params.get("P2") || "";

        const nombresPersonas = [];
        if (p1.trim() !== "") nombresPersonas.push(p1);
        if (p2.trim() !== "") nombresPersonas.push(p2);

        nameText = nombresPersonas.length > 0 ? nombresPersonas.join(" & ") : "Invitados";
    }
    // 3️⃣ Caso: Persona individual (N, A, C)
    else if (params.has("N") && params.has("A")) {
        const n = params.get("N") || "";
        const a = params.get("A") || "";
        nameText = `${n} ${a}`.trim() || "Invitado";
    } 
    // 4️⃣ Sin parámetros
    else {
        nameText = "Invitado";
    }

    // Cantidad (C)
    const cantidad = params.has("C") ? parseInt(params.get("C")) : 1;
    countText = cantidad === 1 
        ? "Invitación válida solo para usted" 
        : `Invitación válida para ${cantidad} personas`;

    // Actualizar HTML
    if (dynamicName) dynamicName.textContent = nameText;
    if (guestCount) guestCount.textContent = countText;
}

window.addEventListener("load", updateInvitation);





