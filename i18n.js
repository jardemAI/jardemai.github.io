const DEFAULT_LANGUAGE = "en";
const LANGUAGE_STORAGE_KEY = "jardem_ai_language";

const translations = {
  "ru": {
    "meta.title": "Järdem AI - простая AI-помощь для семей в Центральной Азии",
    "meta.description": "Järdem AI помогает защитить близких от мошенников, переводит сложные документы на человеческий язык и объясняет госуслуги простыми словами",
    "nav.demo": "Попробовать",
    "nav.open": "Почему нам доверяют",
    "nav.roadmap": "Что мы делаем",
    "nav.contact": "Контакты",
    "nav.tryDemo": "Попробовать",
    "hero.eyebrow": "Простой помощник для родителей, бабушек, дедушек и всех, кому нужна поддержка",
    "hero.title": "Боитесь, что ваши близкие переведут деньги мошенникам?",
    "hero.subtitle": "Järdem AI - это карманный помощник. Он за секунды проверит подозрительное сообщение, объяснит сложный документ или подскажет первые шаги в госуслугах. Простыми словами, без канцелярита и сложных терминов",
    "hero.primaryCta": "Проверить сообщение",
    "hero.secondaryCta": "Открыть GitHub",
    "hero.trust.open": "Проверка мошенников",
    "hero.trust.local": "Простые объяснения",
    "hero.trust.privacy": "Полная приватность",
    "hero.preview.label": "Помощник Järdem AI",
    "hero.preview.user": "Маме пришло SMS: «Ваш Kaspi аккаунт заблокирован. Подтвердите данные по ссылке». Это безопасно?",
    "hero.preview.ai": "Это очень похоже на обман. Ни в коем случае не открывайте ссылку, не отправляйте коды и не вводите данные карты. Откройте приложение банка сами или позвоните по телефону с их официального сайта",
    "hero.preview.riskLabel": "Опасность",
    "hero.preview.riskValue": "Высокая",
    "map.kicker": "Как это работает",
    "map.chip1.label": "Шаг первый",
    "map.chip1.value": "проверить до того, как нажать",
    "map.chip2.label": "Шаг второй",
    "map.chip2.value": "понять, что делать дальше",
    "problem.kicker": "В чём проблема",
    "problem.title": "Официальные бумаги и мошенники часто говорят на языке, который трудно понять обычному человеку",
    "problem.card1.title": "«Мама, не нажимай на эту ссылку!»",
    "problem.card1.text": "Уловки мошенников становятся всё хитрее. Они пишут от лица банков, налоговой, почты или пугают бедой с родственниками. Один случайный клик может стоить семье всех сбережений",
    "problem.card2.title": "Бюрократия слишком сложная",
    "problem.card2.text": "Инструкции к госуслугам и законы написаны сухим юридическим языком. Людям нужен простой человеческий ответ: что это значит, куда идти и какие документы нести",
    "problem.card3.title": "Близкие не всегда рядом в нужный момент",
    "problem.card3.text": "Пожилые люди часто остаются один на один с подозрительными звонками. Järdem AI даст им первый спокойный совет и убережёт от паники до того, как они совершат ошибку",
    "demo.kicker": "Попробовать демо",
    "demo.title": "Три вещи, с которыми Järdem поможет уже сейчас",
    "demo.subtitle": "Пока это интерактивный прототип с готовыми сценариями, но он наглядно показывает, как помощник решает реальные проблемы в жизни семей",
    "demo.tabs.scam": "Распознать обман",
    "demo.tabs.document": "Объяснить документ",
    "demo.tabs.service": "Разобраться в услуге",
    "demo.status": "Прототип",
    "demo.runButton": "Показать ответ",
    "demo.note": "Мы создаем это демо, чтобы показать: искусственный интеллект может быть безопасным, понятным и по-настоящему полезным для обычных людей",
    "features.kicker": "Возможности",
    "features.title": "Как терпеливый родственник, который всегда на связи и готов помочь",
    "features.card1.title": "Распознает уловки мошенников",
    "features.card1.text": "Просто скопируйте подозрительное сообщение или ссылку из WhatsApp/SMS. Помощник объяснит, в чём опасность и как себя обезопасить",
    "features.card2.title": "Переводит документы на понятный язык",
    "features.card2.text": "Пришлите текст официального уведомления или справки. Помощник перепишет его человеческим языком и составит простой список дел",
    "features.card3.title": "Помогает с госуслугами",
    "features.card3.text": "Открыть ИП, переоформить документы, разобраться со штрафом или пособием - Järdem объяснит первые шаги без заумных терминов",
    "features.card4.title": "Защищает ваши данные",
    "features.card4.text": "Мы стремимся сделать помощника полностью автономным local-first. Это значит, что ваши личные документы не будут уходить в закрытые облачные базы",
    "motion.kicker": "Интерфейс",
    "motion.title": "Спокойный дизайн без суеты",
    "motion.subtitle": "Мы избегаем резких анимаций и перегруженных чат-ботов. Пожилые пользователи должны чувствовать себя уверенно и комфортно",
    "motion.card1.title": "Загрузка без паники",
    "motion.card1.text": "Мягкие плавные линии показывают, что система спокойно проверяет данные и готовит надежный ответ",
    "motion.card2.title": "Сигнал безопасности",
    "motion.card2.text": "Деликатная пульсация обращает внимание на важные предупреждения, но не пугает пользователя",
    "motion.card3.title": "Уютная атмосфера",
    "motion.card3.text": "Интерфейс вдохновлен мягкими вечерними красками степи. Он помогает сфокусироваться на главном - на тексте-подсказке",
    "open.kicker": "Почему открытый код?",
    "open.title": "Помощник, работу которого может проверить каждый",
    "open.text": "Järdem создается полностью открытым. Разработчики, волонтеры и общественные организации могут заглянуть внутрь, улучшить качество перевода и адаптировать проект под нужды своих сообществ",
    "open.item1.title": "Открытый исходный код",
    "open.item1.text": "Интерфейс, правила безопасности и логика поиска по госисточникам всегда доступны для проверки и доработки",
    "open.item2.title": "База реальных примеров",
    "open.item2.text": "Мы собираем настоящие случаи мошенничества, реальные вопросы по госуслугам и непонятные документы, чтобы учить систему на живых примерах",
    "open.item3.title": "Честные рамки помощи",
    "open.item3.text": "Помощник никогда не заменит профессионального юриста или врача. Его задача - предупредить о рисках и подсказать безопасные первые шаги",
    "roadmap.kicker": "Планы",
    "roadmap.title": "Что мы создаем шаг за шагом",
    "roadmap.phase1.label": "Шаг 1",
    "roadmap.phase1.title": "Запуск демо",
    "roadmap.phase1.text": "Интерактивная страница, где можно вживую увидеть, как AI решает три главные задачи семей",
    "roadmap.phase2.label": "Шаг 2",
    "roadmap.phase2.title": "Полноценный прототип",
    "roadmap.phase2.text": "Рабочий веб-помощник, умеющий анализировать загруженные документы и тексты на лету",
    "roadmap.phase3.label": "Шаг 3",
    "roadmap.phase3.title": "Автономный AI",
    "roadmap.phase3.text": "Переход на лёгкие модели, которые могут работать без интернета прямо на вашем устройстве",
    "roadmap.phase4.label": "Шаг 4",
    "roadmap.phase4.title": "Новые языки региона",
    "roadmap.phase4.text": "Добавление полноценной поддержки узбекского и кыргызского языков, новые партнёрства с волонтерами",
    "audience.kicker": "Кому это нужно",
    "audience.title": "Для всех, кто хоть раз говорил близким: «Пришли сначала мне, ничего не нажимай!»",
    "audience.tags.citizens": "Родители",
    "audience.tags.elderly": "Бабушки и дедушки",
    "audience.tags.lowDigital": "Люди, которым трудно дается интернет",
    "audience.tags.students": "Дети, помогающие старшим",
    "audience.tags.migrants": "Мигранты",
    "audience.tags.families": "Семьи",
    "audience.tags.smallBusiness": "Малый бизнес",
    "audience.tags.ngos": "Общественные организации",
    "audience.tags.civic": "Социальные проекты",
    "audience.tags.developers": "Open-source разработчики",
    "audience.tags.researchers": "Исследователи языков",
    "cta.kicker": "Давайте строить вместе",
    "cta.title": "Создадим технологию, которая защищает наши семьи",
    "cta.text": "Мы готовим к выпуску первые открытые инструменты для проверки мошенников, разбора документов и подсказок по госуслугам",
    "cta.github": "Посмотреть на GitHub",
    "cta.contact": "Написать команде",
    "footer.tagline": "Простая AI-помощь для семей в Центральной Азии",
    "aria.demoPrompt": "Демо-запрос",
    "aria.motionSystem": "Система анимации Центральной Азии",
    "aria.audienceList": "Список аудиторий",
    "aria.constellationMap": "Анимированная карта-созвездие Центральной Азии",
    "demoScenarios": {
      "scam": {
        "label": "Распознать обман",
        "title": "Помогите близкому до того, как он нажмет ссылку",
        "input": "Маме пришло SMS: «Ваш Kaspi аккаунт заблокирован. Подтвердите данные по ссылке». Это безопасно?",
        "messages": [
          {
            "role": "user",
            "text": "Маме пришло SMS: «Ваш Kaspi аккаунт заблокирован. Подтвердите данные по ссылке». Это безопасно?"
          },
          {
            "role": "ai",
            "text": "Это очень похоже на обман. Не открывайте ссылку, не вводите данные карты и не отправляйте SMS-коды"
          },
          {
            "role": "ai",
            "text": "Безопасный шаг: откройте приложение банка сами или позвоните по номеру с официального сайта. Не используйте номер из подозрительного сообщения"
          }
        ]
      },
      "document": {
        "label": "Объяснить документ",
        "title": "Перевести официальный текст на человеческий язык",
        "input": "В документе написано, что нужно обновить персональные данные. Что это значит?",
        "messages": [
          {
            "role": "user",
            "text": "В документе написано, что нужно обновить персональные данные. Что это значит?"
          },
          {
            "role": "ai",
            "text": "Простыми словами: возможно, нужно обновить ФИО, удостоверение, банковские, налоговые или регистрационные данные. Главное - понять срок и список документов"
          },
          {
            "role": "ai",
            "text": "Следующий шаг: составить чеклист, сохранить официальное уведомление и уточнить срок через официальный сервис или учреждение"
          }
        ]
      },
      "service": {
        "label": "Разобраться в услуге",
        "title": "Получить простой первый шаг",
        "input": "Я хочу открыть ИП в Казахстане. С чего начать?",
        "messages": [
          {
            "role": "user",
            "text": "Я хочу открыть ИП в Казахстане. С чего начать?"
          },
          {
            "role": "ai",
            "text": "Начните с трех вещей: выберите вид деятельности, зарегистрируйтесь через официальный онлайн-сервис и выберите налоговый режим"
          },
          {
            "role": "ai",
            "text": "Я могу превратить это в простой чеклист, чтобы вы знали, что подготовить и какие вопросы задать специалисту"
          }
        ]
      }
    },
    "aria.home": "Главная",
    "aria.languageSwitcher": "Переключатель языка",
    "aria.projectPrinciples": "Принципы проекта",
    "aria.demoScenarios": "Демо-сценарии",
    "hero.previewLabel": "Помощник Järdem AI",
    "hero.previewUser": "Маме пришло SMS: «Ваш Kaspi аккаунт заблокирован. Подтвердите данные по ссылке». Это безопасно?",
    "hero.previewAi": "Это очень похоже на обман. Ни в коем случае не открывайте ссылку, не отправляйте коды и не вводите данные карты. Откройте приложение банка сами или позвоните по телефону с их официального сайта",
    "hero.riskLabel": "Опасность",
    "hero.riskValue": "Высокая",
    "hero.trust1": "Проверка мошенников",
    "hero.trust2": "Простые объяснения",
    "hero.trust3": "Полная приватность",
    "hero.trust4": "Қазақша / Русский / English",
    "problem.card1Title": "«Мама, не нажимай на эту ссылку!»",
    "problem.card1Text": "Уловки мошенников становятся всё хитрее. Они пишут от лица банков, налоговой, почты или пугают бедой с родственниками. Один случайный клик может стоить семье всех сбережений",
    "problem.card2Title": "Бюрократия слишком сложная",
    "problem.card2Text": "Инструкции к госуслугам и законы написаны сухим юридическим языком. Людям нужен простой человеческий ответ: что это значит, куда идти и какие документы нести",
    "problem.card3Title": "Близкие не всегда рядом в нужный момент",
    "problem.card3Text": "Пожилые люди часто остаются один на один с подозрительными звонками. Järdem AI даст им первый спокойный совет и убережёт от паники до того, как они совершат ошибку",
    "demo.tabScam": "Распознать обман",
    "demo.tabDocument": "Объяснить документ",
    "demo.tabService": "Разобраться в услуге",
    "features.card1Title": "Распознает уловки мошенников",
    "features.card1Text": "Просто скопируйте подозрительное сообщение или ссылку из WhatsApp/SMS. Помощник объяснит, в чём опасность и как себя обезопасить",
    "features.card2Title": "Переводит документы на понятный язык",
    "features.card2Text": "Пришлите текст официального уведомления или справки. Помощник перепишет его человеческим языком и составит простой список дел",
    "features.card3Title": "Помогает с госуслугами",
    "features.card3Text": "Открыть ИП, переоформить документы, разобраться со штрафом или пособием - Järdem объяснит первые шаги без заумных терминов",
    "features.card4Title": "Защищает ваши данные",
    "features.card4Text": "Мы стремимся сделать помощника полностью автономным local-first. Это значит, что ваши личные документы не будут уходить в закрытые облачные базы",
    "open.item1Title": "Открытый исходный код",
    "open.item1Text": "Интерфейс, правила безопасности и логика поиска по госисточникам всегда доступны для проверки и доработки",
    "open.item2Title": "База реальных примеров",
    "open.item2Text": "Мы собираем настоящие случаи мошенничества, реальные вопросы по госуслугам и непонятные документы, чтобы учить систему на живых примерах",
    "open.item3Title": "Честные рамки помощи",
    "open.item3Text": "Помощник никогда не заменит профессионального юриста или врача. Его задача - предупредить о рисках и подсказать безопасные первые шаги",
    "roadmap.phase1Label": "Шаг 1",
    "roadmap.phase1Title": "Запуск демо",
    "roadmap.phase1Text": "Интерактивная страница, где можно вживую увидеть, как AI решает три главные задачи семей",
    "roadmap.phase2Label": "Шаг 2",
    "roadmap.phase2Title": "Полноценный прототип",
    "roadmap.phase2Text": "Рабочий веб-помощник, умеющий анализировать загруженные документы и тексты на лету",
    "roadmap.phase3Label": "Шаг 3",
    "roadmap.phase3Title": "Автономный AI",
    "roadmap.phase3Text": "Переход на лёгкие модели, которые могут работать без интернета прямо на вашем устройстве",
    "roadmap.phase4Label": "Шаг 4",
    "roadmap.phase4Title": "Новые языки региона",
    "roadmap.phase4Text": "Добавление полноценной поддержки узбекского и кыргызского языков, новые партнёрства с волонтерами"
  },
  "en": {
    "meta.title": "Järdem AI - simple AI help for families in Central Asia",
    "meta.description": "Järdem AI helps protect loved ones from scammers, translates complicated documents into human language and explains public services in simple words",
    "nav.demo": "Try it",
    "nav.open": "Why people trust us",
    "nav.roadmap": "What we are building",
    "nav.contact": "Contact",
    "nav.tryDemo": "Try it",
    "hero.eyebrow": "A simple helper for parents, grandparents and anyone who needs support",
    "hero.title": "Worried your loved ones might send money to scammers?",
    "hero.subtitle": "Järdem AI is a pocket helper. In seconds, it checks a suspicious message, explains a complicated document or suggests the first steps for a public service. In simple words, without bureaucracy or confusing terms",
    "hero.primaryCta": "Check a message",
    "hero.secondaryCta": "Open GitHub",
    "hero.trust.open": "Scam check",
    "hero.trust.local": "Simple explanations",
    "hero.trust.privacy": "Full privacy",
    "hero.preview.label": "Järdem AI helper",
    "hero.preview.user": "My mom received an SMS: “Your Kaspi account is blocked. Confirm your data through the link”. Is it safe?",
    "hero.preview.ai": "This looks very much like a scam. Do not open the link, do not send codes and do not enter card details. Open the bank app yourself or call the phone number from the official website",
    "hero.preview.riskLabel": "Danger",
    "hero.preview.riskValue": "High",
    "map.kicker": "How it works",
    "map.chip1.label": "Step one",
    "map.chip1.value": "check before clicking",
    "map.chip2.label": "Step two",
    "map.chip2.value": "understand what to do next",
    "problem.kicker": "What is the problem",
    "problem.title": "Official papers and scammers often speak in a language that is hard for ordinary people to understand",
    "problem.card1.title": "“Mom, do not click that link!”",
    "problem.card1.text": "Scam tricks are getting smarter. They write as if they are banks, tax offices or postal services, or scare people with stories about relatives in trouble. One accidental click can cost a family all its savings",
    "problem.card2.title": "Bureaucracy is too complicated",
    "problem.card2.text": "Instructions for public services and laws are written in dry legal language. People need a simple human answer: what it means, where to go and which documents to bring",
    "problem.card3.title": "Loved ones are not always nearby at the right moment",
    "problem.card3.text": "Older people are often left alone with suspicious calls. Järdem AI gives them the first calm advice and helps prevent panic before they make a mistake",
    "demo.kicker": "Try the demo",
    "demo.title": "Three things Järdem can already help with",
    "demo.subtitle": "For now, this is an interactive prototype with prepared scenarios, but it clearly shows how the helper solves real problems in family life",
    "demo.tabs.scam": "Recognize a scam",
    "demo.tabs.document": "Explain a document",
    "demo.tabs.service": "Understand a service",
    "demo.status": "Prototype",
    "demo.runButton": "Show answer",
    "demo.note": "We are creating this demo to show that artificial intelligence can be safe, understandable and truly useful for ordinary people",
    "features.kicker": "Features",
    "features.title": "Like a patient relative who is always online and ready to help",
    "features.card1.title": "Recognizes scammers' tricks",
    "features.card1.text": "Just copy a suspicious message or link from WhatsApp/SMS. The helper explains what the danger is and how to protect yourself",
    "features.card2.title": "Translates documents into plain language",
    "features.card2.text": "Send the text of an official notice or certificate. The helper rewrites it in human language and creates a simple to-do list",
    "features.card3.title": "Helps with public services",
    "features.card3.text": "Opening an individual business, updating documents, understanding a fine or benefit - Järdem explains the first steps without complicated terms",
    "features.card4.title": "Protects your data",
    "features.card4.text": "We aim to make the helper fully autonomous and local-first. This means your personal documents will not be sent to closed cloud databases",
    "motion.kicker": "Interface",
    "motion.title": "Calm design without fuss",
    "motion.subtitle": "We avoid sharp animations and overloaded chatbots. Older users should feel confident and comfortable",
    "motion.card1.title": "Loading without panic",
    "motion.card1.text": "Soft flowing lines show that the system is calmly checking data and preparing a reliable answer",
    "motion.card2.title": "Safety signal",
    "motion.card2.text": "A gentle pulse draws attention to important warnings without frightening the user",
    "motion.card3.title": "Cozy atmosphere",
    "motion.card3.text": "The interface is inspired by soft evening colors of the steppe. It helps focus on the main thing - the helpful text",
    "open.kicker": "Why open source?",
    "open.title": "A helper whose work anyone can check",
    "open.text": "Järdem is built fully openly. Developers, volunteers and public organizations can look inside, improve translation quality and adapt the project to the needs of their communities",
    "open.item1.title": "Open source code",
    "open.item1.text": "The interface, safety rules and logic for searching public sources are always available for review and improvement",
    "open.item2.title": "A base of real examples",
    "open.item2.text": "We collect real scam cases, real public-service questions and confusing documents to teach the system with living examples",
    "open.item3.title": "Honest limits of help",
    "open.item3.text": "The helper will never replace a professional lawyer or doctor. Its task is to warn about risks and suggest safe first steps",
    "roadmap.kicker": "Plans",
    "roadmap.title": "What we are building step by step",
    "roadmap.phase1.label": "Step 1",
    "roadmap.phase1.title": "Demo launch",
    "roadmap.phase1.text": "An interactive page where you can see live how AI solves the three main family tasks",
    "roadmap.phase2.label": "Step 2",
    "roadmap.phase2.title": "Full prototype",
    "roadmap.phase2.text": "A working web helper that can analyze uploaded documents and texts on the fly",
    "roadmap.phase3.label": "Step 3",
    "roadmap.phase3.title": "Autonomous AI",
    "roadmap.phase3.text": "A move to lightweight models that can work without internet directly on your device",
    "roadmap.phase4.label": "Step 4",
    "roadmap.phase4.title": "New regional languages",
    "roadmap.phase4.text": "Adding full support for Uzbek and Kyrgyz languages, plus new partnerships with volunteers",
    "audience.kicker": "Who needs this",
    "audience.title": "For everyone who has ever told loved ones: “Send it to me first, do not click anything!”",
    "audience.tags.citizens": "Parents",
    "audience.tags.elderly": "Grandparents",
    "audience.tags.lowDigital": "People who find the internet difficult",
    "audience.tags.students": "Children helping elders",
    "audience.tags.migrants": "Migrants",
    "audience.tags.families": "Families",
    "audience.tags.smallBusiness": "Small business",
    "audience.tags.ngos": "Public organizations",
    "audience.tags.civic": "Social projects",
    "audience.tags.developers": "Open-source developers",
    "audience.tags.researchers": "Language researchers",
    "cta.kicker": "Let’s build together",
    "cta.title": "Let’s create technology that protects our families",
    "cta.text": "We are preparing the first open tools for checking scams, explaining documents and giving public-service guidance",
    "cta.github": "View on GitHub",
    "cta.contact": "Message the team",
    "footer.tagline": "Simple AI help for families in Central Asia",
    "aria.demoPrompt": "Demo prompt",
    "aria.motionSystem": "Central Asia animation system",
    "aria.audienceList": "Audience list",
    "aria.constellationMap": "Animated Central Asia constellation map",
    "demoScenarios": {
      "scam": {
        "label": "Recognize a scam",
        "title": "Help your loved one before they click",
        "input": "My mom received an SMS: “Your Kaspi account is blocked. Confirm your data through the link”. Is it safe?",
        "messages": [
          {
            "role": "user",
            "text": "My mom received an SMS: “Your Kaspi account is blocked. Confirm your data through the link”. Is it safe?"
          },
          {
            "role": "ai",
            "text": "This looks very much like a scam. Do not open the link, do not enter card details and do not send SMS codes"
          },
          {
            "role": "ai",
            "text": "Safe step: open the bank app yourself or call the number from the official website. Do not use the number from the suspicious message"
          }
        ]
      },
      "document": {
        "label": "Explain a document",
        "title": "Translate official text into human language",
        "input": "The document says I need to update my personal data. What does it mean?",
        "messages": [
          {
            "role": "user",
            "text": "The document says I need to update my personal data. What does it mean?"
          },
          {
            "role": "ai",
            "text": "In simple words: you may need to update your name, ID, bank, tax or registration details. The main thing is to understand the deadline and the list of documents"
          },
          {
            "role": "ai",
            "text": "Next step: make a checklist, save the official notice and confirm the deadline through an official service or office"
          }
        ]
      },
      "service": {
        "label": "Understand a service",
        "title": "Get a simple first step",
        "input": "I want to open an individual business in Kazakhstan. Where do I start?",
        "messages": [
          {
            "role": "user",
            "text": "I want to open an individual business in Kazakhstan. Where do I start?"
          },
          {
            "role": "ai",
            "text": "Start with three things: choose your activity, register through the official online service and choose a tax regime"
          },
          {
            "role": "ai",
            "text": "I can turn this into a simple checklist so you know what to prepare and what to ask a specialist"
          }
        ]
      }
    },
    "aria.home": "Home",
    "aria.languageSwitcher": "Language switcher",
    "aria.projectPrinciples": "Project principles",
    "aria.demoScenarios": "Demo scenarios",
    "hero.previewLabel": "Järdem AI helper",
    "hero.previewUser": "My mom received an SMS: “Your Kaspi account is blocked. Confirm your data through the link”. Is it safe?",
    "hero.previewAi": "This looks very much like a scam. Do not open the link, do not send codes and do not enter card details. Open the bank app yourself or call the phone number from the official website",
    "hero.riskLabel": "Danger",
    "hero.riskValue": "High",
    "hero.trust1": "Scam check",
    "hero.trust2": "Simple explanations",
    "hero.trust3": "Full privacy",
    "hero.trust4": "Қазақша / Русский / English",
    "problem.card1Title": "“Mom, do not click that link!”",
    "problem.card1Text": "Scam tricks are getting smarter. They write as if they are banks, tax offices or postal services, or scare people with stories about relatives in trouble. One accidental click can cost a family all its savings",
    "problem.card2Title": "Bureaucracy is too complicated",
    "problem.card2Text": "Instructions for public services and laws are written in dry legal language. People need a simple human answer: what it means, where to go and which documents to bring",
    "problem.card3Title": "Loved ones are not always nearby at the right moment",
    "problem.card3Text": "Older people are often left alone with suspicious calls. Järdem AI gives them the first calm advice and helps prevent panic before they make a mistake",
    "demo.tabScam": "Recognize a scam",
    "demo.tabDocument": "Explain a document",
    "demo.tabService": "Understand a service",
    "features.card1Title": "Recognizes scammers' tricks",
    "features.card1Text": "Just copy a suspicious message or link from WhatsApp/SMS. The helper explains what the danger is and how to protect yourself",
    "features.card2Title": "Translates documents into plain language",
    "features.card2Text": "Send the text of an official notice or certificate. The helper rewrites it in human language and creates a simple to-do list",
    "features.card3Title": "Helps with public services",
    "features.card3Text": "Opening an individual business, updating documents, understanding a fine or benefit - Järdem explains the first steps without complicated terms",
    "features.card4Title": "Protects your data",
    "features.card4Text": "We aim to make the helper fully autonomous and local-first. This means your personal documents will not be sent to closed cloud databases",
    "open.item1Title": "Open source code",
    "open.item1Text": "The interface, safety rules and logic for searching public sources are always available for review and improvement",
    "open.item2Title": "A base of real examples",
    "open.item2Text": "We collect real scam cases, real public-service questions and confusing documents to teach the system with living examples",
    "open.item3Title": "Honest limits of help",
    "open.item3Text": "The helper will never replace a professional lawyer or doctor. Its task is to warn about risks and suggest safe first steps",
    "roadmap.phase1Label": "Step 1",
    "roadmap.phase1Title": "Demo launch",
    "roadmap.phase1Text": "An interactive page where you can see live how AI solves the three main family tasks",
    "roadmap.phase2Label": "Step 2",
    "roadmap.phase2Title": "Full prototype",
    "roadmap.phase2Text": "A working web helper that can analyze uploaded documents and texts on the fly",
    "roadmap.phase3Label": "Step 3",
    "roadmap.phase3Title": "Autonomous AI",
    "roadmap.phase3Text": "A move to lightweight models that can work without internet directly on your device",
    "roadmap.phase4Label": "Step 4",
    "roadmap.phase4Title": "New regional languages",
    "roadmap.phase4Text": "Adding full support for Uzbek and Kyrgyz languages, plus new partnerships with volunteers"
  },
  "kk": {
    "meta.title": "Järdem AI - Орталық Азия отбасыларына арналған қарапайым AI көмек",
    "meta.description": "Järdem AI жақындарды алаяқтардан қорғауға, күрделі құжаттарды түсінікті тілге аударуға және мемлекеттік қызметтерді қарапайым сөзбен түсіндіруге көмектеседі",
    "nav.demo": "Көру",
    "nav.open": "Неге сенуге болады",
    "nav.roadmap": "Не жасап жатырмыз",
    "nav.contact": "Байланыс",
    "nav.tryDemo": "Көру",
    "hero.eyebrow": "Ата-аналарға, ата-әжелерге және қолдау қажет адамдарға арналған қарапайым көмекші",
    "hero.title": "Жақындарыңыз алаяқтарға ақша аударып қоя ма деп қорқасыз ба?",
    "hero.subtitle": "Järdem AI - қалтаңыздағы көмекші. Ол бірнеше секундта күдікті хабарламаны тексереді, күрделі құжатты түсіндіреді немесе мемлекеттік қызмет бойынша алғашқы қадамдарды айтады. Қарапайым сөзбен, кеңсе тілі мен қиын терминдерсіз",
    "hero.primaryCta": "Хабарламаны тексеру",
    "hero.secondaryCta": "GitHub ашу",
    "hero.trust.open": "Алаяқтықты тексеру",
    "hero.trust.local": "Қарапайым түсіндіру",
    "hero.trust.privacy": "Толық құпиялылық",
    "hero.preview.label": "Järdem AI көмекшісі",
    "hero.preview.user": "Анама SMS келді: «Kaspi аккаунтыңыз бұғатталды. Деректерді сілтеме арқылы растаңыз». Бұл қауіпсіз бе?",
    "hero.preview.ai": "Бұл алдауға өте ұқсайды. Ешқашан сілтемені ашпаңыз, код жібермеңіз және карта деректерін енгізбеңіз. Банк қосымшасын өзіңіз ашыңыз немесе ресми сайттағы телефонға хабарласыңыз",
    "hero.preview.riskLabel": "Қауіп",
    "hero.preview.riskValue": "Жоғары",
    "map.kicker": "Қалай жұмыс істейді",
    "map.chip1.label": "Бірінші қадам",
    "map.chip1.value": "баспай тұрып тексеру",
    "map.chip2.label": "Екінші қадам",
    "map.chip2.value": "әрі қарай не істеуді түсіну",
    "problem.kicker": "Мәселе неде",
    "problem.title": "Ресми қағаздар мен алаяқтар қарапайым адамға түсініксіз тілде сөйлейді",
    "problem.card1.title": "«Анашым, бұл сілтемені баспаңыз!»",
    "problem.card1.text": "Алаяқтардың тәсілдері барған сайын айлакер болып барады. Олар банк, салық, пошта атынан жазады немесе туыстарға бірдеңе болды деп қорқытады. Бір кездейсоқ басу отбасының барлық жинағын жоғалтуы мүмкін",
    "problem.card2.title": "Бюрократия тым күрделі",
    "problem.card2.text": "Мемлекеттік қызмет нұсқаулықтары мен заңдар құрғақ заң тілінде жазылған. Адамдарға қарапайым жауап керек: бұл нені білдіреді, қайда бару керек және қандай құжат апару керек",
    "problem.card3.title": "Жақындар әрдайым керек сәтте қасында болмайды",
    "problem.card3.text": "Егде адамдар күдікті қоңыраулармен жиі жалғыз қалады. Järdem AI оларға алғашқы сабырлы кеңес беріп, қателік жасамай тұрып дүрбелеңнен қорғайды",
    "demo.kicker": "Демоны көру",
    "demo.title": "Järdem қазірдің өзінде көмектесе алатын үш нәрсе",
    "demo.subtitle": "Қазір бұл дайын сценарийлері бар интерактивті прототип, бірақ ол көмекшінің отбасылар өміріндегі нақты мәселелерді қалай шешетінін анық көрсетеді",
    "demo.tabs.scam": "Алдауды тану",
    "demo.tabs.document": "Құжатты түсіндіру",
    "demo.tabs.service": "Қызметті түсіну",
    "demo.status": "Прототип",
    "demo.runButton": "Жауапты көрсету",
    "demo.note": "Бұл демоны біз жасанды интеллект қауіпсіз, түсінікті және қарапайым адамдарға шынымен пайдалы бола алатынын көрсету үшін жасап жатырмыз",
    "features.kicker": "Мүмкіндіктер",
    "features.title": "Әрдайым байланыста болып, көмектесуге дайын шыдамды туыс сияқты",
    "features.card1.title": "Алаяқтардың айласын таниды",
    "features.card1.text": "WhatsApp/SMS ішіндегі күдікті хабарламаны немесе сілтемені жай ғана көшіріңіз. Көмекші қауіп неде екенін және өзіңізді қалай қорғау керегін түсіндіреді",
    "features.card2.title": "Құжаттарды түсінікті тілге аударады",
    "features.card2.text": "Ресми хабарлама немесе анықтама мәтінін жіберіңіз. Көмекші оны адамға түсінікті тілмен қайта жазып, қарапайым істер тізімін жасайды",
    "features.card3.title": "Мемлекеттік қызметтерге көмектеседі",
    "features.card3.text": "ИП ашу, құжаттарды қайта рәсімдеу, айыппұл немесе жәрдемақыны түсіну - Järdem алғашқы қадамдарды қиын терминдерсіз түсіндіреді",
    "features.card4.title": "Деректеріңізді қорғайды",
    "features.card4.text": "Біз көмекшіні толық автономды және local-first еткіміз келеді. Бұл жеке құжаттарыңыз жабық бұлттық базаларға кетпейді дегенді білдіреді",
    "motion.kicker": "Интерфейс",
    "motion.title": "Абыр-сабырсыз сабырлы дизайн",
    "motion.subtitle": "Біз өткір анимациялардан және артық жүктелген чат-боттардан қашамыз. Егде пайдаланушылар өздерін сенімді және жайлы сезінуі керек",
    "motion.card1.title": "Дүрбелеңсіз жүктелу",
    "motion.card1.text": "Жұмсақ ағынды сызықтар жүйенің деректерді сабырмен тексеріп, сенімді жауап дайындап жатқанын көрсетеді",
    "motion.card2.title": "Қауіпсіздік сигналы",
    "motion.card2.text": "Нәзік пульсация маңызды ескертулерге назар аудартады, бірақ пайдаланушыны қорқытпайды",
    "motion.card3.title": "Жайлы атмосфера",
    "motion.card3.text": "Интерфейс даланың жұмсақ кешкі түстерінен шабыт алған. Ол басты нәрсеге - көмек мәтініне назар аударуға көмектеседі",
    "open.kicker": "Неге ашық код?",
    "open.title": "Жұмысын әркім тексере алатын көмекші",
    "open.text": "Järdem толық ашық жасалады. Әзірлеушілер, волонтерлер және қоғамдық ұйымдар ішіне қарап, аударма сапасын жақсартып, жобаны өз қауымдастықтарының қажетіне бейімдей алады",
    "open.item1.title": "Ашық бастапқы код",
    "open.item1.text": "Интерфейс, қауіпсіздік ережелері және мемлекеттік дереккөздерден іздеу логикасы тексеру мен жақсартуға әрдайым ашық",
    "open.item2.title": "Нақты мысалдар базасы",
    "open.item2.text": "Біз жүйені тірі мысалдармен үйрету үшін нақты алаяқтық жағдайларын, мемлекеттік қызметтер бойынша нақты сұрақтарды және түсініксіз құжаттарды жинаймыз",
    "open.item3.title": "Көмектің адал шектері",
    "open.item3.text": "Көмекші кәсіби заңгерді немесе дәрігерді ешқашан алмастырмайды. Оның міндеті - қауіптер туралы ескерту және қауіпсіз алғашқы қадамдарды ұсыну",
    "roadmap.kicker": "Жоспарлар",
    "roadmap.title": "Біз кезең-кезеңімен не жасап жатырмыз",
    "roadmap.phase1.label": "1-қадам",
    "roadmap.phase1.title": "Демоны іске қосу",
    "roadmap.phase1.text": "AI отбасылардың үш негізгі міндетін қалай шешетінін тірідей көруге болатын интерактивті бет",
    "roadmap.phase2.label": "2-қадам",
    "roadmap.phase2.title": "Толық прототип",
    "roadmap.phase2.text": "Жүктелген құжаттар мен мәтіндерді бірден талдай алатын жұмыс істейтін веб-көмекші",
    "roadmap.phase3.label": "3-қадам",
    "roadmap.phase3.title": "Автономды AI",
    "roadmap.phase3.text": "Интернетсіз, тікелей құрылғыңызда жұмыс істей алатын жеңіл модельдерге көшу",
    "roadmap.phase4.label": "4-қадам",
    "roadmap.phase4.title": "Аймақтың жаңа тілдері",
    "roadmap.phase4.text": "Өзбек және қырғыз тілдерін толық қолдауды қосу, волонтерлермен жаңа серіктестіктер",
    "audience.kicker": "Бұл кімге керек",
    "audience.title": "Жақындарына бір рет болса да «Алдымен маған жібер, ештеңе баспа!» дегендердің бәріне арналған",
    "audience.tags.citizens": "Ата-аналар",
    "audience.tags.elderly": "Ата-әжелер",
    "audience.tags.lowDigital": "Интернетті қолдану қиын адамдар",
    "audience.tags.students": "Үлкендерге көмектесетін балалар",
    "audience.tags.migrants": "Мигранттар",
    "audience.tags.families": "Отбасылар",
    "audience.tags.smallBusiness": "Шағын бизнес",
    "audience.tags.ngos": "Қоғамдық ұйымдар",
    "audience.tags.civic": "Әлеуметтік жобалар",
    "audience.tags.developers": "Open-source әзірлеушілер",
    "audience.tags.researchers": "Тіл зерттеушілері",
    "cta.kicker": "Бірге құрайық",
    "cta.title": "Отбасымызды қорғайтын технология жасайық",
    "cta.text": "Біз алаяқтарды тексеру, құжаттарды түсіндіру және мемлекеттік қызметтер бойынша кеңес беруге арналған алғашқы ашық құралдарды шығаруға дайындап жатырмыз",
    "cta.github": "GitHub-та көру",
    "cta.contact": "Командаға жазу",
    "footer.tagline": "Орталық Азия отбасыларына арналған қарапайым AI көмек",
    "aria.demoPrompt": "Демо сұрау",
    "aria.motionSystem": "Орталық Азия анимация жүйесі",
    "aria.audienceList": "Аудитория тізімі",
    "aria.constellationMap": "Орталық Азияның анимациялық карта-шоқжұлдызы",
    "demoScenarios": {
      "scam": {
        "label": "Алдауды тану",
        "title": "Жақыныңыз сілтемені баспай тұрып көмектесіңіз",
        "input": "Анама SMS келді: «Kaspi аккаунтыңыз бұғатталды. Деректерді сілтеме арқылы растаңыз». Бұл қауіпсіз бе?",
        "messages": [
          {
            "role": "user",
            "text": "Анама SMS келді: «Kaspi аккаунтыңыз бұғатталды. Деректерді сілтеме арқылы растаңыз». Бұл қауіпсіз бе?"
          },
          {
            "role": "ai",
            "text": "Бұл алдауға өте ұқсайды. Сілтемені ашпаңыз, карта деректерін енгізбеңіз және SMS-кодтарды жібермеңіз"
          },
          {
            "role": "ai",
            "text": "Қауіпсіз қадам: банк қосымшасын өзіңіз ашыңыз немесе ресми сайттағы нөмірге хабарласыңыз. Күдікті хабарламадағы нөмірді қолданбаңыз"
          }
        ]
      },
      "document": {
        "label": "Құжатты түсіндіру",
        "title": "Ресми мәтінді адамға түсінікті тілге аудару",
        "input": "Құжатта жеке деректерді жаңарту керек деп жазылған. Бұл нені білдіреді?",
        "messages": [
          {
            "role": "user",
            "text": "Құжатта жеке деректерді жаңарту керек деп жазылған. Бұл нені білдіреді?"
          },
          {
            "role": "ai",
            "text": "Қарапайым сөзбен: аты-жөніңізді, жеке куәлікті, банк, салық немесе тіркеу деректерін жаңарту қажет болуы мүмкін. Ең бастысы - мерзім мен құжаттар тізімін түсіну"
          },
          {
            "role": "ai",
            "text": "Келесі қадам: чеклист жасаңыз, ресми хабарламаны сақтаңыз және мерзімді ресми сервис немесе мекеме арқылы нақтылаңыз"
          }
        ]
      },
      "service": {
        "label": "Қызметті түсіну",
        "title": "Қарапайым алғашқы қадам алу",
        "input": "Қазақстанда ИП ашқым келеді. Неден бастаймын?",
        "messages": [
          {
            "role": "user",
            "text": "Қазақстанда ИП ашқым келеді. Неден бастаймын?"
          },
          {
            "role": "ai",
            "text": "Үш нәрседен бастаңыз: қызмет түрін таңдаңыз, ресми онлайн-сервис арқылы тіркеліңіз және салық режимін таңдаңыз"
          },
          {
            "role": "ai",
            "text": "Мен мұны қарапайым чеклистке айналдырып, не дайындау керегін және маманға қандай сұрақ қою керегін көрсете аламын"
          }
        ]
      }
    },
    "aria.home": "Басты бет",
    "aria.languageSwitcher": "Тіл ауыстырғыш",
    "aria.projectPrinciples": "Жоба қағидалары",
    "aria.demoScenarios": "Демо сценарийлер",
    "hero.previewLabel": "Järdem AI көмекшісі",
    "hero.previewUser": "Анама SMS келді: «Kaspi аккаунтыңыз бұғатталды. Деректерді сілтеме арқылы растаңыз». Бұл қауіпсіз бе?",
    "hero.previewAi": "Бұл алдауға өте ұқсайды. Ешқашан сілтемені ашпаңыз, код жібермеңіз және карта деректерін енгізбеңіз. Банк қосымшасын өзіңіз ашыңыз немесе ресми сайттағы телефонға хабарласыңыз",
    "hero.riskLabel": "Қауіп",
    "hero.riskValue": "Жоғары",
    "hero.trust1": "Алаяқтықты тексеру",
    "hero.trust2": "Қарапайым түсіндіру",
    "hero.trust3": "Толық құпиялылық",
    "hero.trust4": "Қазақша / Русский / English",
    "problem.card1Title": "«Анашым, бұл сілтемені баспаңыз!»",
    "problem.card1Text": "Алаяқтардың тәсілдері барған сайын айлакер болып барады. Олар банк, салық, пошта атынан жазады немесе туыстарға бірдеңе болды деп қорқытады. Бір кездейсоқ басу отбасының барлық жинағын жоғалтуы мүмкін",
    "problem.card2Title": "Бюрократия тым күрделі",
    "problem.card2Text": "Мемлекеттік қызмет нұсқаулықтары мен заңдар құрғақ заң тілінде жазылған. Адамдарға қарапайым жауап керек: бұл нені білдіреді, қайда бару керек және қандай құжат апару керек",
    "problem.card3Title": "Жақындар әрдайым керек сәтте қасында болмайды",
    "problem.card3Text": "Егде адамдар күдікті қоңыраулармен жиі жалғыз қалады. Järdem AI оларға алғашқы сабырлы кеңес беріп, қателік жасамай тұрып дүрбелеңнен қорғайды",
    "demo.tabScam": "Алдауды тану",
    "demo.tabDocument": "Құжатты түсіндіру",
    "demo.tabService": "Қызметті түсіну",
    "features.card1Title": "Алаяқтардың айласын таниды",
    "features.card1Text": "WhatsApp/SMS ішіндегі күдікті хабарламаны немесе сілтемені жай ғана көшіріңіз. Көмекші қауіп неде екенін және өзіңізді қалай қорғау керегін түсіндіреді",
    "features.card2Title": "Құжаттарды түсінікті тілге аударады",
    "features.card2Text": "Ресми хабарлама немесе анықтама мәтінін жіберіңіз. Көмекші оны адамға түсінікті тілмен қайта жазып, қарапайым істер тізімін жасайды",
    "features.card3Title": "Мемлекеттік қызметтерге көмектеседі",
    "features.card3Text": "ИП ашу, құжаттарды қайта рәсімдеу, айыппұл немесе жәрдемақыны түсіну - Järdem алғашқы қадамдарды қиын терминдерсіз түсіндіреді",
    "features.card4Title": "Деректеріңізді қорғайды",
    "features.card4Text": "Біз көмекшіні толық автономды және local-first еткіміз келеді. Бұл жеке құжаттарыңыз жабық бұлттық базаларға кетпейді дегенді білдіреді",
    "open.item1Title": "Ашық бастапқы код",
    "open.item1Text": "Интерфейс, қауіпсіздік ережелері және мемлекеттік дереккөздерден іздеу логикасы тексеру мен жақсартуға әрдайым ашық",
    "open.item2Title": "Нақты мысалдар базасы",
    "open.item2Text": "Біз жүйені тірі мысалдармен үйрету үшін нақты алаяқтық жағдайларын, мемлекеттік қызметтер бойынша нақты сұрақтарды және түсініксіз құжаттарды жинаймыз",
    "open.item3Title": "Көмектің адал шектері",
    "open.item3Text": "Көмекші кәсіби заңгерді немесе дәрігерді ешқашан алмастырмайды. Оның міндеті - қауіптер туралы ескерту және қауіпсіз алғашқы қадамдарды ұсыну",
    "roadmap.phase1Label": "1-қадам",
    "roadmap.phase1Title": "Демоны іске қосу",
    "roadmap.phase1Text": "AI отбасылардың үш негізгі міндетін қалай шешетінін тірідей көруге болатын интерактивті бет",
    "roadmap.phase2Label": "2-қадам",
    "roadmap.phase2Title": "Толық прототип",
    "roadmap.phase2Text": "Жүктелген құжаттар мен мәтіндерді бірден талдай алатын жұмыс істейтін веб-көмекші",
    "roadmap.phase3Label": "3-қадам",
    "roadmap.phase3Title": "Автономды AI",
    "roadmap.phase3Text": "Интернетсіз, тікелей құрылғыңызда жұмыс істей алатын жеңіл модельдерге көшу",
    "roadmap.phase4Label": "4-қадам",
    "roadmap.phase4Title": "Аймақтың жаңа тілдері",
    "roadmap.phase4Text": "Өзбек және қырғыз тілдерін толық қолдауды қосу, волонтерлермен жаңа серіктестіктер"
  }
};

function getNestedTranslation(lang, key) {
  if (translations[lang] && Object.prototype.hasOwnProperty.call(translations[lang], key)) return translations[lang][key];
  return key.split(".").reduce((value, part) => value && value[part], translations[lang]);
}

function translate(key, lang = getCurrentLanguage()) {
  return getNestedTranslation(lang, key) ?? getNestedTranslation(DEFAULT_LANGUAGE, key) ?? null;
}

function getCurrentLanguage() {
  const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (savedLanguage && translations[savedLanguage]) return savedLanguage;
  const browserLanguage = navigator.language.slice(0, 2);
  if (translations[browserLanguage]) return browserLanguage;
  return DEFAULT_LANGUAGE;
}

function applyTranslations(lang = getCurrentLanguage()) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translate(element.getAttribute("data-i18n"), lang);
    if (value !== null && value !== undefined) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.getAttribute("data-i18n-attr").split(",").forEach((pair) => {
      const [attr, key] = pair.split(":").map((item) => item.trim());
      const value = translate(key, lang);
      if (attr && key && value !== null && value !== undefined) element.setAttribute(attr, value);
    });
  });
  document.querySelectorAll("[data-lang]").forEach((button) => { button.classList.toggle("active", button.dataset.lang === lang); });
  const metaTitle = translate("meta.title", lang);
  const metaDescription = translate("meta.description", lang);
  if (metaTitle) document.title = metaTitle;
  if (metaDescription) {
    document.querySelector('meta[name="description"]')?.setAttribute("content", metaDescription);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", metaDescription);
  }
  window.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  applyTranslations(lang);
}

window.getCurrentLanguage = getCurrentLanguage;
window.applyTranslations = applyTranslations;
window.setLanguage = setLanguage;
window.translate = translate;
window.translations = translations;
window.JARDEM_HUMAN_DEMOS = { ru: translations.ru.demoScenarios, en: translations.en.demoScenarios, kk: translations.kk.demoScenarios };
window.getJardemHumanScenario = function getJardemHumanScenario(name) {
  const lang = getCurrentLanguage();
  return window.JARDEM_HUMAN_DEMOS?.[lang]?.[name] || window.JARDEM_HUMAN_DEMOS.ru[name];
};

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(getCurrentLanguage());
  document.querySelectorAll("[data-lang]").forEach((button) => { button.addEventListener("click", () => setLanguage(button.dataset.lang)); });
});
