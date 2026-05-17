let currentLang = 'ko';
let tests = tests_ko;
let domainLabels = domainLabels_ko;
let taxonomy = taxonomy_ko;

const i18n = {
  ko: {
    pageTitle: "IQ & EQ 테스트 - Mind Balance",
    brandName: "Mind Balance",
    mainTitle: "IQ & EQ 테스트",
    mainDesc: "논리 추론과 정서 판단을 각각 나누어 확인하는 자기점검형 테스트",
    iqTestLabel: "IQ 테스트",
    iqTestDesc: "최대 30문항 · 문항당 45초",
    eqTestLabel: "EQ 테스트",
    eqTestDesc: "최대 30문항 · 문항당 35초",
    noticeText: "이 테스트는 교육용 자기점검 도구이며 실제 지능검사나 심리 진단을 대체하지 않습니다.",
    testSelection: "테스트 선택",
    chooseTestTitle: "어떤 테스트부터 시작할까요?",
    chooseTestDesc: "나이/연령대를 선택하면 해당 단계에 맞는 난이도 문항을 우선으로 구성합니다.",
    ageLabel: "나이/연령대",
    selectedCount: "15문항 선택",
    iqTestTitle: "IQ 테스트",
    iqTestTopics: "수열, 조건 추론, 계산, 패턴 문제",
    eqTestTitle: "EQ 테스트",
    eqTestTopics: "공감, 자기 인식, 감정 조절, 관계 판단",
    selectScreenBtn: "선택 화면",
    timeRemaining: "남은 시간",
    nextBtn: "다음",
    restartBtn: "다시 풀기",
    otherTestBtn: "다른 테스트 시작",
    copyResultBtn: "결과 복사",
    termsLink: "이용약관",
    privacyLink: "개인정보처리방침",
    contactLink: "문의하기",
    
    questionsText: "문항",
    qSelected: "문항 선택",
    secPerQuestion: "초",
    viewResult: "결과 보기",
    timeOut: "시간 초과",
    completed: "완료",
    startTest: "테스트 시작",
    iqEstIndex: "IQ 추정 지수",
    eqResponseScore: "EQ 반응 점수",
    correctLabel: "정답률",
    correctNote: "문항 정답",
    timeOutNote: "미응답 문항은 오답 처리됩니다.",
    timeOutNoteEq: "미응답 문항은 0점 처리됩니다.",
    profileLabel: "프로필",
    profileNote: "영역별 점수는 아래에 표시됩니다.",
    allIqCorrect: "모든 IQ 문항 정답",
    allIqCorrectDesc: "패턴, 조건, 계산을 분리해서 보는 속도가 좋습니다.",
    timeOutPrefix: "시간 초과 · ",
    correctPrefix: "정답 ",
    strongDomain: "강점 영역",
    strongDomainDesc: " 영역의 반응 선택이 가장 안정적이었습니다.",
    weakDomain: "보완 영역",
    weakDomainDesc: "한 박자 멈춘 뒤 감정, 사실, 요청을 나누어 말하면 해당 점수가 더 안정적으로 올라갑니다.",
    copied: "결과가 클립보드에 복사되었습니다.",
    sec: "초",
    score: "점",
    
    iqResult1: "상위권 추론형",
    iqResult2: "빠른 패턴 탐색형",
    iqResult3: "균형 추론형",
    iqResult4: "기초 강화형",
    eqResult1: "정서 조율 우수",
    eqResult2: "관계 감각 안정",
    eqResult3: "상황별 편차 있음",
    eqResult4: "감정 복구 연습 필요",
    iqTestSummary: "IQ 테스트 결과",
    eqTestSummary: "EQ 테스트 결과",
    ansCorrect: "정답",
    scoreTxt: "점수"
  },
  en: {
    pageTitle: "IQ & EQ Test - Mind Balance",
    brandName: "Mind Balance",
    mainTitle: "IQ & EQ Test",
    mainDesc: "Self-assessment test checking logical reasoning and emotional judgment separately",
    iqTestLabel: "IQ Test",
    iqTestDesc: "Up to 30 Qs · 45s per Q",
    eqTestLabel: "EQ Test",
    eqTestDesc: "Up to 30 Qs · 35s per Q",
    noticeText: "This test is an educational self-assessment tool and does not replace actual intelligence or psychological diagnoses.",
    testSelection: "Select Test",
    chooseTestTitle: "Which test would you like to start?",
    chooseTestDesc: "Select your age group to prioritize questions matching your level.",
    ageLabel: "Age Group",
    selectedCount: "15 questions selected",
    iqTestTitle: "IQ Test",
    iqTestTopics: "Sequence, condition, calculation, pattern",
    eqTestTitle: "EQ Test",
    eqTestTopics: "Empathy, awareness, regulation, social",
    selectScreenBtn: "Home",
    timeRemaining: "Time Left",
    nextBtn: "Next",
    restartBtn: "Restart",
    otherTestBtn: "Other Test",
    copyResultBtn: "Copy Results",
    termsLink: "Terms of Service",
    privacyLink: "Privacy Policy",
    contactLink: "Contact Us",
    
    questionsText: "Qs",
    qSelected: "Qs selected",
    secPerQuestion: "s",
    viewResult: "View Results",
    timeOut: "Time Out",
    completed: "Completed",
    startTest: "Start",
    iqEstIndex: "Estimated IQ",
    eqResponseScore: "EQ Score",
    correctLabel: "Accuracy",
    correctNote: "correct answers",
    timeOutNote: "Unanswered questions are marked incorrect.",
    timeOutNoteEq: "Unanswered questions get 0 points.",
    profileLabel: "Profile",
    profileNote: "Domain scores are shown below.",
    allIqCorrect: "All IQ questions correct",
    allIqCorrectDesc: "Great speed in separating patterns, conditions, and calculations.",
    timeOutPrefix: "Time Out · ",
    correctPrefix: "Answer ",
    strongDomain: "Strong Domain",
    strongDomainDesc: " domain had the most stable responses.",
    weakDomain: "Focus Domain",
    weakDomainDesc: "Taking a moment to separate emotion, fact, and request will improve this score.",
    copied: "Results copied to clipboard.",
    sec: "s",
    score: "pts",
    
    iqResult1: "Top-tier Reasoner",
    iqResult2: "Fast Pattern Finder",
    iqResult3: "Balanced Reasoner",
    iqResult4: "Foundation Builder",
    eqResult1: "Excellent Regulator",
    eqResult2: "Stable Social Sense",
    eqResult3: "Situational Variance",
    eqResult4: "Needs Recovery Practice",
    iqTestSummary: "IQ Test Results",
    eqTestSummary: "EQ Test Results",
    ansCorrect: "Correct",
    scoreTxt: "Score"
  }
};

function t(key) {
  return i18n[currentLang][key] || key;
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  
  document.getElementById('langKoBtn').classList.toggle('active', lang === 'ko');
  document.getElementById('langEnBtn').classList.toggle('active', lang === 'en');
  
  document.getElementById('seoContentKo').style.display = lang === 'ko' ? 'block' : 'none';
  document.getElementById('seoContentEn').style.display = lang === 'en' ? 'block' : 'none';
  
  tests = lang === 'ko' ? tests_ko : tests_en;
  domainLabels = lang === 'ko' ? domainLabels_ko : domainLabels_en;
  taxonomy = lang === 'ko' ? taxonomy_ko : taxonomy_en;

  enrichQuestionBank();

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  showStart();
}

document.getElementById('langKoBtn').addEventListener('click', () => setLanguage('ko'));
document.getElementById('langEnBtn').addEventListener('click', () => setLanguage('en'));

const subjectBlueprints = [
  { field: "general", major: "common", subject: "common" }
];

function enrichQuestionBank() {
  Object.entries(tests).forEach(([testKey, test]) => {
    test.questions = test.questions.map((question, index) => {
      const difficulty = getDifficultyByIndex(index);
      return {
        ...question,
        type: testKey,
        difficulty,
        ageGroups: getAgeGroupsForDifficulty(difficulty)
      };
    });
  });
}

function getDifficultyByIndex(index) {
  if (index < 8) return 1;
  if (index < 16) return 2;
  if (index < 24) return 3;
  return 4;
}

function getAgeGroupsForDifficulty(difficulty) {
  if (difficulty === 1) return ["middle"];
  if (difficulty === 2) return ["middle", "high"];
  if (difficulty === 3) return ["high", "college", "adult"];
  return ["college", "adult"];
}

enrichQuestionBank();

const DEFAULT_QUESTION_COUNT = 15;

const state = {
  currentTest: null,
  current: 0,
  questionCount: DEFAULT_QUESTION_COUNT,
  context: {
    ageGroup: "college"
  },
  answers: {},
  timedOut: {},
  timerId: null,
  remaining: 0
};

const elements = {
  homeBtn: document.querySelector("#homeBtn"),
  statusText: document.querySelector("#statusText"),
  progressFill: document.querySelector("#progressFill"),
  timerBox: document.querySelector("#timerBox"),
  timerText: document.querySelector("#timerText"),
  timerFill: document.querySelector("#timerFill"),
  startView: document.querySelector("#startView"),
  ageSelect: document.querySelector("#ageSelect"),
  selectedCountText: document.querySelector("#selectedCountText"),
  countButtons: document.querySelectorAll(".count-button"),
  testCards: document.querySelectorAll(".test-card"),
  iqCardCount: document.querySelector("#iqCardCount"),
  eqCardCount: document.querySelector("#eqCardCount"),
  questionView: document.querySelector("#questionView"),
  questionType: document.querySelector("#questionType"),
  questionSkill: document.querySelector("#questionSkill"),
  questionTitle: document.querySelector("#questionTitle"),
  questionPassage: document.querySelector("#questionPassage"),
  answerList: document.querySelector("#answerList"),
  quitBtn: document.querySelector("#quitBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  resultView: document.querySelector("#resultView"),
  resultTitle: document.querySelector("#resultTitle"),
  resultLead: document.querySelector("#resultLead"),
  resultMetrics: document.querySelector("#resultMetrics"),
  profileBars: document.querySelector("#profileBars"),
  reviewList: document.querySelector("#reviewList"),
  restartBtn: document.querySelector("#restartBtn"),
  chooseBtn: document.querySelector("#chooseBtn"),
  copyBtn: document.querySelector("#copyBtn"),
  copyStatus: document.querySelector("#copyStatus"),
  iqMiniScore: document.querySelector("#iqMiniScore"),
  eqMiniScore: document.querySelector("#eqMiniScore"),
  canvas: document.querySelector("#signalCanvas")
};

function activeTest() {
  return state.currentTest ? tests[state.currentTest] : null;
}

function questionsFor(testKey) {
  return tests[testKey].questions
    .map((question, index) => ({
      question,
      index,
      score: getQuestionFitScore(question)
    }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, state.questionCount)
    .map((item) => item.question);
}

function activeQuestions() {
  return state.currentTest ? questionsFor(state.currentTest) : [];
}

function getQuestionFitScore(question) {
  const { ageGroup } = state.context;
  let score = 0;

  if (question.ageGroups?.includes(ageGroup)) score += 40;
  score += getDifficultyFitScore(ageGroup, question.difficulty);

  return score;
}

function getDifficultyFitScore(ageGroup, difficulty) {
  const preferred = {
    middle: [1, 2],
    high: [2, 3],
    college: [3, 4],
    adult: [3, 4]
  }[ageGroup] || [2, 3];

  if (preferred.includes(difficulty)) return 20;
  const closestDistance = Math.min(...preferred.map((target) => Math.abs(target - difficulty)));
  return Math.max(0, 12 - closestDistance * 5);
}

function clearTimer() {
  if (state.timerId) {
    window.clearInterval(state.timerId);
    state.timerId = null;
  }
}

function setView(viewName) {
  elements.startView.hidden = viewName !== "start";
  elements.questionView.hidden = viewName !== "question";
  elements.resultView.hidden = viewName !== "result";
  elements.timerBox.hidden = viewName !== "question";
  elements.homeBtn.hidden = viewName === "start";
}

function renderSelect(select, options, selectedValue) {
  select.innerHTML = options
    .map((option) => `<option value="${option.id}">${option.label}</option>`)
    .join("");
  select.value = selectedValue;
}

function updateContextControls() {
  renderSelect(elements.ageSelect, taxonomy.ageGroups, state.context.ageGroup);
}

function getContextLabel() {
  const age = taxonomy.ageGroups.find((item) => item.id === state.context.ageGroup)?.label;
  return age || (currentLang === 'ko' ? "연령대" : "Age");
}

function showStart() {
  clearTimer();
  state.currentTest = null;
  state.current = 0;
  state.answers = {};
  state.timedOut = {};
  elements.statusText.textContent = t("testSelection");
  elements.progressFill.style.width = "0%";
  elements.copyStatus.textContent = "";
  setView("start");
  updateContextControls();
  updateQuestionCountPicker();
  updateSideSummary();
  drawSignal({ iq: 0, eq: 0, progress: 0 });
}

function startTest(testKey) {
  clearTimer();
  state.currentTest = testKey;
  state.current = 0;
  state.answers = {};
  state.timedOut = {};
  elements.copyStatus.textContent = "";
  setView("question");
  renderQuestion(true);
}

function renderQuestion(resetTimer) {
  const test = activeTest();
  const questions = activeQuestions();
  const question = questions[state.current];
  const answered = state.answers[question.id];

  elements.statusText.textContent = `${test.label} ${state.current + 1} / ${questions.length}`;
  elements.progressFill.style.width = `${(state.current / questions.length) * 100}%`;
  elements.questionType.textContent = test.shortLabel;
  elements.questionSkill.textContent = question.skill;
  elements.questionTitle.textContent = question.title;
  elements.questionPassage.textContent = question.passage;
  elements.answerList.innerHTML = "";

  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.classList.toggle("is-selected", answered === index);
    button.setAttribute("aria-pressed", String(answered === index));
    button.innerHTML = `
      <span class="answer-letter">${String.fromCharCode(65 + index)}</span>
      <span>${typeof choice === "string" ? choice : choice.text}</span>
    `;
    button.addEventListener("click", () => selectAnswer(question.id, index));
    elements.answerList.appendChild(button);
  });

  elements.nextBtn.disabled = answered === undefined;
  elements.nextBtn.textContent = state.current === questions.length - 1 ? t("viewResult") : t("nextBtn");

  updateSideSummary();
  drawSignal(getCurrentSignal());
  if (resetTimer) startTimer(test.timeLimit);
}

function selectAnswer(questionId, index) {
  state.answers[questionId] = index;
  delete state.timedOut[questionId];
  elements.nextBtn.disabled = false;
  Array.from(elements.answerList.children).forEach((button, buttonIndex) => {
    button.classList.toggle("is-selected", buttonIndex === index);
    button.setAttribute("aria-pressed", String(buttonIndex === index));
  });
  updateSideSummary();
  drawSignal(getCurrentSignal());
}

function startTimer(seconds) {
  clearTimer();
  state.remaining = seconds;
  updateTimer(seconds);
  state.timerId = window.setInterval(() => {
    state.remaining -= 1;
    updateTimer(seconds);
    if (state.remaining <= 0) handleTimeout();
  }, 1000);
}

function updateTimer(totalSeconds) {
  const remaining = Math.max(0, state.remaining);
  const percent = (remaining / totalSeconds) * 100;
  elements.timerText.textContent = `${remaining}${t("sec")}`;
  elements.timerFill.style.width = `${percent}%`;
  elements.timerBox.classList.toggle("is-warning", remaining <= 15 && remaining > 7);
  elements.timerBox.classList.toggle("is-danger", remaining <= 7);
}

function handleTimeout() {
  const question = activeQuestions()[state.current];
  if (!question) return;
  clearTimer();
  if (state.answers[question.id] === undefined) {
    state.answers[question.id] = null;
    state.timedOut[question.id] = true;
  }
  Array.from(elements.answerList.children).forEach((button) => {
    button.disabled = true;
  });
  elements.statusText.textContent = t("timeOut");
  window.setTimeout(() => advanceQuestion(), 550);
}

function advanceQuestion() {
  clearTimer();
  const questions = activeQuestions();
  if (state.current >= questions.length - 1) {
    showResults();
    return;
  }
  state.current += 1;
  renderQuestion(true);
}

function computeResult(testKey = state.currentTest) {
  const test = tests[testKey];
  const questions = questionsFor(testKey);
  const timedOutCount = questions.filter((question) => state.timedOut[question.id]).length;

  if (testKey === "iq") {
    const correct = questions.reduce((sum, question) => {
      return sum + (state.answers[question.id] === question.answer ? 1 : 0);
    }, 0);
    const percent = correct / questions.length;
    return {
      test,
      testKey,
      questions,
      correct,
      total: questions.length,
      percent,
      timedOutCount,
      index: Math.round(70 + percent * 60)
    };
  }

  const domains = {};
  let score = 0;
  questions.forEach((question) => {
    const answerIndex = state.answers[question.id];
    const choice = question.choices[answerIndex];
    const domain = choice?.domain || question.choices[0].domain;
    const choiceScore = choice?.score || 0;
    score += choiceScore;
    domains[domain] ??= { score: 0, max: 0 };
    domains[domain].score += choiceScore;
    domains[domain].max += 4;
  });

  Object.keys(domainLabels).forEach((domain) => {
    domains[domain] ??= { score: 0, max: 0 };
  });

  const max = questions.length * 4;
  const percent = score / max;
  return {
    test,
    testKey,
    questions,
    score,
    max,
    total: questions.length,
    percent,
    timedOutCount,
    domains
  };
}

function updateSideSummary() {
  if (!state.currentTest) {
    elements.iqMiniScore.textContent = `${state.questionCount}${t("questionsText")}`;
    elements.eqMiniScore.textContent = `${state.questionCount}${t("questionsText")}`;
    return;
  }

  const answeredCount = activeQuestions().filter((question) => {
    return state.answers[question.id] !== undefined;
  }).length;
  const label = `${answeredCount}/${activeQuestions().length}`;
  if (state.currentTest === "iq") {
    elements.iqMiniScore.textContent = label;
    elements.eqMiniScore.textContent = `${state.questionCount}${t("questionsText")}`;
  } else {
    elements.iqMiniScore.textContent = `${state.questionCount}${t("questionsText")}`;
    elements.eqMiniScore.textContent = label;
  }
}

function updateQuestionCountPicker() {
  elements.selectedCountText.textContent = `${state.questionCount}${t("qSelected")}`;
  elements.iqCardCount.textContent = `${state.questionCount}${t("questionsText")} · ${tests.iq.timeLimit}${t("secPerQuestion")}`;
  elements.eqCardCount.textContent = `${state.questionCount}${t("questionsText")} · ${tests.eq.timeLimit}${t("secPerQuestion")}`;
  elements.countButtons.forEach((button) => {
    const isActive = Number(button.dataset.count) === state.questionCount;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function getCurrentSignal() {
  const questions = activeQuestions();
  if (!state.currentTest || !questions.length) {
    return { iq: 0, eq: 0, progress: 0 };
  }

  const answered = questions.filter((question) => state.answers[question.id] !== undefined).length;
  const progress = answered / questions.length;
  if (state.currentTest === "iq") {
    const correct = questions.reduce((sum, question) => {
      return sum + (state.answers[question.id] === question.answer ? 1 : 0);
    }, 0);
    return { iq: correct / questions.length, eq: 0, progress };
  }

  const result = computeResult("eq");
  return { iq: 0, eq: result.percent, progress };
}

function drawSignal(signal) {
  const canvas = elements.canvas;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) * 0.34;

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#f7f5ef";
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = "rgba(32, 33, 36, 0.13)";
  ctx.lineWidth = 1;
  for (let i = 1; i <= 4; i += 1) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, (radius / 4) * i, 0, Math.PI * 2);
    ctx.stroke();
  }

  const axes = [
    { label: "IQ", angle: -Math.PI / 2, value: signal.iq, color: "#23705d" },
    { label: "EQ", angle: Math.PI / 6, value: signal.eq, color: "#c95f4a" },
    { label: "Flow", angle: (Math.PI * 5) / 6, value: signal.progress, color: "#4d5b99" }
  ];

  axes.forEach((axis) => {
    const x = centerX + Math.cos(axis.angle) * radius;
    const y = centerY + Math.sin(axis.angle) * radius;
    ctx.strokeStyle = "rgba(32, 33, 36, 0.22)";
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.fillStyle = axis.color;
    ctx.font = "700 15px Segoe UI, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(axis.label, x, y + (axis.angle < 0 ? -10 : 20));
  });

  ctx.beginPath();
  axes.forEach((axis, index) => {
    const distance = radius * (0.2 + axis.value * 0.8);
    const x = centerX + Math.cos(axis.angle) * distance;
    const y = centerY + Math.sin(axis.angle) * distance;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(35, 112, 93, 0.18)";
  ctx.strokeStyle = "#23705d";
  ctx.lineWidth = 3;
  ctx.fill();
  ctx.stroke();

  axes.forEach((axis) => {
    const distance = radius * (0.2 + axis.value * 0.8);
    const x = centerX + Math.cos(axis.angle) * distance;
    const y = centerY + Math.sin(axis.angle) * distance;
    ctx.fillStyle = axis.color;
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fill();
  });
}

function getIqLabel(index) {
  if (index >= 124) return t("iqResult1");
  if (index >= 112) return t("iqResult2");
  if (index >= 98) return t("iqResult3");
  return t("iqResult4");
}

function getEqLabel(percent) {
  if (percent >= 0.86) return t("eqResult1");
  if (percent >= 0.68) return t("eqResult2");
  if (percent >= 0.5) return t("eqResult3");
  return t("eqResult4");
}

function showResults() {
  clearTimer();
  const result = computeResult();
  const isIq = result.testKey === "iq";
  const nextTest = tests[getNextTestKey()];
  const contextLabel = getContextLabel();
  elements.progressFill.style.width = "100%";
  elements.statusText.textContent = `${result.test.label} ${t("completed")}`;
  elements.chooseBtn.textContent = `${nextTest.shortLabel} ${t("startTest")}`;
  setView("result");

  if (isIq) {
    const label = getIqLabel(result.index);
    elements.resultTitle.textContent = `${t("iqEstIndex")} ${result.index}`;
    elements.resultLead.textContent = currentLang === 'ko' 
        ? `${contextLabel} 기준 ${result.correct}/${result.total} 정답입니다. ${label} 프로필이 나타났습니다.`
        : `${result.correct}/${result.total} correct based on ${contextLabel}. Profile: ${label}.`;
        
    elements.resultMetrics.innerHTML = `
      <article class="metric-card">
        <span class="metric-label">${t("correctLabel")}</span>
        <strong class="metric-value">${Math.round(result.percent * 100)}</strong>
        <p class="metric-note">${result.correct}/${result.total} ${t("correctNote")}</p>
      </article>
      <article class="metric-card">
        <span class="metric-label">${t("iqEstIndex")}</span>
        <strong class="metric-value">${result.index}</strong>
        <p class="metric-note">${label}</p>
      </article>
      <article class="metric-card">
        <span class="metric-label">${t("timeOut")}</span>
        <strong class="metric-value">${result.timedOutCount}</strong>
        <p class="metric-note">${t("timeOutNote")}</p>
      </article>
    `;
    renderIqReview(result);
    elements.profileBars.innerHTML = "";
  } else {
    const label = getEqLabel(result.percent);
    elements.resultTitle.textContent = `${t("eqResponseScore")} ${Math.round(result.percent * 100)}`;
    elements.resultLead.textContent = currentLang === 'ko' 
        ? `${contextLabel} 기준 ${result.score}/${result.max}점입니다. ${label} 프로필이 나타났습니다.`
        : `${result.score}/${result.max} points based on ${contextLabel}. Profile: ${label}.`;
    
    elements.resultMetrics.innerHTML = `
      <article class="metric-card">
        <span class="metric-label">${t("eqResponseScore")}</span>
        <strong class="metric-value">${Math.round(result.percent * 100)}</strong>
        <p class="metric-note">${result.score}/${result.max}${t("score")}</p>
      </article>
      <article class="metric-card">
        <span class="metric-label">${t("profileLabel")}</span>
        <strong class="metric-value">${label}</strong>
        <p class="metric-note">${t("profileNote")}</p>
      </article>
      <article class="metric-card">
        <span class="metric-label">${t("timeOut")}</span>
        <strong class="metric-value">${result.timedOutCount}</strong>
        <p class="metric-note">${t("timeOutNoteEq")}</p>
      </article>
    `;
    renderEqProfile(result);
    renderEqReview(result);
  }

  updateSideSummary();
  drawSignal(isIq ? { iq: result.percent, eq: 0, progress: 1 } : { iq: 0, eq: result.percent, progress: 1 });
}

function renderIqReview(result) {
  const missed = result.questions.filter((question) => state.answers[question.id] !== question.answer);
  if (!missed.length) {
    elements.reviewList.innerHTML = `
      <article class="review-card">
        <strong>${t("allIqCorrect")}</strong>
        <p>${t("allIqCorrectDesc")}</p>
      </article>
    `;
    return;
  }

  elements.reviewList.innerHTML = missed
    .slice(0, 4)
    .map((question) => {
      const timeoutText = state.timedOut[question.id] ? t("timeOutPrefix") : "";
      return `
        <article class="review-card">
          <strong>${timeoutText}${question.skill}: ${t("correctPrefix")} ${question.choices[question.answer]}</strong>
          <p>${question.insight}</p>
        </article>
      `;
    })
    .join("");
}

function renderEqProfile(result) {
  elements.profileBars.innerHTML = Object.entries(result.domains)
    .filter(([, value]) => value.max > 0)
    .map(([domain, value]) => {
      const percent = Math.round((value.score / value.max) * 100);
      return `
        <div class="bar-row">
          <span class="bar-label">${domainLabels[domain]}</span>
          <div class="bar-track"><div class="bar-fill" style="width: ${percent}%"></div></div>
          <strong>${percent}</strong>
        </div>
      `;
    })
    .join("");
}

function renderEqReview(result) {
  const rankedDomains = Object.entries(result.domains)
    .filter(([, value]) => value.max > 0)
    .sort((a, b) => b[1].score / b[1].max - a[1].score / a[1].max);
  const strongest = rankedDomains[0]?.[0];
  const focus = rankedDomains[rankedDomains.length - 1]?.[0];
  elements.reviewList.innerHTML = `
    <article class="review-card">
      <strong>${t("strongDomain")}: ${domainLabels[strongest]}</strong>
      <p>${currentLang === 'ko' ? domainLabels[strongest] + t("strongDomainDesc") : 'The ' + domainLabels[strongest] + t("strongDomainDesc")}</p>
    </article>
    <article class="review-card">
      <strong>${t("weakDomain")}: ${domainLabels[focus]}</strong>
      <p>${t("weakDomainDesc")}</p>
    </article>
  `;
}

function copySummary() {
  const result = computeResult();
  const summary = result.testKey === "iq"
    ? [
        t("iqTestSummary"),
        `${t("ansCorrect")}: ${result.correct}/${result.total}`,
        `${t("iqEstIndex")}: ${result.index}`,
        `${t("timeOut")}: ${result.timedOutCount}`
      ]
    : [
        t("eqTestSummary"),
        `${t("scoreTxt")}: ${result.score}/${result.max}`,
        `${t("eqResponseScore")}: ${Math.round(result.percent * 100)}`,
        `${t("timeOut")}: ${result.timedOutCount}`
      ];

  navigator.clipboard
    .writeText(summary.join("\n"))
    .then(() => {
      elements.copyStatus.textContent = t("copied");
    })
    .catch(() => {
      elements.copyStatus.textContent = summary.join(" / ");
    });
}

function getNextTestKey() {
  const keys = Object.keys(tests);
  const currentIndex = keys.indexOf(state.currentTest);
  return keys[(currentIndex + 1) % keys.length];
}

elements.testCards.forEach((card) => {
  card.addEventListener("click", () => startTest(card.dataset.test));
});

elements.countButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.questionCount = Number(button.dataset.count);
    updateQuestionCountPicker();
    updateSideSummary();
  });
});

elements.ageSelect.addEventListener("change", () => {
  state.context.ageGroup = elements.ageSelect.value;
});

elements.nextBtn.addEventListener("click", advanceQuestion);
elements.quitBtn.addEventListener("click", showStart);
elements.homeBtn.addEventListener("click", showStart);
elements.chooseBtn.addEventListener("click", () => startTest(getNextTestKey()));
elements.restartBtn.addEventListener("click", () => startTest(state.currentTest));
elements.copyBtn.addEventListener("click", copySummary);

// Initialize i18n
setLanguage('ko');
