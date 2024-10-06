let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

// Textos en ambos idiomas
const textos = {
    en: {
        inicio: "START",
        sobremi: "ABOUT ME",
        skills: "SKILLS",
        curriculum: "CURRICULUM",
        portfolio: "PORTFOLIO",
        contacto: "CONTACT",
        aboutMeTitle: "About Me",
        aboutMeText: "Hello, I'm Cesar, a Computer Systems Engineer, and I'm not a bot. I'm a Front-End Developer passionate about web and mobile programming.",
        personalData: "Personal Data",
        interests: "Interests",
        downloadCV: "Download CV",
        skillsTitle: "Skills",
        curriculumTitle: "Curriculum",
        portfolioTitle: "Portfolio",
        contactTitle: "Contact",
        sendMessage: "Send Message",
        teamwork: "Teamwork",
        problemSolving: "Problem-Solving",
        effectiveCommunication: "Effective Communication",
        leadership: "Leadership",
        timeManagement: "Time Management",
        criticalThinking: "Critical Thinking",
        adaptability: "Adaptability",
        agileMethodologies: "Agile Methodologies",
        attentionToDetail: "Attention to Detail",
        creativity: "Creativity",
        collaboration: "Collaboration",
        selfMotivation: "Self-Motivation",
    },
    es: {
        inicio: "INICIO",
        sobremi: "SOBRE MÍ",
        skills: "HABILIDADES",
        curriculum: "CURRÍCULUM",
        portfolio: "PORTAFOLIO",
        contacto: "CONTACTO",
        aboutMeTitle: "Sobre Mí",
        aboutMeText: "Hola, soy César, Ingeniero en Sistemas Computacionales, y no soy un bot. Soy un Desarrollador Front-End apasionado por la programación web y móvil.",
        personalData: "Datos Personales",
        interests: "Intereses",
        downloadCV: "Descargar CV",
        skillsTitle: "Habilidades",
        curriculumTitle: "Currículum",
        portfolioTitle: "Portafolio",
        contactTitle: "Contacto",
        sendMessage: "Enviar Mensaje",
        teamwork: "Trabajo en equipo",
        problemSolving: "Resolución de problemas",
        effectiveCommunication: "Comunicación efectiva",
        leadership: "Liderazgo",
        timeManagement: "Gestión del tiempo",
        criticalThinking: "Pensamiento crítico",
        adaptability: "Adaptabilidad",
        agileMethodologies: "Metodologías ágiles",
        attentionToDetail: "Atención al detalle",
        creativity: "Creatividad",
        collaboration: "Colaboración",
        selfMotivation: "Autonomía",
    }
};

// Variable para guardar el idioma actual
let idiomaActual = 'en';

// Función para cambiar el idioma
function cambiarIdioma(idioma) {
    document.querySelector("nav ul li:nth-child(1) a").textContent = textos[idioma].inicio;
    document.querySelector("nav ul li:nth-child(2) a").textContent = textos[idioma].sobremi;
    document.querySelector("nav ul li:nth-child(3) a").textContent = textos[idioma].skills;
    document.querySelector("nav ul li:nth-child(4) a").textContent = textos[idioma].curriculum;
    document.querySelector("nav ul li:nth-child(5) a").textContent = textos[idioma].portfolio;
    document.querySelector("nav ul li:nth-child(6) a").textContent = textos[idioma].contacto;
    
    document.querySelector(".sobremi h2").textContent = textos[idioma].aboutMeTitle;
    document.querySelector(".sobremi p").textContent = textos[idioma].aboutMeText;

    document.querySelector(".sobremi .col:nth-child(1) h3").textContent = textos[idioma].personalData;
    document.querySelector(".sobremi .col:nth-child(2) h3").textContent = textos[idioma].interests;
    
    // Cambio del texto del título con span
    document.querySelector('.span-b').textContent = idioma === 'es' ? 'Ingeniero en Sistemas' : 'Systems Engineer';
    document.querySelector('.span-c').textContent = idioma === 'es' ? ' - Desarrollador Frontend UI/UX' : ' - Frontend Developer UI/UX';
    document.querySelector('.span-games').textContent = idioma === 'es' ? 'JUEGOS' : 'GAMES';
    document.querySelector('.span-music').textContent = idioma === 'es' ? 'MUSICA' : 'MUSIC';
    document.querySelector('.span-trips').textContent = idioma === 'es' ? 'VIAJES' : 'TRIPS';
    document.querySelector('.span-sport').textContent = idioma === 'es' ? 'DEPORTE' : 'SPORT';
    document.querySelector('.span-tecnologies').textContent = idioma === 'es' ? 'Tecnologias y Herramientas' : 'Technologies and Tools';

    document.querySelector('.technical-skills').textContent = idioma === 'es' ? 'Habilidades Tecnicas' : 'Technical Skills';

    document.querySelector('.span-education').textContent = idioma === 'es' ? 'Educacion' : 'Education';
    document.querySelector('.span-experience').textContent = idioma === 'es' ? 'Experiencia de Trabajo' : 'Work Experience';

    document.querySelector('.your-name').placeholder = idioma === 'es' ? 'Tu Nombre:' : 'Your Name:';
    document.querySelector('.your-phone').placeholder = idioma === 'es' ? 'Tu Numero:' : 'Your Phone:';
    document.querySelector('.your-affair').placeholder = idioma === 'es' ? 'Asunto:' : 'Affair:';
    document.querySelector('.your-message').placeholder = idioma === 'es' ? 'Mensaje:' : 'Message:';


    document.querySelector('.phone-label').textContent = idioma === 'es' ? 'Teléfono:' : 'Phone:';

    

    document.querySelector(".sobremi button").textContent = textos[idioma].downloadCV;

    document.querySelector(".skills h2").textContent = textos[idioma].skillsTitle;
    document.querySelector(".curriculum h2").textContent = textos[idioma].curriculumTitle;
    document.querySelector(".portfolio h2").textContent = textos[idioma].portfolioTitle;
    document.querySelector(".contacto h2").textContent = textos[idioma].contactTitle;

    document.querySelector(".contacto button").textContent = textos[idioma].sendMessage;

    document.querySelector('.br-class + p').textContent = idioma === 'es' 
    ? 'Mi nombre es César, y recientemente me gradué del Instituto Tecnológico de Cuautla. Como parte de mis estudios, completé un proyecto significativo enfocado en el sector salud de un hospital. Este proyecto consistió en desarrollar un frontend web para el sistema del hospital. Esta experiencia no solo mejoró mis habilidades en desarrollo frontend, sino que también me proporcionó valiosos conocimientos sobre la gestión y operaciones de clínicas y hospitales. Estoy ansioso por aplicar lo que he aprendido y contribuir a futuras oportunidades en este campo.' 

    : 'My name is Cesar, and I recently graduated from Cuatla Technological Institute. As part of my studies, I completed a significant project focused on the healthcare sector of a hospital. This project involved developing a web frontend for the hospitals system. This experience not only enhanced my skills in frontend web development but also provided me with valuable insights into the management and operations of clinics and hospitals. I am eager to apply what I have learned and contribute to future opportunities in this field.';

    document.querySelector('.front-dev').textContent = idioma === 'es' ? 'Desarrollador Front:' : 'Front Developer:';


    document.querySelector('.br-class2 + p').textContent = idioma === 'es' 
    ? 'Desarrollé un sistema administrativo basado en la web para la gestión de clínicas, adaptable a dispositivos móviles. Las características clave incluyeron: control de acceso basado en roles para diferentes secciones según las credenciales de usuario, gestión de actividades médicas para la programación de citas, solicitud de pruebas, verificación de disponibilidad de habitaciones y mantenimiento de registros del personal. Herramientas de comunicación mejoradas para interacciones entre el personal en diversos roles.' 

    :'Developed a web-based administrative system for clinic management with mobile adaptability. Key features included:Role-based access control for different sections based on user credentials. Medical activity management for scheduling appointments, requesting tests, checking room availability, and maintaining staff records.Enhanced communication tools for inter-staff interactions across various roles';


    document.querySelector('.ux-des').textContent = idioma === 'es' ? 'Diseñador UX:' : 'UX Design:';

    document.querySelector('.ux-desing2 + p').textContent = idioma === 'es' 
    ? 'Certificado en UX de Google en colaboración con Coursera' :'Google UX Certificate in collaboration with Coursera';

    document.querySelector('.project-2 + p').textContent = idioma === 'es' 
    ? 'El proyecto integró Firebase Firestore para mejorar la escalabilidad, utilizando frameworks de interfaz de usuario como Bootstrap o Tailwind CSS, añadiendo componentes interactivos como FullCalendar, implementando Firebase Authentication para la gestión de usuarios, incorporando notificaciones push, optimizando el backend con Node.js y Express, utilizando React para un frontend dinámico, automatizando pruebas y monitoreo, y estableciendo pipelines de CI/CD para un despliegue y mantenimiento eficientes.'
    
    : 'The project involved integrating Firebase Firestore for better scalability, using UI frameworks like Bootstrap or Tailwind CSS, adding interactive components like FullCalendar, implementing Firebase Authentication for user management, incorporating push notifications, optimizing the backend with Node.js and Express, utilizing React for a dynamic frontend, automating testing and monitoring, and setting up CI/CD pipelines for efficient deployment and maintenance.';

    document.querySelector('.project-22').textContent = idioma === 'es' ? 'Desarrollador Front:' : 'Front Developer:';



}



// Función para alternar entre inglés y español
function toggleLanguage() {
    idiomaActual = idiomaActual === 'en' ? 'es' : 'en';
    cambiarIdioma(idiomaActual);
    document.getElementById("language-btn").textContent = idiomaActual === 'en' ? 'EN | ES' : 'ES | EN';
}

// Inicialización
document.addEventListener("DOMContentLoaded", function() {
    cambiarIdioma(idiomaActual); // Establece el idioma inicial
});




//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 