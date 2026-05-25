function SectionPlaceholder({ eyebrow, title, description }) {
  return (
    <section className="section-placeholder">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{description}</p>
    </section>
  )
}

export default SectionPlaceholder
