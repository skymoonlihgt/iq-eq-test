let currentMode = 'essence';
let questions = [];
let resultsData = {};
let currentQuestionIndex = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
let finalResultCode = '';

document.addEventListener('DOMContentLoaded', async () => {
  await loadData();
  initEvents();
});

async function loadData() {
  try {
    const qRes = await fetch('./questions.json');
    if (!qRes.ok) {
      throw new Error(`Failed to load questions.json (status: ${qRes.status})`);
    }
    questions = await qRes.json();
    
    const rRes = await fetch('./results.json');
    if (!rRes.ok) {
      throw new Error(`Failed to load results.json (status: ${rRes.status})`);
    }
    resultsData = await rRes.json();
  } catch (e) {
    console.error('Data loading error:', e);
    alert('데이터를 불러오는데 실패했습니다.');
  }
}

function initEvents() {
  const modeBtns = document.querySelectorAll('.mode-btn');
  modeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // update state
      currentMode = e.target.dataset.mode;
      
      // update active class on all buttons
      document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('is-active'));
      document.querySelectorAll(`.mode-btn[data-mode="${currentMode}"]`).forEach(b => b.classList.add('is-active'));
      
      // If we are in question view, re-render question
      if (currentQuestionIndex > 0 && currentQuestionIndex < questions.length) {
        renderQuestion();
      }
      
      // If we are in result view, re-render result
      if (currentQuestionIndex >= questions.length) {
        renderResult();
      }
    });
  });

  const startBtn = document.getElementById('startBtn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      currentQuestionIndex = 0;
      scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
      renderQuestion();
    });
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
    calculateResult();
    return;
  }
  
  updateProgress();

  const title = currentMode === 'essence' ? q.question_essence : q.question_concept;
  
  let optionsHtml = '';
  q.options.forEach((opt, idx) => {
    const text = currentMode === 'essence' ? opt.text_essence : opt.text_concept;
    const letter = String.fromCharCode(65 + idx); // A, B, C...
    optionsHtml += `
      <button class="answer-option" data-type="${opt.type}">
        <span class="answer-letter">${letter}</span>
        <span>${text}</span>
      </button>
    `;
  });

  mainView.innerHTML = `
    <div class="question-view">
      <div class="mode-toggle" style="margin-bottom:12px;">
        <button class="mode-btn ${currentMode === 'essence' ? 'is-active' : ''}" data-mode="essence">Essence</button>
        <button class="mode-btn ${currentMode === 'concept' ? 'is-active' : ''}" data-mode="concept">Concept</button>
      </div>
      <h2 id="questionTitle">${title}</h2>
      <div class="answer-list">
        ${optionsHtml}
      </div>
    </div>
  `;

  // Re-bind mode buttons inside the new view
  const modeBtns = mainView.querySelectorAll('.mode-btn');
  modeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      currentMode = e.target.dataset.mode;
      renderQuestion(); // Re-render immediately
    });
  });

  const optionBtns = mainView.querySelectorAll('.answer-option');
  optionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const type = e.currentTarget.dataset.type;
      scores[type]++;
      currentQuestionIndex++;
      
      if (currentQuestionIndex < questions.length) {
        renderQuestion();
      } else {
        updateProgress(); // set to 20/20
        calculateResult();
      }
    });
  });
}

function calculateResult() {
  const E = scores['E'] >= scores['I'] ? 'E' : 'I';
  const S = scores['S'] >= scores['N'] ? 'S' : 'N';
  const T = scores['T'] >= scores['F'] ? 'T' : 'F';
  const J = scores['J'] >= scores['P'] ? 'J' : 'P';
  
  finalResultCode = `${E}${S}${T}${J}`;
  renderResult();
}

function renderResult() {
  const mainView = document.getElementById('mainView');
  
  // get data
  // fallback if the result code is not completely filled in the JSON yet
  const resObj = resultsData[finalResultCode] || resultsData['INFP']; 
  const viewData = resObj[currentMode];

  let chemHtml = '';
  if (viewData.chemistry) {
    chemHtml = `
      <div class="chemistry-box">
        <div class="chem-item">
          <span>환상의 케미 💖</span>
          <strong>${viewData.chemistry.good}</strong>
        </div>
        <div class="chem-item">
          <span>환장의 케미 💔</span>
          <strong>${viewData.chemistry.bad}</strong>
        </div>
      </div>
    `;
  }

  mainView.innerHTML = `
    <div class="result-view">
      <div class="mode-toggle">
        <button class="mode-btn ${currentMode === 'essence' ? 'is-active' : ''}" data-mode="essence">Essence 모드</button>
        <button class="mode-btn ${currentMode === 'concept' ? 'is-active' : ''}" data-mode="concept">Concept 모드</button>
      </div>
      
      <div class="result-card">
        <div class="result-code">당신의 유형: ${finalResultCode}</div>
        <div class="result-title">${viewData.title}</div>
        <div class="result-summary">${viewData.summary}</div>
        <div class="result-analysis">
          ${viewData.chart_analysis || ''}
        </div>
        ${chemHtml}
      </div>

      <div class="share-actions">
        <button id="btnShareKakao" class="secondary-button">
          💬 카카오톡 공유하기
        </button>
        <button id="btnCopyLink" class="secondary-button">
          🔗 링크 복사
        </button>
        <button id="btnRestart" class="primary-button" style="flex: 1;">
          다시하기
        </button>
      </div>
    </div>
  `;

  // Bind mode toggle
  const modeBtns = mainView.querySelectorAll('.mode-btn');
  modeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      currentMode = e.target.dataset.mode;
      renderResult(); // Re-render immediately
    });
  });

  // Bind actions
  document.getElementById('btnCopyLink').addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('링크가 복사되었습니다!');
    });
  });
  
  document.getElementById('btnShareKakao').addEventListener('click', () => {
    alert('카카오톡 공유 기능은 현재 준비중입니다.'); // API integration required
  });

  document.getElementById('btnRestart').addEventListener('click', () => {
    currentQuestionIndex = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    updateProgress();
    location.reload(); // simple reload
  });
}
