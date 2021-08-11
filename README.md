# API Puestos de Vacunacion en La Rioja
Backend del Projecto Final de Pilar Tecno

# Descripción

El proyecto es una API realizada con NODEjs y EXPRESS, con validacion con JOI y como base de datos utiliza Atlas de MongoDB y mongoose.
consiste en en un CRUD  de Puntos de Vacunacion Covid-19 en La Rioja.

# Pre-requisitos
- Instala [Node.js](https://nodejs.org/en/) version 14.17.0

# Inicio
- Clona el repositorio
```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```
- Instalando dependencias
```
cd <project_name>
npm install
```
- Ejecuta el proyecto
```
npm start
```

 Navega a `https://api-vaccination-centers.herokuapp.com/`

- API Document endpoints
 
- GET :: /places ---> Trae todos los puestos de vacunacion 
    - ejemplo: `https://api-vaccination-centers.herokuapp.com/places/`
  
- GET :: /places/:id ---> Trae el puesto de vacunacion con la id especificada.
    - ejemplo  `https://api-vaccination-centers.herokuapp.com/places/610f3d861bf5bf44108efdc6`
 
- POST :: /places ---> Crea un nuevo puesto de vacunacion en la base de datos. Recibe datos por body . Verificar con Joi.
    - ejemplo: `https://api-vaccination-centers.herokuapp.com/places/610f3d861bf5bf44108efdc6` 

- DELETE :: /places/:id ---> Borra un puestos de vacunacion de la base de datos.
    - ejemplo: `https://api-vaccination-centers.herokuapp.com/places/610f3d861bf5bf44108efdc6`

- PATCH :: /places/:id  ---> Edita un puesto de vacunacion con los datos enviados en body. Verifica con Joi.
    - ejemplo: `https://api-vaccination-centers.herokuapp.com/places/610f3d861bf5bf44108efdc6`

# Comenzando el proyecto
 Se realizo con NodeJs y Express, se valida con Joi y la base de datos utilizada es MongoDB en su version en la nube(Atlas) y la libreria Mongoose.

# Autor
Maria Eugenia Moreno (eugemo)
[meugenia.moreno@gmail.com]

# Versiones
* 0.1

*Initial Release

#Comentarios

Proyecto terminado
