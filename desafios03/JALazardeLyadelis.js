const fin = () => console.log("proceso completo");

const mostrarPalabras = (texto, tiempo, callback,) => {    
  const  textoDividido = texto.split(" ");
  let index = 0;
  const intervalId = setInterval(() => {
    console.log(textoDividido[index]);
    index++;    
    if (index === textoDividido.length) {
      callback();
      clearInterval(intervalId);
    }
  }, tiempo);
};

mostrarPalabras ("¡Hola Mundo Hermoso!", 750, () => {
  mostrarPalabras ("¡Hello Lya laz loz!", 500, () => {
    mostrarPalabras ("Thank you Sebastian!", 2000, fin);
  });
});