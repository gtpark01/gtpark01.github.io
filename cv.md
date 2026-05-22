---
layout: page
title: Curriculum Vitae
permalink: /cv/
eyebrow: A long-form résumé
lede: >-
  Education, experience, publications, talks, awards, and skills — the full
  record. A printable PDF is available below.
slug: cv
---

<div class="cv-download" data-reveal>
  <a href="{{ '/assets/cv/gtpark-cv.pdf' | relative_url }}" class="btn btn--primary" target="_blank" rel="noopener">
    <span>Download CV (PDF)</span>
    <span class="btn-icon">{% include icons.html name="arrow-down" %}</span>
  </a>
  <p class="cv-updated">Last updated: <time datetime="2026-05">May 2026</time></p>
</div>

<section class="cv-section">
  <h2 class="cv-section-title">Research interests</h2>
  <p style="font-size:1.0625rem; line-height:1.65; color:var(--color-ink-soft); max-width:64ch;">
    Machine-learning-guided inverse design of optical and photonic materials and
    structures for energy, sensing, and cross-disciplinary applications.
  </p>
</section>

<section class="cv-section">
  <h2 class="cv-section-title">Education</h2>
  <ol class="timeline">
    {% for ed in site.data.education %}
    <li class="timeline-item" data-reveal>
      <div class="timeline-period">{{ ed.period }}</div>
      <div class="timeline-body">
        <h3 class="timeline-title">{{ ed.degree }}</h3>
        <p class="timeline-org">{{ ed.school }} · {{ ed.location }}</p>
        {% if ed.advisor %}<p class="timeline-meta">Advisor: {{ ed.advisor }}</p>{% endif %}
        {% if ed.note %}<p class="timeline-note">{{ ed.note | markdownify | remove: '<p>' | remove: '</p>' }}</p>{% endif %}
      </div>
    </li>
    {% endfor %}
  </ol>
</section>

<section class="cv-section">
  <h2 class="cv-section-title">Experience</h2>
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

<section class="cv-section">
  <h2 class="cv-section-title">Publications</h2>
  <ol class="cv-pub-list">
    {% for p in site.data.publications %}
    <li class="cv-pub" data-reveal>
      <p class="cv-pub-title">{{ p.title }}</p>
      <p class="cv-pub-meta">
        {{ p.authors }} ·
        <em>{{ p.venue }}</em>{% if p.volume %}, {{ p.volume }}{% if p.issue %} ({{ p.issue }}){% endif %}{% endif %}{% if p.pages %}, {{ p.pages }}{% endif %}
        ({{ p.year }}{% if p.status %}, {{ p.status }}{% endif %})
        {% if p.doi %} · <a href="{{ p.doi }}" target="_blank" rel="noopener">DOI</a>{% endif %}
        {% if p.pdf and p.pdf != "" %} · <a href="{{ p.pdf }}" target="_blank" rel="noopener">PDF</a>{% endif %}
      </p>
    </li>
    {% endfor %}
  </ol>
</section>

<section class="cv-section">
  <h2 class="cv-section-title">Conference Presentations</h2>
  <ol class="cv-pub-list">
    {% for t in site.data.talks %}
    <li class="cv-pub" data-reveal>
      <p class="cv-pub-title">{{ t.title }}</p>
      <p class="cv-pub-meta">
        {{ t.authors }} · <em>{{ t.venue }}</em>, {{ t.location }}
        ({{ t.date }})
      </p>
    </li>
    {% endfor %}
  </ol>
</section>

<section class="cv-section">
  <h2 class="cv-section-title">Honors &amp; Awards</h2>
  <ul class="cv-simple-list">
    {% for a in site.data.awards %}
    <li data-reveal>
      <strong>{{ a.year }}</strong> — {{ a.title }}, {{ a.org }}
      {% if a.note %}<br /><span style="color:var(--color-muted); font-size:0.9rem;">{{ a.note }}</span>{% endif %}
    </li>
    {% endfor %}
  </ul>
</section>

<section class="cv-section">
  <h2 class="cv-section-title">Skills</h2>
  <div class="cv-skills">
    <div class="cv-skill-group" data-reveal>
      <h4>Experimental</h4>
      <p>Thermal / e-beam evaporator · Ellipsometer · FTIR · AFM</p>
    </div>
    <div class="cv-skill-group" data-reveal>
      <h4>Simulation</h4>
      <p>FDTD · RCWA (S⁴) · COMSOL · LightTools</p>
    </div>
    <div class="cv-skill-group" data-reveal>
      <h4>Programming</h4>
      <p>Python · MATLAB</p>
    </div>
    <div class="cv-skill-group" data-reveal>
      <h4>Languages</h4>
      <p>Korean (native) · English (professional)</p>
    </div>
  </div>
</section>

<section class="cv-section">
  <h2 class="cv-section-title">Extracurricular</h2>
  <ul class="cv-simple-list">
    <li data-reveal>
      <strong>Jul. 2023</strong> — Overseas Academic Program (Capstone Design), <em>Saarland University</em>, Saarbrücken, Germany.
      <br /><span style="color:var(--color-muted); font-size:0.9rem;">
        Conducted a campus-wide survey on food storage and developed an AI-driven solution that scans ingredients, estimates expiration dates, and alerts users to reduce waste.
      </span>
    </li>
  </ul>
</section>
