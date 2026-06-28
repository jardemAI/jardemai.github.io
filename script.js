document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.scenario-tab');
  const chatBox = document.getElementById('chatBox');
  const demoLabel = document.getElementById('demoLabel');
  const demoTitle = document.getElementById('demoTitle');
  const demoInput = document.getElementById('demoInput');
  const runDemo = document.getElementById('runDemo');

  let activeScenario = 'scam';

  function getScenarioData(name) {
    const lang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'en';
    return translations[lang]?.demoScenarios?.[name] || translations.en.demoScenarios[name];
  }

  function renderMessages(messages) {
    if (!chatBox) return;
    chatBox.innerHTML = '';
    messages.forEach((message, index) => {
      setTimeout(() => {
        const bubble = document.createElement('div');
        bubble.className = `chat-message ${message.role}`;
        bubble.textContent = message.text;
        chatBox.appendChild(bubble);
      }, index * 120);
    });
  }

  function setScenario(name, renderImmediately = true) {
    activeScenario = name;
    const scenario = getScenarioData(name);

    if (demoLabel) demoLabel.textContent = scenario.label;
    if (demoTitle) demoTitle.textContent = scenario.title;
    if (demoInput) demoInput.value = scenario.input;

    tabs.forEach((tab) => {
      tab.classList.toggle('active', tab.dataset.scenario === name);
    });

    if (renderImmediately) renderMessages(scenario.messages);
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => setScenario(tab.dataset.scenario));
  });

  if (runDemo) {
    runDemo.addEventListener('click', () => {
      renderMessages(getScenarioData(activeScenario).messages);
    });
  }

  window.addEventListener('languagechange', () => setScenario(activeScenario));
  setScenario(activeScenario);
});


function createAmbientParticles() {
  const layer = document.querySelector(".ambient-particles");
  if (!layer) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  const particleCount = window.innerWidth < 700 ? 18 : 34;
  layer.innerHTML = "";

  for (let i = 0; i < particleCount; i += 1) {
    const particle = document.createElement("span");
    const left = Math.random() * 100;
    const duration = 14 + Math.random() * 16;
    const delay = Math.random() * -duration;
    const drift = -60 + Math.random() * 120;
    const size = 2 + Math.random() * 3;

    particle.style.left = `${left}%`;
    particle.style.bottom = `${-10 - Math.random() * 30}%`;
    particle.style.setProperty("--duration", `${duration}s`);
    particle.style.setProperty("--delay", `${delay}s`);
    particle.style.setProperty("--drift", `${drift}px`);
    particle.style.setProperty("--size", `${size}px`);

    layer.appendChild(particle);
  }
}

window.addEventListener("resize", () => {
  window.clearTimeout(window.__particleResizeTimer);
  window.__particleResizeTimer = window.setTimeout(createAmbientParticles, 250);
});

document.addEventListener("DOMContentLoaded", createAmbientParticles);


// Gentle interaction for hero principle chips.
document.addEventListener("DOMContentLoaded", () => {
  const trustRow = document.querySelector(".trust-row");
  if (!trustRow) return;

  trustRow.addEventListener("pointermove", (event) => {
    const rect = trustRow.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 6;

    trustRow.classList.add("is-interacting");
    trustRow.querySelectorAll("span").forEach((chip, index) => {
      const depth = (index + 1) * 0.22;
      chip.style.transform = `translate3d(${x * depth}px, ${y * depth - 1}px, 0)`;
    });
  });

  trustRow.addEventListener("pointerleave", () => {
    trustRow.classList.remove("is-interacting");
    trustRow.querySelectorAll("span").forEach((chip) => {
      chip.style.transform = "";
    });
  });
});


// Final visual guard: never show raw i18n keys in the map block.
document.addEventListener("DOMContentLoaded", () => {
  const fallbackText = {
    "map.kicker": "Regional signal map",
    "map.title": "A living map of open AI routes across Central Asia.",
    "map.text": "Glowing paths connect languages, public knowledge, local context, and communities that mainstream AI often overlooks.",
    "map.chip1.label": "Open route",
    "map.chip1.value": "public knowledge",
    "map.chip2.label": "Local signal",
    "map.chip2.value": "mixed language"
  };

  document.querySelectorAll(".wide-constellation [data-i18n]").forEach((el) => {
    const text = el.textContent.trim();
    if (fallbackText[text]) el.textContent = fallbackText[text];
  });
});
