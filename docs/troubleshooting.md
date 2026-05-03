# Troubleshooting

## App Store link is not final

The README notes that the App Store link currently uses a placeholder app id. Update it before public launch.

## Privacy copy drifts from the app

Compare the site copy against the native app in `../sparky` before changing claims about cloud, accounts, tracking, reminders, or attachments.

## Browser translation changes the page

Add or preserve root-level translation hardening before production launch so browser translators do not mutate the DOM.
