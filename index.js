console.log("Terceiro desafio do Felipao - Por Geder Evando Weber")

console.log("Escrevendo as classes de um Jogo")

console.log("********************************")

//Entradas

let name = "Evan"

let age = 30


// Classe

class hero{
    constructor(type, atack){
        this.type = type
        this.atack = atack
    }

    toatack(){
        console.log( `O ${this.type} atacou usando ${this.atack}`)
    }
}

//Objetos

let warrior = new hero("guerreiro", "espada")

let mage = new hero("mago", "magia")

let monk = new hero("monge", "artes marciais")

let ninja = new hero("ninja", "shuriken")

//Saida


warrior.toatack()
mage.toatack()
monk.toatack()
ninja.toatack()