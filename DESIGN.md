---
name: Ivo Vieira
description: A research-grade technical datasheet; facts on a ruled grid with a running year column.
colors:
  paper: "oklch(0.985 0.002 240)"
  ink: "oklch(0.21 0.012 250)"
  ink-soft: "oklch(0.47 0.012 250)"
  rule: "oklch(0.87 0.006 250)"
  rule-strong: "oklch(0.21 0.012 250)"
  wash: "oklch(0.955 0.006 240)"
  accent: "oklch(0.47 0.085 200)"
  accent-ink: "oklch(0.985 0.002 240)"
typography:
  display:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 6.4vw, 5.6rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.4rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 2vw, 1.6rem)"
    fontWeight: 600
    letterSpacing: "-0.02em"
  title-item:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  lede:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.12rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Host Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Martian Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: "1.5rem"
    letterSpacing: "0em"
    fontVariation: "'wdth' 75"
    fontFeature: "'tnum' 1"
rounded:
  control: "0.25rem"
spacing:
  row-tight: "0.55rem"
  row: "0.9rem"
  column-gap: "1.5rem"
  gutter: "clamp(1rem, 4vw, 3rem)"
  block: "clamp(3.5rem, 8vw, 6rem)"
components:
  link:
    textColor: "{colors.accent}"
    typography: "{typography.body}"
  lang-control:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.35rem 0.6rem"
  key:
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
  row:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "0.9rem 0"
  block-head:
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "0 0 0.9rem"
---

# Design System: Ivo Vieira

## Overview

**Creative North Star: "The Research Spec Sheet"**

The site reads as a technical datasheet for a person. Facts sit on a strict grid with a key column on the left, so a hiring manager or a collaborator can scan years, roles, papers and stack in seconds. Graphite ink on near-neutral paper, with 1px hairline rules carrying all structure. Density is that of a well-set spec table: generous vertical air between blocks, tight and even rhythm inside them.

Structure comes from rules, not containers. There are no cards, no boxes, no shadows, no fills behind content. One deep-teal accent marks what is actionable (links) and what is a figure (Fig. labels, pipeline markers). Host Grotesk sets all prose and headings; a narrow Martian Mono is reserved for keys and data.

The world refuses the hero-plus-card-grid developer portfolio and any playful metaphor.

**Key Characteristics:**
- Hairlines, not boxes: 1px rules in two weights carry every division.
- A 2fr/10fr key/value row grid runs the whole page.
- Mono only for keys and data (years, labels, DOIs, stack).
- One teal accent, for links and figure markers only.
- Rules draw in left to right on load, once; nothing moves under reduced motion.

## Colors

A near-achromatic graphite-and-paper palette with a single cool teal; every neutral leans faintly blue (hue 240–250) so the sheet reads as cool technical paper, never warm cream. Values flip under `prefers-color-scheme: dark` (dark values in the sidecar); roles stay identical.

### Primary
- **Specimen Teal** (accent): links, link underlines at 40% mix, Fig. labels, DOIs, pipeline step numbers and joint chevrons, the row-hover key marker, focus outline, text selection. Nothing else.

### Neutral
- **Lab Paper** (paper): the page ground. Also the fill behind pipeline joint chevrons so they sit on the rule.
- **Graphite** (ink): all primary text and the strong rules.
- **Graphite Soft** (ink-soft): keys, stack lists, venues, muted org lines, footer.
- **Hairline Grey** (rule): row dividers, intro spec block borders, pipeline cell dividers, the EN/PT control border.
- **Graphite Rule** (rule-strong): the heavier hairline under the top bar, under each block head, top and bottom of the pipeline strip, and above the footer. Same value as ink.
- **Wash** (wash): a pale tonal step reserved for muted/secondary surfaces; not used on the current page.
- **Accent Ink** (accent-ink): text on an accent fill (selection only).

### Named Rules
**The One Teal Rule.** The accent appears only on links and figure markers (plus focus and selection). Never as a fill, heading color, or decoration.

**The Two Hairlines Rule.** Structure uses exactly two rule weights of color, both 1px: Hairline Grey between rows, Graphite Rule to open a block or close the sheet.

## Typography

**Display Font:** Host Grotesk (self-hosted latin woff2, weights 300–800, with ui-sans-serif, system-ui)
**Body Font:** Host Grotesk
**Label/Mono Font:** Martian Mono (wdth axis, set at `font-stretch: 75%`, with ui-monospace)

**Character:** A tight, contemporary grotesk with negative tracking at size carries voice; a condensed mono carries data, like column keys in an instrument spec.

### Hierarchy
- **Display** (500, clamp(2.4rem, 6.4vw, 5.6rem), 0.98): the one-line thesis only, max 18ch, balanced.
- **Headline** (600, clamp(2rem, 4.2vw, 3.4rem), 1): the featured figure title.
- **Title** (600, clamp(1.3rem, 2vw, 1.6rem)): block heads (Selected work, Publications, Experience...), sitting on a Graphite Rule.
- **Title Item** (600, 1.35rem, 1.2): project titles; paper titles run slightly smaller (600, 1.08rem, 1.35, max 72ch).
- **Lede** (400, 1.12rem, 1.55): featured project summary, max 62ch. Contact lede is a larger 500-weight variant (clamp(1.5rem, 3.2vw, 2.4rem), max 28ch).
- **Body** (400, 1rem, 1.55): row values and prose, prose max 66ch.
- **Label** (400 mono, 0.75rem, 1.5rem line, 75% width, tabular figures): keys, years, DOIs, spec keys, stack lists (0.78rem), the EN/PT control.

### Named Rules
**The Mono Is Data Rule.** Martian Mono sets only keys and data: years, key labels, DOIs, stack lists, step numbers, captions, the locale control. Never headings, never prose.

**The No Fake Italic Rule.** Host Grotesk ships no italic; emphasis such as journal venues stays upright rather than synthesized.

## Layout

A single centered sheet, max 82rem, with a fluid gutter (clamp(1rem, 4vw, 3rem)). Every content row is a two-column grid at 48rem and up: a key column of minmax(8rem, 2fr) and a value column of minmax(0, 10fr), gap 0.25rem 1.5rem, padding 0.9rem block. Projects split the value side further at 64rem (2fr / 6fr / 4fr: key, description, stack and links). The featured figure's spec table uses a 7rem key column from 40rem. Below 48rem rows stack, key above value.

Blocks open with clamp(3.5rem, 8vw, 6rem) of top space; the intro opens with clamp(3rem, 9vw, 7rem). The intro spec rows are tighter (0.55rem). The top bar is a wrapping flex line: name left, links and the locale control right.

## Elevation & Depth

Flat. There are no shadows and no tonal layering of content surfaces; depth and grouping come entirely from hairline rules and whitespace.

**Motion.** On load each strong hairline (top bar, intro rows, block heads) draws left to right once: `scaleX(0)` to full over 1.1s with cubic-bezier(0.16, 1, 0.3, 1), staggered by a per-section index (60ms per intro row, 90ms + 150ms per block). Under `prefers-reduced-motion: reduce` the animation is removed and rules are simply present. Link underlines fade from 40% accent to full on hover over 0.2s.

### Named Rules
**The Rules Draw Once Rule.** The only load motion is the rule draw. No fades, slides, or scroll-triggered reveals on content.

## Shapes

Square. Rules are full-width 1px lines; nothing is enclosed. The single radius (0.25rem) belongs to the EN/PT control, the only bordered element on the page. The one recurring geometric mark is the pipeline joint: a 9px square rotated 45° showing only two teal edges, a chevron sitting on the divider.

### Named Rules
**The No Box Rule.** Content is never boxed, carded, or filled. If something needs separation, give it a rule or more space. The locale control is the sole exception.

## Components

### Links
Specimen Teal text with a 1px underline at 0.22em offset, underline at 40% accent mix; on hover the underline goes full color. External links carry an inline arrow-up-right icon at 0.85em. Paper entries are whole-row links whose title turns teal on hover while the rest stays ink.

### Locale Control (EN/PT)
Mono 0.78rem, ink text, 1px Hairline Grey border, 0.25rem radius, 0.35rem 0.6rem padding; border goes to ink on hover. The only bordered element.

### Rows
The key/value unit of the sheet: mono key on the left, Host Grotesk value on the right, Hairline Grey rule on top. The first row after a block head hides its rule so the Graphite Rule above it stands alone. On hover (48rem and up) a 3px × 1rem teal tick appears just left of the key column.

### Block Head
Title type on a full-width Graphite Rule that draws in on load.

### Figure (Fig. 1)
The featured work: key column carries a teal "Fig. 1" label over the year span; value column carries the headline title, lede, the pipeline strip, and a small dl spec table (7rem mono keys, Hairline Grey row rules).

### Pipeline Strip
A hairline process diagram: an ordered list with Graphite Rule top and bottom only, four equal cells from 40rem (stacked below), cells divided by Hairline Grey verticals. Each cell: teal mono step number, bold step name, mono "via" key. Each joint carries the teal chevron. Captioned in mono "Fig. 1." below.

## Do's and Don'ts

### Do:
- **Do** separate everything with 1px hairlines: Hairline Grey between rows, Graphite Rule to open a block.
- **Do** put every fact on the 2fr/10fr key/value row grid, with a mono key on the left.
- **Do** use Martian Mono at 75% width with tabular figures for years, keys, DOIs and stack.
- **Do** reserve Specimen Teal for links and figure markers.
- **Do** draw diagrams in hairlines, like the Fig. 1 pipeline strip: top and bottom rules, thin dividers, teal markers.
- **Do** disable the rule-draw motion under reduced motion.

### Don't:
- **Don't** box content: no cards, fills, borders around content, or shadows. The EN/PT control is the only bordered element.
- **Don't** use mono for headings or prose.
- **Don't** use the accent as a fill, a heading color, or decoration.
- **Don't** add kickers or eyebrow labels above headings; the key column already labels each row.
- **Don't** synthesize italics in Host Grotesk.
- **Don't** reach for a hero-plus-card-grid layout or a playful metaphor.
