---
title: 'The Singapore Government has decided who is responsible for AI. It is you.'
slug: pdpc-generative-ai-guidelines-deployers
date: 2026-10-25
status: published
author: Michael Distel
summary: "A vendor questionnaire lands, nobody knows which AI tools the staff are using, and the software vendor says 'we are compliant'. On 20 July 2026 the Singapore Government settled who owns that mess. I think they got it right."
download: '2026-10-25 - Distel - AI and Personal Data Checklist.pdf'
seo:
  title: 'PDPC generative AI guidelines 2026: what a business using AI must do | Distel'
  description: "Singapore's PDPC guidelines of 20 July 2026 make the firm that uses an AI tool responsible for personal data, not the vendor. What that means for staff on ChatGPT and for back-office AI agents, with a checklist."
  target_queries:
    - 'PDPC generative AI guidelines'
    - 'is it safe to put customer data in ChatGPT Singapore'
    - 'PDPA AI tools staff'
    - 'pdpc ai training notification rules'
faq:
  - q: 'Is it safe to put customer data into ChatGPT?'
    a: 'Not on a personal account. Consumer ChatGPT uses conversations for training by default, OpenAI contractors read a sample of real conversations, and a US court ordered deleted chats kept for four months in 2025. Use a business account with training switched off, and give staff a written rule on what they may paste in.'
  - q: 'Does the PDPA apply when my staff use AI tools?'
    a: "Yes. The PDPC's guidelines of 20 July 2026 say the firm using an AI system bears primary responsibility for meeting the Personal Data Protection Act, whoever built or sold the system. Prompts, uploads and outputs that contain personal data are personal data in your control."
  - q: "What do the PDPC's 2026 generative AI guidelines require of a business that uses AI?"
    a: "State the purpose of each AI system, give it only the data that purpose needs, name an owner for its prompts and logs, tell staff in writing what they may put in, keep a record of the vendor's safeguards, and review all of it when the tool gains new abilities. Agents that act across systems need role-based access limits and a point at which they hand over to a person."
---

# The Singapore Government has decided who is responsible for AI. It is you.

I hear a version of this story from clients often enough that I can tell it before
they finish.

Friday afternoon at a distributor. The finance manager opens an email from their
largest customer's compliance team. It is a vendor assessment, twelve pages, due
Monday. Question 7 reads "Do you use AI tools to process our data? Describe the safeguards."

She asks around. The sales team has been pasting customer statements into ChatGPT for
months, on personal accounts, to draft chasing emails. The invoice-matching tool in
accounts came from a vendor whose answer to every question is "we are fully
compliant". Nobody can say where the prompts go, how long they are kept, or who reads
them. She has until Monday to describe safeguards for tools she did not know were in
use.

She assumes this is a paperwork problem. It would be, if the things people paste into
a consumer AI account stayed where they were put. They do not.

- **People read them.** In September 2026, 404 Media revealed that OpenAI pays hundreds
  of contractors to read real ChatGPT conversations and score the answers. A privacy
  filter runs first, and the company admits sensitive details get through it.
- **They leak.** In March 2025 a contractor at a New South Wales government agency
  uploaded a spreadsheet to ChatGPT with the names, addresses, phone numbers and some
  health details of up to 3,000 flood victims. The agency took six months to tell them.
- **They end up in search engines.** In July 2025 more than 4,500 "shared" ChatGPT
  conversations turned up in Google results, some with personal details in them.
- **They cannot always be deleted.** For four months in 2025 a US court ordered OpenAI
  to keep every chat its users had deleted, because of a copyright case.

Samsung learned this in 2023, when engineers pasted semiconductor source code into
ChatGPT to debug it. The company banned the tool. Most firms never find out.

On 20 July 2026 the Singapore Government told all businesses using AI whose problem
this is. Its new guidelines on personal data in generative AI say that the firm using
an AI system bears "primary responsibility" for making sure it complies with the
Personal Data Protection Act, whoever built or sold the system. The law itself is the
same as it was last year. What the guidelines do is close off the two answers she
might have given on Monday. She cannot say the rules for AI are not settled yet, and
she cannot say the vendor told her it was compliant.

I think the government got this right. The vendor cannot know what you use the tool
for, which data it should see, or who in your office may paste a statement into it.
Only you know that, so only you can own it.

For my clients, that responsibility splits into two very different jobs.

The first is the sales team on personal ChatGPT accounts, and it is the real exposure.
The guidelines say a general "product improvement" line in a privacy policy does not
cover training on customer data, and a consumer account trains by default. The fix is
a business account with training switched off, and a one-page rule on what staff may
paste in. That is an afternoon's work, and it can be done before Monday.

The second is the agents doing back-office work, such as matching delivery orders to
invoices, clearing reconciliation breaks and checking freight invoices against quotes. If an agent
was built properly, little changes. It already reads the order system and nothing
else, logs what it did, and stops at an unfamiliar counterparty. What is usually
missing is the paperwork. A purpose statement, a named owner for the prompts and logs,
and a record of the vendor's safeguards. That is a day's work, and it is the answer to
question 7.

My view is that these guidelines ask for nothing a properly built AI system does not
already do. It reads only the data its job needs, it keeps a log, and it does not
train on your customers' data. So if an AI vendor tells you the new guidelines are
hard to meet, the problem is their product, and you should buy from someone else.

The full list of obligations, and the four questions to ask any AI vendor, are in a
two-page checklist. [Download it here](/insights/ai-and-personal-data-checklist).

_Sources: Personal Data Protection Commission (PDPC), Singapore, Advisory Guidelines on
Use of Personal Data in Generative AI, 20 July 2026, read with the Advisory Guidelines on
Use of Personal Data in AI Recommendation and Decision Systems, 1 March 2024. Incidents:
"Project Lily", 404 Media, 14 September 2026; NSW Reconstruction Authority disclosure,
October 2025, reported by iTnews and AAP; shared ChatGPT links indexed by Google, Fast
Company and OpenAI statement, 31 July 2025; preservation order in New York Times v
OpenAI, US District Court SDNY, 13 May 2025 to 26 September 2025; Samsung ban on
generative AI tools, Bloomberg, May 2023._
