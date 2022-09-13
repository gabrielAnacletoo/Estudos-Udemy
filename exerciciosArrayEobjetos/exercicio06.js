// FUNÇÃO QUE VERIFICA QUANTOS ELEMENTOS TEM NA ARRAY
// ARRAYS É O PARAMETRO DA FUNCTION
let arr1 = ['Gabriel', 700, 'Cida', 'Isabela', 1994, 2002];
let arr2 = [20,30,40];

function verifica(arrays) {
    if(arrays.length >= 5) {
        console.log("Muitos Elementos")
    } else {
        console.log("Poucos Elementos")
    }
}

verifica(arr1);
verifica(arr2);
