
const claseSuma = (await import("./suma")).Suma
const claseResta= (await import("./resta")).Resta


function operacion ( numero1: Number, numero2: Number , operacion: String ) {
    this.numero1 = numero1; 
    this.numero2 = numero2;
    this.operacion = operacion;
};

function operaciones ( operacion){
    
}
