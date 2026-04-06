# Design System Document

## 1. Overview & Creative North Star

### The Creative North Star: "The Editorial Architect"

This design system is built on the philosophy of **The Editorial Architect**. It moves beyond the typical corporate template by treating the digital interface as a high-end technical publication. The goal is to convey deep authority through "Precision Minimalism"—where every pixel of whitespace is intentional, and hierarchy is established through typographic scale and tonal depth rather than structural dividers.

To break the "standard" look, the system utilizes **Intentional Asymmetry**. We favor wide-gutter layouts, staggered grid placements, and oversized typography that creates a rhythmic flow across the page. This approach transforms a functional website into a curated experience that feels both human and technologically advanced.

---

## 2. Colors

The color palette is rooted in a high-contrast foundation of pure whites and deep charcoals, punctuated by a commanding blue that signals action and expertise.

### Core Palette

- **Primary (`#0043aa`)**: The authoritative blue used for brand presence.
- **Primary Container (`#1d5bd1`)**: The vibrant action blue used for CTAs.
- **Surface / Background (`#f9f9f9`)**: A slightly off-white base that reduces eye strain and provides a premium "paper" feel.
- **On-Surface (`#1a1c1c`)**: The primary text color, a rich charcoal that provides high legibility.

### The "No-Line" Rule

Standard 1px borders are strictly prohibited for defining sections. Visual boundaries must be achieved through **Background Color Shifts**. For example:

- A hero section on `surface` transitioning into a featured section on `surface-container-low`.
- A navigation bar floating over content using a `backdrop-blur`.

### Surface Hierarchy & Nesting

Treat the UI as a series of stacked physical layers.

- **Base Layer:** `surface` (#f9f9f9)
- **Secondary Section:** `surface-container-low` (#f3f3f3)
- **Elevated Components:** `surface-container-lowest` (#ffffff) cards sitting on a `low` background to create a "pop" without shadows.

### The "Glass & Gradient" Rule

To add soul to the interface, use **Glassmorphism** for floating headers or modal overlays.

- **Glass Token:** `surface` at 80% opacity with a `24px` backdrop-blur.
- **Signature Gradient:** For primary CTAs, apply a subtle linear gradient from `primary` (#0043aa) to `primary_container` (#1d5bd1) at a 135-degree angle. This prevents buttons from looking "flat" and adds a tactile, premium finish.

---

## 3. Typography

The system exclusively utilizes **Inter**, a typeface designed for clarity and technical precision. We leverage its full weight range to create a dramatic editorial hierarchy.

- **Display Scale (`display-lg` to `display-sm`)**: Used for hero headlines. These should be set with tight letter-spacing (-0.02em) and heavy weights to act as a visual anchor.
- **Headline Scale (`headline-lg` to `headline-sm`)**: Used for section headers. These provide a clear entry point for scanning.
- **Title Scale (`title-lg` to `title-sm`)**: Used for card titles and sub-headers.
- **Body Scale (`body-lg` to `body-md`)**: Focused on readability. Use `body-lg` (1rem) for long-form advisory content to ensure an effortless reading experience.
- **Label Scale (`label-md` to `label-sm`)**: Used for small metadata, often in uppercase with increased letter-spacing (+0.05em) for a "technical" aesthetic.

---

## 4. Elevation & Depth

We eschew traditional "box-shadow" styles in favor of **Tonal Layering**.

### The Layering Principle

Depth is achieved by "stacking" the surface-container tiers. Placing a `surface-container-lowest` (#ffffff) card on a `surface-container-low` (#f3f3f3) background creates a natural, soft lift that feels integrated into the environment.

### Ambient Shadows

When an element must float (e.g., a dropdown or a primary modal), use **Ambient Shadows**:

- **Blur:** 40px - 60px.
- **Opacity:** 4% - 6% of the `on-surface` color.
- **Tint:** The shadow should be tinted with a hint of the `primary` color to mimic natural light refraction.

### The "Ghost Border" Fallback

If an element requires a container but a background shift is too heavy, use a **Ghost Border**:

- **Token:** `outline-variant` (#c3c6d6) at 20% opacity.
- **Rule:** Never use 100% opaque borders; they clutter the minimalist layout.

---

## 5. Components

### Buttons

- **Primary**: Gradient of `primary` to `primary_container`, `rounded-md` (0.375rem), white text.
- **Secondary**: `surface-container-highest` background with `primary` text. No border.
- **Tertiary (Ghost)**: No background. Underline appears only on hover.

### Cards

Cards must never have dividers. Separate header and body content using `spacing-6` (1.5rem) of vertical whitespace. Use `surface-container-lowest` for the card body to create a subtle contrast against the main background.

### Input Fields

- **State**: The "Default" state uses a `surface-container-high` background.
- **Focus**: Transitions to a `surface-container-lowest` (pure white) background with a 2px `primary` ghost-border (20% opacity).

### Signature Component: The "Advisory Chip"

Use `label-md` uppercase text inside a `primary_fixed` (#dae2ff) background with `on_primary_fixed` (#001848) text. Use these to categorize technical topics like "AI TRANSFORMATION" or "TECHNICAL STRATEGY."

---

## 6. Do's and Don'ts

### Do:

- **Do** use `spacing-20` (5rem) or `spacing-24` (6rem) between major sections to let the design "breathe."
- **Do** use intentional asymmetry—try aligning text to a 10-column grid while leaving the last 2 columns empty.
- **Do** use high-quality, professional photography with a consistent desaturated or "cool" color grade to match the blue accents.

### Don't:

- **Don't** use 1px solid black or grey lines to separate content. Use whitespace or background shifts.
- **Don't** use standard "drop shadows" with high opacity. They break the high-end editorial feel.
- **Don't** crowd components. If a card feels tight, increase the internal padding using the `spacing-8` (2rem) token.
- **Don't** use generic icon sets. Use thin-stroke, custom SVG icons that match the `outline` token weight.
