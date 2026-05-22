---
layout: page
title: Publications
permalink: /publications/
eyebrow: Peer-reviewed work
lede: >-
  Papers I've authored or co-authored, with PDFs linked directly. For the most
  current list, see my Google Scholar profile.
slug: publications
---

<!-- Filter controls (year + tag) -->
<div class="pub-controls" data-reveal>
  <div class="pub-filter" data-filter-group="year">
    <button type="button" class="pub-filter-btn is-active" data-filter="all">All</button>
    {% assign all_years = site.data.publications | map: 'year' | uniq | sort | reverse %}
    {% for y in all_years %}
    <button type="button" class="pub-filter-btn" data-filter="{{ y }}">{{ y }}</button>
    {% endfor %}
  </div>
  <p class="pub-count">
    <span data-pub-count>{{ site.data.publications | size }}</span> publications
  </p>
</div>

<ol class="pub-list pub-list--full" data-pub-list>
  {% for pub in site.data.publications %}
  <li class="pub-card" data-year="{{ pub.year }}" data-tags="{{ pub.tags | join: ',' }}" data-reveal>
    <div class="pub-card-meta">
      <span class="pub-card-year">{{ pub.year }}</span>
    </div>

    <div class="pub-card-main">
      <h3 class="pub-card-title">{{ pub.title }}</h3>
      <p class="pub-card-authors">{{ pub.authors }}</p>
      <p class="pub-card-venue">
        <em>{{ pub.venue }}</em>{% if pub.volume %}, <strong>{{ pub.volume }}</strong>{% if pub.issue %} ({{ pub.issue }}){% endif %}{% endif %}{% if pub.pages %}, {{ pub.pages }}{% endif %}
      </p>

      {% if pub.abstract %}
      <details class="pub-card-abstract">
        <summary>Abstract</summary>
        <p>{{ pub.abstract }}</p>
      </details>
      {% endif %}

      {% if pub.tags %}
      <ul class="pub-card-tags">
        {% for t in pub.tags %}<li>{{ t }}</li>{% endfor %}
      </ul>
      {% endif %}
    </div>

    <div class="pub-card-actions">
      {% if pub.pdf and pub.pdf != "" %}
      <a href="{{ pub.pdf }}" class="pub-action" target="_blank" rel="noopener">
        {% include icons.html name="pdf" %}
        <span>PDF</span>
      </a>
      {% endif %}
      {% if pub.doi and pub.doi != "#" %}
      <a href="{{ pub.doi }}" class="pub-action" target="_blank" rel="noopener">
        {% include icons.html name="doi" %}
        <span>DOI</span>
      </a>
      {% endif %}
      {% if pub.code %}
      <a href="{{ pub.code }}" class="pub-action" target="_blank" rel="noopener">
        {% include icons.html name="github" %}
        <span>Code</span>
      </a>
      {% endif %}
    </div>
  </li>
  {% endfor %}
</ol>
