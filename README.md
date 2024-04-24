# Proyecto StarCinema

Este proyecto es una API desarrollada con NestJS para gestionar diversas funcionalidades relacionadas con un cine, dadas por usuarios, películas, salas, funciones y tickets. La API implementa características avanzadas de autenticación y autorización, así como persistencia de datos utilizando PostgreSQL a través de TypeORM.

## Tecnologías Utilizadas
- **NestJS**: Framework de Node.js para la construcción de aplicaciones del lado del servidor.
- **PostgreSQL**: Sistema de gestión de bases de datos relacional para almacenar datos.
- **TypeORM**: ORM para interactuar con la base de datos PostgreSQL.
- **JWT (JSON Web Tokens)**: Mecanismo utilizado para la autenticación de usuarios mediante tokens.
- **Jest**: Framework de pruebas para JavaScript utilizado para realizar pruebas unitarias y de integración en la aplicación.

## Requisitos Previos
- Node.js instalado en tu sistema. Puedes descargarlo [aquí](https://nodejs.org/).
- PostgreSQL instalado y configurado en tu sistema. Puedes descargarlo [aquí](https://www.postgresql.org/).

## Instalación
1. Clona este repositorio en tu máquina local:
   ```
   git clone https://github.com/ICESI-CI3/backend-codebuilders.git
   ```
2. Instala las dependencias del proyecto:
   ```
   npm install
   ```

## Configuración de la Base de Datos
1. Crea una base de datos PostgreSQL en tu servidor local.
2. Crea un archivo en el directorio base del proyecto llamado `.env`
3. En el archivo `.env`, configura las variables de entorno relacionadas con la base de datos (`DB_HOST`, `DB_PORT`, `DB_USERNAME`, `DB_PASSWORD`, `DB_DATABASE`) según tu configuración local.

## Ejecución de la Aplicación
Una vez que la configuración esté completa, puedes ejecutar la aplicación utilizando el siguiente comando:
```
npm run start
```

La aplicación se ejecutará en `http://localhost:3000` de forma predeterminada.

## Ejecución de Pruebas
Para ejecutar las pruebas unitarias y de integración, puedes utilizar el siguiente comando:
```
npm run test
```
## Endpoints

A continuación, se detallan las funcionalidades disponibles en la API:

### Usuarios

-   **GET `/users`**: Lista todos los usuarios.
-   **GET `/users/:id`**: Obtiene detalles de un usuario por ID.
-   **POST `/users/register`**: Registra un nuevo usuario.
-   **POST `/users/login`**: Inicia sesión de usuario.
-   **PUT `/users/:id`**: Actualiza los detalles de un usuario por ID.
-   **DELETE `/users/:id`**: Elimina un usuario por ID.

### Películas

-   **GET `/movies`**: Lista todas las películas.
-   **GET `/movies/:id`**: Obtiene detalles de una película por ID.
-   **POST `/movies`**: Crea una nueva película.
-   **PUT `/movies/:id`**: Actualiza una película por ID.
-   **DELETE `/movies/:id`**: Elimina una película por ID.

### Salas

-   **GET `/rooms`**: Lista todas las salas.
-   **GET `/rooms/:id`**: Obtiene detalles de una sala por ID.
-   **POST `/rooms`**: Crea una nueva sala.
-   **PUT `/rooms/:id`**: Actualiza una sala por ID.
-   **DELETE `/rooms/:id`**: Elimina una sala por ID.

### Funciones

-   **GET `/functions`**: Lista todas las funciones.
-   **GET `/functions/:id`**: Obtiene detalles de una función por ID.
-   **POST `/functions`**: Crea una nueva función.
-   **PUT `/functions/:id`**: Actualiza una función por ID.
-   **DELETE `/functions/:id`**: Elimina una función por ID.

### Tickets

-   **GET `/tickets`**: Lista todos los tickets.
-   **GET `/tickets/:id`**: Obtiene detalles de un ticket por ID.
-   **POST `/tickets`**: Crea un nuevo ticket.
-   **PUT `/tickets/:id`**: Actualiza un ticket por ID.
-   **DELETE `/tickets/:id`**: Elimina un ticket por ID.

### Aportes
Aportes realizados por: 
-   George Trujillo
-   Ricardo Medina
-   Samuel Soto

### Proyecto

Internet Computing III - Icesi University - Cali - Valle del Cauca - Colombia

## Contact


For more information, feel free to contact us through our GitHub profiles:

-   George Trujillo:  [GeorgeU2030](https://github.com/GeorgeU2030)
-   Ricardo Medina:  [Skydoes10](https://github.com/Skydoes10)
-   Samuel Soto: [SamuelSoto7](https://github.com/SamuelSoto7)





[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/citunHee)
