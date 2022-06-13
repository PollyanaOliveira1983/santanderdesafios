type input = number | string;

function somarValores(input1: number | string, input2: number | string){
    if(typeof input1 === 'string' || typeof input2 === 'string'){
        return input1.toString() + input2.toString();
    }else{
        return input1 + input2;
    }
}

console.log(somarValores(1, 5));
console.log(somarValores('ola', 'tudo bem?'));
console.log(somarValores('1', 5));
console.log(somarValores('Que dia é hoje?', 10));

function printaValoresNumericos(numero1 : number, numero2 : number): void {
    console.log(numero1 + numero2);
}

function somarValoresNumericosETratar(numero1 : number, numero2 : number, callback: (numero: number) => number): number {
    let resultado = numero1 + numero2;
    return callback(resultado);
}

function aoQuadrado(numero: number): number{
    return numero * numero;
}

function dividirPorEleMesmo(numero: number): number{
    return numero / numero;
}

console.log(somarValoresNumericosETratar(1, 3, aoQuadrado ))