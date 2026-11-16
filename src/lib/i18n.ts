export const LANGS = ["pt", "en"] as const;
export type Lang = (typeof LANGS)[number];

export function isLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value);
}

const pt = {
  meta: {
    title: "Triper · Trilhas e montanhas do Brasil",
    description:
      "Seis rotas de montanha pelo Brasil, do Caparaó ao Pico da Neblina, com dificuldade, duração, melhor época e o que levar.",
  },
  nav: { destinations: "Destinos", plan: "Planejar", safety: "Segurança", skip: "Pular para o conteúdo", switchLang: "Ver em inglês" },
  hero: {
    eyebrow: "Guia de trilhas e montanhas",
    title: ["Seu próximo cume", "começa aqui."],
    lead: "Seis rotas pelo Brasil, do nascer do sol no Caparaó ao ponto mais alto do país. Compare dificuldade, duração e a melhor época antes de arrumar a mochila.",
    cta: "Ver destinos",
    ctaAlt: "Montar minha mochila",
    stats: { routes: "rotas", states: "estados", maxAlt: "altitude máxima" },
    scroll: "Role para explorar",
  },
  list: {
    eyebrow: "Destinos",
    title: "Escolha pela trilha, não pela foto.",
    lead: "Filtre pelo nível e pelo tempo que você tem. A silhueta de cada card mostra o jeito da subida.",
    filters: { all: "Todas", moderada: "Moderada", dificil: "Difícil", expedicao: "Expedição", saved: "Quero ir" },
    duration: { label: "Duração", any: "Qualquer", day: "Até 2 dias", long: "3+ dias" },
    empty: "Nenhum destino com esses filtros.",
    emptySaved: "Você ainda não marcou nenhum destino. Toque no ♡ de um card.",
    clear: "Limpar filtros",
    count: (n: number) => (n === 1 ? "1 destino" : `${n} destinos`),
    open: "Ver roteiro",
  },
  card: {
    altitude: "altitude",
    days: (min: number, max: number) => (min === max ? (min === 1 ? "1 dia" : `${min} dias`) : `${min} a ${max} dias`),
    best: "melhor época",
    save: "Marcar como quero ir",
    unsave: "Remover de quero ir",
    profileNote: "Perfil ilustrativo",
  },
  difficulty: { moderada: "Moderada", dificil: "Difícil", expedicao: "Expedição" },
  plan: {
    eyebrow: "Planejar",
    title: "Monte a mochila antes de sair.",
    lead: "Marque o que já separou. A lista fica salva neste navegador.",
    progress: (done: number, total: number) => `${done} de ${total} itens`,
    ready: "Mochila pronta. Boa trilha!",
    reset: "Recomeçar lista",
    groups: {
      essentials: "Essenciais",
      clothes: "Roupas",
      safety: "Segurança",
    },
    items: {
      water: "Água (pelo menos 2 litros)",
      food: "Lanche com energia: castanhas, frutas secas",
      headlamp: "Lanterna de cabeça e pilhas extras",
      map: "Mapa ou trilha baixada para usar offline",
      layers: "Roupa em camadas e anorak",
      thermal: "Segunda pele térmica para o cume",
      boots: "Bota ou tênis de trilha já amaciado",
      firstaid: "Kit de primeiros socorros",
      tell: "Avisar alguém do roteiro e do horário de volta",
      forecast: "Previsão do tempo conferida no dia",
    },
  },
  safety: {
    eyebrow: "Segurança",
    title: "Montanha boa é a que você volta para contar.",
    badge: "Sem pressa até o topo",
    items: [
      { title: "Avise alguém", text: "Deixe o roteiro e o horário previsto de volta com uma pessoa que não vai com você." },
      { title: "Respeite o tempo", text: "Neblina e chuva mudam tudo. Voltar antes do cume também é concluir a trilha." },
      { title: "Guia quando precisar", text: "Em trilhas longas, pouco marcadas ou em áreas protegidas, um guia local faz diferença." },
    ],
  },
  detail: {
    back: "Todos os destinos",
    about: "Sobre a rota",
    tips: "Antes de ir",
    access: "Como chegar",
    best: "Melhor época",
    duration: "Duração",
    difficulty: "Dificuldade",
    altitude: "Altitude",
    next: "Próximo destino",
    disclaimer:
      "Informações de referência para planejamento. Confirme regras, ingressos e condições com o parque ou o guia antes de ir.",
  },
  months: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
  footer: {
    tagline: "Saia e descubra o seu próximo cume.",
    note: "Projeto de portfólio de Pedro Lopes. As fotos são ilustrativas.",
    built: "Feito com Next.js, gerado como site estático.",
  },
  notFound: { title: "Trilha não encontrada", text: "Essa página não existe ou mudou de lugar.", back: "Voltar ao início" },
};

type Dict = typeof pt;

const en: Dict = {
  meta: {
    title: "Triper · Trails and mountains of Brazil",
    description:
      "Six mountain routes across Brazil, from Caparaó to Pico da Neblina, with difficulty, duration, best season and what to pack.",
  },
  nav: { destinations: "Destinations", plan: "Plan", safety: "Safety", skip: "Skip to content", switchLang: "Ver em português" },
  hero: {
    eyebrow: "Trail and mountain guide",
    title: ["Your next summit", "starts here."],
    lead: "Six routes across Brazil, from sunrise in Caparaó to the country's highest point. Compare difficulty, duration and the best season before you pack.",
    cta: "See destinations",
    ctaAlt: "Pack my bag",
    stats: { routes: "routes", states: "states", maxAlt: "highest altitude" },
    scroll: "Scroll to explore",
  },
  list: {
    eyebrow: "Destinations",
    title: "Pick the trail, not the photo.",
    lead: "Filter by level and by how much time you have. Each card's silhouette shows the shape of the climb.",
    filters: { all: "All", moderada: "Moderate", dificil: "Hard", expedicao: "Expedition", saved: "Want to go" },
    duration: { label: "Duration", any: "Any", day: "Up to 2 days", long: "3+ days" },
    empty: "No destinations match these filters.",
    emptySaved: "You have not saved any destination yet. Tap the ♡ on a card.",
    clear: "Clear filters",
    count: (n: number) => (n === 1 ? "1 destination" : `${n} destinations`),
    open: "See route",
  },
  card: {
    altitude: "altitude",
    days: (min: number, max: number) => (min === max ? (min === 1 ? "1 day" : `${min} days`) : `${min} to ${max} days`),
    best: "best season",
    save: "Mark as want to go",
    unsave: "Remove from want to go",
    profileNote: "Illustrative profile",
  },
  difficulty: { moderada: "Moderate", dificil: "Hard", expedicao: "Expedition" },
  plan: {
    eyebrow: "Plan",
    title: "Pack your bag before you leave.",
    lead: "Check what you have ready. The list is saved in this browser.",
    progress: (done: number, total: number) => `${done} of ${total} items`,
    ready: "Bag ready. Enjoy the trail!",
    reset: "Start over",
    groups: { essentials: "Essentials", clothes: "Clothing", safety: "Safety" },
    items: {
      water: "Water (at least 2 liters)",
      food: "Energy snacks: nuts, dried fruit",
      headlamp: "Headlamp and spare batteries",
      map: "Map or trail downloaded for offline use",
      layers: "Layered clothing and a windbreaker",
      thermal: "Thermal base layer for the summit",
      boots: "Broken-in hiking boots or trail shoes",
      firstaid: "First aid kit",
      tell: "Tell someone your route and return time",
      forecast: "Weather forecast checked on the day",
    },
  },
  safety: {
    eyebrow: "Safety",
    title: "A good mountain is one you come back to talk about.",
    badge: "No rush to the top",
    items: [
      { title: "Tell someone", text: "Leave your route and expected return time with someone who is not coming along." },
      { title: "Respect the weather", text: "Fog and rain change everything. Turning back before the summit still counts." },
      { title: "Get a guide when needed", text: "On long, poorly marked trails or in protected areas, a local guide makes a difference." },
    ],
  },
  detail: {
    back: "All destinations",
    about: "About the route",
    tips: "Before you go",
    access: "Getting there",
    best: "Best season",
    duration: "Duration",
    difficulty: "Difficulty",
    altitude: "Altitude",
    next: "Next destination",
    disclaimer:
      "Reference information for planning. Confirm rules, tickets and conditions with the park or your guide before you go.",
  },
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  footer: {
    tagline: "Get out there and find your next summit.",
    note: "Portfolio project by Pedro Lopes. Photos are illustrative.",
    built: "Built with Next.js, generated as a static site.",
  },
  notFound: { title: "Trail not found", text: "This page does not exist or has moved.", back: "Back to start" },
};

export const DICTS: Record<Lang, Dict> = { pt, en };
export type { Dict };

export function t(lang: Lang): Dict {
  return DICTS[lang];
}
