// Human-friendly copy for real families, parents and grandparents.
(function () {
  const copy = {
    en: {
      "meta.title": "Järdem AI - AI help for families in Central Asia",
      "meta.description": "Järdem AI helps families protect older relatives from scams, understand documents, and get simple step-by-step guidance",
      "nav.demo": "Try it",
      "nav.open": "Why trust it",
      "nav.roadmap": "What it does",
      "nav.contact": "Contact",
      "nav.tryDemo": "Try it",

      "hero.eyebrow": "For families, parents, grandparents, and anyone who needs simple help",
      "hero.title": "Worried your mom or grandma might send money to scammers?",
      "hero.subtitle": "Järdem AI helps you quickly check suspicious messages, explain confusing documents, and understand what to do next - in simple language, without legal jargon or tech words",
      "hero.primaryCta": "Check a message",
      "hero.secondaryCta": "Open GitHub",
      "hero.trust.open": "Scam check",
      "hero.trust.local": "Simple explanations",
      "hero.trust.privacy": "Privacy-first",
      "hero.trust.languages": "Kazakh / Russian / English",
      "hero.preview.label": "Järdem AI helper",
      "hero.preview.user": "My mom received: “Your Kaspi account is blocked Confirm your data through this link.” Is it safe?",
      "hero.preview.ai": "This looks dangerous Do not open the link, do not send codes, and do not enter card details Open the official app manually or call the bank using the number from the official website",
      "hero.preview.riskLabel": "Risk",
      "hero.preview.riskValue": "High",

      "map.kicker": "How it works",
      "map.title": "A calm helper for everyday scary moments",
      "map.text": "A suspicious SMS, a strange call, a confusing document, or a government service you do not understand - Järdem turns it into clear next steps",
      "map.chip1.label": "First step",
      "map.chip1.value": "check before clicking",
      "map.chip2.label": "Second step",
      "map.chip2.value": "explain what to do",

      "problem.kicker": "Problem",
      "problem.title": "Scammers and official documents often speak in a language normal people do not understand",
      "problem.card1.title": "“Mom, don’t click that link”",
      "problem.card1.text": "Scam messages look more realistic every year They mention banks, fines, parcels, loans, accounts, or relatives in trouble One wrong click can cost money",
      "problem.card2.title": "Documents are too complicated",
      "problem.card2.text": "Government pages and legal texts often use formal language People need a simple answer: what does this mean, what should I do, and what should I not do?",
      "problem.card3.title": "Family help is not always nearby",
      "problem.card3.text": "Older relatives may be alone when they receive a suspicious call or message Järdem gives them a first layer of calm, simple guidance before they panic or pay",

      "demo.kicker": "Try it",
      "demo.title": "Three simple things Järdem can help with",
      "demo.subtitle": "The demo is scripted for now, but it shows the real use cases: checking scams, explaining documents, and guiding people through public services",
      "demo.tabs.scam": "Check a scam",
      "demo.tabs.document": "Explain a document",
      "demo.tabs.service": "What should I do?",
      "demo.status": "Demo",
      "demo.runButton": "Show answer",
      "demo.note": "This is an early demo The goal is to make the assistant safe, clear, and useful for families before adding more features",

      "features.kicker": "What it does",
      "features.title": "Like a patient relative who explains everything clearly",
      "features.card1.title": "Checks suspicious messages",
      "features.card1.text": "Paste an SMS, WhatsApp message, email, or link Järdem explains whether it looks dangerous and what not to do",
      "features.card2.title": "Explains documents simply",
      "features.card2.text": "Paste a document or official text Järdem turns it into normal human language and a checklist",
      "features.card3.title": "Helps with public services",
      "features.card3.text": "Opening a business, changing documents, certificates, fines, registrations - Järdem explains where to start",
      "features.card4.title": "Keeps privacy in mind",
      "features.card4.text": "The long-term goal is a local-first assistant that does not force families to send sensitive information to closed systems",

      "motion.kicker": "For the interface",
      "motion.title": "A calm visual system, not a noisy chatbot",
      "motion.subtitle": "The animation is designed to feel trustworthy, slow, and human - so older users do not feel rushed or confused",
      "motion.card1.title": "Loading without panic",
      "motion.card1.text": "Soft routes show that the assistant is checking information and preparing an answer",
      "motion.card2.title": "Safety signal",
      "motion.card2.text": "Gentle pulses highlight important warnings without shouting at the user",
      "motion.card3.title": "Calm background",
      "motion.card3.text": "Subtle movement creates atmosphere, but keeps the text readable and the interface simple",

      "open.kicker": "Why trust it?",
      "open.title": "Families need an assistant they can inspect, improve, and trust",
      "open.text": "Järdem is being built openly so developers, NGOs, and communities can check how it works and adapt it for local languages and real family needs",
      "open.item1.title": "Open code",
      "open.item1.text": "The interface, prompts, safety logic, and public-source search pipeline can be reviewed and improved",
      "open.item2.title": "Local examples",
      "open.item2.text": "We collect examples that look like real messages people receive: scams, public-service questions, and confusing documents",
      "open.item3.title": "Clear safety rules",
      "open.item3.text": "The assistant should not pretend to be a lawyer, doctor, or bank It should explain risks and suggest safe next steps",

      "roadmap.kicker": "Next",
      "roadmap.title": "What we want to build next",
      "roadmap.phase1.label": "Step 1",
      "roadmap.phase1.title": "Scam checker",
      "roadmap.phase1.text": "A simple page where families can paste a suspicious message and get a clear risk explanation",
      "roadmap.phase2.label": "Step 2",
      "roadmap.phase2.title": "Document explainer",
      "roadmap.phase2.text": "A tool that turns official language into normal words, checklists, and warnings",
      "roadmap.phase3.label": "Step 3",
      "roadmap.phase3.title": "Family mode",
      "roadmap.phase3.text": "A calmer interface for older users with larger text, simple buttons, and fewer confusing choices",
      "roadmap.phase4.label": "Step 4",
      "roadmap.phase4.title": "More local languages",
      "roadmap.phase4.text": "Support for Kazakh, Russian, and later more Central Asian languages and examples",

      "audience.kicker": "Who it helps",
      "audience.title": "For anyone who has ever said: “Send it to me first, don’t click anything.”",
      "audience.tags.citizens": "Parents",
      "audience.tags.elderly": "Grandparents",
      "audience.tags.lowDigital": "People who fear online forms",
      "audience.tags.students": "Children helping parents",
      "audience.tags.migrants": "Migrants",
      "audience.tags.families": "Families",
      "audience.tags.smallBusiness": "Small business owners",
      "audience.tags.ngos": "NGOs",
      "audience.tags.civic": "Community projects",
      "audience.tags.developers": "Open-source builders",
      "audience.tags.researchers": "Local language researchers",

      "cta.kicker": "Help us build it",
      "cta.title": "Let’s make AI that helps our families, not just tech people",
      "cta.text": "We are building the first version for scam checks, document explanations, and simple public-service guidance",
      "cta.github": "View GitHub",
      "cta.contact": "Contact us",
      "footer.tagline": "Simple AI help for families in Central Asia"
    },

    ru: {
      "meta.title": "Järdem AI - AI-помощь для семей в Центральной Азии",
      "meta.description": "Järdem AI помогает семьям защищать родителей, бабушек и дедушек от мошенников, понимать документы и получать простые пошаговые подсказки",
      "nav.demo": "Попробовать",
      "nav.open": "Почему доверять",
      "nav.roadmap": "Что умеет",
      "nav.contact": "Контакты",
      "nav.tryDemo": "Попробовать",

      "hero.eyebrow": "Для семей, родителей, бабушек, дедушек и всех, кому нужна простая помощь",
      "hero.title": "Переживаете, что мама или бабушка отправит деньги мошенникам?",
      "hero.subtitle": "Järdem AI помогает быстро проверить подозрительное сообщение, объяснить сложный документ и понять, что делать дальше - простым языком, без юридических и технических заумностей",
      "hero.primaryCta": "Проверить сообщение",
      "hero.secondaryCta": "Открыть GitHub",
      "hero.trust.open": "Проверка мошенников",
      "hero.trust.local": "Простые объяснения",
      "hero.trust.privacy": "Приватность",
      "hero.trust.languages": "Қазақша / Русский / English",
      "hero.preview.label": "Помощник Järdem AI",
      "hero.preview.user": "Маме пришло SMS: «Ваш Kaspi аккаунт заблокирован Подтвердите данные по ссылке» Это безопасно?",
      "hero.preview.ai": "Это похоже на опасное сообщение Не открывайте ссылку, не отправляйте коды и не вводите данные карты Откройте официальный app вручную или позвоните в банк по номеру с официального сайта",
      "hero.preview.riskLabel": "Риск",
      "hero.preview.riskValue": "Высокий",

      "map.kicker": "Как это работает",
      "map.title": "Спокойный помощник для тревожных бытовых ситуаций",
      "map.text": "Подозрительное SMS, странный звонок, непонятный документ или госуслуга, где ничего не ясно - Järdem переводит это в понятные шаги",
      "map.chip1.label": "Первый шаг",
      "map.chip1.value": "проверить до клика",
      "map.chip2.label": "Второй шаг",
      "map.chip2.value": "понять, что делать",

      "problem.kicker": "Проблема",
      "problem.title": "Мошенники и официальные документы часто говорят так, что обычному человеку ничего не понятно",
      "problem.card1.title": "«Мам, не нажимай на эту ссылку»",
      "problem.card1.text": "Мошеннические сообщения выглядят всё реалистичнее Они пишут про банки, штрафы, посылки, кредиты, аккаунты или родственников в беде Один клик может стоить денег",
      "problem.card2.title": "Документы слишком сложные",
      "problem.card2.text": "Госстраницы и юридические тексты часто написаны формально Людям нужен простой ответ: что это значит, что делать и чего точно не делать",
      "problem.card3.title": "Родные не всегда рядом",
      "problem.card3.text": "Бабушка, дедушка или родитель могут быть одни, когда им звонят или пишут мошенники Järdem даёт первый спокойный и понятный ответ до паники или оплаты",

      "demo.kicker": "Попробовать",
      "demo.title": "Три простые вещи, с которыми поможет Järdem",
      "demo.subtitle": "Сейчас демо работает на готовых примерах, но показывает реальные сценарии: проверить мошенников, объяснить документ и понять, что делать дальше",
      "demo.tabs.scam": "Проверить скам",
      "demo.tabs.document": "Объяснить документ",
      "demo.tabs.service": "Что делать?",
      "demo.status": "Демо",
      "demo.runButton": "Показать ответ",
      "demo.note": "Это раннее демо Наша цель - сделать помощника безопасным, понятным и полезным для семей, а уже потом добавлять больше функций",

      "features.kicker": "Что умеет",
      "features.title": "Как терпеливый родственник, который спокойно всё объясняет",
      "features.card1.title": "Проверяет подозрительные сообщения",
      "features.card1.text": "Вставьте SMS, WhatsApp-сообщение, email или ссылку Järdem объяснит, похоже ли это на мошенников и чего нельзя делать",
      "features.card2.title": "Объясняет документы по-человечески",
      "features.card2.text": "Вставьте документ или официальный текст Järdem переведёт его на нормальный язык и сделает чеклист",
      "features.card3.title": "Помогает с госуслугами",
      "features.card3.text": "Открыть ИП, поменять документы, разобраться со справкой, штрафом или регистрацией - Järdem объяснит, с чего начать",
      "features.card4.title": "Думает о приватности",
      "features.card4.text": "В долгосрочной версии мы хотим сделать помощника local-first, чтобы семьи не были вынуждены отправлять личные данные в закрытые системы",

      "motion.kicker": "Интерфейс",
      "motion.title": "Спокойная визуальная система, а не шумный чат-бот",
      "motion.subtitle": "Анимации должны быть мягкими, понятными и не пугать пожилых пользователей Главное - текст, спокойствие и ясные действия",
      "motion.card1.title": "Загрузка без паники",
      "motion.card1.text": "Мягкие маршруты показывают, что помощник проверяет информацию и готовит ответ",
      "motion.card2.title": "Сигнал безопасности",
      "motion.card2.text": "Лёгкий пульс подсвечивает важные предупреждения, но не давит на пользователя",
      "motion.card3.title": "Спокойный фон",
      "motion.card3.text": "Небольшое движение создаёт атмосферу, но не мешает читать и пользоваться сайтом",

      "open.kicker": "Почему доверять?",
      "open.title": "Семьям нужен помощник, работу которого можно проверить",
      "open.text": "Järdem создаётся открыто, чтобы разработчики, НПО и локальные сообщества могли смотреть, как он работает, улучшать его и адаптировать под реальные нужды семей",
      "open.item1.title": "Открытый код",
      "open.item1.text": "Интерфейс, промпты, правила безопасности и поиск по публичным источникам можно проверять и улучшать",
      "open.item2.title": "Живые локальные примеры",
      "open.item2.text": "Мы собираем примеры, похожие на реальные сообщения: скам, вопросы по госуслугам и непонятные документы",
      "open.item3.title": "Честные правила безопасности",
      "open.item3.text": "Помощник не должен притворяться юристом, врачом или банком Он должен объяснять риски и предлагать безопасные следующие шаги",

      "roadmap.kicker": "Дальше",
      "roadmap.title": "Что мы хотим сделать следующим",
      "roadmap.phase1.label": "Шаг 1",
      "roadmap.phase1.title": "Проверка мошенников",
      "roadmap.phase1.text": "Простая страница, куда можно вставить подозрительное сообщение и получить понятное объяснение риска",
      "roadmap.phase2.label": "Шаг 2",
      "roadmap.phase2.title": "Объяснение документов",
      "roadmap.phase2.text": "Инструмент, который переводит официальный язык в обычные слова, чеклисты и предупреждения",
      "roadmap.phase3.label": "Шаг 3",
      "roadmap.phase3.title": "Режим для семьи",
      "roadmap.phase3.text": "Более спокойный интерфейс для пожилых пользователей: крупный текст, простые кнопки и минимум лишнего",
      "roadmap.phase4.label": "Шаг 4",
      "roadmap.phase4.title": "Больше локальных языков",
      "roadmap.phase4.text": "Поддержка казахского, русского и позже других языков Центральной Азии и локальных примеров",

      "audience.kicker": "Кому помогает",
      "audience.title": "Для всех, кто хоть раз говорил: «Скинь мне сначала, ничего не нажимай»",
      "audience.tags.citizens": "Родители",
      "audience.tags.elderly": "Бабушки и дедушки",
      "audience.tags.lowDigital": "Те, кто боится онлайн-форм",
      "audience.tags.students": "Дети, помогающие родителям",
      "audience.tags.migrants": "Мигранты",
      "audience.tags.families": "Семьи",
      "audience.tags.smallBusiness": "Малый бизнес",
      "audience.tags.ngos": "НПО",
      "audience.tags.civic": "Общественные проекты",
      "audience.tags.developers": "Open-source разработчики",
      "audience.tags.researchers": "Исследователи локальных языков",

      "cta.kicker": "Помогите нам",
      "cta.title": "Давайте сделаем AI, который помогает нашим семьям, а не только технарям",
      "cta.text": "Мы собираем первую версию для проверки мошенников, объяснения документов и простых подсказок по госуслугам",
      "cta.github": "Открыть GitHub",
      "cta.contact": "Связаться",
      "footer.tagline": "Простая AI-помощь для семей в Центральной Азии"
    },

    kk: {
      "meta.title": "Järdem AI - Орталық Азия отбасыларына арналған AI көмек",
      "meta.description": "Järdem AI отбасыларға ата-ана, ата-әже мен жақындарды алаяқтардан қорғауға, құжаттарды түсінуге және қарапайым қадамдар алуға көмектеседі",
      "nav.demo": "Көру",
      "nav.open": "Неге сенуге болады",
      "nav.roadmap": "Не істейді",
      "nav.contact": "Байланыс",
      "nav.tryDemo": "Көру",

      "hero.eyebrow": "Отбасыларға, ата-аналарға, ата-әжелерге және қарапайым көмек керек адамдарға",
      "hero.title": "Анаңыз немесе әжеңіз алаяқтарға ақша жіберіп қоя ма деп қорқасыз ба?",
      "hero.subtitle": "Järdem AI күдікті хабарламаны тез тексеруге, күрделі құжатты түсіндіруге және әрі қарай не істеу керегін қарапайым тілмен айтуға көмектеседі",
      "hero.primaryCta": "Хабарламаны тексеру",
      "hero.secondaryCta": "GitHub ашу",
      "hero.trust.open": "Алаяқтықты тексеру",
      "hero.trust.local": "Қарапайым түсіндіру",
      "hero.trust.privacy": "Құпиялылық",
      "hero.trust.languages": "Қазақша / Русский / English",
      "hero.preview.label": "Järdem AI көмекшісі",
      "hero.preview.user": "Анама SMS келді: «Kaspi аккаунтыңыз бұғатталды Деректерді сілтеме арқылы растаңыз» Бұл қауіпсіз бе?",
      "hero.preview.ai": "Бұл қауіпті хабарламаға ұқсайды Сілтемені ашпаңыз, код жібермеңіз және карта деректерін енгізбеңіз Ресми қосымшаны өзіңіз ашыңыз немесе банкке ресми сайттағы нөмір арқылы хабарласыңыз",
      "hero.preview.riskLabel": "Қауіп",
      "hero.preview.riskValue": "Жоғары",

      "map.kicker": "Қалай жұмыс істейді",
      "map.title": "Күнделікті мазасыз сәттерге арналған сабырлы көмекші",
      "map.text": "Күдікті SMS, түсініксіз қоңырау, күрделі құжат немесе мемлекеттік қызмет - Järdem мұның бәрін нақты әрі қарапайым қадамдарға айналдырады",
      "map.chip1.label": "Бірінші қадам",
      "map.chip1.value": "баспай тұрып тексеру",
      "map.chip2.label": "Екінші қадам",
      "map.chip2.value": "не істеу керегін түсіну",

      "problem.kicker": "Мәселе",
      "problem.title": "Алаяқтар мен ресми құжаттар көбіне қарапайым адам түсінбейтін тілде сөйлейді",
      "problem.card1.title": "«Анашым, бұл сілтемені баспаңыз»",
      "problem.card1.text": "Алаяқтық хабарламалар жыл сайын шынайырақ көрінеді Олар банк, айыппұл, посылка, несие, аккаунт немесе қиын жағдайдағы туыс туралы жазады",
      "problem.card2.title": "Құжаттар тым күрделі",
      "problem.card2.text": "Мемлекеттік сайттар мен заң мәтіндері көбіне ресми тілде жазылады Адамдарға қарапайым жауап керек: бұл нені білдіреді, не істеу керек, нені істемеу керек",
      "problem.card3.title": "Жақындар әрдайым қасында емес",
      "problem.card3.text": "Ата-әже немесе ата-ана күдікті қоңырау не хабарлама келген кезде жалғыз болуы мүмкін Järdem оларға сабырлы әрі түсінікті алғашқы жауап береді",

      "demo.kicker": "Көру",
      "demo.title": "Järdem көмектесетін үш қарапайым жағдай",
      "demo.subtitle": "Қазір демо дайын мысалдармен жұмыс істейді, бірақ нақты сценарийлерді көрсетеді: алаяқтықты тексеру, құжатты түсіндіру және әрі қарай не істеу керегін айту",
      "demo.tabs.scam": "Скамды тексеру",
      "demo.tabs.document": "Құжатты түсіндіру",
      "demo.tabs.service": "Не істеу керек?",
      "demo.status": "Демо",
      "demo.runButton": "Жауапты көру",
      "demo.note": "Бұл ерте демо Мақсатымыз - көмекшіні отбасылар үшін қауіпсіз, түсінікті және пайдалы ету",

      "features.kicker": "Не істейді",
      "features.title": "Бәрін сабырмен түсіндіретін шыдамды туыс сияқты",
      "features.card1.title": "Күдікті хабарламаларды тексереді",
      "features.card1.text": "SMS, WhatsApp хабарламасы, email немесе сілтемені қойыңыз Järdem оның қауіпті болуы мүмкін екенін және нені істемеу керегін түсіндіреді",
      "features.card2.title": "Құжаттарды қарапайым тілмен түсіндіреді",
      "features.card2.text": "Құжатты немесе ресми мәтінді қойыңыз Järdem оны түсінікті тілге айналдырып, чеклист жасайды",
      "features.card3.title": "Мемлекеттік қызметтерге көмектеседі",
      "features.card3.text": "ИП ашу, құжат ауыстыру, анықтама, айыппұл немесе тіркеу - Järdem неден бастау керегін түсіндіреді",
      "features.card4.title": "Құпиялылықты ойлайды",
      "features.card4.text": "Ұзақ мерзімді мақсат - отбасылар жеке деректерін жабық жүйелерге жіберуге мәжбүр болмайтын local-first көмекші жасау",

      "motion.kicker": "Интерфейс",
      "motion.title": "Шулы чат-бот емес, сабырлы визуалды жүйе",
      "motion.subtitle": "Анимациялар жұмсақ, түсінікті және егде пайдаланушыларды қорқытпайтындай болуы керек Ең бастысы - мәтін, сабыр және нақты әрекет",
      "motion.card1.title": "Уайымсыз жүктелу",
      "motion.card1.text": "Жұмсақ маршруттар көмекші ақпаратты тексеріп, жауап дайындап жатқанын көрсетеді",
      "motion.card2.title": "Қауіпсіздік сигналы",
      "motion.card2.text": "Жеңіл пульс маңызды ескертулерді көрсетеді, бірақ пайдаланушыға қысым жасамайды",
      "motion.card3.title": "Сабырлы фон",
      "motion.card3.text": "Жеңіл қозғалыс атмосфера береді, бірақ мәтінді оқуға және сайтты қолдануға кедергі жасамайды",

      "open.kicker": "Неге сенуге болады?",
      "open.title": "Отбасыларға жұмысы тексерілетін көмекші керек",
      "open.text": "Järdem ашық түрде жасалып жатыр, сондықтан әзірлеушілер, ҮЕҰ және жергілікті қауымдастықтар оның қалай жұмыс істейтінін көріп, жақсарта алады",
      "open.item1.title": "Ашық код",
      "open.item1.text": "Интерфейс, prompt, қауіпсіздік ережелері және ашық дереккөздермен жұмыс тексеріліп, жақсартыла алады",
      "open.item2.title": "Жергілікті тірі мысалдар",
      "open.item2.text": "Біз нақты хабарламаларға ұқсас мысалдарды жинаймыз: скам, мемқызмет сұрақтары және түсініксіз құжаттар",
      "open.item3.title": "Адал қауіпсіздік ережелері",
      "open.item3.text": "Көмекші өзін заңгер, дәрігер немесе банк ретінде көрсетпеуі керек Ол қауіптерді түсіндіріп, қауіпсіз келесі қадамдарды ұсынуы керек",

      "roadmap.kicker": "Келесі",
      "roadmap.title": "Келесі не жасағымыз келеді",
      "roadmap.phase1.label": "1-қадам",
      "roadmap.phase1.title": "Алаяқтықты тексеру",
      "roadmap.phase1.text": "Күдікті хабарламаны қойып, қауіп туралы түсінікті жауап алатын қарапайым бет",
      "roadmap.phase2.label": "2-қадам",
      "roadmap.phase2.title": "Құжатты түсіндіру",
      "roadmap.phase2.text": "Ресми тілді қарапайым сөзге, чеклистке және ескертулерге айналдыратын құрал",
      "roadmap.phase3.label": "3-қадам",
      "roadmap.phase3.title": "Отбасы режимі",
      "roadmap.phase3.text": "Егде пайдаланушыларға арналған сабырлы интерфейс: үлкен мәтін, қарапайым батырмалар және артық нәрсе аз",
      "roadmap.phase4.label": "4-қадам",
      "roadmap.phase4.title": "Көбірек жергілікті тіл",
      "roadmap.phase4.text": "Қазақ, орыс және кейін басқа Орталық Азия тілдері мен жергілікті мысалдарды қолдау",

      "audience.kicker": "Кімге көмектеседі",
      "audience.title": "«Алдымен маған жібер, ештеңе баспа» деп айтқан адамдарға арналған",
      "audience.tags.citizens": "Ата-аналар",
      "audience.tags.elderly": "Ата-әжелер",
      "audience.tags.lowDigital": "Онлайн формалардан қорқатындар",
      "audience.tags.students": "Ата-анасына көмектесетін балалар",
      "audience.tags.migrants": "Мигранттар",
      "audience.tags.families": "Отбасылар",
      "audience.tags.smallBusiness": "Шағын бизнес",
      "audience.tags.ngos": "ҮЕҰ",
      "audience.tags.civic": "Қоғамдық жобалар",
      "audience.tags.developers": "Open-source әзірлеушілер",
      "audience.tags.researchers": "Жергілікті тіл зерттеушілері",

      "cta.kicker": "Бізге көмектесіңіз",
      "cta.title": "Тек технарларға емес, отбасымызға көмектесетін AI жасайық",
      "cta.text": "Біз алаяқтықты тексеру, құжатты түсіндіру және мемқызмет бойынша қарапайым кеңестер беретін бірінші нұсқаны жасап жатырмыз",
      "cta.github": "GitHub ашу",
      "cta.contact": "Байланысу",
      "footer.tagline": "Орталық Азия отбасыларына арналған қарапайым AI көмек"
    }
  };

  window.JARDEM_HUMAN_DEMOS = {
    en: {
      scam: {
        label: "Check a scam",
        title: "Help your relative before they click",
        input: "My mom received: “Your Kaspi account is blocked Confirm your data through this link.” Is it safe?",
        messages: [
          { role: "user", text: "My mom received: “Your Kaspi account is blocked Confirm your data through this link.” Is it safe?" },
          { role: "ai", text: "This is very likely a scam Do not open the link, do not enter card details, and do not send SMS codes to anyone" },
          { role: "ai", text: "Safe next step: open the official bank app manually or call the bank using the number from the official website Do not use the number from the suspicious message" }
        ]
      },
      document: {
        label: "Explain a document",
        title: "Turn official text into normal words",
        input: "This document says I need to update my personal data What does it mean?",
        messages: [
          { role: "user", text: "This document says I need to update my personal data What does it mean?" },
          { role: "ai", text: "Simple version: you may need to update your name, ID, bank, tax, or registration information The most important things are the deadline and which documents must be changed" },
          { role: "ai", text: "Next step: make a checklist, save the official notice, and confirm the deadline through the official service or office" }
        ]
      },
      service: {
        label: "What should I do?",
        title: "Get a simple first step",
        input: "I want to open an individual business in Kazakhstan Where do I start?",
        messages: [
          { role: "user", text: "I want to open an individual business in Kazakhstan Where do I start?" },
          { role: "ai", text: "Start with three things: choose your activity, register through the official online service, and choose a tax regime" },
          { role: "ai", text: "I can turn this into a simple checklist so you know what to prepare and what to ask a specialist" }
        ]
      }
    },
    ru: {
      scam: {
        label: "Проверить скам",
        title: "Помогите близкому до того, как он нажмёт ссылку",
        input: "Маме пришло: «Ваш Kaspi аккаунт заблокирован Подтвердите данные по ссылке» Это безопасно?",
        messages: [
          { role: "user", text: "Маме пришло: «Ваш Kaspi аккаунт заблокирован Подтвердите данные по ссылке» Это безопасно?" },
          { role: "ai", text: "Скорее всего, это мошенники Не открывайте ссылку, не вводите данные карты и никому не отправляйте SMS-коды" },
          { role: "ai", text: "Безопасный шаг: открыть официальный app банка вручную или позвонить в банк по номеру с официального сайта Не звоните по номеру из подозрительного сообщения" }
        ]
      },
      document: {
        label: "Объяснить документ",
        title: "Перевести официальный текст на человеческий язык",
        input: "В документе написано, что нужно обновить персональные данные Что это значит?",
        messages: [
          { role: "user", text: "В документе написано, что нужно обновить персональные данные Что это значит?" },
          { role: "ai", text: "Простыми словами: возможно, нужно обновить ФИО, удостоверение, банковские, налоговые или регистрационные данные Главное - понять срок и список документов" },
          { role: "ai", text: "Следующий шаг: составить чеклист, сохранить официальное уведомление и уточнить срок через официальный сервис или учреждение" }
        ]
      },
      service: {
        label: "Что делать?",
        title: "Получить простой первый шаг",
        input: "Я хочу открыть ИП в Казахстане С чего начать?",
        messages: [
          { role: "user", text: "Я хочу открыть ИП в Казахстане С чего начать?" },
          { role: "ai", text: "Начните с трёх вещей: выберите вид деятельности, зарегистрируйтесь через официальный онлайн-сервис и выберите налоговый режим" },
          { role: "ai", text: "Я могу превратить это в простой чеклист, чтобы вы знали, что подготовить и какие вопросы задать специалисту" }
        ]
      }
    },
    kk: {
      scam: {
        label: "Скамды тексеру",
        title: "Жақыныңыз сілтемені баспай тұрып көмектесіңіз",
        input: "Анама келді: «Kaspi аккаунтыңыз бұғатталды Деректерді сілтеме арқылы растаңыз» Бұл қауіпсіз бе?",
        messages: [
          { role: "user", text: "Анама келді: «Kaspi аккаунтыңыз бұғатталды Деректерді сілтеме арқылы растаңыз» Бұл қауіпсіз бе?" },
          { role: "ai", text: "Бұл алаяқтық болуы мүмкін Сілтемені ашпаңыз, карта деректерін енгізбеңіз және SMS-кодтарды ешкімге жібермеңіз" },
          { role: "ai", text: "Қауіпсіз қадам: банк қосымшасын өзіңіз ашыңыз немесе банкке ресми сайттағы нөмір арқылы хабарласыңыз Күдікті хабарламадағы нөмірге қоңырау шалмаңыз" }
        ]
      },
      document: {
        label: "Құжатты түсіндіру",
        title: "Ресми мәтінді қарапайым тілге аудару",
        input: "Құжатта жеке деректерді жаңарту керек деп жазылған Бұл нені білдіреді?",
        messages: [
          { role: "user", text: "Құжатта жеке деректерді жаңарту керек деп жазылған Бұл нені білдіреді?" },
          { role: "ai", text: "Қарапайым тілмен: аты-жөніңізді, жеке куәлікті, банк, салық немесе тіркеу деректерін жаңарту қажет болуы мүмкін Ең маңыздысы - мерзім мен құжаттар тізімі" },
          { role: "ai", text: "Келесі қадам: чеклист жасау, ресми хабарламаны сақтау және мерзімді ресми сервис немесе мекеме арқылы нақтылау" }
        ]
      },
      service: {
        label: "Не істеу керек?",
        title: "Қарапайым алғашқы қадам алу",
        input: "Қазақстанда ИП ашқым келеді Неден бастаймын?",
        messages: [
          { role: "user", text: "Қазақстанда ИП ашқым келеді Неден бастаймын?" },
          { role: "ai", text: "Үш нәрседен бастаңыз: қызмет түрін таңдаңыз, ресми онлайн-сервис арқылы тіркеліңіз және салық режимін таңдаңыз" },
          { role: "ai", text: "Мен мұны қарапайым чеклистке айналдырып, не дайындау керегін және маманға қандай сұрақ қою керегін көрсете аламын" }
        ]
      }
    }
  };

  if (typeof translations !== "undefined") {
    Object.keys(copy).forEach((lang) => {
      translations[lang] = translations[lang] || {};
      Object.assign(translations[lang], copy[lang]);
    });
  }

  window.getJardemHumanScenario = function (name) {
    const lang = typeof getCurrentLanguage === "function" ? getCurrentLanguage() : "en";
    return window.JARDEM_HUMAN_DEMOS?.[lang]?.[name] || window.JARDEM_HUMAN_DEMOS.en[name];
  };

  document.addEventListener("DOMContentLoaded", () => {
    if (typeof applyTranslations === "function" && typeof getCurrentLanguage === "function") {
      applyTranslations(getCurrentLanguage());
    }
  });
})();
