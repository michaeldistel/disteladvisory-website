// Manual QA fixture: Technical SEO baseline for issue #1
// Open local dev server (pnpm dev) or preview build and verify each step.

// 1) robots.txt is accessible and crawl is allowed
OPEN /robots.txt
EXPECT status 200
EXPECT body contains "User-agent: *"
EXPECT body contains "Allow: /"
EXPECT body contains "Sitemap: https://disteladvisory.com/sitemap.xml"

// 2) sitemap.xml is accessible and contains core pages
OPEN /sitemap.xml
EXPECT status 200
EXPECT body contains "https://disteladvisory.com/"
EXPECT body contains "https://disteladvisory.com/ai-transformation"
EXPECT body contains "https://disteladvisory.com/fractional-cto"
EXPECT body contains "https://disteladvisory.com/technical-advisory"
EXPECT body contains "https://disteladvisory.com/book"

// 3) Canonical tags are self-referencing on key indexable pages
OPEN /
EXPECT head link[rel="canonical"] href "https://disteladvisory.com/"

OPEN /ai-transformation
EXPECT head link[rel="canonical"] href "https://disteladvisory.com/ai-transformation"

OPEN /fractional-cto
EXPECT head link[rel="canonical"] href "https://disteladvisory.com/fractional-cto"

OPEN /technical-advisory
EXPECT head link[rel="canonical"] href "https://disteladvisory.com/technical-advisory"

OPEN /book
EXPECT head link[rel="canonical"] href "https://disteladvisory.com/book"

// 4) No accidental noindex on money pages
OPEN /ai-transformation
EXPECT head does-not-contain meta[name="robots"][content*="noindex"]

OPEN /fractional-cto
EXPECT head does-not-contain meta[name="robots"][content*="noindex"]

OPEN /technical-advisory
EXPECT head does-not-contain meta[name="robots"][content*="noindex"]

OPEN /book
EXPECT head does-not-contain meta[name="robots"][content*="noindex"]

// 5) Slash and non-slash behaviour is consistent
OPEN /ai-transformation/
EXPECT status is redirect 301
EXPECT location ends-with "/ai-transformation"

OPEN /technical-advisory/
EXPECT status is redirect 301
EXPECT location ends-with "/technical-advisory"
