import { useState } from 'react'
import OrganizerHome from './pages/OrganizerHome.jsx'
import './styles/global.css'

// Login is skipped for now: the app opens as a signed-in organizer.
// Simple view switching until real routing is needed.
export default function App() {
  const [view, setView] = useState({ name: 'home' })
  const goHome = () => setView({ name: 'home' })

  return (
    <>
      <header className="app-header">
        <button className="brand" onClick={goHome}>
          <span className="brand-mark" aria-hidden="true" />
          Competition Mob
        </button>
      </header>
      <main className="container">
        {view.name === 'home' && (
          <OrganizerHome
            onCreate={() => setView({ name: 'create' })}
            onOpen={(competition) => setView({ name: 'competition', competition })}
          />
        )}
        {view.name === 'create' && (
          <ComingSoon title="Create a competition" onBack={goHome} />
        )}
        {view.name === 'competition' && (
          <ComingSoon title={view.competition.name} onBack={goHome} />
        )}
      </main>
    </>
  )
}

function ComingSoon({ title, onBack }) {
  return (
    <section>
      <button className="circle back" onClick={onBack} aria-label="Back to your competitions">
        ←
      </button>
      <h1 className="display">{title}</h1>
      <p className="lead">This screen hasn’t been built yet.</p>
    </section>
  )
}
