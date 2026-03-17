import { ShieldCheck } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function Guarantee() {
  const ref = useReveal();

  return (
    <section className="relative">
      <div ref={ref} className="reveal max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-10 sm:p-16 border-emerald-500/20">
          <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center mx-auto mb-8">
            <ShieldCheck size={40} className="text-emerald-400" />
          </div>

          <h2 className="section-title text-3xl sm:text-4xl mb-4">
            Garantia Incondicional de <span className="text-emerald-400">7 Dias</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed mb-8">
            Se por qualquer motivo você não gostar, devolvemos <strong className="text-white">100% do seu investimento</strong>.
            Sem perguntas, sem burocracia. Teste com total segurança.
          </p>

          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold">Risco zero para você</span>
          </div>
        </div>
      </div>
    </section>
  );
}
