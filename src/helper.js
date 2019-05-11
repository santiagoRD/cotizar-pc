export const calcularAdicionComponente = function(infoComponent, componente){
    let adicion = 0;
    for(let i = 0; i < infoComponent.length ; i++){
        // console.log(`placa de ref ${infoPlacas[i].nombre} placa del form ${placa}`);
        if(infoComponent[i].nombre === componente){
          adicion = infoComponent[i].precio;
          return adicion;
        }
      }
      adicion = 0;
}


