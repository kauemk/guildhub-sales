import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const faqs = [
  {
    q: 'Funciona para qual jogo?',
    a: 'O MY GUILD HUB foi projetado especificamente para Legend of Ymir, com bosses, áreas e mecânicas do jogo já configuradas. É também compatível com outros MMORPGs que precisem de gestão de guilds, DKP e boss timers.',
  },
  {
    q: 'Preciso instalar algo?',
    a: 'Não! O MY GUILD HUB funciona 100% no navegador, sem instalação. Basta acessar, criar sua guild e começar a usar. Funciona perfeitamente em PC, tablet e celular — pode ser instalado como atalho na tela inicial do smartphone (PWA) para uma experiência similar a um app nativo.',
  },
  {
    q: 'Meus dados ficam seguros?',
    a: 'Sim. Utilizamos Supabase com Row Level Security (RLS) — cada guild acessa exclusivamente seus próprios dados, completamente isolados. Toda comunicação é criptografada via TLS 1.3. Backups automáticos são realizados diariamente. Senhas são armazenadas com hash seguro e nunca em texto puro. Oferecemos autenticação via e-mail/senha e OAuth.',
  },
  {
    q: 'O Boss Timer funciona em tempo real?',
    a: 'Sim! A sincronização acontece em até 3 segundos entre todos os membros da guild. Cada guild tem seus timers completamente isolados — nenhuma outra guild enxerga seus dados. Guilds aliadas podem compartilhar timers de forma controlada.',
  },
  {
    q: 'Como funcionam os alertas sonoros?',
    a: 'O sistema emite alertas sonoros configuráveis quando um boss está próximo de spawnar — nos marcos de 5 minutos, 3 minutos e 1 minuto antes do respawn. Você pode ajustar o volume, ativar ou desativar por boss individualmente. Os alertas funcionam mesmo com a aba do navegador em segundo plano.',
  },
  {
    q: 'O que é a Torre da Benção?',
    a: 'A Torre da Benção é um timer de buff individual. Quando você ativa, o sistema conta o tempo e emite alertas sonoros automáticos em 5 minutos, 3 minutos e 1 minuto antes do buff expirar. Assim você nunca perde o benefício por esquecimento durante uma sessão intensa.',
  },
  {
    q: 'Como funciona o sistema de DKP?',
    a: 'O Guild Master cria atividades (raids, bosses, eventos). Ao registrar a presença de cada membro, o DKP é calculado e distribuído automaticamente conforme a configuração da atividade. O sistema suporta taxas semanais e mensais configuráveis, histórico completo de DKP por jogador e integração direta com os leilões de loot.',
  },
  {
    q: 'Quais são os planos e valores?',
    a: 'Oferecemos 3 planos com 4 períodos de contratação (30, 90, 180 ou 365 dias): Basic a partir de R$ 19,90 (365 dias por R$ 199,90) — dashboard, DKP, rankings, 1 tag e até 50 membros. Premium a partir de R$ 37,00 (365 dias por R$ 297,00) — tudo do Basic + 3 tags, 1 aliança entre guilds e até 150 membros. Elite Pro a partir de R$ 67,00 (365 dias por R$ 627,00) — tudo do Premium + Boss Timer completo, leilões de loot, tags ilimitadas, membros ilimitados e acesso a todos os módulos. Planos de 90, 180 e 365 dias têm desconto de até 33%. Sem contrato e com garantia incondicional de 7 dias.',
  },
  {
    q: 'Quais são as formas de pagamento?',
    a: 'Aceitamos PIX, cartão de crédito, cartão de débito e boleto bancário. A renovação é mensal automática e pode ser cancelada a qualquer momento pelo painel, sem multa.',
  },
  {
    q: 'O que acontece se o serviço cair durante uma sessão?',
    a: 'Nossa infraestrutura opera com 99.9% de uptime garantido. Em caso de instabilidade pontual, os dados do último sync ficam disponíveis localmente no seu navegador. Ao reconectar, tudo é sincronizado automaticamente sem perda de informação. Monitoramos o serviço 24/7.',
  },
  {
    q: 'Minha guild tem 200+ membros. O sistema suporta?',
    a: 'Sim! O plano Elite Pro não tem limite de membros — a arquitetura multi-tenant escala horizontalmente sem restrições. Para guilds acima de 150 membros, o Elite Pro é a escolha ideal.',
  },
  {
    q: 'Posso importar dados de uma planilha ou outro sistema?',
    a: 'No momento não há importação automática de planilhas. Para guilds que migram de outros sistemas, recomendamos criar as atividades manualmente no início ou entrar em contato via Discord para avaliar soluções de migração de dados personalizadas para seu caso.',
  },
  {
    q: 'Posso cancelar a qualquer momento?',
    a: 'Sim, sem multa e sem burocracia. Você pode cancelar ou fazer downgrade a qualquer momento pelo painel de configurações. Além disso, oferecemos garantia incondicional de 7 dias — se por qualquer motivo não gostar, devolvemos 100% do valor investido, sem perguntas.',
  },
  {
    q: 'Tem aplicativo mobile?',
    a: 'O MY GUILD HUB é totalmente responsivo e otimizado para uso mobile. Funciona perfeitamente no navegador do celular e pode ser instalado como PWA (Progressive Web App) no Android (Chrome) e iOS (Safari) — basta adicionar à tela inicial para ter uma experiência similar a um app nativo, sem precisar de nenhuma loja de aplicativos.',
  },
  {
    q: 'Como funciona o sistema de Alianças?',
    a: 'Você pode convidar outras guilds por link de aliança. Guilds aliadas passam a compartilhar automaticamente os dados do Boss Timer, sempre usando o timer mais recente registrado entre as guilds. Cada guild mantém seus dados de DKP, membros e configurações completamente separados e seguros.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useReveal();

  return (
    <section id="faq" className="relative">
      <div ref={ref} className="reveal max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-widest mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            FAQ
          </span>
          <h2 className="section-title text-3xl sm:text-4xl mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-500 text-lg">
            Tire todas as suas dúvidas antes de começar.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-card overflow-hidden cursor-pointer"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex items-center justify-between p-5 sm:p-6">
                <h3 className="text-white font-semibold text-[15px] pr-4">{faq.q}</h3>
                <ChevronDown
                  size={20}
                  className={`text-gray-500 shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180 text-emerald-400' : ''
                  }`}
                />
              </div>
              <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-400 leading-relaxed text-[15px]">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
