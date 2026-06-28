/* Järdem Mystic Animation System */
(function () {
  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const state = { audio: null, soundOn: false };

  function random(min, max) {
    return min + Math.random() * (max - min);
  }

  function createParticleLayer(target, count) {
    if (!target || reduceMotion) return;
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
    window.setTimeout(() => loader.classList.add("is-hidden"), 750);
  }

  function createAmbientAudio() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return null;

    const ctx = new AudioContext();
    const master = ctx.createGain();
    master.gain.value = 0.0001;
    master.connect(ctx.destination);

    const low = ctx.createOscillator();
    low.type = "sine";
    low.frequency.value = 92;
    const lowGain = ctx.createGain();
    lowGain.gain.value = 0.035;
    low.connect(lowGain).connect(master);

    const high = ctx.createOscillator();
    high.type = "triangle";
    high.frequency.value = 184;
    const highGain = ctx.createGain();
    highGain.gain.value = 0.012;
    high.connect(highGain).connect(master);

    const lfo = ctx.createOscillator();
    lfo.frequency.value = 0.045;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 28;
    lfo.connect(lfoGain).connect(high.frequency);

    low.start();
    high.start();
    lfo.start();

    return { ctx, master };
  }

  function setSound(enabled) {
    const button = document.getElementById("mysticSoundToggle");
    if (enabled && !state.audio) state.audio = createAmbientAudio();
    if (!state.audio) return;

    state.soundOn = enabled;
    if (state.audio.ctx.state === "suspended") state.audio.ctx.resume();

    const now = state.audio.ctx.currentTime;
    state.audio.master.gain.cancelScheduledValues(now);
    state.audio.master.gain.setTargetAtTime(enabled ? 0.42 : 0.0001, now, 0.45);

    if (button) {
      button.classList.toggle("is-on", enabled);
      button.setAttribute("aria-pressed", String(enabled));
      button.textContent = enabled ? "Sound on" : "Sound";
    }
  }

  function mountSoundToggle() {
    const button = document.getElementById("mysticSoundToggle");
    if (!button || button.dataset.mounted) return;
    button.dataset.mounted = "true";
    button.addEventListener("click", () => setSound(!state.soundOn));
  }

  function init() {
    mountBackground();
    mountHeroParallax();
    mountMiniElements();
    mountSoundToggle();
    hideLoader();
  }

  window.JardemMystic = {
    init,
    showLoader() {
      const loader = document.querySelector("[data-mystic-loader]");
      if (loader) loader.classList.remove("is-hidden");
    },
    hideLoader,
    setSound,
    mount(element, type = "mini") {
      if (!element) return;
      element.setAttribute("data-mystic", type);
      if (type === "background") mountBackground();
      if (type === "hero") mountHeroParallax();
      if (type === "mini") mountMiniElements();
    }
  };

  document.addEventListener("DOMContentLoaded", init);
  window.addEventListener("load", hideLoader);
})();
