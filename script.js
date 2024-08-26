const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como a internet influencia o uso de drogas entre os jovens?",
        alternativas:[
            {
                texto: "Facilita o acesso a informações e redes de apoio sobre tratamento e prevenção.",
            
            },
            {
                texto: "Aumenta o acesso a substâncias ilegais e promove a normalização do uso de drogas.",
    
            }
        ]
    },
    {
        enunciado: "Como a internet pode contribuir para a conscientização do combate ao aquecimento global",
        alternativas: [
            {
                texto: " Facilitando o acesso a informações e dados sobre mudanças climáticas e promovendo campanhas de sensibilização.",
             
            },
            {
                texto: "Desencorajando a pesquisa sobre práticas sustentáveis e limitando o acesso a informações sobre tecnologias ecológicas.",
             
            }
        ]
    },
    {
        enunciado: "Qual é uma das principais causas do aquecimento global?",
        alternativas: [
            {
                texto: "Aumento das emissões de gases de efeito estufa, como dióxido de carbono e metano.",
            
            },
            {
                texto: "Redução das áreas de floresta tropical e aumento da biodiversidade marinha.",
        
            }
        ]
    },
    {
        enunciado: "Qual é um fator que pode aumentar o risco de uso de drogas entre os jovens?",
        alternativas: [
            {
                texto: " Acesso a informações educativas sobre os perigos das drogas e programas de prevenção.",

            },
            {
                texto: " Influência de pares e a exposição a ambientes onde o uso de drogas é comum.",
        
            }
        ]
    },
    {
        enunciado: "Como a internet pode impactar a disseminação de informações?",
        alternativas: [
            {
                texto: "Como a internet pode impactar a disseminação de informações?",
               
            },
            {
                texto: "Limita o acesso a informações diversificadas, restringindo o fluxo de dados para fontes tradicionais apenas.",
              
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();