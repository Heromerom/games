const pet = {
	nome: "Paimon",
	lvl: 0,
  idade: 0,
	saude: 100,
	fome: 80,
	felicidade: 100,
	energia: 0,
	isSleeping: false,
	sujo: 0,
  ouro: 0,
  max_saude: 100,
  max_fome: 100,
  max_felicidade: 100,
  max_energia: 10,
  max_lvl: 100,

	"sleep-img-url": "https://stickerly.pstatic.net/sticker_pack/iYFODRyx2vbEYoLJDuA/C6L2EL/34/913b4ea6-c5cc-46e7-91d7-cd61f429f0ff.png",
	"happy-img-url": "https://mystickermania.com/cdn/stickers/genshin-impact/genshin-paimon-512x512.png",
	"sad-img-url": "https://64.media.tumblr.com/a6def43e95357d48c8f62c6900be704a/53828a39d1e162b1-a7/s500x750/e7caafa817b1f869adf0e24ab8856f4157ebe4bc.png",
	"neutral-img-url": "https://mystickermania.com/cdn/stickers/genshin-impact/genshin-paimon-512x512.png",
	"think-img-url": "https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-paimon/sticker_16.png",
	"play-img-url": "https://i.redd.it/aoiyeqhhlvf81.gif",
  "heavy-img-url": "https://i.pinimg.com/originals/17/43/d7/1743d764b8439f6f2a941ce34d8be254.png",
  "worried-img-url": "https://i.pinimg.com/originals/21/fa/2d/21fa2df706e1e2d2b0c9046aa5e18b18.png"
};

const cleanlinessDescriptions = {
  0: '🧼 Limpa',
  1: '🧼 Mal-cheiro',
  2: '🧼 Dorme suja, acorda limpa',
  3: '🧼 Encardida',
};

const sleepingDescriptions = {
  true: '💤 Dormindo',
  false: '👁️ Acordada'
};

// Classes customizadas
const tipoClasses = {
  comida: [
    "bg-yellow-100",
    "text-yellow-800",
    "dark:bg-yellow-900",
    "dark:text-yellow-300"
  ],
  bebida: [
    "bg-blue-100",
    "text-blue-800",
    "dark:bg-blue-900",
    "dark:text-blue-300"
  ],
  erva: [
    "bg-green-100",
    "text-green-800",
    "dark:bg-green-900",
    "dark:text-green-300"
  ],

  li: [
    "bg-gray-900",
    "dark:bg-gray-800",
    "dark:border-gray-700",
    "w-flex",
    "border-b",
    "rounded-md"
  ],

  itemtitle: [
    "px-2",
    "py-2",
    "text-medium",
    "font-bold",
    "text-white-900",
    "dark:text-white"
  ],

  itemdescription: [
    "px-0",
    "py-2",
    "font-thin",
    "text-sm",
    "text-gray-300",
    "dark:text-white-900"
  ],
  
  categoryText: [
    "text-xs",
    "text-medium",
    "mr-2",
    "px-2.5",
    "py-0.5",
    "rounded-full"
  ],
  consumir: [
    "px-2",
    "py-2",
    "text-right",
    "text-small"
  ],
  link: [
    "font-medium",
    "text-blue-100",
    "dark:text-blue-900",
    "hover:underline"
  ]
  // Adicione outros tipos e suas classes aqui, se necessário.
};


function getRandomPaimonPhrase() {
  if (pet.isSleeping){return}
  const health = pet.saude;
  const hunger = pet.fome;
  const happiness = pet.felicidade;
  const phrases = [
    // Frases relacionadas à saúde
    { group: 'health', phrase: "Paimon não está se sentindo bem...", probability: health < 70 ? 0.8 : 0 },
    { group: 'health', phrase: "Paimon precisa de cuidados médicos.", probability: health < 40 ? 0.6 : 0 },
    { group: 'health', phrase: "Paimon está doente, preciso de ajuda!", probability: health < 40 ? 0.6 : 0 },
    { group: 'health', phrase: "Paimon está fraca e precisa se recuperar.", probability: health < 40 ? 0.6 : 0 },
    { group: 'health', phrase: "Paimon precisa de remédios para melhorar.", probability: health < 40 ? 0.5 : 0 },
    { group: 'health', phrase: "Paimon quer ficar saudável novamente!", probability: health < 40 ? 0.5 : 0 },
    { group: 'health', phrase: "Paimon precisa descansar e se recuperar.", probability: health < 40 ? 0.5 : 0 },
    { group: 'health', phrase: "Paimon está se sentindo um pouco melhor.", probability: health < 40 ? 0.2 : 0 },
    { group: 'health', phrase: "Paimon está um pouco mais forte agora.", probability: health < 40 ? 0.2 : 0 },
    { group: 'health', phrase: "Paimon está se recuperando.", probability: health < 40 ? 0.2 : 0 },
    // Frases raras de saúde
    { group: 'health', phrase: "Os poderes misteriosos de Paimon estão diminuindo...", probability: health < 40 ? 0.05 : 0 },
    { group: 'health', phrase: "Paimon sente um mal presságio...", probability: health < 40 ? 0.05 : 0 },
    { group: 'health', phrase: "Paimon precisa de uma poção mágica para se curar.", probability: health < 40 ? 0.05 : 0 },
    // Frases relacionadas à fome
    { group: 'hunger', phrase: "Paimon está com muita fome!", probability: hunger < 70 ? 0.8 : 0 },
    { group: 'hunger', phrase: "Paimon precisa urgentemente de comida!", probability: hunger < 70 ? 0.6 : 0 },
    { group: 'hunger', phrase: "Paimon está desmaiando de fome!", probability: hunger < 70 ? 0.6 : 0 },
    { group: 'hunger', phrase: "Paimon está com o estômago roncando!", probability: hunger < 70 ? 0.5 : 0 },
    { group: 'hunger', phrase: "Paimon sente cheiro de comida... que delícia!", probability: hunger < 70 ? 0.5 : 0 },
    { group: 'hunger', phrase: "Paimon está faminta como um tarsilho!", probability: hunger < 70 ? 0.5 : 0 },
    { group: 'hunger', phrase: "Paimon quer um lanche bem suculento!", probability: hunger < 70 ? 0.5 : 0 },
    { group: 'hunger', phrase: "Paimon adora um bom banquete!", probability: hunger < 70 ? 0.2 : 0 },
    { group: 'hunger', phrase: "Paimon devorou algo delicioso!", probability: hunger < 70 ? 0.2 : 0 },
    { group: 'hunger', phrase: "Paimon está satisfeita por enquanto.", probability: hunger < 70 ? 0.2 : 0 },
    // Frases raras de fome
    { group: 'hunger', phrase: "Paimon encontrou um tesouro... um biscoito!", probability: hunger < 70 ? 0.05 : 0 },
    { group: 'hunger', phrase: "Paimon sonhou com uma festa gastronômica...", probability: hunger < 70 ? 0.05 : 0 },
    { group: 'hunger', phrase: "Paimon está tentando resistir à tentação...", probability: hunger < 70 ? 0.05 : 0 },
    // Frases relacionadas à felicidade
    { group: 'happiness', phrase: "Paimon está muito triste...", probability: happiness < 30 ? 0.8 : 0 },
    { group: 'happiness', phrase: "Paimon não consegue se animar...", probability: happiness < 30 ? 0.6 : 0 },
    { group: 'happiness', phrase: "Paimon precisa de carinho e atenção...", probability: happiness < 30 ? 0.6 : 0 },
    { group: 'happiness', phrase: "Paimon está se sentindo solitária...", probability: happiness < 30 ? 0.5 : 0 },
    { group: 'happiness', phrase: "Paimon quer brincar e se divertir!", probability: happiness < 30 ? 0.5 : 0 },
    { group: 'happiness', phrase: "Paimon precisa de um abraço bem apertado!", probability: happiness < 30 ? 0.5 : 0 },
    { group: 'happiness', phrase: "Paimon quer explorar o mundo com você!", probability: happiness < 30 ? 0.5 : 0 },
    { group: 'happiness', phrase: "Paimon adora momentos de alegria!", probability: happiness < 30 ? 0.2 : 0 },
    { group: 'happiness', phrase: "Paimon está se divertindo um pouco.", probability: happiness < 30 ? 0.2 : 0 },
    { group: 'happiness', phrase: "Paimon encontrou um motivo para sorrir.", probability: happiness < 30 ? 0.2 : 0 },
    // Frases raras de felicidade
    { group: 'happiness', phrase: "Paimon está pulando de alegria!", probability: happiness < 30 ? 0.05 : 0 },
    { group: 'happiness', phrase: "Paimon viu um arco-íris e ficou encantada!", probability: happiness < 30 ? 0.05 : 0 },
    { group: 'happiness', phrase: "Paimon encontrou um amigo inesperado!", probability: happiness < 30 ? 0.05 : 0 },
    // Frases neutras e curiosidades
    { group: 'neutral', phrase: "Olá, viajante! Como posso te ajudar hoje?", probability: 0.2 },
    { group: 'neutral', phrase: "Paimon está pronta para aventuras!", probability: 0.2 },
    { group: 'neutral', phrase: "Paimon está aqui para te auxiliar!", probability: 0.2 },
    { group: 'neutral', phrase: "Paimon adora acompanhar seus passos!", probability: 0.2 },
    { group: 'neutral', phrase: "Paimon é sua guia fiel e amiga!", probability: 0.2 },
    { group: 'neutral', phrase: "Paimon está ansiosa para explorar novos lugares!", probability: 0.2 },
    { group: 'neutral', phrase: "Paimon está curiosa para descobrir segredos escondidos!", probability: 0.2 },
    { group: 'neutral', phrase: "Você sabia que Paimon é um espírito viajante?", probability: 0.2 },
    { group: 'neutral', phrase: "Paimon adora comer maçãs!", probability: 0.2 },
    { group: 'neutral', phrase: "Paimon já explorou várias regiões de Teyvat!", probability: 0.2 },
    { group: 'neutral', phrase: "Paimon adora histórias emocionantes!", probability: 0.2 },
    { group: 'neutral', phrase: "Você pode confiar em Paimon para te guiar!", probability: 0.2 },
    // Frases raras neutras e curiosidades
    { group: 'neutral', phrase: "Paimon encontrou uma mensagem perdida...", probability: 0.05 },
    { group: 'neutral', phrase: "Paimon viu um gato dançando...", probability: 0.05 },
    { group: 'neutral', phrase: "Paimon está lendo um livro interessante!", probability: 0.05 },
    { group: 'neutral', phrase: "Paimon tem uma surpresa para você!", probability: 0.05 },
    { group: 'neutral', phrase: "Paimon está aprendendo a tocar um instrumento.", probability: 0.05 },
    { group: 'neutral', phrase: "Paimon está assistindo as estrelas no céu.", probability: 0.05 },
    { group: 'neutral', phrase: "Paimon está dançando uma música alegre!", probability: 0.05 },
    { group: 'neutral', phrase: "Paimon encontrou uma flor rara!", probability: 0.05 },
    { group: 'neutral', phrase: "Paimon está preparando uma surpresa para você!", probability: 0.05 },
    { group: 'neutral', phrase: "Paimon encontrou um tesouro escondido!", probability: 0.05 },
    { group: 'neutral', phrase: "Paimon está estudando novas línguas.", probability: 0.05 },
    { group: 'neutral', phrase: "Paimon adora experimentar comidas diferentes!", probability: 0.05 },
  ];
  // Filtra as frases com base na probabilidade e grupo atual
  const filteredPhrases = phrases.filter(
    (phrase) => phrase.probability > 0 && phrase.group === 'health' && health < 40 ||
      phrase.probability > 0 && phrase.group === 'hunger' && hunger < 70 ||
      phrase.probability > 0 && phrase.group === 'happiness' && happiness < 30 ||
      phrase.probability > 0 && phrase.group === 'neutral'
  );

  // Seleciona uma frase aleatória das frases filtradas
  const randomPhrase = filteredPhrases[Math.floor(Math.random() * filteredPhrases.length)];

  return `<html><svg class="w-3 h-3 inline text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
    <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>
  </svg></html> <color = #00FFFF><b>${pet.nome}:</b></color> ${randomPhrase.phrase}`;
}

function Paimon() {
  
  if (pet.saude > 0){
	addToConsole(getRandomPaimonPhrase());
    notif.play();
    
  }
}

// Obtém a URL da imagem com base no estado do Tamagucci
function getPetImage() {
	if (pet.isSleeping === true) {

		return pet["sleep-img-url"];
	
  }
  if (pet.saude < 40) {
		return pet["sad-img-url"];
	}
  
  if (pet.saude <= 60) {
    return pet["think-img-url"]
		
	}
  
  if (pet.felicidade <= 50) {
		return pet["neutral-img-url"];
	}
  
  if (pet.saude > 90 && pet.felicidade > 90 && pet.fome > 90){
		return pet["play-img-url"];
	} else {
    return pet["worried-img-url"];
    
  }
}

// Cache de elementos DOM
const petNameElement = document.getElementById("petName");
const petAgeElement = document.getElementById("petAge");
const petEnergyElement = document.getElementById("petEnergy");
const petSleepingElement = document.getElementById("petSleeping");
const petWashingElement = document.getElementById("petWashing");
const petImageElement = document.getElementById("petImage");
//const medicineButton = document.getElementById("medicineButton");
//const feedButton = document.getElementById("feedButton");
const playButton = document.getElementById("playButton");
const cleanButton = document.getElementById("cleanButton");
const sleepButton = document.getElementById("sleepButton");
const emojiElement = document.getElementById("emoji");
const consoleListElement = document.getElementById("consoleList");
// Progress Bars
const healthBarElement = document.getElementById("healthBar");
const hungerBarElement = document.getElementById("hungerBar");
const happinessBarElement = document.getElementById("happinessBar");
const hungerBarText = document.getElementById("hungerBarText");
const hapinessBarText = document.getElementById("hapinessBarText");
const healthBarText = document.getElementById("healthBarText");

// Atualiza a interface do jogo
function updateGameInterface() {
    
const petCleanliness = cleanlinessDescriptions[pet.sujo] || '';
const petDormindo = sleepingDescriptions[pet.isSleeping] || '';
	petNameElement.textContent = pet.nome;
	petAgeElement.textContent = `📅 ${pet.idade} dias`;
	petEnergyElement.textContent = `⚡ ${pet.energia}`;
	petSleepingElement.textContent = petDormindo ;
	petWashingElement.textContent = petCleanliness;
  petImageElement.src = getPetImage();
	healthBarElement.style.width = `${pet.saude}%`;
  hungerBarElement.style.width = `${pet.fome}%`;
	happinessBarElement.style.width = `${pet.felicidade}%`;
  healthBarText.textContent = `${pet.saude}%`;
  hungerBarText.textContent = `${pet.fome}%`;
  hapinessBarText.textContent = `${pet.felicidade}%`;
  limitStats();
  atualizarInventario()
	updateButtons();
	showEmoji();
}

// Função para adicionar uma mensagem ao console
let lastConsoleMessage = "";

function addToConsole(message) {
  const formattedMessage = formatMessage(message);
  
  if (formattedMessage === lastConsoleMessage) {
    return; // Se a mensagem for igual à anterior, não faz nada
  }
  
  lastConsoleMessage = formattedMessage; // Atualiza a última mensagem exibida
  
  const li = document.createElement("li");
  li.innerHTML = formattedMessage;
  consoleListElement.appendChild(li);
  consoleListElement.scrollTop = consoleListElement.scrollHeight;
}

// Função para formatar a mensagem com formatações personalizadas
function formatMessage(message) {
  message = message.replace(/<html>(.*)<\/html>/g, "$1");
	// Formatação para ERRO
	message = message.replace(/<erro>(.*?)<\/erro>/g, "<color = #FF0000>[ERRO] $1</color>");
	// Formatação para SUCESSO
	message = message.replace(/<sucesso>(.*?)<\/aviso>/g, "<color = #FF0000>[SUCESSO] $1</color>");
	// Formatação para AVISO 
	message = message.replace(/<aviso>(.*?)<\/aviso>/g, "<color = #ffdb58>[AVISO] $1</color>");
	// Formatação para negrito
	message = message.replace(/<b>(.*?)<\/b>/g, "<strong>$1</strong>");
	// Formatação para itálico
	message = message.replace(/<i>(.*?)<\/i>/g, "<em>$1</em>");
	// Formatação para sublinhado
	message = message.replace(/<s>(.*?)<\/s>/g, "<u>$1</u>");
  // Formatação para Emote	
  message = message.replace(/<emote>(.*?)<\/emote>/g, "<color = #989898>* $1 *</color>");	
  // Formatação para cor
	message = message.replace(/<color = #([A-Fa-f0-9]{6})>(.*?)<\/color>/g, '<span style="color: #$1;">$2</span>');
	// Formatação para links clicáveis
	message = message.replace(/<url="(.*?)">(.*?)<\/url>/g, '<u><a href="$1">$2</a></u>');

	return message;
}

// Atualiza o estado dos botões com base nas necessidades do Tamagucci
function updateButtons() {
	// feedButton.disabled = pet.isSleeping || pet.fome >= 100 || pet.saude <= 0;
	// medicineButton.disabled = pet.isSleeping || pet.saude >= 100 || pet.saude <= 0;
  playButton.disabled  = pet.isSleeping || pet.saude <= 0;
	cleanButton.disabled = pet.isSleeping || pet.saude <= 0;
	sleepButton.disabled = pet.isSleeping || pet.saude <= 0;
	
}

// Mostra um emoji indicando as necessidades do Tamagucci
function showEmoji() {
	let emoji = "";
  if (emoji === "" && pet.saude >= 100) {emoji = " ";}
	if (pet.fome < 50)        {emoji += "🍔";}
  if (pet.saude < 50)       {emoji += "💊";}
  if (pet.felicidade < 50)  {emoji += "😢";}
	if (pet.sujo > 0)         {emoji += "🧼";}
	emojiElement.textContent = emoji;
}

// Função que limita os dados do Tamagucci
function limitStats () {
  pet.fome = Math.max(0, Math.min(pet.fome, pet.max_fome));
  pet.saude = Math.max(0, Math.min(pet.saude, pet.max_saude));
  pet.felicidade = Math.max(0, Math.min(pet.felicidade, 100));
  pet.sujo = Math.max(0, Math.min(pet.energia, 4));
  pet.energia = Math.max(0, Math.min(pet.energia, pet.max_energia));
  pet.lvl = Math.max(0, Math.min(pet.lvl, pet.max_lvl));
}

// Ação de brincar com o Tamagucci
function play() {
	if (pet.energia > 0) {
    pet.felicidade += 10;
		pet.energia -= 1;
    generateAdventure(pet);
		updateGameInterface();
	} else {
		addToConsole(`<erro>Não há energia suficiente.</erro>`)
	}
}

// Ação de limpar o Tamagucci
function clean() {
	if (pet.sujo > 0 && pet.energia > 0) {
    pet.energia -= 1;
    pet.sujo -= 1;
		updateGameInterface();
	} else {
		addToConsole(`<erro>Não há energia suficiente.</erro>`)
	}
}

// Ação de fazer o Tamagucci dormir
function sleep() {
	pet.isSleeping = true;
	pet.saude += 10;
  addToConsole(`<emote>${pet.nome} dormiu.</emote>`);
	updateGameInterface();
}


// ITENS E INVENTÁRIO -------------------------------------------------------------------------------------

// Array para armazenar os itens existentes
const itensExistentes = [
  {
    id: 1,
    tipo: "comida",
    nome: "Maçã",
    raridade: "comum",
    descricao: "Uma maçã vermelha e brilhante. Parece deliciosa!",
    fraseConsumo: "Mhmm! Que maçã deliciosa!",
    modificadorSaude: 10,
    modificadorFelicidade: 5,
    modificadorFome: 5,
    modificadorSujo: 0,
    modificadorIdade: 0,
    modificadorEnergia: 0,
    modificadorIsSleeping: false,
    precoCompra: 5,
    precoVenda: 2,
    
    
  },
  {
    id: 2,
    tipo: "erva",
    nome: "Dente-de-leão",
    raridade: "incomum",
    descricao: "É valorizado por suas propriedades medicinais. Suas raízes, folhas e flores são frequentemente utilizadas na medicina tradicional para tratar uma variedade de condições, incluindo problemas digestivos, inflamação, problemas de pele e desintoxicação do fígado.",
    fraseConsumo:"Eww! Podia ser mais gostoso...",
    modificadorSaude: 20,
    modificadorFelicidade: -2,
    modificadorFome: -2,
    modificadorSujo: 0,
    modificadorIdade: 0,
    modificadorEnergia: 0,
    modificadorIsSleeping: false,
    precoCompra: 5,
    precoVenda: 2
    
  },
  {
    id: 3,
    tipo: "bebida",
    nome: "Mel de Abelha Rainha",
    raridade: "valioso",
    descricao: "o Mel de Abelha Rainha é um verdadeiro tesouro culinário. Além de seu irresistível paladar, é apreciado por seus benefícios para a saúde, proporcionando uma dose de doçura e bem-estar.",
    fraseConsumo: "Parece até nectar dos deuses!",
    modificadorSaude: 10,
    modificadorFelicidade: 20,
    modificadorFome: 60,
    modificadorSujo: 1,
    modificadorIdade: 0,
    modificadorEnergia: -1,
    modificadorIsSleeping: false,
    precoCompra: 0,
    precoVenda: 0
    
  },
  {
    id: 4,
    tipo: "bebida",
    nome: "Energético",
    raridade: "comum",
    descricao: "Com um pouco de Taurina, quem tomar esse veneno disfaçado de nectar vai ganhr muita energia.",
    fraseConsumo: "Estou me sentindo ENERGIZADA!!",
    modificadorSaude: -5,
    modificadorFelicidade: 5,
    modificadorFome: 1,
    modificadorSujo: 0,
    modificadorIdade: 0,
    modificadorEnergia: 2,
    modificadorIsSleeping: false,
    precoCompra: 0,
    precoVenda: 0
    
  }
    // Adicione mais itens existentes conforme necessár
];

// Array para armazenar o inventário do jogador
let inventario = [];

// Função para criar elementos com classes CSS
function createElementWithClasses(elementType, classes) {
  const element = document.createElement(elementType);
  element.classList.add(...classes);
  return element;
}

// Função para criar um link de uso de item
function createUseItemLink(item) {
  // fazer botão aqui depois
  const link = createElementWithClasses("a", itemClasses['link']);
  let useText = "";
  
  if (item.categoria === "comida") {
    useText = "Comer";
  } else if (item.categoria === "bebida") {
    useText = "Beber";
  } 
  
  link.textContent = `Consumir ${useText}`;
  link.classList.add("cursor-pointer");
  link.addEventListener("click", function() {
    usarItem(item.id, 1); // Use apenas 1 item ao clicar no link "Usar"
    atualizarInventario(); // Atualize o inventário após usar um item
  });
  
  return link;
}

// Função para atualizar a exibição do inventário no HTML
function atualizarInventario() {
  sortInventory();
  const inventarioList = document.getElementById("inventario-list");
  inventarioList.innerHTML = "";

  for (const item of inventario) {
    const li = createElementWithClasses("li", tipoClasses['li']);
    const div = createElementWithClasses("div", tipoClasses['itemtitle']);
    const span = createElementWithClasses("span", tipoClasses['categoryText']);
    
    if (item.tipo && item.tipo in tipoClasses) {
      const classes = tipoClasses[item.tipo];
      span.classList.add(...classes);
    }
    
    span.textContent = item.tipo;
    div.appendChild(span);
    div.appendChild(document.createTextNode(`${item.nome} - Qtd: ${item.quantidade}`));

    const div3 = createElementWithClasses("div", tipoClasses['itemdescription']);

    div3.textContent = `Saude: ${item.modificadorSaude} - Fome: ${item.modificadorFome} - Felicidade: ${item.modificadorFelicidade}`;
    div.appendChild(div3);

    const div2 = createElementWithClasses("div", tipoClasses['consumir']);

    const link = createUseItemLink(item);
    div2.appendChild(link);
    li.appendChild(div);
    li.appendChild(div2);

    inventarioList.appendChild(li);
  }
}

function sortInventory() {
  inventario.sort((itemA, itemB) => {
    // Ordenar pelo tipo do item
    if (itemA.tipo < itemB.tipo) {
      return -1;
    } else if (itemA.tipo > itemB.tipo) {
      return 1;
    }

    // Se o tipo for o mesmo, ordenar pela quantidade do item
    if (itemA.quantidade < itemB.quantidade) {
      return -1;
    } else if (itemA.quantidade > itemB.quantidade) {
      return 1;
    }

    // Se a quantidade for a mesma, ordenar pela raridade do item
    if (itemA.raridade < itemB.raridade) {
      return -1;
    } else if (itemA.raridade > itemB.raridade) {
      return 1;
    }

    return 0;
  });
}

  
// Função para adicionar um item ao inventário
function addItem(idItem, quantidade) {
  const itemExistente = itensExistentes.find((item) => item.id === idItem);
  if (itemExistente) {
    const itemInventario = inventario.find((item) => item.id === idItem);
    if (itemInventario) {
      itemInventario.quantidade += quantidade;
    } else {
      inventario.push({
        id: itemExistente.id,
        tipo: itemExistente.tipo,
        nome: itemExistente.nome,
        raridade: itemExistente.raridade,
        descricao: itemExistente.descricao,
        fraseConsumo: itemExistente.fraseConsumo,
        quantidade: quantidade,
        modificadorSaude: itemExistente.modificadorSaude,
        modificadorFelicidade: itemExistente.modificadorFelicidade,
        modificadorFome: itemExistente.modificadorFome,
        modificadorSujo: itemExistente.modificadorSujo,
        modificadorIsSleeping: itemExistente.modificadorIsSleeping,
        modificadorIdade: itemExistente.modificadorIdade,
        modificadorEnergia: itemExistente.modificadorEnergia,
        precoCompra: itemExistente.precoCompra,
        precoVenda: itemExistente.precoVenda,
      });
    }
  }
}

// Função para remover um item do inventário
function removeItem(idItem, quantidade) {
  const itemInventario = inventario.find((item) => item.id === idItem);
  if (itemInventario) {
    itemInventario.quantidade -= quantidade;
    if (itemInventario.quantidade <= 0) {
      inventario = inventario.filter((item) => item.id !== idItem);
    }
  }
}

// Função para usar um item do inventário
function usarItem(idItem, quantidade) {
  const itemInventario = inventario.find((item) => item.id === idItem);
  if (itemInventario && itemInventario.quantidade > 0 && pet.isSleeping === false && pet.saude > 0) {
    // Retira quantidade do inventário
    itemInventario.quantidade -= quantidade;
    
    // Atualiza os dados
    pet.saude += itemInventario.modificadorSaude;
    pet.energia += itemInventario.modificadorEnergia;
    pet.sujo += itemInventario.modificadorSujo;
    pet.idade += itemInventario.modificadorIdade;
    
    //pet.isSleeping += itemInventario.modificadorIsSleeping;
    pet.felicidade += itemInventario.modificadorFelicidade;
    pet.fome += itemInventario.modificadorFome;
    
    limitStats();
    //pet.energia = Math.max(0, Math.min(pet.energia, 10));
	  //pet.sujo = Math.max(0, Math.min(pet.sujo, 3));
	  //pet.fome = Math.max(0, Math.min(pet.fome, 100));
	  //pet.saude = Math.max(0, Math.min(pet.saude, 100));
	  //pet.felicidade = Math.max(0, Math.min(pet.felicidade, 100));
    
    // SFX Consumo
    if (itemInventario.tipo === "comida"){
      crunch.play();
    }
    
    if (itemInventario.tipo === "erva"){
      crunch2.play();
    }
    
    if (itemInventario.tipo === "bebida"){
      slurp.play();
    }
    // Frase Consumo
    addToConsole(`<html><svg class="w-3 h-3 inline text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
    <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>
  </svg></html> <color = #00FFFF><b>`+ `${pet.nome}:` + `</b></color> ` + `${itemInventario.fraseConsumo}`)
    
    updateGameInterface();
  
    } else {

      if (itemInventario){
        addToConsole(`<erro>Não é possível relizar esta ação.</erro>`)
    }
    }

    if (itemInventario === 0 ){

        removeItem(itemInventario.id);
    }
}

// AVENTURA --------------------------------------------------------------------------------------------------------------------------

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
    { description: "Paimon foi homenageada durante uma ocasião especial e recebeu ${loot.item14} do item 14 como presente.", probability: 30},
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
    { itemId: 1, maxQuantity: 3, probability: 40 }, // Item 13 com probabilidade de 40%
    { itemId: 1, maxQuantity: 2, probability: 30 }, // Item 14 com probabilidade de 30%
    { itemId: 1, maxQuantity: 1, probability: 20 }, // Item 15 com probabilidade de 20%
    { itemId: 1, maxQuantity: 1, probability: 10 }, // Item 16 com probabilidade de 10%
  ],
  rare_events: [
    { itemId: 1, maxQuantity: 1, probability: 40 }, // Item 17 com probabilidade de 40%
    { itemId: 1, maxQuantity: 1, probability: 30 }, // Item 18 com probabilidade de 30%
    { itemId: 1, maxQuantity: 1, probability: 20 }, // Item 19 com probabilidade de 20%
    { itemId: 1, maxQuantity: 1, probability: 10 }, // Item 20 com probabilidade de 10%
  ]
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
  addToConsole(`<aviso>Categoria: ${category} - Descrição: ${description} - Loot: ${loot[1]} </aviso>`)
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

// ----------------------------------------------------------------------------------------------


// Ação de passar o dia e atualizar o estado do Tamagucci
function passDay() {
	if (pet.saude <= 0) {
		addToConsole(`${pet.nome} morreu! Fim de jogo!`);
        confirm("Deseja continuar?");   
		return;
	}

	pet.idade += 1;

	if (pet.isSleeping) {
		pet.fome -= 2;
		pet.saude += 2;
		pet.felicidade += 2;
		pet.sleeping = (pet.sleeping || 0) + 1;

		if (pet.sleeping > 3) {
			pet.isSleeping = false;
			pet.sleeping = 0;
			addToConsole(`${pet.nome} acordou!`);
		}
	} else {
		pet.fome -= 10;
		pet.saude -= 5;
		pet.felicidade -= 5;
	}
    // Operações
	pet.energia += pet.idade % 2 === 0 ? 1 : 0;
	pet.sujo += pet.idade % 2 === 0 ? 1 : 0;
  pet.saude -= pet.sujo * 3;

	pet.energia = Math.max(0, Math.min(pet.energia, 10));
	pet.sujo = Math.max(0, Math.min(pet.sujo, 3));
	pet.fome = Math.max(0, Math.min(pet.fome, 100));
	pet.saude = Math.max(0, Math.min(pet.saude, 100));
	pet.felicidade = Math.max(0, Math.min(pet.felicidade, 100));

	addToConsole(`<b>DIA ${pet.idade}:</b> fome ${pet.fome}, saúde ${pet.saude}, felicidade ${pet.felicidade}, energia ${pet.energia}, sujo +1`);
    dateEvent();
    updateGameInterface();
	  evolve();
}

function dateEvent() {

    if (pet.idade % 7 === 0) {
        // A CADA 7 DIAS
        addToConsole(`1 SEMANA - 1 saco de maçã`);
        addItem(1,5);
            
    }

    if (pet.idade % 30 === 0) {
        // A CADA 1 MES
        addToConsole(`<aviso>1 MES</aviso>`)
        addItem(2,3);
    }

    if (pet.idade % 90 === 0) {
        // A CADA 3 MESES
        addToConsole(`<aviso>3 MESES</aviso>`)
    }

    if (pet.idade % 180 === 0) {
        // A CADA 6 MESES
        addToConsole(`<aviso>6 MESES</aviso>`)
    }

    if (pet.idade % 365 === 0) {
        // A CADA ANO
        addToConsole(`<aviso>12 MESES</aviso>`)
    }


}

function evolve() {
	if (pet.idade % 10 === 0) {
		//addToConsole(`${pet.nome} evoluiu!`)
		// Lógica para evolução
	}
}

// Adiciona os ouvintes de eventos aos botões
// medicineButton.addEventListener("click", giveMedicine);
// feedButton.addEventListener("click", feed);
playButton.addEventListener("click", play);
cleanButton.addEventListener("click", clean);
sleepButton.addEventListener("click", sleep);


// Inicializa a interface do jogo
updateGameInterface();

document.addEventListener('DOMContentLoaded', () => {
    
    addToConsole(`<b>Boas vindas!</b>`)
	  passDay();

    setInterval(Paimon, 25000);       // Executa a função Paimon a cada 25 segundos
	  setInterval(passDay, 24000);      // Passa o dia a cada 24 segundos
  
  setTimeout(addItem(1,10), 2000);  // Adiciona primeiro item no inventário
  
  const notif = document.getElementById("notif");
  const bgm = document.getElementById("bgm");
  const crunch = document.getElementById("crunch");
  const crunch2 = document.getElementById("crunch2");
  const slurp = document.getElementById("slurp");

  bgm.volume = 0.5;
  notif.volume = 0.3;
  crunch.volume = 0.3;
  crunch2.volume = 0.3;
  slurp.volume = 0.6;
  
  bgm.addEventListener("ended", function() {
    bgm.currentTime = 0; // Reinicia a reprodução para o início
});

bgm.addEventListener("canplaythrough", function() {
    bgm.play();
});

    // Atualizar a exibição do inventário quando a página for carregada
    atualizarInventario();

});
