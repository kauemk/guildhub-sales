import { Shield, ChevronRight, Volume2, Timer, Trophy, Gavel } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-gradient hero-grid relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: '80px' }}>
      {/* Radial glows */}
      <div className="absolute top-1/3 left-1/4 w-[30vw] h-[30vw] max-w-[700px] max-h-[700px] rounded-full bg-emerald-500/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[25vw] h-[25vw] max-w-[500px] max-h-[500px] rounded-full bg-emerald-500/3 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 mb-8">
              <span className="text-emerald-400 text-xs font-bold tracking-widest" style={{ fontFamily: 'var(--font-display)' }}>
                A PLATAFORMA #1 PARA GUILDS DE MMORPG
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '-1.5px' }}
            >
              Gerencie Sua Guild
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
                Como um Profissional.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-gray-400 max-w-lg mb-8 leading-relaxed">
              Boss Timer com <strong className="text-emerald-400">alertas sonoros</strong>, DKP automatizado, leilões transparentes, rankings em tempo real e muito mais.
              Tudo que sua guild precisa em um só lugar.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
              <a href="#planos" className="cta-btn">
                <Shield size={18} />
                COMEÇAR AGORA
              </a>
              <a href="#funcionalidades" className="cta-btn-secondary">
                Ver funcionalidades
                <ChevronRight size={16} className="ml-2" />
              </a>
            </div>

            {/* Stats strip */}
            <div className="flex flex-wrap gap-6 sm:gap-10">
              {[
                { icon: Timer, value: 'Sync 3s', label: 'Tempo real' },
                { icon: Volume2, value: 'Alertas', label: 'Sonoros' },
                { icon: Trophy, value: 'Rankings', label: 'Automáticos' },
                { icon: Gavel, value: 'Leilões', label: 'Transparentes' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2.5">
                  <div className="bg-emerald-500/10 p-2 rounded-lg">
                    <s.icon size={16} className="text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-bold" style={{ fontFamily: 'var(--font-display)', fontSize: '11px' }}>{s.value}</div>
                    <div className="text-gray-500 text-xs">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard Mockup */}
          <div className="mockup-frame float">
            <div className="mockup-header">
              <div className="mockup-dot" style={{ background: '#ff5f57' }} />
              <div className="mockup-dot" style={{ background: '#febc2e' }} />
              <div className="mockup-dot" style={{ background: '#28c840' }} />
              <span className="text-gray-500 text-[11px] ml-3">MY GUILD HUB — Dashboard</span>
            </div>
            <div className="p-4">
              {/* Mini dashboard mockup */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                {[
                  { label: 'MEMBROS', value: '86', color: 'text-emerald-400' },
                  { label: 'BOSSES HOJE', value: '23', color: 'text-amber-400' },
                  { label: 'DKP TOTAL', value: '14.2K', color: 'text-sky-400' },
                ].map((s) => (
                  <div key={s.label} className="bg-white/5 border border-white/5 rounded-lg p-3 text-center">
                    <div className={`font-bold text-lg ${s.color}`} style={{ fontFamily: 'var(--font-display)' }}>{s.value}</div>
                    <div className="text-gray-500 text-[9px] uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Mini chart */}
              <div className="bg-white/3 border border-white/5 rounded-lg p-3 mb-3">
                <div className="text-white text-[10px] font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>ATIVIDADE SEMANAL</div>
                <div className="flex items-end gap-1 h-12">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div key={i} className="flex-1 bg-emerald-500/40 rounded-t" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <div className="flex justify-between text-[8px] text-gray-600 mt-1">
                  <span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span><span>Dom</span>
                </div>
              </div>

              {/* Mini rankings */}
              <div className="bg-white/3 border border-white/5 rounded-lg p-3">
                <div className="text-white text-[10px] font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>TOP RANKINGS</div>
                {[
                  { rank: 1, nick: 'ValkyrieStorm', power: '312K', color: 'text-amber-400' },
                  { rank: 2, nick: 'FrostArcher', power: '285K', color: 'text-gray-300' },
                  { rank: 3, nick: 'HolyPriest', power: '248K', color: 'text-orange-400' },
                ].map((r) => (
                  <div key={r.nick} className="flex items-center justify-between py-1.5 text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className={`font-bold ${r.color}`}>#{r.rank}</span>
                      <span className="text-white font-semibold" style={{ fontFamily: 'var(--font-display)' }}>{r.nick}</span>
                    </div>
                    <span className="text-emerald-400 font-bold" style={{ fontFamily: 'var(--font-display)' }}>{r.power}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
