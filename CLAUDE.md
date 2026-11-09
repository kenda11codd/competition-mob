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

- Judging flow is the same for every round type (written, video, live): the judge first reviews the submission (reads, watches, or attends), then scores and gives feedback on a screen with two side-by-side panes, rubric on one side and feedback input on the other, each scrolling independently (not one shared page scroll). This is the current plan and may change if the UI doesn't work well; keep the review step and scoring screen as separate components so the layout is easy to rework.
