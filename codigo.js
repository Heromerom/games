// Definindo as categorias de aventura e suas probabilidades
const adventureCategories = [
  { category: "dungeon", probability: 30 }, // Probabilidade de 30%
  { category: "exploration", probability: 25 }, // Probabilidade de 25%
  { category: "assault", probability: 20 }, // Probabilidade de 20%
  { category: "special_occasions", probability: 15 }, // Probabilidade de 15%
  { category: "rare_events", probability: 10 }, // Probabilidade de 10%
];

// Definindo as descrições de aventura por categoria e suas probabilidades
const adventureDescriptions = {
  dungeon: [
    { description: "Paimon explorou uma masmorra sombria e encontrou ${loot.item1} do item 1.", probability: 40 },
    { description: "Paimon lutou contra monstros assustadores em uma masmorra e adquiriu ${loot.item2} do item 2.", probability: 30 },
    { description: "Paimon encontrou um tesouro escondido na escuridão da masmorra e pegou ${loot.item3} do item 3.", probability: 20 },
    { description: "Paimon derrotou um poderoso chefe na masmorra e obteve ${loot.item4} do item 4.", probability: 10 },
  ],
  exploration: [
    { description: "Paimon explorou uma vasta floresta e coletou ${loot.item5} do item 5.", probability: 40 },
    { description: "Paimon subiu em uma montanha íngreme durante sua exploração e encontrou ${loot.item6} do item 6.", probability: 30 },
    { description: "Paimon nadou em um lago cristalino e descobriu ${loot.item7} do item 7.", probability: 20 },
    { description: "Paimon encontrou uma relíquia antiga durante sua exploração e obteve ${loot.item8} do item 8.", probability: 10 },
  ],
  assault: [
    { description: "Paimon foi atacada por inimigos enquanto viajava e perdeu ${loot.item9} do item 9.", probability: 40 },
    { description: "Paimon lutou bravamente contra adversários perigosos e perdeu ${loot.item10} do item 10.", probability: 30 },
    { description: "Paimon sofreu uma emboscada de inimigos e perdeu ${loot.item11} do item 11.", probability: 20 },
    { description: "Paimon escapou por pouco de um ataque surpresa e perdeu ${loot.item12} do item 12.", probability: 10 },
  ],
  special_occasions: [
    { description: "Paimon participou de um evento especial e recebeu ${loot.item13} do item 13 como recompensa.", probability: 40 },
    { description: "Paimon foi homenageada durante uma ocasião especial e recebeu ${loot.item14} do item 14 como presente.", probability: 30 },
    { description: "Paimon participou de uma cerimônia grandiosa e recebeu ${loot.item15} do item 15 como lembrança.", probability: 20 },
    { description: "Paimon se destacou em um evento especial e recebeu ${loot.item16} do item 16 como troféu.", probability: 10 },
  ],
  rare_events: [
    { description: "Paimon encontrou um artefato lendário em um evento raro e adquiriu ${loot.item17} do item 17.", probability: 40 },
    { description: "Paimon testemunhou um fenômeno extraordinário durante um evento raro e pegou ${loot.item18} do item 18.", probability: 30 },
    { description: "Paimon foi premiada com um tesouro inestimável em um evento raro e obteve ${loot.item19} do item 19.", probability: 20 },
    { description: "Paimon foi convidada para um evento exclusivo e ganhou ${loot.item20} do item 20 como reconhecimento.", probability: 10 },
  ],
};

// Função para escolher uma descrição de aventura aleatória baseada na categoria
function getRandomAdventureDescription(category, pet) {
  const descriptions = adventureDescriptions[category];
  const sortedDescriptions = descriptions.sort(
    (a, b) => b.probability - a.probability
  );

  const randomIndex = getRandomIndexWithProbability(sortedDescriptions);
  const description = sortedDescriptions[randomIndex].description;

  // Substituindo o nome do pet na descrição
  const replacedDescription = description.replace("${pet.nome}", pet.nome);

  return replacedDescription;
}


// Definindo os itens de loot por categoria e suas probabilidades
const lootItemsByCategory = {
  dungeon: [
    { itemId: 1, maxQuantity: 3, probability: 40 }, // Item 1 com probabilidade de 40%
    { itemId: 2, maxQuantity: 2, probability: 30 }, // Item 2 com probabilidade de 30%
    { itemId: 3, maxQuantity: 1, probability: 20 }, // Item 3 com probabilidade de 20%
    { itemId: 4, maxQuantity: 1, probability: 10 }, // Item 4 com probabilidade de 10%
  ],
  exploration: [
    { itemId: 5, maxQuantity: 5, probability: 40 }, // Item 5 com probabilidade de 40%
    { itemId: 6, maxQuantity: 4, probability: 30 }, // Item 6 com probabilidade de 30%
    { itemId: 7, maxQuantity: 3, probability: 20 }, // Item 7 com probabilidade de 20%
    { itemId: 8, maxQuantity: 2, probability: 10 }, // Item 8 com probabilidade de 10%
  ],
  assault: [
    { itemId: 9, maxQuantity: 2, probability: 40 }, // Item 9 com probabilidade de 40%
    { itemId: 10, maxQuantity: 1, probability: 30 }, // Item 10 com probabilidade de 30%
    { itemId: 11, maxQuantity: 1, probability: 20 }, // Item 11 com probabilidade de 20%
    { itemId: 12, maxQuantity: 1, probability: 10 }, // Item 12 com probabilidade de 10%
  ],
  special_occasions: [
    { itemId: 13, maxQuantity: 3, probability: 40 }, // Item 13 com probabilidade de 40%
    { itemId: 14, maxQuantity: 2, probability: 30 }, // Item 14 com probabilidade de 30%
    { itemId: 15, maxQuantity: 1, probability: 20 }, // Item 15 com probabilidade de 20%
    { itemId: 16, maxQuantity: 1, probability: 10 }, // Item 16 com probabilidade de 10%
  ],
  rare_events: [
    { itemId: 17, maxQuantity: 1, probability: 40 }, // Item 17 com probabilidade de 40%
    { itemId: 18, maxQuantity: 1, probability: 30 }, // Item 18 com probabilidade de 30%
    { itemId: 19, maxQuantity: 1, probability: 20 }, // Item 19 com probabilidade de 20%
    { itemId: 20, maxQuantity: 1, probability: 10 }, // Item 20 com probabilidade de 10%
  ],
};

// Função para gerar uma aventura aleatória
function generateAdventure(pet) {
  // Ordenando as categorias de aventura por probabilidade (do mais provável para o menos provável)
  const sortedCategories = adventureCategories.sort(
    (a, b) => b.probability - a.probability
  );

  // Escolhendo uma categoria aleatória baseada na probabilidade
  const randomCategoryIndex = getRandomIndexWithProbability(sortedCategories);
  const category = sortedCategories[randomCategoryIndex].category;

  // Gerando o loot aleatório baseado na categoria escolhida
  const loot = getRandomLoot(category);

  // Escolhendo uma descrição de aventura aleatória baseada na categoria
  const description = getRandomAdventureDescription(category, pet);

  // Retornando os dados da aventura gerada
  return {
    category,
    loot,
    description,
  };
}

// Função para escolher um índice aleatório com base na probabilidade
function getRandomIndexWithProbability(array) {
  const totalProbability = array.reduce((sum, item) => sum + item.probability, 0);
  let randomNum = Math.random() * totalProbability;

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    randomNum -= item.probability;
    if (randomNum <= 0) {
      return i;
    }
  }
}

// Função para gerar um loot aleatório baseado na categoria
function getRandomLoot(category) {
  const lootItems = lootItemsByCategory[category];
  const loot = {};

  for (const item of lootItems) {
    const quantity = getRandomQuantity(item.maxQuantity);
    loot[item.itemId] = quantity;
  }

  return loot;
}

// Função para gerar uma quantidade aleatória baseada no máximo permitido
function getRandomQuantity(maxQuantity) {
  return Math.floor(Math.random() * (maxQuantity + 1));
}

// Função para escolher uma descrição de aventura aleatória baseada na categoria
function getRandomAdventureDescription(category, pet) {
  const descriptions = adventureDescriptions[category];
  const sortedDescriptions = descriptions.sort(
    (a, b) => b.probability - a.probability
  );

  const randomIndex = getRandomIndexWithProbability(sortedDescriptions);
  const description = sortedDescriptions[randomIndex].description;

  // Substituindo o nome do pet na descrição
  const replacedDescription = description.replace("${pet.nome}", pet.nome);

  return replacedDescription;
}

// Exemplo de utilização do código para gerar uma aventura
const pet = {
  nome: "Paimon",
};

const adventure = generateAdventure(pet);

console.log(`${pet.nome} ${adventure.description}`);
console.log("Loot:", adventure.loot);
