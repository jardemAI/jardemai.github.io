# Järdem AI

## Open AI help for Central Asia

**Järdem AI is an open-source, privacy-first AI assistant that helps people in Central Asia understand documents, avoid scams, and navigate government, legal, financial, and everyday high-stakes situations in their own languages.**

Built for Kazakh, Russian, and mixed-language users.
Designed for people, NGOs, civic-tech teams, and developers building public-interest AI for underserved communities.

[![Try the demo](https://img.shields.io/badge/Try%20the%20demo-Järdem%20AI-8ef5d3?style=for-the-badge)](https://jardemai.github.io)

---

## AI should understand the people the internet usually forgets

Most AI products are built for English-speaking, always-online, high-income users.

But in Central Asia, people often deal with:

* confusing government services;
* legal and bureaucratic language that is hard to understand;
* scam messages, fake bank links, and social engineering;
* mixed Kazakh/Russian communication;
* limited access to trusted legal, financial, or digital help;
* unstable internet access in some regions;
* sensitive personal data that should not be sent to closed AI systems.

Järdem AI is being built for this reality.

---

## What Järdem AI can do

### 1. Explain official documents in simple language

Upload or paste a document, message, or government instruction.
Järdem AI explains what it means, what steps matter, and what to do next.

**Example:**
“Explain this divorce certificate process in simple Russian.”
“Қарапайым тілмен түсіндірші: бұл құжат не туралы?”

---

### 2. Detect likely scams

Paste a suspicious SMS, WhatsApp message, email, or link.
Järdem AI checks for common scam patterns and explains the risk.

**Example:**
“Is this message from my bank real?”
“Менің атымнан несие рәсімделді дейді. Бұл алаяқтық па?”

---

### 3. Guide people through public services

Järdem AI gives step-by-step explanations for everyday administrative tasks: changing documents, opening an individual business, applying for certificates, understanding fines, benefits, registrations, and official procedures.

It does not replace lawyers or government institutions.
It helps people understand where to start and what questions to ask.

---

### 4. Work with local language and mixed speech

People do not always speak in perfect formal language.
They switch between Kazakh, Russian, slang, screenshots, voice notes, and short messy questions.

Järdem AI is designed for real user behavior, not perfect prompts.

---

### 5. Run open and local-first

The long-term goal is to make Järdem AI usable without depending on a single closed API.

We are building toward:

* open-source code;
* open datasets where legally possible;
* open evaluation tasks for Central Asian languages;
* local-first deployment;
* lightweight models for privacy-sensitive use cases;
* reusable infrastructure for other public-interest AI projects.

---

## Demo scenarios

### Scam check

**User:**
“Мне пришло сообщение: ‘Ваш Kaspi аккаунт заблокирован. Перейдите по ссылке и подтвердите данные’. Это правда?”

**Järdem AI:**
This looks suspicious. Do not open the link or enter your card details. Real banks usually do not ask users to confirm sensitive data through random links. Open the official app manually, check notifications there, and contact support through the official channel.

Risk level: High
Recommended action: Do not click. Report/block sender.

---

### Document simplification

**User:**
“Объясни простыми словами, что значит этот текст из официального документа.”

**Järdem AI:**
This document says that you need to update your personal documents after changing your surname. The important part is the deadline and the list of documents you may need to replace. Here are the steps in plain language…

---

### Public-service navigation

**User:**
“Я хочу открыть ИП в Казахстане. Что делать?”

**Järdem AI:**
Here is the simple version:

1. Choose the activity type.
2. Register through eGov or the tax portal.
3. Choose the tax regime.
4. Save the registration notification.
5. Check whether you need a cash register or additional permits.

I can also help you prepare a checklist.

---

## Who this helps

Järdem AI is for:

* citizens who need clear explanations of official processes;
* elderly users and people with low digital literacy;
* people vulnerable to online scams;
* students, migrants, families, and small business owners;
* NGOs and civic-tech teams;
* open-source developers working on Central Asian language tools;
* public-interest AI builders who need reusable local infrastructure.

---

## Why open?

If Järdem AI were closed, the people who would lose most are the same people already underserved by mainstream AI: low-resource language speakers, civic-tech builders, NGOs, educators, and independent developers in Central Asia.

A closed version would make local public-interest AI depend on one company, one API, and one private backend.

An open version lets others inspect, improve, translate, adapt, and deploy the system for their own communities.

---

## What we are releasing

The project is being developed as an open foundation for practical AI in Central Asia.

Planned public releases:

* assistant interface;
* retrieval pipeline for trusted public sources;
* safety and refusal logic for legal, medical, and financial topics;
* multilingual prompt templates;
* Kazakh/Russian mixed-language evaluation examples;
* scam-detection examples;
* document simplification dataset;
* deployment guide for local and lightweight setups.

---

## Roadmap

### Phase 1 — Public demo

* Landing page
* Interactive demo scenarios
* GitHub repository
* Initial prompt and retrieval pipeline
* Kazakhstan-focused use cases

### Phase 2 — Open prototype

* Web assistant
* Scam-check module
* Document explanation module
* Public-service navigation module
* Small evaluation dataset

### Phase 3 — Local-first AI

* Lightweight model experiments
* Offline mode for selected tasks
* Kazakh/Russian mixed-language benchmark
* Community contributions

### Phase 4 — Central Asia expansion

* Uzbek and Kyrgyz support
* NGO/civic-tech partnerships
* More public-service datasets
* Developer tools and documentation

---

## Built for real-world questions

People should not need to write perfect prompts to get help.

They should be able to ask:

“Это мошенники?”
“Что значит этот документ?”
“Куда мне идти?”
“Какие документы нужны?”
“Мынау не деген сөз?”
“Explain this like I’m not a lawyer.”
“Can I trust this message?”
“What should I do next?”

And get a clear, careful, useful answer.

---

## Status

Järdem AI is currently in early prototype stage.

We are building the first public demo and open-source repository for the Sentient Grants program.

The first version focuses on Kazakhstan and three core use cases:

1. scam detection;
2. document simplification;
3. public-service navigation.
