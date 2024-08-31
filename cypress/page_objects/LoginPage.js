const { first } = require("lodash");

class LoginPage {

    // Método para visitar la página de login
    visit() {
        cy.visit('https://www.saucedemo.com/');  // URL base definida en cypress.config.js
    }

    // Método para llenar el campo de nombre de usuario
    fillUsername(username) {
        cy.get('[data-test="username"]').type('Lidia');  // Selecciona el campo de usuario y escribe el nombre
    }

    // Método para llenar el campo de contraseña
    fillPassword(password) {
        cy.get('#password').type(password);  // Selecciona el campo de contraseña y escribe la contraseña
    }

    // Método para hacer clic en el botón de login
    submit() {
        cy.get('#login-button').click();  // Hacer clic en el botón de login
    }
}

module.exports = new LoginPage();