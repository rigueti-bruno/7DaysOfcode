let numeroSecreto = parseInt(Math.random() * 10 + 1);
let tentativa = 3;
while (tentativa > 0) {
    let escolha = prompt('Escolha um número entre 1 e 10:');
    if (escolha == numeroSecreto) {
        alert(`Parabéns! Você acertou o número secreto: ${numeroSecreto}`);
        break;
    } else {
        alert(`Ops! Você errou. Tente novamente!`);
        tentativa--;
    }
    if (tentativa == 0) {
        alert(`Suas tentativas acabaram! O número secreto era ${numeroSecreto}`);
}
}