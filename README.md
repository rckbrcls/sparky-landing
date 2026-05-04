# Sparky Landing

> **Status:** Active static landing site for the Sparky iOS app.

`sparky-landing` is the public website for Sparky, a native iOS second-brain app for private memories, reminders, attachments, checklists, and personal organization.

This repository is not the iOS app itself. It exists to present the product, explain the privacy model, provide support content, and host the public terms and privacy pages needed for distribution.

## What This Site Does

- Presents Sparky as a private, on-device memory and reminder app.
- Highlights core product concepts: minds, calendar timeline, reminders, location triggers, attachments, and checklists.
- Communicates the privacy promise: no accounts, no cloud service, and no tracking.
- Provides first-party legal and support routes.
- Links users to the App Store download page.

## Routes

| Route | Purpose | Source |
| --- | --- | --- |
| `/` | Landing page with hero, features, privacy highlights, and CTA sections. | `app/page.tsx` |
| `/privacy` | Privacy policy for the Sparky iOS app. | `app/privacy/page.tsx` |
| `/terms` | Terms of Service for the Sparky iOS app. | `app/terms/page.tsx` |
| `/support` | Support page with FAQs, contact email, and system requirements. | `app/support/page.tsx` |

## Technology Stack

- **Framework:** Next.js 16 with the App Router
- **UI runtime:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 with CSS variables in `app/globals.css`
- **UI primitives:** shadcn-style components configured by `components.json`
- **Icons:** `lucide-react`
- **Package manager:** pnpm

No API routes, backend service, database, authentication flow, or runtime data fetching were identified in the current codebase.

## Project Structure

```text
sparky-landing/
├── app/
│   ├── layout.tsx        # Root metadata, fonts, header/footer shell
│   ├── page.tsx          # Home route composed from section components
│   ├── privacy/page.tsx  # Privacy policy
│   ├── support/page.tsx  # Support and FAQ page
│   └── terms/page.tsx    # Terms of Service
├── components/
│   ├── layout/           # Header and footer
│   ├── sections/         # Home page sections
│   └── ui/               # Reusable UI primitives
├── docs/
│   ├── index.md          # Documentation index
│   └── architecture.md   # Technical architecture notes
├── lib/
│   └── utils.ts          # Class name utility
├── public/               # Sparky mascot and app icon images
└── package.json          # Scripts and dependencies
```

## Prerequisites

- Node.js compatible with Next.js 16
- pnpm

This repository includes `pnpm-lock.yaml`, so pnpm should be used to install dependencies.

## Installation

```bash
pnpm install
```

## Environment Configuration

No project-specific environment variables were found in the current source code.

The site currently uses static content, public image assets, and hardcoded external links. If deployment-specific settings are introduced later, document them here and keep them out of source files when they contain secrets.

## Local Development

```bash
pnpm dev
```

This starts the Next.js development server.

## Available Scripts

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the local Next.js development server. |
| `pnpm build` | Create a production build with Next.js. |
| `pnpm start` | Start the production Next.js server after a build. |
| `pnpm lint` | Run ESLint using the Next.js core web vitals and TypeScript rules. |

## Validation

The only validation script currently defined by the project is:

```bash
pnpm lint
```

No test runner, unit tests, integration tests, or end-to-end test setup were identified in the current codebase.

## Build

```bash
pnpm build
```

The project uses a standard Next.js production build. No provider-specific build configuration was found.

## Deployment

No deployment provider configuration was detected. The repository has no Dockerfile, CI workflow, Vercel project metadata, or hosting-specific configuration committed in source.

Before production launch:

- Confirm the production hosting provider and domain.
- Confirm that `metadataBase` in `app/layout.tsx` matches the production domain.
- Replace all placeholder App Store URLs that currently use `https://apps.apple.com/app/sparky/id000000000`.
- Add or preserve root-level browser translation hardening in `app/layout.tsx` so browser translators do not mutate the DOM.

## Content and Product Accuracy

Most of the site is product and legal copy. Keep the public claims aligned with the native Sparky iOS app, especially:

- no accounts
- no cloud sync or remote backup service
- no tracking or analytics
- on-device data storage
- location-based reminders
- notification behavior
- attachments, audio, camera, photo library, speech recognition, and permission usage

The support and legal pages use `contact@polterware.com` as the public contact address.

## Current Launch TODOs

- Replace the placeholder App Store app id.
- Confirm the final production domain and hosting provider.
- Keep the privacy policy and terms synchronized with the native iOS app implementation.
- Add browser translation hardening to the root layout before production launch if it has not already been implemented.

## Documentation

Additional documentation is intentionally compact because this is a small static frontend app:

- [`docs/index.md`](docs/index.md)
- [`docs/architecture.md`](docs/architecture.md)
