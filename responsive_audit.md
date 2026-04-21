# Nasayem Studio — Responsive Design Audit

> Breakpoints used: `sm` = 640px, `md` = 768px, `lg` = 1024px (Tailwind defaults).
> The site uses a **mobile-first** approach. Issues below are primarily observed on screens below 768px (mobile) unless noted.

---

## 1. Hero Section (`Hero.tsx`)

### Issues

| # | Issue | Severity |
|---|-------|----------|
| 1 | The **left/right decorative images** are `w-48` on mobile. At small screen widths (≤375px) they collide with the centered text, making the title hard to read. | 🔴 High |
| 2 | The **watermark image** uses a hard-coded negative offset (`-top-40`) and a fixed `right-10`. On mobile it will clip or overlap incorrectly since no mobile variant is defined for these values. | 🔴 High |
| 3 | The **CTA button** has `px-10 py-4` — adequate on desktop, but there is no size adjustment for smaller screens. It should shrink slightly on mobile. | 🟡 Medium |
| 4 | `min-h-[calc(100vh-65px)]` — the `65px` is hardcoded. If the navbar ever changes height, the hero height will be incorrect. | 🟡 Medium |

### Steps to Fix
1. Reduce left/right image width on mobile to `w-24` or hide them below a certain breakpoint using `hidden sm:block` to avoid text overlap.
2. Replace the watermark's fixed positioning with responsive values — use `sm:-top-20 md:-top-40` and `right-4 md:right-10`, and reduce the width on mobile to something like `w-32 md:w-[650px]`.
3. Add a slightly smaller padding to the CTA button on mobile using `px-6 py-3 md:px-10 md:py-4`.
4. Consider using a CSS variable or a `--navbar-height` value via the `Container` component instead of hardcoding `65px`.

---

## 2. Philosophy Section (`Philosophy.tsx`)

### Issues

| # | Issue | Severity |
|---|-------|----------|
| 1 | The section has **no vertical padding** (`py-*`) defined — only the grid gap provides spacing. On mobile where the grid is stacked, the section appears cramped at the top and bottom compared to other sections. | 🔴 High |
| 2 | The philosophy image (`Philosophy.png`) is `1.8MB` — it has no lazy loading attribute (`loading="lazy"`), causing a performance hit especially on mobile connections. | 🟡 Medium |
| 3 | The absolute decorative numbers (`.absolute left-4`, `.absolute right-4`) are positioned at `bottom-4`. In single-column mobile layout, they can overlap content if the section is short. | 🟡 Medium |

### Steps to Fix
1. Add `py-24 md:py-32` to the section element, consistent with other sections.
2. Add `loading="lazy"` to the philosophy portrait `<img>` tag.
3. Add `relative` positioning context and adjust the decorative numbers to use `bottom-2` (or hide them on mobile with `hidden md:block`) so they don't overlap content.

---

## 3. Work Section (`Work.tsx`)

### Issues

| # | Issue | Severity |
|---|-------|----------|
| 1 | The grid is `md:grid-cols-3` — on mobile it stacks to a single column. The projects defined with `col-span-2` or `row-span-2` lose their visual structure, resulting in a plain single-column list with no visual hierarchy. | 🔴 High |
| 2 | The heading block `mb-20 md:w-1/2 ml-auto` — on mobile `ml-auto` has no effect (full width), but `mb-20` (80px) is quite large for a small screen. | 🟡 Medium |
| 3 | Aspect ratios (`aspect-[9/16]`, `aspect-[16/9]`, `aspect-square`) are applied unconditionally. On a single-column mobile layout, a `9/16` portrait card will appear very tall. | 🟡 Medium |

### Steps to Fix
1. Consider switching to a 2-column grid on `sm` breakpoint with `sm:grid-cols-2` to preserve some visual structure before reaching the full desktop 3-col layout.
2. Reduce the heading's bottom margin to `mb-10 md:mb-20`.
3. Override the `aspect-[9/16]` card on mobile to `aspect-[4/3]` or `aspect-square` to prevent extreme vertical height.

---

## 4. Services Section (`Services.tsx`)

### Issues

| # | Issue | Severity |
|---|-------|----------|
| 1 | The `md:flex-row-reverse` pattern works fine, but on mobile the layout stacks (flex-col). The service title button and the description panel both go full-width. The **description panel** has `h-36 md:h-48` — this fixed height can cut off content on small screens, particularly for the Arabic locale which has longer text. | 🟡 Medium |
| 2 | The corner service image (absolutely positioned) uses `w-32 md:w-48`. On mobile, this can significantly overlap the description text. | 🟡 Medium |
| 3 | The Sun/Moon toggle button (`absolute top-6 left-6`) is fine on desktop but sits very close to the edge of the Container padding on small screens. | 🟢 Low |

### Steps to Fix
1. Change the description panel's height to `min-h-[8rem] md:h-48` (using `min-h` instead of fixed `h`) so it can grow with content.
2. Reduce the corner image size on mobile: `w-20 md:w-32 lg:w-48`, or hide it on mobile (`hidden md:block`) to avoid text overlap.
3. Adjust the toggle button position to `top-12 left-4 md:top-6 md:left-6` to clear the container edge.

---

## 5. About Section (`About.tsx`)

### Issues

| # | Issue | Severity |
|---|-------|----------|
| 1 | The left column is `aspect-square` — on mobile this creates a large square area dedicated to the image before the user can see any text. Since the image is decorative, this forces the user to scroll significantly before reaching the substantive content. | 🟡 Medium |
| 2 | The grid gap is `gap-4` — on mobile, this is fine, but the section spacing is large (`py-32`). The content stack may look disconnected on mobile. | 🟢 Low |

### Steps to Fix
1. On mobile, reduce the image container aspect ratio or limit its max height: add `max-h-64 md:max-h-none` to prevent it from being too dominating. Alternatively, reverse the column order on mobile so text appears first (using `order-2 md:order-1` on the image and `order-1 md:order-2` on the text).
2. Consider `py-16 md:py-32` for a tighter mobile spacing.

---

## 6. Process Section (`Process.tsx`)

### Issues

| # | Issue | Severity |
|---|-------|----------|
| 1 | The step numbers are `text-[10rem] md:text-[12rem]` — on mobile `10rem = 160px` is extremely large. On a 375px wide phone, this number takes up nearly half the screen width and causes significant overflow risk. | 🔴 High |
| 2 | `gap-x-24 gap-y-24` in the grid — on mobile (single column), the `gap-x` is irrelevant but `gap-y-24` (96px) is enormous between stacked items compounding with the large numbers. The effective gap between visible step content is excessive. | 🟡 Medium |
| 3 | The section uses `mb-32` for the heading — on mobile this is 128px, which is very large. | 🟡 Medium |

### Steps to Fix
1. Reduce the number font size to `text-[6rem] md:text-[10rem] lg:text-[12rem]` to prevent overflow on small screens.
2. Adjust vertical gap to `gap-y-12 md:gap-y-24` so stacked mobile cards are not separated by 96px.
3. Reduce the heading margin to `mb-12 md:mb-32`.

---

## 7. CallToAction Section (`CallToAction.tsx`)

### Issues

| # | Issue | Severity |
|---|-------|----------|
| 1 | The CTA box uses `aspect-square` on mobile — it becomes a large square element. Combined with the `p-12` padding, it may look disproportionate on small screens. | 🟡 Medium |
| 2 | `gap-16` in the grid on mobile means there's an 64px gap below the text and above the CTA box — no responsive reduction is specified. | 🟢 Low |

### Steps to Fix
1. Reduce the CTA box padding on mobile to `p-6 md:p-12` and adjust the aspect ratio with `aspect-[4/3] md:aspect-square md:aspect-auto`.
2. Add `gap-8 md:gap-16` to reduce the mobile gap between text and CTA box.

---

## 8. BannersMarquee (`BannersMarquee.tsx`)

### Issues

| # | Issue | Severity |
|---|-------|----------|
| 1 | Logo images are `w-24 sm:w-32 md:w-40 lg:w-52` — at mobile widths `w-24` (96px) is fine. The `gradientWidth={100}` may be too large relative to the viewport on very small screens, masking too many logos. | 🟢 Low |

### Steps to Fix
1. Make the `gradientWidth` dynamic based on screen size (e.g., 40px on mobile, 100px on desktop) using a state variable and a `useEffect` + `window.innerWidth` check.

---

## 9. Navbar (`Navbar.tsx`)

### Issues

| # | Issue | Severity |
|---|-------|----------|
| 1 | The mobile menu overlay uses `h-screen fixed inset-0` — this is appropriate. However, it does **not close on scroll** or when the user navigates using the browser back button. A user who opens the menu and uses the back button will have a broken UI state. | 🟡 Medium |
| 2 | The close button in the mobile menu is at `top-5 right-4`, which is correct, but has no `z-index` higher than the menu itself. Since the menu is `z-50`, the button should ensure it's visible above any stacked content. | 🟢 Low |

### Steps to Fix
1. Add a `popstate` event listener (or rely on `react-router-dom`'s location change via `useLocation`) to auto-close the mobile menu when navigation occurs. A `useEffect` that watches `pathname` and calls `closeMenu()` would solve this.
2. Ensure the close button has `z-[51]` or similar to guarantee visibility.

---

## 10. Footer (`Footer.tsx`)

### Issues

| # | Issue | Severity |
|---|-------|----------|
| 1 | The layout `flex-col md:flex-row` is correct. On mobile, `mt-4` top margin on the social links is fine. No critical issues. | 🟢 Low |

---

## Summary Table

| Component | High 🔴 | Medium 🟡 | Low 🟢 |
|-----------|---------|-----------|--------|
| Hero | 2 | 2 | 0 |
| Philosophy | 1 | 2 | 0 |
| Work | 1 | 2 | 0 |
| Services | 0 | 2 | 1 |
| About | 0 | 1 | 1 |
| Process | 1 | 2 | 0 |
| CallToAction | 0 | 1 | 1 |
| BannersMarquee | 0 | 0 | 1 |
| Navbar | 0 | 1 | 1 |
| Footer | 0 | 0 | 1 |
| **Total** | **5** | **13** | **5** |

### Priority Order for Fixes

1. **Process — Oversized numbers overflow** (most likely to break layout)
2. **Hero — Watermark & side images overlap text**
3. **Philosophy — Missing section padding**
4. **Work — Grid loses visual hierarchy on mobile**
5. **Services — Fixed heights cut Arabic text & image overlaps**
6. **About — Image dominates mobile layout**
7. **CallToAction — Disproportionate box on mobile**
8. **Navbar — Mobile menu doesn't close on back navigation**
9. **BannersMarquee — Gradient width relative to viewport**
10. **Footer — No critical issues**
