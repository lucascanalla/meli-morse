# meli-morse challenge

# INTRODUCCION
Proyecto desarrollado por Lucas Ferrarini en Node.JS con Express.
Esta dividido en 2 Controladores (src/controllers/human.js, src/controllers/morse.js) que realizan las funcionalidades requeridas.
A su vez, se encuentra un archivo (src/services/index.js) con funciones comunes y reutilizables para dichas funcionalidades.

-------------------------------------------------------------------------------------------------------------------------------------

# MANEJO DE DATOS
Con respecto a la BD, se decidio no utilizar ninguna en especial.
Todos los datos estan en formato JSON en el path src/data/index.js y se denomina Alfabeto.
El Alfabeto contiene para cada numero y letra del abecedario, su correspondiente codigo morse y una secuencia de bits correspondiente.

-------------------------------------------------------------------------------------------------------------------------------------

# SECUENCIA DE BITS
Las secuencias de bits son de 10 digitos convenientemente arbitrarios, a saber:
El primer digito indica el comienzo del string de bits y es una guia para delimitar los delays del usuario que envia el codigo.
Del segundo al septimo es la representacion en bits del codigo morse, siendo '-' = 1 y '.' = 0
Del octavo al decimo indica en binario la cantidad de caracteres que tiene el codigo morse. 
Entonces si el codigo morse tiene 3 caracteres, los ultimos 3 digitos seran 011

Ejemplo:
character: 'p'
morse:     '.-.-'
binary     1 010100  100
           I   RM     CC

I = Bit iniciador
RM= Representacion en morse
CC= Cantidad de caracteres en morse

-------------------------------------------------------------------------------------------------------------------------------------

# FUNCIONALIDADES Y ROUTES
El proyecto consta de 3 funcionalidades:
.Convertir codigo morse a lenguaje humano
    Con el metodo translateMorse2Human. En el controlador human.js
    Path: url/translate/2text {text: '.-.-'}
.Convertir lenguaje humano a codigo morse
    Con el metodo translateHuman2Morse. En el controlador morse.js
    Path: url/translate/2morse {text: 'hola'}
.Dada una secuencia de bits, convertirlo a codigo morse
    Con el metodo decodeBits2Morse. En el controlador morse.js
    Path: url/decode/2morse {text: '1010100100'}
    
-------------------------------------------------------------------------------------------------------------------------------------

# INSTALL, RUN, TEST
Para instalar el proyecto, ejecutar el comando 'npm install' 
Una vez instaladas las dependencias del package.json se ejecuta el comando 'npm start' el cual avisara por consola el puerto donde escucha el server.
Se han realizado 17 pruebas a las funcionalidades. Son pruebas unitarias y de integracion, probando las salidas posibles. Se encuantran en el path src/test
Se utilizo una dependencia llamada jest, la cual se invoca con el comando 'npm test'
