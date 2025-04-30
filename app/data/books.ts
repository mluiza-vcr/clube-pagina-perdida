import bookCover1 from "public/as-coisas-que-o-ar-nao-conta.png";
import bookCover2 from "public/fragmento-de-tinta-e-sombras.png";
import bookCover3 from "public/a-ultima-pagina.png";
import bookCover4 from "public/teatro-de-laminas.png";
import bookCover5 from "public/chuva-fina.png";
import bookCover6 from "public/relato-e-asfalto.png";

export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  description: string;
  year: number;
  synopsis: string;
  fragments: string[];
}

export const books: Book[] = [
  {
    id: "1",
    title: "As Coisas que o Ar não Conta",
    author: "Linh Maï",
    year: 2023,
    coverImage: bookCover1,
    synopsis:
      "Aos 14 anos, Lan deixa o Vietnã após a morte dos avós e vai viver com tios distantes na França. Lá, mergulha em descobertas sobre colonização, identidade e desejo, enquanto tenta compreender o que se perde — e o que permanece — ao atravessar o mundo e crescer.",
    description:
      "Lan tem 14 anos e carrega nas costas o silêncio de uma história que nunca lhe foi contada. Órfã de pais que ela nunca viu, criada entre as folhas de chá e as histórias sussurradas pelos avós no interior do Vietnã, ela se vê subitamente transplantada para uma terra de outono frio e ruas de pedra: a França. Na casa dos tios — estranhos com o mesmo sangue —, Lan começa a estudar sobre a colonização de seu país natal e percebe que o passado não está enterrado: está vivo nas pequenas coisas. Na forma como falam seu nome. Nos olhares. Nos livros de História onde sua terra parece ser sempre o 'outro'. Enquanto tenta decifrar esse novo mundo, Lan também é atravessada pelas primeiras inquietações do desejo, da solidão, da vergonha e da vontade de ser. Entre o luto pelos avós, a raiva que não sabe nomear e o desencaixe com o espelho, ela escreve cartas que nunca envia, observa pássaros que nunca pousam e começa a juntar, aos poucos, os fragmentos de si. 'As Coisas que o Ar não Conta' é um romance sobre crescer entre dois mundos, perder quem nos sabia de cor e tentar entender o que permanece — mesmo quando tudo parece ter ido embora.",
    fragments: [
      "Meu nome atravessa a boca dos franceses como se tropeçasse.",
      "O arroz da França é branco demais. Não sabe dos cheiros da manhã na cozinha da minha avó.",
      "A primeira vez que desejei alguém foi como um susto doce, como quando a chuva começa antes da nuvem ficar escura.",
      "Sinto saudade de coisas que nunca toquei. Talvez meus pais. Talvez eu mesma, em outro tempo.",
      "Na aula de História, ouvi o nome do meu país e quis gritar. Mas fiquei calada, como as crianças que sabem demais.",
      "Enterrei o caderno onde escrevia cartas para meus avós. Plantei uma flor em cima. Às vezes penso que eles podem ler do outro lado.",
    ],
  },
  {
    id: "2",
    title: "A Última Página",
    author: "Clara N. Bello",
    year: 1985,
    synopsis:
      "Uma escritora solitária começa a sonhar, noite após noite, com capítulos de um romance policial. Ela decide escrever essa história — até que descobre que o livro já existia, assinado por sua irmã desaparecida.",
    coverImage: bookCover3,
    description:
      "Desde a infância, Helena sempre escreveu para silenciar os fantasmas. Mas, aos 38 anos, vivendo sozinha em uma casa cheia de cadernos inacabados e promessas esquecidas, ela começa a sonhar com uma história de investigação: um corpo encontrado no interior de uma biblioteca, uma narradora que fala em primeira pessoa e uma busca cada vez mais obsessiva por um assassino que nunca deixa rastros. Todas as manhãs, Helena acorda e escreve o que sonhou. E quanto mais escreve, mais sonha. As frases parecem já estar prontas, esperando apenas sua transcrição. Até que, por acaso, ela encontra o manuscrito de um livro antigo, com as mesmas palavras, os mesmos personagens — e um nome na capa: Lídia. O nome de sua irmã desaparecida há quase duas décadas. Entre delírio e lucidez, ficção e lembrança, A Última Página é uma trama sobre a fronteira entre o real e o escrito, a culpa e o espelho. E sobre o que acontece quando a história que você acredita estar criando, na verdade, já foi vivida por alguém que você amou e perdeu.",
    fragments: [
      "Às quatro da manhã, Helena acordou com a sensação de que alguém sussurrava dentro do seu crânio. As palavras não vinham da mente, mas do chão. Como se o assoalho guardasse uma voz esquecida entre as tábuas.",
      "O manuscrito estava ali, manchado de mofo e tempo. Ela não sabia se tremia por frio ou pela certeza súbita: cada frase que acreditava ter escrito era apenas lembrança de algo que nunca viveu.",
      "No sonho, a narradora andava pelos corredores de uma casa sem janelas. No livro, as paredes da casa eram descritas com a exatidão de quem as mediu com o corpo. No mundo real, Helena começou a desenhar essa casa no verso de envelopes antigos.",
      "Lídia não era um nome. Era uma ferida, era o sussurro que atravessava as noites de Helena desde os nove anos de idade. Agora, era também a autora de um romance que insistia em existir por meio dela.",
      "Quando terminou o último parágrafo, Helena não chorou. Apenas olhou pela janela como se esperasse ver a irmã caminhando pela rua, de volta. Como se o fim da história fosse também o fim do desaparecimento.",
    ],
  },

  {
    id: "3",
    title: "Teatro de Lâminas",
    author: "Camille Durand",
    year: 1998,
    synopsis:
      "Teatro de Lâminas é um romance epistolar sobre um amor impossível entre Mathilde, uma atriz que vive entre sombras e palcos no sul da França, e Adrien, um professor universitário que vê o tempo como seu maior carrasco. Unidos por palavras e silêncio, seus encontros clandestinos ganham corpo em cartas carregadas de lirismo, desejo e culpa. ",
    coverImage: bookCover4,
    description: `Mathilde Fournier, atriz de teatro no sul da França, vive entre os bastidores e as sombras. Aos 36 anos, está habituada ao silêncio da coxia, às vozes que ecoam do palco e às paixões que só existem na ficção. Sua vida muda ao conhecer Adrien Leclerc, um professor de literatura de 51 anos, casado, culto, metódico — e irremediavelmente atraído por sua voz. O encontro acontece numa conferência sobre tragédia clássica, quando Mathilde interpreta um monólogo de Racine e Adrien faz uma leitura apaixonada sobre o tempo como força destrutiva. A atração entre eles é imediata, mas contida. O desejo cresce em cartas trocadas em segredo, encontros furtivos em trens, cafés, e na penumbra das salas de ensaio. O romance, embora arrebatador, é uma dança à beira do abismo. Ambos vivem conscientes do que pode ser perdido, mas incapazes de resistir. O tempo — símbolo recorrente entre eles — ora parece suspenso, ora se torna uma lâmina silenciosa. A tragédia se concretiza quando a esposa de Adrien, há tempos mergulhada em um silêncio doloroso, descobre uma das cartas que ele escreveu a Mathilde. Sem confrontos, sem escândalos, ela tira a própria vida. A notícia quebra o encantamento. O romance é interrompido, sufocado pela culpa, pela dor e pela exposição brutal da consequência. O amor, que antes parecia lírico, agora precisa atravessar o peso insuportável do real.`,
    fragments: [
      "Adrien, às vezes penso que o tempo só nos foi dado para que aprendêssemos a nos despedir. Mas eu, tola de palco, quero dizer sempre: fique.",
      "Mathilde, sua voz permanece em mim como uma cicatriz. Cada vez que releio suas palavras, sinto que estou perdendo o fôlego e encontrando sentido ao mesmo tempo.",
      "A coxia é minha morada e minha prisão. Só nos bastidores é possível amar alguém como você — no improviso, na penumbra, no interdito.",
      "Você fala do tempo como lâmina, Adrien. Mas há dias em que ele é brasa: queima lentamente enquanto fingimos que ainda há futuro.",
      "Hoje, ao ver sua carta repousando entre os livros, imaginei que fosse o próprio Racine a me acusar. Quantas Fedras cabem em uma mulher?",
      "Perdão por amar com mãos trêmulas. Perdão por não saber te oferecer paz. Meu amor é tumulto, mas nunca mentira.",
      "A vida com ela era um jardim abandonado. Mas a culpa agora floresce ali com espinhos. E mesmo assim, penso em você ao acordar.",
      "Mathilde, se esta for nossa última carta, que ela chegue a ti como um sopro — não como lâmina. Que seja memória, não ferida.",
      "Queria ter conhecido você antes da responsabilidade, antes da culpa, quando ainda éramos apenas carne e poesia.",
      "Talvez o tempo nos perdoe. Ou talvez nos engula, como engole tudo o que é frágil e ardente. Ainda assim, te amo.",
    ],
  },
  {
    id: "4",
    title: "Relato e Asfalto: Estrada Transiberiana",
    author: "Lena Matsuoka",
    year: 2019,
    synopsis:
      "Durante três meses, Lena Matsuoka percorreu mais de 9.000 km pela estrada Transiberiana, da Rússia Europeia ao extremo leste do país, em um carro velho e solitário. Neste livro, ela reúne relatos íntimos sobre solidão, paisagens desmedidas, encontros improváveis e o que resta de si quando o horizonte nunca termina.",
    coverImage: bookCover6,
    description:
      "'Relato e Asfalto' é um livro de memórias, crônicas e reflexões poéticas de Lena Matsuoka, que atravessou a imensa e gelada extensão da estrada Transiberiana sozinha, guiando um Lada antigo adaptado como casa e abrigo. A narrativa começa em Moscou, onde Lena decide partir após o fim abrupto de um relacionamento e de um ciclo pessoal sufocante. Ao longo de mais de 9.000 km, a autora registra em palavras e imagens as transformações sutis da paisagem, o passar do tempo entre florestas boreais, desertos de neve e vilarejos esquecidos. Cada parada — seja em Irkutsk, Novosibirsk, Chita ou Vladivostok — oferece uma pequena história: um encontro com um pastor de renas, uma conversa silenciosa com uma bibliotecária, o gosto amargo de um chá num dia de -30 °C. Lena fala da solidão como algo concreto, da estrada como metáfora para aquilo que nunca se alcança, e do silêncio — interno e externo — como companhia constante. É um livro sobre movimento e paralisia, sobre estar longe de tudo e, ao mesmo tempo, mais próxima de si.",
    fragments: [
      "Dia 4 – Moscou: Deixei o anel no parapeito da janela do hotel. Não foi um gesto dramático. Só me dei conta, ao descer as escadas, que a mão já parecia mais leve. Como o carro, que ainda cheira a oficina e promessa.",
      "Dia 11 – Yekaterinburg: A cidade me recebeu com névoa e uma garçonete que me chamou de 'devushka triste'. Sorri. Talvez tenha sido o primeiro sorriso em dias.",
      "Dia 18 – Krasnoyarsk: Vi um campo congelado tão vasto que duvidei da existência de bordas no mundo. A estrada se estreitava como um pensamento fixo. Dormi ouvindo o ranger do motor como se fosse uma canção de ninar.",
      "Dia 30 – Irkutsk: Uma senhora me ofereceu sopa quente e me falou sobre seu filho que foi embora pra Coreia. Nunca mais voltou. Quando fui dormir, sonhei com as janelas da casa dela: todas voltadas para o nada branco.",
      "Dia 47 – Lago Baikal: Mergulhei os pés no gelo só pra lembrar que estava viva. Doeu. Mas depois pareceu que meu corpo todo respirava outra língua. O lago parecia me contar segredos que eu não tinha vocabulário pra entender.",
      "Dia 70 – Chita: Comecei a falar sozinha. E me responder. O silêncio aqui é tão denso que minha voz parece uma transgressão.",
      "Dia 89 – Vladivostok: Cheguei ao fim e não chorei. Talvez porque entendi que não existe 'fim' em uma estrada. Só uma curva um pouco mais fechada.",
    ],
  },
  {
    id: "5",
    title: "Fragmentos de Tinta e Sombras",
    author: "Rafael Cobalto",
    year: 2002,
    synopsis:
      "Fragmentos de Tinta e Sombras narra a derrocada poética e insana de Elias, um artista plástico que, diante da fome, da solidão e do fracasso, desenvolve a obsessão de alimentar-se com tinta. Entre cores engolidas e memórias dolorosas, ele mergulha numa espiral onde arte e loucura se tornam indistinguíveis.",
    coverImage: bookCover2,
    description:
      "Na periferia de uma cidade sem nome, entre paredes úmidas e telas inacabadas, vive Elias — um artista plástico talentoso, mas esquecido, cujo ateliê é feito de restos e cuja arte nunca encontrou comprador. Sua vida se desmancha lentamente: as contas se empilham, os afetos se esvaem, e os quadros permanecem invisíveis ao mundo. Quando sua fome se torna literal e a tinta parece mais nutritiva que qualquer alimento, Elias cede ao impulso estranho de engolir suas cores. Cada cor carrega uma lembrança, um sentimento, uma dor. O azul ultramar o leva ao silêncio da infância; o carmim, a um amor impossível; o preto, ao abismo crescente dentro de si. Aos poucos, sua sanidade escorre pelas bordas das molduras, e ele já não distingue o real do simbólico. É através dessa espiral de miséria, criação e delírio que o livro conduz o leitor, entre pinceladas poéticas e uma sombra cada vez mais densa.",
    fragments: [
      "Engoli o azul. Ele queimou minha garganta com a calma de um céu que nunca conheci.",
      "A fome não era pelo pão — era por presença. E nenhuma visita chegou, só o vermelho. Então bebi o carmim até esquecer teu nome.",
      "A tinta preta escorria da minha boca como se eu tivesse gritado silêncio.",
      "As cores me chamavam pelo nome, mas ninguém mais o fazia. Comecei a responder apenas a elas.",
      "Na parede, uma tela em branco me encarava como uma sepultura ainda não cavada.",
      "À noite, sonho que meus ossos se transformam em pincéis. Acordo com a boca manchada e a alma seca.",
      "Cada quadro era um corpo. Cada traço, um pedido de socorro que ninguém soube ler.",
    ],
  },
  {
    id: "6",
    title: "Chuva Fina",
    author: "Lee Su-Ho",
    year: 2015,
    synopsis:
      "Em uma Seul abafada pelo verão, Jiho, um adolescente introspectivo, descobre-se apaixonado pelo melhor amigo, Doyun. Entre ruas molhadas, mangás compartilhados e silêncios cúmplices, Chuva Fina é uma história sobre o amor que insiste mesmo quando não sabe se pode existir.",
    coverImage: bookCover5,
    description:
      "Jiho tem dezesseis anos e carrega no corpo a delicadeza do que não foi dito. Em casa, o pai raramente está presente e a mãe vive mergulhada no trabalho. Na escola, Jiho é discreto, quase invisível. Sua única certeza é Doyun — o melhor amigo desde a infância, com quem divide tardes inteiras jogando no fliperama, ouvindo rock japonês e escapando do peso de crescer. Mas à medida que o verão avança e as chuvas finas de julho caem como um véu constante sobre a cidade, Jiho começa a perceber que seu sentimento por Doyun vai além da amizade. O problema não é apenas o medo de ser rejeitado — é o medo de perder o único vínculo que o ancora ao mundo. Enquanto as estações mudam, Jiho enfrenta os primeiros abalos da identidade, da sexualidade e da vergonha. Em meio a tudo isso, descobre que Doyun também carrega cicatrizes invisíveis: um lar violento, uma tristeza que não tem nome e um cansaço maior do que deveria caber em um adolescente. Chuva Fina é um romance sutil e comovente, escrito em forma de diário, sobre os amores que nascem nos intervalos, os silêncios que dizem mais do que palavras e a coragem de existir mesmo quando o mundo parece não ter lugar para quem sente demais.",
    fragments: [
      "22 de junho. Hoje o Doyun encostou o ombro no meu no metrô. Foi um gesto pequeno, distraído, mas fiquei o resto da viagem com medo de respirar e estragar aquele momento. Às vezes, a vida parece suportável só por cinco segundos assim.",
      "25 de junho. Eu queria ser só um pouco mais invisível. Ou um pouco mais corajoso. Mas viver nesse meio-termo dói. É como ficar parado no ponto, esperando um trem que talvez nunca venha — e ainda assim não conseguir ir embora.",
      "1º de julho. A chuva caiu o dia todo. Acho que gosto de dias assim. Todo mundo parece triste, então eu me escondo melhor. Doyun me emprestou o casaco dele quando viu que eu estava tremendo. Guardei o cheiro o dia inteiro como se fosse um segredo.",
      "4 de julho. Às vezes acho que meu peito não tem espaço suficiente. Tem coisas demais aqui dentro. Queria contar pra ele. Queria dizer: 'você é o único lugar onde não sinto vontade de desaparecer'. Mas não sei se isso é justo com ele.",
      "8 de julho. Doyun disse que não vai mais morar aqui perto. A mãe dele conseguiu uma transferência. Fingi que estava feliz por ele. Sorri como se aquilo não estivesse quebrando alguma parte dentro de mim que eu nem sabia o nome.",
      "12 de julho. Guardei uma foto nossa dentro de um mangá antigo. Só eu sei que está lá. É como esconder um pedaço do que fomos — ou do que eu queria que fôssemos — num mundo onde ninguém mais pode tocar.",
      "15 de julho. A cidade continua molhada. E eu também. De silêncio, de medo, de amor não dito. Acho que não existe palavra pra isso.",
    ],
  },
];
