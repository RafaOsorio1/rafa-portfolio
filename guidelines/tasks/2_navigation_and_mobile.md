# Task: Mobile Navigation Menu & Responsiveness

This task implements a responsive mobile hamburger menu in the navigation bar. Currently, all navigation items are hidden on viewports smaller than `768px`, leaving mobile visitors unable to jump to specific sections.

## Target Files
* `src/components/layout/Navigation.tsx`

## Step-by-Step Instructions

### Step 1: Import Hamburger and Close Icons
1. Open `Navigation.tsx`.
2. Import `Menu` and `X` from `lucide-react` to use as icons for opening/closing the mobile drawer menu.
   ```typescript
   import { Menu, X } from 'lucide-react';
   ```

### Step 2: Implement Mobile Open State
1. In the `Navigation` component, add a local state to track whether the mobile menu drawer is open:
   ```typescript
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   ```

### Step 3: Render Hamburger Button on Mobile Viewports
1. Inside the main navigation wrapper, add a button that is only visible on mobile (e.g. `block md:hidden`).
2. This button should toggle the state of `isMobileMenuOpen` and render a `Menu` icon when closed, or an `X` icon when open.
   ```typescript
   <button
     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
     className="block md:hidden p-2 rounded text-slate-400 hover:text-white focus:outline-none"
     aria-label="Toggle menu"
   >
     {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
   </button>
   ```

### Step 4: Render the Mobile Menu Drawer Overlay
1. Add an overlay block that renders just below the nav bar when `isMobileMenuOpen` is true.
2. The menu drawer should overlay the screen, render a list of the navigation items vertically, and close when a link is clicked.
3. Apply styling that matches the dark glassmorphism of the navbar:
   ```typescript
   {isMobileMenuOpen && (
     <div 
       className="absolute top-14 left-0 right-0 md:hidden flex flex-col p-6 space-y-4 border-b animate-fade-up"
       style={{
         background: 'rgba(6, 6, 14, 0.95)',
         borderBottom: '1px solid rgba(0, 229, 255, 0.15)',
         backdropFilter: 'blur(20px)',
       }}
     >
       {NAV_ITEMS.map((item) => {
         const isActive = activeSection === item.href.slice(1);
         return (
           <a
             key={item.key}
             href={item.href}
             onClick={() => setIsMobileMenuOpen(false)}
             className="font-mono text-sm tracking-wider uppercase py-2"
             style={{ color: isActive ? '#00E5FF' : '#64748B' }}
           >
             {isActive && <span style={{ color: '#FF003C' }}>{'>'} </span>}
             {t(item.key)}
           </a>
         );
       })}
     </div>
   )}
   ```

---

## Verification Criteria
1. Open the dev server and resize the browser viewport to a width below `768px` (mobile viewport simulation).
2. Verify the links disappear and the hamburger icon (`Menu`) appears.
3. Click the hamburger icon: confirm it transforms into an `X` and a vertical list of navigation links drops down smoothly.
4. Click on a section link (e.g. "Projects"): confirm the viewport scrolls to the projects section and the menu drawer closes automatically.
