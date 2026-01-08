# Portafolio Freelancer

Este es un proyecto de portafolio para freelancer construido con **Astro**, **React**, y **Tailwind CSS**.

## Estructura del Proyecto

- `src/components/astro/`: Componentes estáticos (e.g., Hero, Footer).
- `src/components/react/`: Componentes interactivos (e.g., ColorPicker).
- `src/layouts/`: Layout base con configuración de temas.
- `src/pages/`: Rutas del sitio (Inicio y Catálogo).

## Características

- ⚡ **Astro**: Rendimiento estático por defecto.
- ⚛️ **React**: Interactividad donde se necesita (Islas).
- 🎨 **Tailwind CSS**: Estilizado rápido.
- 🌓 **Theming**: Variables CSS para fácil personalización de colores (`src/layouts/Layout.astro` y `tailwind.config.mjs`).

## Cómo Iniciar

1.  **Instalar dependencias**:
    ```bash
    npm install
    ```

2.  **Iniciar servidor de desarrollo**:
    ```bash
    npm run dev
    ```

3.  **Construir para producción**:
    ```bash
    npm run build
    ```

## Personalización

Puedes cambiar los colores globales editando las variables CSS en `src/layouts/Layout.astro`.
