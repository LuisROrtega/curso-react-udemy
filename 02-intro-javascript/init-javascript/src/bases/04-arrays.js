// Arreglos en JS

// const arreglo = new Array(100); // 100 de longitud
// arreglo.push(1);
// console.log(arreglo.length);

let array = [1, 2, 3, 4];

let array2 = [...array, 5];

let array3 = array2.map(function(number) { // map -> crea una copia de array
    return number * 2;
});

console.log(array);
console.log(array2);
console.log(array3);