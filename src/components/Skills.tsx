const SKILLS = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Vite'],
  },
  {
    category: 'Backend',
    items: ['Java', 'Spring Boot', 'REST API'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'IntelliJ', 'VS Code'],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '80px 0' }}>
      <div style={{ height: 1, background: 'var(--border)', marginBottom: 80 }} />
      <div className="container">
        <span className="label">Skills</span>
        <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.5px', marginBottom: 8 }}>
          기술 스택
        </h2>
        <p style={{ color: 'var(--text2)', fontSize: 14, marginBottom: 40 }}>
          주로 사용하는 언어와 도구입니다.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: 16,
        }}>
          {SKILLS.map(group => (
            <div key={group.category} style={{
              background: 'var(--bg2)',
              border: '1px solid var(--border)',
              borderRadius: 8, padding: 20,
            }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14 }}>
                {group.category}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {group.items.map(item => (
                  <span key={item} style={{
                    background: 'var(--bg3)', border: '1px solid var(--border)',
                    borderRadius: 4, padding: '4px 10px',
                    fontSize: 12, color: 'var(--text)', fontWeight: 500,
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
