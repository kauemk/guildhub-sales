import { Volume2, Bell, Clock, Settings, Shield, Play } from 'lucide-react';
import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const alerts = [
  {
    icon: Bell,
    title: 'Alertas por Boss e Área',
    desc: 'Configure alertas individuais para cada boss — Túmulo, Myrkheimr, Nidavellir e Folkvangr.',
  },
  {
    icon: Clock,
    title: 'Urgência por Tempo',
    desc: 'Notificação automática quando o timer está em 5min, 3min e 1min. Nunca perca o respawn.',
  },
  {
    icon: Shield,
    title: 'Torre da Benção',
    desc: 'Timer de buff com alertas em 5min, 3min e 1min antes de expirar. Nunca perca seu buff.',
  },
  {
    icon: Settings,
    title: 'Totalmente Configurável',
    desc: 'Volume individual, toggle on/off, múltiplos níveis de urgência (suave, médio, urgente).',
  },
];

// Exact narration phrases used in the boss timer app (via ElevenLabs PT-BR voice)
const voiceSamples = [
  {
    label: 'Folk Universal P4 — 5min',
    phrase: 'Folk Universal Pê quatro em cinco minutos',
    tag: 'FOLKVANGR',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/30',
    tagColor: 'bg-amber-500/20 text-amber-400',
  },
  {
    label: 'Nidavellir 65 — 1min',
    phrase: 'Nidavellir sessenta e cinco, canal um, em um minuto',
    tag: 'NIDAVELLIR',
    color: 'text-red-400',
    bg: 'bg-red-500/10 border-red-500/30',
    tagColor: 'bg-red-500/20 text-red-400',
  },
];

function speakNarration(phrase: string, onStart: () => void, onEnd: () => void) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(phrase);
  utterance.lang = 'pt-BR';
  utterance.rate = 1.05;
  utterance.pitch = 1.0;
  utterance.volume = 0.9;

  // Try to find a Portuguese voice
  const voices = window.speechSynthesis.getVoices();
  const ptVoice = voices.find(
    (v) => v.lang === 'pt-BR' || v.lang.startsWith('pt')
  );
  if (ptVoice) utterance.voice = ptVoice;

  utterance.onstart = onStart;
  utterance.onend = onEnd;
  utterance.onerror = onEnd;

  window.speechSynthesis.speak(utterance);
}

export default function SoundAlerts() {
  const ref = useReveal();
  const [speaking, setSpeaking] = useState<number | null>(null);

  function handlePlay(phrase: string, idx: number) {
    if (speaking === idx) {
      window.speechSynthesis?.cancel();
      setSpeaking(null);
      return;
    }
    speakNarration(
      phrase,
      () => setSpeaking(idx),
      () => setSpeaking(null)
    );
  }

  return (
    <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #030712 0%, #0a1a28 50%, #030712 100%)' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[30vw] max-w-[700px] max-h-[500px] rounded-full bg-sky-500/5 blur-[150px] pointer-events-none" />

      <div ref={ref} className="reveal relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Visual + Demo */}
          <div className="flex flex-col items-center">
            {/* Sound wave visualization */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center mb-6">
              <div className="absolute inset-0 rounded-full border-2 border-emerald-500/20 animate-ping" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-4 rounded-full border-2 border-emerald-500/15 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
              <div className="absolute inset-8 rounded-full border-2 border-emerald-500/10 animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
              <div className={`relative z-10 w-20 h-20 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${speaking !== null ? 'bg-emerald-500/30 border-emerald-400 scale-110' : 'bg-emerald-500/15 border-emerald-500/40'}`}>
                <Volume2 size={36} className={`transition-colors duration-300 ${speaking !== null ? 'text-emerald-300' : 'text-emerald-400'}`} />
              </div>
            </div>

            {/* Sound bars */}
            <div className="flex items-end gap-1.5 h-10 mb-4">
              {[0.3, 0.6, 0.9, 0.5, 1, 0.7, 0.4, 0.8, 0.6, 0.3, 0.7, 0.5, 0.9, 0.4, 0.6].map((delay, i) => (
                <div
                  key={i}
                  className="sound-bar h-full"
                  style={{
                    animationDelay: `${delay * 0.3}s`,
                    opacity: speaking !== null ? 0.4 + delay * 0.6 : 0.15 + delay * 0.25,
                    background: speaking !== null ? '#10b981' : '#374151',
                  }}
                />
              ))}
            </div>

            <div className="text-center mb-6">
              <div className={`font-bold text-sm transition-colors duration-300 ${speaking !== null ? 'text-emerald-400' : 'text-gray-500'}`} style={{ fontFamily: 'var(--font-display)' }}>
                {speaking !== null ? '● NARRANDO ALERTA...' : 'BOSS RESPAWN EM 2:47'}
              </div>
              <div className="text-gray-600 text-xs mt-1">
                {speaking !== null ? voiceSamples[speaking]?.phrase : 'Alerta ativo — Túmulo do Rei CH1'}
              </div>
            </div>

            {/* Voice demo samples */}
            <div className="w-full space-y-2">
              <div className="text-gray-600 text-xs font-bold tracking-widest text-center mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                OUÇA A NARRAÇÃO REAL DO APP
              </div>
              {voiceSamples.map((s, idx) => (
                <button
                  key={s.label}
                  onClick={() => handlePlay(s.phrase, idx)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
                    speaking === idx
                      ? s.bg + ' scale-[1.02]'
                      : 'bg-white/3 border-white/10 hover:' + s.bg
                  }`}
                >
                  <div className={`p-2 rounded-lg shrink-0 transition-colors ${speaking === idx ? 'bg-white/10' : 'bg-white/5'}`}>
                    <Play size={14} className={speaking === idx ? s.color : 'text-gray-500'} />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <div className={`font-bold text-[12px] mb-0.5 transition-colors ${speaking === idx ? s.color : 'text-gray-400'}`} style={{ fontFamily: 'var(--font-display)' }}>
                      {s.label}
                    </div>
                    <div className="text-gray-600 text-[10px] truncate italic">
                      "{s.phrase}"
                    </div>
                  </div>
                  <span className={`text-[9px] font-bold shrink-0 transition-colors px-2 py-1 rounded ${speaking === idx ? s.tagColor + ' animate-pulse' : 'bg-white/5 text-gray-600'}`} style={{ fontFamily: 'var(--font-display)' }}>
                    {speaking === idx ? '■ STOP' : '▶ PLAY'}
                  </span>
                </button>
              ))}
              <p className="text-gray-600 text-[10px] text-center mt-2">
                * Narração via voz sintetizada em PT-BR. No app, usa voz ElevenLabs.
              </p>
            </div>
          </div>

          {/* Right — Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 mb-6">
              <Volume2 size={14} className="text-sky-400" />
              <span className="text-sky-400 text-xs font-bold tracking-widest" style={{ fontFamily: 'var(--font-display)' }}>
                ALERTAS SONOROS
              </span>
            </div>

            <h2 className="section-title text-3xl sm:text-4xl mb-4">
              Alertas Inteligentes —
              <br />
              <span className="text-emerald-400">Nunca Perca um Respawn</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Sistema de alertas sonoros com <strong className="text-white">narração de voz em português</strong> que anuncia exatamente qual boss vai spawnar e em quanto tempo.
              Funciona mesmo com a aba em segundo plano.
            </p>

            <div className="space-y-4">
              {alerts.map((a) => (
                <div key={a.title} className="flex items-start gap-4">
                  <div className="bg-sky-500/10 p-2.5 rounded-xl shrink-0">
                    <a.icon size={18} className="text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-[14px] mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                      {a.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
