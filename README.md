# Challenge ONE | Encriptador de Texto

![Angular](https://img.shields.io/badge/Angular-19.0.0-DD0031.svg?logo=angular&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.0.0-646CFF.svg?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6.svg?logo=typescript&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699.svg?logo=sass&logoColor=white)

¡Bienvenidas y bienvenidos! Este proyecto es una herramienta de encriptación de texto desarrollada para el Challenge ONE de Alura Latam. La aplicación permite cifrar y descifrar mensajes utilizando reglas de sustitución específicas, manteniendo un diseño fiel al original pero potenciado con tecnologías modernas.

## 🚀 Tecnologías Utilizadas

- **Angular 19**: Framework para aplicaciones web modernas.
- **Vite**: Motor de construcción ultrarrápido.
- **TypeScript**: Superset de JavaScript para un código más robusto.
- **Sass (SCSS)**: Preprocesador CSS para estilos avanzados y mantenibles.
- **Bootstrap 4.5**: Framework de diseño para componentes responsivos.

## 🔑 Reglas de Encriptación

La aplicación utiliza las siguientes llaves de encriptación:

- La letra **e** se convierte en **enter**
- La letra **i** se convierte en **imes**
- La letra **a** se convierte en **ai**
- La letra **o** se convierte en **ober**
- La letra **u** se convierte en **ufat**

**Requisitos adicionales:**
- Funciona exclusivamente con letras minúsculas.
- No se deben utilizar acentos ni caracteres especiales.

## 🛠️ Funcionalidades

- **Encriptar**: Transforma el texto de entrada según las reglas mencionadas.
- **Desencriptar**: Revierte el texto encriptado a su estado original.
- **Copiar**: Botón integrado para copiar rápidamente el resultado al portapapeles.
- **Diseño Responsivo**: Adaptado para Desktop, Tablet y Móvil.

## 📁 Estructura del Proyecto

```text
/
├── src/
│   ├── app/                # Lógica, plantillas y estilos del componente principal
│   │   ├── app.ts          # Controlador (TypeScript)
│   │   ├── app.html        # Estructura (HTML)
│   │   └── app.scss        # Estilos (SCSS)
│   ├── index.html          # Punto de entrada HTML
│   └── styles.scss         # Estilos globales
├── public/
│   └── imagenes/           # Recursos visuales (logos e iconos)
├── legacy/                 # Respaldo del código original (HTML/JS/CSS)
├── package.json            # Gestión de dependencias y scripts
└── README.md
```

## 💻 Instalación y Uso

### Requisitos Previos

- [Node.js](https://nodejs.org/) (Versión LTS recomendada)
- npm (incluido con Node.js)

### Pasos para ejecutar localmente

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/Hugo-S-M-28/Challenge-Encriptador-Texto.git
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   npm start
   ```

4. **Accede a la aplicación:**
   Abre tu navegador en [http://localhost:4200](http://localhost:4200).

## 🤝 Contacto

Desarrollado por **Hugo Sánchez Milán**.

- **LinkedIn**: [Hugo Sánchez Milán](https://www.linkedin.com/in/hugo-s-197b81278/)
- **GitHub**: [Hugo-S-M-28](https://github.com/Hugo-S-M-28)

---
¡Gracias por visitar este proyecto!
