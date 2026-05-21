---
layout: page
title: Research
permalink: /research/
eyebrow: What I work on
lede: >-
  My work sits at the intersection of physics, optimization, and machine
  learning — using computation to discover photonic structures whose response
  is the starting point of the design conversation.
slug: research
---

<div class="research-philosophy" data-reveal>
  <p class="research-philosophy-text">
    [Placeholder.] A short paragraph about the overarching question that ties
    my research areas together — why these three directions are facets of a
    single underlying inquiry.
  </p>
</div>

<section class="research-areas">
  {% for area in site.data.research_areas %}
  <article class="research-area" data-reveal>
    <div class="research-area-header">
      <span class="research-area-num">{{ area.number }}</span>
      <h2 class="research-area-title">{{ area.title }}</h2>
    </div>
    <div class="research-area-body">
      <div class="research-area-text">
        <p class="research-area-short">{{ area.short }}</p>
        <p class="research-area-description">{{ area.description }}</p>
      </div>
      <div class="research-area-figure">
        <img src="{{ area.image | relative_url }}" alt="" loading="lazy" />
      </div>
    </div>
  </article>
  {% endfor %}
</section>

<section class="research-collab" data-reveal>
  <div class="research-collab-card">
    <p class="section-eyebrow">— Open to collaborate</p>
    <h3>Working on something related?</h3>
    <p>
      I'm always interested in conversations about inverse design, photonics,
      and the methodological side of ML-driven engineering. Drop me a line.
    </p>
    <a href="{{ '/contact/' | relative_url }}" class="btn btn--primary">
      <span>Get in touch</span>
      <span class="btn-icon">{% include icons.html name="arrow-right" %}</span>
    </a>
  </div>
</section>
