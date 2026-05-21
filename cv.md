---
layout: page
title: Curriculum Vitae
permalink: /cv/
eyebrow: A long-form résumé
lede: >-
  Education, experience, publications, talks, awards, and service — all in
  one place. A printable PDF is available below.
slug: cv
---

<div class="cv-download" data-reveal>
  <a href="#" class="btn btn--primary">
    <span>Download CV (PDF)</span>
    <span class="btn-icon">{% include icons.html name="arrow-down" %}</span>
  </a>
  <p class="cv-updated">Last updated: <time datetime="2025-09">September 2025</time></p>
</div>

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
    {% assign sorted = site.data.publications | sort: 'year' | reverse %}
    {% for p in sorted %}
    <li class="cv-pub" data-reveal>
      <p class="cv-pub-title">{{ p.title }}</p>
      <p class="cv-pub-meta">
        {{ p.authors }} ·
        <em>{{ p.venue }}</em>, {{ p.year }}
        {% if p.pdf %} · <a href="{{ p.pdf | relative_url }}" target="_blank" rel="noopener">PDF</a>{% endif %}
      </p>
    </li>
    {% endfor %}
  </ol>
</section>

<section class="cv-section">
  <h2 class="cv-section-title">Awards &amp; Honors</h2>
  <ul class="cv-simple-list">
    <li data-reveal><strong>[Year]</strong> — [Award name and granting institution.]</li>
    <li data-reveal><strong>[Year]</strong> — [Award name.]</li>
    <li data-reveal><strong>[Year]</strong> — [Scholarship.]</li>
  </ul>
</section>

<section class="cv-section">
  <h2 class="cv-section-title">Invited Talks &amp; Presentations</h2>
  <ul class="cv-simple-list">
    <li data-reveal><strong>[Year]</strong> — [Title of talk], [Conference / venue].</li>
    <li data-reveal><strong>[Year]</strong> — [Title of talk], [Conference / venue].</li>
  </ul>
</section>

<section class="cv-section">
  <h2 class="cv-section-title">Skills</h2>
  <div class="cv-skills">
    <div class="cv-skill-group" data-reveal>
      <h4>Programming</h4>
      <p>Python · MATLAB · C++ · [add as needed]</p>
    </div>
    <div class="cv-skill-group" data-reveal>
      <h4>Frameworks</h4>
      <p>PyTorch · NumPy · SciPy · [add as needed]</p>
    </div>
    <div class="cv-skill-group" data-reveal>
      <h4>Simulation</h4>
      <p>FDTD · RCWA · [add as needed]</p>
    </div>
    <div class="cv-skill-group" data-reveal>
      <h4>Languages</h4>
      <p>Korean (native) · English (professional)</p>
    </div>
  </div>
</section>
