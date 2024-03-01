// item -1

function verificarParidad(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " es un número par.");
    } else {
        console.log(numero + " es un número impar.");
    }
}


verificarParidad(5);
verificarParidad(10);

// intem -2

function compararNumeros(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " es mayor que " + num2)
    }else if (num2 > num1) {
        console.log(num2 + " es mayor que " + num1)
    }else {
        console.log("son iguales")
    }
}

compararNumeros(5,10);
compararNumeros(20,10);
compararNumeros(7,7)



// item -3

function multiplo (num3) {
    if (num3 % 5 === 0) {
        console.log(num3 + " es multiplo de 5")
    }else {
        console.log(num3 + " no es multiplo")
    }
}

multiplo(3);
multiplo(5);
multiplo(20);

// item -4

function imprimirNumerosHastaN(numero) {
    for (let i = 0; i <= numero; i++) {
        console.log(i);
    }
}


imprimirNumerosHastaN(5);


// item 5

function imprimirPalabraRepeticiones(palabra, cantidad) {
    for (let i = 0; i < cantidad; i++) {
        console.log(palabra);
    }
}


imprimirPalabraRepeticiones("Hola", 3);
imprimirPalabraRepeticiones("Programación", 5);
imprimirPalabraRepeticiones("nucba", 2);


// item 6

function imprimirValoresDelArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}


const miArray = [1, 5, "Hola", true, 10];
imprimirValoresDelArray(miArray);


// item 7

function imprimirValoresExceptoQuinto(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i !== 4) {
            console.log(arr[i]);
        }
    }
}


const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
imprimirValoresExceptoQuinto(arrayNumber);


// item 8

function multiplicarArrayPorNumero(arr, multiplicador) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] * multiplicador);
    }
}


const array = [1, 2, 3, 4, 5];
const multiplicador = 3;
multiplicarArrayPorNumero(array, multiplicador);
