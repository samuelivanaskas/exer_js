function calculaTerreno(largura: number = 12, comprimento: number = 22): number {
    return ( largura * comprimento)
}

console.log(12 * 22)

class Pessoa {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    dizOla(): string {
        return `olá ${this.nome}`;
    }
}

console.log('ola samuel')
