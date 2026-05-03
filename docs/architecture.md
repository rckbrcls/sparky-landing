# Architecture

## Overview

`sparky-landing` is a static Next.js App Router site for the Sparky iOS app. It covers marketing, support, privacy, and terms pages.

## Components

- `app/`: public routes, metadata, legal pages, and root layout.
- `components/layout/`: header and footer.
- `components/sections/`: hero, features, privacy, and CTA sections.
- `components/ui/`: reusable UI primitives.
- `public/`: Sparky imagery and icons.

## Data Flow

1. Static page content is rendered by Next.js routes.
2. Section components compose the home page.
3. Legal/support pages are served as first-party routes.

## Trade-offs

- A static site is enough for the current product surface.
- Privacy claims must stay synchronized with the native app implementation.
