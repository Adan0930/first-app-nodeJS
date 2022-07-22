import  express  from "express";
// import ejs from 'ejs'; //node lo trae por defecto
import {dirname , join} from "path";//Dirname= crear una ruta absoluta, Join=concatena directorios
import { fileURLToPath } from "url";

import indexRoutes from './routes/routes.js'

//CONSTANTES
const app = express()
        //__DIRNAME
// fileURLToPath= Esta función garantiza que pathse resuelva de forma absoluta y que los caracteres de control de URL se codifiquen         correctamente al convertirlos en una URL de archivo.
//import.meta.url=El objeto import.meta expone el contenido especifico de la metadata al módulo JavaScript. Este contiene informacion sobre el módulo, como por ejemplo, la URL del mismo.
const __dirname = dirname(fileURLToPath(import.meta.url))



//initializations
    //decir en donde esta la carpeta views
// console.log(join(__dirname ,'views'))    
app.set('views', join(__dirname, 'views')) 


    //Establecer una configuracion
    //Set= decir que caracteristicas queremos utilizar
    //view engine =motor de vistas
app.set('view engine', 'ejs');
app.use(indexRoutes)
    //Indicarle donde esta la carpeta
app.use(express.static(join(__dirname, 'public')));

const  PORT = 4000;

//Server
app.listen(PORT,()=>
    console.log(`Server on port ${PORT}`) 
)
