// iRemedy v4 — Animations
(function () {
  'use strict';
  gsap.registerPlugin(ScrollTrigger);

  // ── Masthead reveal ──────────────────────────────────────────────
  const masterTl = gsap.timeline({ delay: 0.2 });
  masterTl
    .from('.masthead-top', { opacity: 0, y: -10, duration: 0.5, ease: 'power2.out' })
    .from('.headline-kicker', { opacity: 0, y: 8, duration: 0.4, ease: 'power2.out' }, '-=0.1')
    .from('.headline-main', { opacity: 0, y: 30, duration: 0.8, ease: 'power3.out' }, '-=0.2')
    .from('.headline-deck', { opacity: 0, y: 16, duration: 0.6, ease: 'power2.out' }, '-=0.4');

  // ── Lead section ─────────────────────────────────────────────────
  gsap.from('.lead-main > *', {
    scrollTrigger: { trigger: '#lead', start: 'top 80%' },
    opacity: 0, y: 20, duration: 0.6, ease: 'power2.out', stagger: 0.1
  });

  gsap.from('.stat-box', {
    scrollTrigger: { trigger: '.lead-side-1', start: 'top 80%' },
    opacity: 0, x: 20, duration: 0.55, ease: 'power2.out', stagger: 0.15
  });

  gsap.from('.lead-side-2 > *', {
    scrollTrigger: { trigger: '.lead-side-2', start: 'top 80%' },
    opacity: 0, y: 16, duration: 0.55, ease: 'power2.out', stagger: 0.12
  });

  // ── Stat counters ─────────────────────────────────────────────────
  document.querySelectorAll('.stat-box-num[data-counter]').forEach(el => {
    const target = el.dataset.counter;
    const isPercent = target.endsWith('%');
    const end = parseInt(target);
    ScrollTrigger.create({
      trigger: el, start: 'top 85%', once: true,
      onEnter: () => {
        const obj = { v: 0 };
        gsap.to(obj, {
          v: end, duration: 1.8, ease: 'power2.out',
          onUpdate: () => { el.textContent = Math.round(obj.v) + (isPercent ? '%' : ''); }
        });
      }
    });
  });

  // ── Evidence columns ──────────────────────────────────────────────
  gsap.from('.evidence-col', {
    scrollTrigger: { trigger: '#evidence', start: 'top 78%' },
    opacity: 0, y: 28, duration: 0.65, ease: 'power2.out', stagger: 0.15
  });

  // ── Capability rows ───────────────────────────────────────────────
  gsap.from('.cap-sheet-head', {
    scrollTrigger: { trigger: '#capabilities-sheet', start: 'top 80%' },
    opacity: 0, y: 20, duration: 0.6, ease: 'power2.out'
  });
  gsap.from('.cap-row', {
    scrollTrigger: { trigger: '.cap-rows', start: 'top 80%' },
    opacity: 0, x: -20, duration: 0.5, ease: 'power2.out', stagger: 0.08
  });

  // ── Credentials bar ───────────────────────────────────────────────
  gsap.from('.cred-block', {
    scrollTrigger: { trigger: '#credentials-bar', start: 'top 85%' },
    opacity: 0, y: 24, duration: 0.55, ease: 'power2.out', stagger: 0.12
  });

  // ── Architecture diagram ──────────────────────────────────────────
  gsap.from('.diagram-left > *', {
    scrollTrigger: { trigger: '#diagram', start: 'top 78%' },
    opacity: 0, y: 20, duration: 0.6, ease: 'power2.out', stagger: 0.12
  });
  gsap.from('.arch-row', {
    scrollTrigger: { trigger: '.arch-diagram', start: 'top 80%' },
    opacity: 0, y: 16, duration: 0.5, ease: 'power2.out', stagger: 0.18
  });

  // ── Contact ───────────────────────────────────────────────────────
  gsap.from('.contact-left > *, .contact-right > *', {
    scrollTrigger: { trigger: '#contact', start: 'top 80%' },
    opacity: 0, y: 20, duration: 0.55, ease: 'power2.out', stagger: 0.1
  });

  // ── Stamps: slight rotate wobble on scroll into view ──────────────
  gsap.utils.toArray('.stamp').forEach((el, i) => {
    ScrollTrigger.create({
      trigger: el, start: 'top 88%', once: true,
      onEnter: () => {
        gsap.from(el, { opacity: 0, scale: 1.3, duration: 0.4, ease: 'back.out(2)' });
      }
    });
  });

})();
