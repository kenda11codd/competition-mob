# Competition Mob

Competition Mob aims to recreate the software used to manage Grove City College's Entrepreneurship competitions (the Elevator Pitch Competition and Wolverine Venture Battle). It is intended to support the process from student applications through judging and feedback.

## Users

- **Administrators** — Entrepreneurship department heads who configure and run the competitions.
- **Judges** — Review submissions, provide feedback, select finalists, and score live presentations.
- **Applicants** — Students who submit individual or team ventures and review feedback.

## Competition workflow

Both competitions are planned to have three phases, each with its own deadlines. Detailed competition rules and scoring criteria will be added later.

### Phase 1: Written application

Applicants submit identifying information, a product name, and a short written description. Elevator Pitch applications are individual; Wolverine Venture Battle applications are submitted by teams (one profile per team created by designated group leader?). Judges review the ideas and provide feedback.

### Phase 2: Pitch video

Applicants can update their product name and description and submit a video pitch. Judges review the videos, provide feedback, and select finalists to advance to Phase 3.

### Phase 3: Live presentation

Finalists present live. Judges use the app to score presentations and leave feedback. After the competition, students can view the feedback.

## Planned technology and deployment

- **Backend:** Java with Javalin
- **Frontend:** React with Vite
- **Deployment:** Railway is the planned platform for hosting the application and providing a managed database. A suitable persistent file-storage solution for uploaded pitch videos still needs to be selected.

The database technology, file-storage provider, and deployment configuration have not been chosen yet.

## Project status

This project is in the planning / initial-development stage. The repository currently contains this README; application code and local setup instructions have not been added yet.

## Contributors

Developed by Kendall Coddington and Robert Myer.
