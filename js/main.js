// iRemedy v4 — "The Autopsy"
(function () {
  'use strict';

  // Contact form
  document.getElementById('contact-form')?.addEventListener('submit', e => {
    e.preventDefault();
    const btn = e.target.querySelector('.btn-submit');
    btn.textContent = 'INQUIRY RECEIVED ✓';
    btn.style.background = '#1a6a1a';
    setTimeout(() => { btn.textContent = 'SUBMIT INQUIRY →'; btn.style.background = ''; e.target.reset(); }, 4000);
  });
})();
