import { Shield, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <>
      {/* Final CTA */}
      <section className="relative text-center" style={{ background: 'linear-gradient(180deg, #030712 0%, #041f15 50%, #030712 100%)' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl mb-6">
            Pare de Perder Bosses.
            <br />
            <span className="text-emerald-400">Organize Sua Guild Agora.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Sua guild merece a melhor ferramenta. Organize tudo e domine o jogo a partir de hoje.
          </p>
          <a href="#planos" className="cta-btn text-lg px-12 py-5">
            <Shield size={20} />
            QUERO ORGANIZAR MINHA GUILD
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div>
              <span className="text-emerald-400 font-bold text-sm" style={{ fontFamily: 'var(--font-display)' }}>
                MY GUILD HUB
              </span>
              <p className="text-gray-600 text-sm mt-2">
                A plataforma completa para gestão de guilds de MMORPG.
              </p>
            </div>

            {/* Produto */}
            <div>
              <h4 className="text-white text-sm font-bold mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '11px' }}>PRODUTO</h4>
              <div className="space-y-2">
                <a href="#funcionalidades" className="block text-gray-500 hover:text-gray-300 text-sm transition-colors">Funcionalidades</a>
                <a href="#bosstimer" className="block text-gray-500 hover:text-gray-300 text-sm transition-colors">Boss Timer</a>
                <a href="#planos" className="block text-gray-500 hover:text-gray-300 text-sm transition-colors">Planos</a>
                <a href="#faq" className="block text-gray-500 hover:text-gray-300 text-sm transition-colors">FAQ</a>
              </div>
            </div>

            {/* Suporte */}
            <div>
              <h4 className="text-white text-sm font-bold mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '11px' }}>SUPORTE</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-500 hover:text-gray-300 text-sm transition-colors">Discord</a>
                <a href="#" className="block text-gray-500 hover:text-gray-300 text-sm transition-colors">Contato</a>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white text-sm font-bold mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '11px' }}>LEGAL</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-500 hover:text-gray-300 text-sm transition-colors">Termos de Uso</a>
                <a href="#" className="block text-gray-500 hover:text-gray-300 text-sm transition-colors">Privacidade</a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
            <span className="text-gray-600 text-sm">by DemonCrowley</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <ArrowUp size={16} className="text-gray-400" />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
