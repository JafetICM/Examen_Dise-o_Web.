const preguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        respuestas: ["París", "Londres", "Roma", "Berlín"],
        correcta: 0
    },

    {
        pregunta: "¿En qué año comenzó la Primera Guerra Mundial?",
        respuestas: ["1914", "1918", "1939", "1945"],
        correcta: 0
    },
    {
        pregunta: "¿Quién pintó la Mona Lisa?",
        respuestas: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
        correcta: 0
    },
    {
        pregunta: "¿Cuál fue el imperio que construyó la Gran Muralla China?",
        respuestas: ["Dinastía Qin", "Imperio Mongol", "Dinastía Ming", "Imperio Romano"],
        correcta: 0
    },
    {
        pregunta: "¿En qué año llegó Cristóbal Colón a América?",
        respuestas: ["1492", "1500", "1453", "1485"],
        correcta: 0
    },
    {
        pregunta: "¿Quién fue el líder de la Revolución Rusa de 1917?",
        respuestas: ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky", "Nikita Khrushchev"],
        correcta: 0
    },
    {
        pregunta: "¿Qué evento desencadenó la Segunda Guerra Mundial?",
        respuestas: ["La invasión de Polonia por Alemania", "El ataque a Pearl Harbor", "La caída de Francia", "La batalla de Stalingrado"],
        correcta: 0
    },
    {
        pregunta: "¿Qué civilización construyó Machu Picchu?",
        respuestas: ["Los Incas", "Los Mayas", "Los Aztecas", "Los Toltecas"],
        correcta: 0
    },
    {
        pregunta: "¿Quién escribió la 'Ilíada' y la 'Odisea'?",
        respuestas: ["Homero", "Sófocles", "Eurípides", "Platón"],
        correcta: 0
    },
    {
        pregunta: "¿Cuál fue el primer hombre en llegar a la luna?",
        respuestas: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "Michael Collins"],
        correcta: 0
    },
    {
        pregunta: "¿En qué año cayó el Muro de Berlín?",
        respuestas: ["1989", "1991", "1975", "1961"],
        correcta: 0
    },
    {
        pregunta: "¿Qué faraón ordenó la construcción de la Gran Pirámide de Giza?",
        respuestas: ["Keops", "Tutankamón", "Ramsés II", "Akenatón"],
        correcta: 0
    },
    {
        pregunta: "¿Cuál fue la principal causa de la Guerra de Secesión de Estados Unidos?",
        respuestas: ["La abolición de la esclavitud", "La expansión territorial", "El control económico", "Las tensiones políticas"],
        correcta: 0
    },
    {
        pregunta: "¿Quién fue el líder de la Independencia de la India?",
        respuestas: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Sardar Patel"],
        correcta: 0
    },
    {
        pregunta: "¿En qué año se firmó la Declaración de Independencia de los Estados Unidos?",
        respuestas: ["1776", "1783", "1775", "1781"],
        correcta: 0
    },
    {
        pregunta: "¿Qué país fue gobernado por los zares hasta la Revolución de 1917?",
        respuestas: ["Rusia", "Alemania", "Francia", "España"],
        correcta: 0
    },
    {
        pregunta: "¿Cuál fue el primer imperio en la historia?",
        respuestas: ["Imperio Acadio", "Imperio Romano", "Imperio Persa", "Imperio Egipcio"],
        correcta: 0
    },
    {
        pregunta: "¿Quién fue el autor de 'La teoría de la evolución'?",
        respuestas: ["Charles Darwin", "Gregor Mendel", "Isaac Newton", "Albert Einstein"],
        correcta: 0
    },
    {
        pregunta: "¿Qué conflicto bélico se conoció como la 'Guerra de las Galaxias'?",
        respuestas: ["La Guerra Fría", "La Segunda Guerra Mundial", "La Guerra de Corea", "La Guerra de Vietnam"],
        correcta: 0
    },
    {
        pregunta: "¿Cuál es el nombre del tratado que puso fin a la Primera Guerra Mundial?",
        respuestas: ["Tratado de Versalles", "Tratado de Tordesillas", "Tratado de París", "Tratado de Utrecht"],
        correcta: 0
    },
    {
        pregunta: "¿Qué emperador romano legalizó el cristianismo?",
        respuestas: ["Constantino", "Julio César", "Nerón", "Augusto"],
        correcta: 0
    },
    {
        pregunta: "¿Quién fue el primer presidente de Sudáfrica tras el apartheid?",
        respuestas: ["Nelson Mandela", "Frederik de Klerk", "Thabo Mbeki", "Jacob Zuma"],
        correcta: 0
    },
    {
        pregunta: "¿En qué año se fundó la Organización de las Naciones Unidas?",
        respuestas: ["1945", "1919", "1950", "1939"],
        correcta: 0
    },
    {
        pregunta: "¿Qué país lanzó la primera bomba atómica en combate?",
        respuestas: ["Estados Unidos", "Alemania", "Japón", "Unión Soviética"],
        correcta: 0
    },
    {
        pregunta: "¿Qué antigua civilización se desarrolló en la región del actual Perú?",
        respuestas: ["Los Incas", "Los Mayas", "Los Aztecas", "Los Toltecas"],
        correcta: 0
    },
    {
        pregunta: "¿Qué filósofo griego fue maestro de Alejandro Magno?",
        respuestas: ["Aristóteles", "Platón", "Sócrates", "Heráclito"],
        correcta: 0
    },
    {
        pregunta: "¿En qué año se produjo el ataque a Pearl Harbor?",
        respuestas: ["1941", "1945", "1939", "1942"],
        correcta: 0
    },
    {
        pregunta: "¿Quién fue el primer emperador de China?",
        respuestas: ["Qin Shi Huang", "Han Gaozu", "Tang Taizong", "Wu Zetian"],
        correcta: 0
    },
    {
        pregunta: "¿En qué año comenzó la Revolución Francesa?",
        respuestas: ["1789", "1776", "1804", "1815"],
        correcta: 0
    },
    {
        pregunta: "¿Quién escribió 'El Príncipe'?",
        respuestas: ["Nicolás Maquiavelo", "Thomas Hobbes", "John Locke", "Jean-Jacques Rousseau"],
        correcta: 0
    }
    // Añade al menos 29 preguntas más
];

let preguntasSeleccionadas = [];
let preguntaActual = 0;
let puntuacion = 0;
let tiempoRestante;
let timer;

const btnIniciar = document.getElementById('btn-iniciar');
const examenDiv = document.getElementById('examen');
const preguntaContainer = document.getElementById('pregunta-container');
const tiempoRestanteSpan = document.getElementById('tiempo-restante');
const btnSiguiente = document.getElementById('btn-siguiente');
const resultadoDiv = document.getElementById('resultado');
const mensajeResultado = document.getElementById('mensaje-resultado');
const puntuacionSpan = document.getElementById('puntuacion');
const imagenResultado = document.getElementById('imagen-resultado');
const btnRepetir = document.getElementById('btn-repetir');
const btnSalir = document.getElementById('btn-salir');

btnIniciar.addEventListener('click', iniciarExamen);
btnRepetir.addEventListener('click', repetirExamen);
btnSalir.addEventListener('click', salirExamen);

function iniciarExamen() {
    preguntasSeleccionadas = seleccionarPreguntasAleatorias();
    preguntaActual = 0;
    puntuacion = 0;
    mostrarPregunta();
    document.getElementById('inicio').style.display = 'none';
    examenDiv.style.display = 'block';
}

function seleccionarPreguntasAleatorias() {
    const seleccionadas = [];
    const indices = [];
    while (seleccionadas.length < 10) {
        const index = Math.floor(Math.random() * preguntas.length);
        if (!indices.includes(index)) {
            indices.push(index);
            seleccionadas.push(preguntas[index]);
        }
    }
    return seleccionadas;
}

function mostrarPregunta() {
    const pregunta = preguntasSeleccionadas[preguntaActual];
    preguntaContainer.innerHTML = `<h2>${pregunta.pregunta}</h2>`;
    pregunta.respuestas.forEach((respuesta, index) => {
        const respuestaDiv = document.createElement('div');
        respuestaDiv.classList.add('respuesta');
        respuestaDiv.textContent = respuesta;
        respuestaDiv.addEventListener('click', () => validarRespuesta(index));
        preguntaContainer.appendChild(respuestaDiv);
    });
    tiempoRestante = 15;
    tiempoRestanteSpan.textContent = tiempoRestante;
    btnSiguiente.style.display = 'none';
    timer = setInterval(actualizarCronometro, 1000);
}

function actualizarCronometro() {
    tiempoRestante--;
    tiempoRestanteSpan.textContent = tiempoRestante;
    if (tiempoRestante === 0) {
        clearInterval(timer);
        marcarNoRespondida();
    }
}

function validarRespuesta(index) {
    clearInterval(timer);
    const pregunta = preguntasSeleccionadas[preguntaActual];
    const respuestasDivs = document.querySelectorAll('.respuesta');
    respuestasDivs.forEach((respuestaDiv, i) => {
        if (i === pregunta.correcta) {
            respuestaDiv.classList.add('correcta');
        } else if (i === index) {
            respuestaDiv.classList.add('incorrecta');
        }
        respuestaDiv.style.pointerEvents = 'none';
    });
    if (index === pregunta.correcta) {
        puntuacion++;
    }
    btnSiguiente.style.display = 'block';
}

function marcarNoRespondida() {
    const respuestasDivs = document.querySelectorAll('.respuesta');
    respuestasDivs.forEach((respuestaDiv) => {
        respuestaDiv.style.pointerEvents = 'none';
    });
    respuestasDivs[preguntasSeleccionadas[preguntaActual].correcta].classList.add('correcta');
    btnSiguiente.style.display = 'block';
}

btnSiguiente.addEventListener('click', () => {
    preguntaActual++;
    if (preguntaActual < 10) {
        mostrarPregunta();
    } else {
        finalizarExamen();
    }
});

function finalizarExamen() {
    examenDiv.style.display = 'none';
    resultadoDiv.style.display = 'block';
    puntuacionSpan.textContent = puntuacion;
    let imagenSrc = '';
    if (puntuacion >= 8) {
        mensajeResultado.textContent = '¡Excelente trabajo! ¡Aprobaste el examen con éxito!';
        imagenSrc = '../Fotos/excelente.jpg';
    } else if (puntuacion >= 5) {
        mensajeResultado.textContent = 'Buen trabajo, pero puedes mejorar.';
        imagenSrc = '../Fotos/bueno.jpg';
    } else if (puntuacion >= 1) {
        mensajeResultado.textContent = 'Lo intentaste, pero necesitas estudiar más.';
        imagenSrc = '../Fotos/necesita_mejorar.jpg';
    } else {
        mensajeResultado.textContent = 'No acertaste ninguna pregunta. ¡Necesitas estudiar más!';
        imagenSrc = '../Fotos/sin_aciertos.jpg';
    }
    imagenResultado.src = imagenSrc;
}

function repetirExamen() {
    resultadoDiv.style.display = 'none';
    iniciarExamen();
}

function salirExamen() {
    resultadoDiv.style.display = 'none';
    document.getElementById('inicio').style.display = 'block';
}