import { Timer, Radio, Bell, BookOpen, ShieldCheck, Zap } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const timerFeatures = [
  { icon: Timer, text: 'Timer por área: Túmulo, Myrkheimr, Nidavellir, Folk' },
  { icon: Radio, text: 'Sincronização em 3s entre todos os membros' },
  { icon: ShieldCheck, text: 'Sistema AFK / Reserva de Spot' },
  { icon: BookOpen, text: 'Kill log automático com histórico completo' },
  { icon: Bell, text: 'Alertas sonoros configuráveis' },
  { icon: Zap, text: 'Dados isolados por guild — 100% seguro' },
];

/* Data matching real app screenshot */
interface Boss { id: string; ch1: string; ch2?: string; afk?: string }

const tumulo: Boss[] = [
  { id: '66', ch1: '29:02', ch2: '29:11' },
  { id: '67', ch1: '29:10', ch2: '29:02' },
  { id: '68', ch1: '29:10', ch2: '29:08' },
  { id: '69', ch1: '29:12', ch2: '29:08' },
];
const mirk: Boss[] = [
  { id: '66', ch1: '29:03', ch2: '29:25', afk: 'NorseKnight' },
  { id: '67', ch1: '29:16', ch2: '29:14' },
  { id: '68T', ch1: '29:07', ch2: '29:13' },
  { id: '68F', ch1: '29:15', ch2: '29:13' },
];
const nida: Boss[] = [
  { id: '65', ch1: '59:32' },
  { id: '61', ch1: '59:33' },
  { id: '69', ch1: '59:39' },
];

function Icons() {
  return (
    <span className="flex items-center gap-1.5 text-gray-600 text-[11px]">
      <span className="text-red-400">✕</span>
      <span>⊙</span>
      <span>↺</span>
    </span>
  );
}

function BossRow({ id, ch1, ch2, afk }: Boss) {
  const hasCh2 = !!ch2;
  return (
    <div className={`timer-grid ${!hasCh2 ? 'no-ch2' : ''}`}>
      {/* Boss ID — nowrap prevents "68T" from breaking */}
      <span className="text-gray-500 font-semibold text-center whitespace-nowrap">⊕ {id}</span>
      {/* CH1 */}
      <span className="text-gray-600 text-[10px]">CH1</span>
      <span className="timer-value normal">{ch1}</span>
      <Icons />
      {/* CH2 (only if exists) */}
      {hasCh2 && (
        <>
          <span className="text-gray-600 text-[10px]">CH2</span>
          {afk ? (
            <>
              <span className="timer-value afk" style={{ gridColumn: 'span 2' }}>
                {ch2} <span className="text-[9px] text-emerald-300 font-normal ml-1">AFK: {afk}</span>
              </span>
            </>
          ) : (
            <>
              <span className="timer-value normal">{ch2}</span>
              <Icons />
            </>
          )}
        </>
      )}
    </div>
  );
}

function AreaSection({ name, color, bosses }: { name: string; color: string; bosses: Boss[] }) {
  return (
    <div className="mb-3">
      <div className={`${color} font-bold text-[12px] tracking-wider mb-1.5 flex items-center gap-2`} style={{ fontFamily: 'var(--font-display)' }}>
        <span className="text-[14px]">⊕</span> {name}
      </div>
      <div className="space-y-1">
        {bosses.map((b) => (
          <BossRow key={`${name}-${b.id}`} {...b} />
        ))}
      </div>
    </div>
  );
}

export default function BossTimer() {
  const ref = useReveal();

  return (
    <section id="bosstimer" className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #030712 0%, #041f15 50%, #030712 100%)' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[35vw] max-w-[900px] max-h-[600px] rounded-full bg-emerald-500/5 blur-[150px] pointer-events-none" />

      <div ref={ref} className="reveal relative z-10 max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6 badge-pulse">
          <span className="text-amber-400 text-xs font-bold tracking-widest" style={{ fontFamily: 'var(--font-display)' }}>
            EXCLUSIVO
          </span>
        </div>

        <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl mb-4">
          Boss Timer — Nunca Mais
          <br />
          <span className="text-emerald-400">Perca um Respawn</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          O único timer de boss sincronizado em tempo real entre todos os membros da guild e aliança.
          Cada guild tem seus timers isolados e seguros.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start text-left">
          {/* Features list */}
          <div className="space-y-3">
            {timerFeatures.map((f) => (
              <div key={f.text} className="flex items-center gap-4 glass-card p-4">
                <div className="bg-emerald-500/10 p-2.5 rounded-xl shrink-0">
                  <f.icon size={20} className="text-emerald-400" />
                </div>
                <span className="text-gray-300 text-[15px]">{f.text}</span>
              </div>
            ))}
          </div>

          {/* Timer Mockup */}
          <div className="mockup-frame float">
            <div className="mockup-header">
              <div className="mockup-dot" style={{ background: '#ff5f57' }} />
              <div className="mockup-dot" style={{ background: '#febc2e' }} />
              <div className="mockup-dot" style={{ background: '#28c840' }} />
              <span className="text-gray-500 text-[11px] ml-3">Boss Timer — Valhalla Guild</span>
            </div>
            <div className="p-3 overflow-x-auto">
              <AreaSection name="TÚMULO DO REI" color="text-amber-400" bosses={tumulo} />
              <AreaSection name="MYRKHEIMR" color="text-emerald-400" bosses={mirk as any} />
              <AreaSection name="NIDAVELLIR" color="text-red-400" bosses={nida} />
              <div className="flex justify-between pt-2 border-t border-white/5 text-[10px] text-gray-500 mt-2">
                <span>11 bosses • 3 áreas</span>
                <span className="text-emerald-400">● Sync ativo — 3s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
