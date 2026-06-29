const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Reveal `[data-reveal]` elements as they scroll into view via CSS transition. */
function setupReveal() {
  const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

  // No animation needed: reveal everything immediately.
  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const delay = Number(el.dataset.delay ?? 0);
        // Per-element stagger — a genuinely dynamic runtime value, so inline.
        if (delay) el.style.transitionDelay = `${delay}ms`;
        el.classList.add('is-revealed');
        obs.unobserve(el);
      });
    },
    // Fire once the element is ~10% into the viewport (matches the old "top 90%").
    { rootMargin: '0px 0px -10% 0px' },
  );

  items.forEach((el) => observer.observe(el));
}

/** Scramble-decode the hero name once on load. */
function setupDecode() {
  const el = document.querySelector<HTMLElement>('[data-decode]');
  if (!el) return;

  const finalText = el.textContent ?? '';
  if (reduceMotion || !finalText.trim()) return;

  const glyphs = 'ABCDEFGHJKLMNPRSTUVWXYZ0123456789#%&<>/';
  const total = finalText.length;
  let frame = 0;

  const tick = () => {
    frame += 1;
    const revealed = frame / 2.2;
    let out = '';
    for (let i = 0; i < total; i += 1) {
      const c = finalText[i];
      if (c === ' ') {
        out += ' ';
      } else if (i < revealed) {
        out += c;
      } else {
        out += glyphs[Math.floor(Math.random() * glyphs.length)];
      }
    }
    el.textContent = out;
    if (revealed >= total) {
      el.textContent = finalText;
      window.clearInterval(timer);
    }
  };

  const timer = window.setInterval(tick, 45);
}

try {
  setupReveal();
  setupDecode();
} catch {
  // Never let an animation failure trap content at opacity:0.
  document
    .querySelectorAll<HTMLElement>('[data-reveal]')
    .forEach((el) => el.classList.add('is-revealed'));
}
