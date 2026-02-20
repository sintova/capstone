# Navigation Flow Diagram

## Visual Navigation Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                     FIXED NAVIGATION BAR                        │
│  ┌────────────┐  ┌──────────────────────────────────────────┐ │
│  │            │  │         Navigation Menu                   │ │
│  │ My         │  │  ┌──────┐  ┌──────┐  ┌──────┐          │ │
│  │ Portfolio  │  │  │ 👤   │  │ 💼   │  │ 📧   │          │ │
│  │            │  │  │About │  │Projects│ │Contact│         │ │
│  │  (Logo)    │  │  └──────┘  └──────┘  └──────┘          │ │
│  └────────────┘  └──────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                              ↓
        ┌────────────────────┬────────────────────┐
        ↓                    ↓                    ↓
┌───────────────┐   ┌───────────────┐   ┌───────────────┐
│  👤 ABOUT ME  │   │ 💼 PROJECTS   │   │ 📧 CONTACT    │
│               │   │               │   │               │
│ • Introduction│   │ • Project 1   │   │ • Name Field  │
│ • Skills      │   │ • Project 2   │   │ • Email Field │
│ • Background  │   │ • Project 3   │   │ • Message     │
│               │   │ • Project 4   │   │ • Submit Btn  │
│               │   │ • Project 5   │   │               │
│               │   │ • Project 6   │   │               │
└───────────────┘   └───────────────┘   └───────────────┘
```

## Mobile Navigation Structure

```
Desktop View (> 768px)          Mobile View (≤ 768px)
┌────────────────────────┐      ┌────────────────────────┐
│ Logo    [Menu Items]   │      │ Logo            [☰]    │
└────────────────────────┘      └────────────────────────┘
                                        ↓ (Click ☰)
                                ┌────────────────────────┐
                                │ Logo            [×]    │
                                ├────────────────────────┤
                                │ 👤 About Me            │
                                ├────────────────────────┤
                                │ 💼 Projects            │
                                ├────────────────────────┤
                                │ 📧 Contact             │
                                └────────────────────────┘
```

## Navigation Interaction Flow

```
User Action → Navigation Response

1. Page Load
   └─→ First menu item ("About Me") becomes active
       └─→ Underline animation appears

2. Click Navigation Link
   └─→ Smooth scroll to target section
       └─→ Active class updates
           └─→ Underline animation moves

3. Manual Scroll
   └─→ Scroll position detected
       └─→ Active link updates automatically
           └─→ Visual feedback provided

4. Hover on Link (Desktop)
   └─→ Background color changes
       └─→ Icon scales and rotates
           └─→ Text color changes to #00d4ff

5. Click Hamburger (Mobile)
   └─→ Menu expands/collapses
       └─→ Hamburger transforms to X
           └─→ ARIA attributes update
```

## Scroll Position Detection

```
┌─────────────────────────────────────────┐
│  [Viewport]                             │
│                                         │
│  ┌───────────────────────────┐ ← 100px │
│  │  Navbar Height (70px)     │  offset │
│  └───────────────────────────┘         │
│                                         │
│  ┌───────────────────────────┐         │
│  │                           │         │
│  │   Active Section          │         │
│  │   (detected)              │         │
│  │                           │         │
│  └───────────────────────────┘         │
│                                         │
└─────────────────────────────────────────┘

When section enters detection zone:
→ Corresponding nav link becomes active
→ Underline animation appears
→ Color changes to #00d4ff
```

## JSON Data Flow

```
┌─────────────────────────────────────────────────────┐
│                projects.json                        │
│  {                                                  │
│    "meta": { ... },                                 │
│    "projects": [                                    │
│      {                                              │
│        "id": 1,                                     │
│        "title": "E-Commerce Platform",              │
│        "description": "...",                        │
│        "image": "https://...",                      │
│        "link": "https://...",                       │
│        "technologies": [...],                       │
│        "category": "...",                           │
│        "date": "...",                               │
│        "status": "completed"                        │
│      }                                              │
│    ]                                                │
│  }                                                  │
└─────────────────────────────────────────────────────┘
                      ↓
              ┌───────────────┐
              │  fetch() API  │
              └───────────────┘
                      ↓
        ┌─────────────────────────┐
        │   gallery.js            │
        │   displayProjects()     │
        └─────────────────────────┘
                      ↓
        ┌─────────────────────────────────┐
        │   DOM Manipulation              │
        │   • Create div.project          │
        │   • Add img element             │
        │   • Add h3 (title)              │
        │   • Add p (description)         │
        │   • Add a (link)                │
        └─────────────────────────────────┘
                      ↓
        ┌─────────────────────────────────┐
        │   Rendered Gallery              │
        │   ┌──────┐ ┌──────┐ ┌──────┐   │
        │   │Proj 1│ │Proj 2│ │Proj 3│   │
        │   └──────┘ └──────┘ └──────┘   │
        │   ┌──────┐ ┌──────┐ ┌──────┐   │
        │   │Proj 4│ │Proj 5│ │Proj 6│   │
        │   └──────┘ └──────┘ └──────┘   │
        └─────────────────────────────────┘
```

## Component Relationships

```
┌─────────────────────────────────────────────────────┐
│                   index.html                        │
│  ┌───────────────────────────────────────────────┐ │
│  │  <nav> - Navigation Component                 │ │
│  │    • Logo                                     │ │
│  │    • Menu Toggle Button                       │ │
│  │    • Menu Items (3)                           │ │
│  └───────────────────────────────────────────────┘ │
│  ┌───────────────────────────────────────────────┐ │
│  │  <section id="about"> - About Section         │ │
│  │    • Introduction                             │ │
│  │    • Skills Tags                              │ │
│  └───────────────────────────────────────────────┘ │
│  ┌───────────────────────────────────────────────┐ │
│  │  <section id="gallery"> - Gallery Section     │ │
│  │    • Project Container                        │ │
│  │      └─ Dynamic Projects (JSON)               │ │
│  └───────────────────────────────────────────────┘ │
│  ┌───────────────────────────────────────────────┐ │
│  │  <section id="contact"> - Contact Section     │ │
│  │    • Contact Form                             │ │
│  │      • Name Input                             │ │
│  │      • Email Input                            │ │
│  │      • Message Textarea                       │ │
│  │      • Submit Button                          │ │
│  └───────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
         ↑              ↑              ↑
         │              │              │
    navigation.css  gallery.css   contact.css
         │              │              │
         ↓              ↓              ↓
    navigation.js   gallery.js   contact-form.js
```

## Responsive Breakpoints

```
┌─────────────────────────────────────────────────────┐
│                Screen Width                         │
└─────────────────────────────────────────────────────┘
                      │
      ┌───────────────┼───────────────┐
      ↓               ↓               ↓
  < 480px         481-768px       > 768px
  (Small)         (Medium)        (Large)
      │               │               │
      ↓               ↓               ↓
┌──────────┐    ┌──────────┐    ┌──────────────┐
│ Single   │    │ 2 Column │    │ 3+ Columns   │
│ Column   │    │ Grid     │    │ Grid         │
│          │    │          │    │              │
│ Full     │    │ Adjusted │    │ Horizontal   │
│ Width    │    │ Spacing  │    │ Nav Menu     │
│ Mobile   │    │          │    │              │
│ Menu     │    │ Hamburger│    │ Fixed Nav    │
└──────────┘    └──────────┘    └──────────────┘
```

## State Management

```
Navigation States:
┌──────────────────────────────────────┐
│ 1. Default (Page Load)               │
│    • First link active               │
│    • Menu closed (mobile)            │
└──────────────────────────────────────┘
         ↓
┌──────────────────────────────────────┐
│ 2. Link Clicked                      │
│    • Smooth scroll initiated         │
│    • Active state updates            │
│    • Menu closes (mobile)            │
└──────────────────────────────────────┘
         ↓
┌──────────────────────────────────────┐
│ 3. Scrolling                         │
│    • Position calculated             │
│    • Active link updates             │
│    • Shadow intensity changes        │
└──────────────────────────────────────┘
         ↓
┌──────────────────────────────────────┐
│ 4. Mobile Menu Toggle                │
│    • Menu opens/closes               │
│    • Hamburger animates              │
│    • ARIA attributes update          │
└──────────────────────────────────────┘
```

## Animation Timeline

```
Navigation Link Hover:
0ms    → Hover starts
100ms  → Background fades in (rgba overlay)
100ms  → Icon starts scaling (1.0 → 1.2)
100ms  → Icon rotates (0deg → 5deg)
100ms  → Text color changes (#fff → #00d4ff)
300ms  → All transitions complete
-------------------------------------------
Total Duration: 300ms (0.3s ease)


Mobile Menu Toggle:
0ms    → Click hamburger
50ms   → Line 1 starts rotating
50ms   → Line 2 fades out
50ms   → Line 3 starts rotating
150ms  → Menu starts expanding
300ms  → All animations complete
-------------------------------------------
Total Duration: 300ms (0.3s ease)


Smooth Scroll:
0ms    → Link clicked
0ms    → Default behavior prevented
10ms   → Target section identified
10ms   → Offset calculated (navbar height)
20ms   → window.scrollTo() initiated
800ms  → Scroll completes (smooth behavior)
-------------------------------------------
Total Duration: ~800ms (browser-dependent)
```

---

This visual documentation provides a complete overview of the navigation structure, data flow, and user interactions in the portfolio application.
