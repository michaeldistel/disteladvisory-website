---
title: 'Singapore has made your firm responsible for the AI it uses'
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

# Singapore has made your firm responsible for the AI it uses

I hear a version of this story from clients often enough that I can tell it before
they finish.

Friday afternoon at a distributor. The finance manager opens an email from their
largest customer's compliance team. It's a vendor assessment, twelve pages, due
Monday. Question 7 reads "Do you use AI tools to process our data? Describe the safeguards."

She asks around. The sales team has been pasting customer statements into ChatGPT for
months, on personal accounts, to draft chasing emails. The invoice-matching tool in
accounts came from a vendor whose answer to every question is "we are fully
compliant". Nobody can say where the prompts end up or who gets to read them. She has
until Monday to describe safeguards for tools she didn't know were in use.

She assumes this is a paperwork problem, and it would be if what people paste into a
consumer AI account stayed where they put it. Here is what happens to it instead.

In September 2026, 404 Media revealed that OpenAI pays hundreds of contractors to read
real ChatGPT conversations and score the answers. A privacy filter runs first, and the
company admits sensitive details get through. In March 2025 a contractor at a New South
Wales government agency uploaded a spreadsheet to ChatGPT with the names, addresses,
phone numbers and some health details of up to 3,000 flood victims. The agency took six
months to tell them.

In July 2025 more than 4,500 "shared" ChatGPT conversations turned up in Google
results, some with personal details in them. For four months that year a US court also
ordered OpenAI to keep every chat its users had deleted, because of a copyright case.
Samsung found out in 2023 that its engineers had pasted semiconductor source code into
ChatGPT to debug it, and banned the tool. Most firms would have no way of knowing if
the same thing happened to them.

On 20 July 2026 the Singapore Government told all businesses using AI whose problem
this is. Its new guidelines on personal data in generative AI say the firm using an AI
system bears "primary responsibility" for making sure it complies with the Personal
Data Protection Act, whoever built or sold the system. The law itself hasn't changed
since last year. What the guidelines do is rule out the two answers she might have
given on Monday. She can't say the rules for AI aren't settled yet, and she can't say
the vendor told her it was compliant.

I think the government got this right. The vendor can't know what you use the tool for,
or who in your office may paste a statement into it. You're the only one who knows
that, so it has to be yours to manage.

For my clients, that means two quite different jobs.

The first is the sales team on personal ChatGPT accounts, and it's the real exposure.
The guidelines say a general "product improvement" line in a privacy policy doesn't
cover training on customer data, and a consumer account trains by default. The fix is
a business account with training switched off, plus a one-page rule on what staff may
paste in. Both can be in place before Monday.

The second is the agents doing back-office work, such as matching delivery orders to
invoices or checking freight invoices against quotes. If an agent was built properly,
little changes. It already reads the order system and nothing else, and it keeps a log
of what it did. What's usually missing is the paperwork, meaning a purpose statement, a
named owner for the prompts and logs, and a record of the vendor's safeguards. Writing
those up takes about a day, and together they answer question 7.

My view is that these guidelines ask for nothing a properly built AI system doesn't
already do. A good system only sees the data its job needs, and it doesn't train on
your customers' data. So if an AI vendor tells you the new guidelines are hard to meet,
the problem is their product, and I'd buy from someone else.

The full list of obligations and the four questions to ask any AI vendor are in a
two-page checklist. [Download it here](/insights/ai-and-personal-data-checklist).

_Sources: Personal Data Protection Commission (PDPC), Singapore, Advisory Guidelines on
Use of Personal Data in Generative AI, 20 July 2026, read with the Advisory Guidelines on
Use of Personal Data in AI Recommendation and Decision Systems, 1 March 2024. Incidents:
"Project Lily", 404 Media, 14 September 2026; NSW Reconstruction Authority disclosure,
October 2025, reported by iTnews and AAP; shared ChatGPT links indexed by Google, Fast
Company and OpenAI statement, 31 July 2025; preservation order in New York Times v
OpenAI, US District Court SDNY, 13 May 2025 to 26 September 2025; Samsung ban on
generative AI tools, Bloomberg, May 2023._
