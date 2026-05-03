# Sparky Landing

> **Status:** Active
> This project is currently maintained as the public web presence for Sparky.

Marketing, privacy, support, and legal site for Sparky, a native iOS second-brain app for private memories, reminders, attachments, and organization.

## Summary

- [What it is](#what-it-is)
- [Goals](#goals)
- [Site structure](#site-structure)
- [Project map](#project-map)
- [Current state](#current-state)
- [Working notes](#working-notes)

## What it is

`sparky-landing` is the public web presence for the Sparky iOS app. It explains the product promise, highlights private on-device data handling, and provides support, terms, and privacy pages.

## Goals

- Position Sparky as a personal second brain that stays on the user's device.
- Explain memories, minds, smart reminders, timeline organization, attachments, and checklists.
- Make privacy a core product promise, not a footnote.
- Provide support and legal pages needed for app distribution.

## Site structure

- Hero with product mascot, App Store CTA, and core promise.
- Features section covering minds, timeline, reminders, location triggers, attachments, and checklists.
- Privacy highlight section for no cloud, no tracking, and no accounts.
- CTA section.
- Privacy, support, and terms pages.

## Project map

```text
sparky-landing/
├── app/                  # Next.js routes, legal pages, and root layout
├── components/layout/    # Header and footer
├── components/sections/  # Hero, features, privacy highlight, and CTA
├── components/ui/        # UI primitives
├── public/               # Sparky imagery and icons
└── package.json
```

## Current state

The site is a static Next.js landing app. The App Store link currently points to a placeholder app id and should be updated before launch.

## Working notes

- Keep product claims aligned with the native iOS app in `sparky`.
- Preserve privacy wording carefully: no accounts, no cloud, and no tracking must match the implementation.
- Add browser translation hardening to the root layout before production launch.
