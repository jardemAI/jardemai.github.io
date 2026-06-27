const scenarios = {
  scam: {
    label: "Scam check",
    title: "Check suspicious messages before you click.",
    input: "Мне пришло SMS: «Ваш Kaspi аккаунт заблокирован. Подтвердите данные по ссылке». Это правда?",
    messages: [
      {
        role: "user",
        text: "Мне пришло SMS: «Ваш Kaspi аккаунт заблокирован. Подтвердите данные по ссылке». Это правда?"
      },
      {
        role: "ai",
        text: "This looks suspicious. Do not open the link or enter your card details. Real banks usually do not ask users to confirm sensitive data through random links. Open the official app manually and check notifications there."
      },
      {
        role: "ai",
        text: "Risk level: High. Recommended action: do not click, block/report the sender, and contact the bank only through official channels."
      }
    ]
  },

  document: {
    label: "Document simplification",
    title: "Turn official text into simple next steps.",
    input: "Объясни простыми словами: что значит этот официальный текст про смену фамилии и документы?",
    messages: [
      {
        role: "user",
        text: "Объясни простыми словами: что значит этот официальный текст про смену фамилии и документы?"
      },
      {
        role: "ai",
        text: "Simple version: after changing your surname, you may need to update personal documents within the required period. The key things to check are: deadline, ID document, bank data, tax records, and any business registration documents."
      },
      {
        role: "ai",
        text: "Next steps: 1) check which documents changed automatically, 2) download or save official confirmations, 3) update records where your old surname still appears, 4) ask the relevant office if a deadline applies."
      }
    ]
  },

  service: {
    label: "Public-service guide",
    title: "Navigate public services without legal language.",
    input: "Я хочу открыть ИП в Казахстане. Что делать?",
    messages: [
      {
        role: "user",
        text: "Я хочу открыть ИП в Казахстане. Что делать?"
      },
      {
        role: "ai",
        text: "Here is the simple version: choose your activity type, register as an individual entrepreneur through the official online service, choose a tax regime, save the registration notification, and check whether your activity requires additional permits."
      },
      {
        role: "ai",
        text: "I can also turn this into a checklist and help you prepare questions for a tax consultant or public-service specialist."
      }
    ]
  }
};

const tabs = document.querySelectorAll(".scenario-tab");
const chatBox = document.getElementById("chatBox");
const demoLabel = document.getElementById("demoLabel");
const demoTitle = document.getElementById("demoTitle");
const demoInput = document.getElementById("demoInput");
const runDemo = document.getElementById("runDemo");

let activeScenario = "scam";

function setScenario(name, renderImmediately = true) {
  activeScenario = name;
  const scenario = scenarios[name];

  demoLabel.textContent = scenario.label;
  demoTitle.textContent = scenario.title;
  demoInput.value = scenario.input;

  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.scenario === name);
  });

  if (renderImmediately) {
    renderMessages(scenario.messages);
  }
}

function renderMessages(messages) {
  chatBox.innerHTML = "";
  messages.forEach((message, index) => {
    setTimeout(() => {
      const bubble = document.createElement("div");
      bubble.className = `chat-message ${message.role}`;
      bubble.textContent = message.text;
      chatBox.appendChild(bubble);
    }, index * 160);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => setScenario(tab.dataset.scenario));
});

runDemo.addEventListener("click", () => {
  renderMessages(scenarios[activeScenario].messages);
});

setScenario(activeScenario);
