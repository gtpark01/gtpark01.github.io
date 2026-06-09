---
layout: page
title: News & Updates
permalink: /news/
eyebrow: Latest
lede: >-
  Talks, papers, awards, and the occasional life update, the running record.
slug: news
---

<ol class="news-list news-list--full">
  {% for item in site.data.news %}
  <li class="news-item" data-reveal>
    <time class="news-date" datetime="{{ item.date }}">
      {{ item.date | date: "%b %d, %Y" }}
    </time>
    <p class="news-body">{{ item.body | markdownify | remove: '<p>' | remove: '</p>' }}</p>
    {% if item.tag %}<span class="news-tag news-tag--{{ item.tag }}">{{ item.tag }}</span>{% endif %}
  </li>
  {% endfor %}
</ol>
