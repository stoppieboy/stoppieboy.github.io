# Shivam Verma — Portfolio

Personal portfolio website built with Next.js, showcasing my experience, projects, and contact information.

**Live site:** [stoppieboy-github-io.vercel.app](https://stoppieboy-github-io.vercel.app/)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Data fetching | [Apollo Client](https://www.apollographql.com/docs/react/) + GitHub GraphQL API |
| KV store | [Vercel KV](https://vercel.com/docs/storage/vercel-kv) |
| Font | [Urbanist](https://fonts.google.com/specimen/Urbanist) via `next/font/google` |
| Deployment | [Vercel](https://vercel.com/) |

---

## Features

- **Hero** — Introduction with animated scroll cue and social links (GitHub, LinkedIn, HackerRank)
- **About** — Bio and skill highlights
- **Experience** — Work history driven by `data.json` — no code change needed to add a new role
- **Projects** — Live-fetched pinned GitHub repositories via the GitHub GraphQL API, with skeleton loading and error states
- **Contact** — Direct mailto link
- **Navbar** — Frosted-glass nav with smooth scroll; collapses to a hamburger menu on mobile

---

## Project Structure

```
app/
  layout.jsx          # Root layout, metadata (OG + Twitter cards), Navbar
  page.jsx            # Page composition — assembles all sections
  api/get-repos/      # API route — fetches pinned GitHub repos via GraphQL
components/
  Home.jsx            # Hero section
  About.jsx           # About section
  Experience.jsx      # Experience section
  Projects.jsx        # Projects section (client component)
  Contact.jsx         # Contact section
  Navbar.jsx          # Fixed navbar with mobile hamburger menu
  SocialLinks.jsx     # Vertical social icon strip
  Skill.jsx           # Inline skill highlight chip
data.json             # Content data — experience entries, about text, email
public/assets/        # Static icons and images
styles/globals.css    # Global styles and Tailwind component layer
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- A GitHub personal access token with `read:user` scope (for the GraphQL API)
- A Vercel KV store (for `about_text` and `email` in production)

### Local development

1. Clone the repo:
   ```bash
   git clone https://github.com/stoppieboy/stoppieboy.github.io.git
   cd stoppieboy.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file:
   ```env
   GITHUB_ACCESS_TOKEN=your_github_token_here
   KV_REST_API_URL=your_vercel_kv_url
   KV_REST_API_TOKEN=your_vercel_kv_token
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

### Tests

```bash
npm test
```

---

## Content Updates

All site content is driven by [`data.json`](data.json) — no component code changes needed for routine updates:

```jsonc
{
  "email": "you@example.com",
  "about_text": "...",
  "experience": [
    {
      "title": "Job Title",
      "company": "Company Name",
      "duration": "Month Year – Month Year",
      "description": ["Bullet one.", "Bullet two."]
    }
  ]
}
```

Pinned GitHub projects are fetched live from the GitHub API — pin/unpin repos on GitHub and they update automatically.

---

## Deployment

The site is deployed on Vercel. Push to `main` to trigger a production deploy. Environment variables (`GITHUB_ACCESS_TOKEN`, `KV_REST_API_URL`, `KV_REST_API_TOKEN`) must be set in the Vercel project settings.
