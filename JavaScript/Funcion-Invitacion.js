document.addEventListener('DOMContentLoaded', () => {
    const openInvitationBtn = document.getElementById('openInvitationBtn');
    const notFoundMessage = document.getElementById('notFoundMessage');

    openInvitationBtn.addEventListener('click', () => {
        // Aquí puedes implementar la lógica para verificar al invitado
        // Por ejemplo, podrías pedir un código o nombre
        const guestFound = false; // Simula si se encontró al invitado o no

        if (guestFound) {
            // Si el invitado es encontrado, redirige o muestra la invitación
            window.location.href = 'index.html'; // Redirige a la página de la invitación
        } else {
            // Si no se encuentra, muestra el mensaje de error
            notFoundMessage.classList.remove('hidden');
        }
    });
});

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('fade-out');

    // Opcional: eliminar del DOM después de la transición
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1000); // coincide con la duración del transition
});

//mandar los parametros
// Variables globales
let guestNombre = "";
let guestCantidad = 1;

// Función para analizar los parámetros
function analizarParametros() {
    const params = new URLSearchParams(window.location.search);

    // 1️⃣ Caso: Familias (F1, F2, C)
    if (params.has("F1") || params.has("F2")) {
        const f1 = params.get("F1") || "";
        const f2 = params.get("F2") || "";

        const nombresFamilia = [];
        if (f1.trim() !== "") nombresFamilia.push(f1);
        if (f2.trim() !== "") nombresFamilia.push(f2);

        guestNombre = nombresFamilia.length > 0 ? `Familia ${nombresFamilia.join(" ")}` : "Familia";
        guestCantidad = parseInt(params.get("C")) || nombresFamilia.length || 1;
    } 
    // 2️⃣ Caso: Persona individual (N, A, C)
    else if (params.has("N") && params.has("A")) {
        const n = params.get("N") || "";
        const a = params.get("A") || "";

        guestNombre = `${n} ${a}`.trim() || "Invitado";
        guestCantidad = parseInt(params.get("C")) || 1;
    }
    // 3️⃣ Caso: Dos personas (P1, P2, C)
    else if (params.has("P1") || params.has("P2")) {
        const p1 = params.get("P1") || "";
        const p2 = params.get("P2") || "";

        const nombresPersonas = [];
        if (p1.trim() !== "") nombresPersonas.push(p1);
        if (p2.trim() !== "") nombresPersonas.push(p2);

        guestNombre = nombresPersonas.join(" y ") || "Invitados";
        guestCantidad = parseInt(params.get("C")) || nombresPersonas.length || 1;
    } 
    else {
        guestNombre = "Invitado";
        guestCantidad = 1;
    }
}

// Ejecutar al cargar la página
window.addEventListener("DOMContentLoaded", () => {
    analizarParametros();

    // 👇 Aquí puedes usar guestNombre y guestCantidad
    console.log(`Nombre detectado: ${guestNombre}`);
    console.log(`Cantidad: ${guestCantidad}`);

    // Ejemplo: mostrar en el HTML
    const nombreElemento = document.getElementById("guestName");
    if (nombreElemento) nombreElemento.textContent = guestNombre;
});




//Mandar mensaje de confirmacion a Dayan
window.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("confirmBtn1");
    if (btn) {
        btn.addEventListener("click", () => {
            const numeroPareja = "18094926499"; // Número RD de Dayan
            const mensaje = "_*Hola Dayan!*_\n\n" +
                "Gracias por la hermosa invitación a su boda\n" +
                "Confirmo con mucha alegría mi asistencia a este día tan especial.\n\n" +
                "Les deseo muchísimas bendiciones en esta nueva etapa de sus vidas.";
            const enlaceWhatsApp = `https://wa.me/${numeroPareja}?text=${encodeURIComponent(mensaje)}`;
            window.open(enlaceWhatsApp, "_blank");
        });
    }
});


//Mandar mensaje de confirmacion a Rashell
window.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("confirmBtn2");
    if (btn) {
        btn.addEventListener("click", () => {
            const numeroPareja = "18096669876"; // Número RD de Rashell
            const mensaje = "_*Hola Rashell!*_\n\n" +
                "Gracias por la hermosa invitación a su boda\n" +
                "Confirmo con mucha alegría mi asistencia a este día tan especial.\n\n" +
                "Les deseo muchísimas bendiciones en esta nueva etapa de sus vidas.";
            const enlaceWhatsApp = `https://wa.me/${numeroPareja}?text=${encodeURIComponent(mensaje)}`;
            window.open(enlaceWhatsApp, "_blank");
        });
    }
});