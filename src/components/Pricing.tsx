import { Check, X, Sparkles, Clock } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

interface PlanFeature {
  text: string;
  included: boolean;
  soon?: boolean;
}

interface Plan {
  name: string;
  subtitle: string;
  price: string;
  period: string;
  popular?: boolean;
  highlight?: string;
  features: PlanFeature[];
  cta: string;
  ctaStyle: 'primary' | 'secondary' | 'elite';
}

const plans: Plan[] = [
  {
    name: 'Basic',
    subtitle: 'Para guilds em crescimento',
    price: 'R$ 19,90',
    period: '/mês',
    cta: 'ASSINAR BASIC',
    ctaStyle: 'secondary',
    features: [
      { text: 'Dashboard completo', included: true },
      { text: 'Sistema de Rank + Atividades', included: true },
      { text: 'Sistema de DKP', included: true },
      { text: 'Até 100 membros', included: true },
      { text: 'Até 2 tags', included: true },
      { text: 'Sistema de leilões', included: false },
      { text: 'Alianças entre guilds', included: false },
      { text: 'Boss Timer', included: false },
      { text: 'Alertas sonoros', included: false },
    ],
  },
  {
    name: 'Premium',
    subtitle: 'Para guilds organizadas',
    price: 'R$ 29,90',
    period: '/mês',
    cta: 'ASSINAR PREMIUM',
    ctaStyle: 'primary',
    features: [
      { text: 'Tudo do Basic', included: true },
      { text: 'Sistema de leilões de loot', included: true },
      { text: 'Até 150 membros', included: true },
      { text: 'Até 3 tags', included: true },
      { text: '1 aliança entre guilds', included: true },
      { text: 'Boss Timer', included: false },
      { text: 'Alertas sonoros', included: false },
      { text: 'Armazém p/ bid de itens', included: false, soon: true },
    ],
  },
  {
    name: 'Elite Pro',
    subtitle: 'Para guilds de alto nível',
    price: 'R$ 49,90',
    period: '/mês',
    popular: true,
    cta: 'ASSINAR ELITE PRO',
    ctaStyle: 'elite',
    features: [
      { text: 'Tudo do Premium', included: true },
      { text: 'Boss Timer completo', included: true },
      { text: 'Alertas sonoros com narração', included: true },
      { text: 'Até 250 membros', included: true },
      { text: 'Até 3 tags', included: true },
      { text: 'Até 3 alianças entre guilds', included: true },
      { text: 'Torre da Benção + Party', included: true },
      { text: 'Armazém p/ bid de itens', included: false, soon: true },
    ],
  },
];

export default function Pricing() {
  const ref = useReveal();

  return (
    <section id="planos" className="relative">
      <div ref={ref} className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-widest mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            PLANOS E VALORES
          </span>
          <h2 className="section-title text-3xl sm:text-4xl mb-4">
            Escolha o plano ideal para sua guild
          </h2>
          <p className="text-gray-500 text-lg">
            Sem contrato. Cancele quando quiser. <span className="text-emerald-400 font-semibold">Garantia incondicional de 7 dias.</span>
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
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
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-4xl font-bold ${
                    plan.ctaStyle === 'elite' ? 'text-violet-400' :
                    plan.popular ? 'text-white' : 'text-gray-200'
                  }`} style={{ fontFamily: 'var(--font-display)' }}>
                    {plan.price}
                  </span>
                  <span className="text-gray-500 text-sm">{plan.period}</span>
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
                    ) : f.soon ? (
                      <Clock size={15} className="text-amber-500/70 shrink-0" />
                    ) : (
                      <X size={15} className="text-gray-700 shrink-0" />
                    )}
                    <span className={`text-sm leading-snug ${
                      f.included
                        ? 'text-gray-300'
                        : f.soon
                        ? 'text-amber-500/70 italic'
                        : 'text-gray-700'
                    }`}>
                      {f.text}
                      {f.soon && (
                        <span className="ml-1.5 text-[9px] font-bold tracking-widest bg-amber-500/15 text-amber-400 border border-amber-500/30 px-1.5 py-0.5 rounded-full not-italic" style={{ fontFamily: 'var(--font-display)' }}>
                          EM BREVE
                        </span>
                      )}
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
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-gray-600 text-sm mt-10">
          Todos os planos incluem acesso ao Salão XP, Torre da Benção, Kill Log e suporte via Discord.
          <br className="hidden sm:block" />
          Pagamento via PIX, cartão de crédito ou boleto. Renovação mensal automática.
        </p>
      </div>
    </section>
  );
}
