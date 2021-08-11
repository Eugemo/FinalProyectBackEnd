# API Puestos de Vacunacion en La Rioja
Backend del Projecto Final de Pilar Tecno

# Descripción

El proyecto es una API realizada con NODEjs y EXPRESS, con validacion con JOI y como base de datos utiliza Atlas de MongoDB y mongoose.
consiste en en un CRUD  de Puntos de Vacunacion Covid-19 en La Rioja.

 Navigate to `https://api-vaccination-centers.herokuapp.com/`

- API Document endpoints
- 
- GET :: /places ---> Trae todos los puestos de vacunacion
- GET :: /places/:id ---> Trae el puesto de vacunacion con la id especificada.
- POST :: /places ---> Crea un nuevo puesto de vacunacion en la base de datos. Recibe datos por body . Verificar con Joi.
- DELETE :: /places/:id ---> Borra un puestos de vacunacion de la base de datos.
- PATCH :: /places/:id  ---> Edita un puesto de vacunacion con los datos enviados en body. Verifica con Joi.

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
