
// 1º questão
let indice = 13;
let soma = 0;
let k = 0;

do {
        k = k + 1;
        soma = soma + k;
    }
while (k < indice );

console.log(soma);

// 2º questão 


const seqFibonacci = (numeroInicial) => {
    var firstParameter = 0;
    var secParameter = 1;
    var constFibonacci = 1;

    for(var i = 2; i <= numeroInicial; i++) {
        constFibonacci = firstParameter + secParameter;
        firstParameter = secParameter;
        secParameter = constFibonacci;
    }

    console.log(constFibonacci);
}

seqFibonacci(10);

