// Temporary in-memory data so the UI can be built before the backend exists.
// Replace these functions with real fetch() calls to the Javalin API later;
// they already return Promises so callers won't need to change.

const competitions = [
  {
    id: 'elevator-pitch-2027',
    name: 'Elevator Pitch Competition 2027',
    startDate: '2027-01-11',
    endDate: '2027-03-20',
    rounds: [
      { name: 'Written application', opensAt: '2027-01-11', dueAt: '2027-01-25', judgingEndsAt: '2027-02-01' },
      { name: 'Pitch video', opensAt: '2027-02-02', dueAt: '2027-02-16', judgingEndsAt: '2027-02-23' },
      { name: 'Live presentation', opensAt: '2027-03-20', dueAt: '2027-03-20', judgingEndsAt: '2027-03-20' },
    ],
  },
  {
    id: 'wolverine-venture-battle-2027',
    name: 'Wolverine Venture Battle 2027',
    startDate: '2027-02-01',
    endDate: '2027-04-17',
    rounds: [],
  },
  {
    id: 'elevator-pitch-2026',
    name: 'Elevator Pitch Competition 2026',
    startDate: '2026-01-12',
    endDate: '2026-03-21',
    rounds: [
      { name: 'Written application', opensAt: '2026-01-12', dueAt: '2026-01-26', judgingEndsAt: '2026-02-02' },
      { name: 'Pitch video', opensAt: '2026-02-03', dueAt: '2026-02-17', judgingEndsAt: '2026-02-24' },
      { name: 'Live presentation', opensAt: '2026-03-21', dueAt: '2026-03-21', judgingEndsAt: '2026-03-21' },
    ],
  },
]

export async function listCompetitions() {
  return structuredClone(competitions)
}
