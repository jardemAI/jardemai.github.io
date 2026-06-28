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


function createAmbientParticles(){const layer=document.querySelector('.ambient-particles');if(!layer)return;const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(reduceMotion)return;const particleCount=window.innerWidth<700?18:34;layer.innerHTML='';for(let i=0;i<particleCount;i++){const p=document.createElement('span');const duration=14+Math.random()*16;p.style.left=`${Math.random()*100}%`;p.style.bottom=`${-10-Math.random()*30}%`;const size=2+Math.random()*3;p.style.width=`${size}px`;p.style.height=`${size}px`;p.style.setProperty('--duration',`${duration}s`);p.style.setProperty('--delay',`${Math.random()*-duration}s`);p.style.setProperty('--drift',`${-60+Math.random()*120}px`);layer.appendChild(p)}}
window.addEventListener('resize',()=>{window.clearTimeout(window.__particleResizeTimer);window.__particleResizeTimer=window.setTimeout(createAmbientParticles,250)});document.addEventListener('DOMContentLoaded',createAmbientParticles);
