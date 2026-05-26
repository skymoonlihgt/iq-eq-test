import { initSound } from '../js/core/sound.js';

let currentMode = 'essence';
let questions = [];
let resultsData = {};
let currentQuestionIndex = 0;
let scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
let finalResultCode = '';

document.addEventListener('DOMContentLoaded', async () => {
  initSound();
  await loadData();
  initEvents();
});

// Toast Helper
function showToast(message) {
  let toast = document.getElementById('toastMsg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastMsg';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

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
      if (window.playClickSound) window.playClickSound();
      
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
  if (currentMode === 'concept' && viewData.chemistry) {
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
  } else if (currentMode === 'essence' && viewData.match_good && viewData.match_bad) {
    chemHtml = `
      <div class="chemistry-box">
        <div class="chem-item">
          <span>잘 맞는 성향 🤝</span>
          <strong>${viewData.match_good}</strong>
        </div>
        <div class="chem-item">
          <span>안 맞는 성향 ⚡</span>
          <strong>${viewData.match_bad}</strong>
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

      <div class="analysis-action" style="margin-top: 16px; margin-bottom: 16px;">
        <button id="btnGoAnalysis" class="primary-button" style="width: 100%; background: linear-gradient(135deg, #6c5ce7, #a29bfe); box-shadow: 0 4px 15px rgba(108, 92, 231, 0.3);">
          나의 8대 테마 심층 분석 보러 가기 ➔
        </button>
      </div>

      <div class="share-actions">
        <button id="btnCopyLink" class="secondary-button" style="flex: 1;">
          🔗 결과 복사 및 공유하기
        </button>
        <button id="btnRestart" class="primary-button" style="flex: 1;">
          다시하기
        </button>
      </div>

      <!-- Result AdSense -->
      <div class="adsense-container" style="margin-top: 32px; text-align: center;">
        <ins class="adsbygoogle"
             style="display:block"
             data-ad-client="ca-pub-1484447012475820"
             data-ad-slot="9988776659"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
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

  // Bind analysis link
  document.getElementById('btnGoAnalysis').addEventListener('click', () => {
    window.location.href = `./analysis.html?type=${finalResultCode}`;
  });

  // Bind actions
  document.getElementById('btnCopyLink').addEventListener('click', () => {
    // Generate text to share
    const analysisUrl = new URL(`./analysis.html?type=${finalResultCode}`, window.location.href).href;
    const shareText = `[Mind Balance MQ 테스트 결과]\n\n나의 성향: ${finalResultCode}\n👉 ${viewData.title}\n\n${viewData.summary}\n\n나의 8대 심층 분석 결과 확인하기:\n${analysisUrl}`;
    
    navigator.clipboard.writeText(shareText).then(() => {
      showToast('내 결과 페이지 링크가 복사되었습니다! 친구에게 공유해 보세요.');
    }).catch(err => {
      console.error('Copy failed', err);
      alert('복사에 실패했습니다.');
    });
  });

  document.getElementById('btnRestart').addEventListener('click', () => {
    currentQuestionIndex = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    updateProgress();
    location.reload(); // simple reload
  });

  // Push AdSense
  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  } catch (e) {
    console.warn("AdSense push error:", e);
  }
}
