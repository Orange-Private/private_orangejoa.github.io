export default function Hero() {
  return (
    <section id="top" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      padding: '100px 0 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* subtle dot grid bg */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'radial-gradient(rgba(88,166,255,0.06) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="fade-up">
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'rgba(88,166,255,0.08)', border: '1px solid rgba(88,166,255,0.2)',
            borderRadius: 20, padding: '4px 12px',
            fontSize: 12, color: 'var(--accent)', fontWeight: 500,
            marginBottom: 28,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }} />
            Available for opportunities
          </span>
        </div>

        <h1 className="fade-up d1" style={{
          fontSize: 'clamp(40px, 6vw, 68px)',
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: '-1.5px',
          color: 'var(--text)',
          marginBottom: 20,
        }}>
          Full-Stack<br />
          <span style={{ color: 'var(--accent)' }}>Developer</span>
        </h1>

        <p className="fade-up d2" style={{
          fontSize: 16, color: 'var(--text2)', maxWidth: 480,
          lineHeight: 1.8, marginBottom: 36,
        }}>
          React · TypeScript · Java 기반의 풀스택 개발자.<br />
          사용자 경험과 코드 품질 모두를 중시합니다.
        </p>

        <div className="fade-up d3" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a
            href="#projects"
            style={{
              background: 'var(--accent)', color: '#0d1117',
              padding: '10px 22px', borderRadius: 6, fontWeight: 600, fontSize: 14,
              border: '1px solid var(--accent)',
              transition: 'opacity 0.2s',
            }}
          >
            View Projects
          </a>
          <a
            href="https://github.com/orangejoa"
            target="_blank"
            rel="noreferrer"
            style={{
              background: 'transparent', color: 'var(--text)',
              padding: '10px 22px', borderRadius: 6, fontWeight: 500, fontSize: 14,
              border: '1px solid var(--border)',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--border)')}
          >
            GitHub ↗
          </a>
        </div>

        {/* Tech stack mini-badges */}
        <div className="fade-up d4" style={{
          display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 56,
        }}>
          {['React', 'TypeScript', 'Java', 'Spring', 'Git'].map(tech => (
            <span key={tech} style={{
              background: 'var(--bg2)', border: '1px solid var(--border)',
              borderRadius: 4, padding: '4px 10px',
              fontSize: 12, color: 'var(--text2)', fontWeight: 500,
            }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
