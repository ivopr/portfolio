export const locales = ["en", "pt"] as const
export type Locale = (typeof locales)[number]
export const hasLocale = (l: string): l is Locale => (locales as readonly string[]).includes(l)

type T = Record<Locale, string>
type Link = { label: string; href: string }

export type Project = {
  id: string
  years: [number, (number | null)?]
  title: string
  org: T
  body: T
  stack: string[]
  links?: Link[]
}

export type Role = { years: [number, (number | null)?]; role: T; org: T; note?: T }

export const ui = {
  en: {
    title: "Ivo Vieira: research software developer",
    description:
      "Developer and scientific researcher in Porto Velho building web tools for molecular dynamics, drug discovery, health AI, and geospatial analysis.",
    thesis: "Ivo Vieira, developer and scientific researcher.",
    now: "now",
    spec: [
      ["Now", "Test Developer II at Sidia · Scientific researcher at Fiotec / Fiocruz Rondônia"],
      ["Before", "GIS developer at SEDAM, Rondônia's environmental secretariat"],
      ["Published", "5 peer-reviewed papers, 2 as first author"],
      ["Based in", "Porto Velho, Rondônia, Brazil"],
    ],
    workHeading: "Selected work",
    figure: "Fig.",
    pipeline: [
      ["Set up the system", "browser"],
      ["Queue the job", "Flask · Celery"],
      ["Run the simulation", "GROMACS"],
      ["Follow the results", "browser"],
    ],
    pipelineCaption: "A molecular dynamics run in Visual Dynamics, without a terminal.",
    specKeys: { stack: "Stack", org: "Where", papers: "Papers", cites: "Citations" },
    cites: "111 on Scopus (BMC Bioinformatics, 2023)",
    moreHeading: "More open source",
    paperHeading: "Publications",
    firstAuthor: "first author",
    experienceHeading: "Experience",
    educationHeading: "Education",
    toolkitHeading: "Toolkit",
    toolkit: {
      "Languages": ["TypeScript", "JavaScript", "Python", "Go", "HTML", "CSS"],
      "Front-end": ["React", "React Native", "Next.js", "Tailwind", "Mantine", "Tamagui", "Framer Motion", "MobX State Tree"],
      "Back-end & data": ["Node.js", "Nest.js", "Express", "Flask", "FastAPI", "Prisma", "PostgreSQL", "Celery", "BullMQ", "gRPC", "tRPC"],
      "Science & ops": ["GROMACS", "QGIS", "Traefik", "Prometheus", "Grafana", "Git"],
    } as Record<string, string[]>,
    aboutHeading: "About",
    about: [
      "I'm Ivo, a developer with a Computer Science degree from UNIR. I started programming at 12. Since 2021 I've been a scientific researcher at Fiocruz Rondônia's Bioinformatics and Medicinal Chemistry Lab (LABIOQUIM), through Fiotec, turning command-line research pipelines into web applications people can run without a terminal, and building AI tools for disease prediction.",
      "My other track is geospatial: from 2024 to 2025 I maintained SEDAM's GeoPortal and built its companion mobile app. Since 2025 I'm a Test Developer at Sidia. I reach for Next.js, TypeScript, Node.js, NestJS, Python, and Flask, and I'm happy to learn whatever the problem needs.",
    ],
    personal: "Off the clock: video games, manga, and my cat.",
    contactHeading: "Contact",
    contact: "Hiring, or need software for your lab? I'm open to full-time roles and research collaborations.",
    footer: "The horrors persist, but so do I.",
    switchTo: "Português",
  },
  pt: {
    title: "Ivo Vieira: desenvolvedor de software científico",
    description:
      "Desenvolvedor e pesquisador científico em Porto Velho criando ferramentas web para dinâmica molecular, descoberta de fármacos, IA em saúde e análise geoespacial.",
    thesis: "Ivo Vieira, desenvolvedor e pesquisador científico.",
    now: "atual",
    spec: [
      ["Atual", "Desenvolvedor de Testes II no Sidia · Pesquisador científico na Fiotec / Fiocruz Rondônia"],
      ["Antes", "Desenvolvedor de SIG na SEDAM, Secretaria de Desenvolvimento Ambiental de Rondônia"],
      ["Publicações", "5 artigos revisados por pares, 2 como primeiro autor"],
      ["Base", "Porto Velho, Rondônia, Brasil"],
    ],
    workHeading: "Trabalhos selecionados",
    figure: "Fig.",
    pipeline: [
      ["Preparar o sistema", "navegador"],
      ["Enfileirar o job", "Flask · Celery"],
      ["Rodar a simulação", "GROMACS"],
      ["Acompanhar os resultados", "navegador"],
    ],
    pipelineCaption: "Uma execução de dinâmica molecular no Visual Dynamics, sem terminal.",
    specKeys: { stack: "Stack", org: "Onde", papers: "Artigos", cites: "Citações" },
    cites: "111 na Scopus (BMC Bioinformatics, 2023)",
    moreHeading: "Mais código aberto",
    paperHeading: "Publicações",
    firstAuthor: "primeiro autor",
    experienceHeading: "Experiência",
    educationHeading: "Formação",
    toolkitHeading: "Ferramentas",
    toolkit: {
      "Linguagens": ["TypeScript", "JavaScript", "Python", "Go", "HTML", "CSS"],
      "Front-end": ["React", "React Native", "Next.js", "Tailwind", "Mantine", "Tamagui", "Framer Motion", "MobX State Tree"],
      "Back-end e dados": ["Node.js", "Nest.js", "Express", "Flask", "FastAPI", "Prisma", "PostgreSQL", "Celery", "BullMQ", "gRPC", "tRPC"],
      "Ciência e operações": ["GROMACS", "QGIS", "Traefik", "Prometheus", "Grafana", "Git"],
    } as Record<string, string[]>,
    aboutHeading: "Sobre",
    about: [
      "Sou o Ivo, desenvolvedor e bacharel em Ciência da Computação pela UNIR. Comecei a programar aos 12 anos. Desde 2021 sou pesquisador científico no Laboratório de Bioinformática e Química Medicinal (LABIOQUIM) da Fiocruz Rondônia, pela Fiotec, transformando pipelines de linha de comando em aplicações web que qualquer pessoa usa sem terminal, e criando ferramentas de IA para predição de doenças.",
      "Minha outra frente é geoespacial: de 2024 a 2025 mantive o GeoPortal da SEDAM e desenvolvi seu aplicativo móvel companheiro. Desde 2025 sou Desenvolvedor de Testes no Sidia. Uso Next.js, TypeScript, Node.js, NestJS, Python e Flask, e aprendo o que o problema pedir.",
    ],
    personal: "Fora do trabalho: videogames, mangá e meu gato.",
    contactHeading: "Contato",
    contact: "Contratando, ou precisa de software para o seu laboratório? Estou aberto a vagas full-time e colaborações de pesquisa.",
    footer: "Os horrores persistem, mas eu também.",
    switchTo: "English",
  },
} satisfies Record<Locale, unknown>

export const links = {
  email: "mailto:hi@ivopr.com.br",
  github: "https://github.com/ivopr",
  linkedin: "https://www.linkedin.com/in/ivopr",
  lattes: "https://lattes.cnpq.br/5130583751808996",
}

const doi = (d: string) => `https://doi.org/${d}`

// newest first, from the Lattes CV (updated 2026-05-16)
export const papers = [
  {
    title: "Structural characterization and molecular interaction studies of a novel RNA aptamer-MC1R macromolecular system using integrated computational and experimental approaches",
    authors: "Nail HM, Soliman AG, Vieira IHP, Metwally K, Wang HMD",
    venue: "International Journal of Biological Macromolecules 366, 152256",
    year: 2026,
    doi: "10.1016/j.ijbiomac.2026.152256",
  },
  {
    title: "Application of Machine Learning in the Development of Fourth Degree Quantitative Structure-Activity Relationship Model for Triclosan Analogs Tested against Plasmodium falciparum 3D7",
    authors: "Guimarães RMS, Vieira IHP, Zanchi FB, Caceres RA, Zanchi FB",
    venue: "ACS Omega",
    year: 2024,
    doi: "10.1021/acsomega.4c05768",
  },
  {
    title: "New Features in Visual Dynamics 3.0",
    authors: "Vieira IHP, Mendonça EAM, Guariero FL, Guimarães RMS, Zanchi FB",
    venue: "Journal of Visualized Experiments",
    year: 2024,
    doi: "10.3791/66964",
    first: true,
  },
  {
    title: "A transfer learning approach to identify Plasmodium in microscopic images",
    authors: "Ramos JS, Vieira IHP, Rocha WS, Esquerdo RP, Watanabe CYV, Zanchi FB",
    venue: "PLOS Computational Biology 20, e1012327",
    year: 2024,
    doi: "10.1371/journal.pcbi.1012327",
  },
  {
    title: "Visual Dynamics: a WEB application for molecular dynamics simulation using GROMACS",
    authors: "Vieira IHP, Botelho EB, de Souza Gomes TJ, Kist R, Caceres RA, Zanchi FB",
    venue: "BMC Bioinformatics 24, 107",
    year: 2023,
    doi: "10.1186/s12859-023-05234-y",
    first: true,
  },
].map((p) => ({ ...p, href: doi(p.doi) }))

const fiocruz: T = { en: "Fiocruz Rondônia · LABIOQUIM", pt: "Fiocruz Rondônia · LABIOQUIM" }
const unir: T = { en: "Federal University of Rondônia (UNIR)", pt: "Universidade Federal de Rondônia (UNIR)" }
const gh = (repo: string): Link => ({ label: "GitHub", href: `${links.github}/${repo}` })

/** the featured project; rendered as Fig. 1 with its own spec table */
export const featured: Project & { papers: Link[] } = {
  id: "vd",
  years: [2022, null],
  title: "Visual Dynamics",
  org: fiocruz,
  body: {
    en: "A web platform that automates GROMACS molecular dynamics simulations, so researchers can set up, queue, and follow runs from the browser instead of a terminal. I built it end to end and handled its DevOps. Version 3.0 was published in JoVE in 2024.",
    pt: "Plataforma web que automatiza simulações de dinâmica molecular no GROMACS, para que pesquisadores configurem, enfileirem e acompanhem execuções pelo navegador, sem terminal. Construí de ponta a ponta e cuidei do DevOps. A versão 3.0 foi publicada na JoVE em 2024.",
  },
  stack: ["React", "Next.js", "PostgreSQL", "Prisma", "Tailwind", "Flask", "Celery", "GROMACS"],
  papers: [
    { label: "BMC Bioinformatics 2023", href: doi("10.1186/s12859-023-05234-y") },
    { label: "JoVE 2024", href: doi("10.3791/66964") },
  ],
}

export const projects: Project[] = [
  {
    id: "plasmo",
    years: [2021, null],
    title: "PlasmoQSAR & PlasmoIA",
    org: fiocruz,
    body: {
      en: "Software for prospecting inhibitors against Plasmodium falciparum and vivax. PlasmoQSAR calculates pEC50 and EC50% for candidate molecules; PlasmoIA uses convolutional networks to tell whether a cell is infected. I coordinated PAP-Universal 005/2021.",
      pt: "Software para prospecção de inibidores contra Plasmodium falciparum e vivax. O PlasmoQSAR calcula pEC50 e EC50% de moléculas candidatas; o PlasmoIA usa redes convolucionais para identificar se uma célula está infectada. Coordenei o PAP-Universal 005/2021.",
    },
    stack: ["Next.js", "Nest.js", "PostgreSQL", "Prisma", "BullMQ", "FastAPI"],
    links: [
      { label: "ACS Omega", href: doi("10.1021/acsomega.4c05768") },
      { label: "PLOS Comp Bio", href: doi("10.1371/journal.pcbi.1012327") },
    ],
  },
  {
    id: "geoportal",
    years: [2024, 2025],
    title: "SEDAM GeoPortal",
    org: { en: "Rondônia State Environmental Secretariat (SEDAM)", pt: "Secretaria de Estado de Desenvolvimento Ambiental (SEDAM)" },
    body: {
      en: "Maintained and improved the GeoPortal, SEDAM's in-house viewer and hub for the state's geographic information. Built its companion mobile app and looked after the data and web service infrastructure behind it.",
      pt: "Mantive e aprimorei o GeoPortal, visualizador e centralizador de informações geográficas desenvolvido na própria SEDAM. Desenvolvi seu aplicativo móvel companheiro e cuidei da infraestrutura de dados e de serviços web.",
    },
    stack: ["GIS", "Mobile", "Data infrastructure"],
  },
  // Hidden for now; uncomment to restore.
  // {
  //   id: "vazae",
  //   years: [2026],
  //   title: "Vazaê",
  //   org: { en: "Card game · Windows & Android", pt: "Jogo de cartas · Windows e Android" },
  //   body: {
  //     en: "A trick-taking card game with truco cards, played against bots. Go and Wails 3 with a React front end; CI ships Windows installers and Android APKs, and the test suite runs bot-vs-bot tournaments.",
  //     pt: "Jogo de vazas com as cartas e a força do truco, contra robôs. Go e Wails 3 com front-end em React; o CI gera instaladores Windows e APKs Android, e os testes rodam torneios entre robôs.",
  //   },
  //   stack: ["Go", "Wails", "React", "TypeScript"],
  //   links: [gh("vazae")],
  // },
  {
    id: "ictio",
    years: [2020, 2022],
    title: "Ictiobiometria",
    org: unir,
    body: {
      en: "An Android app that measures fish from a smartphone photo, with UNIR's Ichthyology and Fisheries Lab. It replaced tape-and-paper measurements at the Porto Velho fish market, used to track Rio Madeira reproductive migration.",
      pt: "Aplicativo Android que mede peixes a partir de uma foto do celular, com o Laboratório de Ictiologia e Pesca da UNIR. Substituiu as medições com fita e papel no Mercado de Peixes de Porto Velho, usadas para acompanhar a migração reprodutiva no Rio Madeira.",
    },
    stack: ["Android", "Computer vision"],
  },
  {
    id: "derun",
    years: [2021, 2022],
    title: "DERUN",
    org: unir,
    body: {
      en: "R&D on systems that compute efficient routes in urban networks, a UNIR partnership with industry.",
      pt: "Pesquisa e desenvolvimento de sistemas para definição de rotas eficientes em redes urbanas, parceria da UNIR com a indústria.",
    },
    stack: ["Algorithms", "Routing"],
  },
]

export const more: (Link & { note: T })[] = [
  { label: "qgis-theme-manager", href: `${links.github}/qgis-theme-manager`, note: { en: "QGIS plugin · 2026", pt: "Plugin QGIS · 2026" } },
]

export const experience: Role[] = [
  {
    years: [2025, null],
    role: { en: "Test Developer II", pt: "Desenvolvedor de Testes II" },
    org: { en: "Sidia Institute of Science and Technology", pt: "Sidia Instituto de Ciência e Tecnologia" },
  },
  {
    years: [2024, 2025],
    role: { en: "Geographic Information System developer", pt: "Desenvolvedor de Sistemas de Informação Geográfica" },
    org: { en: "SEDAM, Rondônia", pt: "SEDAM, Rondônia" },
  },
  {
    years: [2021, null],
    role: { en: "Scientific researcher", pt: "Pesquisador científico" },
    org: { en: "Fiotec · Fiocruz Rondônia, LABIOQUIM", pt: "Fiotec · Fiocruz Rondônia, LABIOQUIM" },
  },
  {
    years: [2019, 2021],
    role: { en: "PIBIC research fellow", pt: "Bolsista de iniciação científica (PIBIC)" },
    org: unir,
  },
]

export const education: Role[] = [
  { years: [2019, 2023], role: { en: "BSc Computer Science", pt: "Bacharelado em Ciência da Computação" }, org: unir },
  { years: [2021, 2022], role: { en: "Ignite React · 100h", pt: "Ignite React · 100h" }, org: { en: "Rocketseat", pt: "Rocketseat" } },
  { years: [2023], role: { en: "Computer Forensics (CFCT+) · 7h", pt: "Computação forense (CFCT+) · 7h" }, org: { en: "Udemy", pt: "Udemy" } },
]
