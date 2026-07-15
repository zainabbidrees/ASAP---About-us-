# ASAP Aerospace & Defense — Design System

Design tokens extracted from the reference build at
`https://asap-themes-design-sprint-blond.vercel.app/about`
(compiled CSS, `:root` custom properties). These are the canonical values —
match them exactly when building or extending any page.

**Register:** Product/brand hybrid — a technical B2B aerospace & defense parts
distributor. Confident, blunt, engineering-led voice. Light theme, blue-gray
ink, single blue accent, red reserved for urgency (AOG).

---

## 1. Color

All colors are authored in **OKLCH**. Light theme only (`color-scheme: light`).

### Ink ramp (primary text + neutrals, blue-gray hue 250)
| Token | OKLCH | Typical use |
|---|---|---|
| `--color-ink-900` | `oklch(18% .02 250)` | Headings, darkest surfaces (`surface-deep`) |
| `--color-ink-800` | `oklch(24% .02 250)` | Body text (default) |
| `--color-ink-700` | `oklch(32% .02 250)` | Strong secondary text, nav links |
| `--color-ink-600` | `oklch(42% .018 250)` | Secondary/supporting copy |
| `--color-ink-500` | `oklch(50% .015 250)` | Muted labels, placeholders |
| `--color-ink-400` | `oklch(62% .012 250)` | Disabled / faint mono labels |
| `--color-ink-300` | `oklch(78% .008 250)` | Body text on dark, hairlines-on-dark |
| `--color-ink-200` | `oklch(88% .006 250)` | Borders, dividers |
| `--color-ink-100` | `oklch(94% .006 250)` | Subtle fills, tag backgrounds |
| `--color-ink-50`  | `oklch(97% .005 250)` | Hover fills on light |

### Surfaces
| Token | OKLCH | Use |
|---|---|---|
| `--color-surface` | `oklch(98.5% .004 90)` | Page background (near-white, faint warm tint) |
| `--color-surface-deep` | `oklch(18% .02 250)` | Dark sections, hero, footer base |

### Accent (blue — single brand accent)
| Token | OKLCH | Use |
|---|---|---|
| `--color-accent` | `oklch(58% .18 255)` | Primary buttons, links, active state |
| `--color-accent-hover` | `oklch(52% .19 255)` | Button/link hover |
| `--color-accent-soft` | `oklch(94% .04 255)` | Accent tint backgrounds (active nav, chips) |
| `--color-accent-ink` | `oklch(28% .1 255)` | Text/icon on accent-soft |

### Warn (red — reserved for AOG / urgency only)
| Token | OKLCH | Use |
|---|---|---|
| `--color-warn` | `oklch(56% .18 28)` | AOG indicators, urgent CTA ("Start an RFQ") |
| `--color-warn-soft` | `oklch(96% .04 28)` | Warn tint background |

> **Contrast rule:** body copy must stay ≥ 4.5:1. On dark surfaces use
> `ink-300` or lighter for body; never `ink-500`/`600` on `surface-deep`.

---

## 2. Typography

Three families on a deliberate contrast axis (display grotesque + humanist body
+ mono for technical data). **Do not** substitute similar sans fonts.

| Token | Stack | Role |
|---|---|---|
| `--font-display` | `Barlow Condensed`, Roboto Flex, ui-sans-serif, sans-serif | Headings h1–h4, big numerals |
| `--font-sans` | `Roboto Flex`, ui-sans-serif, system-ui, sans-serif | Body, UI |
| `--font-mono` | `Roboto Mono`, ui-monospace, "SF Mono", Menlo, monospace | Part numbers, stats, labels, kickers |

> **Display font is Barlow Condensed** (narrow grotesque), NOT regular Barlow.
> The source's Next.js token is *named* `--font-barlow` but its value resolves to
> `"Barlow Condensed"`. The source ships only **weights 500 and 700** for it —
> do not use 800 (it will synth-bold and look wrong). Roboto Flex is variable 100–1000.

### Type scale
| Token | Size |
|---|---|
| `--text-xs` | 0.75rem |
| `--text-sm` | 0.875rem |
| `--text-base` | 1rem |
| `--text-lg` | 1.125rem |
| `--text-xl` | 1.25rem (lh `calc(1.75/1.25)`) |
| `--text-2xl` | 1.5rem (lh `calc(2/1.5)`) |
| `--text-3xl` | 1.875rem |
| `--text-4xl` | 2.25rem |

Display headings use `clamp()` above the scale — **ceiling ≤ 6rem** for hero h1.

### Weights
`--font-weight-normal: 400` · `medium: 500` · `semibold: 600` · `bold: 700`
(Barlow Condensed display ships **500 and 700 only** — cap headings/numerals at 700.)

### Tracking & leading
| Token | Value |
|---|---|
| `--tracking-tight` | -0.025em |
| `--tracking-wide` | 0.025em |
| `--tracking-wider` | 0.05em |
| `--leading-tight` | 1.25 |
| `--leading-snug` | 1.375 |
| `--leading-relaxed` | 1.625 |

> Display letter-spacing floor is **-0.04em** (do not go tighter).
> Mono kickers/labels use `tracking-wider` + uppercase.
> Cap prose line length at 65–75ch; use `text-wrap: balance` on h1–h3.

---

## 3. Spacing

Base unit `--spacing: 0.25rem`. Named scale (non-linear — used for rhythm):

| Token | Value | | Token | Value |
|---|---|---|---|---|
| `--space-1` | 0.25rem | | `--space-6` | 2rem |
| `--space-2` | 0.5rem  | | `--space-7` | 3rem |
| `--space-3` | 0.75rem | | `--space-8` | 4rem |
| `--space-4` | 1rem    | | `--space-9` | 6rem |
| `--space-5` | 1.5rem  | | `--space-10` | 8rem |

---

## 4. Radius

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 4px | Chips, small tags |
| `--radius-md` | 6px | Buttons, inputs |
| `--radius-lg` | 10px | Cards, tiles |
| `--radius-xl` | 14px | Panels, large cards |
| `--radius-2xl` | 1rem (16px) | Feature containers |

> Card radius ceiling is 16px — do not over-round cards. Pills (999px) for tags/buttons only.

---

## 5. Layout / containers

| Token | Value |
|---|---|
| `--container-narrow` | 720px |
| `--container-default` | 1280px |
| `--container-wide` | 1440px |
| `--header-height` | 120px |
| (Tailwind md/xl/2xl/3xl/4xl) | 28 / 36 / 42 / 48 / 56rem |

Recommended gutter: `clamp(1.15rem, 4vw, 2.5rem)`.
Responsive grids without breakpoints: `repeat(auto-fit, minmax(280px, 1fr))`.

---

## 6. Elevation

| Token | Value |
|---|---|
| `--shadow-hairline` | `inset 0 0 0 1px var(--color-ink-200)` |
| `--shadow-focus` | `0 0 0 2px var(--color-accent)` |

Extended (used in this project's about page):
`--shadow-sm: 0 1px 2px oklch(18% .02 250 / .08)` ·
`--shadow-md: 0 6px 16px oklch(18% .02 250 / .10)` ·
`--shadow-lg: 0 18px 40px oklch(18% .02 250 / .16)`

> Never pair a 1px border with a soft ≥16px-blur shadow on the same element.

---

## 7. Motion

| Token | Value |
|---|---|
| `--ease-out` (source) | `cubic-bezier(0,0,.2,1)` |
| exp ease-out (this project) | `cubic-bezier(.16,1,.3,1)` |
| `--default-transition-duration` | 0.15s |
| `--default-transition-timing-function` | `cubic-bezier(.4,0,.2,1)` |
| `--animate-pulse` | `pulse 2s cubic-bezier(.4,0,.6,1) infinite` |

Ease **out** only (no bounce/elastic). Every animation needs a
`@media (prefers-reduced-motion: reduce)` fallback. Reveal animations must
enhance already-visible content, never gate visibility.

---

## 8. Copy / brand voice

- Blunt, engineering-led, confident. Short declaratives.
  ("Fifteen minutes is the bar." / "Ready to put us on the clock?")
- Lead with the number/SLA: **15-minute RFQ SLA, 24/7**.
- Scale proof points: 2B part numbers · 5,100+ manufacturers · 100M parts sold · 60K customers.
- Accreditations: AS9120:2015 · ISO 9001:2015 · FAA AC 00-56B · CAGE 6RE77.
- Red = AOG/urgency only. Blue = everything else. Never decorative color.

---

## 9. Ready-to-paste `:root`

```css
:root{
  color-scheme: light;

  /* Type */
  --font-sans: "Roboto Flex", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "Roboto Mono", ui-monospace, "SF Mono", Menlo, monospace;
  --font-display: "Barlow Condensed", "Roboto Flex", ui-sans-serif, sans-serif;

  /* Ink ramp */
  --color-ink-900: oklch(18% .02 250);
  --color-ink-800: oklch(24% .02 250);
  --color-ink-700: oklch(32% .02 250);
  --color-ink-600: oklch(42% .018 250);
  --color-ink-500: oklch(50% .015 250);
  --color-ink-400: oklch(62% .012 250);
  --color-ink-300: oklch(78% .008 250);
  --color-ink-200: oklch(88% .006 250);
  --color-ink-100: oklch(94% .006 250);
  --color-ink-50:  oklch(97% .005 250);

  /* Surfaces */
  --color-surface: oklch(98.5% .004 90);
  --color-surface-deep: oklch(18% .02 250);

  /* Accent (blue) */
  --color-accent: oklch(58% .18 255);
  --color-accent-hover: oklch(52% .19 255);
  --color-accent-soft: oklch(94% .04 255);
  --color-accent-ink: oklch(28% .1 255);

  /* Warn (red — AOG/urgency only) */
  --color-warn: oklch(56% .18 28);
  --color-warn-soft: oklch(96% .04 28);

  /* Type scale */
  --text-xs:.75rem; --text-sm:.875rem; --text-base:1rem; --text-lg:1.125rem;
  --text-xl:1.25rem; --text-2xl:1.5rem; --text-3xl:1.875rem; --text-4xl:2.25rem;

  /* Weights */
  --font-weight-normal:400; --font-weight-medium:500;
  --font-weight-semibold:600; --font-weight-bold:700;

  /* Tracking / leading */
  --tracking-tight:-.025em; --tracking-wide:.025em; --tracking-wider:.05em;
  --leading-tight:1.25; --leading-snug:1.375; --leading-relaxed:1.625;

  /* Spacing */
  --spacing:.25rem;
  --space-1:.25rem; --space-2:.5rem; --space-3:.75rem; --space-4:1rem;
  --space-5:1.5rem; --space-6:2rem; --space-7:3rem; --space-8:4rem;
  --space-9:6rem; --space-10:8rem;

  /* Radius */
  --radius-sm:4px; --radius-md:6px; --radius-lg:10px; --radius-xl:14px; --radius-2xl:1rem;

  /* Containers */
  --container-narrow:720px; --container-default:1280px; --container-wide:1440px;
  --header-height:120px;

  /* Elevation */
  --shadow-hairline: inset 0 0 0 1px var(--color-ink-200);
  --shadow-focus: 0 0 0 2px var(--color-accent);

  /* Motion */
  --ease-out: cubic-bezier(0,0,.2,1);
  --default-transition-duration:.15s;
  --default-transition-timing-function: cubic-bezier(.4,0,.2,1);
}
```

---

*Extracted from the reference build's compiled CSS `:root`. Values are the
source of truth; the about page in `site/about.html` is built against them.*
