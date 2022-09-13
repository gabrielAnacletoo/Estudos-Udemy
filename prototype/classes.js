// OBJETO CRIADO COMO CACHORRO 
let cachorro = {
    patas: 4,
    raca: 'SRD',
    latir: function () {
        console.log('au au ');
    }
}
// NOVA VARIAVEL LABRADOR RECEBEU OBJECT CACHORRO E USOU A FUNÇÃO LATIR 
let labrador = Object.create(cachorro);
labrador.latir();

labrador.raca = "labrador";
console.log(labrador.raca);
console.log(cachorro.raca);
