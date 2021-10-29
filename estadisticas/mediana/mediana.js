function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) =>
        valorAcumulado + nuevoElemento);

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function ordenarLista(lista) {
    const sortLista = lista.sort((a, b) => a - b);
    console.log(sortLista)
    return sortLista;
}

function calcularMediana(lista) {
    //ordenar lista
    lista = ordenarLista(lista);
    //calcular la posicion de la mitad
    const mitadLista = parseInt(lista.length / 2);
    //Evaluar si la lista es par o impar
    function esPar(numerito) {
        if (numerito % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
    
    let mediana;
    
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista - 1];
    
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
    
        mediana = promedioElemento1y2;
    
    } else {
        mediana = lista[mitadLista];
    }
    return mediana;
}

const listaImpar = [100, 500, 300, 200, 400000000];
const listaPar = [100, 400000000, 500, 200];

console.log(calcularMediana(listaImpar));
console.log(calcularMediana(listaPar));
