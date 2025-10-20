// Fecha objetivo del evento
const targetDate = new Date("2025-11-23T00:00:00"); // Cambia esta fecha a tu evento

// Función para actualizar la cuenta regresiva
function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.querySelector(".countdown-days").textContent = "0";
        document.querySelector(".countdown-hours").textContent = "0";
        document.querySelector(".countdown-minutes").textContent = "0";
        document.querySelector(".countdown-seconds").textContent = "0";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.querySelector(".countdown-days").textContent = days;
    document.querySelector(".countdown-hours").textContent = hours;
    document.querySelector(".countdown-minutes").textContent = minutes;
    document.querySelector(".countdown-seconds").textContent = seconds;
}

// Actualiza cada segundo
setInterval(updateCountdown, 1000);
updateCountdown(); // Llamada inicial

const calendarButton = document.querySelector(".add-calendar-btn");

// Datos del evento
const eventTitle = "Boda de Dayan Ismael Aquino & Rashell De La Cruz";
const eventDescription = "¡No te lo pierdas!";
const eventLocation = "https://www.google.com/maps/place/City+of+hope+RD+-+Ciudad+de+la+Esperanza+RD/@18.449311,-69.3720846,741m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8eaf6155f878e3ff:0x5a28b2a5d23f45e9!8m2!3d18.449311!4d-69.3720846!16s%2Fg%2F11v5wd7jry?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D";
const eventStart = new Date("2025-11-23T18:00:00"); // fecha y hora inicio
const eventEnd = new Date("2025-11-23T21:00:00");   // fecha y hora de termino

function formatDateToGoogleCalendar(date) {
    // Formato YYYYMMDDTHHMMSSZ
    return date.toISOString().replace(/-|:|\.\d+/g, '');
}

function openGoogleCalendar() {
    const start = formatDateToGoogleCalendar(eventStart);
    const end = formatDateToGoogleCalendar(eventEnd);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${start}/${end}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(eventLocation)}`;
    
    window.open(url, "_blank"); // Abre en una nueva pestaña
}

calendarButton.addEventListener("click", openGoogleCalendar);

// Selecciona todos los botones de las preguntas
/*document.querySelectorAll("section button").forEach(button => {
    button.addEventListener("click", () => {
        // Verifica si ya existe un div de respuesta
        let answerDiv = button.nextElementSibling;
        
        if (answerDiv && answerDiv.classList.contains("faq-answer")) {
            // Alterna visibilidad
            if (answerDiv.style.display === "block") {
                answerDiv.style.display = "none";
            } else {
                answerDiv.style.display = "block";
            }
        } else {
            // Crea el div de respuesta si no existe
            answerDiv = document.createElement("div");
            answerDiv.className = "faq-answer px-4 pb-4 text-wedding-blue-900";
            answerDiv.style.display = "block";
            answerDiv.textContent = "Aquí va la respuesta a la pregunta."; // Cambia según la pregunta
            button.parentNode.appendChild(answerDiv);
        }
    });
});*/

const respuestas = [
    "Sí, habrá estacionamiento disponible en el lugar",
    "Sí, habrá estacionamiento disponible en el lugar",
    "En la entrada de la recepción alguien te indicará el número de tu mesa. También podrás encontrar tu mesa en la entrada según tu nombre. Las mesas fueron elegidas con anticipación, favor de no cambiar su ubicación.",
    "No, la boda es exclusiva para adultos",
    "La invitación especifica la cantidad de invitados que te corresponden."
];

document.querySelectorAll("section button").forEach((button, index) => {
    button.addEventListener("click", () => {
        let answerDiv = button.nextElementSibling;

        if (answerDiv && answerDiv.classList.contains("faq-answer")) {
            // Alterna visibilidad
            answerDiv.style.display = (answerDiv.style.display === "block") ? "none" : "block";
        } else {
            // Crea el div de respuesta y lo inserta justo después del botón
            answerDiv = document.createElement("div");
            answerDiv.className = "faq-answer px-4 pb-4 text-wedding-blue-900";
            answerDiv.style.display = "block";
            answerDiv.textContent = respuestas[index];
            button.parentNode.insertBefore(answerDiv, button.nextSibling);
        }
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("background-music");
    const button = document.querySelector(".wave-button");
    const icon = button.querySelector("svg");

    let isPlaying = false;

    // --- INTENTO DE AUTOREPRODUCCIÓN ---
    const intentarReproducir = () => {
        music.volume = 0.7; // volumen inicial suave
        const playPromise = music.play();

        if (playPromise !== undefined) {
            playPromise.then(() => {
                isPlaying = true;
                icon.innerHTML = `
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                `;
            }).catch(() => {
                // Si el navegador bloquea el autoplay, espera un clic del usuario
                document.addEventListener("click", iniciarDespuesClick, { once: true });
            });
        }
    };

    const iniciarDespuesClick = () => {
        music.play();
        isPlaying = true;
        icon.innerHTML = `
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
        `;
    };

    // --- BOTÓN DE CONTROL ---
    button.addEventListener("click", () => {
        if (!isPlaying) {
            music.play();
            isPlaying = true;
            icon.innerHTML = `
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
            `;
        } else {
            music.pause();
            isPlaying = false;
            icon.innerHTML = `
                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
            `;
        }
    });

    // Sincroniza el estado si se pausa o reanuda desde fuera
    music.addEventListener("pause", () => isPlaying = false);
    music.addEventListener("play", () => isPlaying = true);

    // Intentar reproducir automáticamente al cargar
    intentarReproducir();
});


//nuevos cambios 
//Cirsulo de la cuenta regresiva en blanco
document.addEventListener("DOMContentLoaded", () => {
  const EVENT_DATE = new Date("2025-11-23T00:00:00");

  const daysEl = document.querySelector(".countdown-days");
  const hoursEl = document.querySelector(".countdown-hours");
  const minutesEl = document.querySelector(".countdown-minutes");
  const secondsEl = document.querySelector(".countdown-seconds");
  const circleEl = document.querySelector(".progress-circle");

  const circumference = 282.7433388230814;
  circleEl.style.strokeDasharray = circumference;

  const totalTime = EVENT_DATE.getTime() - new Date().getTime();

  function updateCountdown() {
    const now = new Date();
    let diff = EVENT_DATE.getTime() - now.getTime();
    if (diff < 0) diff = 0;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = days;
    hoursEl.textContent = hours.toString().padStart(2, "0");
    minutesEl.textContent = minutes.toString().padStart(2, "0");
    secondsEl.textContent = seconds.toString().padStart(2, "0");

    // 🔹 Aquí el cambio clave: invertimos el progreso
    const progress = 1 - diff / totalTime;
    const offset = circumference * progress;
    circleEl.style.strokeDashoffset = offset;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});


//Trivia de parejas 16-10-25
// Preguntas con respuesta correcta
let preguntas = [
    { texto: "¿Dónde se conocieron Rashell y Dayan?", opciones: ["En la universidad", "En la iglesia", "En un campamento", "Por un amigo común"], correcta: "En la iglesia" },
    { texto: "¿Dónde fue la propuesta de matrimonio?", opciones: ["En un restaurante", "En la iglesia", "En un viaje", "En casa"], correcta: "En un restaurante" },
    { texto: "¿Quién es más amante a la comida?", opciones: ["Rashell", "Dayan", "Los dos", "Ningúno"], correcta: "Dayan" },
    { texto: "¿Qué fue lo primero que pensó Rashell cuando conoció a Dayan?", opciones: ["Qué simpático", "Qué serio", "Qué bonito habla", "No lo soporto"], correcta: "No lo soporto" },
    { texto: "¿Cúal es su actividad favorita para compartir?", opciones: ["Salir a pasear", "Camininar en la playa", "Cocinar juntos", "Escuchar música"], correcta: "Salir a pasear" },
];

// Función para mezclar preguntas (Fisher-Yates)
function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Mezclar preguntas al iniciar
preguntas = mezclarArray(preguntas);

let indice = 0;
let puntuacion = 0;
const contenedor = document.getElementById("quiz-container");

// Función para mostrar la pregunta actual
function mostrarPregunta() {
    const actual = preguntas[indice];

    contenedor.innerHTML = `
        <div class="flex justify-between items-center mb-4">
            <span class="text-sm text-wedding-blue-600">Pregunta ${indice + 1} de ${preguntas.length}</span>
            <span id="puntaje" class="text-sm text-wedding-blue-600">Aciertos: ${puntuacion}</span>
        </div>
        <h3 class="text-xl font-semibold text-wedding-blue-900 mb-6">${actual.texto}</h3>
        <div class="space-y-3">
            ${actual.opciones.map(op => `
                <button class="opcion w-full p-3 text-left rounded-lg border transition-colors duration-500 bg-wedding-blue-50 border-wedding-blue-200 text-wedding-blue-800 hover:bg-wedding-blue-100">${op}</button>
            `).join("")}
        </div>
    `;

    // Eventos de selección
    document.querySelectorAll(".opcion").forEach(btn => {
        btn.addEventListener("click", () => {
            // Validar respuesta
            if (btn.textContent === actual.correcta) {
                puntuacion++;
                btn.style.backgroundColor = "#a8f0b0"; // verde claro
            } else {
                btn.style.backgroundColor = "#f8b0b0"; // rojo claro
                // resaltar la correcta
                document.querySelectorAll(".opcion").forEach(b => {
                    if (b.textContent === actual.correcta) b.style.backgroundColor = "#a8f0b0";
                });
            }

            // Deshabilitar botones
            document.querySelectorAll(".opcion").forEach(b => b.disabled = true);

            // Actualizar contador de aciertos en tiempo real
            document.getElementById("puntaje").textContent = `Aciertos: ${puntuacion}`;

            // Pasar a siguiente pregunta después de 0.7s
            setTimeout(() => {
                indice++;
                if (indice < preguntas.length) {
                    mostrarPregunta();
                } else {
                    mostrarResultado();
                }
            }, 700);
        });
    });
}

// Mostrar resultado final
function mostrarResultado() {
    contenedor.innerHTML = `
        <div class="text-center py-10">
            <h3 class="text-2xl font-semibold text-wedding-blue-900 mb-4">¡Has completado la trivia!</h3>
            <p class="text-wedding-blue-700 mb-6">Tu puntuación fue de <strong>${puntuacion}</strong> puntos.</p>
            <button id="reiniciar" class="px-4 py-2 bg-wedding-blue-400 text-white rounded-lg hover:bg-wedding-blue-500 transition">Volver a jugar</button>
        </div>
    `;

    // Agregar evento al botón desde JS
    document.getElementById("reiniciar").addEventListener("click", () => {
        reiniciarTrivia();
    });
}

// Reiniciar trivia
function reiniciarTrivia() {
    indice = 0;
    puntuacion = 0;
    preguntas = mezclarArray(preguntas); // volver a mezclar
    mostrarPregunta();
}

// Iniciar
mostrarPregunta();