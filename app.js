/**
 * YUGAL VATS — EDITORIAL DIGITAL STUDIO
 * Main Application Logic — v2 (with Ambient Music, Natural Image Grids, Fixed Carousel)
 */

/* ==========================================================================
   AMBIENT MUSIC ENGINE (Dual-Mode: Real MP3 + Built-in Ambient Synth Fallback)
   ========================================================================== */

/**
 * Built-in Synthesizer Engine (Web Audio API)
 * Plays warm, cinematic, tape-saturated ambient electric piano chords (Cm7 -> Abmaj7 -> Fm7 -> Bb)
 */
class StudioAmbientSynth {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.isPlaying = false;
    this.intervalId = null;
    this.chordStep = 0;

    // Cinematic ambient chords (Hz)
    this.chords = [
      // Cm7: C3, G3, Eb4, G4, Bb4
      [130.81, 196.00, 311.13, 392.00, 466.16],
      // Abmaj7: Ab2, Eb3, C4, G4
      [103.83, 155.56, 261.63, 392.00],
      // Fm7: F2, C3, Ab3, Eb4, C5
      [87.31, 130.81, 207.65, 311.13, 523.25],
      // Bb: Bb2, F3, D4, F4, Bb4
      [116.54, 174.61, 293.66, 349.23, 466.16]
    ];
  }

  async play() {
    if (this.isPlaying) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      this.ctx = new AudioCtx();
      if (this.ctx.state === 'suspended') {
        await this.ctx.resume();
      }

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.32, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.isPlaying = true;
      this.chordStep = 0;

      // Trigger first chord immediately
      this._playChord(this.chords[0]);

      // Cycle chords every 4.2 seconds
      this.intervalId = setInterval(() => {
        if (!this.isPlaying || !this.ctx) return;
        this.chordStep = (this.chordStep + 1) % this.chords.length;
        this._playChord(this.chords[this.chordStep]);
      }, 4200);

    } catch (e) {
      // Audio synth initialization failed
    }
  }

  _playChord(freqs) {
    if (!this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;
    const duration = 4.0;

    freqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      // Triangle wave provides warm, acoustic-like chime
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      // Subtle organic detune
      osc.detune.setValueAtTime((idx % 2 === 0 ? 3 : -3), now);

      // Lowpass warmth
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, now);
      filter.Q.setValueAtTime(1.0, now);

      // Soft envelope (gentle 80ms attack, slow musical decay)
      const baseAmp = 0.08 / Math.sqrt(freqs.length);
      noteGain.gain.setValueAtTime(0.0001, now);
      noteGain.gain.exponentialRampToValueAtTime(baseAmp, now + 0.08);
      noteGain.gain.exponentialRampToValueAtTime(baseAmp * 0.4, now + duration * 0.6);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(filter);
      filter.connect(noteGain);
      noteGain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + duration + 0.1);
    });
  }

  stop() {
    if (!this.isPlaying) return;
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.masterGain && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
        this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);
        setTimeout(() => {
          if (this.ctx) {
            this.ctx.close().catch(() => {});
            this.ctx = null;
          }
        }, 900);
      } catch (_) {
        if (this.ctx) this.ctx.close().catch(() => {});
      }
    }
  }
}

/**
 * High-Level Music Controller
 * 1. Attempts to play real MP3 from essentials/ambient.mp3 or essentials/music.mp3
 * 2. Falls back seamlessly to StudioAmbientSynth if no MP3 is found
 */
class StudioMusicPlayer {
  constructor() {
    this.audioEl = document.getElementById('bg-music');
    this.synth = null;
    this.isPlaying = false;
    this.activeSource = null; // 'mp3' | 'synth'
  }

  async start() {
    this.isPlaying = true;

    // Check if MP3 is present and playable
    if (this.audioEl) {
      this.audioEl.volume = 0.55;
      try {
        await this.audioEl.play();
        this.activeSource = 'mp3';
        return;
      } catch (err) {
        // MP3 file not found or couldn't play — switch to ambient synth
      }
    }

    // Fallback to built-in ambient synth
    if (!this.synth) this.synth = new StudioAmbientSynth();
    await this.synth.play();
    this.activeSource = 'synth';
  }

  stop() {
    this.isPlaying = false;
    if (this.audioEl && !this.audioEl.paused) {
      this.audioEl.pause();
      this.audioEl.currentTime = 0;
    }
    if (this.synth) {
      this.synth.stop();
      this.synth = null;
    }
    this.activeSource = null;
  }
}

/* ==========================================================================
   MAIN APPLICATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {

  // --- STATE ---
  let currentCategory = 'branding';
  let searchQuery = '';
  let activeLightboxIndex = 0;
  let filteredProjects = [...PROJECTS_DATA];
  const musicPlayer = new StudioMusicPlayer();
  let musicEnabled = false;

  // --- AMBIENT MUSIC TOGGLE ---
  const audioToggle = document.getElementById('audio-toggle');
  if (audioToggle) {
    audioToggle.addEventListener('click', async () => {
      musicEnabled = !musicEnabled;
      audioToggle.classList.toggle('active', musicEnabled);
      const textSpan = audioToggle.querySelector('.toggle-text');

      if (musicEnabled) {
        if (textSpan) textSpan.textContent = 'Music On';
        await musicPlayer.start();
      } else {
        if (textSpan) textSpan.textContent = 'Sound Off';
        musicPlayer.stop();
      }
    });
  }

  // --- CUSTOM CURSOR ---
  const cursor = document.getElementById('custom-cursor');
  const cursorText = cursor ? cursor.querySelector('.cursor-text') : null;
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  if (cursor) {
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function updateCursor() {
      cursorX += (mouseX - cursorX) * 0.22;
      cursorY += (mouseY - cursorY) * 0.22;
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      requestAnimationFrame(updateCursor);
    }
    requestAnimationFrame(updateCursor);
  }

  function bindCursorHovers() {
    document.querySelectorAll('[data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add('is-hovering');
        if (cursorText) cursorText.textContent = el.getAttribute('data-cursor') || 'VIEW';
      });
      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('is-hovering');
        if (cursorText) cursorText.textContent = '';
      });
    });
  }
  if (cursor) bindCursorHovers();

  // --- SCROLL PROGRESS & NAVBAR SHRINK ---
  const scrollProgress = document.getElementById('scroll-progress');
  const siteNav = document.getElementById('site-nav');

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    if (scrollProgress) scrollProgress.style.width = `${progress}%`;
    if (siteNav) {
      siteNav.classList.toggle('scrolled', window.scrollY > 50);
    }
  });

  // --- MOBILE NAVIGATION DRAWER ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileNavDrawer.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('nav-is-open', isOpen);
    });
    mobileNavDrawer.querySelectorAll('.mobile-nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('nav-is-open');
      });
    });
  }

  // --- TOAST NOTIFICATION ---
  const toast = document.getElementById('toast');
  function showToast(msg = 'Copied!') {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2800);
  }

  // --- EMAIL COPY ---
  document.querySelectorAll('.copy-email-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(STUDIO_INFO.email).then(() => {
        showToast(`✦ Email copied: ${STUDIO_INFO.email}`);
      }).catch(() => showToast(STUDIO_INFO.email));
    });
  });

  // ==========================================================================
  //  WORKS ARCHIVE GRID — Natural image dimensions, no forced aspect ratios
  // ==========================================================================
  const worksGrid = document.getElementById('works-grid');
  const searchInput = document.getElementById('search-works');
  const matchCountElem = document.getElementById('match-count');
  const totalWorksElem = document.getElementById('total-works');
  const heroWorkCountElem = document.getElementById('hero-work-count');

  // Keep every archive total in sync with the project data.
  if (totalWorksElem) totalWorksElem.textContent = PROJECTS_DATA.length;
  if (heroWorkCountElem) heroWorkCountElem.textContent = PROJECTS_DATA.length;
  document.querySelectorAll('[data-count-for]').forEach((count) => {
    const filter = count.dataset.countFor;
    count.textContent = filter === 'all'
      ? PROJECTS_DATA.length
      : PROJECTS_DATA.filter((project) => project.categorySlug === filter).length;
  });

  function renderWorksGrid() {
    if (!worksGrid) return;

    filteredProjects = PROJECTS_DATA.filter((p) => {
      const matchCat = (currentCategory === 'all' || p.categorySlug === currentCategory);
      const matchQuery = searchQuery === '' ||
        p.title.toLowerCase().includes(searchQuery) ||
        p.subtitle.toLowerCase().includes(searchQuery) ||
        p.tags.some(t => t.toLowerCase().includes(searchQuery)) ||
        p.category.toLowerCase().includes(searchQuery);
      return matchCat && matchQuery;
    });

    if (matchCountElem) {
      matchCountElem.textContent = `Showing ${filteredProjects.length} of ${PROJECTS_DATA.length} works`;
    }

    if (filteredProjects.length === 0) {
      worksGrid.innerHTML = `
        <div style="column-span: all; text-align: center; padding: 60px 20px; color: var(--ink-faint); font-family: var(--font-mono);">
          <p style="font-size: 16px; margin-bottom: 8px;">No projects match "${searchQuery}"</p>
          <small>Try clearing your search or selecting a different category</small>
        </div>`;
      return;
    }

    worksGrid.innerHTML = filteredProjects.map((p, idx) => {
      // No forced aspect-ratio — image defines its own height naturally
      return `
        <article class="work-card" data-index="${idx}" data-cursor="EXPLORE">
          <div class="work-thumb-wrap${p.gallery ? ' paired-work-thumb' : ''}">
            ${p.gallery
              ? p.gallery.map((image, imageIndex) => `<img src="${image}" alt="${p.title} — poster ${imageIndex + 1}" loading="lazy" decoding="async" />`).join('')
              : `<img src="${p.img}" alt="${p.title}" loading="lazy" decoding="async" />`}
            <div class="work-overlay">
              <span class="work-action-btn">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
                Inspect
              </span>
              ${p.carousel ? `
                <button class="work-action-btn quick-carousel-btn" data-carousel="${p.carousel}" data-title="${p.title}" data-carousel-mode="${p.carouselMode || 'vertical'}" style="background:rgba(20,20,22,0.9); color:var(--brass-light); border:1px solid var(--brass);">
                  Full Carousel
                </button>` : ''}
            </div>
          </div>
          <div class="work-card-info">
            <div class="work-meta-row">
              <span class="work-category-badge">${p.category}</span>
              <span class="work-year">${p.year}</span>
            </div>
            <h3 class="work-card-title">${p.title}</h3>
            <p class="work-card-sub">${p.subtitle}</p>
            <div class="work-card-tags">
              ${p.tags.slice(0, 3).map(tag => `<span class="work-mini-tag">${tag}</span>`).join('')}
            </div>
          </div>
        </article>`;
    }).join('');

    // Bind card click events
    worksGrid.querySelectorAll('.work-card').forEach((card) => {
      card.addEventListener('click', (e) => {
        const carouselBtn = e.target.closest('.quick-carousel-btn');
        if (carouselBtn) {
          e.stopPropagation();
          openCarousel(carouselBtn.dataset.carousel, carouselBtn.dataset.title, carouselBtn.dataset.carouselMode);
          return;
        }
        openLightbox(parseInt(card.dataset.index));
      });
    });

    // Re-bind cursor to new elements
    if (cursor) bindCursorHovers();
  }

  renderWorksGrid();

  // --- FILTER PILLS ---
  document.querySelectorAll('.filter-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.dataset.filter;
      renderWorksGrid();
    });
  });

  // --- SEARCH ---
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderWorksGrid();
    });
  }

  // ==========================================================================
  //  LIGHTBOX MODAL
  // ==========================================================================
  const lightboxModal = document.getElementById('lightbox-modal');
  const lbCloseBtn = document.getElementById('lb-close-btn');
  const lbPrevBtn = document.getElementById('lb-prev-btn');
  const lbNextBtn = document.getElementById('lb-next-btn');
  const lbImg = document.getElementById('lb-img');
  const lbMedia = document.getElementById('lb-media');
  const lbCategory = document.getElementById('lb-category');
  const lbTitle = document.getElementById('lb-title');
  const lbSubtitle = document.getElementById('lb-subtitle');
  const lbPov = document.getElementById('lb-pov');
  const lbDesc = document.getElementById('lb-desc');
  const lbTags = document.getElementById('lb-tags');
  const lbCarouselBtn = document.getElementById('lb-carousel-btn');

  function openLightbox(index) {
    const project = filteredProjects[index];
    if (!project) return;
    activeLightboxIndex = index;
    populateLightbox(project);
  }

  window.openLightboxById = function(id) {
    // Find project in the full PROJECTS_DATA array
    const project = typeof PROJECTS_DATA !== 'undefined' ? PROJECTS_DATA.find(p => p.id === id) : null;
    if (!project) return;
    
    // Set active index relative to current filter if possible, otherwise just use it
    const idx = filteredProjects.findIndex(p => p.id === id);
    if (idx !== -1) {
      activeLightboxIndex = idx;
    }
    
    if (lightboxModal) {
      lightboxModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    populateLightbox(project);
  };

  function populateLightbox(project) {
    if (project.gallery && lbMedia) {
      lbMedia.classList.add('is-paired');
      lbMedia.innerHTML = project.gallery.map((image, imageIndex) =>
        `<img src="${image}" alt="${project.title} — poster ${imageIndex + 1}">`
      ).join('');
    } else if (lbMedia) {
      lbMedia.classList.remove('is-paired');
      lbMedia.innerHTML = `<img id="lb-img" src="${project.img}" alt="${project.title}">`;
    }
    lbCategory.textContent = `${project.category} · ${project.year}`;
    lbTitle.textContent = project.title;
    lbSubtitle.textContent = project.subtitle;
    lbPov.textContent = project.pov || 'Focused editorial and visual exploration.';
    lbDesc.textContent = project.desc || '';
    lbTags.innerHTML = project.tags.map(t => `<span class="lb-tag-pill">${t}</span>`).join('');

    // Show/hide carousel button immediately after subtitle
    if (project.carousel) {
      lbCarouselBtn.style.display = 'inline-flex';
      lbCarouselBtn.onclick = () => {
        closeLightbox();
        openCarousel(project.carousel, project.title, project.carouselMode);
      };
    } else {
      lbCarouselBtn.style.display = 'none';
    }

    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Scroll details panel back to top each time
    const detailsPanel = document.querySelector('.lightbox-details-stage');
    if (detailsPanel) detailsPanel.scrollTop = 0;
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function nextLightbox() {
    openLightbox((activeLightboxIndex + 1) % filteredProjects.length);
  }

  function prevLightbox() {
    openLightbox((activeLightboxIndex - 1 + filteredProjects.length) % filteredProjects.length);
  }

  if (lbCloseBtn) lbCloseBtn.addEventListener('click', closeLightbox);
  if (lbNextBtn) lbNextBtn.addEventListener('click', nextLightbox);
  if (lbPrevBtn) lbPrevBtn.addEventListener('click', prevLightbox);
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // ==========================================================================
  //  PANORAMIC CAROUSEL MODAL (Full-Res Brand Books & Editorial Spreads)
  //  Matches old portfolio: image fills full container width, scroll to explore
  // ==========================================================================
  const carouselModal = document.getElementById('carousel-modal');
  const carouselCloseBtn = document.getElementById('carousel-close-btn');
  const carouselImage = document.getElementById('carousel-full-image');
  const carouselTitle = document.getElementById('carousel-project-title');
  const carouselHint = document.getElementById('carousel-hint');
  const carouselCue = document.getElementById('carousel-scroll-cue');
  const carouselViewport = document.querySelector('.carousel-viewport-wrapper');

  // Make wide social strips feel natural with a mouse wheel as well as touch/trackpad scrolling.
  if (carouselViewport) {
    carouselViewport.addEventListener('wheel', (event) => {
      if (!carouselModal.classList.contains('horizontal-carousel')) return;
      event.preventDefault();
      carouselViewport.scrollLeft += event.deltaY || event.deltaX;
    }, { passive: false });
  }

  function openCarousel(src, title, mode = 'vertical') {
    if (!src) return;
    if (carouselTitle) carouselTitle.textContent = title || 'Brand & Publication Showcase';
    carouselModal.classList.add('active');
    const isHorizontal = mode === 'horizontal';
    carouselModal.classList.toggle('horizontal-carousel', isHorizontal);
    if (carouselHint) carouselHint.textContent = isHorizontal ? 'Swipe, drag, or scroll sideways through all 5 slides' : 'Scroll down or drag to inspect full presentation';
    if (carouselCue) carouselCue.classList.toggle('visible', isHorizontal);
    document.body.style.overflow = 'hidden';

    // Scroll to top of carousel viewport each time
    const viewport = document.querySelector('.carousel-viewport-wrapper');
    if (viewport) {
      viewport.scrollTop = 0;
      viewport.scrollLeft = 0;
    }

    carouselImage.classList.remove('ready');
    carouselImage.onload = () => {
      carouselImage.classList.add('ready');
    };
    carouselImage.src = src;
    carouselImage.alt = title || 'Carousel';
    if (carouselImage.complete) {
      carouselImage.classList.add('ready');
    }
  }

  function closeCarousel() {
    carouselModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (carouselCloseBtn) carouselCloseBtn.addEventListener('click', closeCarousel);

  // Bind flagship "Open Brand Carousel" buttons
  document.querySelectorAll('[data-open-carousel]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openCarousel(btn.dataset.openCarousel, btn.dataset.carouselTitle);
    });
  });

  // Flagship media area click (the whole image panel)
  document.querySelectorAll('.flagship-media[data-open-carousel]').forEach((area) => {
    area.addEventListener('click', () => {
      openCarousel(area.dataset.openCarousel, area.dataset.carouselTitle);
    });
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (carouselModal && carouselModal.classList.contains('active')) { closeCarousel(); return; }
      if (lightboxModal && lightboxModal.classList.contains('active')) { closeLightbox(); return; }
    }
    if (lightboxModal && lightboxModal.classList.contains('active')) {
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    }
  });

  // ==========================================================================
  //  SERVICES ACCORDION EXPLORER
  // ==========================================================================
  const serviceListElem = document.getElementById('service-accordion-list');
  if (serviceListElem) {
    serviceListElem.innerHTML = SERVICES_DATA.map((s, idx) => `
      <div class="service-item-row ${idx === 0 ? 'active' : ''}" data-slug="${s.slug}">
        <button class="service-header" data-cursor="EXPLORE">
          <span class="service-num">${s.num}</span>
          <div class="service-title-group">
            <h3 class="service-name">${s.name}</h3>
            <span class="service-tagline">${s.sub}</span>
          </div>
          <div class="service-arrow-indicator">↓</div>
        </button>
        <div class="service-drawer">
          <div class="service-drawer-inner">
            <div class="drawer-column">
              <h4>— Design Philosophy & POV</h4>
              <p class="drawer-desc">${s.desc}</p>
              <h4>— Concrete Deliverables</h4>
              <div class="deliverables-grid">
                ${s.deliverables.map(d => `<span class="deliverable-chip">${d}</span>`).join('')}
              </div>
            </div>
            <div class="drawer-column">
              <h4>— Phased Execution Workflow</h4>
              <div class="process-steps-list">
                ${s.process.map(p => `
                  <div class="process-step-item">
                    <span class="step-num">${p[0]}</span>
                    <div class="step-info"><b>${p[1]}</b><span>${p[2]}</span></div>
                  </div>`).join('')}
              </div>
              <div style="margin-top: 24px;">
                <button class="btn-primary filter-discipline-btn" data-filter="${s.slug}" style="font-size:11px; padding:12px 24px;">
                  View ${s.shortName} Projects ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>`).join('');

    // Accordion toggles
    serviceListElem.querySelectorAll('.service-header').forEach((header) => {
      header.addEventListener('click', () => {
        const row = header.closest('.service-item-row');
        const wasActive = row.classList.contains('active');
        serviceListElem.querySelectorAll('.service-item-row').forEach(r => r.classList.remove('active'));
        if (!wasActive) row.classList.add('active');
      });
    });

    // Jump to works filter
    serviceListElem.querySelectorAll('.filter-discipline-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pill = document.querySelector(`.filter-pill[data-filter="${btn.dataset.filter}"]`);
        if (pill) pill.click();
        document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  // ==========================================================================
  //  INTERACTIVE PROJECT BRIEF ESTIMATOR
  // ==========================================================================
  const estDisciplineBtns = document.querySelectorAll('.est-disc-btn');
  const estTimelineBtns = document.querySelectorAll('.est-time-btn');
  const estBudgetBtns = document.querySelectorAll('.est-budget-btn');
  const estSummaryText = document.getElementById('est-summary-text');
  const estCopyBtn = document.getElementById('est-copy-brief-btn');
  const estEmailBtn = document.getElementById('est-email-brief-btn');

  let estState = {
    discipline: 'Branding & Identity System',
    timeline: '2-3 Weeks Standard',
    budget: 'Established Business'
  };

  function updateEstimatorSummary() {
    if (estSummaryText) {
      estSummaryText.textContent =
        `Looking for: ${estState.discipline} · Timeline: ${estState.timeline} · Budget Tier: ${estState.budget}.`;
    }
  }

  function setupEstGroup(buttons, stateKey) {
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        estState[stateKey] = btn.dataset.value;
        updateEstimatorSummary();
      });
    });
  }

  setupEstGroup(estDisciplineBtns, 'discipline');
  setupEstGroup(estTimelineBtns, 'timeline');
  setupEstGroup(estBudgetBtns, 'budget');

  if (estCopyBtn) {
    estCopyBtn.addEventListener('click', () => {
      const text = `Project Brief for Yugal Vats:\n- Service: ${estState.discipline}\n- Timeline: ${estState.timeline}\n- Budget: ${estState.budget}\n- Email: ${STUDIO_INFO.email}`;
      navigator.clipboard.writeText(text).then(() => showToast('✦ Brief copied to clipboard!'));
    });
  }

  if (estEmailBtn) {
    estEmailBtn.addEventListener('click', () => {
      const sub = encodeURIComponent(`Project Inquiry: ${estState.discipline}`);
      const body = encodeURIComponent(
        `Hi Yugal,\n\nI'd like to work with you on a new project.\n\n- Discipline: ${estState.discipline}\n- Timeline: ${estState.timeline}\n- Budget Tier: ${estState.budget}\n\nLooking forward to collaborating!\n\nBest,\n[Your Name]`
      );
      window.location.href = `mailto:${STUDIO_INFO.email}?subject=${sub}&body=${body}`;
    });
  }

  // --- FOOTER ---
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) currentYearSpan.textContent = new Date().getFullYear();

  document.getElementById('back-to-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // --- THEME TOGGLE ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeToggleText = themeToggleBtn?.querySelector('.toggle-text');
  
  // Check local storage for theme preference
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'light') {
    document.documentElement.classList.add('light-mode');
    if (themeToggleBtn) {
      themeToggleBtn.classList.add('active');
      if (themeToggleText) themeToggleText.textContent = 'Dark';
      themeToggleBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg><span class="toggle-text">Dark</span>`;
    }
  }

  themeToggleBtn?.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-mode');
    
    let theme = 'dark';
    if (document.documentElement.classList.contains('light-mode')) {
      theme = 'light';
      themeToggleBtn.classList.add('active');
      themeToggleBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg><span class="toggle-text">Dark</span>`;
    } else {
      themeToggleBtn.classList.remove('active');
      themeToggleBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg><span class="toggle-text">Light</span>`;
    }
    localStorage.setItem('theme', theme);
  });
});
