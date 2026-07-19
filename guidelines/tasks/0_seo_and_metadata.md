# Task: SEO, Metadata, and Performance Optimization

This task focuses on making the website discoverable by search engines, adding social sharing previews, and optimizing font loading performance.

## Target Files
* `index.html` (root)
* `src/styles/fonts.css`

## Step-by-Step Instructions

### Step 1: Remove Search Engine Blocking Tag
In `index.html`, locate line 10 containing:
```html
<meta name="robots" content="noindex, nofollow" />
```
Change this to allow indexing:
```html
<meta name="robots" content="index, follow" />
```

### Step 2: Update Page Title and Meta Description
In `index.html`, update the title and description to represent a senior/staff profile:
* **Title:**
  ```html
  <title>Rafael Rodelo | Senior Full-Stack Engineer | Distributed Systems & Cloud</title>
  ```
* **Description:**
  ```html
  <meta name="description" content="Senior Full-Stack Engineer specializing in distributed systems, cloud architecture (Azure), and high-performance web applications with React, Node.js, and Docker." />
  ```

### Step 3: Add Open Graph (Social Sharing) Metadata
Add the following Open Graph tags inside the `<head>` of `index.html` (under the description meta tag) to enable rich preview cards when sharing the link on LinkedIn, Twitter, or Slack:
```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://rafaosorio.dev/" />
<meta property="og:title" content="Rafael Rodelo | Senior Full-Stack Engineer" />
<meta property="og:description" content="Specialized in distributed systems, cloud architecture (Azure), and high-performance React & Node.js web applications." />
<meta property="og:image" content="https://rafaosorio.dev/og-preview.png" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://rafaosorio.dev/" />
<meta property="twitter:title" content="Rafael Rodelo | Senior Full-Stack Engineer" />
<meta property="twitter:description" content="Specialized in distributed systems, cloud architecture (Azure), and high-performance React & Node.js web applications." />
<meta property="twitter:image" content="https://rafaosorio.dev/og-preview.png" />
```

### Step 4: Optimize Font Loading Performance
1. Remove the blocking `@import` statement from `src/styles/fonts.css` (lines 1-2).
2. Instead, load the fonts using high-performance preconnect and link tags inside `<head>` of `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
```

---

## Verification Criteria
1. Run `pnpm run build` or `npm run build` to verify there are no compilation or syntax errors in `index.html`.
2. Inspect the head tags using browser developer tools and verify the `<meta name="robots" content="index, follow" />` is active.
3. Verify that font loading does not flicker or throw console loading errors.
