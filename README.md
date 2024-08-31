🧪 Cypress Cucumber Automation Project

    Descripción 📄
    
Este proyecto es la implementación de pruebas automatizadas, utilizando Cypress junto con Cucumber para validar flujos E2E (end-to-end) y API. El objetivo es mostrar una enfoque modular y profesional en la creación de pruebas automatizadas, utilizando prácticas como Page Object Model (POM) que permitan una estructura modular y flexible para la fácil expansión del proyecto.

_______________________________________________________________________________________________________

Características principales 🚀

    - Cypress como framework de automatización.
    - Cucumber para definir escenarios de prueba en un formato claro y legible para cualquier persona+.
    - Pruebas automatizadas tanto de E2E (frontend) como de API.
    - Estructura modular y flexible que permite una fácil expansión del proyecto.

Instalación y Configuración 🔧

    1 - Clonar el repositorio:
        git clone https://github.com/Leonardo/cypress-cucumber-api-e2e.git
        cd cypress-cucumber-automation

    2 - Instalar las dependencias:
        npm install
    
    3 - Ejecutar las pruebas:
        - Para abrir Cypress con la interfaz visual:
            npx cypress open
        - Para ejecutar las pruebas en modo headless (sin interfaz gráfica):
            npx cypress run

_______________________________________________________________________________________________________

Estructura del Proyecto 🗂️

cypress/
├── integration/
│   ├── features/                   # Pruebas E2E, API y Definiciones de pasos para pruebas
├── page_objects/                   # Page Object Model para E2E
├── support/                        # Comandos personalizados y hooks globales
├── downloads/                      # Carpeta para descargas durante pruebas
├── fixtures/                       # Datos estáticos de prueba (ej: archivos JSON)
├── videos/                         # Videos de ejecución de pruebas (si están habilitados)
├── screenshots/                    # Capturas de pantalla de fallos de pruebas
└── cypress.config.js               # Configuración de Cypress

_______________________________________________________________________________________________________

Funcionalidades futuras 🔮

    Este proyecto está en constante evolución, y algunas características planificadas incluyen:
    
    - Integración con OpenAI - chatGPT para generar escenarios de prueba automáticamente.
    - Consultas a bases de datos mediante tareas personalizadas.
    - Expansión del conjunto de pruebas, tanto para E2E como para API.
    - Mayor integración con servicios y herramientas de CI/CD.
    - Implementación de pruebas para versión mobile.
    - Implementación de WorkFlows (GitHub Action) para verificar integridad del proyecto.

_______________________________________________________________________________________________________

Contribuciones 🤝

    Si deseas contribuir a este proyecto, eres más que bienvenido!
    Puedes hacer un fork del repositorio, crear una nueva rama con tus cambios y abrir un pull request.

_______________________________________________________________________________________________________

Contacto ✉️

    Si tienes alguna duda o sugerencia, no dudes en contactarme por email o LinkedIn.
    - https://www.linkedin.com/in/leonardo-pedreira-270a79119/
    - lp.leonardo.pedreira@hotmail.com


¡Gracias por visitar el proyecto y espero que te sirva! 😊
