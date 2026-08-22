/* ============================================================
   Enigma Entertainment Group — main.js
   Three small, framework-free behaviors:
     1. Mobile menu (hamburger) with accessible open/close
     2. Scroll reveals (IntersectionObserver, reduced-motion aware)
     3. Scroll-spy (highlights the nav link for the section in view)
   Plus: keeps the footer year current.
   ============================================================ */

(function () {
  'use strict';

  /* ---------- 1. Mobile menu ---------- */
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.getElementById('nav-menu');

  function closeMenu() {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
  }

  function openMenu() {
    menu.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    document.body.style.overflow = 'hidden'; // lock scroll behind the overlay
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) { closeMenu(); } else { openMenu(); }
    });

    // Tapping a link closes the overlay
    menu.addEventListener('click', function (event) {
      if (event.target.closest('a')) { closeMenu(); }
    });

    // Escape closes the overlay and returns focus to the button
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menu.classList.contains('is-open')) {
        closeMenu();
        toggle.focus();
      }
    });

    // Leaving mobile width resets the menu state
    window.matchMedia('(min-width: 901px)').addEventListener('change', function (mq) {
      if (mq.matches) { closeMenu(); }
    });
  }

  /* ---------- 2. Scroll reveals ---------- */
  var prefersReducedMotion =
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    // No animation: show everything immediately
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target); // reveal once, then stop watching
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- 3. Scroll-spy ---------- */
  var spyLinks = document.querySelectorAll('[data-spy]');
  var sections = [];
  spyLinks.forEach(function (link) {
    var id = link.getAttribute('href').slice(1);
    var section = document.getElementById(id);
    if (section) { sections.push({ id: id, el: section, link: link }); }
  });

  function setCurrent(id) {
    sections.forEach(function (s) {
      s.link.classList.toggle('is-current', s.id === id);
    });
  }

  if (sections.length && 'IntersectionObserver' in window) {
    var spyObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { setCurrent(entry.target.id); }
        });
      },
      // A narrow band around the upper-middle of the viewport decides "current"
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach(function (s) { spyObserver.observe(s.el); });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = String(new Date().getFullYear()); }
})();
