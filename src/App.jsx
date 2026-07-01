import React from 'react';
import {
  CheckCircle2,
  XCircle,
  Smartphone,
  Zap,
  Utensils,
  Shirt,
  ArrowRight,
  TrendingUp,
  LayoutDashboard,
  Menu,
  ShoppingBag,
  Star,
  Clock
} from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5500000000000?text=Olá!%20Quero%20criar%20meu%20catálogo%20digital.";
const DEMO_LINK = "https://meu-catalogo-profissional.vercel.app";

const SmartphoneMockup = ({ children, title = "Sua Loja" }) => (
  <div className="relative mx-auto border-zinc-800 bg-zinc-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl shadow-emerald-500/10">
    <div className="h-[32px] w-[3px] bg-zinc-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
    <div className="h-[46px] w-[3px] bg-zinc-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
    <div className="h-[46px] w-[3px] bg-zinc-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
    <div className="h-[64px] w-[3px] bg-zinc-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
    <div className="rounded-[2rem] overflow-hidden w-full h-full bg-zinc-950 flex flex-col">
      {/* Phone Header */}
      <div className="bg-zinc-900 px-4 py-6 flex items-center justify-between border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-xs">CD</div>
          <span className="text-xs font-bold">{title}</span>
        </div>
        <Menu className="w-4 h-4 text-zinc-400" />
      </div>
      {/* Phone Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {children}
      </div>
      {/* Phone Bottom Nav */}
      <div className="bg-zinc-900/80 backdrop-blur-md px-6 py-4 flex justify-between border-t border-zinc-800">
        <ShoppingBag className="w-5 h-5 text-emerald-500" />
        <LayoutDashboard className="w-5 h-5 text-zinc-500" />
        <Smartphone className="w-5 h-5 text-zinc-500" />
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-slate-100 font-sans selection:bg-emerald-500/30 overflow-x-hidden">

      {/* HEADER / NAV */}
      <header className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-900">
        <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
              <Zap className="text-zinc-950 fill-current w-6 h-6" />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase">Catálogo<span className="text-emerald-500">Pro</span></span>
          </div>
          <a
            href={WHATSAPP_LINK}
            className="hidden md:flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-5 py-2 rounded-full border border-emerald-500/20 font-bold hover:bg-emerald-500 hover:text-zinc-950 transition-all"
          >
            Falar com Especialista
          </a>
        </nav>
      </header>

      {/* SEÇÃO 1: HERO IMPACTANTE (REVISADO) */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent -z-10"></div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left">
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase bg-emerald-500 text-zinc-950 rounded-full">
              Economia Real • Zero Taxas
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
              Pare de entregar <span className="text-emerald-500">30% do seu lucro</span> para apps de delivery.
            </h1>

            <p className="max-w-xl text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
              Crie o seu catálogo digital interativo em minutos, receba pedidos organizados no seu WhatsApp e fature <span className="text-white font-bold underline decoration-emerald-500">100% livre de comissões</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-xl font-black text-zinc-950 transition-all duration-200 bg-emerald-500 rounded-2xl animate-pulse-custom hover:bg-emerald-400 hover:scale-105"
              >
                ⚡ Criar Meu Catálogo
              </a>
              <a
                href={DEMO_LINK}
                className="w-full sm:w-auto text-center px-10 py-5 text-xl font-bold text-slate-300 bg-zinc-900 border border-zinc-800 rounded-2xl hover:bg-zinc-800 hover:text-white transition-all"
              >
                Ver Demo
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-emerald-500/20 blur-[100px] rounded-full"></div>
            <SmartphoneMockup title="Burger do Chefe">
              <div className="relative rounded-xl overflow-hidden h-32 bg-zinc-800 mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
                <div className="absolute bottom-2 left-3">
                  <span className="text-[10px] font-bold bg-emerald-500 px-2 py-0.5 rounded text-zinc-950">ABERTO</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-bold">Classic Burger</span>
                    <span className="text-emerald-500 text-sm font-black">R$ 34,90</span>
                  </div>
                  <p className="text-[10px] text-zinc-500">Pão brioche, blend 180g, queijo cheddar e bacon crocante.</p>
                  <button className="mt-3 w-full py-1.5 bg-emerald-500 rounded-lg text-zinc-950 text-[10px] font-bold">ADICIONAR</button>
                </div>
                <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800 opacity-60">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-sm font-bold">Smash Duplo</span>
                    <span className="text-emerald-500 text-sm font-black">R$ 28,00</span>
                  </div>
                  <p className="text-[10px] text-zinc-500">Dois smash burgers, cebola roxa e molho especial.</p>
                </div>
              </div>
            </SmartphoneMockup>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: ANTES VS DEPOIS (VISUAL) */}
      <section className="py-24 bg-zinc-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
              O fim da confusão no <span className="text-emerald-500">atendimento</span>
            </h2>
            <div className="h-1.5 w-24 bg-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* O Caos Manual */}
            <div className="flex flex-col p-10 rounded-[3rem] bg-zinc-950 border border-red-500/10 hover:border-red-500/30 transition-all group">
              <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-8">
                <XCircle className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-black text-red-500 mb-6 uppercase">Atendimento Manual</h3>
              <div className="space-y-6 flex-1">
                <div className="flex items-center gap-4 text-slate-400">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <p>Clientes mandando áudios de 2 minutos</p>
                </div>
                <div className="flex items-center gap-4 text-slate-400">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <p>Erros constantes na anotação do pedido</p>
                </div>
                <div className="flex items-center gap-4 text-slate-400">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <p>Seu atendente preso 15 min por cliente</p>
                </div>
                <div className="flex items-center gap-4 text-slate-400 font-bold">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <p>Taxas de até 30% em cada venda</p>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-zinc-900 italic text-slate-500 text-sm">
                "Uma experiência frustrante que custa caro no final do mês."
              </div>
            </div>

            {/* A Automação */}
            <div className="flex flex-col p-10 rounded-[3rem] bg-zinc-950 border border-emerald-500/30 shadow-[0_0_50px_-12px_rgba(16,185,129,0.2)] transition-all">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8">
                <CheckCircle2 className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-black text-emerald-500 mb-6 uppercase">Automação Inteligente</h3>
              <div className="space-y-6 flex-1">
                <div className="flex items-center gap-4 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <p>O cliente monta o pedido sozinho e rápido</p>
                </div>
                <div className="flex items-center gap-4 text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <p>Cálculo automático de adicionais e frete</p>
                </div>
                <div className="flex items-center gap-4 text-slate-200 font-bold">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <p>Pedido chega formatado no seu WhatsApp</p>
                </div>
                <div className="flex items-center gap-4 text-emerald-400 font-black text-lg">
                  <CheckCircle2 className="w-6 h-6" />
                  <p>COMISSÃO ZERO. Lucro 100% seu.</p>
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-zinc-900 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-zinc-800"></div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 font-bold tracking-tight">+ de 1.200 lojistas economizando hoje</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: RECURSOS (STYLISH) */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-10 bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] hover:bg-zinc-900 transition-all hover:-translate-y-2">
              <Utensils className="w-12 h-12 text-emerald-500 mb-8" />
              <h3 className="text-2xl font-bold mb-4">Gastronomia</h3>
              <p className="text-slate-400 leading-relaxed">
                Ideal para hamburguerias e pizzarias. Adicione opcionais, bordas e combos de forma intuitiva.
              </p>
            </div>
            <div className="group p-10 bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] hover:bg-zinc-900 transition-all hover:-translate-y-2">
              <Shirt className="w-12 h-12 text-emerald-500 mb-8" />
              <h3 className="text-2xl font-bold mb-4">Varejo & Moda</h3>
              <p className="text-slate-400 leading-relaxed">
                Gestão de grade completa (P, M, G, Cores) para lojas de roupas, calçados e acessórios.
              </p>
            </div>
            <div className="group p-10 bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] hover:bg-zinc-900 transition-all hover:-translate-y-2">
              <LayoutDashboard className="w-12 h-12 text-emerald-500 mb-8" />
              <h3 className="text-2xl font-bold mb-4">Painel Real-Time</h3>
              <p className="text-slate-400 leading-relaxed">
                Mude preços, estoque e fotos direto do seu celular com um clique, sem precisar de computador.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: PREÇO ANCORADO & ROI */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="relative max-w-5xl mx-auto rounded-[4rem] bg-emerald-500 p-1 lg:p-2 overflow-hidden shadow-[0_0_80px_-20px_rgba(16,185,129,0.5)]">
            <div className="bg-zinc-950 rounded-[3.8rem] px-8 py-16 lg:p-20 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>

              <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase tracking-tighter">Investimento que <span className="text-emerald-500 underline underline-offset-8">se paga</span></h2>

              <div className="flex flex-col items-center mb-16">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl md:text-9xl font-black text-white tracking-tighter">R$ 59<span className="text-emerald-500">,90</span></span>
                  <span className="text-2xl font-bold text-slate-500 uppercase">/mês</span>
                </div>
                <p className="mt-6 text-emerald-400 font-black tracking-widest uppercase">Plano Profissional Completo</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 text-left max-w-3xl mx-auto">
                {[
                  { icon: Zap, text: "Pedidos Ilimitados" },
                  { icon: Smartphone, text: "100% Mobile First" },
                  { icon: Clock, text: "Suporte Prioritário" },
                  { icon: Star, text: "Domínio Próprio" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-sm font-bold text-slate-300 uppercase">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-zinc-900/50 p-8 rounded-3xl border border-emerald-500/10 mb-16 inline-block">
                <p className="text-slate-400 text-lg italic max-w-xl">
                  "O seu catálogo se paga sozinho ao salvar apenas <span className="text-white font-bold">2 pedidos por mês</span> que seriam cobrados pelas taxas dos aplicativos tradicionais."
                </p>
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-12 py-6 text-2xl font-black text-zinc-950 bg-emerald-500 rounded-[2rem] hover:bg-emerald-400 hover:scale-105 transition-all shadow-xl shadow-emerald-500/20"
              >
                COMEÇAR AGORA <ArrowRight className="ml-3 w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: DEMO */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">Quer ver ao vivo?</h2>
            <p className="text-slate-400 mb-12 text-xl leading-relaxed">
              Acesse nossa loja de demonstração agora e experimente a mesma agilidade que seus clientes terão.
            </p>
            <a
              href={DEMO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-emerald-400 font-black text-xl hover:text-emerald-300 group transition-all"
            >
              👁️ VER CATÁLOGO EXEMPLO
              <div className="w-12 h-12 rounded-full border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/10 transition-all">
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-zinc-900 bg-zinc-950">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-2 grayscale">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
              <Zap className="text-zinc-950 fill-current w-5 h-5" />
            </div>
            <span className="text-lg font-black tracking-tighter uppercase">Catálogo<span className="text-emerald-500">Pro</span></span>
          </div>
          <div className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} Catálogo Digital Pro. Feito para crescer.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Termos</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
