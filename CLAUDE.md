# CLAUDE.md

Shared instructions for Claude Code. This file is committed so every contributor's Claude works from the same rules. See [README.md](README.md) for project overview, users, competition workflow, and planned stack.

## Maintaining this file

- When a contributor gives a building instruction or design preference that should apply going forward, add it here (in the relevant section) rather than only following it for the current session.
- Keep entries short and actionable. Don't duplicate what the README or the code already make clear.
- If a new instruction conflicts with an existing entry, flag it to the contributor before overwriting.

## Build instructions

- The platform is for any competition, not just Grove City's. Don't hardcode round counts, round names, deadlines, or competition-specific rules. Organizers define each competition's rounds, timeline, and per-round applicant and judge tasks in the app, so model these as data.
- Treat the Grove City Elevator Pitch and Wolverine Venture Battle competitions as example configurations and test data, not as built-in logic.
- Terminology: a competition is made of **rounds**. Use "round" (not "phase") in code, UI, and docs.
- Judges and rubrics are set per round, not per competition. A judge may be in some rounds and not others, and each round can have a different rubric.
- Judges are assigned specific submissions per round. Don't assume every judge sees every submission.
- A submission's status in a round is four separate fields, not one combined status: Submission (applicant: not submitted / submitted), Judging (judges: not started / in progress with N of M done / complete), Decision (judges: advanced / did not advance, only after judging is complete), and Feedback (applicant: not viewed / viewed, only after feedback is released). Derive these from underlying data (submission exists, judge evaluations done, timestamps) where possible instead of storing a manually updated status.
- Track whether an applicant has viewed their feedback in the app's own database (for example, a viewed-at timestamp), not through an analytics tool like PostHog. Organizers see this in the app.
- Applicants can edit their submission (including entry name and description) until the round deadline; after that it is locked. Enforce the deadline on the backend, not only by hiding the form in the UI.
- Feedback is released to applicants all at once when a round's judging period ends. Never show one judge's feedback early just because that judge finished.
- Judges can give feedback by voice. The judge chooses per piece of feedback whether the applicant gets a transcription or the audio file. Speech-to-text service not chosen yet.
- Judges can reorder their scored pitches and scores adjust to match. The adjustment algorithm is **undecided**: don't pick one; ask the team before implementing.
- Judge scores and rankings lock at the round's judging end date (set by the organizer). Enforce this on the backend.
- Reminders go out by email (provider not chosen yet). Reminder timing is configured by organizers per competition/round, so don't hardcode reminder offsets.
- What applicants and judges can see and do is derived from the round dates. Base open/closed state on the timeline rather than on manual toggles an organizer has to remember to flip.

## Design preferences

**Core UX philosophy (applies to every screen):**
- Hand users each step on a silver platter. At any moment, it should be obvious what the user should do next, and the primary next action should be the most prominent thing on the screen.
- Keep user abilities narrow. Prefer a small "this or that" choice over a menu of many options. Don't add actions, settings, or navigation a user doesn't need for their current task.
- Avoid dashboards and menus by default. Use a dashboard only when it's genuinely necessary, and keep it minimal.
- Clarity over density: plain language, one main purpose per screen, generous whitespace. Show status as a plain sentence ("Round 2 submissions are due Feb 9") rather than codes or badges alone.
- Guide multi-step tasks (like creating a competition) as a step-by-step flow, one step at a time, rather than one big form.

**Visual style:**
- Round and playful, but still professional: pill-shaped buttons, circular icon buttons, large corner radii on cards. Bold, heavy headings in a rounded geometric sans (Outfit).
- Lots of color, little information. Soft gray-green background, deep forest-green surfaces, and a lime accent. Use the tokens in `frontend/src/styles/global.css`; don't add new one-off colors.
- Color directs attention. Each screen highlights the one thing the user should do next (dark forest card and/or lime action). Lime is the accent for the primary action, so use it sparingly and never for decoration everywhere.
- Avoid the generic "AI SaaS" look: no default blue buttons, no purple gradients, no generic gray card grids with tiny badges, and no heavy shadows. Don't overuse saturated color.

- Judging flow is the same for every round type (written, video, live): the judge first reviews the submission (reads, watches, or attends), then scores and gives feedback on a screen with two side-by-side panes, rubric on one side and feedback input on the other, each scrolling independently (not one shared page scroll). This is the current plan and may change if the UI doesn't work well; keep the review step and scoring screen as separate components so the layout is easy to rework.
