function cachorro (raca, patas, cor) {
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function () {
        console.log('auuuuu');
    }
}

let husky = new cachorro('husky', 4, 'Preto')

console.log(husky)
husky.uivar();
