function calcularMediaAritmetica(lista) {

    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //   sumaLista = sumaLista + lista[i];
    // }
    
    const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) =>
        valorAcumulado + nuevoElemento
    );
  
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//console.log(calcularMediaAritmetica([1,14,151,98]))