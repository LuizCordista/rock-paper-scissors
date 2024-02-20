
const botao = document.querySelector(".btnstart")
const result = document.querySelector(".result")
const yourchoice = document.querySelector(".yourchoice")
const computerchoice = document.querySelector(".computerchoice")
const playerscore = document.querySelector('.playerscore')
const pcscore = document.querySelector(".pcscore")
const rounds = document.querySelector('.rounds')

botao.addEventListener("click", event => {
    event.target.parentNode.style.display = "none"
    pointsPC = 0
    pointsPlayer = 0
    round = 1
    playerscore.innerHTML = "Jogador: " + pointsPlayer
    pcscore.innerHTML = "Computador: " + pointsPC
    result.innerHTML = "Aguardando Resultado"
    rounds.innerHTML = "Round: 1"
})

function getComputerChoice() {
    options = ["pedra", "papel", "tesoura"]
    const escolha = options[Math.floor(Math.random() * options.length)];
    computerchoice.innerHTML = "O computador escolheu: " + escolha
    return escolha
}


function playRound(jogador, computador) {
    round += 1 
    rounds.innerHTML = "Round: " + round
    computador = getComputerChoice()
    if (jogador == computador) {
        result.innerHTML = " Empatou, " + jogador + " empata com " + computador
        return "empate"
    }
    else if (jogador == "pedra") {
        if (computador == "papel") {
            result.innerHTML = "Voce perdeu, papel ganha de pedra"
            pointsPC += 1
            playerscore.innerHTML = "Jogador: " + pointsPlayer
            pcscore.innerHTML = "Computador: " + pointsPC
            return "derrota" 
        }
        else if (computador == "tesoura") {
            result.innerHTML = "Voce ganhou!!, pedra ganha de tesoura"
            pointsPlayer += 1 
            playerscore.innerHTML = "Jogador: " + pointsPlayer
            pcscore.innerHTML = "Computador: " + pointsPC
            return "vitoria"
        }
    }
    else if (jogador == "papel") {
        if (computador == "pedra") {
            result.innerHTML = "Voce ganhou, papel ganha de pedra"
            pointsPlayer += 1 
            playerscore.innerHTML = "Jogador: " + pointsPlayer
            pcscore.innerHTML = "Computador: " + pointsPC
            return "vitoria"
        }
        else if (computador == "tesoura") {
            result.innerHTML = "Voce perdeu, tesoura ganha de papel"
            pointsPC += 1
            playerscore.innerHTML = "Jogador: " + pointsPlayer
            pcscore.innerHTML = "Computador: " + pointsPC
            return "derrota"
        }
    }
    else if (jogador == "tesoura") {
        if (computador == "pedra") {
            result.innerHTML ="Voce perdeu, pedra ganha de tesoura"
            pointsPC += 1
            playerscore.innerHTML = "Jogador: " + pointsPlayer
            pcscore.innerHTML = "Computador: " + pointsPC
            return "derrota"
        }
        else if (computador == "papel") {
            result.innerHTML ="Voce ganhou!!, tesoura ganha de papel"
            pointsPlayer += 1 
            playerscore.innerHTML = "Jogador: " + pointsPlayer
            pcscore.innerHTML = "Computador: " + pointsPC
            return "vitoria"
        }
    }
   
}

const chosePedra = document.querySelector('.options .pedra')
const chosePapel = document.querySelector('.options .papel')
const choseTesoura = document.querySelector('.options .tesoura')
const reset = document.querySelector(".reset")

reset.addEventListener("click" , event => {
    botao.parentNode.style.display = "flex"
})

chosePedra.addEventListener('click', event => {
    playRound(jogador = 'pedra')
    yourchoice.innerHTML = "O jogador escolheu: pedra"
    if (pointsPlayer === 5) {
        botao.parentNode.style.display = "flex"
        botao.style.width = "240px"
        botao.innerHTML = "Voce Venceu!!, Clique aqui para jogar novamente"
    }
    if (pointsPC === 5) {
        botao.parentNode.style.display = "flex"
        botao.style.width = "240px"
        botao.innerHTML = "Voce Perdeu ;-;, Clique aqui para jogar novamente"
    }
    }
)
choseTesoura.addEventListener('click', event => {
    playRound(jogador = 'tesoura')
    yourchoice.innerHTML = "O jogador escolheu: tesoura"
    if (pointsPlayer === 5) {
        botao.parentNode.style.display = "flex"
        botao.style.width = "240px"
        botao.innerHTML = "Voce Venceu!!, Clique aqui para jogar novamente"
    }
    if (pointsPC === 5) {
        botao.parentNode.style.display = "flex"
        botao.style.width = "240px"
        botao.innerHTML = "Voce Perdeu ;-;, Clique aqui para jogar novamente"
    }
    }
)
chosePapel.addEventListener('click', event => {
    playRound(jogador = 'papel')
    yourchoice.innerHTML = "O jogador escolheu: papel"
    if (pointsPlayer === 5) {
        botao.parentNode.style.display = "flex"
        botao.style.width = "240x"
        botao.innerHTML = "Voce Venceu!!, Clique aqui para jogar novamente"
    }
    if (pointsPC === 5) {
        botao.parentNode.style.display = "flex"
        botao.style.width = "240px"
        botao.innerHTML = "Voce Perdeu ;-;, Clique aqui para jogar novamente"
    }
})




