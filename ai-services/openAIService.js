require('dotenv').config();

const axios = require('axios');

async function generateTestScenarios(htmlContent, options = {}) {
    const apiKey = process.env.OPENAI_API_KEY;

    const defaultOptions = {
        model: "gpt-4",
        maxTokens: 2000,
        temperature: 0.5
    };

    const finalOptions = { ...defaultOptions, ...options };

    const messages = [
        {
            "role": "system",
            "content": "Eres un experto en automatización de pruebas con Cypress y Cucumber, y tu tarea es generar escenarios de prueba en Gherkin basados en el siguiente código HTML. El HTML describe un componente o página web que contiene elementos interactivos como formularios, botones, y enlaces. 1. Analiza el código HTML para identificar los elementos clave que deberían ser objeto de pruebas. Considera elementos como inputs, botones, enlaces, y cualquier otro elemento interactivo o que represente funcionalidad clave. 2. Genera un conjunto de escenarios de prueba en formato Gherkin que cubran las interacciones más relevantes con estos elementos. Asegúrate de incluir escenarios que validen la funcionalidad básica, como la entrada de datos, la sumisión de formularios, y las redirecciones. 3. Si el código HTML contiene atributos especiales como 'required', 'maxlength', 'pattern', etc., incluye escenarios que verifiquen estos comportamientos específicos. 4. Proporciona los escenarios en un formato que pueda ser directamente utilizado en un entorno de pruebas automatizado con Cypress y Cucumber."
        },
        {
            "role": "user",
            "content": htmlContent
        }
    ];

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: finalOptions.model,
            messages: messages,
            max_tokens: finalOptions.maxTokens,
            temperature: finalOptions.temperature
        }, {
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            }
        });

        return response.data.choices[0].message.content.trim();
    } catch (error) {
        console.error('Error generating scenarios:', error);
        throw error;
    }
}

module.exports = { generateTestScenarios };