import { BarChart3, Trophy, Gavel, Users, Handshake, Map, ScrollText, Timer } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

/* ════════════════════════════════════════════════
   FEATURE DATA
   ════════════════════════════════════════════════ */

const features = [
  {
    icon: Timer,
    badge: 'EXCLUSIVO',
    badgeColor: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    title: 'Boss Timer em Tempo Real',
    desc: 'Timer sincronizado entre todos os membros. Registre kills, acompanhe respawns, reserve spots com AFK. Cada guild tem dados isolados e seguros.',
    bullets: ['Sync em 3 segundos', 'Multi-área: Túmulo, Mirk, Nida, Folk', 'Sistema AFK / Reserva de Spot', 'Kill log automático', 'Alertas sonoros configuráveis'],
    mockup: <BossTimerMockup />,
  },
  {
    icon: Trophy,
    badge: 'RANKINGS',
    badgeColor: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    title: 'Rankings & DKP Automatizado',
    desc: 'Ranking por Power, Level, DKP e Atividades. Pontuação calculada automaticamente. Sistema de taxas e controle total.',
    bullets: ['Rankings de Power, Level, DKP', 'Presença automática em atividades', 'Sistema de taxas semanal/mensal', 'Tags e filtros por cargo'],
    mockup: <RankingsMockup />,
  },
  {
    icon: Gavel,
    badge: 'LEILÕES',
    badgeColor: 'bg-violet-500/10 border-violet-500/30 text-violet-400',
    title: 'Leilões de Loot Transparentes',
    desc: 'Distribua loot com lances em DKP. Totalmente auditável. Sem briga, sem injustiça.',
    bullets: ['Lances em DKP automatizados', 'Timer de leilão configurável', 'Histórico completo de bids', 'Upload de imagem do item'],
    mockup: <AuctionMockup />,
  },
  {
    icon: BarChart3,
    badge: 'ANALYTICS',
    badgeColor: 'bg-sky-500/10 border-sky-500/30 text-sky-400',
    title: 'Analytics & Dashboard Completo',
    desc: 'Estatísticas detalhadas: composição por função, evolução individual, atividades por tag. Gráficos interativos.',
    bullets: ['Composição por função (Tank, DPS, Healer)', 'Evolução de Power/Level por período', 'Ranking de participação', 'Filtros por tag e período'],
    mockup: <AnalyticsMockup />,
  },
  {
    icon: ScrollText,
    badge: 'LOGS',
    badgeColor: 'bg-red-500/10 border-red-500/30 text-red-400',
    title: 'Kill Log Detalhado',
    desc: 'Histórico completo de kills e resets por área. Saiba quem matou o quê, quando e onde.',
    bullets: ['Log por área com timestamps', 'Nome do killer em destaque', 'Registro automático por reset/kill', 'Auditoria completa'],
    mockup: <KillLogMockup />,
  },
  {
    icon: Users,
    badge: 'MEMBROS',
    badgeColor: 'bg-orange-500/10 border-orange-500/30 text-orange-400',
    title: 'Gestão Completa de Membros',
    desc: 'Cargos hierárquicos, tags personalizadas, presença online, metas individuais e auditoria.',
    bullets: ['Hierarquia: Master > Admin > Supervisor > Player', 'Tags customizadas por cargo', 'Presença online em tempo real', 'Metas de Power e Level por membro'],
    mockup: <MembersMockup />,
  },
  {
    icon: Handshake,
    badge: 'ALIANÇAS',
    badgeColor: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    title: 'Sistema de Alianças',
    desc: 'Compartilhe boss timers com guilds aliadas. Coordene sem abrir mão do controle dos seus dados.',
    bullets: ['Convites por link', 'Timers compartilhados', 'Dados isolados por guild', 'Aceitar/recusar alianças'],
    mockup: <AllianceMockup />,
  },
  {
    icon: Map,
    badge: 'XP & PARTY',
    badgeColor: 'bg-pink-500/10 border-pink-500/30 text-pink-400',
    title: 'Salão XP + Party + Torre da Benção',
    desc: 'Controle de spots de XP, formação de parties com convites, e timer de buff da Torre com alertas.',
    bullets: ['Salão de spots XP por nível', 'Sistema de party com convites', 'Torre da Benção com alertas', 'Marcadores de Texas e XP'],
    mockup: <SalaoMockup />,
  },
];

/* ════════════════════════════════════════════════
   MAIN COMPONENT — Zigzag Layout
   ════════════════════════════════════════════════ */

export default function Features() {
  const ref = useReveal();

  return (
    <section id="funcionalidades" className="relative">
      <div ref={ref} className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-widest mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            FUNCIONALIDADES
          </span>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl mb-4">
            Tudo que sua guild precisa
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Do dashboard ao timer de boss — cada ferramenta foi feita para guilds que levam o jogo a sério.
          </p>
        </div>

        {/* Feature rows — zigzag */}
        <div className="space-y-20 lg:space-y-28">
          {features.map((f, i) => (
            <div key={f.title} className={`feature-row ${i % 2 !== 0 ? 'reverse' : ''}`}>
              {/* Text */}
              <div className="feature-text">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold tracking-widest mb-4 ${f.badgeColor}`} style={{ fontFamily: 'var(--font-display)' }}>
                  <f.icon size={12} />
                  {f.badge}
                </div>

                <h3 className="section-title text-2xl sm:text-3xl mb-4">
                  {f.title}
                </h3>

                <p className="text-gray-400 text-[16px] leading-relaxed mb-6">
                  {f.desc}
                </p>

                <ul className="space-y-3">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-gray-300 text-[15px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mockup */}
              <div className="feature-mockup">
                <div className="mockup-frame">
                  <div className="mockup-header">
                    <div className="mockup-dot" style={{ background: '#ff5f57' }} />
                    <div className="mockup-dot" style={{ background: '#febc2e' }} />
                    <div className="mockup-dot" style={{ background: '#28c840' }} />
                  </div>
                  <div className="p-3 sm:p-4">{f.mockup}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════
   MOCKUPS
   ════════════════════════════════════════════════ */

function BossTimerMockup() {
  return (
    <div className="text-[11px]">
      {/* Header bar fiel ao app */}
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
        <span className="text-white font-bold text-[12px]" style={{ fontFamily: 'var(--font-display)' }}>BOSS TIMER</span>
        <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold">● SYNC ATIVO</span>
      </div>
      {/* Túmulo */}
      <div className="mb-3">
        <div className="text-amber-400 font-bold text-[12px] tracking-wider mb-1.5 flex items-center gap-2" style={{ fontFamily: 'var(--font-display)' }}>
          <span>👑</span> TÚMULO DO REI
        </div>
        <div className="space-y-1">
          {[
            { id: '66', ch1: '29:02', ch2: '29:11' },
            { id: '67', ch1: '29:10', ch2: '29:02' },
            { id: '68', ch1: '04:15', ch2: '29:08' },
          ].map((b) => (
            <div key={b.id} className="flex items-center gap-2 py-1 px-2 rounded bg-white/2 border border-white/4 text-[11px]">
              <span className="text-gray-500 font-semibold w-6">⊕{b.id}</span>
              <span className="text-gray-600 text-[9px]">CH1</span>
              <span className={`timer-value ${parseFloat(b.ch1) < 5 ? 'low' : 'normal'}`} style={{ fontSize: '11px', padding: '1px 6px' }}>{b.ch1}</span>
              <span className="text-gray-600 text-[9px] ml-1">CH2</span>
              <span className="timer-value normal" style={{ fontSize: '11px', padding: '1px 6px' }}>{b.ch2}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Mirk */}
      <div className="mb-3">
        <div className="text-emerald-400 font-bold text-[12px] tracking-wider mb-1.5 flex items-center gap-2" style={{ fontFamily: 'var(--font-display)' }}>
          <span>⊕</span> MYRKHEIMR
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2 py-1 px-2 rounded bg-white/2 border border-white/4 text-[11px]">
            <span className="text-gray-500 font-semibold w-6">⊕66</span>
            <span className="text-gray-600 text-[9px]">CH1</span>
            <span className="timer-value normal" style={{ fontSize: '11px', padding: '1px 6px' }}>29:03</span>
            <span className="text-gray-600 text-[9px] ml-1">CH2</span>
            <span className="timer-value afk" style={{ fontSize: '11px', padding: '1px 6px' }}>29:25 <span className="text-[8px]">AFK</span></span>
          </div>
          <div className="flex items-center gap-2 py-1 px-2 rounded bg-white/2 border border-white/4 text-[11px]">
            <span className="text-gray-500 font-semibold w-6">⊕67</span>
            <span className="text-gray-600 text-[9px]">CH1</span>
            <span className="timer-value normal" style={{ fontSize: '11px', padding: '1px 6px' }}>29:16</span>
            <span className="text-gray-600 text-[9px] ml-1">CH2</span>
            <span className="timer-value normal" style={{ fontSize: '11px', padding: '1px 6px' }}>29:14</span>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="flex justify-between pt-2 border-t border-white/5 text-[9px] text-gray-500">
        <span>5 bosses . 2 áreas</span>
        <span className="text-emerald-400">● Sync ativo — 3s</span>
      </div>
    </div>
  );
}

function RankingsMockup() {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-white font-bold text-[13px]" style={{ fontFamily: 'var(--font-display)' }}>RANKINGS</div>
          <div className="text-gray-600 text-[9px]">86 membros ativos</div>
        </div>
        <div className="flex gap-1">
          {['POWER', 'LEVEL', 'DKP'].map((t, i) => (
            <span key={t} className={`text-[9px] px-2 py-0.5 rounded font-bold ${i === 0 ? 'bg-emerald-500 text-white' : 'bg-white/5 text-gray-500'}`} style={{ fontFamily: 'var(--font-display)' }}>{t}</span>
          ))}
        </div>
      </div>
      <div className="space-y-1.5">
        {[
          { rank: 1, nick: 'ValkyrieStorm', cls: 'Berserker', value: '312.000', badge: 'MINHA GUILD' },
          { rank: 2, nick: 'FrostArcher', cls: 'Arqueiro', value: '285.000' },
          { rank: 3, nick: 'HolyPriest', cls: 'Sacerdote', value: '248.000' },
          { rank: 4, nick: 'ShadowBlade', cls: 'Guerreiro', value: '221.000' },
        ].map((r) => (
          <div key={r.nick} className="flex items-center justify-between py-2 px-3 rounded-lg bg-white/3 border border-white/5">
            <div className="flex items-center gap-2.5">
              <span className="text-gray-500 font-bold text-[11px]" style={{ fontFamily: 'var(--font-display)' }}>#{r.rank}</span>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-bold text-[12px]" style={{ fontFamily: 'var(--font-display)' }}>{r.nick}</span>
                  {'badge' in r && r.badge && (
                    <span className="text-[7px] px-1 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">{r.badge}</span>
                  )}
                </div>
                <div className="text-gray-500 text-[9px]">{r.cls}</div>
              </div>
            </div>
            <span className="text-emerald-400 font-bold text-[13px]" style={{ fontFamily: 'var(--font-display)' }}>{r.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AuctionMockup() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-4 py-2">
        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center shrink-0">
          <Gavel size={22} className="text-amber-400" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-white font-semibold text-[13px]">Espada do Ragnarok</div>
          <div className="text-gray-500 text-[11px] mt-0.5">Leilão ativo . 5 lances</div>
          <div className="flex items-center justify-between mt-1.5">
            <span className="text-emerald-400 font-bold text-[14px]" style={{ fontFamily: 'var(--font-display)' }}>680 DKP</span>
            <span className="text-[10px] text-amber-400">01:22:45</span>
          </div>
        </div>
      </div>
      <div className="bg-white/3 border border-white/5 rounded-lg p-3 text-[11px]">
        <div className="text-gray-500 mb-2 uppercase tracking-wider font-semibold text-[9px]">Últimos lances</div>
        <div className="space-y-1.5">
          <div className="flex justify-between"><span className="text-sky-400 font-semibold">FrostArcher</span><span className="text-emerald-400 font-bold">680 DKP</span></div>
          <div className="flex justify-between"><span className="text-amber-400 font-semibold">ValkyrieStorm</span><span className="text-gray-400">620 DKP</span></div>
          <div className="flex justify-between"><span className="text-violet-400 font-semibold">RuneMaster</span><span className="text-gray-400">550 DKP</span></div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsMockup() {
  return (
    <div className="space-y-3">
      {/* Header fiel ao app */}
      <div className="flex items-center justify-between pb-2 border-b border-white/5">
        <span className="text-white font-bold text-[12px]" style={{ fontFamily: 'var(--font-display)' }}>ANALYTICS</span>
        <div className="flex gap-1">
          {['7 DIAS', '30 DIAS', '90 DIAS'].map((t, i) => (
            <span key={t} className={`text-[8px] px-1.5 py-0.5 rounded font-bold ${i === 1 ? 'bg-white/10 text-white' : 'bg-transparent text-gray-600'}`}>{t}</span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'ATIVIDADES', value: '47', icon: '☑' },
          { label: 'PARTICIPAÇÕES', value: '126', icon: '👥' },
          { label: 'MÉDIA', value: '2.7', icon: '—' },
        ].map((s) => (
          <div key={s.label} className="bg-white/5 border border-white/5 rounded-lg p-2.5 text-center">
            <div className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>{s.value}</div>
            <div className="text-gray-500 text-[8px] uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="bg-white/3 border border-white/5 rounded-lg p-3">
        <div className="text-white text-[10px] font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>COMPOSIÇÃO POR FUNÇÃO</div>
        <div className="flex items-end gap-3 h-12 px-2">
          {[
            { h: '50%', color: 'bg-sky-500', label: 'Tank' },
            { h: '80%', color: 'bg-orange-400', label: 'DPS R.' },
            { h: '35%', color: 'bg-emerald-400', label: 'Healer' },
            { h: '60%', color: 'bg-red-400', label: 'DPS M.' },
          ].map((b) => (
            <div key={b.label} className="flex-1 flex flex-col items-center">
              <div className={`w-full ${b.color} rounded-t`} style={{ height: b.h }} />
              <span className="text-gray-500 text-[8px] mt-1">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white/3 border border-white/5 rounded-lg p-3">
        <div className="text-white text-[10px] font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>EVOLUÇÃO INDIVIDUAL</div>
        {[
          { rank: 1, nick: 'ValkyrieStorm', delta: '+8.000', positive: true },
          { rank: 2, nick: 'FrostArcher', delta: '+5.200', positive: true },
          { rank: 3, nick: 'HolyPriest', delta: '-1.500', positive: false },
        ].map((r) => (
          <div key={r.nick} className="flex items-center justify-between py-1 text-[10px]">
            <div className="flex items-center gap-2">
              <span className="text-gray-500 w-3">{r.rank}</span>
              <span className="text-white font-semibold">{r.nick}</span>
            </div>
            <span className={r.positive ? 'text-emerald-400 font-bold' : 'text-red-400 font-bold'}>
              {r.positive ? '▲' : '▼'} {r.delta}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function KillLogMockup() {
  return (
    <div className="text-[11px]">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
        <div className="text-white font-bold text-[11px]" style={{ fontFamily: 'var(--font-display)' }}>KILL LOG</div>
        <span className="text-[9px] px-2 py-0.5 rounded bg-white/5 text-gray-400 font-bold">TOTAL: 26 KILLS</span>
      </div>
      {[
        { area: 'TÚMULO DO REI', color: 'text-amber-400', icon: '👑', entries: [
          { nick: 'ValkyrieStorm', color: 'text-sky-400', target: 'TUMULO-1/2', time: '10:51:41' },
          { nick: 'FrostArcher', color: 'text-emerald-400', target: 'TUMULO-2/2', time: '10:51:40' },
        ]},
        { area: 'MYRKHEIMR', color: 'text-emerald-400', icon: '⊕', entries: [
          { nick: 'ShadowBlade', color: 'text-orange-400', target: 'MIRK-1/2', time: '10:51:38' },
          { nick: 'HolyPriest', color: 'text-cyan-400', target: 'MIRK-2/2', time: '10:51:37' },
        ]},
        { area: 'NIDAVELLIR', color: 'text-red-400', icon: '⚒', entries: [
          { nick: 'NorseKnight', color: 'text-sky-400', target: 'NIDA-1/1', time: '10:51:26' },
        ]},
      ].map((area) => (
        <div key={area.area} className="mb-2.5">
          <div className={`${area.color} font-bold text-[10px] mb-1`} style={{ fontFamily: 'var(--font-display)' }}>
            {area.icon} {area.area}
          </div>
          {area.entries.map((e, i) => (
            <div key={i} className="flex items-center justify-between py-1 border-b border-white/3 text-[10px]">
              <div className="flex items-center gap-1">
                <span className={`font-bold ${e.color}`}>{e.nick}</span>
                <span className="text-gray-600">resetou</span>
                <span className="text-emerald-400 font-bold">{e.target}</span>
              </div>
              <span className="text-gray-500 text-[9px]">{e.time}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function MembersMockup() {
  const members = [
    { nick: 'ValkyrieStorm', role: 'Guild Master', cls: 'Berserker', online: true },
    { nick: 'FrostArcher', role: 'Oficial', cls: 'Arqueiro', online: true },
    { nick: 'HolyPriest', role: 'Oficial', cls: 'Sacerdote', online: true },
    { nick: 'ShadowBlade', role: 'Membro', cls: 'Guerreiro', online: false },
    { nick: 'RuneMaster', role: 'Membro', cls: 'Mago', online: true },
  ];
  return (
    <div className="space-y-1.5">
      {members.map((m) => (
        <div key={m.nick} className="flex items-center justify-between py-2 px-3 rounded-lg bg-white/3 border border-white/5">
          <div className="flex items-center gap-2.5">
            <div className={`w-2 h-2 rounded-full shrink-0 ${m.online ? 'bg-emerald-400' : 'bg-gray-600'}`} />
            <div>
              <div className="text-white text-[11px] font-bold" style={{ fontFamily: 'var(--font-display)' }}>{m.nick}</div>
              <div className="text-gray-500 text-[9px]">{m.cls}</div>
            </div>
          </div>
          <span className={`text-[8px] px-1.5 py-0.5 rounded-full font-bold ${
            m.role === 'Guild Master' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
            m.role === 'Oficial' ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30' :
            'bg-white/5 text-gray-500 border border-white/5'
          }`}>{m.role}</span>
        </div>
      ))}
    </div>
  );
}

function AllianceMockup() {
  return (
    <div className="flex items-center justify-center gap-8 py-6">
      <div className="text-center">
        <div className="w-14 h-14 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-2">
          <span className="text-emerald-400 font-bold text-xl" style={{ fontFamily: 'var(--font-display)' }}>V</span>
        </div>
        <div className="text-white text-[11px] font-bold" style={{ fontFamily: 'var(--font-display)' }}>Valhalla</div>
        <div className="text-gray-500 text-[9px]">86 membros</div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="w-16 h-px bg-emerald-500/30" />
        <Handshake size={18} className="text-emerald-400" />
        <div className="w-16 h-px bg-emerald-500/30" />
        <div className="text-[8px] text-emerald-400/60">Aliança ativa</div>
      </div>
      <div className="text-center">
        <div className="w-14 h-14 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mx-auto mb-2">
          <span className="text-amber-400 font-bold text-xl" style={{ fontFamily: 'var(--font-display)' }}>F</span>
        </div>
        <div className="text-white text-[11px] font-bold" style={{ fontFamily: 'var(--font-display)' }}>Fenrir</div>
        <div className="text-gray-500 text-[9px]">52 membros</div>
      </div>
    </div>
  );
}

function SalaoMockup() {
  return (
    <div className="text-[11px]">
      <div className="text-white font-bold text-[11px] mb-2" style={{ fontFamily: 'var(--font-display)' }}>SALÃO DAS VALQUÍRIAS</div>
      <div className="flex items-center justify-between bg-white/3 border border-white/5 rounded-lg p-2 mb-2">
        <span className="text-white font-bold text-[11px]" style={{ fontFamily: 'var(--font-display)' }}>P2</span>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-[9px]">👥 1/9</span>
          <div className="flex items-center gap-1 bg-amber-500/15 border border-amber-500/30 rounded px-1.5 py-0.5">
            <span className="text-[8px] text-amber-400 font-bold">TEXAS</span>
            <span className="text-[8px] text-white">FrostArcher</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 mb-2">
        <div className="rounded-lg p-2 text-center bg-white/3 border border-white/5">
          <div className="text-gray-400 text-[10px] font-bold">LVL 35-E</div>
          <div className="mt-1 text-[8px] py-1 rounded bg-white/5 text-gray-500 font-bold">SPOT XP</div>
        </div>
        <div className="rounded-lg p-2 text-center bg-emerald-500/8 border border-emerald-500/30">
          <div className="text-emerald-400 text-[10px] font-bold">LVL 31-E</div>
          <div className="text-white text-[9px] mt-1">FrostArcher</div>
        </div>
        <div className="rounded-lg p-2 text-center bg-white/3 border border-white/5">
          <div className="text-gray-400 text-[10px] font-bold">LVL 40-E</div>
          <div className="mt-1 text-[8px] py-1 rounded bg-white/5 text-gray-500 font-bold">SPOT XP</div>
        </div>
      </div>
      <div className="bg-white/3 border border-white/5 rounded p-1.5 text-[9px]">
        <span className="text-emerald-400 font-bold">SPOTS ATIVOS (1/3): </span>
        <span className="text-white">FrostArcher</span>
      </div>
    </div>
  );
}
