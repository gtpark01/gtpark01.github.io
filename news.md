---
layout: page
title: News & Updates
permalink: /news/
eyebrow: Latest
lede: >-
  Talks, papers, awards, and the occasional life update, the running record.
slug: news
---

<div class="news-controls" data-reveal>
  <div class="news-filter" data-filter-group="tag">
    <button type="button" class="news-filter-btn is-active" data-filter="all">All</button>
    {% assign news_tags = "milestone,publication,talk,award" | split: "," %}
    {% for t in news_tags %}
    <button type="button" class="news-filter-btn" data-filter="{{ t }}">{{ t | capitalize }}</button>
    {% endfor %}
  </div>
  <p class="news-count">
    <span data-news-count>{{ site.data.news | size }}</span> updates
  </p>
</div>

<ol class="news-list news-list--full" data-news-list>
  {% for item in site.data.news %}
  <li class="news-item" data-tag="{{ item.tag }}" data-reveal>
    <time class="news-date" datetime="{{ item.date }}">
      {{ item.date | date: "%b %d, %Y" }}
    </time>
    <p class="news-body">{{ item.body | markdownify | remove: '<p>' | remove: '</p>' }}</p>
    {% if item.tag %}<span class="news-tag news-tag--{{ item.tag }}">{{ item.tag }}</span>{% endif %}
  </li>
  {% endfor %}
</ol>
