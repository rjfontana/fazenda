const senhas = {
  "Inglês": "123ing",
  "Computação": "123comp",
  "Educação Social": "123edu",
  "Itinerários Formativos": "123itf",
  "Matemática": "123mat",
  "Física": "123fis"
};

const imagensQuiz = [
  "12.png", "13.png", "14.png", "15.png", "16.png", "17.png", "18.png",
  "19.png", "20.png", "21.png", "22.png", "23.png", "24.png", "25.png"
];

const quizzes = {
  "Física": [
    {
      contexto: "🔎 O índice de refração (n) mede quanto a luz diminui sua velocidade em um meio.",
      q: "O que representa o índice de refração (n) de um meio?",
      a: "c",
      alts: [
        "a) A densidade do material",
        "b) A frequência da luz nele",
        "c) A razão entre a velocidade da luz no vácuo e no meio",
        "d) A energia da luz visível"
      ]
    },
    {
      contexto: "🔎 A fórmula usada para calcular o índice de refração é n = c / v.",
      q: "Qual a fórmula correta para calcular o índice de refração?",
      a: "d",
      alts: [
        "a) n = v / c",
        "b) n = c ⋅ v",
        "c) n = c + v",
        "d) n = c / v"
      ]
    },
    {
      contexto: "🔎 Quanto maior o índice, mais lenta é a luz no meio.",
      q: "Se o índice de refração é alto, o que isso indica?",
      a: "c",
      alts: [
        "a) A luz viaja mais rápido",
        "b) A luz tem mais energia",
        "c) A velocidade da luz no meio é menor",
        "d) A luz não entra no material"
      ]
    },
    {
      contexto: "🔎 O ar é um dos meios com menor resistência à luz.",
      q: "Qual dos meios tem o menor índice de refração?",
      a: "b",
      alts: [
        "a) Água",
        "b) Ar",
        "c) Vidro",
        "d) Diamante"
      ]
    },
    {
      contexto: "🔎 Um índice de 2 significa que a luz é duas vezes mais lenta que no vácuo.",
      q: "Se o índice de refração é 2, o que isso indica?",
      a: "c",
      alts: [
        "a) A luz viaja 2x mais rápido",
        "b) A luz muda de cor",
        "c) A velocidade da luz no meio é c/2",
        "d) A frequência da luz dobra"
      ]
    },
    {
      contexto: "🔎 Como é uma razão entre velocidades, n não tem unidade.",
      q: "O que significa dizer que o índice de refração é adimensional?",
      a: "b",
      alts: [
        "a) Tem duas dimensões",
        "b) Não possui unidade",
        "c) Muda com o tempo",
        "d) É constante apenas no ar"
      ]
    },
    {
      contexto: "🔎 Diamantes têm alto índice devido à sua estrutura densa.",
      q: "Qual material oferece maior resistência à propagação da luz?",
      a: "d",
      alts: [
        "a) Água",
        "b) Álcool",
        "c) Vidro",
        "d) Diamante"
      ]
    },
    {
      contexto: "🔎 O ar tem índice de refração muito próximo de 1.",
      q: "O valor aproximado do índice de refração do ar é:",
      a: "c",
      alts: [
        "a) 2,42",
        "b) 1,5",
        "c) 1",
        "d) 0"
      ]
    },
    {
      contexto: "🔎 A água tem índice de refração ≈ 1,33.",
      q: "O índice de refração da água é aproximadamente:",
      a: "b",
      alts: [
        "a) 1",
        "b) 1,33",
        "c) 2",
        "d) 1,5"
      ]
    },
    {
      contexto: "🔎 Meios com maior índice reduzem mais a velocidade da luz.",
      q: "A luz se propaga mais lentamente em qual dos meios abaixo?",
      a: "d",
      alts: [
        "a) Ar",
        "b) Água",
        "c) Vidro",
        "d) Diamante"
      ]
    },
    {
      contexto: "🔎 Maior desvio ocorre com maior contraste entre os índices.",
      q: "Qual material causa maior desvio na luz ao entrar nele?",
      a: "d",
      alts: [
        "a) Ar",
        "b) Água",
        "c) Vidro",
        "d) Diamante"
      ]
    },
    {
      contexto: "🔎 Do ar (n=1) para o vidro (n=1.5), a luz diminui sua velocidade.",
      q: "O que acontece com a velocidade da luz ao passar do ar para o vidro?",
      a: "c",
      alts: [
        "a) Aumenta",
        "b) Permanece igual",
        "c) Diminui",
        "d) É refletida totalmente"
      ]
    },
    {
      contexto: "🔎 v = c/n → c = 3×10⁸ m/s, n = 1,33.",
      q: "Qual a velocidade da luz na água (n = 1,33)?",
      a: "a",
      alts: [
        "a) 2,26×10⁸ m/s",
        "b) 3,99×10⁸ m/s",
        "c) 1,33×10⁸ m/s",
        "d) 2,5×10⁸ m/s"
      ]
    }
  ],
  "Inglês": [
    { contexto: "Imagem 12 – Fazenda vazia, dividida entre dia e noite", q: "What is the opposite of “day”?", a: "a", alts: [
      "a) Night",
      "b) Dark",
      "c) Moon",
      "d) Sleep"
    ]},
    { contexto: "Imagem 13 – Céu noturno com lua", q: "What can you see in the night sky?", a: "b", alts: [
      "a) Sun",
      "b) Stars",
      "c) Clouds",
      "d) Trees"
    ]},
    { contexto: "Imagem 14 – Árvore de maçã aparece", q: "What color are apples usually?", a: "b", alts: [
      "a) Blue",
      "b) Red",
      "c) Black",
      "d) Purple"
    ]},
    { contexto: "Imagem 15 – Cenouras brotando", q: "Which sentence is correct?", a: "c", alts: [
      "a) The carrots is growing.",
      "b) The carrots are grow.",
      "c) The carrots are growing.",
      "d) The carrot are growing."
    ]},
    { contexto: "Imagem 16 – Sol forte, iluminação intensa", q: "How is the weather in the picture?", a: "b", alts: [
      "a) It’s raining.",
      "b) It’s sunny.",
      "c) It’s snowing.",
      "d) It’s cloudy."
    ]},
    { contexto: "Imagem 17 – Fazendeiro regando plantas", q: "What is the farmer doing?", a: "a", alts: [
      "a) He is watering the plants.",
      "b) He waters the sun.",
      "c) He planting trees.",
      "d) He is sleep."
    ]},
    { contexto: "Imagem 18 – Criaturas mágicas aparecem", q: "What kind of creatures appear?", a: "b", alts: [
      "a) Robots",
      "b) Magical creatures",
      "c) People",
      "d) Monsters"
    ]},
    { contexto: " – Celeiro surge na fazenda", q: "What is a “barn”?", a: "c", alts: [
      "a) A house for people",
      "b) A place for sleeping",
      "c) A farm building for animals and tools",
      "d) A city building"
    ]},
    { contexto: " – Vaca e porco aparecem", q: "Which of these is NOT a farm animal?", a: "c", alts: [
      "a) Cow",
      "b) Pig",
      "c) Lion",
      "d) Chicken"
    ]},
    { contexto: " – Novas criaturas mágicas tipo fadas-cenouras", q: "What is a “fairy”?", a: "a", alts: [
      "a) A magical being with wings",
      "b) A farm machine",
      "c) A tree",
      "d) A kind of food"
    ]},
    { contexto: " – Estabilidade: Fazendeiro, vaca, galinha e pintinho", q: "Which sentence is correct?", a: "b", alts: [
      "a) The farmer and animals is happy.",
      "b) The animals are happy.",
      "c) The animal are happy.",
      "d) The farmers are happy."
    ]},
    { contexto: "– Abóboras pequenas aparecem", q: "What are “pumpkins”?", a: "b", alts: [
      "a) A type of flower",
      "b) A type of fruit",
      "c) A color",
      "d) A bug"
    ]},
    { contexto: " – Abóboras crescidas, pomar visível", q: "Which sentence is in the past tense?", a: "c", alts: [
      "a) The plants grow fast.",
      "b) The plants grows fast.",
      "c) The plants grew fast.",
      "d) The plants growing fast."
    ]},
    { contexto: " – Fazenda totalmente mágica", q: "How does the farm look now?", a: "c", alts: [
      "a) Empty",
      "b) Dark",
      "c) Magical and full of life",
      "d) Quiet and cold"
    ]}
  ],
  "Computação": [
    { contexto: "", q: "Qual é a função principal do processador (CPU)?", a: "b", alts: ["a) Armazenar arquivos","b) Processar dados e instruções","c) Reproduzir som","d) Exibir imagens"] },
    { contexto: "", q: "O que significa a sigla HTML?", a: "b", alts: ["a) High Text Memory Language","b) HyperText Markup Language","c) Hyper Transfer Main Link","d) Home Tool Markup Line"] },
    { contexto: "", q: "Qual dos itens abaixo é um sistema operacional?", a: "b", alts: ["a) Excel","b) Windows","c) Photoshop","d) Google"] },
    { contexto: "", q: "Qual linguagem é usada para desenvolver aplicativos Android?", a: "c", alts: ["a) Python","b) Swift","c) Java","d) Ruby"] },
    { contexto: "", q: "Um exemplo de hardware é:", a: "b", alts: ["a) Navegador","b) Impressora","c) Editor de texto","d) Antivírus"] },
    { contexto: "", q: "O que é um software?", a: "c", alts: ["a) Um tipo de monitor","b) Um cabo de rede","c) Programa de computador","d) Teclado digital"] },
    { contexto: "", q: "Qual dessas opções representa um navegador de internet?", a: "b", alts: ["a) Word","b) Chrome","c) Paint","d) Excel"] },
    { contexto: "", q: "O que faz um antivírus?", a: "b", alts: ["a) Instala programas","b) Protege contra ameaças","c) Melhora o Wi-Fi","d) Aumenta o som"] },
    { contexto: "", q: "Para acessar um site, usamos:", a: "b", alts: ["a) IP","b) URL","c) RAM","d) CPU"] },
    { contexto: "", q: "A memória RAM serve para:", a: "c", alts: ["a) Armazenar arquivos permanentemente","b) Controlar o mouse","c) Executar temporariamente dados em uso","d) Gravar vídeos"] },
    { contexto: "", q: "O que é um algoritmo?", a: "b", alts: ["a) Um aplicativo de rede","b) Um conjunto de instruções","c) Um modelo de computador","d) Um programa gráfico"] },
    { contexto: "", q: "Qual comando apaga arquivos no Windows?", a: "b", alts: ["a) CTRL + S","b) DELETE","c) CTRL + C","d) ENTER"] },
    { contexto: "", q: "Qual linguagem é usada para criar sites?", a: "b", alts: ["a) Excel","b) HTML","c) Windows","d) PowerPoint"] }
  ],
  "Educação Social": [
    { contexto: "", q: "O que é cidadania?", a: "c", alts: ["a) Um título de eleitor","b) Um documento","c) O exercício dos direitos e deveres na sociedade","d) Um benefício do governo"] },
    { contexto: "", q: "O Estatuto da Criança e do Adolescente (ECA) garante:", a: "b", alts: ["a) Direito ao trabalho infantil","b) Direito à educação e proteção","c) Direito a dirigir","d) Direito à prisão imediata"] },
    { contexto: "", q: "Qual é a principal função da escola na sociedade?", a: "c", alts: ["a) Controlar a economia","b) Ensinar regras militares","c) Promover conhecimento e convivência","d) Censurar opiniões"] },
    { contexto: "", q: "O que é preconceito?", a: "c", alts: ["a) Uma forma de elogio","b) Opinião neutra","c) Julgamento sem conhecimento prévio","d) Uma política pública"] },
    { contexto: "", q: "A empatia é:", a: "c", alts: ["a) Desentendimento","b) Falta de emoção","c) Se colocar no lugar do outro","d) Evitar o contato"] },
    { contexto: "", q: "O que é cultura?", a: "c", alts: ["a) Apenas arte e música","b) A roupa que usamos","c) Conjunto de valores, tradições e saberes de um povo","d) Lei escrita"] },
    { contexto: "", q: "A desigualdade social está relacionada a:", a: "b", alts: ["a) Diferenças biológicas","b) Distribuição injusta de recursos","c) Clima e geografia","d) Escolha pessoal"] },
    { contexto: "", q: "A violência doméstica pode afetar:", a: "c", alts: ["a) Apenas adultos","b) Só homens","c) Crianças, mulheres e idosos","d) Só estrangeiros"] },
    { contexto: "", q: "Um exemplo de direito humano é:", a: "b", alts: ["a) Multa de trânsito","b) Liberdade de expressão","c) Suspensão escolar","d) Concurso público"] },
    { contexto: "", q: "Educação antirracista é:", a: "c", alts: ["a) Um conteúdo opcional","b) Uma ideologia radical","c) Uma prática para combater o racismo","d) Um conteúdo de matemática"] },
    { contexto: "", q: "O que é inclusão social?", a: "c", alts: ["a) Separar grupos diferentes","b) Garantir direitos para poucos","c) Integrar todos à sociedade de forma justa","d) Cadastrar pessoas no sistema"] },
    { contexto: "", q: "Bullying é:", a: "c", alts: ["a) Incentivo entre colegas","b) Brincadeira leve","c) Agressão repetida e intencional","d) Prática esportiva"] },
    { contexto: "", q: "Qual é a importância do respeito às diferenças?", a: "c", alts: ["a) Impor ideias","b) Evitar convivência","c) Promover convivência pacífica","d) Uniformizar opiniões"] }
  ],
  "Itinerários Formativos": [
    { contexto: "", q: "O que são os Itinerários Formativos na BNCC?", a: "b", alts: ["a) Provas finais","b) Trilhas de aprendizagem personalizadas","c) Regras disciplinares","d) Métodos antigos de ensino"] },
    { contexto: "", q: "Um Projeto de Vida está ligado a:", a: "b", alts: ["a) Escolher roupa","b) Planejar seu futuro pessoal e profissional","c) Escrever uma redação","d) Fazer um currículo"] },
    { contexto: "", q: "O que é protagonismo juvenil?", a: "b", alts: ["a) Obedecer sem questionar","b) Ser o responsável por suas escolhas e ações","c) Apenas seguir regras","d) Atuar como professor"] },
    { contexto: "", q: "O trabalho em equipe desenvolve:", a: "c", alts: ["a) Individualismo","b) Competição","c) Cooperação e comunicação","d) Isolamento"] },
    { contexto: "", q: "A competência de “pensamento crítico” ajuda a:", a: "c", alts: ["a) Aceitar tudo sem pensar","b) Reproduzir ideias alheias","c) Analisar e refletir sobre informações","d) Evitar responsabilidades"] },
    { contexto: "", q: "O empreendedorismo escolar pode ser entendido como:", a: "c", alts: ["a) Criar empresas apenas","b) Buscar lucro imediato","c) Desenvolver soluções e ideias inovadoras","d) Evitar mudanças"] },
    { contexto: "", q: "A área de Linguagens no itinerário pode incluir:", a: "b", alts: ["a) Apenas inglês","b) Teatro, literatura e comunicação","c) Só gramática","d) Matemática"] },
    { contexto: "", q: "A área de Ciências da Natureza envolve:", a: "b", alts: ["a) História e geografia","b) Física, química e biologia","c) Arte e dança","d) Filosofia"] },
    { contexto: "", q: "Um estudante que reflete sobre sua profissão futura está praticando:", a: "b", alts: ["a) Geografia","b) Projeto de Vida","c) Biologia","d) Gramática"] },
    { contexto: "", q: "A interdisciplinaridade é:", a: "b", alts: ["a) Mistura aleatória de matérias","b) Integração de saberes de várias áreas","c) Separação de conteúdos","d) Cópia de temas"] },
    { contexto: "", q: "A formação técnica no ensino médio serve para:", a: "c", alts: ["a) Aumentar a carga horária","b) Enrolar os estudantes","c) Preparar para o mundo do trabalho","d) Aumentar reprovações"] },
    { contexto: "", q: "Ser autor de seu próprio projeto de vida significa:", a: "c", alts: ["a) Depender dos outros","b) Não planejar","c) Tomar decisões conscientes e responsáveis","d) Agir por impulso"] },
    { contexto: "", q: "O itinerário de Ciências Humanas inclui:", a: "b", alts: ["a) Química","b) História, sociologia, geografia e filosofia","c) Física e biologia","d) Dança e canto"] }
  ],
  "Matemática": [
    { contexto: "", q: "Qual é o valor de 3²?", a: "b", alts: ["a) 6","b) 9","c) 12","d) 8"] },
    { contexto: "", q: "Quanto é 40% de 150?", a: "a", alts: ["a) 60","b) 75","c) 50","d) 45"] },
    { contexto: "", q: "A raiz quadrada de 81 é:", a: "b", alts: ["a) 8","b) 9","c) 81","d) 18"] },
    { contexto: "", q: "Se x + 3 = 7, então x =", a: "b", alts: ["a) 3","b) 4","c) 5","d) 6"] },
    { contexto: "", q: "Em um triângulo, a soma dos ângulos internos é:", a: "c", alts: ["a) 360°","b) 90°","c) 180°","d) 270°"] },
    { contexto: "", q: "Qual é o valor de π (pi) aproximadamente?", a: "c", alts: ["a) 2","b) 3","c) 3,14","d) 4"] },
    { contexto: "", q: "Uma equação do 1º grau tem a forma:", a: "b", alts: ["a) ax² + bx + c = 0","b) ax + b = 0","c) a/b = x","d) x² = y²"] },
    { contexto: "", q: "Quanto é -5 + 8?", a: "b", alts: ["a) -3","b) 3","c) 13","d) -13"] },
    { contexto: "", q: "Se um número é divisível por 2 e 5, então é divisível por:", a: "b", alts: ["a) 7","b) 10","c) 15","d) 4"] },
    { contexto: "", q: "Qual a área de um retângulo com base 4 cm e altura 3 cm?", a: "c", alts: ["a) 7 cm²","b) 14 cm²","c) 12 cm²","d) 8 cm²"] },
    { contexto: "", q: "Em estatística, a média de 4, 6 e 10 é:", a: "a", alts: ["a) 6","b) 5","c) 7","d) 8"] },
    { contexto: "", q: "Se f(x) = 2x, então f(3) =", a: "a", alts: ["a) 6","b) 3","c) 5","d) 9"] },
    { contexto: "", q: "Um número primo entre 10 e 20 é:", a: "c", alts: ["a) 12","b) 15","c) 17","d) 18"] }
  ]
};

const descricoesDisciplinas = {
  "Física": `Habilidade BNCC: <b>EM13CNT306</b><br>
  <span style="font-size:13px;opacity:0.85;">
  Discutir as propriedades da luz (como propagação retilínea, reflexão, refração, dispersão, absorção, polarização e interferência), com base em modelos explicativos e em evidências experimentais, relacionando essas propriedades com tecnologias e aplicações no cotidiano.
  </span>`,
  "Inglês": `Habilidades BNCC: <b>EM13LGG101</b>, <b>EM13LGG303</b><br>
  <span style="font-size:13px;opacity:0.85;">
  Reconhecer o inglês como língua franca no mundo contemporâneo, identificando seu uso em diferentes contextos e mídias.<br>
  Mobilizar repertório lexical e estrutural da língua inglesa para compreender e produzir textos orais e escritos.
  </span>`,
  "Computação": `Habilidades BNCC: <b>EM13MAT509</b>, <b>EM13MAT510</b><br>
  <span style="font-size:13px;opacity:0.85;">
  Utilizar linguagens de programação para implementar algoritmos relacionados à resolução de problemas.<br>
  Reconhecer e utilizar diferentes tecnologias digitais para representação e tratamento da informação.
  </span>`,
  "Educação Social": `Habilidades BNCC: <b>EM13CHS104</b>, <b>EM13CHS106</b><br>
  <span style="font-size:13px;opacity:0.85;">
  Analisar relações de poder entre diferentes grupos sociais.<br>
  Discutir formas de enfrentar preconceito, discriminação, exclusão e violação de direitos humanos.
  </span>`,
  "Matemática": `Habilidades BNCC: <b>EM13MAT401</b>, <b>EM13MAT405</b><br>
  <span style="font-size:13px;opacity:0.85;">
  Resolver e elaborar problemas que envolvem porcentagem, potência, raiz quadrada e proporcionalidade.<br>
  Resolver e interpretar equações e inequações do 1º grau com uma variável.
  </span>`,
  "Itinerários Formativos": `Habilidades BNCC (campos integradores):<br>
  <b>Projeto de Vida</b>: Reconhecer-se como sujeito de direitos e responsabilidades, construindo um projeto pessoal e coletivo de futuro.<br>
  <b>Interdisciplinaridade</b>: Articular conhecimentos das diferentes áreas para compreender a realidade e propor soluções para problemas complexos.`
};

// let currentDisciplina = null;
// let currentStep = 0;
// let acertos = 0;
// let perguntasEmbaralhadas = [];

function verificarSenha(disciplina) {
  const entrada = prompt(`Digite a senha para acessar "${disciplina}":`);
  if (entrada === senhas[disciplina]) {
    iniciarQuiz(disciplina);
  } else {
    alert("❌ Senha incorreta.");
    document.getElementById("quizContainer").style.display = "none";
  }
}

// Mostra quiz, esconde disciplinas e mostra botão Home
function iniciarQuiz(disciplina) {
  currentDisciplina = disciplina;
  currentStep = 0;
  acertos = 0;
  if (disciplina === "Inglês") {
    perguntasEmbaralhadas = quizzes[disciplina].slice();
  } else {
    perguntasEmbaralhadas = quizzes[disciplina].slice().sort(() => Math.random() - 0.5);
  }
  document.getElementById("disciplinaTitulo").innerText = disciplina;
  document.getElementById("disciplinaDescricao").innerHTML = descricoesDisciplinas[disciplina] || "";
  document.getElementById("disciplinaDescricao").style.display = "block";
  document.getElementById("quizContainer").style.display = "flex";
  document.getElementById("intro").style.display = "none";
  document.getElementById("disciplinas-container").style.display = "none";
  document.getElementById("btnHome").style.display = "block";
  document.getElementById("disciplinaTitulo").style.display = "block";
  renderQuestion();
  document.getElementById("introImage").style.display = "none"; // ao iniciar o quiz
}

// Botão Home volta para tela inicial
document.getElementById("btnHome").onclick = function() {
  document.getElementById("quizContainer").style.display = "none";
  document.getElementById("intro").style.display = "block";
  document.getElementById("disciplinas-container").style.display = "flex";
  document.getElementById("btnHome").style.display = "none";
  document.getElementById("disciplinaTitulo").style.display = "none";
  document.getElementById("disciplinaDescricao").style.display = "none"; // Esconde descrição ao voltar para Home
  // Remove destaque dos botões
  document.querySelectorAll('.disciplinas button').forEach(btn => btn.classList.remove('selected'));
  document.getElementById("farmImage").src = "12.png";
  // imagensVistas = [0];
  // atualizarSliderImagem();
  document.getElementById("introImage").style.display = "block"; // ao voltar para Home
};

/* Duplicate variable declarations and functions removed to fix redeclaration error */

// Armazene os índices das imagens já vistas
// let imagensVistas = [0];

// Atualize o slider/carrossel de imagens
// function atualizarSliderImagem() { ... }

// Modifique renderQuestion para atualizar imagensVistas e o slider
function renderQuestion() {
  const questions = perguntasEmbaralhadas;
  // Animação de carregamento
  const quizContent = document.getElementById("quiz-content");
  quizContent.classList.add("loading");
  setTimeout(() => {
    quizContent.classList.remove("loading");
  }, 200);

  // Atualiza imagensVistas
  const imgIdx = Math.min(currentStep, imagensQuiz.length - 1);
  // if (!imagensVistas.includes(imgIdx)) imagensVistas.push(imgIdx);

  document.getElementById("farmImage").src = imagensQuiz[imgIdx];
  // atualizarSliderImagem();

  document.getElementById("progress").value = currentStep + 1;
  document.getElementById("progress").max = questions.length;
  document.getElementById("contexto").innerText = questions[currentStep]?.contexto || "";
  document.getElementById("question").innerText = questions[currentStep]?.q || "";
  document.getElementById("feedback").innerText = "";
  const altsDiv = document.getElementById("alternativas");
  altsDiv.innerHTML = "";

  if (currentStep >= questions.length) {
    document.getElementById("contexto").innerText = "";
    document.getElementById("question").innerText = "🎉 Parabéns! Você completou o quiz!";
    document.getElementById("alternativas").innerHTML = "";
    document.getElementById("feedback").innerText = `Você acertou ${acertos} de ${questions.length} perguntas.`;
    document.getElementById("farmImage").src = imagensQuiz[imagensQuiz.length - 1];

    // Botão de baixar imagem
    const downloadBtn = document.createElement("button");
    downloadBtn.innerText = "Baixar imagem final";
    downloadBtn.onclick = () => {
      const img = document.getElementById("farmImage");
      const link = document.createElement("a");
      link.href = img.src;
      link.download = "fazenda-final.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
    downloadBtn.className = "quiz-action-btn";
    document.getElementById("alternativas").appendChild(downloadBtn);

    // Botão sutil para o link do drive (apenas para Física)
    if (currentDisciplina === "Física") {
      const driveBtn = document.createElement("a");
      driveBtn.href = "https://drive.google.com/drive/folders/1SS4zILNAl0ydvFxSYGZCUIrUQXoLlrlf?usp=sharing";
      driveBtn.target = "_blank";
      driveBtn.innerText = "Drive";
      driveBtn.className = "drive-link-btn";
      driveBtn.style.display = "inline-block";
      driveBtn.style.marginTop = "14px";
      driveBtn.style.fontSize = "15px";
      driveBtn.style.background = "#fffbe7";
      driveBtn.style.color = "#234D3C";
      driveBtn.style.border = "1.5px solid #FFD34E";
      driveBtn.style.borderRadius = "7px";
      driveBtn.style.padding = "7px 14px";
      driveBtn.style.textDecoration = "none";
      driveBtn.style.opacity = "0.85";
      driveBtn.style.transition = "background 0.2s, color 0.2s, opacity 0.2s";
      driveBtn.onmouseover = () => { driveBtn.style.background = "#FFD34E"; driveBtn.style.opacity = "1"; };
      driveBtn.onmouseout = () => { driveBtn.style.background = "#fffbe7"; driveBtn.style.opacity = "0.85"; };
      document.getElementById("alternativas").appendChild(driveBtn);
    }
    return;
  }

  questions[currentStep].alts.forEach((alt, idx) => {
    const letra = String.fromCharCode(97 + idx);
    const btn = document.createElement("button");
    btn.innerText = alt;
    btn.onclick = () => checkAnswer(letra, btn);
    altsDiv.appendChild(btn);
  });
}

function checkAnswer(input, btn) {
  const questions = perguntasEmbaralhadas;
  const correta = questions[currentStep].a;
  const altBtns = Array.from(document.getElementById("alternativas").children);

  if (input === correta) {
    btn.classList.add("alt-correct");
    altBtns.forEach(b => b.disabled = true);
    acertos++;
    document.getElementById("feedback").innerText = "✔️ Correto!";
    setTimeout(() => {
      currentStep++;
      renderQuestion();
    }, 700);
  } else {
    btn.classList.add("alt-wrong");
    btn.disabled = true;
    document.getElementById("feedback").innerText = "❌ Resposta incorreta. Tente novamente.";
  }
}

// Para funcionar com os botões do HTML:
window.onload = function() {
  document.getElementById("intro").style.display = "block"; // Mostra introdução ao carregar
  document.getElementById("btnIngles").onclick = () => verificarSenha("Inglês");
  document.getElementById("btnComputacao").onclick = () => verificarSenha("Computação");
  document.getElementById("btnEducacao").onclick = () => verificarSenha("Educação Social");
  document.getElementById("btnItinerarios").onclick = () => verificarSenha("Itinerários Formativos");
  document.getElementById("btnMatematica").onclick = () => verificarSenha("Matemática");
  document.getElementById("btnFisica").onclick = () => verificarSenha("Física");
  // atualizarSliderImagem();
};

// Destaca botão ativo
document.querySelectorAll('.disciplinas button').forEach(btn => btn.classList.remove('selected'));
const btnId = {
  "Inglês": "btnIngles",
  "Computação": "btnComputacao",
  "Educação Social": "btnEducacao",
  "Itinerários Formativos": "btnItinerarios",
  "Matemática": "btnMatematica",
  "Física": "btnFisica"
}[disciplina];
if (btnId) document.getElementById(btnId).classList.add('selected');

const quizContent = document.getElementById("quiz-content");
quizContent.classList.add("loading");
setTimeout(() => {
  quizContent.classList.remove("loading");
}, 300);
