const yargs = require('yargs');
// optimizacion para la configuracion de yargs 

const opt ={
    base: {
        demand:true,
        alias:'b'
    },
    limite:{
        alias:'l',
        default:10
    }
}

const argv= require('yargs')
            .command('listar', 'Imprime la consola la tabla de multiplicar', opt)
            .command('crear', 'Genera un archivo con la tabla de multiplicar',opt)
            .help()
        .argv;



module.exports ={
  argv
}
