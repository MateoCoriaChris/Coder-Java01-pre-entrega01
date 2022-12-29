/*Crear un algoritmo con un condicional.
Crear un algoritmo utilizando un ciclo.
Armar un simulador interactivo, la estructura final de tu proyecto integrador.
Recuerden que tendrán hasta 7 días para resolver la entrega y subirla.

Simulador interactivo

Consigna

Con los conocimientos vistos hasta el momento, 
empezarás a armar la estructura inicial de tu proyecto integrador.
A partir de los ejemplos mostrados la primera clase, deberás:
Pensar el alcance de tu proyecto: 
¿usarás un cotizador de seguros? ¿un simulador de créditos? ¿un simulador personalizado?
Armar la estructura HTML del proyecto.
Incorporar lo ejercitado en las clases anteriores, algoritmo condicional y algoritmo con ciclo.
Utilizar funciones para realizar esas operaciones.

Formato

Página HTML y código fuente en JavaScript. 
Debe identificar el apellido del alumno/a en el nombre de archivo comprimido por ““PreEntrega1+Apellido””.
*/
alert('hola');
let chocolate=10;

let frutila=11;

let granizado=12;

do {helado=prompt('Para elegir el sabor de su helado ingrese el numero del menu que corresponda.');
    if(helado === 10){
         alert('Su helado sera de chocolate');
         break;
   }else if(helado === 11){
         alert('Su helado sera de frutilla');
         break;
   }else if(helado === 12){
         alert('Su helado sera de granizado');
         break;
   }else{alert('El helado ingresado no existe. Ingrese otro numero entre 10 y 12')
   }
}while(helado === 0);

