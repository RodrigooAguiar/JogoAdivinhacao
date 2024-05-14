// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
})

// funções
function handleTryClick(event) {
    event.preventDefault(); // Não executa o comportamento padrão

    const inputNumber = document.querySelector("#inputNumber").value;

    // Verifica se o campo está vazio antes de processar mais
    if (inputNumber === "") {
        alert("Por favor, digite um número.");
        return; // Retorna imediatamente para não executar o restante do código
    }

    const number = Number(inputNumber);

    // Verifica se o número está correto
    if (number === randomNumber) {
        toggleScreen();
        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`;
    } else if (number < 0 || number > 10) {
        alert("Erro, tente novamente com um número entre 0 e 10.");
    }

    // Limpa o input e incrementa o número de tentativas somente se não estiver vazio
    document.querySelector("#inputNumber").value = "";
    xAttempts++;
}


function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}