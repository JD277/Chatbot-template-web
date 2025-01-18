Welcome to the AI Chatbot Web Application! This project includes an interactive AI chatbot interface and a professional landing page. The AI chatbot is designed to provide personalized assistance and support for various subjects using the Gemini API.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **AI Chatbot**: Engage with AI teachers for personalized learning experiences.
- **Responsive Design**: The interface is fully responsive and works seamlessly on various devices.
- **Landing Page**: A professional landing page to introduce the AI chatbot and its features.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/JD277/Chatbot-template-web.git
      cd ai-chatbot-webapp
   
   ```

2. **Open the project in your preferred code editor**.

3. **Install dependencies**:
   This project primarily uses HTML, CSS, and JavaScript. Ensure you have the necessary dependencies:
   - [Bootstrap](https://getbootstrap.com/)
   - [Font Awesome](https://fontawesome.com/)
   - [Google Generative AI SDK](https://esm.run/@google/generative-ai)

## Usage

1. **Configure the API Key**:
   - Open the `script.js` file.
   - Replace `const API_KEY = "";` with your actual Gemini API key.

2. **Open the `index.html` file in your browser** to view the landing page.

3. **Navigate to the chat interface**:
   - Click the "Start Chat" button on the landing page or directly open the `chat.html` file.

4. **Interact with the AI Chatbot**:
   - Select an AI teacher from the sidebar (or hamburger menu on mobile).
   - Type your message and click "Send" to interact with the AI.

## File Structure

```plaintext
ai-chatbot-webapp/
│
├── index.html          # Landing page
├── chat.html           # AI Chatbot interface
├── styles.css          # Styles for both landing page and chat interface
├── script.js           # JavaScript for AI Chatbot interaction
└── assets/             # Additional assets (images, icons, etc.)
    └── about-image.jpg # Example image for the About section
```

### Explanations:

- **index.html**: This file contains the HTML structure for the landing page, including sections like Hero, Features, About, and Contact.
- **chatbot.html**: This file contains the HTML structure for the AI chatbot interface, including the sidebar, chat area, and chat input.
- **styles2.css**: This file includes the CSS styles for the landing page.
- **styles.css**: This file includes the CSS styles for the chat interface, ensuring a consistent look and feel.
- **script.js**: This file contains JavaScript functions for the AI chatbot interaction, such as selecting an AI teacher and sending/receiving messages.

## Technologies Used

- **HTML5**: For the structure of the web pages.
- **CSS3**: For styling the web pages.
- **Bootstrap 4**: For responsive design and layout.
- **Font Awesome**: For icons used in the UI.
- **JavaScript**: For interactivity and functionality of the chatbot.
- **Google Generative AI SDK**: For integrating the Gemini API.

## Contributing

We welcome contributions to improve this project! To contribute:

1. **Fork the repository**.
2. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**.
4. **Commit your changes**:
   ```bash
   git commit -m "Add feature: your-feature-name"
   ```
5. **Push to your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Create a Pull Request**.


