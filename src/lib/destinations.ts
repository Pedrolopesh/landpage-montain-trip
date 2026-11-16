import type { Lang } from "./i18n";

export type Difficulty = "moderada" | "dificil" | "expedicao";
export type Region = "norte" | "nordeste" | "sudeste" | "sul";

type Text = Record<Lang, string>;

export type Destination = {
  slug: string;
  name: string;
  /** Sigla do(s) estado(s), como aparece no card. */
  uf: string;
  region: Region;
  difficulty: Difficulty;
  /** Altitude do ponto mais alto da rota, em metros. */
  altitude: number;
  /** A altitude é uma estimativa (mostrada com "~"). */
  approx?: boolean;
  /** Faixa de dias da rota mais comum: [mínimo, máximo]. */
  days: [number, number];
  /** Meses mais indicados (1 = janeiro). */
  bestMonths: number[];
  /** Cor de destaque do card. */
  tone: string;
  /** Perfil ilustrativo da subida (0 a 100), usado só no desenho da silhueta. */
  profile: number[];
  tagline: Text;
  summary: Text;
  about: Record<Lang, string[]>;
  tips: Record<Lang, string[]>;
  access: Text;
};

export const DESTINATIONS: Destination[] = [
  {
    slug: "pico-da-bandeira",
    name: "Pico da Bandeira",
    uf: "MG/ES",
    region: "sudeste",
    difficulty: "moderada",
    altitude: 2891,
    days: [1, 2],
    bestMonths: [5, 6, 7, 8, 9],
    tone: "#f2b766",
    profile: [8, 14, 22, 26, 38, 44, 52, 60, 66, 78, 86, 94, 100, 96],
    tagline: { pt: "O nascer do sol mais disputado do Sudeste", en: "The most sought-after sunrise in Southeast Brazil" },
    summary: {
      pt: "Terceiro ponto mais alto do Brasil, na divisa de Minas com o Espírito Santo. Muita gente sobe de madrugada para ver o sol nascer acima das nuvens.",
      en: "Brazil's third highest point, on the border of Minas Gerais and Espírito Santo. Many hikers climb before dawn to watch the sun rise above the clouds.",
    },
    about: {
      pt: [
        "O pico fica no Parque Nacional do Caparaó e é o ponto mais alto da região Sudeste. A trilha é bem marcada e não exige técnica de escalada, mas a altitude e o frio pedem preparo.",
        "Dá para fazer em um dia saindo cedo, ou dividir em dois acampando no caminho e subindo de madrugada para o nascer do sol.",
      ],
      en: [
        "The peak sits inside Caparaó National Park and is the highest point in Southeast Brazil. The trail is well marked and needs no climbing technique, but altitude and cold call for preparation.",
        "You can do it in a single day leaving early, or split it in two, camping on the way and climbing before dawn for the sunrise.",
      ],
    },
    tips: {
      pt: [
        "No inverno a temperatura no cume pode ficar abaixo de zero: leve roupa térmica e luvas.",
        "Lanterna de cabeça é obrigatória para quem sobe de madrugada.",
        "Confira no site do parque as regras de acampamento e o horário da portaria.",
      ],
      en: [
        "In winter the summit can drop below freezing: bring thermal layers and gloves.",
        "A headlamp is a must if you climb before dawn.",
        "Check the park website for camping rules and gate hours.",
      ],
    },
    access: {
      pt: "Entradas pelo lado mineiro (Alto Caparaó) e pelo lado capixaba (Pedra Menina).",
      en: "Entrances on the Minas Gerais side (Alto Caparaó) and the Espírito Santo side (Pedra Menina).",
    },
  },
  {
    slug: "janela-do-ceu",
    name: "Janela do Céu",
    uf: "MG",
    region: "sudeste",
    difficulty: "moderada",
    altitude: 1700,
    approx: true,
    days: [1, 1],
    bestMonths: [4, 5, 6, 7, 8, 9],
    tone: "#7fd1ae",
    profile: [20, 28, 34, 44, 40, 52, 60, 56, 66, 72, 64, 58],
    tagline: { pt: "Um mirante em cima de uma cachoeira", en: "A lookout on top of a waterfall" },
    summary: {
      pt: "O circuito mais famoso do Parque Estadual do Ibitipoca termina num mirante sobre a queda d'água, com o vale inteiro à frente.",
      en: "The best-known circuit in Ibitipoca State Park ends at a lookout over the waterfall, with the whole valley ahead.",
    },
    about: {
      pt: [
        "A trilha passa por campos de altitude, grutas e cachoeiras até chegar à Janela do Céu, uma abertura na rocha por onde o rio despenca.",
        "O caminho não tem grandes obstáculos, mas tem trechos íngremes e é longo para quem não tem costume: conte com o dia inteiro, ida e volta.",
      ],
      en: [
        "The trail crosses high-altitude grasslands, caves and waterfalls until it reaches the Janela do Céu, an opening in the rock where the river drops.",
        "There are no big obstacles, but some steep stretches make it long for beginners: plan for the whole day, there and back.",
      ],
    },
    tips: {
      pt: [
        "O parque limita o número de visitantes por dia: compre o ingresso antes.",
        "Saia cedo para voltar antes de a portaria fechar.",
        "A altitude no card é aproximada, do trecho mais alto do circuito.",
      ],
      en: [
        "The park caps daily visitors: buy your ticket in advance.",
        "Leave early so you are back before the gate closes.",
        "The altitude on the card is approximate, from the highest stretch of the circuit.",
      ],
    },
    access: {
      pt: "Parque Estadual do Ibitipoca, entre Lima Duarte e Santa Rita de Ibitipoca (MG).",
      en: "Ibitipoca State Park, between Lima Duarte and Santa Rita de Ibitipoca (MG).",
    },
  },
  {
    slug: "pico-parana",
    name: "Pico Paraná",
    uf: "PR",
    region: "sul",
    difficulty: "dificil",
    altitude: 1877,
    days: [1, 2],
    bestMonths: [4, 5, 6, 7, 8],
    tone: "#8fb4ff",
    profile: [6, 18, 30, 26, 42, 56, 50, 64, 74, 70, 86, 100, 92],
    tagline: { pt: "O teto do Sul do Brasil", en: "The roof of Southern Brazil" },
    summary: {
      pt: "A montanha mais alta do Sul, no meio da Mata Atlântica da Serra do Mar. Sobe e desce o tempo todo e pede bom preparo físico.",
      en: "The highest mountain in the South, in the Atlantic Forest of the Serra do Mar. Constant ups and downs that demand good fitness.",
    },
    about: {
      pt: [
        "A trilha é sinalizada, mas longa e cheia de subidas e descidas. Em alguns trechos há correntes e grampos presos na rocha para ajudar na passagem.",
        "Muita gente divide a subida em dois dias, acampando nas áreas planas do caminho para ver o pôr e o nascer do sol lá de cima.",
      ],
      en: [
        "The trail is marked but long, with plenty of ups and downs. Some stretches have chains and metal rungs fixed to the rock to help you through.",
        "Many hikers split it into two days, camping on the flat areas along the way to watch sunset and sunrise from up high.",
      ],
    },
    tips: {
      pt: [
        "Não há água garantida no alto: leve pelo menos três litros por pessoa.",
        "Com neblina a trilha fica confusa. Na dúvida, contrate um guia.",
        "Evite os meses de chuva forte do verão, quando a rocha fica escorregadia.",
      ],
      en: [
        "Water is not guaranteed up high: carry at least three liters per person.",
        "Fog makes the trail confusing. If in doubt, hire a guide.",
        "Avoid the heavy summer rains, when the rock gets slippery.",
      ],
    },
    access: {
      pt: "A trilha começa em fazendas na região de Campina Grande do Sul, a cerca de uma hora de Curitiba.",
      en: "The trail starts on farms near Campina Grande do Sul, about an hour from Curitiba.",
    },
  },
  {
    slug: "vale-do-pati",
    name: "Vale do Pati",
    uf: "BA",
    region: "nordeste",
    difficulty: "dificil",
    altitude: 1400,
    approx: true,
    days: [3, 5],
    bestMonths: [4, 5, 6, 7, 8, 9],
    tone: "#f08a6c",
    profile: [60, 52, 40, 30, 34, 46, 38, 28, 36, 54, 62, 48, 40],
    tagline: { pt: "A travessia dos paredões da Chapada", en: "A trek through the Chapada's cliffs" },
    summary: {
      pt: "Travessia de vários dias pela Chapada Diamantina, entre paredões, cachoeiras e mirantes, dormindo na casa de moradores do vale.",
      en: "A multi-day trek across Chapada Diamantina, between cliffs, waterfalls and lookouts, sleeping in the homes of valley residents.",
    },
    about: {
      pt: [
        "O Pati é um vale isolado no Parque Nacional da Chapada Diamantina. Não tem estrada: tudo chega a pé ou no lombo de mula.",
        "Os dias alternam caminhada longa e paradas em mirantes e cachoeiras. As famílias do vale oferecem pernoite e refeições.",
      ],
      en: [
        "Pati is an isolated valley in Chapada Diamantina National Park. There are no roads: everything arrives on foot or by mule.",
        "Days alternate long walks with stops at lookouts and waterfalls. Valley families offer lodging and meals.",
      ],
    },
    tips: {
      pt: [
        "Vá com guia local: as trilhas se cruzam e é fácil se perder.",
        "Mochila leve faz diferença. Como há pernoite nas casas, dá para dispensar barraca.",
        "A altitude no card é aproximada, dos mirantes mais altos da travessia.",
      ],
      en: [
        "Go with a local guide: trails cross each other and it is easy to get lost.",
        "A light pack makes a difference. With homestays you can skip the tent.",
        "The altitude on the card is approximate, from the trek's highest lookouts.",
      ],
    },
    access: {
      pt: "As saídas mais comuns são por Guiné, Vale do Capão ou Andaraí, na Chapada Diamantina (BA).",
      en: "Common starting points are Guiné, Vale do Capão or Andaraí, in Chapada Diamantina (BA).",
    },
  },
  {
    slug: "monte-roraima",
    name: "Monte Roraima",
    uf: "RR",
    region: "norte",
    difficulty: "expedicao",
    altitude: 2810,
    days: [6, 8],
    bestMonths: [12, 1, 2, 3, 4],
    tone: "#c79bff",
    profile: [10, 14, 18, 24, 30, 36, 44, 60, 84, 96, 98, 100, 99],
    tagline: { pt: "Caminhar em cima de um tepui", en: "Walking on top of a tepui" },
    summary: {
      pt: "Uma montanha de topo plano na tríplice fronteira entre Brasil, Venezuela e Guiana, com paisagens que parecem de outro planeta.",
      en: "A flat-topped mountain on the triple border of Brazil, Venezuela and Guyana, with landscapes that look like another planet.",
    },
    about: {
      pt: [
        "O Roraima é um tepui: uma montanha de paredes verticais e topo plano, coberto de rochas escuras, poças cristalinas e plantas que só existem ali.",
        "A rota mais usada sai da Venezuela e leva de seis a oito dias entre subida, exploração do topo e descida, com acampamento todas as noites.",
      ],
      en: [
        "Roraima is a tepui: a mountain with vertical walls and a flat top covered in dark rock, crystal-clear pools and plants found nowhere else.",
        "The most common route starts in Venezuela and takes six to eight days to climb, explore the top and descend, camping every night.",
      ],
    },
    tips: {
      pt: [
        "A expedição exige agência e guia autorizados.",
        "Chove muito no topo, mesmo na época seca: leve tudo em sacos estanques.",
        "Verifique antes as regras de entrada na Venezuela e a situação da fronteira.",
      ],
      en: [
        "The expedition requires an authorized agency and guide.",
        "It rains a lot on top, even in the dry season: pack everything in dry bags.",
        "Check Venezuela's entry rules and the border situation beforehand.",
      ],
    },
    access: {
      pt: "Saída por Pacaraima (RR), cruzando para a Venezuela até a comunidade de Paraitepui.",
      en: "Departure from Pacaraima (RR), crossing into Venezuela to the community of Paraitepui.",
    },
  },
  {
    slug: "pico-da-neblina",
    name: "Pico da Neblina",
    uf: "AM",
    region: "norte",
    difficulty: "expedicao",
    altitude: 2995,
    days: [8, 10],
    bestMonths: [11, 12, 1, 2],
    tone: "#5fd0e6",
    profile: [4, 6, 10, 12, 16, 22, 28, 40, 54, 70, 84, 100, 94],
    tagline: { pt: "O ponto mais alto do Brasil", en: "The highest point in Brazil" },
    summary: {
      pt: "O cume mais alto do país, no meio da floresta amazônica e dentro da Terra Indígena Yanomami. Só se chega com o roteiro oficial guiado pelos Yanomami.",
      en: "The country's highest summit, deep in the Amazon rainforest and inside the Yanomami Indigenous Territory. Access only through the official route guided by the Yanomami.",
    },
    about: {
      pt: [
        "O pico fica no Parque Nacional do Pico da Neblina, sobreposto à Terra Indígena Yanomami. A visitação acontece pelo projeto de ecoturismo conduzido pelos próprios Yanomami.",
        "É uma expedição de vários dias, com trechos de barco, caminhada na floresta e subida final por rocha, quase sempre sob chuva e neblina.",
      ],
      en: [
        "The peak lies in Pico da Neblina National Park, which overlaps the Yanomami Indigenous Territory. Visits happen through the ecotourism project run by the Yanomami themselves.",
        "It is a multi-day expedition, with boat stretches, forest hiking and a final climb on rock, almost always in rain and fog.",
      ],
    },
    tips: {
      pt: [
        "A entrada só é permitida com o roteiro oficial e autorização prévia.",
        "As vagas e as datas são poucas: planeje com meses de antecedência.",
        "A época indicada é aproximada. Confirme as datas com o roteiro oficial.",
      ],
      en: [
        "Entry is only allowed on the official route with prior authorization.",
        "Spots and dates are scarce: plan months ahead.",
        "The suggested season is approximate. Confirm dates with the official route.",
      ],
    },
    access: {
      pt: "Saída de São Gabriel da Cachoeira (AM), com trechos de barco e estrada até o início da trilha.",
      en: "Departure from São Gabriel da Cachoeira (AM), with boat and road stretches to the trailhead.",
    },
  },
];

export function getDestination(slug: string): Destination | undefined {
  return DESTINATIONS.find((d) => d.slug === slug);
}
