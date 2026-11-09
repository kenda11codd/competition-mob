import { useEffect, useState } from 'react'
import { listCompetitions } from '../api/competitions.js'
import { describeStatus, formatDateRange, isFinished } from '../competitionStatus.js'

export default function OrganizerHome({ onCreate, onOpen }) {
  const [competitions, setCompetitions] = useState(null)
  const [showPast, setShowPast] = useState(false)

  useEffect(() => {
    listCompetitions().then(setCompetitions)
  }, [])

  if (competitions === null) {
    return <p className="muted">Loading…</p>
  }

  const current = competitions.filter((c) => !isFinished(c))
  const past = competitions.filter((c) => isFinished(c))

  if (current.length === 0 && past.length === 0) {
    return (
      <section className="empty">
        <h1 className="display">Let’s set up your first competition.</h1>
        <p className="lead">We’ll walk you through it one step at a time.</p>
        <button className="pill lime large" onClick={onCreate}>
          Create a competition
          <span className="pill-icon" aria-hidden="true">+</span>
        </button>
      </section>
    )
  }

  // Highlight exactly one card: the first that needs setup, otherwise the soonest one.
  const needsSetupIndex = current.findIndex((c) => describeStatus(c).needsSetup)
  const featuredIndex = needsSetupIndex === -1 ? 0 : needsSetupIndex

  return (
    <section>
      <div className="page-heading">
        <h1 className="display">
          Your
          <br />
          competitions
        </h1>
        <button className="pill dark" onClick={onCreate}>
          New competition
          <span className="pill-icon" aria-hidden="true">+</span>
        </button>
      </div>

      {current.length === 0 ? (
        <p className="muted">You don’t have any upcoming competitions.</p>
      ) : (
        <ul className="competition-list">
          {current.map((c, i) => (
            <CompetitionCard key={c.id} competition={c} featured={i === featuredIndex} onOpen={onOpen} />
          ))}
        </ul>
      )}

      {past.length > 0 && (
        <div className="past">
          <button className="pill ghost" onClick={() => setShowPast(!showPast)} aria-expanded={showPast}>
            {showPast ? 'Hide' : 'Show'} past competitions ({past.length})
          </button>
          {showPast && (
            <ul className="competition-list">
              {past.map((c) => (
                <CompetitionCard key={c.id} competition={c} onOpen={onOpen} />
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  )
}

function CompetitionCard({ competition, featured = false, onOpen }) {
  const status = describeStatus(competition)
  const open = () => onOpen(competition)

  return (
    <li className={featured ? 'card featured' : 'card'}>
      <div className="card-body">
        <p className="card-dates">{formatDateRange(competition.startDate, competition.endDate)}</p>
        <h2>{competition.name}</h2>
        <p className="status">{status.text}</p>
      </div>
      {status.needsSetup ? (
        <button className="pill lime" onClick={open}>
          Finish setup
          <span className="pill-icon" aria-hidden="true">→</span>
        </button>
      ) : (
        <button className="circle" onClick={open} aria-label={`Open ${competition.name}`}>
          →
        </button>
      )}
    </li>
  )
}
