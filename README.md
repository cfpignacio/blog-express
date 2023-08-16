# TS-Expressjs
## Es necesario instalar de Global los siguiente paquetes
    npm i -g nodemon ts-node
### Crear una una carpeta ejemplo "Miprimerapi", ingresar a la carpeta ```cd Miprimerapi``` iniciar repositorio con github


 1- iniciamos el repositorio npm 

    npm init --yes

2 instalamos express

    npm install express

3 instalamos typescript y los types de express

    npm i -D typescript @types/express @types/node

4 Creamos el archivo tsconfig.conf

    npx tsc --init

5 Creamos el archivo ```.gitignore```
    
    node_modules
    dist

6 Agregamos dos scripts en el archivo package.json

    	"scripts": {
		"build": "npx tsc",
		"start": "node dist/index.js"
	    }
8 Modificar archivo tsconfig.json descomentado la linea ```"outDir": "./"``` y agregando la carpeta dist ```"outDir": "./dist"```

## Ejecutar APP
Clonar repositorio y correr el comando 

    npm install
    npm build
    npm start