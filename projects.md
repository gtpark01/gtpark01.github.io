---
layout: page
title: Projects
permalink: /projects/
eyebrow: Selected work
lede: >-
  Code, simulations, and side projects — the things I've built outside of (or
  adjacent to) the papers.
slug: projects
---

<div class="project-grid">
  {% for project in site.data.projects %}
  <article class="project-card" data-reveal>
    <a href="{{ project.link }}" class="project-card-link" target="_blank" rel="noopener">
      <div class="project-card-image">
        <img src="{{ project.image | relative_url }}" alt="" loading="lazy" />
      </div>
      <div class="project-card-body">
        <h3 class="project-card-title">
          {{ project.title }}
          <span class="project-card-arrow">{% include icons.html name="arrow-up-right" %}</span>
        </h3>
        <p class="project-card-summary">{{ project.summary }}</p>
        {% if project.tags %}
        <ul class="project-card-tags">
          {% for t in project.tags %}<li>{{ t }}</li>{% endfor %}
        </ul>
        {% endif %}
      </div>
    </a>
  </article>
  {% endfor %}
</div>
