// Turns a competition's round dates into a plain-language sentence about where
// it stands. Status is derived from the timeline, never stored by hand.

const dateFormat = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' })
const dateWithYear = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

// Dates are stored as YYYY-MM-DD; parse them as local dates, not UTC.
function parseDate(value) {
  const [y, m, d] = value.split('-').map(Number)
  return new Date(y, m - 1, d)
}

// End of the given day, so a deadline of Jan 25 lasts through Jan 25.
function endOfDay(value) {
  const date = parseDate(value)
  date.setHours(23, 59, 59, 999)
  return date
}

export function formatDate(value) {
  return dateFormat.format(parseDate(value))
}

export function formatDateRange(start, end) {
  return `${dateFormat.format(parseDate(start))} – ${dateWithYear.format(parseDate(end))}`
}

export function isFinished(competition, now = new Date()) {
  return now > endOfDay(competition.endDate)
}

export function describeStatus(competition, now = new Date()) {
  const { rounds } = competition

  if (rounds.length === 0) {
    return { text: 'Setup isn’t finished. Add rounds so applications can open.', needsSetup: true }
  }

  if (isFinished(competition, now)) {
    return { text: `Finished ${formatDate(competition.endDate)}.` }
  }

  for (const [index, round] of rounds.entries()) {
    const label = `Round ${index + 1} (${round.name})`

    if (now < parseDate(round.opensAt)) {
      return { text: `${label} opens ${formatDate(round.opensAt)}.` }
    }
    if (now <= endOfDay(round.dueAt)) {
      return { text: `${label} is open. Submissions are due ${formatDate(round.dueAt)}.` }
    }
    if (now <= endOfDay(round.judgingEndsAt)) {
      return { text: `${label} is being judged. Judging ends ${formatDate(round.judgingEndsAt)}.` }
    }
  }

  return { text: `All rounds are complete. The competition ends ${formatDate(competition.endDate)}.` }
}
