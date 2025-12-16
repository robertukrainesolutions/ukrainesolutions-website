# Ukraine Solutions Website

A modern, redesigned website for Ukraine Solutions built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

<!-- Cloudflare Pages auto-deployment fully configured -->

## Features

- Modern, responsive design with Tailwind CSS
- All pages from the original website recreated
- Optimized for performance and SEO
- Ready for Cloudflare Pages deployment

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **React:** 19.2.1

## Getting .Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
```

This will create an `out` directory with the static export ready for deployment.

## Cloudflare Pages Deployment

### Build Configuration

When deploying to Cloudflare Pages, use these settings:

- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Node version:** 20.x or later

### Deployment Steps

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to your Cloudflare dashboard
3. Go to **Workers & Pages** → **Create application** → **Pages**
4. Click **Connect to Git**
5. Select your repository
6. Configure build settings:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Root directory:** `/` (or leave empty)
7. Click **Save and Deploy**

### Environment Variables

If you need to add environment variables, you can do so in the Cloudflare Pages dashboard under **Settings** → **Environment Variables**.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about-us/
│   ├── projects/
│   ├── contact-us/
│   ├── advocacy-for-ukraine/
│   ├── human-trafficking/
│   ├── defense-needs/
│   ├── partners/
│   ├── financial/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── Header.tsx
│   └── Footer.tsx
├── public/                 # Static assets
│   ├── uploads/           # Images from original site
│   ├── logo.svg
│   └── heart.png
└── next.config.ts          # Next.js configuration
```

## Pages

- **Home** (`/`) - Mission statement, war crimes gallery, support Ukraine section, projects preview
- **About Us** (`/about-us/`) - Information about Ukraine Solutions
- **Projects** (`/projects/`) - Current and past projects
- **Contact Us** (`/contact-us/`) - Contact information
- **Advocacy for Ukraine** (`/advocacy-for-ukraine/`) - Advocacy efforts
- **Human Trafficking** (`/human-trafficking/`) - Anti-trafficking efforts
- **Defense Needs** (`/defense-needs/`) - Defense equipment priorities
- **Partners** (`/partners/`) - Partners and sponsors
- **Financial** (`/financial/`) - Financial transparency information

## License

This project is for Ukraine Solutions, a 501(c)(3) non-profit organization.
