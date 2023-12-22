//Descrição do heroi;;;
let heroi = { 
    nome: "ego",
    idade: 23,
    tipo: "mago",
    ataque: "manipulação"
}
//Chamando função interligada com a variável;;;
atacar(heroi)

//Metodo de ataque;;;
function atacar(heori){
    console.log(`o ${heori.tipo} atacou usando seu poder de ${heori.ataque}`)
}
