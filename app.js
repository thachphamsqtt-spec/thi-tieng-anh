/**
 * MIL-ENGLISH PRO • APPLICATION LOGIC
 * Interactive Study App for 50 Military English Q&As
 */

// ==========================================
// 1. STATE & STORAGE MANAGEMENT
// ==========================================

const STORAGE_KEY_PROGRESS = 'mil_english_progress_v1';
const STORAGE_KEY_SETTINGS = 'mil_english_settings_v1';

class AppState {
  constructor() {
    this.mastered = new Set();
    this.starred = new Set();
    this.settings = {
      theme: 'dark',
      soundEnabled: true,
      speechRate: 1.0,
      hideViDefault: false,
      hideAnsDefault: false,
      showIpa: true
    };
    
    // Runtime UI State
    this.activeTab = 'flashcards';
    this.flashcardFilter = 'all';
    this.flashcards = [];
    this.currentCardIdx = 0;
    this.isCardFlipped = false;
    this.showFrontVi = false;

    // Quiz State
    this.quizPool = [];
    this.quizQuestions = [];
    this.quizCurrentIdx = 0;
    this.quizScore = 0;
    this.quizTimer = null;
    this.quizTimeLeft = 30;
    this.quizTimerPerQuestion = 30;
    this.quizWrongQuestions = [];
    this.quizSelectedOptionIdx = null;
    this.quizCurrentOptions = [];

    // Typing State
    this.typingCurrentQId = 1;

    // Vocab Match State
    this.vocabPairs = [];
    this.vocabSelectedCard = null;
    this.vocabScore = 0;
    this.vocabMatchedCount = 0;

    // Directory State
    this.dirFilter = 'all';
    this.dirSearchQuery = '';
    this.dirHideVi = false;
    this.dirHideAns = false;

    this.loadFromStorage();
  }

  loadFromStorage() {
    try {
      const savedProg = localStorage.getItem(STORAGE_KEY_PROGRESS);
      if (savedProg) {
        const data = JSON.parse(savedProg);
        if (data.mastered) this.mastered = new Set(data.mastered);
        if (data.starred) this.starred = new Set(data.starred);
      }

      const savedSettings = localStorage.getItem(STORAGE_KEY_SETTINGS);
      if (savedSettings) {
        this.settings = { ...this.settings, ...JSON.parse(savedSettings) };
      }
    } catch (e) {
      console.warn('Failed to read from localStorage:', e);
    }
  }

  saveToStorage() {
    try {
      const progData = {
        mastered: Array.from(this.mastered),
        starred: Array.from(this.starred),
        updatedAt: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progData));
      localStorage.setItem(STORAGE_KEY_SETTINGS, JSON.stringify(this.settings));
    } catch (e) {
      console.warn('Failed to save to localStorage:', e);
    }
    this.updateGlobalHeaderStats();
  }

  toggleMastered(id) {
    if (this.mastered.has(id)) {
      this.mastered.delete(id);
    } else {
      this.mastered.add(id);
    }
    this.saveToStorage();
  }

  toggleStarred(id) {
    if (this.starred.has(id)) {
      this.starred.delete(id);
    } else {
      this.starred.add(id);
    }
    this.saveToStorage();
  }

  updateGlobalHeaderStats() {
    const total = QUESTIONS_DATA.length;
    const mCount = this.mastered.size;
    const sCount = this.starred.size;
    const pct = Math.round((mCount / total) * 100);

    const mEl = document.getElementById('headerMasteredCount');
    const pEl = document.getElementById('headerPercent');
    const sEl = document.getElementById('headerStarredCount');
    const sBadge = document.getElementById('starredCountBadge');
    const uBadge = document.getElementById('unmasteredCountBadge');

    if (mEl) mEl.textContent = `${mCount}/${total}`;
    if (pEl) pEl.textContent = `(${pct}%)`;
    if (sEl) sEl.textContent = sCount;
    if (sBadge) sBadge.textContent = sCount;
    if (uBadge) uBadge.textContent = total - mCount;
  }
}

const state = new AppState();

// ==========================================
// 2. AUDIO & SOUND EFFECTS (WEB AUDIO API)
// ==========================================

class SoundManager {
  constructor() {
    this.ctx = null;
  }

  initContext() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) this.ctx = new AudioContext();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playChime() {
    if (!state.settings.soundEnabled) return;
    this.initContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(523.25, t); // C5
    osc1.frequency.exponentialRampToValueAtTime(659.25, t + 0.12); // E5

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(783.99, t + 0.12); // G5
    osc2.frequency.exponentialRampToValueAtTime(1046.50, t + 0.28); // C6

    gain.gain.setValueAtTime(0.18, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.6);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.ctx.destination);

    osc1.start(t);
    osc2.start(t + 0.12);
    osc1.stop(t + 0.6);
    osc2.stop(t + 0.6);
  }

  playBuzz() {
    if (!state.settings.soundEnabled) return;
    this.initContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(160, t);
    osc.frequency.linearRampToValueAtTime(110, t + 0.25);

    gain.gain.setValueAtTime(0.18, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.3);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.3);
  }

  playFlip() {
    if (!state.settings.soundEnabled) return;
    this.initContext();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, t);
    osc.frequency.exponentialRampToValueAtTime(800, t + 0.08);

    gain.gain.setValueAtTime(0.08, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.08);
  }

  playFanfare() {
    if (!state.settings.soundEnabled) return;
    this.initContext();
    if (!this.ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, i) => {
      const t = this.ctx.currentTime + i * 0.12;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t);
      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.35);
    });
  }
}

const sounds = new SoundManager();

// ==========================================
// 3. TEXT-TO-SPEECH (WEB SPEECH SYNTHESIS)
// ==========================================

function speakEnglish(text) {
  if (!('speechSynthesis' in window)) {
    showToast('Trình duyệt không hỗ trợ đọc giọng nói Text-To-Speech.', 'warning');
    return;
  }

  window.speechSynthesis.cancel(); // Stop any previous speech
  const cleanText = text.replace(/–|-/g, ' ').trim();
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'en-US';
  utterance.rate = state.settings.speechRate || 1.0;

  // Prefer natural English voices
  const voices = window.speechSynthesis.getVoices();
  const enVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('US')));
  if (enVoice) utterance.voice = enVoice;

  window.speechSynthesis.speak(utterance);
}

// Pre-load voices
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

// ==========================================
// 4. CONFETTI CELEBRATION EFFECT
// ==========================================

function launchConfetti(duration = 2500) {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#06b6d4', '#10b981', '#f59e0b', '#3b82f6', '#ec4899', '#ffffff'];

  for (let i = 0; i < 90; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height * 0.4,
      vx: (Math.random() - 0.5) * 16,
      vy: Math.random() * -12 - 4,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      opacity: 1
    });
  }

  const startTime = Date.now();

  function animate() {
    const elapsed = Date.now() - startTime;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.rotation += p.rotSpeed;
      p.opacity = Math.max(0, 1 - elapsed / duration);

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.5);
      ctx.restore();
    });

    if (elapsed < duration) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  animate();
  sounds.playFanfare();
}

// Toast Notification
let toastTimer = null;
function showToast(msg, type = 'info') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.className = `toast ${type} show`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.className = 'toast';
  }, 2800);
}

// ==========================================
// 5. TAB 1: FLASHCARDS IMPLEMENTATION
// ==========================================

function initFlashcards() {
  applyFlashcardFilter(state.flashcardFilter);

  // Flip Card Action
  const card = document.getElementById('flashcard');
  const flipBtn = document.getElementById('flipCardBtn');
  const handleFlip = () => {
    state.isCardFlipped = !state.isCardFlipped;
    card.classList.toggle('flipped', state.isCardFlipped);
    sounds.playFlip();
  };

  card.addEventListener('click', (e) => {
    // Avoid flipping when clicking action buttons on card
    if (e.target.closest('button') || e.target.closest('.vocab-chip')) return;
    handleFlip();
  });

  flipBtn.addEventListener('click', handleFlip);

  // Next / Prev Card
  document.getElementById('nextCardBtn').addEventListener('click', () => nextFlashcard(1));
  document.getElementById('prevCardBtn').addEventListener('click', () => nextFlashcard(-1));

  // Mastered / Unmastered Actions
  document.getElementById('markMasteredBtn').addEventListener('click', () => {
    const currentQ = state.flashcards[state.currentCardIdx];
    if (!currentQ) return;
    if (!state.mastered.has(currentQ.id)) {
      state.toggleMastered(currentQ.id);
      showToast(`Đã ghi nhớ: Câu ${currentQ.id}! 🎉`, 'success');
      sounds.playChime();
    }
    nextFlashcard(1);
  });

  document.getElementById('markUnmasteredBtn').addEventListener('click', () => {
    const currentQ = state.flashcards[state.currentCardIdx];
    if (!currentQ) return;
    if (state.mastered.has(currentQ.id)) {
      state.toggleMastered(currentQ.id);
    }
    showToast(`Đã đưa Câu ${currentQ.id} vào danh sách cần ôn lại!`, 'warning');
    sounds.playBuzz();
    nextFlashcard(1);
  });

  // Star Button
  const toggleCurrentStar = () => {
    const currentQ = state.flashcards[state.currentCardIdx];
    if (!currentQ) return;
    state.toggleStarred(currentQ.id);
    updateFlashcardStarUI(currentQ.id);
    showToast(state.starred.has(currentQ.id) ? `Đã gắn sao Câu ${currentQ.id} ⭐` : `Đã bỏ sao Câu ${currentQ.id}`);
  };

  document.getElementById('frontStarBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleCurrentStar();
  });
  document.getElementById('backStarBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleCurrentStar();
  });

  // Speech Buttons
  document.getElementById('frontSpeakBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    const currentQ = state.flashcards[state.currentCardIdx];
    if (currentQ) speakEnglish(currentQ.question_en);
  });

  document.getElementById('backSpeakBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    const currentQ = state.flashcards[state.currentCardIdx];
    if (currentQ) speakEnglish(currentQ.answer_en);
  });

  // Vietnamese translation toggle
  document.getElementById('toggleFrontViBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    state.showFrontVi = !state.showFrontVi;
    const viText = document.getElementById('frontQuestionVi');
    const toggleBtn = document.getElementById('toggleFrontViBtn');
    if (state.showFrontVi) {
      viText.classList.remove('blurred');
      toggleBtn.textContent = 'Ẩn tiếng Việt';
    } else {
      viText.classList.add('blurred');
      toggleBtn.textContent = 'Hiện tiếng Việt';
    }
  });

  // Filter Chips
  document.querySelectorAll('.filter-chip[data-filter]').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip[data-filter]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      applyFlashcardFilter(chip.getAttribute('data-filter'));
    });
  });

  // Shuffle button
  document.getElementById('shuffleCardsBtn').addEventListener('click', () => {
    shuffleArray(state.flashcards);
    state.currentCardIdx = 0;
    renderCurrentFlashcard();
    showToast('Đã xáo trộn thứ tự các câu hỏi! 🔀');
    sounds.playFlip();
  });
}

function applyFlashcardFilter(filterName) {
  state.flashcardFilter = filterName;
  let list = [...QUESTIONS_DATA];

  if (filterName === 'part1') {
    list = list.filter(q => q.part === 1);
  } else if (filterName === 'part2') {
    list = list.filter(q => q.part === 2);
  } else if (filterName === 'starred') {
    list = list.filter(q => state.starred.has(q.id));
  } else if (filterName === 'unmastered') {
    list = list.filter(q => !state.mastered.has(q.id));
  }

  if (list.length === 0) {
    list = [...QUESTIONS_DATA];
    showToast('Không có câu nào thỏa mãn bộ lọc, đã hiển thị tất cả.', 'warning');
  }

  state.flashcards = list;
  state.currentCardIdx = 0;
  renderCurrentFlashcard();
}

function renderCurrentFlashcard() {
  const q = state.flashcards[state.currentCardIdx];
  if (!q) return;

  const card = document.getElementById('flashcard');
  state.isCardFlipped = false;
  card.classList.remove('flipped');

  // Meta & Progress
  document.getElementById('currentCardNum').textContent = state.currentCardIdx + 1;
  document.getElementById('totalCardsNum').textContent = state.flashcards.length;
  const pct = Math.round(((state.currentCardIdx + 1) / state.flashcards.length) * 100);
  document.getElementById('cardProgressBar').style.width = `${pct}%`;

  // Front Badges & Content
  const partClass = q.part === 1 ? 'badge-p1' : 'badge-p2';
  const frontBadge = document.getElementById('frontPartBadge');
  const backBadge = document.getElementById('backPartBadge');
  frontBadge.className = `part-badge ${partClass}`;
  frontBadge.textContent = `Câu ${q.id} • ${q.part === 1 ? 'Phần 1: CĐS & Đổi Mới' : 'Phần 2: Chế Độ Ngày & Tuần'}`;
  backBadge.className = `part-badge ${partClass}`;
  backBadge.textContent = `Câu ${q.id} • Đáp Án Chuẩn`;

  document.getElementById('frontQuestionEn').textContent = q.question_en;
  const frontIpaEl = document.getElementById('frontQuestionIpa');
  if (frontIpaEl) frontIpaEl.textContent = q.question_ipa || '';
  document.getElementById('frontQuestionVi').textContent = q.question_vi;

  // Reset VN blur according to state
  const viText = document.getElementById('frontQuestionVi');
  const toggleBtn = document.getElementById('toggleFrontViBtn');
  if (state.showFrontVi) {
    viText.classList.remove('blurred');
    toggleBtn.textContent = 'Ẩn tiếng Việt';
  } else {
    viText.classList.add('blurred');
    toggleBtn.textContent = 'Hiện tiếng Việt';
  }

  // Back Content
  document.getElementById('backAnswerEn').textContent = q.answer_en;
  const backIpaEl = document.getElementById('backAnswerIpa');
  if (backIpaEl) backIpaEl.textContent = q.answer_ipa || '';
  document.getElementById('backAnswerVi').textContent = q.answer_vi;

  // Star status
  updateFlashcardStarUI(q.id);

  // Vocabulary Chips
  const vocabContainer = document.getElementById('backVocabChips');
  vocabContainer.innerHTML = '';
  if (q.vocab && q.vocab.length > 0) {
    q.vocab.forEach(v => {
      const chip = document.createElement('div');
      chip.className = 'vocab-chip';
      chip.title = `Bấm để nghe phát âm "${v.en}"`;
      chip.innerHTML = `
        <span class="vocab-en">${escapeHTML(v.en)}</span>
        ${v.ipa ? `<span class="vocab-ipa">${escapeHTML(v.ipa)}</span>` : ''}
        <span class="vocab-sep">–</span>
        <span class="vocab-vi">${escapeHTML(v.vi)}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
        </svg>
      `;
      chip.addEventListener('click', (e) => {
        e.stopPropagation();
        speakEnglish(v.en);
      });
      vocabContainer.appendChild(chip);
    });
  } else {
    vocabContainer.innerHTML = '<span style="color:var(--text-muted);font-size:0.85rem;">Không có từ vựng riêng cho câu này.</span>';
  }

  // Note Box
  const noteBox = document.getElementById('backNoteBox');
  const noteText = document.getElementById('backNoteText');
  if (q.note) {
    noteBox.classList.remove('hidden');
    noteText.textContent = q.note;
  } else {
    noteBox.classList.add('hidden');
    noteText.textContent = '';
  }
}

function updateFlashcardStarUI(qid) {
  const isStarred = state.starred.has(qid);
  const frontBtn = document.getElementById('frontStarBtn');
  const backBtn = document.getElementById('backStarBtn');
  if (isStarred) {
    frontBtn.classList.add('starred');
    backBtn.classList.add('starred');
  } else {
    frontBtn.classList.remove('starred');
    backBtn.classList.remove('starred');
  }
}

function nextFlashcard(direction) {
  state.currentCardIdx += direction;
  if (state.currentCardIdx >= state.flashcards.length) {
    state.currentCardIdx = 0;
    showToast('Bạn đã duyệt hết lượt thẻ! Chúc mừng! 🎉', 'success');
  } else if (state.currentCardIdx < 0) {
    state.currentCardIdx = state.flashcards.length - 1;
  }
  renderCurrentFlashcard();
}

// ==========================================
// 6. TAB 2: MULTIPLE CHOICE QUIZ ENGINE
// ==========================================

function initQuiz() {
  document.getElementById('startQuizBtn').addEventListener('click', startNewQuiz);
  document.getElementById('retryQuizBtn').addEventListener('click', startNewQuiz);
  document.getElementById('newQuizBtn').addEventListener('click', () => {
    document.getElementById('quizResultScreen').classList.add('hidden');
    document.getElementById('quizSetupScreen').classList.remove('hidden');
  });

  document.getElementById('reviewWrongBtn').addEventListener('click', () => {
    if (state.quizWrongQuestions.length === 0) return;
    state.quizQuestions = [...state.quizWrongQuestions];
    state.quizCurrentIdx = 0;
    state.quizScore = 0;
    state.quizWrongQuestions = [];
    document.getElementById('quizResultScreen').classList.add('hidden');
    document.getElementById('quizActiveScreen').classList.remove('hidden');
    renderQuizQuestion();
  });

  document.getElementById('quizNextBtn').addEventListener('click', nextQuizQuestion);

  document.getElementById('quizSpeakBtn').addEventListener('click', () => {
    const q = state.quizQuestions[state.quizCurrentIdx];
    if (q) speakEnglish(q.question_en);
  });

  document.getElementById('quizToggleViBtn').addEventListener('click', () => {
    const viEl = document.getElementById('quizQuestionVi');
    viEl.classList.toggle('hidden');
  });
}

function startNewQuiz() {
  const partVal = document.getElementById('quizPartSelect').value;
  const countVal = parseInt(document.getElementById('quizCountSelect').value, 10);
  const timerVal = parseInt(document.getElementById('quizTimerSelect').value, 10);

  let pool = [...QUESTIONS_DATA];
  if (partVal === 'part1') pool = pool.filter(q => q.part === 1);
  else if (partVal === 'part2') pool = pool.filter(q => q.part === 2);
  else if (partVal === 'starred') pool = pool.filter(q => state.starred.has(q.id));
  else if (partVal === 'unmastered') pool = pool.filter(q => !state.mastered.has(q.id));

  if (pool.length === 0) {
    showToast('Không có câu hỏi phù hợp, sử dụng tất cả 50 câu.', 'warning');
    pool = [...QUESTIONS_DATA];
  }

  shuffleArray(pool);
  state.quizQuestions = pool.slice(0, Math.min(countVal, pool.length));
  state.quizCurrentIdx = 0;
  state.quizScore = 0;
  state.quizWrongQuestions = [];
  state.quizTimerPerQuestion = timerVal;

  document.getElementById('quizSetupScreen').classList.add('hidden');
  document.getElementById('quizResultScreen').classList.add('hidden');
  document.getElementById('quizActiveScreen').classList.remove('hidden');

  renderQuizQuestion();
}

function renderQuizQuestion() {
  clearInterval(state.quizTimer);
  state.quizSelectedOptionIdx = null;

  const q = state.quizQuestions[state.quizCurrentIdx];
  const total = state.quizQuestions.length;

  // Status Bar
  document.getElementById('quizCurrentIndex').textContent = state.quizCurrentIdx + 1;
  document.getElementById('quizTotalQuestions').textContent = total;
  document.getElementById('quizCurrentScore').textContent = state.quizScore;
  const pct = Math.round(((state.quizCurrentIdx + 1) / total) * 100);
  document.getElementById('quizProgressBar').style.width = `${pct}%`;

  // Question Info
  const partBadge = document.getElementById('quizBadge');
  partBadge.className = `part-badge ${q.part === 1 ? 'badge-p1' : 'badge-p2'}`;
  partBadge.textContent = `Câu ${q.id} • Phần ${q.part}`;

  document.getElementById('quizQuestionText').textContent = q.question_en;
  const quizIpaEl = document.getElementById('quizQuestionIpa');
  if (quizIpaEl) quizIpaEl.textContent = q.question_ipa || '';
  const viEl = document.getElementById('quizQuestionVi');
  viEl.textContent = q.question_vi;
  viEl.classList.add('hidden');

  // Hide explanation
  document.getElementById('quizExplanationBox').classList.add('hidden');

  // Generate 4 Options: 1 correct + 3 smart distractors
  const options = generateQuizOptions(q);

  const grid = document.getElementById('quizOptionsGrid');
  grid.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];

  options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option-btn';
    btn.setAttribute('data-idx', idx);
    btn.innerHTML = `
      <span class="option-badge">${letters[idx]}</span>
      <span class="option-text">${escapeHTML(opt.text)}</span>
    `;

    btn.addEventListener('click', () => handleQuizSelect(opt, idx, options));
    grid.appendChild(btn);
  });

  state.quizCurrentOptions = options;

  // Timer handling
  const timerBox = document.getElementById('quizTimerBox');
  if (state.quizTimerPerQuestion > 0) {
    timerBox.classList.remove('hidden');
    state.quizTimeLeft = state.quizTimerPerQuestion;
    document.getElementById('quizTimerCount').textContent = state.quizTimeLeft;
    timerBox.classList.remove('urgent');
    startQuizTimer();
  } else {
    timerBox.classList.add('hidden');
  }
}

function startQuizTimer() {
  clearInterval(state.quizTimer);
  const timerBox = document.getElementById('quizTimerBox');

  state.quizTimer = setInterval(() => {
    state.quizTimeLeft--;
    document.getElementById('quizTimerCount').textContent = state.quizTimeLeft;

    if (state.quizTimeLeft <= 5) {
      timerBox.classList.add('urgent');
    }

    if (state.quizTimeLeft <= 0) {
      clearInterval(state.quizTimer);
      // Auto mark timeout
      handleQuizTimeout(state.quizCurrentOptions);
    }
  }, 1000);
}

// Resume the countdown only for an unanswered question of a running quiz
function isQuizAwaitingAnswer() {
  return state.quizTimerPerQuestion > 0 &&
    state.quizSelectedOptionIdx === null &&
    state.quizTimeLeft > 0 &&
    !document.getElementById('quizActiveScreen').classList.contains('hidden');
}

function generateQuizOptions(correctQ) {
  // Correct answer object
  const correctOpt = { text: correctQ.answer_en, isCorrect: true, q: correctQ };

  // Select 3 distractors
  // Prioritize same part first for thematic similarity
  let candidates = QUESTIONS_DATA.filter(item => item.id !== correctQ.id && item.part === correctQ.part);
  if (candidates.length < 3) {
    candidates = QUESTIONS_DATA.filter(item => item.id !== correctQ.id);
  }
  shuffleArray(candidates);
  const distractors = candidates.slice(0, 3).map(item => ({
    text: item.answer_en,
    isCorrect: false,
    q: item
  }));

  const allOpts = [correctOpt, ...distractors];
  shuffleArray(allOpts);
  return allOpts;
}

function handleQuizSelect(selectedOpt, selectedIdx, allOptions) {
  if (state.quizSelectedOptionIdx !== null) return; // already answered
  clearInterval(state.quizTimer);
  state.quizSelectedOptionIdx = selectedIdx;

  const currentQ = state.quizQuestions[state.quizCurrentIdx];
  const allBtns = document.querySelectorAll('.quiz-option-btn');
  allBtns.forEach(b => b.disabled = true);

  const selectedBtn = allBtns[selectedIdx];
  const explanationBox = document.getElementById('quizExplanationBox');
  const resultIcon = document.getElementById('quizResultIcon');
  const resultHeading = document.getElementById('quizResultHeading');
  const explanationVi = document.getElementById('quizExplanationVi');
  const vocabChips = document.getElementById('quizVocabChips');

  if (selectedOpt.isCorrect) {
    state.quizScore++;
    selectedBtn.classList.add('correct');
    sounds.playChime();
    resultIcon.textContent = '✅';
    resultHeading.textContent = 'Chính xác! Xuất sắc!';
    resultHeading.style.color = 'var(--emerald-primary)';
    // Also automatically mark as mastered in user study tracker
    if (!state.mastered.has(currentQ.id)) {
      state.toggleMastered(currentQ.id);
    }
  } else {
    selectedBtn.classList.add('wrong');
    sounds.playBuzz();
    resultIcon.textContent = '❌';
    resultHeading.textContent = 'Chưa chính xác!';
    resultHeading.style.color = 'var(--rose-primary)';
    state.quizWrongQuestions.push(currentQ);

    // Highlight the correct one
    allOptions.forEach((opt, idx) => {
      if (opt.isCorrect) {
        allBtns[idx].classList.add('correct');
      }
    });
  }

  // Explanation content
  explanationVi.innerHTML = `
    <strong>Đáp án:</strong> ${escapeHTML(currentQ.answer_en)}<br>
    <div class="dir-ans-ipa">${escapeHTML(currentQ.answer_ipa || '')}</div>
    <strong>Dịch nghĩa:</strong> ${escapeHTML(currentQ.answer_vi)}
  `;

  vocabChips.innerHTML = '';
  if (currentQ.vocab && currentQ.vocab.length > 0) {
    currentQ.vocab.forEach(v => {
      const chip = document.createElement('span');
      chip.className = 'vocab-chip';
      chip.innerHTML = `<span class="vocab-en">${escapeHTML(v.en)}</span> ${v.ipa ? `<span class="vocab-ipa">${escapeHTML(v.ipa)}</span> ` : ''}: <span class="vocab-vi">${escapeHTML(v.vi)}</span>`;
      vocabChips.appendChild(chip);
    });
  }

  explanationBox.classList.remove('hidden');
  document.getElementById('quizCurrentScore').textContent = state.quizScore;
}

function handleQuizTimeout(allOptions) {
  if (state.quizSelectedOptionIdx !== null) return;
  state.quizSelectedOptionIdx = -1;

  const currentQ = state.quizQuestions[state.quizCurrentIdx];
  state.quizWrongQuestions.push(currentQ);
  sounds.playBuzz();

  const allBtns = document.querySelectorAll('.quiz-option-btn');
  allBtns.forEach(b => b.disabled = true);

  allOptions.forEach((opt, idx) => {
    if (opt.isCorrect) {
      allBtns[idx].classList.add('correct');
    }
  });

  const explanationBox = document.getElementById('quizExplanationBox');
  document.getElementById('quizResultIcon').textContent = '⏰';
  const heading = document.getElementById('quizResultHeading');
  heading.textContent = 'Hết thời gian!';
  heading.style.color = 'var(--rose-primary)';

  document.getElementById('quizExplanationVi').innerHTML = `
    <strong>Đáp án chuẩn:</strong> ${escapeHTML(currentQ.answer_en)}<br>
    <div class="dir-ans-ipa">${escapeHTML(currentQ.answer_ipa || '')}</div>
    <strong>Dịch nghĩa:</strong> ${escapeHTML(currentQ.answer_vi)}
  `;
  explanationBox.classList.remove('hidden');
}

function nextQuizQuestion() {
  state.quizCurrentIdx++;
  if (state.quizCurrentIdx >= state.quizQuestions.length) {
    showQuizResult();
  } else {
    renderQuizQuestion();
  }
}

function showQuizResult() {
  clearInterval(state.quizTimer);
  document.getElementById('quizActiveScreen').classList.add('hidden');
  document.getElementById('quizResultScreen').classList.remove('hidden');

  const total = state.quizQuestions.length;
  const score = state.quizScore;
  const wrong = total - score;
  const pct = Math.round((score / total) * 100);

  document.getElementById('resultScoreBig').textContent = `${score}/${total}`;
  document.getElementById('resultScorePercent').textContent = `${pct}%`;
  document.getElementById('resStatCorrect').textContent = score;
  document.getElementById('resStatIncorrect').textContent = wrong;

  const trophy = document.getElementById('resultTrophyIcon');
  const title = document.getElementById('resultTitle');
  const subtitle = document.getElementById('resultSubtitle');

  if (pct >= 90) {
    trophy.textContent = '🎖️';
    title.textContent = 'Xuất Sắc! Điểm Tuyệt Đối!';
    subtitle.textContent = 'Bạn đã nắm rất vững kiến thức và từ vựng của bộ đề này.';
    launchConfetti(3500);
  } else if (pct >= 75) {
    trophy.textContent = '🌟';
    title.textContent = 'Rất Tốt!';
    subtitle.textContent = 'Nắm vững phần lớn các nội dung. Hãy ôn lại những câu còn phân vân nhé!';
    launchConfetti(2000);
  } else {
    trophy.textContent = '💪';
    title.textContent = 'Cố Lên! Cần Ôn Tập Thêm!';
    subtitle.textContent = 'Đừng nản lòng, hãy dùng Flashcards và luyện lại các câu sai dưới đây!';
  }

  const reviewWrongBtn = document.getElementById('reviewWrongBtn');
  if (wrong > 0) {
    reviewWrongBtn.classList.remove('hidden');
    document.getElementById('wrongCountNumber').textContent = wrong;
  } else {
    reviewWrongBtn.classList.add('hidden');
  }
}

// ==========================================
// 7. TAB 3: TYPING & ACTIVE RECALL
// ==========================================

function initTyping() {
  const select = document.getElementById('typingQuestionSelect');
  select.innerHTML = '';
  QUESTIONS_DATA.forEach(q => {
    const opt = document.createElement('option');
    opt.value = q.id;
    opt.textContent = `Câu ${q.id}: ${q.question_en.substring(0, 50)}...`;
    select.appendChild(opt);
  });

  select.addEventListener('change', (e) => {
    state.typingCurrentQId = parseInt(e.target.value, 10);
    renderTypingQuestion();
  });

  document.getElementById('typingPrevBtn').addEventListener('click', () => {
    if (state.typingCurrentQId > 1) {
      state.typingCurrentQId--;
      select.value = state.typingCurrentQId;
      renderTypingQuestion();
    }
  });

  document.getElementById('typingNextBtn').addEventListener('click', () => {
    if (state.typingCurrentQId < QUESTIONS_DATA.length) {
      state.typingCurrentQId++;
      select.value = state.typingCurrentQId;
      renderTypingQuestion();
    }
  });

  document.getElementById('typingSpeakPromptBtn').addEventListener('click', () => {
    const q = QUESTIONS_DATA.find(i => i.id === state.typingCurrentQId);
    if (q) speakEnglish(q.question_en);
  });

  document.getElementById('typingHintBtn').addEventListener('click', () => {
    const q = QUESTIONS_DATA.find(i => i.id === state.typingCurrentQId);
    if (!q) return;
    const words = q.answer_en.split(/\s+/);
    const hint = words.map(w => {
      const match = w.match(/^([a-zA-Z0-9])(.*)$/);
      if (match) {
        return match[1] + '_'.repeat(Math.max(1, match[2].length));
      }
      return w;
    }).join(' ');

    const hintBox = document.getElementById('typingHintDisplay');
    hintBox.textContent = `Gợi ý chữ cái đầu: ${hint}`;
    hintBox.classList.remove('hidden');
  });

  document.getElementById('typingShowAnswerBtn').addEventListener('click', () => {
    const q = QUESTIONS_DATA.find(i => i.id === state.typingCurrentQId);
    if (!q) return;
    const hintBox = document.getElementById('typingHintDisplay');
    hintBox.textContent = `Đáp án: ${q.answer_en}`;
    hintBox.classList.remove('hidden');
  });

  document.getElementById('typingClearBtn').addEventListener('click', () => {
    document.getElementById('typingInput').value = '';
    document.getElementById('typingAccuracy').textContent = '0%';
    document.getElementById('typingResultBox').classList.add('hidden');
    document.getElementById('typingHintDisplay').classList.add('hidden');
  });

  document.getElementById('typingCheckBtn').addEventListener('click', evaluateTyping);

  // Live input evaluation
  document.getElementById('typingInput').addEventListener('input', () => {
    const q = QUESTIONS_DATA.find(i => i.id === state.typingCurrentQId);
    if (!q) return;
    const userText = document.getElementById('typingInput').value.trim();
    const sim = calculateSimilarity(userText, q.answer_en);
    document.getElementById('typingAccuracy').textContent = `${sim}%`;
  });

  renderTypingQuestion();
}

function renderTypingQuestion() {
  const q = QUESTIONS_DATA.find(i => i.id === state.typingCurrentQId);
  if (!q) return;

  const badge = document.getElementById('typingPartBadge');
  badge.className = `part-badge ${q.part === 1 ? 'badge-p1' : 'badge-p2'}`;
  badge.textContent = `Câu ${q.id} • Phần ${q.part}`;

  document.getElementById('typingQuestionEn').textContent = q.question_en;
  const tIpaEl = document.getElementById('typingQuestionIpa');
  if (tIpaEl) tIpaEl.textContent = q.question_ipa || '';
  document.getElementById('typingQuestionVi').textContent = q.question_vi;

  document.getElementById('typingInput').value = '';
  document.getElementById('typingAccuracy').textContent = '0%';
  document.getElementById('typingResultBox').classList.add('hidden');
  document.getElementById('typingHintDisplay').classList.add('hidden');
}

function evaluateTyping() {
  const q = QUESTIONS_DATA.find(i => i.id === state.typingCurrentQId);
  if (!q) return;

  const userText = document.getElementById('typingInput').value.trim();
  const sim = calculateSimilarity(userText, q.answer_en);

  const resBox = document.getElementById('typingResultBox');
  const badge = document.getElementById('typingStatusBadge');
  const userEcho = document.getElementById('userTypedEcho');
  const stdEcho = document.getElementById('standardAnswerEcho');
  const stdViEcho = document.getElementById('standardAnswerViEcho');

  userEcho.textContent = userText || '(Chưa nhập nội dung)';
  stdEcho.innerHTML = `${escapeHTML(q.answer_en)}<div class="dir-ans-ipa">${escapeHTML(q.answer_ipa || '')}</div>`;
  stdViEcho.textContent = q.answer_vi;

  if (sim >= 85) {
    badge.textContent = `Xuất sắc! Độ chính xác: ${sim}%`;
    badge.style.color = 'var(--emerald-primary)';
    sounds.playChime();
    if (!state.mastered.has(q.id)) state.toggleMastered(q.id);
  } else if (sim >= 60) {
    badge.textContent = `Khá tốt! Độ chính xác: ${sim}%, cần hoàn thiện thêm`;
    badge.style.color = 'var(--gold-primary)';
  } else {
    badge.textContent = `Độ chính xác: ${sim}%. Hãy đọc kỹ đáp án chuẩn bên dưới:`;
    badge.style.color = 'var(--rose-primary)';
    sounds.playBuzz();
  }

  resBox.classList.remove('hidden');
}

function calculateSimilarity(s1, s2) {
  if (!s1 || !s2) return 0;
  const clean1 = s1.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim().split(/\s+/);
  const clean2 = s2.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim().split(/\s+/);

  // Count each answer word at most as many times as it appears in the answer
  let matches = 0;
  const remaining = new Map();
  clean2.forEach(w => remaining.set(w, (remaining.get(w) || 0) + 1));
  clean1.forEach(w => {
    const left = remaining.get(w) || 0;
    if (left > 0) {
      matches++;
      remaining.set(w, left - 1);
    }
  });

  const wordSim = (matches / Math.max(clean1.length, clean2.length)) * 100;
  return Math.min(100, Math.round(wordSim));
}

// ==========================================
// 8. TAB 4: VOCABULARY MATCH MINI-GAME
// ==========================================

function initVocabGame() {
  document.getElementById('newVocabRoundBtn').addEventListener('click', startNewVocabRound);
  startNewVocabRound();
}

function startNewVocabRound() {
  // Collect all vocabulary from QUESTIONS_DATA
  const allVocab = [];
  QUESTIONS_DATA.forEach(q => {
    if (q.vocab) {
      q.vocab.forEach(v => {
        if (v.en && v.vi && v.en.length > 2 && v.vi.length > 2) {
          allVocab.push(v);
        }
      });
    }
  });

  shuffleArray(allVocab);
  // Pick 6 unique pairs: no English or Vietnamese text may repeat,
  // otherwise two identical-looking cards would be ambiguous to match
  const chosenPairs = [];
  const usedEn = new Set();
  const usedVi = new Set();
  for (const v of allVocab) {
    const en = v.en.trim().toLowerCase();
    const vi = v.vi.trim().toLowerCase();
    if (usedEn.has(en) || usedVi.has(vi)) continue;
    usedEn.add(en);
    usedVi.add(vi);
    chosenPairs.push(v);
    if (chosenPairs.length === 6) break;
  }
  state.vocabPairs = chosenPairs;
  state.vocabMatchedCount = 0;
  state.vocabSelectedCard = null;

  document.getElementById('vocabGameScore').textContent = state.vocabScore;
  document.getElementById('vocabPairsLeft').textContent = `6/6`;

  const cards = [];
  chosenPairs.forEach((pair, pairIdx) => {
    cards.push({ pairId: pairIdx, type: 'en', text: pair.en });
    cards.push({ pairId: pairIdx, type: 'vi', text: pair.vi });
  });

  shuffleArray(cards);

  const grid = document.getElementById('vocabGameGrid');
  grid.innerHTML = '';

  cards.forEach((card, idx) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'vocab-match-card';
    cardEl.setAttribute('data-pair-id', card.pairId);
    cardEl.setAttribute('data-type', card.type);
    cardEl.setAttribute('data-idx', idx);

    cardEl.innerHTML = `
      <span class="vcard-lang">${card.type === 'en' ? 'ENGLISH' : 'TIẾNG VIỆT'}</span>
      <span class="vcard-text">${escapeHTML(card.text)}</span>
    `;

    cardEl.addEventListener('click', () => handleVocabCardClick(cardEl, card));
    grid.appendChild(cardEl);
  });
}

function handleVocabCardClick(cardEl, cardData) {
  if (cardEl.classList.contains('matched') || cardEl.classList.contains('selected')) return;

  if (cardData.type === 'en') {
    speakEnglish(cardData.text);
  }

  // First card selected
  if (!state.vocabSelectedCard) {
    state.vocabSelectedCard = { el: cardEl, data: cardData };
    cardEl.classList.add('selected');
    sounds.playFlip();
    return;
  }

  // Second card selected
  const first = state.vocabSelectedCard;

  // If clicked card of same language type, switch selection
  if (first.data.type === cardData.type) {
    first.el.classList.remove('selected');
    state.vocabSelectedCard = { el: cardEl, data: cardData };
    cardEl.classList.add('selected');
    sounds.playFlip();
    return;
  }

  // Check if they match
  if (first.data.pairId === cardData.pairId) {
    // Correct match!
    first.el.classList.remove('selected');
    first.el.classList.add('matched');
    cardEl.classList.add('matched');
    state.vocabSelectedCard = null;
    state.vocabScore += 10;
    state.vocabMatchedCount++;

    sounds.playChime();
    document.getElementById('vocabGameScore').textContent = state.vocabScore;
    document.getElementById('vocabPairsLeft').textContent = `${6 - state.vocabMatchedCount}/6`;

    if (state.vocabMatchedCount >= 6) {
      setTimeout(() => {
        showToast('Xuất sắc! Bạn đã ghép thành công tất cả 6 cặp từ vựng! 🏆', 'success');
        launchConfetti(2500);
      }, 300);
    }
  } else {
    // Wrong match
    cardEl.classList.add('wrong');
    first.el.classList.add('wrong');
    sounds.playBuzz();

    setTimeout(() => {
      cardEl.classList.remove('wrong', 'selected');
      first.el.classList.remove('wrong', 'selected');
      state.vocabSelectedCard = null;
    }, 500);
  }
}

// ==========================================
// 9. TAB 5: ALL 50 QUESTIONS DIRECTORY
// ==========================================

function initDirectory() {
  const searchInput = document.getElementById('dirSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');

  searchInput.addEventListener('input', (e) => {
    state.dirSearchQuery = e.target.value.trim().toLowerCase();
    if (state.dirSearchQuery) {
      clearSearchBtn.classList.remove('hidden');
    } else {
      clearSearchBtn.classList.add('hidden');
    }
    renderDirectoryQuestions();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    state.dirSearchQuery = '';
    clearSearchBtn.classList.add('hidden');
    renderDirectoryQuestions();
  });

  // Filter chips
  document.querySelectorAll('.filter-chip[data-dir-filter]').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip[data-dir-filter]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.dirFilter = chip.getAttribute('data-dir-filter');
      renderDirectoryQuestions();
    });
  });

  // Toggle All VI
  document.getElementById('toggleAllViBtn').addEventListener('click', () => {
    state.dirHideVi = !state.dirHideVi;
    document.getElementById('toggleAllViText').textContent = state.dirHideVi ? 'Hiện tiếng Việt' : 'Ẩn tiếng Việt';
    renderDirectoryQuestions();
  });

  // Toggle All Answers
  document.getElementById('toggleAllAnswersBtn').addEventListener('click', () => {
    state.dirHideAns = !state.dirHideAns;
    document.getElementById('toggleAllAnswersText').textContent = state.dirHideAns ? 'Hiện đáp án' : 'Ẩn đáp án';
    renderDirectoryQuestions();
  });

  // Print Cheat Sheet
  document.getElementById('printCheatSheetBtn').addEventListener('click', () => {
    // Open all questions before printing
    document.querySelectorAll('.q-item-card').forEach(c => c.classList.add('open'));
    window.print();
  });

  renderDirectoryQuestions();
}

function renderDirectoryQuestions() {
  const container = document.getElementById('questionsList');
  container.innerHTML = '';

  let list = [...QUESTIONS_DATA];

  // Apply Filter
  if (state.dirFilter === 'part1') list = list.filter(q => q.part === 1);
  else if (state.dirFilter === 'part2') list = list.filter(q => q.part === 2);
  else if (state.dirFilter === 'starred') list = list.filter(q => state.starred.has(q.id));
  else if (state.dirFilter === 'mastered') list = list.filter(q => state.mastered.has(q.id));
  else if (state.dirFilter === 'unmastered') list = list.filter(q => !state.mastered.has(q.id));

  // Apply Search
  if (state.dirSearchQuery) {
    const q = state.dirSearchQuery;
    list = list.filter(item => {
      return item.question_en.toLowerCase().includes(q) ||
             item.question_vi.toLowerCase().includes(q) ||
             item.answer_en.toLowerCase().includes(q) ||
             item.answer_vi.toLowerCase().includes(q) ||
             (item.vocab && item.vocab.some(v => v.en.toLowerCase().includes(q) || v.vi.toLowerCase().includes(q)));
    });
  }

  document.getElementById('dirFilteredCount').textContent = list.length;

  if (list.length === 0) {
    container.innerHTML = `
      <div style="text-align:center;padding:40px;color:var(--text-muted);">
        <p style="font-size:1.1rem;margin-bottom:8px;">🔍 Không tìm thấy câu hỏi phù hợp với từ khóa.</p>
        <span style="font-size:0.9rem;">Hãy thử xóa bộ lọc hoặc tìm kiếm cụm từ khác.</span>
      </div>
    `;
    return;
  }

  list.forEach(q => {
    const card = document.createElement('div');
    card.className = 'q-item-card';
    card.id = `q-card-${q.id}`;

    const isStarred = state.starred.has(q.id);
    const isMastered = state.mastered.has(q.id);

    // Vocab HTML
    let vocabHTML = '';
    if (q.vocab && q.vocab.length > 0) {
      vocabHTML = `
        <div class="dir-vocab-box">
          <strong>Từ vựng trọng tâm:</strong>
          <div class="vocab-chips-container">
            ${q.vocab.map(v => `
              <span class="vocab-chip" onclick="speakEnglish('${escapeQuotes(v.en)}')">
                <span class="vocab-en">${escapeHTML(v.en)}</span>
                ${v.ipa ? `<span class="vocab-ipa">${escapeHTML(v.ipa)}</span>` : ''}
                <span class="vocab-sep">–</span>
                <span class="vocab-vi">${escapeHTML(v.vi)}</span>
              </span>
            `).join('')}
          </div>
        </div>
      `;
    }

    // Answer HTML based on toggles
    const ansViHTML = state.dirHideVi ? '' : `<p class="dir-ans-vi">🇻🇳 ${escapeHTML(q.answer_vi)}</p>`;
    const questionViHTML = state.dirHideVi ? '' : `<p class="q-title-vi">${escapeHTML(q.question_vi)}</p>`;
    const ansIpaHTML = `<div class="dir-ans-ipa">${escapeHTML(q.answer_ipa || '')}</div>`;
    const questionIpaHTML = `<div class="dir-q-ipa">${escapeHTML(q.question_ipa || '')}</div>`;

    const ansContentHTML = state.dirHideAns ? `
      <div class="dir-answer-box" style="background:rgba(245,158,11,0.1);border-left-color:var(--gold-primary);">
        <em style="color:var(--gold-glow);font-size:0.9rem;">(Đáp án đang được ẩn để bạn tự nhớ. Nhấn vào thanh công cụ để mở lại)</em>
      </div>
    ` : `
      <div class="dir-answer-box">
        <h5 class="dir-ans-en">${escapeHTML(q.answer_en)}</h5>
        ${ansIpaHTML}
        ${ansViHTML}
      </div>
    `;

    card.innerHTML = `
      <div class="q-item-header">
        <div class="q-header-left">
          <div class="q-num-badge">${q.id}</div>
          <div class="q-header-text">
            <h4 class="q-title-en">${escapeHTML(q.question_en)}</h4>
            ${questionIpaHTML}
            ${questionViHTML}
          </div>
        </div>
        <div class="q-header-right">
          <button class="btn-icon-subtle speak-q-btn" title="Phát âm câu hỏi">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
          </button>
          <button class="btn-icon-subtle star-q-btn ${isStarred ? 'starred' : ''}" title="Gắn dấu sao">
            <svg class="star-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </button>
          <button class="btn-icon-subtle master-q-btn ${isMastered ? 'starred' : ''}" style="${isMastered ? 'color:var(--emerald-primary);border-color:var(--emerald-primary);background:rgba(16,185,129,0.15);' : ''}" title="${isMastered ? 'Đã thuộc' : 'Chưa thuộc'}">
            ${isMastered ? '✅' : '⚪'}
          </button>
          <svg class="q-collapse-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>
      <div class="q-item-body">
        ${ansContentHTML}
        ${vocabHTML}
      </div>
    `;

    // Event listeners
    const header = card.querySelector('.q-item-header');
    header.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      card.classList.toggle('open');
    });

    card.querySelector('.speak-q-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      speakEnglish(q.question_en);
    });

    const starBtn = card.querySelector('.star-q-btn');
    starBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      state.toggleStarred(q.id);
      starBtn.classList.toggle('starred', state.starred.has(q.id));
    });

    const masterBtn = card.querySelector('.master-q-btn');
    masterBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      state.toggleMastered(q.id);
      const isM = state.mastered.has(q.id);
      masterBtn.textContent = isM ? '✅' : '⚪';
      masterBtn.style.color = isM ? 'var(--emerald-primary)' : '';
      masterBtn.style.borderColor = isM ? 'var(--emerald-primary)' : '';
      masterBtn.style.background = isM ? 'rgba(16,185,129,0.15)' : '';
    });

    container.appendChild(card);
  });
}

// ==========================================
// 10. PROGRESS MODAL & BACKUP/RESTORE
// ==========================================

function initProgressModal() {
  const modal = document.getElementById('progressModal');
  const openBtn = document.getElementById('resetProgressBtn');
  const closeBtn = document.getElementById('closeModalBtn');

  openBtn.addEventListener('click', () => {
    updateModalStats();
    modal.showModal();
  });

  closeBtn.addEventListener('click', () => modal.close());

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });

  // Export JSON
  document.getElementById('exportDataBtn').addEventListener('click', () => {
    const data = {
      mastered: Array.from(state.mastered),
      starred: Array.from(state.starred),
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mil_english_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Đã tải xuống file sao lưu tiến độ! 📥', 'success');
  });

  // Import JSON
  const importInput = document.getElementById('importDataInput');
  importInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const data = JSON.parse(evt.target.result);
        if (data.mastered) state.mastered = new Set(data.mastered);
        if (data.starred) state.starred = new Set(data.starred);
        state.saveToStorage();
        updateModalStats();
        renderCurrentFlashcard();
        renderDirectoryQuestions();
        showToast('Khôi phục tiến độ thành công! 🎉', 'success');
        sounds.playChime();
      } catch (err) {
        showToast('File dữ liệu không hợp lệ.', 'warning');
      }
    };
    reader.readAsText(file);
    importInput.value = '';
  });

  // Reset Progress
  document.getElementById('confirmResetBtn').addEventListener('click', () => {
    if (confirm('Bạn có chắc chắn muốn đặt lại toàn bộ tiến độ và học lại từ đầu không?')) {
      state.mastered.clear();
      state.starred.clear();
      state.saveToStorage();
      updateModalStats();
      renderCurrentFlashcard();
      renderDirectoryQuestions();
      showToast('Đã đặt lại tiến độ về 0.', 'info');
    }
  });
}

function updateModalStats() {
  const total = QUESTIONS_DATA.length;
  const mCount = state.mastered.size;
  const sCount = state.starred.size;
  const pct = Math.round((mCount / total) * 100);

  document.getElementById('modalMasteredPercent').textContent = `${pct}%`;
  document.getElementById('modalMasteredCount').textContent = `${mCount} / ${total} câu`;
  document.getElementById('modalUnmasteredCount').textContent = `${total - mCount} câu`;
  document.getElementById('modalStarredCount').textContent = `${sCount} câu`;

  // Part 1 Progress
  const p1Total = QUESTIONS_DATA.filter(q => q.part === 1).length;
  const p1Mastered = QUESTIONS_DATA.filter(q => q.part === 1 && state.mastered.has(q.id)).length;
  const p1Pct = Math.round((p1Mastered / p1Total) * 100);
  document.getElementById('modalPart1Prog').textContent = `${p1Mastered}/${p1Total} (${p1Pct}%)`;
  document.getElementById('modalPart1Bar').style.width = `${p1Pct}%`;

  // Part 2 Progress
  const p2Total = QUESTIONS_DATA.filter(q => q.part === 2).length;
  const p2Mastered = QUESTIONS_DATA.filter(q => q.part === 2 && state.mastered.has(q.id)).length;
  const p2Pct = Math.round((p2Mastered / p2Total) * 100);
  document.getElementById('modalPart2Prog').textContent = `${p2Mastered}/${p2Total} (${p2Pct}%)`;
  document.getElementById('modalPart2Bar').style.width = `${p2Pct}%`;
}

// ==========================================
// 11. NAVIGATION & GLOBAL CONTROLS
// ==========================================

function initNavigation() {
  const navTabs = document.querySelectorAll('.nav-tab');
  const tabContents = document.querySelectorAll('.tab-content');

  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');
      navTabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      tab.classList.add('active');
      const targetContent = document.getElementById(`tab-${targetId}`);
      if (targetContent) targetContent.classList.add('active');

      // Pause the quiz countdown while away from the quiz tab
      if (state.activeTab === 'quiz' && targetId !== 'quiz') {
        clearInterval(state.quizTimer);
      } else if (state.activeTab !== 'quiz' && targetId === 'quiz' && isQuizAwaitingAnswer()) {
        startQuizTimer();
      }
      state.activeTab = targetId;

      // Special re-render on tab switch if needed
      if (targetId === 'flashcards') renderCurrentFlashcard();
      if (targetId === 'directory') renderDirectoryQuestions();
    });
  });

  // Theme Toggle
  const themeBtn = document.getElementById('themeToggleBtn');
  if (state.settings.theme === 'light') {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  }

  themeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.contains('dark-theme');
    if (isDark) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      state.settings.theme = 'light';
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      state.settings.theme = 'dark';
    }
    state.saveToStorage();
  });

  // Sound Toggle
  const soundBtn = document.getElementById('soundToggleBtn');
  updateSoundButtonUI();
  soundBtn.addEventListener('click', () => {
    state.settings.soundEnabled = !state.settings.soundEnabled;
    updateSoundButtonUI();
    state.saveToStorage();
    showToast(state.settings.soundEnabled ? 'Đã bật hiệu ứng âm thanh 🔔' : 'Đã tắt hiệu ứng âm thanh 🔕');
  });

  // IPA Toggle
  const ipaBtn = document.getElementById('ipaToggleBtn');
  const toggleAllIpaBtn = document.getElementById('toggleAllIpaBtn');

  const updateIpaUI = () => {
    document.body.classList.toggle('hide-ipa', !state.settings.showIpa);
    if (ipaBtn) {
      if (state.settings.showIpa) {
        ipaBtn.style.color = 'var(--cyan-glow)';
        ipaBtn.style.borderColor = 'var(--cyan-primary)';
      } else {
        ipaBtn.style.color = 'var(--text-muted)';
        ipaBtn.style.borderColor = 'var(--border-subtle)';
      }
    }
    const dirIpaBtnText = document.getElementById('toggleAllIpaText');
    if (dirIpaBtnText) {
      dirIpaBtnText.textContent = state.settings.showIpa ? 'Ẩn IPA' : 'Hiện IPA';
    }
  };

  updateIpaUI();

  if (ipaBtn) {
    ipaBtn.addEventListener('click', () => {
      state.settings.showIpa = !state.settings.showIpa;
      updateIpaUI();
      state.saveToStorage();
      showToast(state.settings.showIpa ? 'Đã bật hiển thị phiên âm IPA 🗣️' : 'Đã ẩn phiên âm IPA');
    });
  }

  if (toggleAllIpaBtn) {
    toggleAllIpaBtn.addEventListener('click', () => {
      state.settings.showIpa = !state.settings.showIpa;
      updateIpaUI();
      state.saveToStorage();
      showToast(state.settings.showIpa ? 'Đã bật hiển thị phiên âm IPA 🗣️' : 'Đã ẩn phiên âm IPA');
    });
  }

  // Speech Speed Button
  const speedBtn = document.getElementById('audioSpeedBtn');
  const speeds = [0.8, 1.0, 1.2];
  speedBtn.querySelector('.speed-indicator').textContent = `${state.settings.speechRate.toFixed(1)}x`;
  speedBtn.addEventListener('click', () => {
    let currentIdx = speeds.indexOf(state.settings.speechRate);
    currentIdx = (currentIdx + 1) % speeds.length;
    state.settings.speechRate = speeds[currentIdx];
    speedBtn.querySelector('.speed-indicator').textContent = `${state.settings.speechRate.toFixed(1)}x`;
    state.saveToStorage();
    showToast(`Tốc độ phát âm: ${state.settings.speechRate}x`);
  });
}

function updateSoundButtonUI() {
  const soundBtn = document.getElementById('soundToggleBtn');
  if (state.settings.soundEnabled) {
    soundBtn.style.color = 'var(--cyan-glow)';
    soundBtn.style.borderColor = 'var(--cyan-primary)';
  } else {
    soundBtn.style.color = 'var(--text-muted)';
    soundBtn.style.borderColor = 'var(--border-subtle)';
  }
}

// ==========================================
// 12. KEYBOARD SHORTCUTS
// ==========================================

function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // If typing in textarea or input, do not intercept
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;
    // Leave browser shortcuts (Ctrl+C, Ctrl+S, ...) alone
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    // Ignore while the progress dialog is open
    if (document.getElementById('progressModal').open) return;

    if (state.activeTab === 'flashcards') {
      if (e.code === 'Space') {
        e.preventDefault();
        const card = document.getElementById('flashcard');
        state.isCardFlipped = !state.isCardFlipped;
        card.classList.toggle('flipped', state.isCardFlipped);
        sounds.playFlip();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        // Mark mastered & next
        const currentQ = state.flashcards[state.currentCardIdx];
        if (currentQ && !state.mastered.has(currentQ.id)) {
          state.toggleMastered(currentQ.id);
          sounds.playChime();
        }
        nextFlashcard(1);
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        nextFlashcard(-1);
      } else if (e.key.toLowerCase() === 's') {
        // Toggle Star
        const currentQ = state.flashcards[state.currentCardIdx];
        if (currentQ) {
          state.toggleStarred(currentQ.id);
          updateFlashcardStarUI(currentQ.id);
        }
      } else if (e.key.toLowerCase() === 'v') {
        // Audio speak
        const currentQ = state.flashcards[state.currentCardIdx];
        if (currentQ) {
          speakEnglish(state.isCardFlipped ? currentQ.answer_en : currentQ.question_en);
        }
      } else if (e.key.toLowerCase() === 'i') {
        const ipaBtn = document.getElementById('ipaToggleBtn');
        if (ipaBtn) ipaBtn.click();
      }
    } else if (state.activeTab === 'quiz') {
      if (['Digit1', 'Digit2', 'Digit3', 'Digit4', 'KeyA', 'KeyB', 'KeyC', 'KeyD'].includes(e.code)) {
        let optIdx = 0;
        if (e.code === 'Digit1' || e.code === 'KeyA') optIdx = 0;
        if (e.code === 'Digit2' || e.code === 'KeyB') optIdx = 1;
        if (e.code === 'Digit3' || e.code === 'KeyC') optIdx = 2;
        if (e.code === 'Digit4' || e.code === 'KeyD') optIdx = 3;

        const btns = document.querySelectorAll('.quiz-option-btn');
        if (btns[optIdx] && !btns[optIdx].disabled) {
          btns[optIdx].click();
        }
      } else if (e.code === 'Space' || e.code === 'Enter') {
        const nextBtn = document.getElementById('quizNextBtn');
        const expBox = document.getElementById('quizExplanationBox');
        if (!expBox.classList.contains('hidden')) {
          // Stop the page scrolling and a focused button from also firing
          e.preventDefault();
          nextBtn.click();
        }
      }
    }
  });
}

// ==========================================
// 13. UTILITY FUNCTIONS
// ==========================================

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function escapeHTML(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function escapeQuotes(str) {
  if (!str) return '';
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

// ==========================================
// 14. APPLICATION INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  state.updateGlobalHeaderStats();
  initNavigation();
  initFlashcards();
  initQuiz();
  initTyping();
  initVocabGame();
  initDirectory();
  initProgressModal();
  initKeyboardShortcuts();
});
