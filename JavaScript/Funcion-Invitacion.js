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
// Variables globales que podemos usar después
let guestNombre = "";
let guestCantidad = 1;

// Función para analizar los parámetros
function analizarParametros() {
    const params = new URLSearchParams(window.location.search);

    // 1️⃣ Caso: Familia
    if (params.has("Familia1") || params.has("Familia2")) {
        const fam1 = params.get("Familia1") || "";
        const fam2 = params.get("Familia2") || "";

        const nombresFamilia = [];
        if (fam1.trim() !== "") nombresFamilia.push(fam1);
        if (fam2.trim() !== "") nombresFamilia.push(fam2);

        guestNombre = nombresFamilia.length > 0 ? `Familia ${nombresFamilia.join(" ")}` : "Familia";
        guestCantidad = parseInt(params.get("Cantidad")) || nombresFamilia.length || 1;
    } 
    // 2️⃣ Caso: Dos personas
    else if (params.has("Persona1") || params.has("Persona2")) {
        const p1 = params.get("Persona1") || "";
        const p2 = params.get("Persona2") || "";

        const nombresPersonas = [];
        if (p1.trim() !== "") nombresPersonas.push(p1);
        if (p2.trim() !== "") nombresPersonas.push(p2);

        guestNombre = nombresPersonas.join(" ") || "Invitado";
        guestCantidad = parseInt(params.get("Cantidad")) || nombresPersonas.length || 1;
    }
    // 3️⃣ Caso: Persona individual
    else if (params.has("Nombre") && params.has("Apellido")) {
        const nombre = params.get("Nombre") || "";
        const apellido = params.get("Apellido") || "";

        guestNombre = `${nombre} ${apellido}`.trim() || "Invitado";
        guestCantidad = parseInt(params.get("Cantidad")) || 1;
    } 
    else {
        guestNombre = "Invitado";
        guestCantidad = 1;
    }
}

// Llamar a la función al cargar la página
window.addEventListener("DOMContentLoaded", () => {
    analizarParametros();

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