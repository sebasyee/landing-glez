# Plantilla WebApp

Plantilla base para crear landing pages y proyectos front-end con React, TypeScript, Vite y Tailwind CSS.

## Tecnologías

- React
- TypeScript
- Vite
- Tailwind CSS
- Oxlint

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

## Compilar para producción

```bash
npm run build
```

## Previsualizar la build

```bash
npm run preview
```

## Crear un proyecto nuevo desde esta plantilla

### 1. Crear el repositorio desde la plantilla

1. Ve a la página del repositorio en GitHub.
2. Haz clic en "Use this template".
3. Selecciona "Create a new repository".
4. Asigna un nombre para tu proyecto, por ejemplo: `landing-zapateria`.
5. Haz clic en "Create repository".

### 2. Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/landing-zapateria.git
cd landing-zapateria
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Iniciar el proyecto

```bash
npm run dev
```

## Configuración de lint

Si quieres habilitar reglas más estrictas para producción, puedes ampliar la configuración de Oxlint editando `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

## Documentación adicional

- [Vite](https://vite.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Oxlint](https://oxc.rs/docs/guide/usage/linter/rules)
