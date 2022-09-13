// criando a function que vai ser usada
function criaCachorro (raca, patas, cor) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;
    cachorro.latir = function() {
        console.log('au au');
     }
    return cachorro;
}
// o objeto doberman vai usar os parametros da function criarcachorro
// 3 parametros , então adicionamos 3 
let doberman =  criaCachorro('Doberman', 4, 'Branco');

console.log(doberman);

doberman.latir();

