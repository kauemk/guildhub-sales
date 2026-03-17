import { Clock, Scale, UserX, MessageSquareWarning } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const pains = [
  {
    icon: Clock,
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
    title: 'Perde bosses por falta de timer',
    desc: 'O boss respawnou e ninguém sabia. A guild rival levou o loot porque estava cronometrando — e a sua não.',
  },
  {
    icon: Scale,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    title: 'DKP na base da confiança',
    desc: 'Planilhas manuais, loot distribuído no "feeling". Membros reclamam de injustiça e saem da guild.',
  },
  {
    icon: UserX,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    title: 'Membros desaparecem',
    desc: 'Sem controle de presença, você não sabe quem está ativo. Guild perde força a cada semana.',
  },
  {
    icon: MessageSquareWarning,
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/20',
    title: 'Comunicação no caos',
    desc: 'WhatsApp e Discord não escalam. Informações perdidas, decisões atrasadas, ninguém sabe o que fazer.',
  },
];

export default function PainPoints() {
  const ref = useReveal();

  return (
    <section className="relative" style={{ background: 'linear-gradient(180deg, #030712 0%, #0a0812 100%)' }}>
      <div ref={ref} className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-3xl sm:text-4xl mb-4">
            Sem gestão, sua guild...
          </h2>
          <p className="text-gray-500 text-lg">
            Esses problemas estão custando loot, membros e reputação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pains.map((pain) => (
            <div
              key={pain.title}
              className={`glass-card p-6 sm:p-8 flex gap-5 items-start text-left w-full border ${pain.border}`}
            >
              <div className={`${pain.bg} p-3 rounded-xl shrink-0`}>
                <pain.icon size={28} className={pain.color} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '15px' }}>
                  {pain.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{pain.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
