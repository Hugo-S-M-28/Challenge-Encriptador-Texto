
# Challenge ONE | Encriptador de Texto

¡Bienvenidas y bienvenidos a nuestro primer desafío!

Este proyecto es una herramienta de encriptación de texto que permite a los usuarios convertir y revertir mensajes utilizando un conjunto específico de reglas. Ideal para aprender los conceptos básicos de manipulación de strings en JavaScript y estilización con SCSS.

## Reglas de Encriptación

- La letra "e" se convierte en "enter".
- La letra "i" se convierte en "imes".
- La letra "a" se convierte en "ai".
- La letra "o" se convierte en "ober".
- La letra "u" se convierte en "ufat".

## Requisitos

- Debe funcionar solo con letras minúsculas.
- No se deben utilizar letras con acentos ni caracteres especiales.
- Debe ser posible convertir una palabra para la versión encriptada y también devolver una palabra encriptada a su versión original.

**Ejemplo**:
- `"gato"` => `"gaitober"`
- `"gaitober"` => `"gato"`

## Funcionalidades

- **Encriptar**: Convierte el texto en una forma codificada utilizando reglas predefinidas.
- **Desencriptar**: Revierte el texto encriptado a su forma original.
- **Copiar**: Permite copiar el texto encriptado o desencriptado al portapapeles.

## Estructura del Proyecto

```
/proyecto-encriptador
│
├── /imagenes
│   ├── logoalura.png
│   └── muñeco.png
│
├── /scss
│   └── style.scss
│
├── /js
│   └── script.js
│
├── index.html
└── README.md
```

## Instalación y Uso

### Requisitos Previos

- Un navegador web moderno.
- Node.js y npm (opcional, para compilar SCSS a CSS).

### Instrucciones de Uso

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/challenge-encriptador-texto.git
   ```

2. **Navega al directorio del proyecto**:

   ```bash
   cd challenge-encriptador-texto
   ```

3. **Abre el archivo `index.html` en tu navegador**.

4. **Utiliza la aplicación**:
   - Ingresa el texto en el área de texto.
   - Haz clic en el botón `Encriptar` para convertir el texto a su forma encriptada.
   - Haz clic en el botón `Desencriptar` para revertir el texto encriptado.
   - Usa el botón `Copiar` para copiar el texto al portapapeles.

### Compilar SCSS a CSS (Opcional)

Si deseas realizar cambios en el archivo SCSS o agregar estilos personalizados, puedes compilar SCSS a CSS utilizando Node.js y npm. Sigue estos pasos:

1. **Instala las dependencias**:

   ```bash
   npm install
   ```

2. **Compila el archivo SCSS a CSS**:

   ```bash
   npm run build-css
   ```

### Scripts de npm (Opcional)

Para compilar SCSS a CSS, incluye el siguiente archivo `package.json` en el proyecto:

#### `package.json`

```json
{
  "name": "one-challenge-encriptador-texto",
  "version": "1.0.0",
  "description": "Proyecto de encriptador de texto para el Challenge ONE.",
  "scripts": {
    "build-css": "sass scss/style.scss css/style.css",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "devDependencies": {
    "sass": "^1.77.8"
  },
  "author": "Hugo Sánchez Milán",
  "license": "MIT",
  "dependencies": {
    "bootstrap": "^5.3.3"
  }
}
```

Para utilizar estos scripts:

1. **Instala las dependencias**:

   ```bash
   npm install
   ```

2. **Compila SCSS a CSS**:

   ```bash
   npm run build-css
   ```

## Contacto

Para preguntas o comentarios, puedes contactarme en:

- linkedin: [Hugo Sánchez Milán](https://www.linkedin.com/in/hugo-s%C3%A1nchez-mil%C3%A1n-197b81278/)
- GitHub: [Hugo-S-M-28](https://github.com/Hugo-S-M-28)

¡Gracias por usar el Encriptador de Texto!
