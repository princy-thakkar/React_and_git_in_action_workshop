import { useEffect, useState } from 'react'
import './App.css'

type Fact = {
  id: string
  text: string
  source: string
  source_url: string
  language: string
  permalink: string
}

function App() {
  const [count, setCount] = useState(0)
  const [fact, setFact] = useState<Fact | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const API_URL = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en'

  const fallbackFact: Fact = {
    id: 'b912ba77f1676672c46592fe6deeefd0',
    text: 'The NY phone book had 22 Hitlers before WWII. The NY phone book had 0 Hitlers after WWII.',
    source: 'djtech.net',
    source_url: 'https://www.djtech.net/humor/shorty_useless_facts.htm',
    language: 'en',
    permalink: 'https://uselessfacts.jsph.pl/api/v2/facts/b912ba77f1676672c46592fe6deeefd0'
  }

  async function loadFact(signal?: AbortSignal) {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(API_URL, { signal })
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
      const data = await res.json()
      setFact(data as Fact)
    } catch (e: any) {
      if (e?.name === 'AbortError') return
      setError(e?.message ?? String(e))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    loadFact(controller.signal)
    return () => controller.abort()
  }, [])

  return (
    <div className="app">
      <header className="header">
        <div>
          <div className="title">Useless Facts</div>
          <div className="read-the-docs">Random facts from the Useless Facts API</div>
        </div>
        <div className="controls">
          <button className="btn" onClick={() => setCount((c) => c + 1)}>count is {count}</button>
          <button className="btn secondary" onClick={() => loadFact()} disabled={loading}>{loading ? <span className="spinner"/> : 'Load fact'}</button>
          <button className="btn secondary" onClick={() => setFact(fallbackFact)}>Show sample fact</button>
        </div>
      </header>

      <main>
        <div className="fact-card">
          {loading && <div className="status" aria-live="polite">Loading…</div>}
          {error && <div className="status" style={{ color: 'crimson' }}>Error: {error}</div>}

          {fact ? (
            <article>
              <p className="fact-text">{fact.text}</p>
            </article>
          ) : (
            <div className="status">No fact loaded yet. Click "Load fact" or "Show sample fact".</div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
