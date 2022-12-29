function bienvenidos(){
alert('bienvenidos a  la Heladeria Hogar.');
}
bienvenidos();
let chocolate=1001;
let frutilla=1002;
let granizado=1003;
function Gusto(chocolate,frutilla,granizado) {
      do {helado=prompt('Para elegir el sabor de su helado ingrese el numero del menu que corresponda.');
      saborNoValido=helado!==chocolate||frutilla||granizado
      if(helado == 15){
             alert('Su helado sera de chocolate');
              break;
        }else if(helado == 16){
             alert('Su helado sera de frutilla');
             break;
        }else if(helado == 17){
              alert('Su helado sera de granizado');
              break;
        }else{alert('El helado ingresado no existe. Ingrese otro numero entre 15 y 17')
        }
      }while(helado===saborNoValido);
};


let productoIngresadoA
let productoIngresadoB
let productoIngresadoC

do {producto=prompt('¿Que se les ofrece?');
    productoNoValido=producto!==productoIngresadoA||productoIngresadoB||productoIngresadoC

    if(producto == 1){
         productoIngresadoA=prompt('¿Que clase de helado va a querer?');
         if(productoIngresadoA == 10){
            cucuruchoSimple=alert('Que sabores va a querer en su cucurucho simple?');
            Gusto();
         }else if(productoIngresadoA == 11){
            cucuruchoDoble=alert('¿Que sabores va a querer en su cucurucho doble?')
            Gusto();
         }else if (productoIngresadoA == 12){
            heladoDeUnCuarto=alert('¿Que sabores va a querer en su Helado de 1/4?')
            Gusto();
         }else if (productoIngresadoA == 13){
            heladoDeMedio=alert('¿Que sabores va a querer en su Helado de 1/2kg?')
            Gusto();
         }else if (productoIngresadoA == 14){
            heladoDeUnKilo=prompt('¿Que sabores va a querer en su?')
            Gusto();
         }else{alert('El helado ingresado no existe. Ingrese otro numero entre 10 y 14')
      }         
         break;

   }else if(producto = 2){
         productoIngresadoB=prompt('¿Que clase de pastel va a querer?');
         if(productoIngresadoB == 20){
             alert('el pastel cheesecake sale 2500$')
         }else if (productoIngresadoB == 21){
             alert('el pastel selva negra sale 2550$')
         }else if (productoIngresadoB == 22){
             alert('el pastel de frutilla sale 2450$')
         }else{alert('El pastel ingresado no existe. Ingrese otro numero entre 20 y 23')
       }
         break;

   }else if(producto = 3){
         productoIngresadoC=prompt('¿Que clase de helado de agua va a querer?')
         if(productoIngresadoC == 31){
            alert('el helado de agua de naranja sale 200$')
         }else if(productoIngresadoC == 32){
            alert('el helado de agua de limon sale 200$')
         }else if(productoIngresadoC == 33){
            alert('el helado de agua de frutilla sale 200$')
         }else{alert('El helado de agua ingresado no existe. Ingrese otro numero entre 30 y 33')}
         break;

   }else{alert('El producto ingresado no existe. Ingrese otro numero entre 1 y 3')
   }
}while(producto===productoNoValido);
