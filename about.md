---
layout: page
title: About
permalink: /about/
eyebrow: Who I am
lede: >-
  Physicist by training, engineer by current discipline. I think about how
  computation can let us design optical structures we wouldn't otherwise dream up.
slug: about
---

<div class="about-grid">
  <div class="about-portrait" data-reveal>
    <img src="{{ '/assets/images/hero.jpg' | relative_url }}" alt="Portrait of Geon-Tae Park" />
    <div class="about-portrait-caption">
      <p>Geon-Tae Park</p>
      <p>Ann Arbor, MI</p>
    </div>
  </div>

  <div class="about-bio prose" data-reveal>
    <h2>Bio</h2>
    <p>
      [Placeholder bio paragraph.] I'm a first-year PhD student in Electrical
      and Computer Engineering at the University of Michigan, Ann Arbor.
      Previously, I earned a B.S. in Applied Physics and an M.S. in Physics
      from Kyung Hee University in Seoul, South Korea.
    </p>
    <p>
      [Placeholder paragraph about research interests and motivation.] My
      research sits at the intersection of physics, optimization, and machine
      learning — using these tools to design photonic structures whose optical
      response is specified up front and whose geometry emerges from
      computation.
    </p>
    <p>
      [Placeholder paragraph about non-research interests.] Outside the lab,
      [hobbies, languages, anything else you want to share].
    </p>
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
      <div class="timeline-body">
        <h3 class="timeline-title">{{ ed.degree }}</h3>
        <p class="timeline-org">{{ ed.school }} · <span>{{ ed.location }}</span></p>
        {% if ed.advisor %}<p class="timeline-meta">Advisor: {{ ed.advisor }}</p>{% endif %}
        {% if ed.note %}<p class="timeline-note">{{ ed.note | markdownify | remove: '<p>' | remove: '</p>' }}</p>{% endif %}
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
    <div class="interest-card" data-reveal>
      <h4>Inverse design</h4>
      <p>[Placeholder text about why this interests you.]</p>
    </div>
    <div class="interest-card" data-reveal>
      <h4>Numerical optimization</h4>
      <p>[Placeholder text.]</p>
    </div>
    <div class="interest-card" data-reveal>
      <h4>Photonics</h4>
      <p>[Placeholder text.]</p>
    </div>
    <div class="interest-card" data-reveal>
      <h4>Machine learning</h4>
      <p>[Placeholder text.]</p>
    </div>
  </div>
</section>
