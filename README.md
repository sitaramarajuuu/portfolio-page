# Abhishek · Portfolio Website

A clean, editorial-style student portfolio built with **HTML, CSS, and vanilla JavaScript** — no frameworks, no build step.

## How to run

Just open `index.html` in any browser. That's it.

For a slightly nicer dev experience (live reload, etc.), you can also run a tiny local server:

```bash
# Python (already installed on most systems)
python -m http.server 8000
# then open http://localhost:8000
```

## File structure

```
portfolio/
├── index.html      ← main page (all sections)
├── styles.css      ← all styles
├── script.js       ← interactivity (gallery filter, lightbox, etc.)
├── images/         ← all photos & certificates
└── README.md
```

## Swapping in your real images

All placeholders are SVG files in the `images/` folder. To replace them with real images:

1. Drop your real images (JPG/PNG) into the `images/` folder.
2. Open `index.html` and find lines that look like:
   ```html
   <img src="images/profile.svg" alt="Abhishek" />
   ```
3. Change the file name to your real image, for example:
   ```html
   <img src="images/profile.jpg" alt="Abhishek" />
   ```

### Recommended filenames (just swap the extension):

| Slot                | Replace this file       | With your image (suggested) |
|---------------------|-------------------------|------------------------------|
| Profile photo       | `profile.svg`           | `profile.jpg`               |
| AI4A project        | `proj-ai4a.svg`         | `proj-ai4a.jpg`             |
| Design Thinking     | `proj-design.svg`       | `proj-design.jpg`           |
| ACE project         | `proj-ace.svg`          | `proj-ace.jpg`              |
| Portfolio mockup    | `proj-port.svg`         | `proj-port.jpg`             |
| Coursera cert       | `cert-coursera.svg`     | `cert-coursera.jpg`         |
| NetAcad cert        | `cert-netacad.svg`      | `cert-netacad.jpg`          |
| Yuva AI cert        | `cert-yuvaai.svg`       | `cert-yuvaai.jpg`           |
| AI4A cert           | `cert-ai4a.svg`         | `cert-ai4a.jpg`             |
| Design cert         | `cert-design.svg`       | `cert-design.jpg`           |
| ACE cert            | `cert-ace.svg`          | `cert-ace.jpg`              |
| Event photos        | `event-1/2/3.svg`       | `event-1/2/3.jpg`           |

## Customizing your details

Open `index.html` and search for these to update:

- **Email**: `abhishek@example.com`
- **Phone**: `+91 00000 00000`
- **LinkedIn URL**: search for `linkedin.com/in/abhishek`
- **GitHub URL**: search for `github.com/abhishek`
- **Education details**: in the "About" section
- **Project links**: each project has a `<a href="#">` — replace `#` with your real URLs

## Sections included

1. **Home** — photo, name, intro, quick stats
2. **About** — education, interests, goals, strengths
3. **Achievements** — AI4A, Design Thinking, ACE, Coursera, NetAcad, Yuva AI (with descriptions)
4. **Projects** — featured AI4A, plus Design Thinking, ACE, Portfolio
5. **Certificates** — 6 credentials displayed as cards (clickable, opens lightbox)
6. **Gallery** — filterable grid of all photos & certificates
7. **Beyond the Resume** — personality / extras for future employers
8. **Contact** — email, phone, LinkedIn, GitHub

## Features

- Fully responsive (mobile, tablet, desktop)
- Smooth scroll animations
- Clickable lightbox for certificates & gallery
- Gallery category filtering
- Cursor glow effect (desktop)
- Animated marquee of skills
- Honors `prefers-reduced-motion` for accessibility

---

Designed and built with care.
