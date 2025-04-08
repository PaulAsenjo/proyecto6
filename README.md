# API para gestionar colección de zapatillas

Backend para una app de coleccionistas de zapatillas, permite registro de usuarios, autenticación y manejo de inventario personalizado.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express.js
- bcryptjs
- MongoDB con Mongoose
- JWT para autenticación
- Dotenv

---

## 🔐 Autenticación
Algunas de las rutas están protegidas con JWT. Para acceder, primero debes registrarte e iniciar sesión para obtener un token.

---

## 🧩 Funcionalidades principales

- Registro y login de usuarios
- Ver zapatillas:
  - Listado completo
  - Por ID
  - Por marca
  - Por estado (status)
- Agregar nuevas zapatillas
- Actualizar datos de zapatillas
- Eliminar zapatillas:
  - Soft delete (marcar como inactivas)
  - Hard delete (eliminar definitivamente)
- Ver cuántas zapatillas están actualmente "En colección"

---

## 🧪 Ejemplo de documento Zapatilla
```json
{
  "_id": "67e2c8d56a068ea6beb7ee79",
  "model": "Dunk Low",
  "brand": "Nike",
  "colorway": ["Rojo"],
  "marketValue": 1823,
  "releaseYear": 2025,
  "status": "Pendiente",
  "isActive": true
}
```

---

## 📦 Instalación local

1. Clonar el repositorio:
```bash
git clone https://github.com/PaulAsenjo/proyecto6.git
cd proyecto6
```

2. Instalar dependencias:
```bash
npm install
```

3. Crear un archivo `.env` basado en `.env.template` y completar tus variables de entorno.

4. Iniciar el servidor:
```bash
npm run dev
```

---

## 🌐 Deploy

La API está desplegada en Render iniciada en swagger. Puedes usar herramientas como Postman para consumirla.
https://app-zapatillas.onrender.com/api-docs

---
👟👟👟👟👟👟
