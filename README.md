# Gestión de Equipos - Frontend

Este es el repositorio del frontend del proyecto de gestión de equipos, desarrollado con React + Vite. Permite la visualización y administración de equipos mediante una interfaz interactiva. Se conecta con el backend ubicado en [Back-Project-Isanda](https://github.com/Paulatf96/Back-Project-Isanda).

## Características

- Tabla para visualizar todos los miembros disponibles.
- Formulario para la creación de equipos con reglas específicas.
- Visualización de equipos creados en tablas.
- Función para eliminar equipos.
- Conexión con API para gestionar la información en tiempo real.

## Tecnologías utilizadas

- React + Vite
- Material UI
- Context API para el estado global
- Fetch API para la comunicación con el backend

## Instalación y ejecución

### 1. Clonar el repositorio

```sh
 git clone https://github.com/tuusuario/tu-repo.git
 cd tu-repo
```

### 2. Instalar dependencias

```sh
 npm install
```

### 4. Ejecutar el proyecto

```sh
 npm run dev
```

## API Endpoints

Este frontend se comunica con el backend para obtener y gestionar datos mediante los siguientes endpoints:

| Método | Endpoint       | Descripción                         |
| ------ | -------------- | ----------------------------------- |
| GET    | `/members`     | Obtiene la lista de miembros        |
| GET    | `/teams`       | Obtiene la lista de equipos creados |
| POST   | `/create/team` | Crea un nuevo equipo                |
| POST   | `/delete/team` | Elimina un equipo                   |
