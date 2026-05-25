import SectionPlaceholder from '../components/SectionPlaceholder'

function HomePage() {
  return (
    <main className="app-shell">
      <section className="hero-placeholder">
        <p className="eyebrow">Clone Practice Workspace</p>
        <h1 className="page-title">Ready to rebuild a page one section at a time.</h1>
        <p className="page-intro">
          This starter keeps the project runnable while we replace the default Vite
          demo with real reference-driven sections.
        </p>
      </section>

      <SectionPlaceholder
        eyebrow="Next Step"
        title="Add screenshots and notes, then start the first visual analysis."
        description="Place target screenshots in references/screenshots and any layout or interaction observations in references/notes before the first implementation phase."
      />
    </main>
  )
}

export default HomePage
