// --- LÓGICA DO SIMULADOR DE EQUILÍBRIO ---
const btnSimular = document.getElementById('btn-simular');
const resultadoSimulacao = document.getElementById('resultado-simulacao');

btnSimular.addEventListener('click', () => {
    resultadoSimulacao.innerHTML = "🌱 <strong>Sensores Ativados!</strong> Umidade do solo detectada de forma precisa. Consumo de água reduzido em 40% e energia economizada!";
    btnSimular.textContent = "Sistema Otimizado";
    btnSimular.style.backgroundColor = "#2e7d32";
    btnSimular.disabled = true;
});


// --- LÓGICA DO QUIZ ---
const dadosQuiz = {
    pergunta: "Qual das alternativas abaixo reflete o verdadeiro equilíbrio entre Agro e Meio Ambiente?",
    alternativas: [
        "A) Utilizar defensivos e água sem controle para garantir o máximo de produção.",
        "B) Expandir áreas de plantio sem respeitar as Áreas de Preservação Permanente (APPs).",
        "C) Utilizar tecnologias como drones e análise de solo para produzir mais gastando menos recursos naturais.",
        "D) Abandonar a tecnologia e voltar às técnicas de cultivo de séculos atrás."
    ],
    correta: 2 // Corresponde à alternativa C (índice 2 do array)
};

const elementoPergunta = document.getElementById('pergunta');
const containerAlternativas = document.getElementById('alternativas');
const elementoFeedback = document.getElementById('feedback');

function carregarQuiz() {
    elementoPergunta.textContent = dadosQuiz.pergunta;
    containerAlternativas.innerHTML = '';

    dadosQuiz.alternativas.forEach((alternativa, indice) => {
        const botao = document.createElement('button');
        botao.textContent = alternativa;
        botao.addEventListener('click', () => verificarResposta(indice));
        containerAlternativas.appendChild(botao);
    });
}

function verificarResposta(indiceSelecionado) {
    elementoFeedback.classList.remove('escondido');
    
    if (indiceSelecionado === dadosQuiz.correta) {
        elementoFeedback.textContent = "🎉 Correto! A tecnologia e a agricultura de precisão são as chaves para a sustentabilidade.";
        elementoFeedback.className = "correto";
    } else {
        elementoFeedback.textContent = "❌ Tente novamente! Lembre-se de procurar a alternativa que une eficiência produtiva com preservação.";
        elementoFeedback.style.backgroundColor = "#ffcdd2";
        elementoFeedback.style.color = "#c62828";
    }
}

// Inicializa o quiz ao carregar a página
carregarQuiz();
