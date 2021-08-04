
function operacion ( numero1: number, numero2: number , operacion: string ) {
  this.numero1 = numero1; 
  this.numero2 = numero2;
  this.operacion = operacion;
    
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      resolve (async () => {         

        try {

          if (operacion.toLowerCase() === "suma") {
            const {default: suma } = await import('./suma.js');
            new suma(numero1,  numero2);
            return suma
              
          } else if (operacion.toLowerCase() === "resta") {
            const {default: resta } = await import('./resta.js');
            new resta(numero1,  numero2);
            return resta

          } else {console.log("operacon no encontrada")};

        } catch (error) {
          console.log(error);
        };
      });            

        reject("Esto dio un error");

    }, 1000);
  });  
    

    
};

function operaciones () {
    
  operacion(1, 2, "suma")
}

console.log(operaciones)

// se va a construir un objeto, pasandole los numeros
// se va a llamar al resultado del objeto
// se va a resolver la promesa con ese valor ( o en caso de fallo se va a rechazar)

// Este debe ser un proyecto de typescript que utilice dynamic import, Promises, async await, funciones flecha . 
// Debe ser compilado para generar un archivo javascript ejecutable por Node.js.