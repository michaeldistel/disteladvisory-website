---
title: 'AI has made the forgotten API the cheapest way into a business'
slug: ai-attacks-insecure-apis
date: 2026-11-19
status: published
author: Michael Distel
summary: "A tracking page built in 2019 shows any customer's shipment if you change the job number. For years nobody bothered to look. On 12 November 2026 the Singapore Government warned about insecure APIs, and AI is the reason that warning matters more now."
seo:
  title: 'Insecure APIs and AI attacks: PDPC and CSA advisory 2026 | Distel'
  description: 'The PDPC and CSA joint advisory of 12 November 2026 warns that insecure APIs are exposing personal data. AI agents now scan for these flaws automatically, so an old customer portal is no longer too small to be found. What a trading or logistics firm should check first.'
  target_queries:
    - 'PDPC CSA advisory insecure APIs'
    - 'how do hackers use AI to find vulnerabilities'
    - 'API security checklist small business Singapore'
    - 'broken object level authorisation example'
faq:
  - q: 'What did the PDPC and CSA advisory on insecure APIs say?'
    a: 'Published on 12 November 2026, it says APIs that return personal data must be secured for as long as they run. It asks firms to keep an inventory of their APIs, return only the data each one needs, check authorisation on every record, protect API keys, log access and test after every change. It cites the Tech in Asia and Marina Bay Sands breaches.'
  - q: 'Are AI tools being used to attack company systems?'
    a: "Yes. In November 2025 Anthropic reported a state-backed group using its Claude Code tool against about 30 organisations, with the AI doing an estimated 80 to 90 per cent of the work. In November 2026 Google's threat intelligence team reported attackers automating discovery and exploitation with no human involved, including scanning of organisations across Asia."
  - q: 'How can I check whether my customer portal has the most common API flaw?'
    a: "Log in as one customer and change the customer, order or job number in the address bar or the request. If another customer's record appears, the portal has Broken Object Level Authorisation, the flaw the 12 November 2026 PDPC and CSA advisory describes, and automated scanners test for it first. Ask whoever built the portal to fix it before anything else."
---

# AI has made the forgotten API the cheapest way into a business

I hear a version of this from operations heads more often than I'd like.

A freight forwarder put up a shipment tracking page for its customers in 2019. A
contractor built it, it worked, and nobody has touched it since. A customer types in a
job number and sees the consignee, the delivery address and the contact person's mobile
number. Change the job number by one and you see somebody else's shipment. The
contractor has moved on, and the page still logs in to the database with the account it
was set up with.

For years that page was safe in practice because nobody looked. Finding the flaw meant a
person probing one company's website by hand, and a forwarder's tracking page wasn't
worth their afternoon.

On 12 November 2026 the Singapore Government published a [joint advisory on insecure
APIs](https://www.csa.gov.sg/alerts-and-advisories/advisories/ad-2026-016/), the connections that let one system pull data out of another. A day later it said
a spate of recent breaches came from "opportunistic attacks exploiting a range of common
vulnerabilities in IT systems". Both cases the advisory points to are old mistakes. In
2024 someone used an old endpoint at Tech in Asia that didn't check authorisation tokens
to scrape the data of about 220,000 users. At Marina Bay Sands an API identifier was
left out during a 2023 software migration, the data of 665,495 customers was exposed,
and the regulator fined it S$315,000 in October 2025.

What the advisory doesn't say is why this is happening more often now. I think it's
because the afternoon of probing has become free. In November 2025 Anthropic reported
that a state-backed group had used its Claude Code tool to attack about 30
organisations, with the AI doing an estimated 80 to 90 per cent of the work. This month
Google's threat intelligence team reported attackers running discovery and exploitation
with no human involved at all, and one attacker using an open-source AI framework to
scan organisations across Asia between August and October. An agent doesn't need your
tracking page to be worth its time, because it checks every company in the region
overnight and keeps whatever it finds.

For my clients that turns the question from whether anyone would bother with them into
what they've left facing the internet. In a trading or logistics firm the answer is
usually longer than the IT person expects. It includes the tracking or order portal, the
EDI link to a forwarder, the online shop plug-in that pushes stock into AutoCount, and
the API keys kept in a shared spreadsheet that former staff could still use.

You can test the worst of it this week without hiring anyone. Log in to your own portal
as one customer and change the number in the address bar. If another customer's record
appears, that's the flaw the advisory calls "Broken Object Level Authorisation", and it's
the first thing an automated scanner tries. Then ask whoever built each connection which
key it uses and when that key was last changed.

When we build an agent that reads an order system, it gets its own key for that one
system and every request it makes is logged, so the inventory the advisory asks for
already exists.

I'm not worried that AI makes attacks cheaper, because the same tools will run the same
scan on your own systems for the cost of a subscription, and the firms that get hurt
will be the ones that let an attacker run it first. If you'd like a second pair of eyes
on what you have facing the internet,
[book a quick intro call](https://distel.sg/ai-transformation).

_Sources: Personal Data Protection Commission (PDPC) and Cyber Security Agency of
Singapore (CSA), [Joint Advisory on Data Protection Risks Arising from Insecure APIs](https://www.csa.gov.sg/alerts-and-advisories/advisories/ad-2026-016/), 12
November 2026; PDPC, Statement on Data Breaches Reported in the Past Week, 13 November 2026. Incidents: Tech in Asia notification to the PDPC, 7 June 2024; [PDPC decision on
Marina Bay Sands Pte. Ltd., \[2025\] SGPDPC 6](https://www.pdpc.gov.sg/all-commissions-decisions/2025/10/breach-of-the-protection-obligation-by-marina-bay-sands-pte-ltd), 28 October 2025; Anthropic, Disrupting the
first reported AI-orchestrated cyber espionage campaign, November 2025; Google Threat
Intelligence Group findings reported by Security Affairs, 16 November 2026._
