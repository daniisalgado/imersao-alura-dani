let dados = [
    {
        titulo: "Vitamina C Pura",
        descricao: "Poderoso antioxidante que ilumina a pele e combate manchas escuras.",
        link: "https://www.google.com/search?q=melhores+vitamina+c+rosto",
        tags: "skincare manchas iluminador antioxidante"
    },
    {
        titulo: "Microcorrente Facial",
        descricao: "O 'treino' do rosto. Pulsos elétricos que tonificam e fazem efeito lifting.",
        link: "https://www.google.com/search?q=aparelho+microcorrente+facial",
        tags: "gadget lifting tech rejuvenescimento"
    },
    {
        titulo: "Adesivo UV Smart",
        descricao: "Wearable que muda de cor quando você precisa reaplicar o protetor solar.",
        link: "https://www.google.com/search?q=adesivo+uv+inteligente",
        tags: "tecnologia wearable sol proteção"
    },
    {
        titulo: "Peeling Ultrassônico",
        descricao: "Espátula que usa ondas sonoras para limpar poros profundos sem dor.",
        link: "https://www.google.com/search?q=peeling+ultrassonico+aparelho",
        tags: "gadget limpeza poros acne tech"
    },
    {
        titulo: "Niacinamida B3",
        descricao: "O ativo multitarefa: controla oleosidade, reduz poros e fortalece a barreira.",
        link: "https://www.google.com/search?q=niacinamida+beneficios",
        tags: "skincare poros oleosidade ativo"
    },
    {
        titulo: "Ácido Hialurônico",
        descricao: "Molécula esponja que retém 1000x seu peso em água para hidratação profunda.",
        link: "https://www.google.com/search?q=acido+hialuronico+serum",
        tags: "hidratação pele seca ativo plump"
    },
    {
        titulo: "Beauty Fridge",
        descricao: "Geladeira inteligente para conservar seus séruns e máscaras na temperatura ideal.",
        link: "https://www.google.com/search?q=mini+geladeira+skincare",
        tags: "gadget acessório geladeira tech"
    },
    {
        titulo: "Gua Sha Elétrico",
        descricao: "A união da pedra de jade tradicional com vibração sônica e calor.",
        link: "https://www.google.com/search?q=gua+sha+eletrico",
        tags: "massagem lifting gadget tech"
    },
    {
        titulo: "Ácido Glicólico",
        descricao: "Esfoliante químico que remove células mortas e deixa a pele radiante.",
        link: "https://www.google.com/search?q=tonico+acido+glicolico",
        tags: "skincare esfoliação glow manchas"
    },
    {
        titulo: "Vaporizador Facial",
        descricao: "Nano-névoa iônica que abre os poros para uma limpeza de spa em casa.",
        link: "https://www.google.com/search?q=vaporizador+facial+nano",
        tags: "gadget limpeza spa poros"
    },
    {
        titulo: "Massageador de Olhos",
        descricao: "Óculos com massagem de ar e calor para reduzir olheiras e cansaço digital.",
        link: "https://www.google.com/search?q=massageador+de+olhos+tech",
        tags: "gadget olhos olheiras relaxamento"
    },
    {
        titulo: "Protetor em Bastão",
        descricao: "A febre do K-Beauty. Proteção solar em stick para reaplicar por cima da make.",
        link: "https://www.google.com/search?q=protetor+solar+bastao+coreano",
        tags: "k-beauty sol proteção prático"
    }
    ,{
        titulo: "Adesivos de Acne",
        descricao: "Curativos hidrocolóides invisíveis que absorvem a inflamação da espinha durante a noite.",
        link: "https://www.google.com/search?q=adesivo+pimple+patch",
        tags: "skincare acne tratamento sos"
    },
    {
        titulo: "Roller de Jade",
        descricao: "Pedra natural para massagem facial que reduz o inchaço matinal e estimula a circulação.",
        link: "https://www.google.com/search?q=roller+de+jade+original",
        tags: "massagem skincare natural relaxamento"
    },
    {
        titulo: "Sérum de Cafeína 5%",
        descricao: "Energia para o olhar. Reduz bolsas e pigmentação escura ao redor dos olhos.",
        link: "https://www.google.com/search?q=serum+cafeina+olhos",
        tags: "olhos olheiras skincare ativo"
    },
    {
        titulo: "Espelho de Bolsa LED",
        descricao: "Retoque sua maquiagem em qualquer lugar com iluminação profissional de estúdio.",
        link: "https://www.google.com/search?q=espelho+de+bolsa+com+led",
        tags: "gadget maquiagem acessório espelho"
    },
    {
        titulo: "Pedra Vulcânica",
        descricao: "Roller feito de pedra vulcânica real que absorve a oleosidade instantaneamente sem estragar a make.",
        link: "https://www.google.com/search?q=pedra+vulcanica+oleosidade",
        tags: "oleosidade maquiagem skincare prático"
    },
    {
        titulo: "Tônico Ácido Salicílico",
        descricao: "O inimigo nº 1 dos cravos. Desobstrui os poros e controla a produção de sebo.",
        link: "https://www.google.com/search?q=tonico+acido+salicilico",
        tags: "skincare acne poros oleosidade"
    },
    {
        titulo: "Touca de Cetim",
        descricao: "Protege seu cabelo durante o sono, evitando quebra, frizz e mantendo a hidratação.",
        link: "https://www.google.com/search?q=touca+de+cetim+beneficios",
        tags: "cabelo sono anti-frizz acessório"
    },
    {
        titulo: "Massageador T-Bar Ouro",
        descricao: "Vibração de alta frequência para firmar a pele e relaxar os músculos faciais tensionados.",
        link: "https://www.google.com/search?q=massageador+facial+t-bar+ouro",
        tags: "gadget massagem lifting ouro"
    },
    {
        titulo: "Protetor Solar em Pó",
        descricao: "A melhor forma de reaplicar proteção por cima da maquiagem. Matifica e protege.",
        link: "https://www.google.com/search?q=protetor+solar+em+po",
        tags: "maquiagem sol proteção prático"
    },
    {
        titulo: "Creme para Pescoço",
        descricao: "Fórmula específica para combater as linhas horizontais (Tech Neck) causadas por olhar para o celular.",
        link: "https://www.google.com/search?q=creme+para+pescoço+tech+neck",
        tags: "skincare corpo anti-idade específico"
    },
    {
        titulo: "Escova Secadora Íon",
        descricao: "Seca e modela ao mesmo tempo, liberando íons que dão brilho e reduzem a eletricidade estática.",
        link: "https://www.google.com/search?q=escova+secadora+ionizada",
        tags: "cabelo gadget tech styling"
    },
    {
        titulo: "Máscara Labial Noturna",
        descricao: "Hidratação profunda para lábios ressecados enquanto você dorme. Acorde com lábios de seda.",
        link: "https://www.google.com/search?q=mascara+labial+noturna",
        tags: "skincare lábios hidratação sono"
    },
    {
        titulo: "Dermaplaning Tool",
        descricao: "Lâmina de precisão para remover células mortas e a penugem facial (peach fuzz) em casa.",
        link: "https://www.google.com/search?q=dermaplaning+em+casa",
        tags: "skincare ferramenta esfoliação rosto"
    },
    {
        titulo: "Sérum de Cílios",
        descricao: "Peptídeos que estimulam o crescimento e o volume natural dos seus cílios.",
        link: "https://www.google.com/search?q=serum+crescimento+cilios",
        tags: "olhos cílios tratamento crescimento"
    },
    {
        titulo: "Toalha Demaquilante",
        descricao: "Tecnologia de microfibra que remove toda a maquiagem apenas com água morna.",
        link: "https://www.google.com/search?q=toalha+demaquilante+magica",
        tags: "maquiagem limpeza sustentável prático"
    },
  {
    "titulo": "Sérum de Vitamina C Pura Estabilizada",
    "descricao": "Poderoso antioxidante que uniformiza o tom da pele, neutraliza radicais livres e promove luminosidade.",
    "link": "https://www.google.com/search?q=S%C3%A9rum+de+Vitamina+C+Pura+Estabilizada",
    "tags": "skincare antioxidante luminosidade dermatologia"
  },
  {
    "titulo": "Máscara Facial LED para Fototerapia",
    "descricao": "Tratamento não invasivo domiciliar que utiliza comprimentos de onda específicos (azul, vermelho) para tratar acne e estimular colágeno.",
    "link": "https://www.google.com/search?q=M%C3%A1scara+Facial+LED+para+Fototerapia",
    "tags": "fototerapia led beauty tech rejuvenescimento"
  },
  {
    "titulo": "Ácido Glicólico 10% Esfoliante Noturno",
    "descricao": "Potencializa a renovação celular, melhorando a textura da pele e a aparência de poros e hiperpigmentações.",
    "link": "https://www.google.com/search?q=%C3%81cido+Glic%C3%B3lico+10%25+Esfoliante+Noturno",
    "tags": "renovação textura ácido esfoliação química"
  },
  {
    "titulo": "Aparelho de Microcorrente Lifting Facial",
    "descricao": "Dispositivo tecnológico que emite microcorrentes de baixa voltagem para tonificar os músculos faciais e redefinir o contorno.",
    "link": "https://www.google.com/search?q=Aparelho+de+Microcorrente+Lifting+Facial",
    "tags": "microcorrente lifting facial tech firmeza"
  },
  {
    "titulo": "Protetor Solar Facial com Tecnologia Blue Light",
    "descricao": "Defesa de amplo espectro contra raios UVA/UVB e proteção adicional contra a luz azul emitida por dispositivos eletrônicos.",
    "link": "https://www.google.com/search?q=Protetor+Solar+Facial+com+Tecnologia+Blue+Light",
    "tags": "proteção solar luz azul skincare dia"
  },
  {
    "titulo": "Óleo Capilar de Reparação com Bond-Building",
    "descricao": "Fórmula avançada que reconstrói as ligações químicas internas dos fios, reparando danos de processos térmicos e químicos.",
    "link": "https://www.google.com/search?q=%C3%93leo+Capilar+de+Repara%C3%A7%C3%A3o+com+Bond-Building",
    "tags": "cabelo reparação química tratamento"
  },
  {
    "titulo": "Base com Complexo Prebiótico",
    "descricao": "Maquiagem de alta performance que equilibra o microbioma da pele, mantendo a hidratação e prevenindo irritações.",
    "link": "https://www.google.com/search?q=Base+com+Complexo+Prebi%C3%B3tico",
    "tags": "maquiagem prebiótico tratamento pele"
  },
  {
    "titulo": "Dispositivo de Limpeza Ultrassônica",
    "descricao": "Utiliza vibrações sônicas de alta frequência para desobstruir poros e promover uma limpeza mais profunda do que a manual.",
    "link": "https://www.google.com/search?q=Dispositivo+de+Limpeza+Ultrass%C3%B4nica",
    "tags": "limpeza profunda ultrassônico tech"
  },
  {
    "titulo": "Colágeno Hidrolisado com Peptídeos Bioativos",
    "descricao": "Suplemento oral com alta biodisponibilidade que visa a melhora da elasticidade, firmeza e densidade da pele de dentro para fora.",
    "link": "https://www.google.com/search?q=Col%C3%A1geno+Hidrolisado+com+Pept%C3%ADdeos+Bioativos",
    "tags": "wellness nutricosmético colágeno oral"
  },
  {
    "titulo": "Secador de Cabelo Iônico de Alta Velocidade",
    "descricao": "Gera íons negativos para reduzir o tempo de secagem, minimizar o frizz e proteger o cabelo do calor excessivo.",
    "link": "https://www.google.com/search?q=Secador+de+Cabelo+I%C3%B4nico+de+Alta+Velocidade",
    "tags": "cabelo iônico styling tech"
  },
  {
    "titulo": "Corretivo Serum com Niacinamida",
    "descricao": "Híbrido de maquiagem e skincare que camufla olheiras e imperfeições enquanto trata a pele com ativos calmantes.",
    "link": "https://www.google.com/search?q=Corretivo+Serum+com+Niacinamida",
    "tags": "maquiagem niacinamida tratamento cobertura"
  },
  {
    "titulo": "Bálsamo de Limpeza Sólido (Cleansing Balm)",
    "descricao": "Primeiro passo da rotina de limpeza dupla, remove efetivamente maquiagem à prova d'água e protetor solar sem ressecar.",
    "link": "https://www.google.com/search?q=B%C3%A1lsamo+de+Limpeza+S%C3%B3lido",
    "tags": "skincare double cleanse rotina hidratação"
  },
  {
    "titulo": "Difusor de Aromas Inteligente com Sincronização",
    "descricao": "Dispositivo de bem-estar que permite controlar a liberação de óleos essenciais e criar rotinas de aromaterapia via aplicativo.",
    "link": "https://www.google.com/search?q=Difusor+de+Aromas+Inteligente+com+Sincroniza%C3%A7%C3%A3o",
    "tags": "bem-estar aromaterapia smart tech"
  },
  {
    "titulo": "Primer Blur Efeito Soft Focus",
    "descricao": "Cria um véu que desfoca opticamente poros e linhas finas, otimizando a durabilidade e o acabamento da maquiagem.",
    "link": "https://www.google.com/search?q=Primer+Blur+Efeito+Soft+Focus",
    "tags": "maquiagem primer soft focus acabamento"
  },
  {
    "titulo": "Massageador Corporal de Percussão (Deep Tissue)",
    "descricao": "Recuperação muscular avançada que atinge camadas profundas, aliviando tensões e otimizando a circulação.",
    "link": "https://www.google.com/search?q=Massageador+Corporal+de+Percuss%C3%A3o+Deep+Tissue",
    "tags": "bem-estar recuperação muscular tech"
  },
  {
    "titulo": "Hidratante com Ácido Hialurônico Multimolecular",
    "descricao": "Fornece hidratação em diferentes profundidades da epiderme, garantindo preenchimento e retenção hídrica prolongada.",
    "link": "https://www.google.com/search?q=Hidratante+com+%C3%81cido+Hialur%C3%B4nico+Multimolecular",
    "tags": "skincare hidratação hialurônico dermatologia"
  },
  {
    "titulo": "Escova Alisadora Térmica com Cerâmica",
    "descricao": "Ferramenta de styling que combina o calor da prancha com o formato da escova para alisar os fios rapidamente com menos dano.",
    "link": "https://www.google.com/search?q=Escova+Alisadora+T%C3%A9rmica+com+Cer%C3%A2mica",
    "tags": "cabelo styling alisamento calor"
  },
  {
    "titulo": "Dispositivo de Terapia de Luz Vermelha para o Corpo",
    "descricao": "Usa luz vermelha de baixa intensidade para reduzir inflamação, acelerar a cicatrização e promover a regeneração celular corporal.",
    "link": "https://www.google.com/search?q=Dispositivo+de+Terapia+de+Luz+Vermelha+para+o+Corpo",
    "tags": "terapia luz vermelha wellness tech"
  },
  {
    "titulo": "Tônico Capilar com Minoxidil e Peptídeos",
    "descricao": "Fórmula potencializada para o tratamento da queda capilar, estimulando o folículo e aumentando a densidade dos fios.",
    "link": "https://www.google.com/search?q=T%C3%B4nico+Capilar+com+Minoxidil+e+Pept%C3%ADdeos",
    "tags": "cabelo crescimento queda dermatologia"
  },
  {
    "titulo": "Espelho de Maquiagem Smart com Análise de Pele",
    "descricao": "Equipamento que simula diferentes iluminações e usa IA para analisar a pele, detectando manchas, poros e rugas.",
    "link": "https://www.google.com/search?q=Espelho+de+Maquiagem+Smart+com+An%C3%A1lise+de+Pele",
    "tags": "beauty tech análise espelho maquiagem"
  }
]