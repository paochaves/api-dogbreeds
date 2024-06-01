# Api-dogsbreeds-CRUD


En este proyecto se llevara acabo el uso de frameworks y middleworks, en base a Javascript realizar un servidor con rutas y controladores que sirven en la creacion de una API, a continuacion conoceran toda la documentacion y procesos que se realizaron para lograr que el proyecto CRUD.

## Requisitos | Dependencias y Dependencias de Desarollo

-  Express
-  Node.js
-  MongoDB - Base de Datos - Atlas
-  Mongoose
-  Dotenv
-  Morgan - Desarrollo
-  Nodemon - Desarrollo

## Proceso

1. Crear un repositorio en GitHub y enlazarlo con el repositorio local en el que estamos trabajando.
2. Iniciar un proyecto Node con el comando `npm init`.
3. Instala las dependencias con el comando `npm install`.
4. Para las dependencias de desarrollo se utiliza el mismo comando que el anterior punto pero al final de incluye un `-D`.
5. Se crea un archivo `.gitignore` para que todo lo correspondiente a las dependencias no se suba a el repositorio GitHub y el trabajo se vea mas limpio, en este caso pondremos dentro `node_modules`.
6. Se crea el archivo de entrada `Index.js`.
7. Se crea el archivo de variables de entorno `.env` donde se pondra la linea de codigo que enlazara nuestro servidor con nuestra base de datos, este tambien ira dentro del `.gitignore` ya que puede contener datos que vulneran nuestro servidor.
8. Se va a crear otro archivo `.env_variables` el cual solo tendra los nombres de las variables de entorno que utilizamos para dar una guia.
9. Apartir de este punto se decidira si vamos a manejar varios archivos para manejar y mantener nuestro codigo, o solo en un archivo colocar todo, en este caso se hace el manejo de varios archivos como por ejemplo.
   -  servidor.js
   -  conexionBD.js
   -  rutas.js 
   -  plantillasCanes.js 
   -  controladorcanes.js

## Configuración

1. En el archivo `package.json` se pone `"type": "module"` para poder hacer uso de modularización en el proyecto.
2. En el archivo `package.json` en `scripts` se pone `"dev": "nodemon <archivo de entrada>"` para que se pueda correr el servidor con nodemon.

## Uso

1. Inicia el servidor: `npm run dev`
2. La API estará en mi servidor local en `http://localhost:3000`

## Metodos

Describe aquí los endpoints disponibles en tu API, junto con sus métodos HTTP, parámetros y posibles respuestas.

Ejemplo:

-  `POST /crearCan`: Crea un nuevo can.
-  `PUT /actualizarCan/:id`: Actualiza un can existente.
-  `GET /leerCan/:id`: lee un can por su ID.
-  `GET /leerCanes`: lee todos canes que estan en el base de datos.
-  `DELETE /eliminarcan/:id`: Elimina can.

## Estructura del Proyecto

-  package.json
-  package-lock.json
-  .gitignore
-  .env_variables
-  .env - Oculto
-  node_modules - Oculto
-  src - Carpeta
   -  index.js
   -  servidor.js
   -  conexionBD.js
   -  controlador - Carpeta
      -  controladorcanes.js
   -  plantillas - Carpeta
      -  plantillasCanes.js
   -  rutas - Carpeta
      -  rutas.js

## Contacto

-  Autor: Ingrid Paola Chaves Barbosa
-  Email: paochavess22@gmail.com