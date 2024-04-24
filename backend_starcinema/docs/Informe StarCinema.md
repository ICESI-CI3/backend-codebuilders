
## Informe StarCinema

#### **Generalidades del Proyecto**
Este proyecto se basa en el framework NestJS, un framework para Node.js diseñado para construir aplicaciones del lado del servidor eficientes y escalables. El proyecto se basa en el dominio de un Cine llamado "StarCinema" el cual tiene una estructura dada por usuarios, películas, salas, funciones y tickets, incorporando características de autenticación y autorización, así como persistencia de datos utilizando PostgreSQL con TypeORM.

#### **Descripción de Endpoints y Funcionalidades**

1. **Películas (Movies)**
   - **GET `/movies`**: Lista todas las películas. Acceso público.
   - **GET `/movies/:title`**: Obtiene una película por título. Acceso público.
   - **GET `/movies/:id`**: Obtiene detalles de una película por ID. Restringido a usuarios con rol `Admin`.
   - **POST `/movies/create`**: Permite la creación de nuevas películas. Restringido a `Admin`.
   - **DELETE `/movies/:id`**: Permite eliminar una película por ID. Restringido a `Admin`.

2. **Funciones (Functions)**
   - **GET `/functions`**: Lista todas las funciones. Acceso público.
   - **GET `/functions/:id`**: Obtiene detalles de una función específica por ID. Acceso público.
   - **POST `/functions/create`**: Crea una nueva función. Restringido a usuarios con rol `Admin`.
   - **PUT `/functions/:id`**: Actualiza una función existente por ID. Restringido a `Admin`.
   - **DELETE `/functions/:id`**: Elimina una función por ID. Restringido a `Admin`.

3. **Habitaciones (Rooms)**
   - **GET `/rooms`**: Lista todas las habitaciones. Acceso público.
   - **GET `/rooms/:name`**: Obtiene una habitación por nombre. Acceso público.
   - **GET `/rooms/:id`**: Obtiene una habitación por ID. Acceso público.
   - **POST `/rooms/create`**: Crea una nueva habitación. Restringido a `Admin`.
   - **PUT `/rooms/:id`**: Actualiza una habitación existente. Restringido a `Admin`.
   - **DELETE `/rooms/:id`**: Elimina una habitación. Restringido a `Admin`.

4. **Tickets**
   - **GET `/tickets`**: Lista todos los tickets. Acceso público.
   - **GET `/tickets/customer/:customerId`**: Lista los tickets de un cliente específico. Acceso público.
   - **GET `/tickets/customer/:customerId/last`**: Obtiene el último ticket de un cliente. Acceso público.
   - **GET `/tickets/:id`**: Obtiene un ticket por ID. Acceso público.
   - **POST `/tickets/create`**: Crea un nuevo ticket. Restringido a `Employee`.
   - **DELETE `/tickets/:id`**: Elimina un ticket por ID. Restringido a `Admin`.

#### **Autenticación y Autorización**
- La autenticación está implementada a través de JWT, donde los tokens son generados y verificados para cada solicitud relevante.
- La autorización se gestiona mediante guardias de NestJS y decoradores que controlan el acceso a los endpoints basados en roles de usuario.
- El uso de decoradores personalizados como `@Roles` ayuda a aplicar restricciones de roles directamente en los controladores.

#### **Persistencia de la Base de Datos**
- Se utiliza TypeORM como ORM para interactuar con PostgreSQL, facilitando la definición de entidades y la gestión de relaciones.
- La configuración de la base de datos se maneja en el módulo `database`, que centraliza la configuración de TypeORM y la expone para su uso en otros módulos a través de proveedores.

#### **Conclusiones**
El proyecto está diseñado con una arquitectura sólida y modular, que permite una fácil expansión a mas funcionalidades que requiera y a la implementación de un frontend con nextJS. La seguridad y la gestión de roles están bien integradas para proteger los endpoints sensibles. La persistencia de datos está bien organizada con el uso de TypeORM, lo que simplifica las operaciones complejas de la base de datos y mejora la mantenibilidad del código.

Este informe resume las funcionalidades clave implementadas en la API, ofreciendo un entendimiento de cada componente y su interacción dentro del proyecto.
