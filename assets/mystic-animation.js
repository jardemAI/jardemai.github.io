/* Järdem Mystic Animation System — no sound */
(function () {
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function random(min, max) {
    return min + Math.random() * (max - min);
  }

  function createParticleLayer(target, count) {
    if (!target || reduceMotion) return;

    const oldLayer = target.querySelector(":scope > .mystic-particle-layer");
    if (oldLayer) oldLayer.remove();

    const layer = document.createElement("div");
    layer.className = "mystic-particle-layer";
    layer.setAttribute("aria-hidden", "true");
    target.appendChild(layer);

    for (let i = 0; i < count; i += 1) {
      const p = document.createElement("span");
      p.className = "mystic-particle";
      p.style.left = `${random(0, 100)}%`;
      p.style.bottom = `${random(-30, 10)}%`;
      p.style.setProperty("--s", `${random(2, 5)}px`);
      p.style.setProperty("--d", `${random(14, 30)}s`);
      p.style.setProperty("--delay", `${random(-20, 0)}s`);
      p.style.setProperty("--x", `${random(-110, 110)}px`);
      layer.appendChild(p);
    }
  }

  function mountBackground() {
    document.querySelectorAll('[data-mystic="background"]').forEach((el) => {
      if (el.dataset.mysticMounted) return;
      el.dataset.mysticMounted = "true";
      createParticleLayer(el, window.innerWidth < 700 ? 18 : 34);
    });
  }

  function mountHeroParallax() {
    const stages = document.querySelectorAll('[data-mystic="hero"]');

    stages.forEach((stage) => {
      if (stage.dataset.parallaxMounted) return;
      stage.dataset.parallaxMounted = "true";

      createParticleLayer(stage, 18);

      if (reduceMotion) return;

      let raf = 0;

      function update(x, y) {
        if (raf) cancelAnimationFrame(raf);

        raf = requestAnimationFrame(() => {
          const rect = stage.getBoundingClientRect();
          const mx = ((x - rect.left) / rect.width - 0.5) * 16;
          const my = ((y - rect.top) / rect.height - 0.5) * 14;

          stage.style.setProperty("--mx", mx.toFixed(2));
          stage.style.setProperty("--my", my.toFixed(2));
        });
      }

      stage.addEventListener("pointermove", (event) => update(event.clientX, event.clientY));
      stage.addEventListener("pointerleave", () => {
        stage.style.setProperty("--mx", "0");
        stage.style.setProperty("--my", "0");
      });
    });
  }

  function mountMiniElements() {
    document.querySelectorAll('[data-mystic="mini"]').forEach((el) => {
      if (el.dataset.mysticMounted) return;
      el.dataset.mysticMounted = "true";
      createParticleLayer(el, 10);
    });
  }

  function hideLoader() {
    const loader = document.querySelector("[data-mystic-loader]");
    if (!loader) return;
    window.setTimeout(() => loader.classList.add("is-hidden"), 650);
  }

  function removeLegacySoundControls() {
    document.querySelectorAll("#soundToggle, .sound-toggle, [data-sound]").forEach((el) => el.remove());
  }

  function mount() {
    removeLegacySoundControls();
    mountBackground();
    mountHeroParallax();
    mountMiniElements();
    hideLoader();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
