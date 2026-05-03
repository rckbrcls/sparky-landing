# Sparky Landing

> **Status:** Active
> This project is currently maintained as the public web presence for Sparky.

Marketing, privacy, support, and legal site for Sparky, a native iOS second-brain app for private memories, reminders, attachments, and organization.

## Summary

- Public web presence for the Sparky native iOS second-brain app.
- Solves marketing, privacy, support, and legal pages for app distribution.
- Main stack: Next.js, React, TypeScript, public imagery, layout components, section components, and static legal/support routes.
- Current status: active static landing app; App Store link is still a placeholder.
- Technical value: keeps product claims, privacy promises, support, and terms separate from the native app repository.

## Overview

`sparky-landing` is the public web presence for the Sparky iOS app. It explains the product promise, highlights private on-device data handling, and provides support, terms, and privacy pages.

## Motivation

- Position Sparky as a personal second brain that stays on the user's device.
- Explain memories, minds, smart reminders, timeline organization, attachments, and checklists.
- Make privacy a core product promise, not a footnote.
- Provide support and legal pages needed for app distribution.

## Features

- Hero with product mascot, App Store CTA, and core promise.
- Features section covering minds, timeline, reminders, location triggers, attachments, and checklists.
- Privacy highlight section for no cloud, no tracking, and no accounts.
- CTA section.
- Privacy, support, and terms pages.

## Project Structure

```text
sparky-landing/
├── app/                  # Next.js routes, legal pages, and root layout
├── components/layout/    # Header and footer
├── components/sections/  # Hero, features, privacy highlight, and CTA
├── components/ui/        # UI primitives
├── public/               # Sparky imagery and icons
└── package.json
```

## Current Status

The site is a static Next.js landing app. The App Store link currently points to a placeholder app id and should be updated before launch.

## Known Limitations

- Keep product claims aligned with the native iOS app in `sparky`.
- Preserve privacy wording carefully: no accounts, no cloud, and no tracking must match the implementation.
- Add browser translation hardening to the root layout before production launch.
