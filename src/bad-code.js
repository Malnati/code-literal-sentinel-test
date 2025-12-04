// src/bad-code.js

// Hardcoded secrets (O clássico)
const API_KEY = "sk-1234567890abcdef1234567890abcdef";
const DB_PASSWORD = 'super-secret-password-123';

// Magic Strings (O Sentinela deve pegar isso)
function getStatusColor(status) {
    if (status === "error") return "#ff0000";
    if (status === "success") return "#00ff00";
    return "#cccccc";
}

// URLs Hardcoded
const endpoint = "https://api.production.com/v1/users";

// Mensagens de usuário (Falso positivo aceitável para a IA filtrar depois)
const welcomeMsg = "Bem-vindo ao sistema v2.0";
