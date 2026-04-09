# Backend - Arquitectura Cliente-Servidor

## 📌 Descripción
Este proyecto corresponde a la implementación de un backend en Node.js bajo arquitectura cliente-servidor.

## 🏗️ Arquitectura
El proyecto sigue una arquitectura por capas:

- config → configuración (Swagger)
- domain → lógica de negocio e interfaces
- presentation → controladores, rutas y módulos

## 📦 Módulos implementados

Se crearon los siguientes módulos:

- Orders
- Categories
- Payments

Cada módulo contiene:
- Controller
- Service
- Routes

## 🌐 APIs disponibles

- GET /api/orders/{count}
- GET /api/categories/{count}
- GET /api/payments/{count}

## 📄 Documentación API
Se utilizó Swagger (OpenAPI) para documentar los endpoints.

Ruta de acceso:
http://localhost:3000/api/docs

## 🎲 Generación de datos
Se utilizó faker.js para generar datos dinámicos sin base de datos.

## ▶️ Ejecución

```bash
npm install
npm run start