//requerir paquetes - Request
const fs= require('fs');
// por cada archivo va el colors
const colors= require('colors');
//existen tres tipos de requires 

//const fs= require('express'); paquetes no nativos de node
//const fs= require('./fs'); son archivos que creamos y esta dentro de nuestro equipoo

let listarTabla= (base, limite=10)=>{
   
console.log('==========================='.green);
console.log(`tabla de multiplicar${base}`.green);
console.log('==========================='.green);
for (let index = 1; index <= limite; index++) {
   
   console.log( `${index} * ${base} = ${base*index}`)
    
}

}

let crearArchivo =(base, limite=10 )=>{
    return new Promise ((resolve, reject)=>{

        if(!Number(base)|| !Number(limite)){

            reject (`La base o el valor introducido ${base} o ${limite} no es un número`);
            return;
        }

let data = '';
for (let index = 1; index <= limite; index++) {

   data += `${index} * ${base} = ${base*index}\n`;
}



fs.writeFile(`tablas/tabla-${base}-li-${limite}.txt`, data, (err) => {
  if (err) 
  reject(err)
  else
  resolve (`tabla-${base}-limite-${limite}.txt`);

});

    });
}


module.exports ={
    crearArchivo,
    listarTabla
}