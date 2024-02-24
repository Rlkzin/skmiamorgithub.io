const newLocal = "pirokudo rsrs";
const elogios = [
    "Você é incrível!",
    "Seu sorriso ilumina meu dia.",
    "Você faz tudo ficar melhor.",
    "Sua bondade é inspiradora.",
    "O mundo é um lugar melhor com você nele.",
    "picudooooooooooooooooooooooooooooooooooo."
];

function gerarComplimento() {
    const elogio = getRandomElogio();
    document.getElementById('compliment').textContent = elogio;
}

function getRandomElogio() {
    const randomIndex = Math.floor(Math.random() * elogios.length);
    return elogios[randomIndex];
}

// Chama gerarComplimento ao carregar a página
gerarComplimento();
