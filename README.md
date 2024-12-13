# Proyecto de Renta de Películas

Este proyecto es un sitio web de renta de películas diseñado para administradores. Permite agregar usuarios y películas, así como gestionar una lista de películas favoritas.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **TypeScript**: Superconjunto de JavaScript que añade tipado estático opcional.
- **React Router**: Biblioteca para manejar el enrutamiento en aplicaciones React.
- **Axios**: Biblioteca para realizar solicitudes HTTP desde el navegador.
- **CSS**: Hojas de estilo en cascada para dar estilo a los componentes y la interfaz de usuario.
- **@testing-library/react**: Biblioteca para probar componentes React.
- **@types**: Paquetes de definiciones de tipos para bibliotecas de JavaScript.

## Componentes del Proyecto

### Componentes Principales

- **Navbar**: Barra de navegación que contiene enlaces a diferentes rutas de la aplicación, como "Home", "Add Movie", "Favorite Movies", "Users" y "Register Users". También incluye un logo.
- **MovieCard**: Componente que muestra la información de una película individual y permite agregarla a favoritos.
- **AddMovie**: Componente que contiene un formulario para agregar una nueva película. Utiliza `useState` para manejar el estado del formulario y `axios` para enviar una solicitud POST al servidor.
- **Favorites**: Componente que muestra una lista de películas favoritas. Permite eliminar películas de la lista de favoritos.
- **Home**: Ruta principal que muestra una lista de películas o una página de bienvenida.
- **Users**: Componente que muestra una lista de usuarios.
- **RegisterUsers**: Componente que contiene un formulario para registrar nuevos usuarios.

### Hooks Personalizados

- **useFetchMovies**: Hook personalizado que se utiliza para obtener datos de películas desde una API.

## Estructura del Proyecto

```plaintext
src/
├── assets/
│   └── logo.png
├── components/
│   ├── Navbar.tsx
│   ├── MovieCard.tsx
├── hooks/
│   └── useFetchMovies.ts
├── pages/
│   ├── AddMovie.tsx
│   ├── Favorites.tsx
│   ├── Home.tsx
│   ├── Users.tsx
│   └── RegisterUsers.tsx
├── App.tsx
├── index.tsx
└── reportWebVitals.ts
