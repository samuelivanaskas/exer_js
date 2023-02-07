"use strict";
function calculaTerreno(largura = 12, comprimento = 22) {
    return (largura * comprimento);
}
console.log(12 * 22);
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    dizOla() {
        return `olá ${this.nome}`;
    }
}
console.log('ola samuel');
