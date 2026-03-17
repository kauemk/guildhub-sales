import { useReveal } from '../hooks/useReveal';

const stats = [
  { value: '500+', label: 'Guilds Gerenciadas' },
  { value: '10.000+', label: 'Bosses Rastreados' },
  { value: '50.000+', label: 'Kills Registradas' },
  { value: '99.9%', label: 'Uptime Garantido' },
];

export default function SocialProof() {
  const ref = useReveal();

  return (
    <section className="relative" style={{ background: 'linear-gradient(180deg, #030712 0%, #041a12 50%, #030712 100%)' }}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full bg-emerald-500/5 blur-[150px] pointer-events-none" />
      </div>

      <div ref={ref} className="reveal relative z-10 max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <p className="text-gray-500 text-lg mb-10">
          Guilds de todo o Brasil confiam no <strong className="text-emerald-400">MY GUILD HUB</strong>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div
                className="text-3xl sm:text-4xl font-bold text-white counter-value"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {s.value}
              </div>
              <div className="text-gray-500 text-sm mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
