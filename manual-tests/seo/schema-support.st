// Manual QA fixture: JSON-LD schema support for issue #3
// Run: pnpm build && pnpm preview (or use pnpm dev)
// For each step, use browser DevTools > Elements to inspect <head>,
// or paste the page URL into https://search.google.com/test/rich-results

// -----------------------------------------------------------------------
// 1) Organisation + WebSite schema: present on every page
// -----------------------------------------------------------------------
OPEN /
EXPECT head contains <script type="application/ld+json"> with "@type": "Organization"
EXPECT Organization name is "Distel Advisory"
EXPECT Organization url is "https://disteladvisory.com"
EXPECT Organization contactPoint email is "michael@disteladvisory.com"

EXPECT head contains <script type="application/ld+json"> with "@type": "WebSite"
EXPECT WebSite url is "https://disteladvisory.com"

// Also verify sitewide schema appears on a service page (not just home)
OPEN /fractional-cto
EXPECT head contains "@type": "Organization"
EXPECT head contains "@type": "WebSite"

// -----------------------------------------------------------------------
// 2) Service schema: present on each service page
// -----------------------------------------------------------------------
OPEN /ai-transformation
EXPECT head contains <script type="application/ld+json"> with "@type": "Service"
EXPECT Service name is "AI Transformation"
EXPECT Service serviceType is "AI Consulting"
EXPECT Service provider.name is "Distel Advisory"
EXPECT Service areaServed is "Southeast Asia"

OPEN /fractional-cto
EXPECT head contains "@type": "Service"
EXPECT Service name is "Fractional CTO"
EXPECT Service serviceType is "Technology Consulting"

OPEN /technical-advisory
EXPECT head contains "@type": "Service"
EXPECT Service name is "Technical Advisory"
EXPECT Service serviceType is "Technology Consulting"

// -----------------------------------------------------------------------
// 3) Breadcrumb schema: present on service pages
// -----------------------------------------------------------------------
OPEN /ai-transformation
EXPECT head contains "@type": "BreadcrumbList"
EXPECT BreadcrumbList itemListElement[0].name is "Home"
EXPECT BreadcrumbList itemListElement[1].name is "AI Transformation"

OPEN /fractional-cto
EXPECT head contains "@type": "BreadcrumbList"
EXPECT BreadcrumbList itemListElement[1].name is "Fractional CTO"

OPEN /technical-advisory
EXPECT head contains "@type": "BreadcrumbList"
EXPECT BreadcrumbList itemListElement[1].name is "Technical Advisory"

// -----------------------------------------------------------------------
// 4) FAQ schema: present ONLY on /ai-transformation
// -----------------------------------------------------------------------
OPEN /ai-transformation
EXPECT head contains "@type": "FAQPage"
EXPECT FAQPage mainEntity has at least 5 Question entries
EXPECT each Question has acceptedAnswer.text that is non-empty

// Confirm FAQ schema does NOT appear on pages without FAQ content
OPEN /fractional-cto
EXPECT head does-not-contain "@type": "FAQPage"

OPEN /technical-advisory
EXPECT head does-not-contain "@type": "FAQPage"

OPEN /
EXPECT head does-not-contain "@type": "FAQPage"

// -----------------------------------------------------------------------
// 5) Rich Results Test (optional, requires live URL or public preview)
// -----------------------------------------------------------------------
// Paste https://disteladvisory.com/ai-transformation into:
//   https://search.google.com/test/rich-results
// EXPECT no schema errors
// EXPECT FAQ rich result eligible
// EXPECT Breadcrumb detected
