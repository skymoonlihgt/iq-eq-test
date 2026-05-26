import { initSound } from '../js/core/sound.js';

let questions = [];
let currentQuestionIndex = 0;
let scores = { E: 0, R: 0, T: 0, V: 0 };

document.addEventListener('DOMContentLoaded', async () => {
  initSound();
  await loadQuestions();
});

async function loadQuestions() {
  try {
    const res = await fetch('./questions.json');
    if (!res.ok) throw new Error('Failed to load questions');
    questions = await res.json();
    renderQuestion();
  } catch (e) {
    console.error(e);
    alert('질문 데이터를 불러오는데 실패했습니다.');
  }
}

function updateProgress() {
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');
  
  if (progressFill && progressText) {
    const total = questions.length;
    const percent = Math.min(100, Math.round(((currentQuestionIndex) / total) * 100));
    progressFill.style.width = `${percent}%`;
    progressText.textContent = `${currentQuestionIndex} / ${total}`;
  }
}

function renderQuestion() {
  const mainView = document.getElementById('mainView');
  const q = questions[currentQuestionIndex];
  
  if (!q) {
    finishTest();
    return;
  }
  
  updateProgress();

  let optionsHtml = '';
  q.answers.forEach((opt, idx) => {
    const letter = String.fromCharCode(65 + idx); // A, B, C...
    optionsHtml += `
      <button class="answer-option" data-type="${opt.type}" data-score="${opt.score}">
        <span class="answer-letter">${letter}</span>
        <span>${opt.text}</span>
      </button>
    `;
  });

  mainView.innerHTML = `
    <h2 class="question-title">Q${q.id}. ${q.question}</h2>
    <div class="answer-list">
      ${optionsHtml}
    </div>
  `;

  const optionBtns = mainView.querySelectorAll('.answer-option');
  optionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (window.playClickSound) window.playClickSound();
      
      const type = e.currentTarget.dataset.type;
      const score = parseInt(e.currentTarget.dataset.score);
      scores[type] += score;
      
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        renderQuestion();
      } else {
        updateProgress(); // 20 / 20
        finishTest();
      }
    });
  });
}

function finishTest() {
  document.getElementById('testPanel').style.display = 'none';
  document.getElementById('loadingScreen').style.display = 'flex';
  
  setTimeout(() => {
    // Generate final type
    // R (Resilience), E (Exhaustion), T (Toxin), V (Vitality)
    const letter1 = scores.R > scores.E ? 'E' : 'I';
    const letter2 = scores.V > scores.T ? 'S' : 'N';
    const letter3 = scores.R > scores.T ? 'T' : 'F';
    const letter4 = scores.V > scores.E ? 'J' : 'P';
    
    const finalType = `${letter1}${letter2}${letter3}${letter4}`;
    window.location.href = `./analysis.html?type=${finalType}`;
  }, 3000);
}
