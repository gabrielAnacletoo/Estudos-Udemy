class mamifero {
    constructor(patas) {
        this.patas = patas;

    }
}

let coiote = new mamifero(4);

console.log(coiote.patas);

class cachorro extends mamifero {
    constructor(patas, raca) {
        // super altera o valor da class pai
        super(patas, raca);
        this.raca = raca;
    }
    latir () {
        console.log('au au ');
    }
}

let pug = new cachorro(4, "Pug");

console.log(pug.patas);
