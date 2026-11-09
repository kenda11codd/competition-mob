# Competition Mob

Competition Mob is a general-purpose platform for running student competitions, from applications through judging and feedback. Organizers create a competition in the app and define its rounds, timeline, judges, and rubrics. Nothing about a competition's structure is hardcoded.

It was inspired by the software used to manage Grove City College's Entrepreneurship competitions (the Elevator Pitch Competition and Wolverine Venture Battle). Those competitions are the first use case, but the platform is meant to work for other competitions and other schools as well.

## Users

- **Organizers**: Create, configure, and run competitions, for example entrepreneurship department heads.
- **Judges**: Review submissions, provide feedback, select who advances, and score presentations, in the rounds they are assigned to.
- **Applicants**: Students who submit individual or team entries and view feedback.

## Organizers

### Creating a competition

Organizers build each competition in the app instead of choosing from a fixed template. When creating a competition, an organizer sets:

- **Competition details**: name, start date, and end date.
- **Rounds**: as many as the competition needs, in order. Each round has:
  - its own timeline (when it opens, when submissions are due, when judging ends, when it closes),
  - when email reminders go out before its deadlines and events,
  - what applicants need to do (for example, submit a written application, upload a video, or present live),
  - its own set of judges and what they need to do (for example, review, give feedback, select who advances, or score),
  - its own rubric.

### Assigning judges

For each round, organizers choose which judges take part and assign each judge the submissions (pitches) they will evaluate, including how many each judge receives.

### Tracking progress

Organizers can easily see which round each submission is in, along with its status in that round. Status is made of four fields, two driven by the applicant and two driven by judges:

| Field | Driven by | Values | When it applies |
|---|---|---|---|
| Submission | Applicant | Not submitted / Submitted | While the round is open |
| Judging | Judges | Not started / In progress (for example, 2 of 3 judges done) / Complete | Once judging begins |
| Decision | Judges | Advanced / Did not advance | Only after judging is complete |
| Feedback | Applicant | Not viewed / Viewed | Only after feedback is released |

## Applicants

### Deadlines and reminders

- Applicants can easily see the competition timeline: when each round opens, when submissions are due, and when events take place.
- Applicants get email reminders about upcoming deadlines and events. Organizers configure when reminders are sent (for example, 3 days and 1 day before a deadline).

### Submitting

- The app automatically shows the applicant the form for the current round, based on the upcoming deadline.
- Applicants can change and update their submission at any time until the round's deadline, including the product name and description (for example, if the original product is scrapped and replaced with a new one). After the deadline, the submission is locked.

### Feedback

- Applicants can view the feedback judges gave them. Feedback for a round is released to applicants all at once when that round's judging period ends, not as each judge finishes.

## Judges

### Reviewing submissions

Judging works the same way for every round type:

1. **Review the submission**: the judge reads the written entry, watches the video, or attends the live presentation.
2. **Score and give feedback**: the judge uses a screen with two side-by-side panes that scroll independently, with the round's rubric on one side and the judge's feedback input on the other.

This layout is the current plan and may change if it doesn't work well in practice.

### Voice feedback

- Judges can record their feedback by voice instead of typing it. For each piece of feedback, the judge chooses whether the applicant receives it as a transcription or as an audio file.

### Ranking and adjusting scores

- Once a judge has scored all of their assigned pitches for a round, they can view those pitches in rank order by score.
- Judges can reorder the list, and the scores adjust to match the new order. This lets judges check that their scores reflect how the pitches compare to each other. Exactly how scores adjust when a pitch is moved has not been decided yet.
- Scores and rankings lock when the round's judging period ends, on the date set by the organizer.

## Timeline-driven access

The competition timeline controls what everyone sees. Based on each round's dates, the app automatically opens, closes, and shows the right parts of the competition to applicants and judges. For example, a submission form appears when a round opens and locks at its deadline, and judging becomes available when it is scheduled to start.

Detailed rules, such as entry types (individual or team), submission fields, and rubric structure, are still being designed.

## Example: Grove City College entrepreneurship competitions

The Elevator Pitch Competition and Wolverine Venture Battle each run in three rounds. They are a good example of what an organizer might set up:

1. **Written application**: Applicants submit identifying information, a product name, and a short written description. Judges review the ideas and provide feedback. Elevator Pitch entries are individual; Wolverine Venture Battle entries are submitted by teams (possibly one profile per team, created by a designated group leader).
2. **Pitch video**: Applicants can update their product name and description and submit a video pitch. Judges review the videos, provide feedback, and select finalists.
3. **Live presentation**: Finalists present live. Judges use the app to score presentations and leave feedback. Afterward, applicants can view their feedback.

## Planned technology and deployment

- **Backend:** Java with Javalin
- **Frontend:** React with Vite
- **Deployment:** Railway is the planned platform for hosting the application and providing a managed database. A persistent file-storage solution for uploaded files such as pitch videos still needs to be selected.

The database technology, file-storage provider, and deployment configuration have not been chosen yet.

## Project status

This project is in the planning / initial-development stage. The repository contains initial backend and frontend scaffolding; application features and local setup instructions have not been added yet.

## Contributors

Developed by Kendall Coddington and Robert Myer.
