
async function operacion ( numero1: number, numero2: number , operacion: string ) {

  const operacionPromise = new Promise(async (resolve, reject) => {
    
    if(operacion.toLowerCase() === "suma") {
      const {default: suma } = await import('./suma.js');
      const suma2= new suma(numero1,  numero2);
      const sumaResultado = suma2.resultado();     
      resolve(sumaResultado);
      
    } else if (operacion.toLowerCase() === "resta") {
      const {default: resta } = await import('./resta.js');
      const resta2= new resta(numero1,  numero2);
      const restaResultado = resta2.resultado();     
      resolve(restaResultado);

    } else {  
      reject (console.log("Esto dio un error"));
    };
  });
  try {
    const resolve_1 = await operacionPromise;
    return console.log(resolve_1);
  } catch (error) {
    return console.log(error);
  };  
};

const operaciones = (a: number, b: number, c: string) => {operacion(a, b, c)};

operaciones(2,1, "suma");
operaciones(2,1, "resta");
operaciones(8,8, "suma");
operaciones(8,18, "resta");