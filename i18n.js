const I18N_STORAGE_KEY = 'jardem_ai_language';
const SUPPORTED_LANGUAGES = ['ru', 'kk', 'en'];
const DEFAULT_LANGUAGE = 'en';
const translations = {
  "en": {
    "meta.title": "Järdem AI - Open AI Help for Central Asia",
    "meta.description": "Järdem AI is an open-source, privacy-first AI assistant that helps Central Asian users understand documents, avoid scams, and navigate public services in their own languages.",
    "aria.home": "Järdem AI home",
    "aria.languageSwitcher": "Language switcher",
    "aria.projectPrinciples": "Project principles",
    "aria.demoScenarios": "Demo scenarios",
    "aria.demoPrompt": "Demo prompt",
    "aria.motionSystem": "Central Asia motion system",
    "aria.audienceList": "Audience list",
    "aria.constellationMap": "Animated Central Asia constellation map",
    "nav.demo": "Demo",
    "nav.open": "Open",
    "nav.roadmap": "Roadmap",
    "nav.contact": "Contact",
    "nav.tryDemo": "Try demo",
    "hero.eyebrow": "Early open prototype",
    "hero.title": "Open AI help for Central Asia",
    "hero.subtitle": "Järdem AI is an open-source, privacy-first assistant that helps people understand documents, avoid scams, and navigate government, legal, financial, and everyday high-stakes situations in Kazakh, Russian, and mixed-language contexts.",
    "hero.primaryCta": "Try interactive demo",
    "hero.secondaryCta": "View GitHub",
    "hero.trust1": "Open-source",
    "hero.trust2": "Local-first",
    "hero.trust3": "Privacy-first",
    "hero.trust4": "Low-resource languages",
    "hero.previewLabel": "Järdem AI assistant",
    "hero.previewUser": "I received an SMS: “Your Kaspi account is blocked, confirm your data through this link.” Is this real?",
    "hero.previewAi": "This looks like a high-risk scam. Do not open the link or enter card data. Open the official app manually and check notifications there.",
    "hero.riskLabel": "Risk level",
    "hero.riskValue": "High",
    "problem.kicker": "The gap",
    "problem.title": "AI is powerful. But most of it was not built for how our region actually lives",
    "problem.card1Title": "Language mismatch",
    "problem.card1Text": "People switch between Kazakh, Russian, slang, screenshots, voice notes, and short messy questions. Most AI products expect polished English prompts.",
    "problem.card2Title": "Confusing public information",
    "problem.card2Text": "Official services and legal procedures exist, but are often fragmented, formal, and hard to understand for ordinary users.",
    "problem.card3Title": "Privacy and trust",
    "problem.card3Text": "Users may need help with documents, finances, scams, health, or legal situations - exactly the data that should not depend on a closed black-box system.",
    "demo.kicker": "Interactive prototype",
    "demo.title": "Try three early Järdem AI scenarios",
    "demo.subtitle": "This demo shows the initial product direction: scam detection, document simplification, and public-service navigation for Kazakhstan-focused users.",
    "demo.tabScam": "Scam check",
    "demo.tabDocument": "Explain a document",
    "demo.tabService": "Public-service guide",
    "demo.status": "Prototype",
    "demo.runButton": "Run demo",
    "demo.note": "Demo responses are scripted for the current prototype. The full assistant will connect open models, retrieval from trusted sources, and safety checks.",

    "motion.kicker": "Motion language",
    "motion.title": "A living interface inspired by Central Asian routes, symbols, and night landscapes",
    "motion.subtitle": "Subtle animations turn loading, transitions, cards, and empty states into a calm, memorable product experience.",
    "motion.card1.title": "Silk route loading",
    "motion.card1.text": "Glowing paths slowly reveal movement, routing, and trusted-source discovery.",
    "motion.card2.title": "Tumar signal pulse",
    "motion.card2.text": "A protective folk-inspired symbol for verification, safety states, and alerts.",
    "motion.card3.title": "Steppe night drift",
    "motion.card3.text": "Soft atmospheric movement for decorative areas, modals, and empty states.",
    "features.kicker": "Product",
    "features.title": "Built for practical, high-stakes everyday questions",
    "features.card1Title": "Plain-language explanations",
    "features.card1Text": "Turn official instructions, documents, and procedures into simple steps people can actually follow.",
    "features.card2Title": "Scam pattern detection",
    "features.card2Text": "Help users understand suspicious messages, fake links, social engineering, and common fraud patterns.",
    "features.card3Title": "Mixed-language understanding",
    "features.card3Text": "Support Kazakh, Russian, and mixed local communication instead of forcing perfect formal language.",
    "features.card4Title": "Local-first architecture",
    "features.card4Text": "Move toward lightweight, offline-capable AI for sensitive contexts and unstable internet environments.",
    "open.kicker": "Why open?",
    "open.title": "If this closes, the region loses infrastructure",
    "open.text": "Järdem AI is not only an app. It is meant to become reusable open infrastructure for Central Asian developers, NGOs, educators, civic-tech teams, and public-interest AI builders.",
    "open.item1Title": "Open code",
    "open.item1Text": "Assistant interface, retrieval pipeline, safety logic, and deployment tools.",
    "open.item2Title": "Open datasets",
    "open.item2Text": "Public-service questions, scam examples, and document simplification tasks where legally possible.",
    "open.item3Title": "Open evaluations",
    "open.item3Text": "Benchmarks for Kazakh/Russian mixed-language understanding and practical local use cases.",
    "roadmap.kicker": "Roadmap",
    "roadmap.title": "From demo to open local AI stack",
    "roadmap.phase1Label": "Phase 1",
    "roadmap.phase1Title": "Public demo",
    "roadmap.phase1Text": "Landing page, interactive scenarios, GitHub repository, early prompt logic, and Kazakhstan-focused use cases.",
    "roadmap.phase2Label": "Phase 2",
    "roadmap.phase2Title": "Open prototype",
    "roadmap.phase2Text": "Web assistant, scam-check module, document explanation module, public-service navigation, and small evaluation dataset.",
    "roadmap.phase3Label": "Phase 3",
    "roadmap.phase3Title": "Local-first AI",
    "roadmap.phase3Text": "Lightweight model experiments, offline selected tasks, mixed-language benchmark, and community contributions.",
    "roadmap.phase4Label": "Phase 4",
    "roadmap.phase4Title": "Central Asia expansion",
    "roadmap.phase4Text": "Uzbek and Kyrgyz support, NGO partnerships, more public datasets, developer tools, and documentation.",
    "audience.kicker": "Who it helps",
    "audience.title": "Designed for people and builders underserved by mainstream AI",

    "audience.tags.citizens": "Citizens",
    "audience.tags.elderly": "Elderly users",
    "audience.tags.lowDigital": "Low-digital-literacy users",
    "audience.tags.students": "Students",
    "audience.tags.migrants": "Migrants",
    "audience.tags.families": "Families",
    "audience.tags.smallBusiness": "Small business owners",
    "audience.tags.ngos": "NGOs",
    "audience.tags.civic": "Civic-tech builders",
    "audience.tags.developers": "Open-source developers",
    "audience.tags.researchers": "Central Asian language researchers",

    "audience.tag1": "Citizens",
    "audience.tag2": "Elderly users",
    "audience.tag3": "Low-digital-literacy users",
    "audience.tag4": "Students",
    "audience.tag5": "Migrants",
    "audience.tag6": "Families",
    "audience.tag7": "Small business owners",
    "audience.tag8": "NGOs",
    "audience.tag9": "Civic-tech builders",
    "audience.tag10": "Open-source developers",
    "cta.kicker": "Contribute / test / support",
    "cta.title": "Help build open AI infrastructure for Central Asia.",
    "cta.text": "We are preparing the first public repository, lightweight demo, and initial dataset for scam detection, document simplification, and public-service navigation.",
    "cta.github": "GitHub repository",
    "cta.contact": "Contact team (Soon)",
    "footer.tagline": "Open AI help for Central Asia",
    "demoScenarios": {
      "scam": {
        "label": "Scam check",
        "title": "Check suspicious messages before you click",
        "input": "I received an SMS: “Your Kaspi account is blocked. Confirm your data through this link.” Is this real?",
        "messages": [
          {
            "role": "user",
            "text": "I received an SMS: “Your Kaspi account is blocked. Confirm your data through this link.” Is this real?"
          },
          {
            "role": "ai",
            "text": "This looks suspicious. Do not open the link or enter your card details. Real banks usually do not ask users to confirm sensitive data through random links."
          },
          {
            "role": "ai",
            "text": "Risk level: High. Recommended action: do not click, block/report the sender, and contact the bank only through official channels."
          }
        ]
      },
      "document": {
        "label": "Document simplification",
        "title": "Turn official text into simple next steps.",
        "input": "Explain in simple words what this official text about surname change and documents means.",
        "messages": [
          {
            "role": "user",
            "text": "Explain in simple words what this official text about surname change and documents means."
          },
          {
            "role": "ai",
            "text": "Simple version: after changing your surname, you may need to update personal documents within the required period."
          },
          {
            "role": "ai",
            "text": "Next steps: check which documents changed automatically, save official confirmations, and update records where your old surname still appears."
          }
        ]
      },
      "service": {
        "label": "Public-service guide",
        "title": "Navigate public services without legal language.",
        "input": "I want to open an individual business in Kazakhstan. What should I do?",
        "messages": [
          {
            "role": "user",
            "text": "I want to open an individual business in Kazakhstan. What should I do?"
          },
          {
            "role": "ai",
            "text": "Choose your activity type, register as an individual entrepreneur through the official online service, choose a tax regime, and save the registration notification."
          },
          {
            "role": "ai",
            "text": "I can also turn this into a checklist and help you prepare questions for a tax consultant or public-service specialist."
          }
        ]
      }
    }
  },
  "ru": {
    "meta.title": "Järdem AI - открытая AI-помощь для Центральной Азии",
    "meta.description": "Järdem AI - open-source AI-помощник с фокусом на приватность: помогает понимать документы, распознавать мошенничество и ориентироваться в госуслугах.",
    "aria.home": "Главная страница Järdem AI",
    "aria.languageSwitcher": "Переключатель языка",
    "aria.projectPrinciples": "Принципы проекта",
    "aria.demoScenarios": "Демо-сценарии",
    "aria.demoPrompt": "Демо-запрос",
    "aria.motionSystem": "Система анимации Центральной Азии",
    "aria.audienceList": "Список аудиторий",
    "aria.constellationMap": "Анимированная карта-созвездие Центральной Азии",
    "nav.demo": "Demo",
    "nav.open": "Открытость",
    "nav.roadmap": "План",
    "nav.contact": "Контакты",
    "nav.tryDemo": "Попробовать",
    "hero.eyebrow": "Ранний открытый прототип",
    "hero.title": "Открытая AI-помощь для Центральной Азии",
    "hero.subtitle": "Järdem AI - open-source помощник с фокусом на приватность. Он помогает людям понимать документы, избегать мошенничества и ориентироваться в государственных, юридических, финансовых и бытовых ситуациях на казахском, русском и смешанном локальном языке.",
    "hero.primaryCta": "Попробовать демо",
    "hero.secondaryCta": "Открыть GitHub",
    "hero.trust1": "Open-source",
    "hero.trust2": "Local-first",
    "hero.trust3": "Privacy-first",
    "hero.trust4": "Low-resource languages",
    "hero.previewLabel": "Помощник Järdem AI",
    "hero.previewUser": "Мне пришло SMS: «Ваш Kaspi аккаунт заблокирован, подтвердите данные по ссылке». Это правда?",
    "hero.previewAi": "Похоже на высокий риск мошенничества. Не открывайте ссылку и не вводите данные карты. Откройте официальный app вручную и проверьте уведомления там.",
    "hero.riskLabel": "Уровень риска",
    "hero.riskValue": "Высокий",
    "problem.kicker": "Проблема",
    "problem.title": "AI уже мощный. Но большая его часть не создана под то, как реально живёт наш регион",
    "problem.card1Title": "Языковой разрыв",
    "problem.card1Text": "Люди смешивают казахский, русский, сленг, скриншоты, голосовые и короткие хаотичные вопросы. Большинство AI-продуктов ждут идеальные английские промпты.",
    "problem.card2Title": "Сложная публичная информация",
    "problem.card2Text": "Госуслуги и юридические процедуры существуют, но информация часто разбросана, написана формально и непонятна обычным людям.",
    "problem.card3Title": "Приватность и доверие",
    "problem.card3Text": "Пользователям нужна помощь с документами, финансами, мошенничеством, здоровьем или правовыми вопросами - именно такие данные не должны зависеть от закрытой чёрной коробки.",
    "demo.kicker": "Интерактивный прототип",
    "demo.title": "Попробуйте три ранних сценария Järdem AI",
    "demo.subtitle": "Это демо показывает первое направление продукта: проверка мошенничества, упрощение документов и навигация по госуслугам для пользователей в Казахстане.",
    "demo.tabScam": "Проверка скама",
    "demo.tabDocument": "Объяснить документ",
    "demo.tabService": "Гид по госуслугам",
    "demo.status": "Прототип",
    "demo.runButton": "Запустить",
    "demo.note": "Ответы в демо пока scripted для текущего прототипа. Полная версия подключит открытые модели, поиск по доверенным источникам и safety-проверки.",

    "motion.kicker": "Язык движения",
    "motion.title": "Живой интерфейс, вдохновлённый маршрутами, символами и ночными ландшафтами Центральной Азии",
    "motion.subtitle": "Мягкая анимация превращает загрузку, переходы, карточки и пустые состояния в спокойный и запоминающийся опыт.",
    "motion.card1.title": "Загрузка Шёлкового пути",
    "motion.card1.text": "Светящиеся маршруты постепенно раскрывают движение, навигацию и поиск по доверенным источникам.",
    "motion.card2.title": "Пульс тумара",
    "motion.card2.text": "Защитный символ, вдохновлённый народной эстетикой, для проверок, safety-состояний и предупреждений.",
    "motion.card3.title": "Ночной дрейф степи",
    "motion.card3.text": "Мягкое атмосферное движение для декоративных зон, модальных окон и пустых состояний.",
    "features.kicker": "Продукт",
    "features.title": "Создан для практичных и важных бытовых вопросов",
    "features.card1Title": "Простые объяснения",
    "features.card1Text": "Превращает официальные инструкции, документы и процедуры в понятные шаги, которым можно следовать.",
    "features.card2Title": "Распознавание скам-паттернов",
    "features.card2Text": "Помогает понять подозрительные сообщения, фейковые ссылки, социальную инженерию и частые схемы мошенничества.",
    "features.card3Title": "Понимание смешанного языка",
    "features.card3Text": "Поддерживает казахский, русский и смешанную локальную речь, а не требует идеально формального языка.",
    "features.card4Title": "Local-first архитектура",
    "features.card4Text": "Движется к лёгкому offline-capable AI для чувствительных ситуаций и нестабильного интернета.",
    "open.kicker": "Почему open?",
    "open.title": "Если это закрыть, регион потеряет инфраструктуру",
    "open.text": "Järdem AI - это не только приложение. Это будущая открытая инфраструктура для разработчиков Центральной Азии, НПО, образовательных проектов, civic-tech команд и public-interest AI.",
    "open.item1Title": "Открытый код",
    "open.item1Text": "Интерфейс помощника, retrieval pipeline, safety-логика и инструменты деплоя.",
    "open.item2Title": "Открытые датасеты",
    "open.item2Text": "Вопросы по госуслугам, примеры мошенничества и задачи по упрощению документов там, где это юридически возможно.",
    "open.item3Title": "Открытые оценки",
    "open.item3Text": "Бенчмарки для казахско-русского смешанного языка и практичных локальных кейсов.",
    "roadmap.kicker": "Roadmap",
    "roadmap.title": "От демо к открытому локальному AI-стеку",
    "roadmap.phase1Label": "Фаза 1",
    "roadmap.phase1Title": "Публичное демо",
    "roadmap.phase1Text": "Лендинг, интерактивные сценарии, GitHub-репозиторий, ранняя prompt-логика и use cases для Казахстана.",
    "roadmap.phase2Label": "Фаза 2",
    "roadmap.phase2Title": "Открытый прототип",
    "roadmap.phase2Text": "Веб-помощник, модуль проверки скама, объяснение документов, навигация по госуслугам и небольшой evaluation dataset.",
    "roadmap.phase3Label": "Фаза 3",
    "roadmap.phase3Title": "Local-first AI",
    "roadmap.phase3Text": "Эксперименты с лёгкими моделями, offline-задачи, mixed-language benchmark и вклад сообщества.",
    "roadmap.phase4Label": "Фаза 4",
    "roadmap.phase4Title": "Расширение на Центральную Азию",
    "roadmap.phase4Text": "Поддержка узбекского и кыргызского, партнёрства с НПО, больше публичных датасетов, developer tools и документация.",
    "audience.kicker": "Кому помогает",
    "audience.title": "Для людей и команд, которых mainstream AI обычно игнорирует",

    "audience.tags.citizens": "Граждане",
    "audience.tags.elderly": "Пожилые пользователи",
    "audience.tags.lowDigital": "Люди с низкой цифровой грамотностью",
    "audience.tags.students": "Студенты",
    "audience.tags.migrants": "Мигранты",
    "audience.tags.families": "Семьи",
    "audience.tags.smallBusiness": "Малый бизнес",
    "audience.tags.ngos": "НПО",
    "audience.tags.civic": "Civic-tech команды",
    "audience.tags.developers": "Open-source разработчики",
    "audience.tags.researchers": "Исследователи языков Центральной Азии",

    "audience.tag1": "Граждане",
    "audience.tag2": "Пожилые пользователи",
    "audience.tag3": "Люди с низкой цифровой грамотностью",
    "audience.tag4": "Студенты",
    "audience.tag5": "Мигранты",
    "audience.tag6": "Семьи",
    "audience.tag7": "Малый бизнес",
    "audience.tag8": "НПО",
    "audience.tag9": "Civic-tech команды",
    "audience.tag10": "Open-source разработчики",
    "cta.kicker": "Contribute / test / support",
    "cta.title": "Помогите строить открытую AI-инфраструктуру для Центральной Азии.",
    "cta.text": "Мы готовим первый публичный репозиторий, лёгкое демо и начальный датасет для проверки мошенничества, упрощения документов и навигации по госуслугам.",
    "cta.github": "GitHub-репозиторий",
    "cta.contact": "Связаться с командой (скоро)",
    "footer.tagline": "Открытая AI-помощь для Центральной Азии",
    "demoScenarios": {
      "scam": {
        "label": "Проверка скама",
        "title": "Проверьте подозрительное сообщение до клика",
        "input": "Мне пришло SMS: «Ваш Kaspi аккаунт заблокирован. Подтвердите данные по ссылке». Это правда?",
        "messages": [
          {
            "role": "user",
            "text": "Мне пришло SMS: «Ваш Kaspi аккаунт заблокирован. Подтвердите данные по ссылке». Это правда?"
          },
          {
            "role": "ai",
            "text": "Это выглядит подозрительно. Не открывайте ссылку и не вводите данные карты. Настоящие банки обычно не просят подтверждать чувствительные данные через случайные ссылки."
          },
          {
            "role": "ai",
            "text": "Уровень риска: высокий. Рекомендация: не переходить по ссылке, заблокировать отправителя и связываться с банком только через официальные каналы."
          }
        ]
      },
      "document": {
        "label": "Объяснение документа",
        "title": "Превратите официальный текст в понятные шаги.",
        "input": "Объясни простыми словами: что значит этот официальный текст про смену фамилии и документы?",
        "messages": [
          {
            "role": "user",
            "text": "Объясни простыми словами: что значит этот официальный текст про смену фамилии и документы?"
          },
          {
            "role": "ai",
            "text": "Простая версия: после смены фамилии вам может понадобиться обновить личные документы в установленный срок."
          },
          {
            "role": "ai",
            "text": "Следующие шаги: проверьте, какие данные обновились автоматически, сохраните официальные подтверждения и обновите места, где всё ещё указана старая фамилия."
          }
        ]
      },
      "service": {
        "label": "Гид по госуслугам",
        "title": "Разберитесь в госуслугах без юридического языка.",
        "input": "Я хочу открыть ИП в Казахстане. Что делать?",
        "messages": [
          {
            "role": "user",
            "text": "Я хочу открыть ИП в Казахстане. Что делать?"
          },
          {
            "role": "ai",
            "text": "Простая версия: выберите вид деятельности, зарегистрируйтесь как ИП через официальный онлайн-сервис, выберите налоговый режим и сохраните уведомление о регистрации."
          },
          {
            "role": "ai",
            "text": "Я также могу превратить это в чеклист и помочь подготовить вопросы для налогового консультанта или специалиста госуслуг."
          }
        ]
      }
    }
  },
  "kk": {
    "meta.title": "Järdem AI - Орталық Азияға арналған ашық AI көмек",
    "meta.description": "Järdem AI - құжаттарды түсінуге, алаяқтықты тануға және мемлекеттік қызметтерде бағыт табуға көмектесетін open-source AI көмекші.",
    "aria.home": "Järdem AI басты беті",
    "aria.languageSwitcher": "Тіл ауыстырғыш",
    "aria.projectPrinciples": "Жоба қағидалары",
    "aria.demoScenarios": "Демо сценарийлер",
    "aria.demoPrompt": "Демо сұрау",
    "aria.motionSystem": "Орталық Азия анимация жүйесі",
    "aria.audienceList": "Аудитория тізімі",
    "aria.constellationMap": "Орталық Азияның анимациялық карта-шоқжұлдызы",
    "nav.demo": "Demo",
    "nav.open": "Ашықтық",
    "nav.roadmap": "Жоспар",
    "nav.contact": "Байланыс",
    "nav.tryDemo": "Көру",
    "hero.eyebrow": "Үшін ерте ашық прототип",
    "hero.title": "Орталық Азияға арналған ашық AI көмек",
    "hero.subtitle": "Järdem AI - құпиялылыққа мән беретін open-source көмекші. Ол адамдарға құжаттарды түсінуге, алаяқтықтан сақтануға және мемлекеттік, құқықтық, қаржылық әрі күнделікті маңызды жағдайларда қазақ, орыс және аралас тілде бағыт табуға көмектеседі.",
    "hero.primaryCta": "Интерактивті демоны көру",
    "hero.secondaryCta": "GitHub ашу",
    "hero.trust1": "Open-source",
    "hero.trust2": "Local-first",
    "hero.trust3": "Privacy-first",
    "hero.trust4": "Low-resource languages",
    "hero.previewLabel": "Järdem AI көмекшісі",
    "hero.previewUser": "Маған SMS келді: «Kaspi аккаунтыңыз бұғатталды, деректерді сілтеме арқылы растаңыз». Бұл рас па?",
    "hero.previewAi": "Бұл жоғары тәуекелді алаяқтыққа ұқсайды. Сілтемені ашпаңыз және карта деректерін енгізбеңіз. Ресми қосымшаны өзіңіз ашып тексеріңіз.",
    "hero.riskLabel": "Тәуекел деңгейі",
    "hero.riskValue": "Жоғары",
    "problem.kicker": "Мәселе",
    "problem.title": "AI өте қуатты. Бірақ оның көбі біздің өңірдің нақты өміріне бейімделмеген",
    "problem.card1Title": "Тілдік алшақтық",
    "problem.card1Text": "Адамдар қазақша, орысша, сленг, скриншот, дауыстық хабарлама және қысқа ретсіз сұрақтарды араластырады. Көп AI өнімдері мінсіз ағылшын промпттарын күтеді.",
    "problem.card2Title": "Күрделі қоғамдық ақпарат",
    "problem.card2Text": "Мемлекеттік қызметтер мен құқықтық рәсімдер бар, бірақ ақпарат жиі шашыраңқы, ресми тілде және қарапайым адамға түсініксіз жазылған.",
    "problem.card3Title": "Құпиялылық және сенім",
    "problem.card3Text": "Пайдаланушыларға құжат, қаржы, алаяқтық, денсаулық немесе құқықтық жағдай бойынша көмек керек болуы мүмкін - мұндай деректер жабық black-box жүйеге тәуелді болмауы тиіс.",
    "demo.kicker": "Интерактивті прототип",
    "demo.title": "Järdem AI-дың үш ерте сценарийін көріңіз",
    "demo.subtitle": "Бұл демо өнімнің алғашқы бағытын көрсетеді: алаяқтықты тексеру, құжаттарды жеңіл түсіндіру және Қазақстандағы пайдаланушылар үшін мемлекеттік қызметтерде бағыт беру.",
    "demo.tabScam": "Алаяқтықты тексеру",
    "demo.tabDocument": "Құжатты түсіндіру",
    "demo.tabService": "Мемқызмет гиді",
    "demo.status": "Прототип",
    "demo.runButton": "Іске қосу",
    "demo.note": "Қазіргі прототипте демо жауаптары алдын ала жазылған. Толық көмекші ашық модельдерге, сенімді дереккөздерден іздеуге және safety-тексерулерге қосылады.",

    "motion.kicker": "Қозғалыс тілі",
    "motion.title": "Орталық Азия маршруттары, символдары және түнгі ландшафттарынан шабыт алған тірі интерфейс",
    "motion.subtitle": "Жұмсақ анимациялар жүктеу, ауысу, карточкалар және бос күйлерді тыныш әрі есте қаларлық тәжірибеге айналдырады.",
    "motion.card1.title": "Жібек жолы жүктелуі",
    "motion.card1.text": "Жарқыраған маршруттар қозғалысты, бағыттауды және сенімді дереккөз іздеуді біртіндеп ашады.",
    "motion.card2.title": "Тұмар сигналының пульсі",
    "motion.card2.text": "Тексеру, safety күйлері және ескертулерге арналған халықтық эстетикадан шабыт алған қорғаныш символы.",
    "motion.card3.title": "Даланың түнгі ағымы",
    "motion.card3.text": "Декоративті аймақтар, модал терезелер және бос күйлер үшін жұмсақ атмосфералық қозғалыс.",
    "features.kicker": "Өнім",
    "features.title": "Күнделікті маңызды әрі практикалық сұрақтарға арналған",
    "features.card1Title": "Қарапайым түсіндіру",
    "features.card1Text": "Ресми нұсқаулықтар, құжаттар және рәсімдерді адам орындай алатын түсінікті қадамдарға айналдырады.",
    "features.card2Title": "Скам-паттерндерді тану",
    "features.card2Text": "Күдікті хабарламалар, жалған сілтемелер, әлеуметтік инженерия және жиі кездесетін алаяқтық схемаларын түсінуге көмектеседі.",
    "features.card3Title": "Аралас тілді түсіну",
    "features.card3Text": "Мінсіз ресми тілді талап етпей, қазақша, орысша және аралас жергілікті сөйлеуді қолдайды.",
    "features.card4Title": "Local-first архитектура",
    "features.card4Text": "Сезімтал жағдайлар мен интернеті тұрақсыз орта үшін жеңіл offline-capable AI бағытына дамиды.",
    "open.kicker": "Неге open?",
    "open.title": "Бұл жабылса, өңір инфрақұрылымнан айырылады",
    "open.text": "Järdem AI - тек қосымша емес. Ол Орталық Азия әзірлеушілері, ҮЕҰ, білім беру жобалары, civic-tech командалары және public-interest AI үшін қайта қолданылатын ашық инфрақұрылым болуға бағытталған.",
    "open.item1Title": "Ашық код",
    "open.item1Text": "Көмекші интерфейсі, retrieval pipeline, safety логикасы және deployment құралдары.",
    "open.item2Title": "Ашық датасеттер",
    "open.item2Text": "Заң бойынша мүмкін болған жерде мемлекеттік қызмет сұрақтары, алаяқтық мысалдары және құжатты жеңілдету тапсырмалары.",
    "open.item3Title": "Ашық бағалау",
    "open.item3Text": "Қазақ-орыс аралас тілін түсіну және практикалық жергілікті кейстерге арналған бенчмарктер.",
    "roadmap.kicker": "Roadmap",
    "roadmap.title": "Демодан ашық локал AI стекке дейін",
    "roadmap.phase1Label": "1-фаза",
    "roadmap.phase1Title": "Публичті демо",
    "roadmap.phase1Text": "Лендинг, интерактивті сценарийлер, GitHub репозиторийі, ерте prompt логикасы және Қазақстанға арналған use cases.",
    "roadmap.phase2Label": "2-фаза",
    "roadmap.phase2Title": "Ашық прототип",
    "roadmap.phase2Text": "Веб-көмекші, скам тексеру модулі, құжат түсіндіру, мемқызмет навигациясы және шағын evaluation dataset.",
    "roadmap.phase3Label": "3-фаза",
    "roadmap.phase3Title": "Local-first AI",
    "roadmap.phase3Text": "Жеңіл модельдермен эксперименттер, offline тапсырмалар, mixed-language benchmark және қауымдастық үлесі.",
    "roadmap.phase4Label": "4-фаза",
    "roadmap.phase4Title": "Орталық Азияға кеңею",
    "roadmap.phase4Text": "Өзбек және қырғыз тілдерін қолдау, ҮЕҰ серіктестігі, көбірек ашық датасет, developer tools және құжаттама.",
    "audience.kicker": "Кімге көмектеседі",
    "audience.title": "Mainstream AI жиі елемейтін адамдар мен командаларға арналған",

    "audience.tags.citizens": "Азаматтар",
    "audience.tags.elderly": "Егде пайдаланушылар",
    "audience.tags.lowDigital": "Цифрлық сауаты төмен адамдар",
    "audience.tags.students": "Студенттер",
    "audience.tags.migrants": "Мигранттар",
    "audience.tags.families": "Отбасылар",
    "audience.tags.smallBusiness": "Шағын бизнес",
    "audience.tags.ngos": "ҮЕҰ",
    "audience.tags.civic": "Civic-tech командалар",
    "audience.tags.developers": "Open-source әзірлеушілер",
    "audience.tags.researchers": "Орталық Азия тілдерін зерттеушілер",

    "audience.tag1": "Азаматтар",
    "audience.tag2": "Егде пайдаланушылар",
    "audience.tag3": "Цифрлық сауаты төмен адамдар",
    "audience.tag4": "Студенттер",
    "audience.tag5": "Мигранттар",
    "audience.tag6": "Отбасылар",
    "audience.tag7": "Шағын бизнес",
    "audience.tag8": "ҮЕҰ",
    "audience.tag9": "Civic-tech командалар",
    "audience.tag10": "Open-source әзірлеушілер",
    "cta.kicker": "Contribute / test / support",
    "cta.title": "Орталық Азия үшін ашық AI инфрақұрылымын құруға көмектесіңіз.",
    "cta.text": "Біз алғашқы публичті репозиторийді, жеңіл демоны және алаяқтықты тексеру, құжатты жеңіл түсіндіру, мемқызмет навигациясы үшін бастапқы датасетті дайындап жатырмыз.",
    "cta.github": "GitHub репозиторийі",
    "cta.contact": "Командамен байланысу (тез арада)",
    "footer.tagline": "Орталық Азияға арналған ашық AI көмек",
    "demoScenarios": {
      "scam": {
        "label": "Алаяқтықты тексеру",
        "title": "Күдікті хабарламаны баспай тұрып тексеріңіз",
        "input": "Маған SMS келді: «Kaspi аккаунтыңыз бұғатталды. Деректерді сілтеме арқылы растаңыз». Бұл рас па?",
        "messages": [
          {
            "role": "user",
            "text": "Маған SMS келді: «Kaspi аккаунтыңыз бұғатталды. Деректерді сілтеме арқылы растаңыз». Бұл рас па?"
          },
          {
            "role": "ai",
            "text": "Бұл күдікті көрінеді. Сілтемені ашпаңыз және карта деректерін енгізбеңіз. Нағыз банктер әдетте кездейсоқ сілтемелер арқылы құпия деректерді растауды сұрамайды."
          },
          {
            "role": "ai",
            "text": "Тәуекел деңгейі: жоғары. Ұсыныс: сілтемеге өтпеңіз, жіберушіні бұғаттаңыз және банкпен тек ресми арналар арқылы байланысыңыз."
          }
        ]
      },
      "document": {
        "label": "Құжатты түсіндіру",
        "title": "Ресми мәтінді түсінікті қадамдарға айналдырыңыз.",
        "input": "Тегімді ауыстыру және құжаттар туралы ресми мәтінді қарапайым тілмен түсіндірші.",
        "messages": [
          {
            "role": "user",
            "text": "Тегімді ауыстыру және құжаттар туралы ресми мәтінді қарапайым тілмен түсіндірші."
          },
          {
            "role": "ai",
            "text": "Қарапайым нұсқа: тегіңіз өзгергеннен кейін жеке құжаттарды белгіленген мерзімде жаңарту қажет болуы мүмкін."
          },
          {
            "role": "ai",
            "text": "Келесі қадамдар: қандай деректер автоматты жаңарғанын тексеріңіз, ресми растауларды сақтаңыз және ескі тегіңіз қалған жерлерді жаңартыңыз."
          }
        ]
      },
      "service": {
        "label": "Мемқызмет гиді",
        "title": "Мемлекеттік қызметтерді заң тілінсіз түсініңіз.",
        "input": "Қазақстанда ИП ашқым келеді. Не істеу керек?",
        "messages": [
          {
            "role": "user",
            "text": "Қазақстанда ИП ашқым келеді. Не істеу керек?"
          },
          {
            "role": "ai",
            "text": "Қызмет түрін таңдаңыз, ресми онлайн-сервис арқылы жеке кәсіпкер ретінде тіркеліңіз, салық режимін таңдаңыз және тіркеу хабарламасын сақтаңыз."
          },
          {
            "role": "ai",
            "text": "Мұны чеклистке айналдырып, салық кеңесшісіне немесе мемқызмет маманына қоятын сұрақтарды дайындауға көмектесе аламын."
          }
        ]
      }
    }
  }
};

function t(key, lang = getCurrentLanguage()) {
  return translations[lang]?.[key] ?? translations[DEFAULT_LANGUAGE]?.[key] ?? key;
}

function getLanguageFromUrl() {
  const p = new URLSearchParams(window.location.search).get('lang');
  return SUPPORTED_LANGUAGES.includes(p) ? p : null;
}

function getBrowserLanguage() {
  const l = (navigator.language || '').slice(0, 2).toLowerCase();
  return SUPPORTED_LANGUAGES.includes(l) ? l : null;
}

function getCurrentLanguage() {
  const url = getLanguageFromUrl();
  const stored = window.localStorage.getItem(I18N_STORAGE_KEY);
  return url || (SUPPORTED_LANGUAGES.includes(stored) ? stored : null) || getBrowserLanguage() || DEFAULT_LANGUAGE;
}

function updateUrlLanguage(lang) {
  try {
    if (window.location.protocol === 'file:') return;
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url);
  } catch (e) {}
}

function applyTranslations(lang) {
  document.documentElement.lang = lang;
  document.title = t('meta.title', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.getAttribute('data-i18n'), lang);
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    el.getAttribute('data-i18n-attr').split(',').forEach((pair) => {
      const [attr, key] = pair.split(':').map((x) => x.trim());
      if (attr && key) el.setAttribute(attr, t(key, lang));
    });
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
}

function setLanguage(lang) {
  if (!SUPPORTED_LANGUAGES.includes(lang)) return;
  window.localStorage.setItem(I18N_STORAGE_KEY, lang);
  updateUrlLanguage(lang);
  applyTranslations(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = getCurrentLanguage();
  window.localStorage.setItem(I18N_STORAGE_KEY, lang);
  updateUrlLanguage(lang);
  applyTranslations(lang);
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
});


// Safety supplement for audience marquee translations.
(function supplementAudienceTranslations() {
  const extra = {
    en: {
      "audience.tags.citizens": "Citizens",
      "audience.tags.elderly": "Elderly users",
      "audience.tags.lowDigital": "Low-digital-literacy users",
      "audience.tags.students": "Students",
      "audience.tags.migrants": "Migrants",
      "audience.tags.families": "Families",
      "audience.tags.smallBusiness": "Small business owners",
      "audience.tags.ngos": "NGOs",
      "audience.tags.civic": "Civic-tech builders",
      "audience.tags.developers": "Open-source developers",
      "audience.tags.researchers": "Central Asian language researchers"
    },
    ru: {
      "audience.tags.citizens": "Граждане",
      "audience.tags.elderly": "Пожилые пользователи",
      "audience.tags.lowDigital": "Люди с низкой цифровой грамотностью",
      "audience.tags.students": "Студенты",
      "audience.tags.migrants": "Мигранты",
      "audience.tags.families": "Семьи",
      "audience.tags.smallBusiness": "Малый бизнес",
      "audience.tags.ngos": "НПО",
      "audience.tags.civic": "Civic-tech команды",
      "audience.tags.developers": "Open-source разработчики",
      "audience.tags.researchers": "Исследователи языков Центральной Азии"
    },
    kk: {
      "audience.tags.citizens": "Азаматтар",
      "audience.tags.elderly": "Егде пайдаланушылар",
      "audience.tags.lowDigital": "Цифрлық сауаты төмен адамдар",
      "audience.tags.students": "Студенттер",
      "audience.tags.migrants": "Мигранттар",
      "audience.tags.families": "Отбасылар",
      "audience.tags.smallBusiness": "Шағын бизнес",
      "audience.tags.ngos": "ҮЕҰ",
      "audience.tags.civic": "Civic-tech командалар",
      "audience.tags.developers": "Open-source әзірлеушілер",
      "audience.tags.researchers": "Орталық Азия тілдерін зерттеушілер"
    }
  };

  if (typeof translations !== "undefined") {
    Object.keys(extra).forEach((lang) => {
      translations[lang] = translations[lang] || {};
      Object.assign(translations[lang], extra[lang]);
    });
  }
})();


// Safety supplement for the wide constellation map translations.
(function supplementMapTranslations() {
  const extra = {
    en: {
      "map.kicker": "Regional signal map",
      "map.chip1.label": "Open route",
      "map.chip1.value": "public knowledge",
      "map.chip2.label": "Local signal",
      "map.chip2.value": "mixed language",
      "aria.constellationMap": "Animated Central Asia constellation map"
    },
    ru: {
      "map.kicker": "Карта региональных сигналов",
      "map.chip1.label": "Открытый маршрут",
      "map.chip1.value": "публичные знания",
      "map.chip2.label": "Локальный сигнал",
      "map.chip2.value": "смешанный язык",
      "aria.constellationMap": "Анимированная карта-созвездие Центральной Азии"
    },
    kk: {
      "map.kicker": "Аймақтық сигнал картасы",
      "map.chip1.label": "Ашық маршрут",
      "map.chip1.value": "ашық білім",
      "map.chip2.label": "Локал сигнал",
      "map.chip2.value": "аралас тіл",
      "aria.constellationMap": "Орталық Азияның анимациялық карта-шоқжұлдызы"
    }
  };

  if (typeof translations !== "undefined") {
    Object.keys(extra).forEach((lang) => {
      translations[lang] = translations[lang] || {};
      Object.assign(translations[lang], extra[lang]);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (typeof applyTranslations === "function" && typeof getCurrentLanguage === "function") {
      applyTranslations(getCurrentLanguage());
    }
  });
})();
