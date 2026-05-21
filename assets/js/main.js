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

  /* ───────────── Hero figure tilt ───────────── */
  const tiltEl = document.querySelector('[data-tilt]');
  if (tiltEl && window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reduceMotion) {
    const frame = tiltEl.querySelector('.hero-figure-frame');
    if (frame) {
      const max = 6; // degrees
      tiltEl.addEventListener('mousemove', (e) => {
        const r = tiltEl.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        frame.style.transform = `rotate(${-2 + x * max}deg) rotateY(${x * max}deg) rotateX(${-y * max}deg)`;
      });
      tiltEl.addEventListener('mouseleave', () => {
        frame.style.transform = '';
      });
    }
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
