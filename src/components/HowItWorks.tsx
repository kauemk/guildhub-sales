import { UserPlus, Settings, Swords } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const steps = [
  {
    icon: UserPlus,
    number: '01',
    title: 'Crie sua Guild',
    desc: 'Cadastro rápido. Convide membros por link, atribua cargos e tags. Sua guild online em minutos.',
  },
  {
    icon: Settings,
    number: '02',
    title: 'Configure suas Ferramentas',
    desc: 'Ative Boss Timer, DKP, leilões, rankings. Personalize cores, alertas sonoros e permissões.',
  },
  {
    icon: Swords,
    number: '03',
    title: 'Domine o Jogo',
    desc: 'Coordene bosses em tempo real, distribua loot com justiça, acompanhe a evolução de cada membro.',
  },
];

export default function HowItWorks() {
  const ref = useReveal();

  return (
    <section className="relative">
      <div ref={ref} className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-widest mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            COMO FUNCIONA
          </span>
          <h2 className="section-title text-3xl sm:text-4xl mb-4">
            Comece em 3 passos simples
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="text-center relative">
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-emerald-500/30 to-emerald-500/10" />
              )}

              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 mb-6 relative">
                <step.icon size={32} className="text-emerald-400" />
                <span
                  className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-emerald-500 text-white text-xs font-bold flex items-center justify-center"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {step.number}
                </span>
              </div>

              <h3 className="text-white font-bold text-lg mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '15px' }}>
                {step.title}
              </h3>
              <p className="text-gray-400 text-[15px] leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
