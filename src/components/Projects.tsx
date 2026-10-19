interface Project {
  name: string
  description: string
  tags: string[]
  github?: string
  demo?: string
  wip?: boolean
}

const PROJECTS: Project[] = [
  {
    name: 'tradeRecipe',
    description: '퀀텀 투자 전략 시뮬레이션 플랫폼. 알고리즘 기반의 투자 레시피를 생성하고 백테스트를 통해 전략의 유효성을 검증합니다.',
    tags: ['Java', 'Spring'],
    github: 'https://github.com/orangejoa/private_tradeRecipe',
  },
  {
    name: 'Mini Team Project',
    description: '준비 중입니다.',
    tags: [],
    wip: true,
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '80px 0' }}>
      <div style={{ height: 1, background: 'var(--border)', marginBottom: 80 }} />
      <div className="container">
        <span className="label">Projects</span>
        <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.5px', marginBottom: 8 }}>
          만든 것들
        </h2>
        <p style={{ color: 'var(--text2)', fontSize: 14, marginBottom: 40 }}>
          직접 설계하고 개발한 프로젝트들입니다.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 16,
        }}>
          {PROJECTS.map(p => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project: p }: { project: Project }) {
  return (
    <div style={{
      background: 'var(--bg2)',
      border: '1px solid var(--border)',
      borderRadius: 8,
      padding: 24,
      display: 'flex', flexDirection: 'column', gap: 12,
      opacity: p.wip ? 0.4 : 1,
      position: 'relative', overflow: 'hidden',
      transition: 'border-color 0.2s',
    }}
      onMouseEnter={e => !p.wip && ((e.currentTarget as HTMLElement).style.borderColor = 'rgba(88,166,255,0.4)')}
      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}
    >
      {/* top row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{
          width: 36, height: 36, borderRadius: 6,
          background: p.wip ? 'var(--bg3)' : 'rgba(88,166,255,0.1)',
          border: `1px solid ${p.wip ? 'var(--border)' : 'rgba(88,166,255,0.2)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 16,
        }}>
          {p.wip ? '⋯' : '◈'}
        </div>
        {!p.wip && p.github && (
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            style={{
              color: 'var(--text2)', background: 'var(--bg3)',
              border: '1px solid var(--border)', borderRadius: 4,
              padding: '3px 8px', fontSize: 11, fontWeight: 500,
              display: 'flex', alignItems: 'center', gap: 4,
            }}
          >
            <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            Code
          </a>
        )}
        {p.wip && (
          <span style={{ fontSize: 11, color: 'var(--text2)', fontWeight: 500 }}>Coming soon</span>
        )}
      </div>

      {/* content */}
      <div>
        <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)', marginBottom: 6 }}>
          {p.name}
        </h3>
        <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.7 }}>
          {p.description}
        </p>
      </div>

      {/* tags */}
      {p.tags.length > 0 && (
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
          {p.tags.map(tag => (
            <span key={tag} style={{
              fontSize: 11, fontWeight: 500,
              color: 'var(--accent)', background: 'rgba(88,166,255,0.08)',
              border: '1px solid rgba(88,166,255,0.15)',
              borderRadius: 4, padding: '2px 7px',
            }}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
