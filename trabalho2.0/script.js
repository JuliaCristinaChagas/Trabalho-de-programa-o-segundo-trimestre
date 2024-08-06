const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você decobre que etá acontecendo as Olimpíadas de Paris! O que você acha disso?",
        alternativas: [
            {
                texto: "Ninguém liga pra isso!!",
                afirmacao: "As olimpíadas não são importantes para você, "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Você quis acompanhar seus esportes favoritos,"
            }
        ]
    },
    {
        enunciado: "Com a descoberta deste evento, você logo tem que escolher o países e/ou os esportes que você quer acompanhar. Qual o seu critério ?",
        alternativas: [
            {
                texto: "Escolho meus esportes favoritos por ja saber a regras.",
                afirmacao: "você tem preguiça de conhecer novos esportes,"
            },
            {
                texto: "Começo a acompanhar esportes que nunca vi antes, e que não conheço as regras.",
                afirmacao: "você busca conhecer esportes novos,"
            }
        ]
    },
    {
        enunciado: "Enquanto vejo um dos esportes que acompanho, um jogador do time adversário se lesiona. Como eu reajo a isso?",
        alternativas: [
            {
                texto: "Pulo, grito e comemoro, pois não é com o meu time.",
                afirmacao: "você não se importa se atletas se machucarem se isso significar uma vantagem para o seu time,"
            },
            {
                texto: "Fico aflito(a) pois uma lesão pode tirar todo o sonho de uma pessoa.",
                afirmacao: "você acha que ganhar pode ser importante mas não mais importante do que o bem estar de todos os atletas,"
            }
        ]
    },
    {
        enunciado: "Depois de alguns dias de olimpíedas sua professora de edf. física, pede pra que os seus alunos realizem um trabalho sobre as olimpíedas.",
        alternativas: [
            {
                texto: "Faço um trabalho apenas sobre as medalhas conquistadas pelo meu país.",
                afirmacao: "para você, apenas vitórias importam."
            },
            {
                texto: "Faço um trabalho sobre os esportes novos que conheci.",
                afirmacao: "você é uma pessoa aberta a conhecer coisas novas, principalmente se forem esportes."
            }
        ]
    },
    {
        enunciado: "Você tirou um 10! A professora te elegiou pelo trabalho bem feito, e pergunta oque você aprendeu com ele.  ",
        alternativas: [
            {
                texto: "Aprendi que existem mais esportes do que imaginava, e vou até passar a acompanhar anguns deles .",
                afirmacao: "Você realmente se abriu a novas possibilidades e com isso pode ter descoberto um novo hobby, e quem sabe uma possível vocação."
            },
            {
                texto: "Aprendi a apoiar meu time/meu paí mesmo em esportes em que não conhecia, pois oque importa é ser patriota.",
                afirmacao: "Você não tem tanto interesse em esportes, porém gosta de apoiar seu país. "
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
    caixaPerguntas.textContent = "Em 2024...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
