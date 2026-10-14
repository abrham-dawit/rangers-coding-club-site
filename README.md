# Rangers Coding Club — v2

Rangers Coding Club is a coding club for younger students that I've been involved with — kids learning to code by building things: Scratch games, Python projects, their own webpages, simple robots. The club's first website lives in my earlier `rangers-coding-club` repo. This repo is **version 2 of that site**: same club, refreshed from the ground up.

## What's new in v2

- **Modern layout** — sticky nav, hero, and clean card sections instead of the original hand-built single page.
- **Lessons section** — the club's four tracks as cards: Scratch Rangers, Python Rangers, Web Rangers, Robot Rangers, each labeled by level.
- **Projects section** — what members work toward, because projects are the real curriculum: first game, personal website, generative art, a chatbot, a robot obstacle run.
- **"A normal week" section** — warm-up, lesson, build time, show & tell, so new families know what a meeting actually looks like.
- **Join section with a working sign-up form** — name, grade, guardian email, track interest, and notes, validated in the browser.

Open `index.html` in a browser. No build step, no accounts, no servers.

## What's honest about this version

- **The join form is a demo.** Sign-ups are saved in your browser (localStorage) only — nothing is emailed or sent to the club from this page. The live version hooks the form to the club's real inbox.
- **Meeting details are placeholders.** Day/time, location, and grade range are marked as placeholders in the Join section — they change by season and should only be published once confirmed.
- **No member counts, no testimonials, no photos of kids.** The original site made do without them and so does v2 — nothing invented, and no children's information is published here.

## Relationship to v1

The v1 repo (`rangers-coding-club`) is untouched by this project and keeps its existing visibility. v2 is a separate, public repo so the refresh can be reviewed and improved before it ever replaces the original site.
