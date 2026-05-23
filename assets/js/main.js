/* =============================================================
   Site interactions
   - Reveal animations (IntersectionObserver)
   - Sticky header shrink + hide-on-scroll
   - Theme toggle (light/dark, persisted)
   - Mobile menu
   - Scroll progress bar
   - Cursor glow (pointer: fine only)
   - Hero keyword rotator with fade
   - Hero figure tilt
   - Publications page year filter
   ============================================================= */

(function () {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.remove('no-js');
  document.documentElement.classList.add('js');

  /* ───────────── Reveal animations ───────────── */
  const revealEls = document.querySelectorAll('[data-reveal], [data-reveal-stagger]');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.revealDelay || 0;
            setTimeout(() => el.classList.add('is-revealed'), delay);
            io.unobserve(el);
          }
        });
      },
      { rootMargin: '-10% 0px -10% 0px', threshold: 0.05 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-revealed'));
  }

  /* Reveal any reveal-line / reveal-word that aren't inside a [data-reveal] block */
  const standaloneLines = document.querySelectorAll(
    '.reveal-line:not([data-reveal] .reveal-line):not([data-reveal] *), .reveal-word:not([data-reveal] .reveal-word):not([data-reveal] *)'
  );
  if (standaloneLines.length && 'IntersectionObserver' in window) {
    const lineIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            lineIO.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '-5% 0px -5% 0px' }
    );
    standaloneLines.forEach((el) => lineIO.observe(el));
  }

  /* Stagger lines/words inside parent reveal blocks */
  document.querySelectorAll('[data-reveal]').forEach((parent) => {
    const children = parent.querySelectorAll('.reveal-line > span, .reveal-word > span');
    children.forEach((c, i) => {
      c.style.transitionDelay = `${i * 70}ms`;
    });
  });

  /* ───────────── Header scroll behavior ───────────── */
  const header = document.querySelector('[data-scroll-header]');
  if (header) {
    let lastY = 0;
    let ticking = false;
    const onScroll = () => {
      const y = window.scrollY;
      header.classList.toggle('is-scrolled', y > 16);
      // Hide on scroll down past hero, show on scroll up
      if (y > 240 && y > lastY + 4) {
        header.classList.add('is-hidden');
      } else if (y < lastY - 4) {
        header.classList.remove('is-hidden');
      }
      lastY = y;
      ticking = false;
    };
    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          window.requestAnimationFrame(onScroll);
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  /* ───────────── Scroll progress ───────────── */
  const progressBar = document.querySelector('[data-scroll-progress]');
  if (progressBar) {
    const updateProgress = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      progressBar.style.width = `${Math.max(0, Math.min(1, scrolled)) * 100}%`;
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });
    updateProgress();
  }

  /* ───────────── Hero video: ensure autoplay even when the browser
       blocks it (Windows Chrome power-save, Safari Low Power, etc.).
       The <video> element stays opacity:0 until the `playing` event
       fires, so if autoplay is refused we just keep showing the poster
       background — no tap-to-play overlay ever appears. */
  const heroVideo = document.querySelector('[data-hero-video]');
  if (heroVideo && !reduceMotion) {
    heroVideo.muted = true;            /* belt-and-braces — required for autoplay */
    heroVideo.defaultMuted = true;
    heroVideo.setAttribute('muted', '');
    heroVideo.playsInline = true;

    heroVideo.addEventListener('playing', () => {
      heroVideo.classList.add('is-playing');
    });
    heroVideo.addEventListener('pause', () => {
      heroVideo.classList.remove('is-playing');
    });

    const tryPlay = () => {
      const p = heroVideo.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => { /* will retry on user interaction below */ });
      }
    };

    /* First attempt — most browsers will accept this. */
    tryPlay();

    /* Retry on the next user gesture if the first attempt was blocked. */
    const kick = () => {
      tryPlay();
      ['pointerdown', 'touchstart', 'keydown', 'scroll'].forEach((ev) =>
        window.removeEventListener(ev, kick, { passive: true })
      );
    };
    ['pointerdown', 'touchstart', 'keydown', 'scroll'].forEach((ev) =>
      window.addEventListener(ev, kick, { passive: true })
    );

    /* Resume when the tab becomes visible again. */
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') tryPlay();
    });
  }

  /* ───────────── Theme toggle ───────────── */
  const themeToggle = document.querySelector('[data-theme-toggle]');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      try {
        localStorage.setItem('theme', next);
      } catch (e) {}
    });
  }

  /* ───────────── Mobile menu ───────────── */
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  if (menuToggle && mobileMenu) {
    const openMenu = () => {
      mobileMenu.hidden = false;
      requestAnimationFrame(() => mobileMenu.classList.add('is-open'));
      menuToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };
    const closeMenu = () => {
      mobileMenu.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      setTimeout(() => {
        mobileMenu.hidden = true;
      }, 700);
    };
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      expanded ? closeMenu() : openMenu();
    });
    mobileMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') closeMenu();
    });
  }


  /* ───────────── Publications page filter ───────────── */
  const filterBtns = document.querySelectorAll('.pub-filter-btn');
  const pubCards = document.querySelectorAll('.pub-card');
  const pubCountEl = document.querySelector('[data-pub-count]');
  if (filterBtns.length && pubCards.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        filterBtns.forEach((b) => b.classList.toggle('is-active', b === btn));
        let visible = 0;
        pubCards.forEach((card) => {
          const show = filter === 'all' || card.dataset.year === filter;
          card.classList.toggle('is-hidden', !show);
          if (show) visible += 1;
        });
        if (pubCountEl) pubCountEl.textContent = visible;
      });
    });
  }

  /* ───────────── Active-section nav indicator (homepage only) ───────────── */
  // Watch sections on the home page that map to nav links via data-section,
  // and toggle .is-active on the matching nav link as you scroll.
  const isHome =
    document.body.classList.contains('page--home') ||
    location.pathname === '/' ||
    location.pathname === '';
  const sectionEls = document.querySelectorAll('[data-section]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (isHome && sectionEls.length && navLinks.length && 'IntersectionObserver' in window) {
    const byHref = new Map();
    navLinks.forEach((a) => {
      const href = a.getAttribute('href');
      if (href) byHref.set(href.replace(/\/$/, ''), a);
    });
    const setActive = (path) => {
      navLinks.forEach((a) => a.classList.remove('is-active'));
      if (!path) return;
      const match = byHref.get(path.replace(/\/$/, ''));
      if (match) match.classList.add('is-active');
    };
    const visible = new Set();
    const sio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.add(e.target);
          else visible.delete(e.target);
        });
        // Of currently visible sections, prefer the one closest to viewport top.
        let top = null;
        let topY = Infinity;
        visible.forEach((el) => {
          const y = el.getBoundingClientRect().top;
          if (y < topY) {
            topY = y;
            top = el;
          }
        });
        setActive(top ? top.dataset.section : null);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
    );
    sectionEls.forEach((s) => sio.observe(s));
  }

  /* ───────────── Smooth-scroll for in-page anchors ───────────── */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const headerOffset = 80;
          const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
          window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
        }
      }
    });
  });
})();
