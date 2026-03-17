import { Check, Gift, RefreshCw } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const items = [
  'Boss Timer completo com alertas sonoros (plano Elite Pro)',
  'Dashboard completo com analytics e evolução',
  'Sistema de DKP + Leilões transparentes',
  'Gestão de membros, cargos, tags e presença',
  'Rankings automáticos (Power, Level, DKP, Atividades)',
  'Alianças entre guilds com timers compartilhados',
  'Salão XP + Formação de Party + Torre da Benção',
  'Kill Log detalhado por área',
  'Metas individuais de Power e Level',
  'Suporte via Discord',
];

export default function Bonus() {
  const ref = useReveal();

  return (
    <section className="relative">
      <div ref={ref} className="reveal max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <Gift size={20} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-bold tracking-widest" style={{ fontFamily: 'var(--font-display)' }}>
              TUDO INCLUSO
            </span>
          </div>
          <h2 className="section-title text-3xl sm:text-4xl mb-4">
            O que você ganha <span className="text-emerald-400">HOJE</span>
          </h2>
        </div>

        <div className="glass-card p-8 sm:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="bg-emerald-500/20 p-1 rounded-full shrink-0 mt-0.5">
                  <Check size={14} className="text-emerald-400" />
                </div>
                <span className="text-gray-200 text-[15px]">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 p-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 flex items-center gap-4">
            <RefreshCw size={24} className="text-emerald-400 shrink-0" />
            <div>
              <div className="text-white font-bold" style={{ fontFamily: 'var(--font-display)', fontSize: '14px' }}>
                Atualizações gratuitas vitalícias
              </div>
              <div className="text-gray-400 text-sm mt-1">
                Todas as novas funcionalidades e melhorias são incluídas automaticamente no seu plano, para sempre.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
