# DARKWAVE Music Site

Dark, responsive artist site with 8 track slots.

## Add your assets
- Profile photo: `assets/profile.jpg`
- Audio files: `assets/tracks/track-01.mp3` through `track-08.mp3`
- Update track names and subtitles near the top of `app.js`.

The site expects these files to be uploaded at the listed paths. Audio and image files are not included in this starter commit.

## Interaction notes
The current preview stores likes and play counts in the visitor's browser using localStorage. This is suitable for a quick demo, but it is not shared between visitors and can be reset by clearing browser data. To count plays and likes across all visitors, configure a Supabase project using `supabase.sql` and connect the client in `app.js` in a follow-up update.

## Deploy
Enable GitHub Pages in the repository settings and select the `main` branch / root folder, or connect the repository to a static hosting service.