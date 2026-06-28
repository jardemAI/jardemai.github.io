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
