const argv = require('./config/yargs').argv;
const colors= require('colors');
//reestructuracion
const {crearArchivo, listarTabla}= require('./multiplicar/multiplicar');


let comando = argv._[0];
// determinar una acción en base a una condición

switch (comando) {
    case 'listar':
     listarTabla(argv.base, argv.limite);
        break;
   case 'crear':
       crearArchivo(argv.base, argv.limite)
       .then(archivo =>console.log(`Archivo creado:${archivo.green}`))
       .catch(e => console.log(e)); 
        break;

    default:
        console.log('Comando no reconocido');

 
}



// recibir información desde la terminal 

//console.log(process.argv);


//let argv2= process.argv;

//let argv2 = process.argv;

//console.log(argv);
//console.log(argv.base);


//console.log('Limite',argv.limite);

//console.log(argv2);
//let parametro= argv[2];
//let base = parametro.split('=')[1]
//console.log(base);
//console.log(multiplicar);

 

//ete process es sumamente [util cuando despleguemos 
//nuestro proyecto a 

//* cramos el package.json  con el comando npm init
//  manejar solamente con comandos cli
// instlamos el paquete yarsgs con npm i yargs --save para que la 
//aplicación funcione