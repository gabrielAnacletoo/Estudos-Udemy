class cachorro {
    constructor(raca, patas, cor) {
        this.raca = raca;
        // this.patas = patas;
        this.cor = cor;
    }
}

cachorro.prototype.patas = 4;

let labrador = new cachorro('labrador', 'Amarelo');
console.log(labrador.patas);
