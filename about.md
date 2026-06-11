---
layout: page
title: About
permalink: /about/
eyebrow: Who I am
lede: >-
  Physicist by training, engineer in pursuit. I use machine learning and
  numerical optimization to design optical and photonic structures for energy,
  sensing, and imaging.
slug: about
---

<div class="about-grid">
  <div class="about-portrait" data-reveal>
    <img src="{{ '/assets/images/portrait.jpg' | relative_url }}" alt="Portrait of Geon-Tae Park" />
    <div class="about-portrait-caption">
      <p>Geon-Tae Park</p>
      <p>Ann Arbor, MI</p>
    </div>
  </div>

  <div class="about-bio-area" data-reveal>
    <div class="about-bio prose">
      <h2>Bio</h2>
      <p>
        I'm a PhD student in Electrical and Computer Engineering at the
        <strong>University of Michigan, Ann Arbor</strong>. I earned my BS in
        Applied Physics and MS in Physics at <strong>Kyung Hee University</strong>,
        and was recently a visiting researcher at the
        <strong>University of Tokyo</strong>.
      </p>
      <p>
        My work uses machine learning and numerical optimization to treat
        photonic design as a combinatorial optimization problem, surfacing
        structures that traditional graded-index intuition would never reach.
      </p>
    </div>

    <div class="about-cv">
      <a href="{{ '/assets/cv/gtpark-cv.pdf' | relative_url }}" class="btn" target="_blank" rel="noopener">
        <span>Download CV (PDF)</span>
        <span class="btn-icon">{% include icons.html name="arrow-down" %}</span>
      </a>
      <p class="cv-updated">Last updated: <time datetime="2026-05">May 2026</time></p>
    </div>
  </div>
</div>

<!-- ───────────────────────── EDUCATION ───────────────────────── -->
<section class="about-section">
  <header class="about-section-header" data-reveal>
    <p class="section-eyebrow">— Education</p>
    <h2 class="section-title-sm">Where I've studied</h2>
  </header>

  <ol class="timeline">
    {% for ed in site.data.education %}
    <li class="timeline-item" data-reveal>
      <div class="timeline-period">{{ ed.period }}</div>
      <div class="timeline-body{% if ed.logo %} timeline-body--edu{% endif %}">
        {% if ed.logo %}<span class="timeline-edu-logo"><img src="{{ ed.logo | relative_url }}" alt="{{ ed.school }} logo" loading="lazy" /></span>{% endif %}
        <div class="timeline-edu-text">
          <h3 class="timeline-title">{{ ed.degree }}</h3>
          <p class="timeline-org">{{ ed.school }} · <span>{{ ed.location }}</span></p>
          {% if ed.advisor %}<p class="timeline-meta">Advisor: {{ ed.advisor }}</p>{% endif %}
          {% if ed.note %}<p class="timeline-note">{{ ed.note | markdownify | remove: '<p>' | remove: '</p>' }}</p>{% endif %}
        </div>
      </div>
    </li>
    {% endfor %}
  </ol>
</section>

<!-- ───────────────────────── EXPERIENCE ───────────────────────── -->
<section class="about-section">
  <header class="about-section-header" data-reveal>
    <p class="section-eyebrow">— Experience</p>
    <h2 class="section-title-sm">Roles &amp; research positions</h2>
  </header>

  <ol class="timeline">
    {% for ex in site.data.experience %}
    <li class="timeline-item" data-reveal>
      <div class="timeline-period">{{ ex.period }}</div>
      <div class="timeline-body">
        <h3 class="timeline-title">{{ ex.role }}</h3>
        <p class="timeline-org">{{ ex.org }}</p>
        {% if ex.advisor %}<p class="timeline-meta">Advisor: {{ ex.advisor }}</p>{% endif %}
        {% if ex.project %}<p class="timeline-meta">Project: <em>{{ ex.project }}</em></p>{% endif %}
        <ul class="timeline-bullets">
          {% for b in ex.bullets %}<li>{{ b }}</li>{% endfor %}
        </ul>
      </div>
    </li>
    {% endfor %}
  </ol>
</section>

<!-- ───────────────────────── INTERESTS ───────────────────────── -->
<section class="about-section">
  <header class="about-section-header" data-reveal>
    <p class="section-eyebrow">— Interests</p>
    <h2 class="section-title-sm">What occupies my mind</h2>
  </header>

  <div class="interest-grid">
    <article class="interest-card" data-reveal>
      <div class="interest-card-image">
        <img src="{{ '/assets/images/interests/inverse-design.jpg' | relative_url }}" alt="" loading="lazy" />
      </div>
      <div class="interest-card-body">
        <h4>Inverse design</h4>
        <p>Reframing photonic engineering as a search problem over discrete material choices.</p>
      </div>
    </article>
    <article class="interest-card" data-reveal>
      <div class="interest-card-image">
        <img src="{{ '/assets/images/interests/interpretable-ml.jpg' | relative_url }}" alt="" loading="lazy" />
      </div>
      <div class="interest-card-body">
        <h4>Interpretable ML</h4>
        <p>Surrogates that are fast <em>and</em> give back design rules, not just answers.</p>
      </div>
    </article>
    <article class="interest-card" data-reveal>
      <div class="interest-card-image">
        <img src="{{ '/assets/images/interests/climate-optics.jpg' | relative_url }}" alt="" loading="lazy" />
      </div>
      <div class="interest-card-body">
        <h4>Energy-saving optics</h4>
        <p>Radiative cooling, selective emitters, and photovoltaic-enabling films.</p>
      </div>
    </article>
  </div>
</section>
