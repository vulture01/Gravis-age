# Gravis Agency — Website

A React + Vite + Tailwind CSS site for Gravis Agency, a digital marketing agency.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Folder structure

```
src/
  main.jsx              # React root, wraps App in BrowserRouter
  App.jsx                # Route definitions
  index.css              # Global styles, fonts, reveal/reduced-motion CSS

  data/                   # ← Edit content here — no component code needed
    navigation.js         # Nav links (desktop + mobile read from this)
    services.js            # The 4 services (Home overview + Services page)
    team.js                 # Team member profiles
    projects.js              # Client work (currently empty — see below)
    agency.js                 # Contact info, philosophy, 5-step process

  pages/                  # One file per route
    Home.jsx, Services.jsx, Work.jsx, About.jsx, Team.jsx, Contact.jsx, NotFound.jsx

  components/
    layout/               # Navbar, Footer, Layout (page shell)
    sections/             # Page sections (Hero, ServiceCard, TeamCard, etc.)
    ui/                    # Small reusable primitives (Button, Reveal, Logo, etc.)

  assets/
    gravis-logo-black.png  # Your logo, background removed, for light sections
    gravis-logo-white.png  # Same logo in white, for the navy footer/bands
```

## Where to edit things

| What you want to change              | File to edit                              |
|---------------------------------------|--------------------------------------------|
| Team members, titles, bios, strengths | `src/data/team.js`                         |
| Services offered                      | `src/data/services.js`                     |
| Nav menu items                        | `src/data/navigation.js`                   |
| Email / WhatsApp / Instagram links    | `src/data/agency.js` → `contact` object    |
| Philosophy line, 5-step process       | `src/data/agency.js`                       |
| Add a real client project             | `src/data/projects.js` (schema documented in the file's comments) |
| Swap the logo file                    | Replace the two PNGs in `src/assets/`      |
| Brand colors                          | `tailwind.config.js` → `theme.extend.colors` |
| Contact form behavior                 | `src/components/sections/ContactForm.jsx`  |

## Contact form (V1 — no backend)

The form validates client-side, then opens the visitor's email app with a
pre-filled message to the address in `src/data/agency.js`. There's no
database or server. When you're ready to collect submissions properly,
replace the body of `handleSubmit` in `ContactForm.jsx` with a call to a
form service (Formspree, EmailJS) or your own API — the UI and validation
don't need to change.

## Before launch — replace these placeholders

`src/data/agency.js` has placeholder contact details clearly marked with a
`TODO` comment — swap in the real email, WhatsApp number, and Instagram
handle before this goes live.

## Adding real projects to Work

`src/data/projects.js` is intentionally empty — the Work page shows an
honest "building our portfolio" state instead of fake case studies. Once
you have a real project, add an object to the `projects` array following
the schema commented in that file; the Work page and `ProjectCard`
component will pick it up automatically.
