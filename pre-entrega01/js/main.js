function bienvenidos(){
alert('bienvenidos a  la Heladeria Hogar.');
}
bienvenidos();
function Gusto(chocolate,frutilla,granizado) {
      do {helado=prompt('Para elegir el sabor de su helado ingrese el numero del menu que corresponda.');
      saborNoValido=helado!==chocolate||frutilla||granizado
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
     };


do {producto=prompt('¿Que se les ofrece?');
    productoNoValido=producto!==chocolate||frutila||granizado
    if(producto = 1){
         productoIngresadoA=prompt('¿Que clase de helado va a querer?');
         if(productoIngresadoA === 10){
            cucuruchoSimple=prompt('Que sabores va a querer en su cucurucho simple?');
            Gusto();
         }else if(productoIngresadoA===11){
            cucuruchoDoble=prompt('Que sabores va a querer en su')
            Gusto();
         }else if (productoIngresadoA===12){
            heladoDeUnCuarto=prompt('Que sabores va a querer en su')
            Gusto();
         }else if (productoIngresadoA===13){
            heladoDeMedio=prompt('Que sabores va a querer en su')
            Gusto();
         }else if (productoIngresadoA===14){
            heladoDeUnKilo=prompt('Que sabores va a querer en su')
            Gusto();
         }else{alert('El helado ingresado no existe. Ingrese otro numero entre 10 y 14')
      }         
         break;

   }else if(producto = 2){
         productoIngresadoB=prompt('¿Que clase de pastel va a querer?');
         if(productoIngresadoB === 20){
             alert('el pastel cheesecake sale 2500$')
         }else if (productoIngresadoB === 21){
             alert('el pastel selva negra sale 2550$')
         }else if (productoIngresadoB ===22){
             alert('el pastel de frutilla sale 2450$')
         }else{alert('El helado ingresado no existe. Ingrese otro numero entre 20 y 23')
       }
         break;

   }else if(helado = 3){
         alert('Su helado sera de granizado');
         break;

   }else{alert('El producto ingresado no existe. Ingrese otro numero entre 1 y 3')
   }
}while(helado===saborNoValido);

