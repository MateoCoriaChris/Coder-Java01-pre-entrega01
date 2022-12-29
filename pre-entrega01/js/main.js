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
    productoNoValido=producto!=='1'||'2'||'3'
    switch(producto){
      case '1':
            productoIngresadoA=prompt('¿Que clase de helado va a querer?');
            switch(productoIngresadoA){
                  case '10':
                  cucuruchoSimple=alert('el cucurucho simple sale 300$¿Que sabores va a querer en su cucurucho simple?');
                  Gusto();
                  break;
                  case '11':
                        cucuruchoDoble=alert('el cucrucho doble sale 380$¿Que sabores va a querer en su cucurucho doble?')
                        Gusto();
                        break;
                  case '12':
                        heladoDeUnCuarto=alert('el helado de 1/4kg sale 420$¿Que sabores va a querer en su Helado de 1/4?')
                        Gusto();
                        break;
                  case '13':
                        heladoDeMedio=alert('el helado de 1/2kg sale 780$¿Que sabores va a querer en su Helado de 1/2kg?')
                        Gusto();
                        break;
                  case '14':
                        heladoDeUnKilo=prompt('el helado de 1kg sale 1260$¿Que sabores va a querer en su helado de 1kg?')
                        Gusto();
                        break;
                  default:
                        alert('El helado ingresado no existe. Ingrese otro numero entre 10 y 14');
            }
            break;
      case '2':
            productoIngresadoB=prompt('¿Que clase de pastel va a querer?');
            switch(productoIngresadoB){
                  case'20':
                  alert('el pastel cheesecake sale 2500$');
                  break;
                  case'21':
                  alert('el pastel selva negra sale 2550$');
                  break;
                  case'22':
                  alert('el pastel de frutilla sale 2450$');
                  break;
                  default:
                        alert('El pastel ingresado no existe. Ingrese otro numero entre 20 y 23');   
            }

            break;
      case '3':
            prompt('¿Que clase de helado de agua va a querer?');
            productoIngresadoC=prompt('¿Que clase de helado de agua va a querer?');
            switch(productoIngresadoC){
                  case'30':
                  alert('el helado de agua de naranja sale 200$');
                  break;
                  case'31':
                  alert('el helado de agua de limon sale 200$');
                  break;
                  case'32':
                  alert('el helado de agua de frutilla sale 200$');
                  break;
                  default:
                        alert('El helado de agua ingresado no existe. Ingrese otro numero entre 30 y 32');
            }
            break;
      default:
            alert('El producto ingresado no existe. Ingrese otro numero entre 1 y 3');   
    }
}while(producto===productoNoValido);
