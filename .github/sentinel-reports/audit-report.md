# 🛡️ Code Literal Audit
> **Source SHA:** 95802812907baa95d6d48b0bfdd17a6fbeaefe02
> **Data:** Fri Dec  5 01:00:22 UTC 2025

```text
src/bad-code.js:4:const API_KEY = "sk-1234567890abcdef1234567890abcdefp";
src/bad-code.js:5:const DB_PASSWORD = 'super-secret-password-123';
src/bad-code.js:9:    if (status === "error") return "#ff0000";
src/bad-code.js:10:    if (status === "success") return "#00ff00";
src/bad-code.js:11:    return "#cccccc";
src/bad-code.js:15:const endpoint = "https://api.production.com/v1/users";
src/bad-code.js:18:const welcomeMsg = "Bem-vindo ao sistema v2.0";
```
