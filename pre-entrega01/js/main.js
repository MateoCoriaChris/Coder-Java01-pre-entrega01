alert('hola');
let chocolate=10;

let frutila=11;

let granizado=12;

do {helado=prompt('Para elegir el sabor de su helado ingrese el numero del menu que corresponda.');
    saborNoValido=helado!==chocolate||frutila||granizado
    if(helado == 10){
         alert('Su helado sera de chocolate');
         break;
   }else if(helado == 11){
         alert('Su helado sera de frutilla');
         break;
   }else if(helado == 12){
         alert('Su helado sera de granizado');
         break;
   }else{alert('El helado ingresado no existe. Ingrese otro numero entre 10 y 12')
   }
}while(helado===saborNoValido);

