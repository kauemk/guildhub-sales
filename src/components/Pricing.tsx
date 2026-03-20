import { useState } from 'react';
import { Check, X, Sparkles } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

// ─── Period / Cycle data ──────────────────────────────────────────────────────

const cycles = [
  { days: 30  as const, label: '30 dias',  selectorDiscount: null         },
  { days: 90  as const, label: '90 dias',  selectorDiscount: 'até -10,5%' },
  { days: 180 as const, label: '180 dias', selectorDiscount: 'até -12%'   },
  { days: 365 as const, label: '365 dias', selectorDiscount: 'até -16%'   },
];

type CycleDays = 30 | 90 | 180 | 365;

const cyclePrices: Record<string, Record<CycleDays, { price: string; discount: string | null }>> = {
  basic: {
    30:  { price: 'R$ 19,90',  discount: null     },
    90:  { price: 'R$ 57,00',  discount: '-4,5%'  },
    180: { price: 'R$ 104,90', discount: '-12%'   },
    365: { price: 'R$ 199,90', discount: '-16%'   },
  },
  premium: {
    30:  { price: 'R$ 37,00',  discount: null     },
    90:  { price: 'R$ 104,90', discount: '-5,5%'  },
    180: { price: 'R$ 199,90', discount: '-10%'   },
    365: { price: 'R$ 399,90', discount: '-10%'   },
  },
  elite_pro: {
    30:  { price: 'R$ 67,00',  discount: null      },
    90:  { price: 'R$ 179,90', discount: '-10,5%'  },
    180: { price: 'R$ 369,90', discount: '-8%'     },
    365: { price: 'R$ 739,90', discount: '-8%'     },
  },
};

// ─── Plan definitions ─────────────────────────────────────────────────────────

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  key: string;
  subtitle: string;
  popular?: boolean;
  features: PlanFeature[];
  cta: string;
  ctaStyle: 'primary' | 'secondary' | 'elite';
}

const plans: Plan[] = [
  {
    name: 'Basic',
    key: 'basic',
    subtitle: 'Para guilds em crescimento',
    cta: 'ASSINAR BASIC',
    ctaStyle: 'secondary',
    features: [
      { text: 'Dashboard completo',          included: true  },
      { text: 'Sistema de Rank + Atividades', included: true  },
      { text: 'Sistema de DKP',               included: true  },
      { text: 'Máximo de 1 tag',              included: true  },
      { text: 'Limite de 50 membros',         included: true  },
      { text: 'Sistema de leilões',           included: false },
      { text: 'Alianças entre guilds',        included: false },
      { text: 'Boss Timer',                   included: false },
    ],
  },
  {
    name: 'Premium',
    key: 'premium',
    subtitle: 'Para guilds organizadas',
    cta: 'ASSINAR PREMIUM',
    ctaStyle: 'primary',
    features: [
      { text: 'Tudo do Basic',           included: true  },
      { text: 'Máximo de 3 tags',        included: true  },
      { text: '1 aliança entre guilds',  included: true  },
      { text: 'Limite de 150 membros',   included: true  },
      { text: 'Boss Timer',              included: false },
    ],
  },
  {
    name: 'Elite Pro',
    key: 'elite_pro',
    subtitle: 'Para guilds de alto nível',
    popular: true,
    cta: 'ASSINAR ELITE PRO',
    ctaStyle: 'elite',
    features: [
      { text: 'Tudo do Premium',               included: true },
      { text: 'Tags ilimitadas',               included: true },
      { text: 'Boss Timer completo',           included: true },
      { text: 'Leilão de loot',                included: true },
      { text: 'Acesso a todos os módulos',     included: true },
      { text: 'Membros ilimitados',            included: true },
      { text: 'Alertas sonoros com narração',  included: true },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Pricing() {
  const ref = useReveal();
  const [selectedCycle, setSelectedCycle] = useState<CycleDays>(30);

  return (
    <section id="planos" className="relative">
      <div ref={ref} className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-widest mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            PLANOS E VALORES
          </span>
          <h2 className="section-title text-3xl sm:text-4xl mb-4">
            Escolha o plano ideal para sua guild
          </h2>
          <p className="text-gray-500 text-lg">
            Sem contrato. Cancele quando quiser.{' '}
            <span className="text-emerald-400 font-semibold">Garantia incondicional de 7 dias.</span>
          </p>
        </div>

        {/* Period Selector */}
        <div className="flex justify-center mb-10">
          <div className="flex gap-1 p-1 rounded-xl bg-white/5 border border-white/10">
            {cycles.map(c => (
              <button
                key={c.days}
                onClick={() => setSelectedCycle(c.days)}
                className={`relative px-4 py-2 rounded-lg text-sm font-bold tracking-wide transition-all ${
                  selectedCycle === c.days
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {c.label}
                {c.selectorDiscount && selectedCycle !== c.days && (
                  <span className="absolute -top-2.5 -right-1 text-[8px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded-full whitespace-nowrap" style={{ fontFamily: 'var(--font-display)' }}>
                    {c.selectorDiscount}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => {
            const priceInfo = cyclePrices[plan.key][selectedCycle];
            return (
              <div
                key={plan.name}
                className={`glass-card relative flex flex-col ${
                  plan.popular && plan.ctaStyle === 'elite'
                    ? 'p-8 border-violet-500/50 ring-1 ring-violet-500/30 shadow-xl shadow-violet-500/10'
                    : plan.popular
                    ? 'pricing-popular p-8'
                    : 'p-8'
                }`}
              >
                {/* Badge */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <div className={`flex items-center gap-1.5 px-4 py-1 rounded-full text-white text-xs font-bold tracking-wide shadow-lg ${
                      plan.ctaStyle === 'elite'
                        ? 'bg-gradient-to-r from-violet-600 to-violet-500 shadow-violet-500/30'
                        : 'bg-emerald-500 shadow-emerald-500/30'
                    }`} style={{ fontFamily: 'var(--font-display)' }}>
                      <Sparkles size={11} />
                      MAIS POPULAR
                    </div>
                  </div>
                )}

                {/* Plan header */}
                <div className="text-center mb-6">
                  <h3 className="text-white font-bold text-xl mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                    {plan.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-5">{plan.subtitle}</p>

                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className={`text-4xl font-bold transition-all duration-200 ${
                        plan.ctaStyle === 'elite' ? 'text-violet-400' :
                        plan.popular ? 'text-white' : 'text-gray-200'
                      }`} style={{ fontFamily: 'var(--font-display)' }}>
                        {priceInfo.price}
                      </span>
                    </div>
                    <span className="text-gray-500 text-sm">/ {selectedCycle} dias</span>
                    {priceInfo.discount && (
                      <span className="text-emerald-400 text-xs font-bold tracking-wide" style={{ fontFamily: 'var(--font-display)' }}>
                        {priceInfo.discount} off
                      </span>
                    )}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/5 mb-6" />

                {/* Features */}
                <div className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <div key={f.text} className="flex items-center gap-3">
                      {f.included ? (
                        <Check size={15} className={`shrink-0 ${
                          plan.ctaStyle === 'elite' ? 'text-violet-400' : 'text-emerald-400'
                        }`} />
                      ) : (
                        <X size={15} className="text-gray-700 shrink-0" />
                      )}
                      <span className={`text-sm leading-snug ${
                        f.included ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {f.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                {plan.ctaStyle === 'primary' && (
                  <a href="#" className="cta-btn w-full justify-center">
                    {plan.cta}
                  </a>
                )}
                {plan.ctaStyle === 'secondary' && (
                  <a href="#" className="cta-btn-secondary w-full justify-center">
                    {plan.cta}
                  </a>
                )}
                {plan.ctaStyle === 'elite' && (
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-6 py-4 rounded-xl font-bold text-sm tracking-wide text-white transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-violet-500/20"
                    style={{
                      fontFamily: 'var(--font-display)',
                      background: 'linear-gradient(135deg, #7c3aed, #8b5cf6, #a78bfa)',
                    }}
                  >
                    {plan.cta}
                  </a>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-gray-600 text-sm mt-10">
          Todos os planos incluem suporte via Discord e atualizações gratuitas.
          <br className="hidden sm:block" />
          Boss Timer, Torre da Benção e Kill Log disponíveis no plano Elite Pro.
          <br className="hidden sm:block" />
          Pagamento via PIX, cartão de crédito ou boleto.
        </p>
      </div>
    </section>
  );
}
