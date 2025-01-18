import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai"; // Gemini SDK 
let selectedTeacher = null;

// ----------------------------------API config---------------------------

const API_KEY = ""; 
const genAI = new GoogleGenerativeAI(API_KEY);
// ----------------------------------API config---------------------------

// ----------------------------------Teacher config---------------------------
let teacherModel;
let chatSession1;
// ----------------------------------Teacher config---------------------------


function selectTeacher(teacher, description = "") {
    selectedTeacher = teacher;
    
    document.getElementById('chat-header').innerText = `Estas hablando con ${teacher}`;
    document.getElementById('chat-messages').innerHTML = ''; // Clear previous messages

    // Highlight selected teacher
    const teacherButtons = document.querySelectorAll('.list-group-item');
    teacherButtons.forEach(button => button.classList.remove('active'));
    teacherModel = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash", 
        systemInstruction: description // Descripción del docente 1 MODIFICABLE: Esta es la descripción del primer profesor
    });
    chatSession1 = teacherModel.startChat({ history: [] });
    event.currentTarget.classList.add('active');
}
window.selectTeacher = selectTeacher
function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (!userInput || !selectedTeacher) {
        alert('Por favor seleccione un profesor y escriba un mensaje');
        return;
    }

    // Display user message
    displayMessage('You', userInput, 'user');

    // Clear input
    document.getElementById('user-input').value = '';

    // Send message to Gemini API

    fetchGeminiResponse(userInput);
}
window.sendMessage = sendMessage

function displayMessage(sender, message, type) {
    const messageElement = document.createElement('div');
    messageElement.className = `message card ${type}`;
    messageElement.innerHTML = `
        <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">${sender}</h6>
            <p class="card-text">${message}</p>
        </div>`;
    document.getElementById('chat-messages').appendChild(messageElement);
    document.getElementById('chat-messages').scrollTop = document.getElementById('chat-messages').scrollHeight;
}

async function fetchGeminiResponse(userInput) {
    // Example API call (replace with real Gemini API endpoint and method)
    try {
        // Enviar la consulta a la API
        const response = await chatSession1.sendMessage(userInput);
        const respuesta = await response.response.text();
        displayMessage(selectedTeacher, respuesta, 'teacher');
    } catch(error){
        console.error('Error:', error);
        displayMessage(selectedTeacher, 'Hubo un error al procesar tu mensaje', 'teacher');
    }
}