---
layout: page
title: Contact
permalink: /contact/
eyebrow: Say hello
lede: >-
  The fastest way to reach me is email. For everything else, the links below.
slug: contact
---

<section class="contact-hero" data-reveal>
  <a class="contact-email" href="mailto:gtpark@umich.edu">
    <span class="contact-email-text">gtpark@umich.edu</span>
    <span class="contact-email-icon">{% include icons.html name="arrow-up-right" %}</span>
  </a>
  <p class="contact-hint">Replies usually within a few days.</p>
</section>

<section class="contact-grid">
  <div class="contact-block" data-reveal>
    <h3>Where I am</h3>
    <p>
      Department of Electrical and Computer Engineering<br />
      University of Michigan, Ann Arbor<br />
      [Building & room placeholder]<br />
      Ann Arbor, MI, USA
    </p>
  </div>

  <div class="contact-block" data-reveal>
    <h3>Find me elsewhere</h3>
    <ul class="contact-links">
      {% for s in site.data.social %}
      <li>
        <a href="{{ s.url }}" target="_blank" rel="noopener" class="contact-link">
          <span class="contact-link-icon">{% include icons.html name=s.icon %}</span>
          <span class="contact-link-text">
            <span class="contact-link-name">{{ s.name }}</span>
            <span class="contact-link-handle">{{ s.label }}</span>
          </span>
          <span class="contact-link-arrow">{% include icons.html name="arrow-up-right" %}</span>
        </a>
      </li>
      {% endfor %}
    </ul>
  </div>

  <div class="contact-block" data-reveal>
    <h3>Office hours</h3>
    <p>
      [Placeholder.] If you're a prospective collaborator, fellow student, or
      just curious about my work, I'm happy to chat — drop me an email and
      we'll find a time.
    </p>
  </div>
</section>
