// Carga las variables de entorno desde .env
require('dotenv').config();

// Importa el servicio de OpenAI que creaste
const { generateTestScenarios } = require('./ai-services/openAIService');

// Define un prompt de prueba
const htmlContentPart1 = `
<html lang="en"><head><meta charset="utf-8"><link rel="icon" href="/favicon.ico"><meta name="robots" content="noindex"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#ffffff"><meta name="description" content="Sauce Labs Swag Labs app"><link rel="apple-touch-icon" href="/icon/icon-192x192.png"><link rel="manifest" href="/manifest.json"><script type="text/javascript">!function(n){if("/"===n.search[1]){var a=n.search.slice(1).split("&").map((function(n){return n.replace(/~and~/g,"&")})).join("?");window.history.replaceState(null,null,n.pathname.slice(0,-1)+a+n.hash)}}(window.location)</script><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&amp;family=DM+Sans:wght@400;500"><title>Swag Labs</title><link href="/static/css/main.f6c64be5.chunk.css" rel="stylesheet"></head><body><noscript>You need to enable JavaScript to run this app.</noscript><div id="root"><div class="login_container"><div class="login_logo">Swag Labs</div><div class="login_wrapper" data-test="login-container"><div class="login_wrapper-inner"><div id="login_button_container" class="form_column"><div class="login-box"><form><div class="form_group"><input class="input_error form_input" placeholder="Username" type="text" data-test="username" id="user-name" name="user-name" autocorrect="off" autocapitalize="none" value=""></div><div class="form_group"><input class="input_error form_input" placeholder="Password" type="password" data-test="password" id="password" name="password" autocorrect="off" autocapitalize="none" value=""></div><div class="error-message-container"></div><input type="submit" class="submit-button btn_action" data-test="login-button" id="login-button" name="login-button" value="Login"></form></div></div></div>`;
const htmlContentPart2 = `<div class="login_credentials_wrap" data-test="login-credentials-container"><div class="login_credentials_wrap-inner"><div id="login_credentials" class="login_credentials" data-test="login-credentials"><h4>Accepted usernames are:</h4>standard_user<br>locked_out_user<br>problem_user<br>performance_glitch_user<br>error_user<br>visual_user<br></div><div class="login_password" data-test="login-password"><h4>Password for all users:</h4>secret_sauce</div></div></div></div></div></div></body></html>`;
const prompt = htmlContentPart1 + htmlContentPart2;

// Ejecuta el servicio para generar los escenarios de prueba
generateTestScenarios(prompt)
    .then(response => {
        console.log("Respuesta de OpenAI:");
        console.log(response);
    })
    .catch(error => {
        console.error("Error al comunicarse con OpenAI:", error);
    });