const quizQuestions = [
  {
    id: 1,
    title: 'Quantos planetas Terra cabem dentro do Sol?',
    answerA: 'Um milhão',
    answerB: 'Cem',
    answerC: 'Seiscentos',
    answerD: 'Cento de cinquenta',
    answerE: 'Dois milhões',
    correctAns: 'answerA',
    tip: 'O Sol possui 1 392 700 km de diâmetro',
  },
  {
    id: 2,
    title: 'Em que lugar vivem mais cangurus do que pessoas?',
    answerA: 'Indonésia',
    answerB: 'Nova Zelândia',
    answerC: 'Austrália',
    answerD: 'Papua-Nova Guiné',
    answerE: 'África do Sul',
    correctAns: 'answerC',
    tip: 'Excesso de marsupiais no país',
  },
  {
    id: 3,
    title: 'Quantos olhos a maior parte das aranhas têm??',
    answerA: 'Dois',
    answerB: 'Quatro',
    answerC: 'Quatro pares',
    answerD: 'Seis',
    answerE: 'Um',
    correctAns: 'answerC',
    tip: 'Algumas possuem dois',
  },
  {
    id: 4,
    title: 'O que mede a Escala Mercalli?',
    answerA: 'A intensidade dos ventos',
    answerB: 'A intensidade sísmica de acordo com os danos provocados',
    answerC: 'A resistência dos minerais',
    answerD: 'A magnitude de um terremoto',
    answerE: 'A eletronegatividade',
    correctAns: 'answerB',
    tip: 'Ela foi criado em 1902 pelo italiano, sismólogo e vulcanólogo',
  },
  {
    id: 5,
    title: 'Qual das alternativas contém apenas nomes de rios?',
    answerA: 'São Francisco, Douro, Antártico',
    answerB: 'Nilo, Amazonas, Mississipi',
    answerC: 'Cáspio, Vermelho, Reno',
    answerD: 'Tocantins, Bering, Ganges',
    answerE: 'Danúbio, Jordão, Morto',
    correctAns: 'answerB',
    tip: 'Continente africano, América do Sul, Estados Unidos',
  },
  {
    id: 6,
    title: 'Quanto mede uma girafa?',
    answerA: 'Entre 4,8 e 5,5 metros',
    answerB: '2 metros',
    answerC: 'Entre 5 e 6 metros',
    answerD: '2,5 metros',
    answerE: '4 metros',
    correctAns: 'answerA',
    tip: 'Os machos da espécie costumam ser os maiores',
  },
  {
    id: 7,
    title: 'Qual a ciência que estuda a atmosfera da Terra e a climatologia?',
    answerA: 'Astronomia',
    answerB: 'Metereologia',
    answerC: 'Dispersão atmosférica',
    answerD: 'Meteorologia',
    answerE: 'Horologia',
    correctAns: 'answerB',
    tip: 'Foco no clima e na previsão do tempo',
  },
  {
    id: 8,
    title: 'Quantos braços tem um polvo?',
    answerA: 'Seis',
    answerB: 'Oito',
    answerC: 'Dez',
    answerD: 'Sete',
    answerE: 'Três',
    correctAns: 'answerB',
    tip: 'Os polvos são moluscos marinhos que possuem braços com ventosas.',
  },
  {
    id: 9,
    title:
      'Qual das alternativas contém apenas animais cujos esqueletos são externos?',
    answerA: 'Caracóis, caranguejos e lagostas',
    answerB: 'Besouros, peixes e formigas',
    answerC: 'Caracóis, lulas e aranhas',
    answerD: 'Borboletas, caranguejos e peixes',
    answerE: 'Lagostas, polvos e escorpiões',
    correctAns: 'answerA',
    tip:
      'O exoesqueleto ou esqueleto externo é uma camada rígida de quitina ou de carbonato de cálcio presente em alguns animais, como insetos e moluscos',
  },
  {
    id: 10,
    title: 'Qual das alternativas traz apenas nomes de grandes inventores?',
    answerA: 'Alfred Nobel, José Bonifácio, Leonardo da Vinci',
    answerB: 'Machado de Assis, Oscar Niemeyer e Dmitri Mendeleiev',
    answerC: 'Evangelista Torricelli, Thomas Edison, Pablo Picasso',
    answerD:
      'Stephen Poplawski, Tarsila do Amaral, Amalie Auguste Melitta Bentz',
    answerE: 'Alexander Graham Bell, Bartolomeu de Gusmão, Galileu Galilei',
    correctAns: 'answerE',
    tip: 'Inventor escocês, Inventor luso-brasileiro, Filósofo',
  },
];

const markHTML = document.querySelector('.content');
const a_text = document.querySelector('#a');
const b_text = document.querySelector('#b');
const c_text = document.querySelector('#c');
const d_text = document.querySelector('#d');
const e_text = document.querySelector('#e');
const tip = document.querySelector('#tip');
const questionTitle = document.querySelector('.question-title');
const buttonNext = document.querySelector('.next-question');
const allInputs = document.querySelectorAll('.answer');

let curQuiz = 0;
let score = 0;
let totalScore = quizQuestions.length * 10;

loadQuiz();

function loadQuiz() {
  unselectInput();

  const curQuestion = quizQuestions[curQuiz];

  questionTitle.innerText = curQuestion.title;
  tip.innerText = curQuestion.tip;
  a_text.innerText = curQuestion.answerA;
  b_text.innerText = curQuestion.answerB;
  c_text.innerText = curQuestion.answerC;
  d_text.innerText = curQuestion.answerD;
  e_text.innerText = curQuestion.answerE;
}

function congratsPage() {
  const questionPrev = document.querySelector('.question-content');
  const buttonPrev = document.querySelector('.next-question');

  const markup = `
    <div class="congrats-content">
      <h2 class="congrats-title">${titleCondition(score, totalScore)}</h2>
      <figure class="fig">
        <img src="./homer-${imageCondition(
          score,
          totalScore
        )}.gif" alt="homer" class="congrats-image" />
      </figure>
      <p class="congrats-message">Você fez ${score} de um total de ${totalScore} pontos.</p>
    </div>
    <button class="next-question" onClick="window.location.reload()">Fazer novamente</button>`;

  markHTML.removeChild(questionPrev);
  markHTML.removeChild(buttonPrev);
  markHTML.insertAdjacentHTML('afterbegin', markup);
}

function titleCondition(finalScore, totalScr) {
  if (finalScore < Math.floor(totalScr / 4)) {
    return 'Meh! Vá estudar!';
  } else if (finalScore < Math.floor(totalScr / 2)) {
    return 'Parabéns! Você foi bem.';
  } else {
    return 'WOW! Você foi muito bem! 😎';
  }
}

function imageCondition(finalScore, totalScr) {
  if (finalScore < Math.floor(totalScr / 4)) {
    return 'bad';
  } else if (finalScore < Math.floor(totalScr / 2)) {
    return 'good';
  } else {
    return 'very-good';
  }
}

function getSelected() {
  let answerInput = undefined;

  allInputs.forEach(input => {
    if (input.checked) {
      answerInput = input.id;
    }
  });

  return answerInput;
}

function unselectInput() {
  allInputs.forEach(input => {
    if (input.checked) {
      input.checked = false;
    }
  });
}

function checkAnswer(ans) {
  if (String(ans) === quizQuestions[curQuiz].correctAns) score += 10;
}

buttonNext.addEventListener('click', () => {
  const answer = getSelected();
  if (!answer) return;

  checkAnswer(answer);
  curQuiz++;

  if (curQuiz < quizQuestions.length) {
    loadQuiz();

    if (curQuiz === quizQuestions.length - 1)
      buttonNext.innerHTML = 'Finalizar';
  } else {
    congratsPage();
  }
});
