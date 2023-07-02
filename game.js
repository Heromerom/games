const pet = {
	nome: "Paimon",
	idade: 0,
	saude: 100,
	fome: 80,
	felicidade: 100,
	energia: 0,
	isSleeping: false,
	sujo: 0,
    ouro: 0,
	"sleep-img-url": "https://stickerly.pstatic.net/sticker_pack/iYFODRyx2vbEYoLJDuA/C6L2EL/34/913b4ea6-c5cc-46e7-91d7-cd61f429f0ff.png",
	"happy-img-url": "https://mystickermania.com/cdn/stickers/genshin-impact/genshin-paimon-512x512.png",
	"sad-img-url": "https://64.media.tumblr.com/a6def43e95357d48c8f62c6900be704a/53828a39d1e162b1-a7/s500x750/e7caafa817b1f869adf0e24ab8856f4157ebe4bc.png",
	"neutral-img-url": "https://mystickermania.com/cdn/stickers/genshin-impact/genshin-paimon-512x512.png",
	"think-img-url": "https://s3.getstickerpack.com/storage/uploads/sticker-pack/genshin-paimon/sticker_16.png",
	"play-img-url": "https://i.redd.it/aoiyeqhhlvf81.gif"
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

function getRandomPaimonPhrase() {
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
  </svg></html> <color = #00FFFF><b>PAIMON:</b></color> ${randomPhrase.phrase}`;
}


function Paimon() {
    if (pet.saude > 0){
	addToConsole(getRandomPaimonPhrase());
    notif.play();
}
}

// Cache de elementos DOM

const petNameElement = document.getElementById("petName");
const petAgeElement = document.getElementById("petAge");
const petEnergyElement = document.getElementById("petEnergy");
const petSleepingElement = document.getElementById("petSleeping");
const petWashingElement = document.getElementById("petWashing");
const petImageElement = document.getElementById("petImage");


const feedButton = document.getElementById("feedButton");
const playButton = document.getElementById("playButton");
const cleanButton = document.getElementById("cleanButton");
const sleepButton = document.getElementById("sleepButton");
const medicineButton = document.getElementById("medicineButton");
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
    atualizarInventario()
	updateButtons();
	showEmoji();
}

// Função para adicionar uma mensagem ao console
function addToConsole(message) {
	const li = document.createElement("li");
	li.innerHTML = formatMessage(message);
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
	// Formatação para cor
	message = message.replace(/<color = #([A-Fa-f0-9]{6})>(.*?)<\/color>/g, '<span style="color: #$1;">$2</span>');
	// Formatação para texto se mexendo
	// message = message.replace(/<shake>(.*?)<\/shake>/g, '<span class="shake-animation">$1</span>');
	// Formatação para links clicáveis
	message = message.replace(/<url="(.*?)">(.*?)<\/url>/g, '<u><a href="$1">$2</a></u>');

	return message;
}

// Atualiza o estado dos botões com base nas necessidades do Tamagucci
function updateButtons() {
	feedButton.disabled = pet.isSleeping || pet.fome >= 100 || pet.saude <= 0;
	playButton.disabled = pet.isSleeping || pet.felicidade >= 100 || pet.saude <= 0;
	cleanButton.disabled = pet.isSleeping || pet.sujo === 0 || pet.saude <= 0;
	sleepButton.disabled = pet.isSleeping || pet.saude <= 0;
	medicineButton.disabled = pet.isSleeping || pet.saude >= 100 || pet.saude <= 0;
}


// Obtém a URL da imagem com base no estado do Tamagucci
function getPetImage() {
	if (pet.isSleeping === true) {
		return pet["sleep-img-url"];
	} else if (pet.saude <= 50) {
		return pet["sad-img-url"];
	} else if (pet.felicidade <= 50) {
		return pet["neutral-img-url"];
	} else {
		return pet["happy-img-url"];
	}
}

// Mostra um emoji indicando as necessidades do Tamagucci
function showEmoji() {
	let emoji = "";
	if (pet.fome < 50) {
		//addToConsole(`<aviso>${pet.nome} está com fome.</aviso>`);
		emoji += "🍔";
	}
	if (pet.saude < 50) {
		//addToConsole(`<aviso>${pet.nome} está doente. </aviso>`);
		emoji += "💊";
	}
	if (pet.felicidade < 50) {
		emoji += "😢";
		//addToConsole(`<aviso>${pet.nome} está infeliz.</aviso>`);
	}
	if (pet.sujo > 0) {
		emoji += "🧼";
	}
	if (emoji === "" && pet.saude >= 100) {
		emoji = " ";
	}
	emojiElement.textContent = emoji;
}

// Ação de alimentar o Tamagucci
function feed() {
	if (pet.fome < 100) {
		pet.fome += 20;
		pet.saude -= 10;
		pet.fome = Math.max(0, Math.min(pet.fome, 100));
		pet.saude = Math.max(0, Math.min(pet.saude, 100));
		updateGameInterface();
	} else {
		addToConsole(`<erro>Não está com fome.</erro>`)
	}
}

// Ação de brincar com o Tamagucci
function play() {
	if (pet.energia > 0) {
		pet.felicidade += 10;
		pet.energia -= 1;
		pet.felicidade = Math.max(0, Math.min(pet.felicidade, 100));
		pet.energia = Math.max(0, Math.min(pet.energia, 10));
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
		pet.sujo = Math.max(0, pet.sujo);
		updateGameInterface();
	} else {
		addToConsole(`<erro>Não há energia suficiente.</erro>`)
	}
}

// Ação de fazer o Tamagucci dormir
function sleep() {
	pet.isSleeping = true;

	pet.saude += 10;
	addToConsole(`<sucesso>${pet.nome} dormiu.</sucesso>`);
	pet.saude = Math.max(0, Math.min(pet.saude, 100));
	pet.fome = Math.max(0, Math.min(pet.fome, 100));
	updateGameInterface();
}

// Ação de dar remédio ao Tamagucci
function giveMedicine() {
	pet.saude += 30;
	pet.felicidade -= 10;
	pet.saude = Math.max(0, Math.min(pet.saude, 100));
	pet.felicidade = Math.max(0, Math.min(pet.felicidade, 100));
	addToConsole(`<sucesso>Deu remédio para ${pet.nome} e ganhou + 30 SAUDE e perdeu 10 FELICIDADE!</sucesso>`)
	updateGameInterface();

}

// Inventário

// Array para armazenar os itens existentes
const itensExistentes = [
  { id: 1, tipo: "comida", nome: "Maçã", modificadorSaude: 10, modificadorFelicidade: 5, modificadorFome: 5, modificadorSujo: 3, modificadorIdade: 0, modificadorEnergia: 0, modificadorIsSleeping: false, precoCompra: 5, precoVenda: 2 },
  { id: 2, tipo: "comida", nome: "Maça 2", modificadorSaude: 20, modificadorFelicidade: 5, modificadorFome: 5, modificadorSujo: 3, modificadorIdade: 0, modificadorEnergia: 0, modificadorIsSleeping: false, precoCompra: 5, precoVenda: 2 }
  // Adicione mais itens existentes conforme necessário
];

// Array para armazenar o inventário do jogador
let inventario = [];

  // ...código JavaScript existente...

  // Função para atualizar a exibição do inventário no HTML
  function atualizarInventario() {
    const inventarioList = document.getElementById("inventario-list");
    inventarioList.innerHTML = "";
  
    for (const item of inventario) {
      const li = document.createElement("li");
      li.classList.add(
        "bg-gray-900",
        "border-b",
        "border-radius-2",
        "dark:bg-gray-800",
        "dark:border-gray-700"
      );
      // NOME DO ITEM
      const div = document.createElement("div");
      div.classList.add(
        "px-2",
        "py-2",
        "text-medium",
        "font-bold",
        "text-white-900",
        "whitespace-nowrap",
        "dark:text-white"
      );
  
      const span = document.createElement("span");
      span.classList.add(
        "bg-yellow-100",
        "text-yellow-800",
        "text-xs",
        "text-medium",
        "mr-2",
        "px-2.5",
        "py-0.5",
        "rounded-full",
        "dark:bg-yellow-900",
        "dark:text-yellow-300"
      );
      span.textContent = item.tipo;
      div.appendChild(span);
      div.appendChild(
        document.createTextNode(`${item.nome} - Qtd: ${item.quantidade}`)
      );
  
      const div3 = document.createElement("div");
      div3.classList.add(
        "px-2",
        "py-2",
        "font-thin",
        "text-sm",
        "text-gray-300",
        "font-family-monospace",
        "text-1xl",
        "dark:text-white-900"
      );
      div3.textContent = `Saude: ${item.modificadorSaude} - Fome: ${item.modificadorFome} - Felicidade: ${item.modificadorFelicidade}`;
      div.appendChild(div3);
  
      const div2 = document.createElement("div");
      div2.classList.add("px-2", "py-2", "text-right", "text-small");
  
      const link = document.createElement("a");
      link.href = "#";
      link.classList.add(
        "font-medium",
        "text-blue-100",
        "dark:text-blue-900",
        "hover:underline"
      );
      link.textContent = "Usar";
  
      link.addEventListener("click", function () {
        usarItem(item.id, 1); // Use apenas 1 item ao clicar no link "Usar"
        atualizarInventario(); // Atualize o inventário após usar um item
      });
  
      div2.appendChild(link);
  
      li.appendChild(div);
      li.appendChild(div2);
  
      inventarioList.appendChild(li);
    }
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
    
    pet.energia = Math.max(0, Math.min(pet.energia, 10));
	  pet.sujo = Math.max(0, Math.min(pet.sujo, 3));
	  pet.fome = Math.max(0, Math.min(pet.fome, 100));
	  pet.saude = Math.max(0, Math.min(pet.saude, 100));
	  pet.felicidade = Math.max(0, Math.min(pet.felicidade, 100));
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
        addToConsole(`1 SEMANA`)
            
    }

    if (pet.idade % 30 === 0) {
        // A CADA 1 MES
        addToConsole(`<aviso>1 MES</aviso>`)
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
		addToConsole(`${pet.nome} evoluiu!`)
		// Lógica para evolução
	}
}

// Adiciona os ouvintes de eventos aos botões
feedButton.addEventListener("click", feed);
playButton.addEventListener("click", play);
cleanButton.addEventListener("click", clean);
sleepButton.addEventListener("click", sleep);
medicineButton.addEventListener("click", giveMedicine);

// Inicializa a interface do jogo
updateGameInterface();
document.addEventListener('DOMContentLoaded', () => {
	// Call the function to initialize tooltips
    var notif = document.getElementById("notif")
    notif.volume = 0.4;
    addToConsole(`<b>Boas vindas!</b>`)
	passDay();
	setInterval(Paimon, 15000); // Executa a função Paimon após 5 segundos
	setInterval(passDay, 10000);
    setTimeout(addItem(1,10), 2000);
    var audio = document.getElementById("myAudio");
	audio.volume = 0.4;
      // Atualizar a exibição do inventário quando a página for carregada
    atualizarInventario();


	audio.addEventListener("ended", function() {
		audio.currentTime = 0; // Reinicia a reprodução para o início
		audio.play(); // Inicia a reprodução novamente
	});

});
