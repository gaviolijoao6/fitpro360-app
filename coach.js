// FitPro360 - Coach IA Simulada
// Esta versão usa respostas automáticas baseadas no objetivo do usuário

const mensagensBase = {
  geral: [
    "Lembre-se: consistência é mais importante que intensidade 💪",
    "A hidratação é essencial — 2L de água por dia é o mínimo ideal 💧",
    "Alimente-se com foco em qualidade, não apenas quantidade 🥦",
    "Descanse bem, o músculo cresce enquanto você dorme 😴"
  ],
  emagrecer: [
    "Evite exagerar em dietas muito restritivas, seu corpo precisa de energia 🔥",
    "Faça treinos curtos e intensos (HIIT funciona muito bem!) 🏃‍♂️",
    "Mantenha um déficit calórico moderado — equilíbrio é tudo ⚖️"
  ],
  academia: [
    "O segredo da hipertrofia é a progressão de carga 📈",
    "Proteínas são fundamentais: ovos, frango, peixe e whey 🥩",
    "Faça séries controladas e evite treinar sempre até a falha 🔄"
  ],
  futebol: [
    "Trabalhe força e resistência — treino funcional é seu aliado ⚽",
    "Treine sprints curtos com intervalos regulares 🏃‍♂️",
    "Alongamento e mobilidade previnem lesões e melhoram seu jogo 🦵"
  ]
};

// Simula respostas do coach
function responderCoach(tipo) {
  const mensagens = mensagensBase[tipo] || mensagensBase.geral;
  const indice = Math.floor(Math.random() * mensagens.length);
  return mensagens[indice];
}

// Mostra a conversa no console
console.log("Coach FitPro360 iniciado com sucesso ⚡");
