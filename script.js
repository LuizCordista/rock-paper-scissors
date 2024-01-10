
function getComputerChoice() {
    options = ["pedra", "papel", "tesoura"]
    const escolha = options[Math.floor(Math.random() * options.length)];
    return escolha
}

function playerSelection() {
    escolhaJogador = prompt("Qual a sua jogada?").toLowerCase()
    return escolhaJogador

}

function playRound(jogador, computador) {
    jogador = playerSelection()
    computador = getComputerChoice()
    if (jogador == computador) {
        console.log("Empatou, " + jogador + " empata com " + computador)
        return "empate"
    }
    else if (jogador == "pedra") {
        if (computador == "papel") {
            console.log("Voce perdeu, papel ganha de pedra")
            return "derrota" 
        }
        else if (computador == "tesoura") {
            console.log("Voce ganhou!!, pedra ganha de tesoura")
            return "vitoria"
        }
    }
    else if (jogador == "papel") {
        if (computador == "pedra") {
            console.log("Voce ganhou, papel ganha de pedra")
            return "vitoria"
        }
        else if (computador == "tesoura") {
            console.log("Voce perdeu, tesoura ganha de papel")
            return "derrota"
        }
    }
    else if (jogador == "tesoura") {
        if (computador == "pedra") {
            console.log("Voce perdeu, pedra ganha de tesoura")
            return "derrota"
        }
        else if (computador == "papel") {
            console.log("Voce ganhou!!, tesoura ganha de papel")
            return "vitoria"
        }
    }
}


function game() {
    let pontosPC = 0
    let pontosPlayer = 0
    for (i = 0; i < 5; i++) {
        rodada = playRound() 
        console.log(rodada)
        if (rodada == "vitoria") {
            pontosPlayer += 1
        }
        else if (rodada == "derrota") {
            pontosPC += 1
        }
        else if (rodada == "empate") {
            i -= 1
        }
    }
    if (pontosPC == pontosPlayer) {
        console.log("EMPATOU!!!, o resultado foi: " + pontosPlayer + " a " + pontosPC)
    }
    else if (pontosPlayer < pontosPC) {
        console.log("Voce perdeu ;-;, o resultado foi: " + pontosPC + " a " + pontosPlayer)
    }
    else if (pontosPlayer > pontosPC) {
        console.log("Voce GANHOUU!!!, o resultado foi : "+ pontosPlayer + " a " + pontosPC)
    }
}