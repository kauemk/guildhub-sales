import { useState, useEffect } from 'react';
import {
  LayoutDashboard, Swords, Users, Star, Gavel, Trophy,
  BarChart2, Shield, Settings, UserCircle,
  Volume2, Check, Play, Square,
  Crown, Medal, ChevronUp, ChevronDown,
  Copy, Link, Palette,
} from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

/* ═══════════════════════════════════════════════════════════════
   AUDIO NARRATION DEMO (reused from SoundAlerts logic)
   ═══════════════════════════════════════════════════════════════ */

const voiceSamples = [
  {
    label: 'Folk P4 — 5 min',
    phrase: 'Folk Universal Pê quatro em cinco minutos',
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
  },
  {
    label: 'Nidavellir 65 — 1 min',
    phrase: 'Nidavellir sessenta e cinco, canal um, em um minuto',
    color: 'text-red-400',
    bg: 'bg-red-500/10 border-red-500/20',
  },
];

function speakNarration(phrase: string, onStart: () => void, onEnd: () => void) {
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(phrase);
  utt.lang = 'pt-BR';
  utt.rate = 1.05;
  const ptVoice = window.speechSynthesis.getVoices().find(v => v.lang.startsWith('pt'));
  if (ptVoice) utt.voice = ptVoice;
  utt.onstart = onStart;
  utt.onend = onEnd;
  utt.onerror = onEnd;
  window.speechSynthesis.speak(utt);
}

function AudioDemo() {
  const [playing, setPlaying] = useState<number | null>(null);

  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

  const toggle = (i: number) => {
    if (playing === i) {
      window.speechSynthesis.cancel();
      setPlaying(null);
    } else {
      speakNarration(voiceSamples[i].phrase, () => setPlaying(i), () => setPlaying(null));
    }
  };

  const isPlaying = playing !== null;

  return (
    <div className="mt-6 p-5 rounded-xl border border-emerald-500/15 bg-emerald-500/5">
      <div className="flex flex-col sm:flex-row items-center gap-5">
        {/* Speaker com ondas */}
        <div className="flex flex-col items-center shrink-0">
          <div className="relative w-24 h-24 flex items-center justify-center mb-3">
            <div className="absolute inset-0 rounded-full border-2 border-emerald-500/20 animate-ping" style={{ animationDuration: '3s' }} />
            <div className="absolute inset-3 rounded-full border-2 border-emerald-500/15 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
            <div className="absolute inset-6 rounded-full border-2 border-emerald-500/10 animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
            <div className={`relative z-10 w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${isPlaying ? 'bg-emerald-500/30 border-emerald-400 scale-110' : 'bg-emerald-500/15 border-emerald-500/40'}`}>
              <Volume2 size={24} className={`transition-colors duration-300 ${isPlaying ? 'text-emerald-300' : 'text-emerald-400'}`} />
            </div>
          </div>
          {/* Sound bars */}
          <div className="flex items-end gap-1 h-6 mb-1">
            {[0.3, 0.6, 0.9, 0.5, 1, 0.7, 0.4, 0.8, 0.6, 0.3, 0.7, 0.5].map((delay, i) => (
              <div
                key={i}
                className="sound-bar h-full"
                style={{
                  animationDelay: `${delay * 0.3}s`,
                  opacity: isPlaying ? 0.4 + delay * 0.6 : 0.12 + delay * 0.2,
                  background: isPlaying ? '#10b981' : '#374151',
                }}
              />
            ))}
          </div>
          <div className={`text-[10px] font-bold transition-colors duration-300 ${isPlaying ? 'text-emerald-400' : 'text-gray-600'}`} style={{ fontFamily: 'var(--font-display)' }}>
            {isPlaying ? '● NARRANDO...' : 'DEMO DE NARRAÇÃO'}
          </div>
        </div>

        {/* Botões de amostra */}
        <div className="flex-1 w-full space-y-2">
          <div className="text-gray-600 text-[10px] font-bold tracking-widest mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            OUÇA A NARRAÇÃO REAL (Elite Pro)
          </div>
          {voiceSamples.map((s, i) => (
            <button
              key={i}
              onClick={() => toggle(i)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${playing === i ? s.bg + ' scale-[1.02]' : 'bg-white/3 border-white/10'}`}
            >
              <div className={`p-1.5 rounded-lg shrink-0 transition-colors ${playing === i ? 'bg-white/10' : 'bg-white/5'}`}>
                {playing === i
                  ? <Square size={12} className={s.color} fill="currentColor" />
                  : <Play size={12} className={playing !== null ? 'text-gray-600' : s.color} fill="currentColor" />
                }
              </div>
              <div className="text-left flex-1 min-w-0">
                <div className={`font-bold text-[11px] mb-0.5 transition-colors ${playing === i ? s.color : 'text-gray-400'}`} style={{ fontFamily: 'var(--font-display)' }}>
                  {s.label}
                </div>
                <div className="text-gray-600 text-[10px] truncate italic">"{s.phrase}"</div>
              </div>
              <span className={`text-[9px] font-bold shrink-0 px-2 py-1 rounded transition-colors ${playing === i ? 'bg-white/10 text-emerald-400 animate-pulse' : 'bg-white/5 text-gray-600'}`} style={{ fontFamily: 'var(--font-display)' }}>
                {playing === i ? '■ STOP' : '▶ PLAY'}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MOCKUPS
   ═══════════════════════════════════════════════════════════════ */

function DashboardMockup() {
  return (
    <img
      src="/dashboard.png"
      alt="Dashboard MY GUILD HUB"
      className="w-full block"
      style={{ objectFit: 'cover', objectPosition: 'center 40%', maxHeight: '300px' }}
      loading="lazy"
    />
  );
}

function BossTimerMockup() {
  return (
    <img
      src="/bosstimer.png"
      alt="Boss Timer MY GUILD HUB"
      className="w-full block"
      style={{ maxHeight: '340px', objectFit: 'cover', objectPosition: 'top' }}
      loading="lazy"
    />
  );
}

function MembersMockup() {
  const members = [
    { rank: 1, nick: 'ValkyrieStorm', tag: 'Tag A', power: '312K', role: 'Mestre', roleColor: 'text-amber-400' },
    { rank: 2, nick: 'FrostArcher', tag: 'Tag B', power: '285K', role: 'Admin', roleColor: 'text-sky-400' },
    { rank: 3, nick: 'HolyPriest', tag: 'Tag A', power: '248K', role: 'Membro', roleColor: 'text-gray-500' },
    { rank: 4, nick: 'ShadowBlade', tag: 'Tag B', power: '221K', role: 'Membro', roleColor: 'text-gray-500' },
  ];
  return (
    <div className="text-[11px]">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
        <span className="text-white font-bold text-[12px]" style={{ fontFamily: 'var(--font-display)' }}>MEMBROS</span>
        <span className="text-[9px] text-gray-500">86 total</span>
      </div>
      <div className="flex gap-1.5 mb-2.5">
        {['Nick ▲', 'Power ▼', 'Level'].map((h, i) => (
          <button key={h} className={`flex-1 py-1 rounded text-[9px] font-bold border ${i === 1 ? 'bg-blood/15 border-blood/30 text-blood' : 'bg-white/5 border-white/5 text-gray-500'}`}>{h}</button>
        ))}
      </div>
      <div className="space-y-1">
        {members.map(m => (
          <div key={m.nick} className="flex items-center gap-2 py-1.5 px-2 rounded-lg bg-white/3 border border-white/5">
            <span className="text-gray-500 w-4 text-[10px] font-bold">#{m.rank}</span>
            <div className="flex-1 min-w-0">
              <span className="text-white font-semibold text-[11px] truncate">{m.nick}</span>
            </div>
            <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-white/5 border border-white/5 text-gray-400">{m.tag}</span>
            <span className={`text-[10px] font-bold ${m.roleColor}`}>{m.power}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DKPMockup() {
  return (
    <div className="text-[11px]">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
        <span className="text-white font-bold text-[12px]" style={{ fontFamily: 'var(--font-display)' }}>ATIVIDADES & DKP</span>
        <span className="text-sky-400 font-bold text-[12px]" style={{ fontFamily: 'var(--font-display)' }}>1.840 DKP</span>
      </div>
      <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-2.5 mb-2">
        <div className="flex items-center justify-between mb-1">
          <span className="text-white font-bold text-[11px]">Raid Semanal — Folk</span>
          <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">ABERTA</span>
        </div>
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-sky-400 font-bold">+120 DKP</span>
          <span className="text-emerald-400 text-[9px]">Registrar Presença →</span>
        </div>
      </div>
      <div className="space-y-1.5">
        <div className="text-[9px] text-gray-500 uppercase tracking-wider">HISTÓRICO</div>
        {[
          { label: 'Raid Folk P4', delta: '+120', color: 'text-emerald-400' },
          { label: 'Taxa Semanal 5%', delta: '-92', color: 'text-red-400' },
          { label: 'Boss Túmulo', delta: '+80', color: 'text-emerald-400' },
        ].map(t => (
          <div key={t.label} className="flex items-center justify-between py-1 border-b border-white/4 text-[10px]">
            <span className="text-gray-400">{t.label}</span>
            <span className={`font-bold ${t.color}`}>{t.delta}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AuctionMockup() {
  return (
    <div className="text-[11px]">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
        <span className="text-white font-bold text-[12px]" style={{ fontFamily: 'var(--font-display)' }}>LEILÕES</span>
        <span className="text-[9px] text-gray-500">2 ativos</span>
      </div>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center shrink-0">
          <Gavel size={20} className="text-amber-400" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-white font-semibold text-[12px]">Espada do Ragnarok</div>
          <div className="flex items-center justify-between mt-1">
            <span className="text-emerald-400 font-bold text-[14px]" style={{ fontFamily: 'var(--font-display)' }}>680 DKP</span>
            <span className="text-amber-400 text-[10px]">01:22:45</span>
          </div>
        </div>
      </div>
      <div className="bg-white/3 border border-white/5 rounded-lg p-2.5 space-y-1.5">
        <div className="text-[9px] text-gray-500 uppercase tracking-wider mb-1">RANK DE LANCES</div>
        {[
          { nick: 'FrostArcher', dkp: '680', medal: '🥇' },
          { nick: 'ValkyrieStorm', dkp: '620', medal: '🥈' },
          { nick: 'RuneMaster', dkp: '550', medal: '🥉' },
        ].map(b => (
          <div key={b.nick} className="flex justify-between text-[10px]">
            <span className="flex items-center gap-1.5"><span>{b.medal}</span><span className="text-white font-semibold">{b.nick}</span></span>
            <span className="text-sky-400 font-bold">{b.dkp} DKP</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function RankingsMockup() {
  return (
    <div className="text-[11px]">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
        <span className="text-white font-bold text-[12px]" style={{ fontFamily: 'var(--font-display)' }}>RANKINGS</span>
        <div className="flex gap-1">
          {['POWER', 'LEVEL', 'DKP', 'ATIV.'].map((t, i) => (
            <span key={t} className={`text-[8px] px-1.5 py-0.5 rounded font-bold ${i === 0 ? 'bg-blood text-white' : 'bg-white/5 text-gray-500'}`}>{t}</span>
          ))}
        </div>
      </div>
      {/* Podium */}
      <div className="flex items-end justify-center gap-2 mb-3 h-14">
        <div className="flex-1 flex flex-col items-center">
          <Medal size={10} className="text-gray-300 mb-0.5" />
          <div className="w-full bg-gray-500/20 border border-gray-500/20 rounded-t flex items-end justify-center pb-1" style={{ height: '50%' }}>
            <span className="text-[8px] text-gray-300 font-bold">FrostArcher</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <Crown size={10} className="text-amber-400 mb-0.5" />
          <div className="w-full bg-amber-500/20 border border-amber-500/20 rounded-t flex items-end justify-center pb-1" style={{ height: '100%' }}>
            <span className="text-[8px] text-amber-400 font-bold">ValkyrieStorm</span>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <Medal size={10} className="text-orange-400 mb-0.5" />
          <div className="w-full bg-orange-500/20 border border-orange-500/20 rounded-t flex items-end justify-center pb-1" style={{ height: '38%' }}>
            <span className="text-[8px] text-orange-400 font-bold">HolyPriest</span>
          </div>
        </div>
      </div>
      <div className="space-y-1">
        {[
          { rank: 1, nick: 'ValkyrieStorm', val: '312.000', c: 'text-amber-400' },
          { rank: 2, nick: 'FrostArcher', val: '285.000', c: 'text-gray-300' },
          { rank: 3, nick: 'HolyPriest', val: '248.000', c: 'text-orange-400' },
        ].map(r => (
          <div key={r.nick} className="flex items-center justify-between py-1 px-2 rounded bg-white/3 border border-white/5 text-[10px]">
            <div className="flex items-center gap-2">
              <span className={`font-bold ${r.c}`}>#{r.rank}</span>
              <span className="text-white font-semibold">{r.nick}</span>
            </div>
            <span className="text-emerald-400 font-bold">{r.val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsMockup() {
  return (
    <div className="text-[11px] space-y-2.5">
      <div className="flex items-center justify-between pb-2 border-b border-white/5">
        <span className="text-white font-bold text-[12px]" style={{ fontFamily: 'var(--font-display)' }}>ANALYTICS</span>
        <div className="flex gap-1">
          {['7D', '30D', '90D'].map((t, i) => (
            <span key={t} className={`text-[8px] px-1.5 py-0.5 rounded font-bold ${i === 1 ? 'bg-white/10 text-white' : 'text-gray-600'}`}>{t}</span>
          ))}
        </div>
      </div>
      <div className="bg-white/3 border border-white/5 rounded-lg p-2.5">
        <div className="text-[9px] text-gray-500 mb-2 uppercase tracking-wider">COMPOSIÇÃO POR FUNÇÃO</div>
        <div className="flex items-end gap-2 h-10">
          {[
            { h: '60%', c: 'bg-sky-500', l: 'Tank' },
            { h: '90%', c: 'bg-red-400', l: 'DPS' },
            { h: '40%', c: 'bg-emerald-400', l: 'Healer' },
            { h: '55%', c: 'bg-violet-400', l: 'Suporte' },
          ].map(b => (
            <div key={b.l} className="flex-1 flex flex-col items-center">
              <div className={`w-full ${b.c} rounded-t`} style={{ height: b.h }} />
              <span className="text-[7px] text-gray-500 mt-0.5">{b.l}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white/3 border border-white/5 rounded-lg p-2.5">
        <div className="text-[9px] text-gray-500 mb-2 uppercase tracking-wider">EVOLUÇÃO INDIVIDUAL</div>
        {[
          { nick: 'ValkyrieStorm', delta: '+8.000', up: true },
          { nick: 'FrostArcher', delta: '+5.200', up: true },
          { nick: 'HolyPriest', delta: '-1.500', up: false },
        ].map(r => (
          <div key={r.nick} className="flex justify-between items-center py-1 text-[10px]">
            <span className="text-white font-semibold">{r.nick}</span>
            <span className={`font-bold flex items-center gap-0.5 ${r.up ? 'text-emerald-400' : 'text-red-400'}`}>
              {r.up ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
              {r.delta}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminMockup() {
  return (
    <div className="text-[11px]">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
        <span className="text-white font-bold text-[12px]" style={{ fontFamily: 'var(--font-display)' }}>PAINEL ADMIN</span>
        <span className="text-[8px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 font-bold">3 PENDENTES</span>
      </div>
      <div className="space-y-1.5 mb-2.5">
        <div className="text-[9px] text-gray-500 uppercase tracking-wider">MEMBROS PENDENTES</div>
        {['NorseKnight', 'IronValkyr'].map(n => (
          <div key={n} className="flex items-center justify-between py-1.5 px-2 rounded bg-white/3 border border-white/5">
            <span className="text-white font-semibold text-[11px]">{n}</span>
            <div className="flex gap-1">
              <span className="text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 cursor-pointer">✓ Aprovar</span>
              <span className="text-[8px] px-1.5 py-0.5 rounded bg-red-500/10 text-red-400 cursor-pointer">✕</span>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white/3 border border-white/5 rounded-lg p-2.5">
        <div className="text-[9px] text-gray-500 uppercase tracking-wider mb-1.5">AUDIT LOG</div>
        {[
          { actor: 'ValkyrieStorm', action: 'aprovou FrostArcher', time: '10:51' },
          { actor: 'Admin', action: 'ajustou DKP +200 HolyPriest', time: '10:48' },
        ].map((l, i) => (
          <div key={i} className="py-1 border-b border-white/4 text-[9px]">
            <span className="text-emerald-400 font-bold">{l.actor}</span>
            <span className="text-gray-400"> {l.action}</span>
            <span className="text-gray-600 ml-1">{l.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConfigMockup() {
  return (
    <div className="text-[11px]">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
        <span className="text-white font-bold text-[12px]" style={{ fontFamily: 'var(--font-display)' }}>CONFIGURAÇÕES</span>
      </div>
      <div className="mb-3">
        <div className="text-[9px] text-gray-500 uppercase tracking-wider mb-2">PALETA DE CORES</div>
        <div className="flex gap-1.5 flex-wrap mb-2">
          {['#dc2626','#f97316','#eab308','#22c55e','#06b6d4','#3b82f6','#8b5cf6','#ec4899','#6b7280'].map((c, i) => (
            <div
              key={c}
              className={`w-5 h-5 rounded-full cursor-pointer ${i === 4 ? 'ring-2 ring-white ring-offset-1 ring-offset-gray-900' : ''}`}
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-white/5 border border-white/10">
          <Palette size={11} className="text-cyan-400" />
          <span className="text-cyan-400 text-[10px] font-bold">#06b6d4</span>
          <span className="text-gray-500 text-[9px] ml-auto">COR PRIMÁRIA</span>
        </div>
      </div>
      <div>
        <div className="text-[9px] text-gray-500 uppercase tracking-wider mb-2">CONVITE PARA MEMBROS</div>
        <div className="flex items-center gap-1.5 px-2 py-1.5 rounded bg-white/5 border border-white/10">
          <Link size={10} className="text-gray-400 shrink-0" />
          <span className="text-gray-400 text-[9px] flex-1 truncate">guildhub.app/invite/xK9mP...</span>
          <Copy size={10} className="text-emerald-400 cursor-pointer shrink-0" />
        </div>
        <div className="text-[8px] text-gray-600 mt-1">2/∞ usos · Revogar</div>
      </div>
    </div>
  );
}

function ProfileMockup() {
  return (
    <div className="text-[11px]">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/5">
        <span className="text-white font-bold text-[12px]" style={{ fontFamily: 'var(--font-display)' }}>MEU PERFIL</span>
        <span className="text-[8px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">● ATIVO</span>
      </div>
      <div className="rounded-xl border border-blood/30 bg-blood/5 p-3 mb-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-white font-bold text-base" style={{ fontFamily: 'var(--font-display)' }}>Elite Pro</span>
          <span className="text-blood font-bold">R$ 47,50/mês</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-gray-400 mb-2">
          <span>14 dias restantes</span>
          <span>·</span>
          <span>3 faturas pagas</span>
        </div>
        <div className="flex gap-1.5">
          <div className="flex-1 py-1.5 text-center rounded bg-blood/20 border border-blood/30 text-blood text-[9px] font-bold cursor-pointer">↑ UPGRADE</div>
          <div className="flex-1 py-1.5 text-center rounded bg-white/5 border border-white/10 text-gray-400 text-[9px] font-bold cursor-pointer">↓ DOWNGRADE</div>
        </div>
      </div>
      <div className="space-y-1">
        <div className="text-[9px] text-gray-500 uppercase tracking-wider">INCLUSO NO SEU PLANO</div>
        {['Boss Timer completo', 'Alertas com narração', 'Até 250 membros'].map(f => (
          <div key={f} className="flex items-center gap-2 text-[10px] text-gray-300">
            <Check size={10} className="text-emerald-400 shrink-0" />
            {f}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FEATURE DATA — 10 MODULES
   ═══════════════════════════════════════════════════════════════ */

const features = [
  {
    icon: LayoutDashboard,
    badge: 'DASHBOARD',
    badgeColor: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    title: 'Centro de Comando',
    desc: 'Tudo que importa na tela inicial. Acompanhe seu Power, Level, DKP e posição no ranking ao abrir o app — com gráficos de evolução pessoal, metas ativas e acesso rápido a todas as ferramentas.',
    bullets: [
      'Power, Level, DKP e ranking em destaque com edição inline',
      'Gráfico de evolução pessoal de Power/Level com histórico',
      'Metas individuais com barra de progresso e prazo',
      'Status ao vivo dos bosses Folk (5 andares, Universal e Comum)',
      'Painel de atividades abertas — registre presença direto da tela inicial',
      'Preview dos leilões ativos com lance atual e countdown',
      'Atalhos rápidos para Boss Timer, Membros, DKP e Leilões',
    ],
    mockup: <DashboardMockup />,
    fullBleed: true,
  },
  {
    icon: Swords,
    badge: 'EXCLUSIVO',
    badgeColor: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    title: 'Boss Timer Completo',
    desc: 'O coração da guild. Timer sincronizado em até 3 segundos entre todos os membros, cobrindo todos os mapas do Legend of Ymir — do Túmulo do Rei ao Folkvangr. Sistema AFK, Texas, kill log e alertas com narração em PT-BR.',
    bullets: [
      '4 mapas: Túmulo do Rei, Myrkheimr, Nidavellir, Folkvangr (Universal + Comum)',
      '2 canais por boss (Ch1/Ch2) com countdown individual e registro de kill',
      'Sistema AFK — marque spots sendo farmados; desative via party ou admin',
      'Sistema Texas — identifique quem está segurando um spot específico',
      'Kill log automático: killer, timestamp, área e canal registrados',
      'Salão das Valquírias: gestão de spots de XP por andar e nível',
      'Party integrado: veja killers recentes e convide diretamente',
      'Torre da Benção: timer de buff individual com alertas em 5min, 3min e 1min',
      'Alertas sonoros com narração em PT-BR (Elite Pro)',
      'Dados 100% isolados por guild — alianças compartilham sem cruzar dados',
    ],
    mockup: <BossTimerMockup />,
    fullBleed: true,
    extra: <AudioDemo />,
  },
  {
    icon: Users,
    badge: 'MEMBROS',
    badgeColor: 'bg-orange-500/10 border-orange-500/30 text-orange-400',
    title: 'Gestão de Membros',
    desc: 'Controle total da composição da guild. Filtre por tag, ordene por Power ou Level, edite stats inline e gerencie cargos — tudo em uma lista limpa e responsiva.',
    bullets: [
      'Busca por nick com filtro simultâneo por tag',
      'Ordenação por Nick, Power ou Level (asc/desc) em um clique',
      'Hierarquia: Mestre → Admin Master → Admin Tag → Supervisor → Jogador',
      'Edição de Power e Level direto na lista (admin ou próprio player)',
      'Classe e cargo exibidos por membro com ícone de role',
      'Badge "eu" para identificar o próprio perfil na listagem',
      'Metas individuais de Power e Level com prazo definido pelo admin',
      'Presença online em tempo real visível no sidebar',
    ],
    mockup: <MembersMockup />,
  },
  {
    icon: Star,
    badge: 'ATIVIDADES & DKP',
    badgeColor: 'bg-sky-500/10 border-sky-500/30 text-sky-400',
    title: 'Economia de DKP',
    desc: 'Sistema completo de pontos de distribuição de loot. Crie atividades, registre presença com um clique e distribua DKP automaticamente. Taxas semanais e mensais configuráveis com histórico auditável.',
    bullets: [
      'Criação de atividades com título, valor DKP, janela de tempo e escopo por tag',
      'Registro de presença em um clique — DKP creditado automaticamente',
      'Histórico completo de transações por jogador (créditos e débitos)',
      'Taxas semanais e mensais configuráveis (% sobre saldo)',
      'Aplicação de taxas manual ou automática com log detalhado',
      'Log de taxas: tipo, percentual, usuários afetados e DKP total taxado',
      'Status por atividade: ABERTA, ENCERRADA, CANCELADA',
      'Saldo DKP pessoal em tempo real — integrado ao sistema de leilões',
    ],
    mockup: <DKPMockup />,
  },
  {
    icon: Gavel,
    badge: 'LEILÕES',
    badgeColor: 'bg-violet-500/10 border-violet-500/30 text-violet-400',
    title: 'Leilões de Loot Transparentes',
    desc: 'Distribua loot sem briga. Crie leilões agendados com imagem do item, lance mínimo e prazo — o rank de lances é público, o vencedor é automático e tudo fica no histórico.',
    bullets: [
      'Criação de leilão: item, imagem, lance mínimo, prazo e escopo por tag',
      'Saldo DKP verificado automaticamente antes de confirmar lance',
      'Ranking ao vivo dos 10 maiores lances (🥇🥈🥉 e posições)',
      'Confirmação de Power/Level a cada 24h ao dar lance (auto-atualiza perfil)',
      'Filtros: Ativos / Encerrados / Todos',
      'Vencedor destacado com badge de troféu ao encerrar',
      'Histórico completo de bids por leilão e por jogador',
      'Integração direta com saldo DKP — desconto automático',
    ],
    mockup: <AuctionMockup />,
  },
  {
    icon: Trophy,
    badge: 'RANKINGS',
    badgeColor: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    title: 'Rankings Automáticos',
    desc: 'Quatro rankings atualizados em tempo real — Power, Level, DKP e Atividades — com podium visual para os 3 primeiros e filtro por tag para competições internas.',
    bullets: [
      '4 modos: Power, Level, DKP acumulado, Participações em atividades',
      'Podium visual (1°, 2°, 3°) com coroa e medalhas',
      'Lista numerada completa com destaque para o próprio jogador',
      'Filtro por tag para rankings internos de cada equipe',
      'Classe e cargo exibidos por linha',
      'Badge "eu" para identificar sua posição',
      'Atualização automática ao registrar kills, atividades ou DKP',
    ],
    mockup: <RankingsMockup />,
  },
  {
    icon: BarChart2,
    badge: 'ANALYTICS',
    badgeColor: 'bg-sky-500/10 border-sky-500/30 text-sky-400',
    title: 'Analytics da Guild',
    desc: 'Inteligência para admins. Composição por função, evolução individual por período, comparativo entre tags e ranking de participação — tudo em gráficos claros para decisões certeiras.',
    bullets: [
      'Composição por função: Tank, DPS Ranged, DPS Melee, Healer, Suporte',
      'Ranking de evolução individual: Power e Level em 7, 30 ou 90 dias (▲ ▼ ▬)',
      'Gráfico de média geral da guild (Power/Level) ao longo do tempo',
      'Ranking de participação em atividades com medalhas para o top 3',
      'Comparativo de registros por tag em qualquer período',
      'Filtro por tag ou visão geral da guild inteira',
      'Média de participantes por atividade',
      'Definição de metas individuais de Power/Level direto pelo Analytics',
    ],
    mockup: <AnalyticsMockup />,
  },
  {
    icon: Shield,
    badge: 'PAINEL ADMIN',
    badgeColor: 'bg-red-500/10 border-red-500/30 text-red-400',
    title: 'Controle Total para Admins',
    desc: 'Arsenal completo para o Admin Master: aprovação de membros, gestão de tags e cargos, ajustes de DKP, controle de acesso e monitoramento de toda atividade da guild com audit logs e exportações.',
    bullets: [
      'Fila de aprovação: atribua tag e cargo ao aprovar novos membros',
      'Criação, renomeação e exclusão de tags com confirmação (countdown 10s)',
      'Editar stats, mudar tag/cargo, bloquear, desbloquear ou remover membros',
      'Ajuste manual de DKP: crédito ou débito com nota de justificativa',
      'Monitoramento: sessões ativas, presença online, log de logins com timestamps',
      'Audit logs completos: quem fez o quê e quando em toda a guild',
      'Print logs: registro de screenshots tirados dentro do Boss Timer',
      'Controle de acesso ao Boss Timer por guild, tag e aliança',
      'Exportação CSV de membros e tags com stats completos',
    ],
    mockup: <AdminMockup />,
  },
  {
    icon: Settings,
    badge: 'CONFIGURAÇÕES',
    badgeColor: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    title: 'Identidade da Guild',
    desc: 'Personalize a aparência da guild e gerencie acessos. Defina logo, paleta de cores com preview ao vivo e gere links de convite para membros ou alianças com controle total de uso.',
    bullets: [
      'Upload de logo da guild (exibido no sidebar e header)',
      'Cor primária: 12 cores predefinidas + seletor hex customizado',
      'Cor de destaque com seletor hex e preview instantâneo na interface',
      'Geração de links de convite token-based para novos membros',
      'Links de convite separados para alianças entre guilds',
      'Contador de uso por link (ex: 2/5 usos) com revogação em um clique',
      'Lista de membros aprovados com cargo e data de entrada',
    ],
    mockup: <ConfigMockup />,
  },
  {
    icon: UserCircle,
    badge: 'MEU PERFIL',
    badgeColor: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
    title: 'Gestão da Assinatura',
    desc: 'O Guild Master tem controle total da assinatura: plano atual, dias restantes, faturas pagas e o que está incluso — com opção de upgrade ou downgrade sem complicação.',
    bullets: [
      'Plano atual com status: Ativo, Pagamento Pendente ou Cancelado',
      'Dias restantes no ciclo com alerta de cor (verde / âmbar / vermelho)',
      'Contador de faturas pagas',
      'Lista completa do que está incluso no plano',
      'Modal de upgrade com benefícios do próximo plano detalhados',
      'Botão de downgrade com preview do plano inferior',
      'Atualização de método de pagamento: PIX, Boleto ou Cartão',
      'Campo de chave PIX, e-mail ou contato para cobrança',
      'Sugestão automática de upgrade a cada 72h (desativa no Elite Pro)',
    ],
    mockup: <ProfileMockup />,
  },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function Features() {
  const ref = useReveal();

  return (
    <section id="funcionalidades" className="relative">
      <div ref={ref} className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span
            className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-widest mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            FUNCIONALIDADES
          </span>
          <h2 className="section-title text-3xl sm:text-4xl lg:text-5xl mb-4">
            Tudo que sua guild precisa
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Do dashboard ao timer de boss — cada ferramenta foi feita para guilds que levam o jogo a sério.
          </p>
        </div>

        {/* Feature rows — zigzag */}
        <div className="space-y-20 lg:space-y-28">
          {features.map((f, i) => (
            <div key={f.badge} className={`feature-row ${i % 2 !== 0 ? 'reverse' : ''}`}>
              {/* Text */}
              <div className="feature-text">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold tracking-widest mb-4 ${f.badgeColor}`}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  <f.icon size={12} />
                  {f.badge}
                </div>

                <h3 className="section-title text-2xl sm:text-3xl mb-4">{f.title}</h3>

                <p className="text-gray-400 text-[16px] leading-relaxed mb-6">{f.desc}</p>

                <ul className="space-y-2.5">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-gray-300 text-[15px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                      {b}
                    </li>
                  ))}
                </ul>

                {'extra' in f && f.extra}
              </div>

              {/* Mockup */}
              <div className="feature-mockup">
                <div className="mockup-frame">
                  <div className="mockup-header">
                    <div className="mockup-dot" style={{ background: '#ff5f57' }} />
                    <div className="mockup-dot" style={{ background: '#febc2e' }} />
                    <div className="mockup-dot" style={{ background: '#28c840' }} />
                    <span className="text-gray-500 text-[10px] ml-2">MY GUILD HUB</span>
                  </div>
                  {'fullBleed' in f && f.fullBleed
                    ? f.mockup
                    : <div className="p-3 sm:p-4">{f.mockup}</div>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
