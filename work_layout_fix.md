# Work Section — Layout Shift Fix Plan

## Problem Diagnosis

The current layout uses a standard **CSS Grid** (`grid-cols-3`) with projects that have mixed `col-span` and `row-span` values:

| Project | col-span | row-span | Aspect ratio |
|---------|----------|----------|--------------|
| VIBRANTEC | 1 | 2 | 9/16 (portrait) |
| NASAYEM STUDIO | 2 | 1 | 16/9 (landscape) |
| NEWA | 1 | 1 | square |
| AL-MORGAN | 1 | 1 | square |

### Why it breaks

CSS Grid calculates **row height implicitly** when `auto-rows` or `grid-auto-rows` is not set. Because `VIBRANTEC` spans 2 rows but its height is driven by `aspect-ratio`, and `NASAYEM STUDIO` + the two square cards also influence row height independently, the browser cannot simultaneously satisfy all the aspect ratios **and** align the spanning item's edges. The result is:

- VIBRANTEC either doesn't fully span its two rows, creating a blank gap
- Or it overshoots, pushing NEWA/AL-MORGAN down
- The border-box effect (gradient-as-border) clips or overflows unpredictably
- On desktop the grid shifts because all 4 items fight over 2 abstract row heights

The screenshot confirms this: VIBRANTEC on the right is taller than the two-row height defined by NASAYEM STUDIO + the square row.

---

## Root Cause

The design intent is a **mosaic/bento layout**, not a uniform grid. Using standard `grid-cols-3` with `col-span`/`row-span` is fragile because:

1. Aspect ratios on children conflict with the grid's implicit row track sizing algorithm
2. There's no explicit row height, so the grid makes a "best guess"
3. The two-row span item cannot simultaneously match the combined height of two independent-aspect-ratio rows

---

## Solution: CSS Grid Template Areas

Replace the current generic grid with **explicit `grid-template-areas` and `grid-template-rows`**. This gives each region a named slot, and row heights can be set explicitly (or in `fr` units) so everything aligns perfectly.

### Target Visual Layout (Desktop)

```
[ NASAYEM STUDIO (wide) ] [ VIBRANTEC (tall) ]
[ AL-MORGAN ]  [ NEWA ]   [                  ]
```

The key insight: **VIBRANTEC's height must equal `NASAYEM height + gap + NEWA height`**. This can only be guaranteed by defining exact row tracks.

---

## Implementation Steps

### Step 1 — Define explicit grid template on the wrapper div

Remove `grid-cols-3 gap-6 md:gap-8` and replace with an inline `style` or a dedicated CSS class that uses:

```
grid-template-areas:
  "nasayem nasayem vibrantec"
  "almorgan newa   vibrantec"

grid-template-columns: 1fr 1fr 1fr
grid-template-rows: auto auto
```

Or, to keep aspect ratios, use `grid-template-rows: 1fr 1fr` and control the total height of the wrapper.

### Step 2 — Remove `aspect-ratio` from child box divs

Instead of relying on `aspect-*` classes inside each project card to define height, let the **grid track define the height** and use `height: 100%` on the inner visual container (the box div). This eliminates the conflict entirely.

### Step 3 — Assign `grid-area` to each project

Each project card in the `projects` array needs a `gridArea` field (e.g., `gridArea: 'nasayem'`), which is applied via `style={{ gridArea: project.gridArea }}` on the card's root `<div>`.

Remove `className` span fields (`col-span-1`, `row-span-2`, etc.) — they become unnecessary.

### Step 4 — Make the inner visual box fill its grid cell

The inner `<div>` that renders the gradient border currently uses `aspect-*` to set its own size. Change it to:
- `width: 100%`
- `height: 100%` (so it fills the grid cell)

This guarantees the visual box always matches the cell, no matter what the grid tracks compute.

### Step 5 — Set a consistent total grid height

To preserve the visual proportions of the original design (portrait on the right, landscape + squares on the left), define the grid's total height explicitly:

```
min-height: 600px   (desktop)
min-height: 900px   (large screens)
```

Then set `grid-template-rows: 1fr 1fr` to split that height evenly between the two rows. This ensures VIBRANTEC's `row-span: 2` exactly matches `row1 + gap + row2`.

### Step 6 — Mobile fallback

On mobile (below `md`), switch back to a single-column layout by using:
- `display: flex; flex-direction: column` (override the grid)
- Each card gets a fixed aspect ratio again (e.g., `aspect-video` or `aspect-square`) since in a single column, aspect-ratio works without conflict

Or use `grid-template-areas` with a different 1-column definition for mobile, where VIBRANTEC is just a single-row portrait card.

---

## Files to Modify

| File | Change |
|------|--------|
| `src/components/home/Work.tsx` | Replace grid container classes with template-areas style. Add `gridArea` to each project definition. Update inner box div to use `h-full` instead of `aspect-*`. |
| `src/data/index.js` *(optional)* | The `projects` array is defined locally inside `Work.tsx`, not in `data/index.js`. No changes needed there. |

---

## What NOT to Change

- The gradient border effect (the `WebkitMask` + background trick) — keep as-is
- The GSAP animation attributes (`data-work-item`) — keep as-is
- The text labels (`h4`, `p`) below each card — keep as-is
- The section padding, heading, and body copy — keep as-is

---

## Summary

The fix is:
1. **Use `grid-template-areas`** instead of `col-span`/`row-span`
2. **Remove `aspect-*` from the inner box** and use `h-full` instead
3. **Define explicit row heights** via `grid-template-rows` and a container `min-height`
4. **Assign `grid-area`** to each project card
5. **Maintain a simple single-column mobile layout** with aspect ratios re-enabled only for mobile
