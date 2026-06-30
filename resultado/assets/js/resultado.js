const CHECKOUT_URL = "#"; // Troque pelo link do checkout da Cakto

const resultMap = {
  acne: {
    title: "Sua pele pede atenção para acne e inflamações.",
    text: "Pelas suas respostas, sua principal necessidade parece estar ligada a espinhas, cravos, inflamações ou tendência à acne.",
    meaning: "Isso geralmente exige uma rotina mais equilibrada, sem excesso de produtos agressivos e sem escolhas feitas apenas por modinha. O foco deve ser reduzir erros que pioram inflamações e organizar uma rotina possível.",
    step: "Comece entendendo quais hábitos e produtos podem agravar a acne. Dentro do método, você será direcionada para a aula de cuidados para acne e para o plano de 7 dias."
  },
  oleosidade: {
    title: "Sua pele pede controle de oleosidade sem agressão.",
    text: "Pelas suas respostas, sua principal necessidade parece estar ligada a brilho excessivo, poros aparentes ou sensação de pele pesada ao longo do dia.",
    meaning: "Muita gente tenta resolver oleosidade lavando demais ou usando produtos muito fortes, mas isso pode piorar o efeito rebote. A direção correta é equilibrar a pele sem agredir.",
    step: "Comece pela aula de cuidados para oleosidade. O método mostra como montar uma rotina simples para controlar o brilho com mais segurança."
  },
  manchas: {
    title: "Sua pele pede cuidado com manchas e uniformização.",
    text: "Pelas suas respostas, sua principal necessidade parece estar ligada a manchas, melasma, marcas ou diferença no tom da pele.",
    meaning: "Manchas exigem constância, proteção e escolha cuidadosa de ativos. Usar qualquer produto clareador sem direção pode irritar ou até piorar o aspecto da pele.",
    step: "Comece pela aula de cuidados para manchas e siga a orientação do plano de 7 dias com atenção especial à proteção e aos hábitos diários."
  },
  sensibilidade: {
    title: "Sua pele pede cuidado para sensibilidade e barreira cutânea.",
    text: "Pelas suas respostas, sua principal necessidade parece estar ligada a ardência, vermelhidão, irritação ou reação fácil a produtos.",
    meaning: "Quando a pele está sensível, o primeiro passo não é usar mais produtos, e sim reduzir agressões, fortalecer a barreira da pele e escolher cuidados mais seguros.",
    step: "Comece pela aula de pele sensível. O método ajuda você a entender como simplificar a rotina e evitar combinações que podem irritar."
  },
  linhas: {
    title: "Sua pele pede prevenção e cuidado com sinais de expressão.",
    text: "Pelas suas respostas, sua principal necessidade parece estar ligada a linhas finas, textura, perda de viço ou sinais de envelhecimento.",
    meaning: "O cuidado com linhas de expressão não depende de mil produtos. Ele começa com rotina consistente, hidratação, proteção e ativos usados com direção.",
    step: "Comece pela aula de linhas de expressão e pela rotina de manhã/noite do plano de 7 dias."
  },
  cicatrizes: {
    title: "Sua pele pede atenção para textura e cicatrizes.",
    text: "Pelas suas respostas, sua principal necessidade parece estar ligada a marcas, furinhos, cicatrizes ou textura irregular.",
    meaning: "Cicatrizes exigem expectativa realista e orientação correta. Em alguns casos, produtos ajudam na qualidade da pele; em outros, procedimentos podem ser necessários.",
    step: "Comece pela aula de cicatrizes para entender o que pode ajudar, o que tem limite e quando buscar uma avaliação profissional."
  }
};

function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

const storedResult = localStorage.getItem("peleBonitaQuizResult");
const resultKey = getParam("tipo") || storedResult || "oleosidade";
const data = resultMap[resultKey] || resultMap.oleosidade;

document.getElementById("resultTitle").textContent = data.title;
document.getElementById("resultText").textContent = data.text;
document.getElementById("resultMeaning").textContent = data.meaning;
document.getElementById("resultStep").textContent = data.step;
document.getElementById("checkoutBtn").href = CHECKOUT_URL;
