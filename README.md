## Wolf of Dalal Street

A lightweight, responsive landing page for the ECON club’s Wolf of Dalal Street event. It showcases the event hero, speaker section, and visual cards with a cinematic video background and subtle GSAP-driven interactions.

### Features
- Cinematic fullscreen video background
- Custom cursor with blur trail (desktop-only)
- Smooth scroll-based transitions powered by GSAP + ScrollTrigger
- Responsive layout with mobile-friendly navigation and content
- Accessible, SEO-friendly structure and metadata

### Tech Stack
- HTML5, CSS3
- Vanilla JavaScript (ES6)
- GSAP 3 (ScrollTrigger)

### Getting Started
1. Clone or download the repository.
2. Serve the site with any static file server to ensure the video and assets load correctly.

```bash
# Using Node.js
npx serve .

# Or Python 3
python -m http.server 8080
```

Open `http://localhost:8080` in your browser.

### Project Structure
```
assets/           # Images and background video
index.html        # Main HTML document
style.css         # Styles
script.js         # Interactions and animations
```

### Accessibility and Performance
- Honors prefers-reduced-motion for users who disable animations
- Scales typography and layout on small screens
- Images include `alt` text
- Video is muted, looped, and optimized for background usage


