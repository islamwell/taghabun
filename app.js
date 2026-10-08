/**
 * Surah At-Taghābun (Ayats 1–3) — Interactive Experience
 * Linguistic Insights inspired by Ustadh Nouman Ali Khan
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. Word-by-Word Dictionary
  // =========================================================================
  const AYAT_DATA = {
    1: [
      { ar: 'يُسَبِّحُ', tr: 'Yusabbiḥu', en: 'Glorifies continuously', root: 'س - ب - ح', gem: 'Present continuous tense denoting an ongoing, uninterrupted cosmic movement without pause. Everything in creation is in active worship right now.', key: true },
      { ar: 'لِلَّهِ', tr: 'Lillāh', en: 'To Allah', root: 'إ - ل - ه', gem: 'The preposition "lām" indicates exclusivity, ownership, and supreme dedication.', key: false },
      { ar: 'مَا', tr: 'Mā', en: 'Whatever is', root: '—', gem: 'Notice "Mā" (what) instead of "Man" (who). It encompasses inanimate creations—stones, stars, nebulae, photons—not just conscious beings.', key: true },
      { ar: 'فِي', tr: 'Fī', en: 'in', root: '—', gem: 'Encompassing the cosmic expanse.', key: false },
      { ar: 'السَّمَاوَاتِ', tr: 'As-Samāwāt', en: 'the heavens', root: 'س - م - و', gem: 'Plural: the multilayered galaxies and unseen celestial realms beyond human reach.', key: false },
      { ar: 'وَمَا', tr: 'Wa mā', en: 'and whatever is', root: '—', gem: 'Reiterating the totality of all terrestrial entities.', key: false },
      { ar: 'فِي', tr: 'Fī', en: 'on / in', root: '—', gem: 'Within the realm of life.', key: false },
      { ar: 'الْأَرْضِ', tr: 'Al-Arḍ', en: 'the earth', root: 'أ - ر - ض', gem: 'Our planetary home, tiny in the cosmos yet fully bound in this divine symphony.', key: false },
      { ar: 'لَهُ', tr: 'Lahū', en: 'To Him alone belongs', root: '—', gem: 'Grammatical fronting (Taqdīm): restricts sovereign dominion exclusively to Him alone.', key: true },
      { ar: 'الْمُلْكُ', tr: 'Al-Mulk', en: 'all dominion & kingdom', root: 'م - ل - ك', gem: 'Absolute sovereignty. Human kings wield authority but are feared or resented. Allah holds power alongside love.', key: true },
      { ar: 'وَلَهُ', tr: 'Wa lahū', en: 'and to Him alone belongs', root: '—', gem: 'Repeated fronting for exclusivity.', key: false },
      { ar: 'الْحَمْدُ', tr: 'Al-Ḥamd', en: 'all praise & gratitude', root: 'ح - م - د', gem: 'Combines supreme awe, sincere love, and thankfulness. True power and pure adoration united.', key: true },
      { ar: 'وَهُوَ', tr: 'Wa Huwa', en: 'and He', root: '—', gem: 'Centering the Divine Self.', key: false },
      { ar: 'عَلَىٰ', tr: 'ʿAlā', en: 'over', root: '—', gem: 'Denoting absolute elevation and authority.', key: false },
      { ar: 'كُلِّ', tr: 'Kulli', en: 'every single', root: 'ك - ل - ل', gem: 'Universal quantifier: leaving zero exceptions in the universe.', key: false },
      { ar: 'شَيْءٍ', tr: 'Shayʾ', en: 'thing', root: 'ش - ي - أ', gem: 'Every atom, particle, destiny, or moment.', key: false },
      { ar: 'قَدِيرٌ', tr: 'Qadīr', en: 'All-Capable / Supreme in Power', root: 'ق - د - ر', gem: 'Intensive form: His power never exhausts, never strains, and never fails to manifest His will.', key: true }
    ],
    2: [
      { ar: 'هُوَ', tr: 'Huwa', en: 'He', root: '—', gem: 'Centers who originated us before discussing human divergence.', key: false },
      { ar: 'الَّذِي', tr: 'Alladhī', en: 'is the One Who', root: '—', gem: 'Attributing the miracle of conscious life to Him.', key: false },
      { ar: 'خَلَقَكُمْ', tr: 'Khalaqakum', en: 'created you all', root: 'خ - ل - ق', gem: 'Addresses all humanity: we all emerged from one source with the same pristine fitrah.', key: true },
      { ar: 'فَمِنكُمْ', tr: 'Fa-minkum', en: 'then among you is', root: '—', gem: 'The "fa" implies sequence: creation came first, then human choices fractured humanity.', key: true },
      { ar: 'كَافِرٌ', tr: 'Kāfir', en: 'the denier / concealer', root: 'ك - ف - ر', gem: 'Root means "to cover or bury" (like farmers bury seeds in dirt). The denier actively buries their inner conscience.', key: true },
      { ar: 'وَمِنكُم', tr: 'Wa minkum', en: 'and among you is', root: '—', gem: 'The parallel path of response.', key: false },
      { ar: 'مُّؤْمِنٌ', tr: 'Muʾmin', en: 'the believer', root: 'أ - م - ن', gem: 'Root Amn (safety/trust). One who finds emotional sanctuary in Allah and becomes a source of safety to others.', key: true },
      { ar: 'وَاللَّهُ', tr: 'Wallāh', en: 'and Allah', root: 'إ - ل - ه', gem: 'The omniscient observer.', key: false },
      { ar: 'بِمَا', tr: 'Bimā', en: 'of whatever', root: '—', gem: 'Every outward and inward action.', key: false },
      { ar: 'تَعْمَلُونَ', tr: 'Taʿmalūn', en: 'you do / perform', root: 'ع - م - ل', gem: 'Active verb: Allah evaluates what you actually DO, not merely nominal cultural identity labels.', key: true },
      { ar: 'بَصِيرٌ', tr: 'Baṣīr', en: 'All-Seeing', root: 'ب - ص - ر', gem: 'Penetrating sight that observes your actions along with the subtle motives buried in the chest.', key: true }
    ],
    3: [
      { ar: 'خَلَقَ', tr: 'Khalaqa', en: 'He created', root: 'خ - ل - ق', gem: 'Cosmic scale creation.', key: false },
      { ar: 'السَّمَاوَاتِ', tr: 'As-Samāwāt', en: 'the heavens', root: 'س - م - و', gem: 'The vast celestial structure.', key: false },
      { ar: 'وَالْأَرْضَ', tr: 'Wal-Arḍ', en: 'and the earth', root: 'أ - ر - ض', gem: 'The platform for human testing.', key: false },
      { ar: 'بِالْحَقِّ', tr: 'Bil-Ḥaqq', en: 'with purpose and truth', root: 'ح - ق - ق', gem: 'Not by accident, not in play. Since creation has objective purpose, moral accountability and judgment are guaranteed.', key: true },
      { ar: 'وَصَوَّرَكُمْ', tr: 'Wa-ṣawwarakum', en: 'and He fashioned you', root: 'ص - و - ر', gem: 'To give facial features, physique, and artistic contour to the human form.', key: true },
      { ar: 'فَأَحْسَنَ', tr: 'Fa-aḥsana', en: 'and made excellent / beautiful', root: 'ح - س - ن', gem: 'Divine seal of excellence. Allah tells you that your appearance and faculties are crafted with intentional dignity.', key: true },
      { ar: 'صُوَرَكُمْ', tr: 'Ṣuwarakum', en: 'your forms', root: 'ص - و - ر', gem: 'Root repetition (Sawwarakum -> Suwarakum) reinforces personal divine artistry. An antidote to modern insecurities.', key: true },
      { ar: 'وَإِلَيْهِ', tr: 'Wa-ilayh', en: 'and to Him alone', root: '—', gem: 'Fronting for exclusivity: all paths converge back to the Originator.', key: true },
      { ar: 'الْمَصِيرُ', tr: 'Al-Maṣīr', en: 'is the final destination / becoming', root: 'ص - ي - ر', gem: 'From "Sara" (to become, to transform). It is not just where you arrive, but the final truth of who you have become.', key: true }
    ]
  };

  // Audio Recitation URLs (EveryAyah CDN - Sheikh Mishary Alafasy)
  const AUDIO_MAP = {
    1: 'https://everyayah.com/data/Alafasy_128kbps/064001.mp3',
    2: 'https://everyayah.com/data/Alafasy_128kbps/064002.mp3',
    3: 'https://everyayah.com/data/Alafasy_128kbps/064003.mp3'
  };

  // State Management
  let soundEnabled = true;
  let currentAudio = null;
  let currentPlayingAyah = null;
  let tasbihCount = parseInt(localStorage.getItem('taghabun_tasbih_count') || '0', 10);
  let audioCtx = null;

  // =========================================================================
  // 2. Web Audio Synthesizer (Zen Chime & Haptic Generator)
  // =========================================================================
  function initAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playTone(freq = 528, type = 'sine', duration = 0.6, gainLevel = 0.15) {
    if (!soundEnabled) return;
    try {
      initAudioContext();
      if (!audioCtx) return;

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(gainLevel, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio context might be restricted
    }
  }

  function triggerHaptic(pattern = 15) {
    if (navigator.vibrate) {
      try {
        navigator.vibrate(pattern);
      } catch (e) {}
    }
  }

  // =========================================================================
  // 3. Cosmic Canvas Particle Simulation (Celestial Bodies Swimming)
  // =========================================================================
  const canvas = document.getElementById('cosmic-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animId = null;
  let canvasHue = 260; // Violet/Indigo default
  let width = 0;
  let height = 0;

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * Math.min(window.devicePixelRatio || 1, 2);
    canvas.height = height * Math.min(window.devicePixelRatio || 1, 2);
    ctx.scale(Math.min(window.devicePixelRatio || 1, 2), Math.min(window.devicePixelRatio || 1, 2));
    initParticles();
  }

  function initParticles() {
    const count = Math.min(Math.floor((width * height) / 9000), 120);
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 0.6,
        orbitDist: Math.random() * Math.min(width, height) * 0.45 + 40,
        angle: Math.random() * Math.PI * 2,
        speed: (Math.random() * 0.002 + 0.0008) * (Math.random() > 0.5 ? 1 : -1),
        alpha: Math.random() * 0.6 + 0.2
      });
    }
  }

  function renderCosmicScene() {
    ctx.clearRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;

    // Ambient radial glow in center
    const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, Math.min(width, height) * 0.5);
    grad.addColorStop(0, `hsla(${canvasHue}, 80%, 45%, 0.12)`);
    grad.addColorStop(1, 'rgba(5, 7, 17, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Orbiting particles (Yasbahun - swimming)
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.angle += p.speed;
      p.x = cx + Math.cos(p.angle) * p.orbitDist;
      p.y = cy + Math.sin(p.angle) * (p.orbitDist * 0.75);

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${canvasHue + (i % 40)}, 85%, 65%, ${p.alpha})`;
      ctx.shadowColor = `hsla(${canvasHue}, 90%, 60%, 0.8)`;
      ctx.shadowBlur = p.r * 6;
      ctx.fill();
    }
    ctx.shadowBlur = 0;

    animId = requestAnimationFrame(renderCosmicScene);
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  renderCosmicScene();

  // Section theme tracking for canvas hue
  const themeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const theme = entry.target.dataset.theme;
        if (theme === 'indigo') canvasHue = 260;
        else if (theme === 'amber') canvasHue = 38;
        else if (theme === 'cyan') canvasHue = 188;
        else if (theme === 'emerald') canvasHue = 158;
        else if (theme === 'gold') canvasHue = 45;
        else if (theme === 'violet') canvasHue = 275;
      }
    });
  }, { threshold: 0.35 });

  document.querySelectorAll('section[data-theme]').forEach(el => themeObserver.observe(el));

  // =========================================================================
  // 4. Render Ayah Word Spans & Bind Dialog
  // =========================================================================
  const wordDialog = document.getElementById('word-dialog');
  const modalArabic = document.getElementById('modal-word-arabic');
  const modalTranslit = document.getElementById('modal-word-translit');
  const modalMeaning = document.getElementById('modal-word-meaning');
  const modalRoot = document.getElementById('modal-word-root');
  const modalNotes = document.getElementById('modal-word-notes');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function renderAyahArabic(ayahNum) {
    const container = document.getElementById(`arabic-ayah-${ayahNum}`);
    if (!container) return;

    const words = AYAT_DATA[ayahNum];
    let html = '';

    words.forEach((w, idx) => {
      const keyClass = w.key ? 'highlight-key' : '';
      html += `<span class="q-word ${keyClass}" data-ayah="${ayahNum}" data-index="${idx}" tabindex="0" role="button" aria-label="${w.tr}: ${w.en}">${w.ar}</span> `;
    });

    // Add Arabic end-of-ayah marker
    const arabicDigits = ['٠', '١', '٢', '٣'];
    html += `<span class="q-ayah-num" aria-hidden="true">﴿${arabicDigits[ayahNum]}﴾</span>`;
    container.innerHTML = html;
  }

  [1, 2, 3].forEach(renderAyahArabic);

  function openWordModal(word) {
    modalArabic.textContent = word.ar;
    modalTranslit.textContent = word.tr;
    modalMeaning.textContent = word.en;
    modalRoot.innerHTML = `<span class="root-letters">${word.root}</span>`;
    modalNotes.textContent = word.gem;

    triggerHaptic(12);
    playTone(660, 'sine', 0.25, 0.08);

    if (wordDialog.showModal) {
      wordDialog.showModal();
    } else {
      wordDialog.setAttribute('open', '');
    }
  }

  document.addEventListener('click', (e) => {
    const wordEl = e.target.closest('.q-word');
    if (wordEl) {
      const ayahNum = wordEl.dataset.ayah;
      const index = wordEl.dataset.index;
      if (AYAT_DATA[ayahNum] && AYAT_DATA[ayahNum][index]) {
        openWordModal(AYAT_DATA[ayahNum][index]);
      }
    }
  });

  document.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('q-word')) {
      e.preventDefault();
      e.target.click();
    }
  });

  modalCloseBtn.addEventListener('click', () => {
    if (wordDialog.close) {
      wordDialog.close();
    } else {
      wordDialog.removeAttribute('open');
    }
  });

  // Light dismiss by clicking outside modal card
  wordDialog.addEventListener('click', (e) => {
    if (!e.target.closest('.modal-card')) {
      if (wordDialog.close) {
        wordDialog.close();
      } else {
        wordDialog.removeAttribute('open');
      }
    }
  });

  // =========================================================================
  // 5. Audio Recitation Playback (Mishary Alafasy)
  // =========================================================================
  const audioButtons = document.querySelectorAll('.audio-play-btn');

  function stopCurrentAudio() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio = null;
    }
    audioButtons.forEach(btn => {
      btn.classList.remove('is-playing');
      btn.querySelector('.play-text').textContent = 'Play Recitation';
    });
    currentPlayingAyah = null;
  }

  audioButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      initAudioContext();
      const ayah = parseInt(btn.dataset.ayah, 10);

      if (currentPlayingAyah === ayah) {
        stopCurrentAudio();
        return;
      }

      stopCurrentAudio();

      const audioUrl = AUDIO_MAP[ayah];
      currentAudio = new Audio(audioUrl);
      currentPlayingAyah = ayah;

      btn.classList.add('is-playing');
      btn.querySelector('.play-text').textContent = 'Playing...';

      currentAudio.play().catch(err => {
        console.warn('Audio playback prevented:', err);
        stopCurrentAudio();
      });

      currentAudio.addEventListener('ended', () => {
        stopCurrentAudio();
      });

      currentAudio.addEventListener('error', () => {
        stopCurrentAudio();
      });
    });
  });

  // Sound toggle button in header
  const soundToggleBtn = document.getElementById('sound-toggle');
  const soundOnIcon = soundToggleBtn.querySelector('.icon-sound-on');
  const soundOffIcon = soundToggleBtn.querySelector('.icon-sound-off');

  soundToggleBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    soundOnIcon.style.display = soundEnabled ? 'block' : 'none';
    soundOffIcon.style.display = soundEnabled ? 'none' : 'block';
    if (!soundEnabled) {
      stopCurrentAudio();
    } else {
      playTone(587.33, 'sine', 0.4, 0.1);
    }
  });

  // =========================================================================
  // 6. Hold-to-Enter Orb Interaction
  // =========================================================================
  const orbBtn = document.getElementById('hero-enter-btn');
  const ringFill = document.getElementById('ring-fill');
  const orbLabel = document.getElementById('orb-label');
  let holdTimer = null;
  let holdProgress = 0;
  const holdDuration = 1000; // 1 second
  let startTime = 0;

  function setRingProgress(ratio) {
    const circumference = 2 * Math.PI * 54; // ~339.29
    const offset = circumference * (1 - ratio);
    ringFill.style.strokeDashoffset = offset;
  }

  function startHold(e) {
    e.preventDefault();
    initAudioContext();
    startTime = Date.now();
    orbBtn.classList.add('is-holding');
    orbLabel.textContent = 'Hold...';
    triggerHaptic(20);
    playTone(392, 'sine', 0.2, 0.05);

    holdTimer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      holdProgress = Math.min(elapsed / holdDuration, 1);
      setRingProgress(holdProgress);

      if (holdProgress >= 1) {
        completeHold();
      }
    }, 20);
  }

  function completeHold() {
    clearInterval(holdTimer);
    holdTimer = null;
    orbBtn.classList.remove('is-holding');
    orbLabel.textContent = 'Welcome ✦';
    triggerHaptic([40, 60, 100]);
    playTone(784, 'sine', 0.8, 0.2);

    setTimeout(() => {
      const intro = document.getElementById('intro');
      if (intro) {
        intro.scrollIntoView({ behavior: 'smooth' });
      }
      setRingProgress(0);
      orbLabel.textContent = 'Hold to Enter';
    }, 400);
  }

  function cancelHold() {
    if (holdTimer) {
      clearInterval(holdTimer);
      holdTimer = null;
      setRingProgress(0);
      orbBtn.classList.remove('is-holding');
      orbLabel.textContent = 'Hold to Enter';
    }
  }

  orbBtn.addEventListener('pointerdown', startHold);
  orbBtn.addEventListener('pointerup', cancelHold);
  orbBtn.addEventListener('pointerleave', cancelHold);
  orbBtn.addEventListener('pointercancel', cancelHold);
  orbBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      completeHold();
    }
  });

  // =========================================================================
  // 7. Interactive Cosmic Value Ledger (Dunya vs Yawm At-Taghabun)
  // =========================================================================
  const ledgerData = [
    { name: 'Social Clout & Followers', dunya: 95, akhirah: 0, dunyaText: 'Priceless Status', akhirahText: 'Worthless Dust' },
    { name: 'Hoarded Wealth & Prestige', dunya: 90, akhirah: 5, dunyaText: 'Ultimate Security', akhirahText: 'Severe Liability' },
    { name: 'Secret Tahajjud (Night Prayer)', dunya: 8, akhirah: 96, dunyaText: 'Invisible / Zero ROI', akhirahText: 'Mountains of Light' },
    { name: 'Forgiving Someone Who Hurt You', dunya: 12, akhirah: 94, dunyaText: 'Weakness / Loss', akhirahText: 'Divine Mercy Earned' },
    { name: 'Quiet Patience in Hardship', dunya: 15, akhirah: 99, dunyaText: 'Pointless Pain', akhirahText: 'Boundless Reward' }
  ];

  const ledgerBarsContainer = document.getElementById('ledger-bars');
  const viewDunyaBtn = document.getElementById('view-dunya');
  const viewAkhirahBtn = document.getElementById('view-akhirah');
  const ledgerCaption = document.getElementById('ledger-caption');

  function renderLedger(mode = 'dunya') {
    let html = '';
    const isDunya = mode === 'dunya';

    ledgerData.forEach(item => {
      const val = isDunya ? item.dunya : item.akhirah;
      const text = isDunya ? item.dunyaText : item.akhirahText;
      const color = isDunya
        ? (item.dunya > 50 ? 'var(--accent-coral)' : 'var(--text-dim)')
        : (item.akhirah > 50 ? 'var(--accent-emerald)' : 'var(--text-dim)');

      const fillBg = isDunya
        ? 'linear-gradient(90deg, #f43f5e, #fb7185)'
        : 'linear-gradient(90deg, #10b981, #34d399)';

      html += `
        <div class="ledger-bar-row">
          <div class="bar-meta">
            <span class="bar-name">${item.name}</span>
            <span class="bar-val-text" style="color: ${color}">${text} (${val}%)</span>
          </div>
          <div class="bar-track">
            <div class="bar-fill" style="width: ${val}%; background: ${fillBg};"></div>
          </div>
        </div>
      `;
    });

    ledgerBarsContainer.innerHTML = html;

    if (isDunya) {
      ledgerCaption.textContent = "Dunyā Valuation: The market of illusions where glitter is bought at the price of the soul.";
    } else {
      ledgerCaption.textContent = "Yawm At-Taghābun Valuation: The great unveiling. What was hidden shines; what was bragged about dissolves.";
    }
  }

  viewDunyaBtn.addEventListener('click', () => {
    viewDunyaBtn.classList.add('active');
    viewAkhirahBtn.classList.remove('active');
    renderLedger('dunya');
    playTone(440, 'sine', 0.25, 0.08);
    triggerHaptic(15);
  });

  viewAkhirahBtn.addEventListener('click', () => {
    viewAkhirahBtn.classList.add('active');
    viewDunyaBtn.classList.remove('active');
    renderLedger('akhirah');
    playTone(659.25, 'sine', 0.35, 0.12);
    triggerHaptic(20);
  });

  renderLedger('dunya');

  // =========================================================================
  // 8. Widget 1: Live Tasbih Counter
  // =========================================================================
  const tasbihBtn = document.getElementById('tasbih-trigger-btn');
  const tasbihCountEl = document.getElementById('tasbih-count');
  const tasbihArabicCountEl = document.getElementById('tasbih-arabic-count');

  const arabicNumDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  function toArabicNumerals(num) {
    return num.toString().split('').map(d => arabicNumDigits[parseInt(d, 10)] || d).join('');
  }

  function updateTasbihDisplay() {
    tasbihCountEl.textContent = tasbihCount.toLocaleString();
    tasbihArabicCountEl.textContent = toArabicNumerals(tasbihCount);
  }
  updateTasbihDisplay();

  tasbihBtn.addEventListener('click', () => {
    tasbihCount++;
    localStorage.setItem('taghabun_tasbih_count', tasbihCount.toString());
    updateTasbihDisplay();

    triggerHaptic(18);
    // Dynamic pitch stepping every count
    const baseFreq = 480 + (tasbihCount % 33) * 8;
    playTone(baseFreq, 'sine', 0.2, 0.1);

    // Milestone celebration every 33 tasbih
    if (tasbihCount % 33 === 0) {
      triggerHaptic([30, 40, 80]);
      playTone(880, 'triangle', 0.6, 0.2);
    }
  });

  // =========================================================================
  // 9. Widget 2: The Seed of Fitrah (Kufr vs Iman)
  // =========================================================================
  const seedVisual = document.getElementById('seed-visual');
  const toggleSeedBtn = document.getElementById('toggle-seed-btn');
  const seedBtnText = document.getElementById('seed-btn-text');
  const seedExplanation = document.getElementById('seed-explanation');
  let isSprouted = false;

  function toggleSeedState() {
    isSprouted = !isSprouted;
    if (isSprouted) {
      seedVisual.classList.add('state-sprouted');
      seedBtnText.textContent = 'Cover the Seed (Bury with Pride)';
      seedExplanation.innerHTML = 'Currently <strong>Uncovered (Īmān)</strong>: Given the safety (<em>Amn</em>) of humble trust in Allah, the innate fitrah bursts into vibrant life.';
      playTone(587.33, 'sine', 0.45, 0.15);
      triggerHaptic([20, 40]);
    } else {
      seedVisual.classList.remove('state-sprouted');
      seedBtnText.textContent = 'Uncover the Seed (Sprout Īmān)';
      seedExplanation.innerHTML = 'Currently <strong>Buried (Kufr)</strong>: The light was always inside the heart, but deliberately masked under layers of heedlessness.';
      playTone(329.63, 'sine', 0.35, 0.1);
      triggerHaptic(15);
    }
  }

  toggleSeedBtn.addEventListener('click', toggleSeedState);
  seedVisual.addEventListener('click', toggleSeedState);

  // =========================================================================
  // 10. Widget 3: Sacred 8-Fold Geometry Rosette (Fa-Ahsana Suwarakum)
  // =========================================================================
  const petalsGroup = document.getElementById('rosette-petals');
  const rosetteSvg = document.getElementById('rosette-svg');
  const harmonizeBtn = document.getElementById('harmonize-btn');
  let isHarmonized = true;

  function buildRosettePetals() {
    let petalsSvg = '';
    // 8 radial diamond facets
    for (let i = 0; i < 8; i++) {
      const angle = (i * 45) * (Math.PI / 180);
      const x1 = Math.cos(angle) * 75;
      const y1 = Math.sin(angle) * 75;
      const angleLeft = ((i * 45) - 22.5) * (Math.PI / 180);
      const angleRight = ((i * 45) + 22.5) * (Math.PI / 180);
      const xLeft = Math.cos(angleLeft) * 42;
      const yLeft = Math.sin(angleLeft) * 42;
      const xRight = Math.cos(angleRight) * 42;
      const yRight = Math.sin(angleRight) * 42;

      petalsSvg += `
        <polygon class="rosette-petal" points="0,0 ${xLeft},${yLeft} ${x1},${y1} ${xRight},${yRight}" data-base-angle="${i * 45}"></polygon>
      `;
    }
    petalsGroup.innerHTML = petalsSvg;
  }
  buildRosettePetals();

  harmonizeBtn.addEventListener('click', () => {
    isHarmonized = !isHarmonized;
    const petals = petalsGroup.querySelectorAll('.rosette-petal');

    if (!isHarmonized) {
      // Disalign / shatter symmetry
      petals.forEach((p, idx) => {
        const offsetRot = (Math.random() - 0.5) * 40;
        const scale = 0.65 + Math.random() * 0.5;
        p.style.transform = `rotate(${offsetRot}deg) scale(${scale})`;
        p.style.fill = 'rgba(244, 63, 94, 0.3)';
        p.style.stroke = 'var(--accent-coral)';
      });
      rosetteSvg.style.transform = 'rotate(25deg)';
      harmonizeBtn.querySelector('span').textContent = 'Restore Divine Harmony (Fa-Ahsana)';
      harmonizeBtn.style.background = 'linear-gradient(135deg, var(--accent-coral), #be123c)';
      playTone(280, 'triangle', 0.4, 0.12);
      triggerHaptic(20);
    } else {
      // Restore sacred proportions
      petals.forEach(p => {
        p.style.transform = 'none';
        p.style.fill = 'rgba(251, 191, 36, 0.25)';
        p.style.stroke = 'var(--accent-gold)';
      });
      rosetteSvg.style.transform = 'rotate(0deg)';
      harmonizeBtn.querySelector('span').textContent = 'Disrupt Symmetry';
      harmonizeBtn.style.background = 'linear-gradient(135deg, var(--accent-gold), #d97706)';
      playTone(740, 'sine', 0.6, 0.18);
      triggerHaptic([30, 60]);
    }
  });

  // =========================================================================
  // 11. Scroll Progress Bar
  // =========================================================================
  const scrollProgressBar = document.getElementById('scroll-progress-bar');
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      scrollProgressBar.style.width = `${progress}%`;
    }
  }, { passive: true });

  // Handle direct section query parameter for instant navigation & demos
  const urlParams = new URLSearchParams(window.location.search);
  const targetSection = urlParams.get('section');
  if (targetSection) {
    const targetEl = document.getElementById(targetSection);
    if (targetEl) {
      setTimeout(() => {
        targetEl.scrollIntoView({ behavior: 'instant', block: 'start' });
      }, 50);
    }
  }

  // Handle direct word modal demo preview parameter
  const wordIdxParam = urlParams.get('word');
  if (wordIdxParam !== null) {
    const wIndex = parseInt(wordIdxParam, 10);
    const aNum = urlParams.get('ayah') || '1';
    if (AYAT_DATA[aNum] && AYAT_DATA[aNum][wIndex]) {
      setTimeout(() => openWordModal(AYAT_DATA[aNum][wIndex]), 80);
    }
  }

  console.log('Surah At-Taghābun app initialized successfully. v1.0.6');
})();
