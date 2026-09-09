import React, { useState } from 'react';
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
  Clock,
  MessageCircle,
  ShieldCheck,
  Award,
  ChevronDown,
  Sparkles,
  Store,
  DollarSign,
  Share2,
  Users,
  Check,
  Plus,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5511940662259?text=Olá!%20Quero%20criar%20meu%20catálogo%20digital.";
const DEMO_LINK = "https://catalogopro-pi.vercel.app/";

const DEMO_DATA = {
  food: {
    category: "Gastronomia",
    storeName: "Burger Do Chefe",
    banner: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    badge: "Aberto Agora",
    items: [
      {
        id: 1,
        title: "Burger Smash Duplo",
        price: "R$ 34,90",
        desc: "Pão brioche, 2x smashed blend 90g, cheddar duplo e bacon crocante.",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80",
        popular: true
      },
      {
        id: 2,
        title: "Combo Artesanal + Fritas",
        price: "R$ 44,90",
        desc: "Burger especial, batata rústica crocante e molho da casa.",
        img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=300&q=80",
        popular: false
      }
    ]
  },
  fashion: {
    category: "Moda & Estilo",
    storeName: "Urban Concept Store",
    banner: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
    badge: "Nova Coleção",
    items: [
      {
        id: 1,
        title: "Jaqueta Streetwear Oversized",
        price: "R$ 189,90",
        desc: "Algodão premium, caimento moderno. Disponível P, M, G, GG.",
        img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=300&q=80",
        popular: true
      },
      {
        id: 2,
        title: "Camiseta Minimal Black",
        price: "R$ 79,90",
        desc: "100% algodão penteado 30.1. Toque macio e durabilidade alta.",
        img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=300&q=80",
        popular: false
      }
    ]
  },
  retail: {
    category: "Varejo & Acessórios",
    storeName: "Tech & Style Acessórios",
    banner: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=600&q=80",
    badge: "Frete Grátis",
    items: [
      {
        id: 1,
        title: "Fone Bluetooth Pro Bass",
        price: "R$ 129,90",
        desc: "Cancelamento de ruído, bateria até 24h e estojo de recarga rápida.",
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80",
        popular: true
      },
      {
        id: 2,
        title: "Smartwatch Sport GPS",
        price: "R$ 249,90",
        desc: "Monitor cardíaco, resistente à água e compatível com iOS e Android.",
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80",
        popular: false
      }
    ]
  }
};

const SmartphoneMockup = ({ selectedCategory, setSelectedCategory }) => {
  const currentData = DEMO_DATA[selectedCategory] || DEMO_DATA.food;

  return (
    <div className="relative mx-auto border-navy-700 bg-navy-900 border-[12px] rounded-[3rem] h-[640px] w-[320px] sm:w-[330px] shadow-2xl shadow-sky-500/10 transition-all duration-300">
      {/* Top phone elements */}
      <div className="h-[28px] w-[3px] bg-navy-700 absolute -left-[15px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-navy-700 absolute -left-[15px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-navy-700 absolute -left-[15px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-navy-700 absolute -right-[15px] top-[142px] rounded-r-lg"></div>

      {/* Screen Notch */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-navy-900 rounded-b-xl z-30 flex justify-center items-center">
        <div className="w-10 h-1 bg-navy-700 rounded-full"></div>
      </div>

      <div className="rounded-[2.4rem] overflow-hidden w-full h-full bg-navy-950 flex flex-col text-slate-100 font-sans relative">

        {/* Phone Header */}
        <div className="bg-navy-900/90 backdrop-blur-md pt-7 pb-3 px-4 flex items-center justify-between border-b border-navy-800 shrink-0 z-20">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-sky-500 to-brand-emerald flex items-center justify-center font-black text-xs text-navy-950 shadow-sm">
              CP
            </div>
            <div>
              <p className="text-[11px] font-extrabold text-white leading-tight truncate max-w-[130px]">{currentData.storeName}</p>
              <p className="text-[9px] text-sky-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block"></span>
                {currentData.badge}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Share2 className="w-3.5 h-3.5 text-slate-400" />
            <Menu className="w-4 h-4 text-slate-300" />
          </div>
        </div>

        {/* Niche Selector Tabs inside Mockup */}
        <div className="bg-navy-900/50 p-1.5 border-b border-navy-800 flex gap-1 justify-around shrink-0 z-10">
          <button
            onClick={() => setSelectedCategory('food')}
            className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
              selectedCategory === 'food'
                ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-navy-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Burgers
          </button>
          <button
            onClick={() => setSelectedCategory('fashion')}
            className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
              selectedCategory === 'fashion'
                ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-navy-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Moda
          </button>
          <button
            onClick={() => setSelectedCategory('retail')}
            className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${
              selectedCategory === 'retail'
                ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-navy-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Varejo
          </button>
        </div>

        {/* Phone Content Scrollable */}
        <div className="flex-1 overflow-y-auto p-3 space-y-3 custom-scrollbar">

          {/* Store Banner */}
          <div className="relative rounded-xl overflow-hidden h-28 bg-navy-800 group shadow-md">
            <img
              src={currentData.banner}
              alt={currentData.storeName}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
            <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end">
              <div>
                <span className="text-[9px] font-extrabold bg-sky-500 text-navy-950 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  {currentData.category}
                </span>
                <p className="text-[10px] text-slate-300 mt-0.5">⭐ 4.9 (120+ avaliações)</p>
              </div>
            </div>
          </div>

          {/* Product Items */}
          <div className="space-y-2.5">
            {currentData.items.map((item) => (
              <div
                key={item.id}
                className="p-2.5 bg-navy-900/80 rounded-xl border border-navy-800 hover:border-sky-500/40 transition-all flex gap-2.5 items-center shadow-sm"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 rounded-lg object-cover bg-navy-800 shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h4 className="text-[11px] font-bold text-white truncate">{item.title}</h4>
                    {item.popular && (
                      <span className="text-[8px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded font-bold shrink-0">
                        Top 1
                      </span>
                    )}
                  </div>
                  <p className="text-[9px] text-slate-400 line-clamp-2 my-0.5">{item.desc}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[11px] font-black text-sky-400">{item.price}</span>
                    <button className="px-2 py-0.5 bg-sky-500 hover:bg-sky-400 text-navy-950 rounded-md text-[9px] font-extrabold transition-colors flex items-center gap-0.5">
                      <Plus className="w-2.5 h-2.5" /> Pedir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Direct WhatsApp Callout Banner */}
          <div className="p-2.5 bg-gradient-to-r from-emerald-950/60 to-navy-900 border border-emerald-500/30 rounded-xl flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <p className="text-[10px] font-bold text-emerald-300">Pedido via WhatsApp</p>
                <p className="text-[8px] text-slate-400">Zero taxas • Envio direto</p>
              </div>
            </div>
            <span className="text-[8px] font-black bg-emerald-500 text-navy-950 px-2 py-1 rounded-md">100% Livre</span>
          </div>

        </div>

        {/* Phone Bottom Nav */}
        <div className="bg-navy-900/90 backdrop-blur-md px-6 py-3 flex justify-between items-center border-t border-navy-800 shrink-0 z-20 text-xs">
          <div className="flex flex-col items-center gap-0.5 text-sky-400">
            <ShoppingBag className="w-4 h-4" />
            <span className="text-[8px] font-bold">Catálogo</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 text-slate-500 hover:text-slate-300">
            <LayoutDashboard className="w-4 h-4" />
            <span className="text-[8px]">Painel</span>
          </div>
          <div className="flex flex-col items-center gap-0.5 text-slate-500 hover:text-slate-300">
            <MessageCircle className="w-4 h-4" />
            <span className="text-[8px]">Pedidos</span>
          </div>
        </div>

      </div>
    </div>
  );
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState('food');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 font-sans selection:bg-sky-500/30 overflow-x-hidden relative">

      {/* BACKGROUND GRADIENT OVERLAYS */}
      <div className="fixed inset-0 bg-navy-radial pointer-events-none -z-20"></div>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-sky-500/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[180px] rounded-full pointer-events-none -z-10"></div>

      {/* HEADER / NAVIGATION BAR */}
      <header className="fixed top-0 w-full z-50 bg-navy-950/80 backdrop-blur-xl border-b border-navy-800/80">
        <nav className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-cyan-400 to-emerald-400 flex items-center justify-center shadow-lg shadow-sky-500/20">
              <Zap className="text-navy-950 fill-current w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-white uppercase">
                Catálogo<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">Pro</span>
              </span>
              <span className="hidden sm:block text-[10px] tracking-widest text-slate-400 font-bold uppercase">
                Vendas Sem Comissões
              </span>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-4">
            <a
              href={DEMO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white transition-colors"
            >
              <span>Ver Exemplo Ao Vivo</span>
              <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-navy-950 px-5 py-2.5 rounded-full font-black text-xs sm:text-sm hover:brightness-110 shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Criar Meu Catálogo</span>
            </a>
          </div>

        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Text Content */}
          <div className="lg:col-span-7 text-left space-y-8">

            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-850/80 border border-sky-500/30 text-sky-300 text-xs sm:text-sm font-bold shadow-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>Sem Taxas de Intermediação • 100% Seu Lucro</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Pare de entregar <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400">até 30% do seu lucro</span> para apps de delivery.
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
              Crie o seu <strong className="text-white font-semibold">catálogo digital interativo</strong> em minutos. Receba pedidos totalmente organizados diretamente no seu <span className="text-emerald-400 font-bold underline decoration-emerald-500/50">WhatsApp</span> e fature com <strong className="text-white font-semibold">zero comissão por venda</strong>.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-black text-navy-950 transition-all duration-300 bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 rounded-2xl shadow-xl shadow-cyan-500/25 animate-pulse-custom hover:scale-105"
              >
                <Zap className="w-5 h-5 mr-2 fill-current" />
                <span>CRIAR MEU CATÁLOGO AGORA</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={DEMO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-4 text-base font-bold text-slate-200 bg-navy-900/90 border border-navy-700/80 rounded-2xl hover:bg-navy-800 hover:text-white hover:border-sky-500/40 transition-all shadow-md"
              >
                <span>Ver Demonstração Ao Vivo</span>
                <ExternalLink className="w-4 h-4 ml-2 text-sky-400" />
              </a>
            </div>

            {/* Social Proof & Metrics Strip */}
            <div className="pt-6 border-t border-navy-800/80 grid grid-cols-3 gap-4 max-w-xl">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-white">0%</p>
                <p className="text-xs text-slate-400 font-medium">De comissão cobrada</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-sky-400">&lt; 5 min</p>
                <p className="text-xs text-slate-400 font-medium">Para configurar e publicar</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-emerald-400">100%</p>
                <p className="text-xs text-slate-400 font-medium">Mobile e adaptável</p>
              </div>
            </div>

          </div>

          {/* Right Smartphone Mockup Visual */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Glowing background halo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[550px] bg-gradient-to-tr from-sky-500/20 via-cyan-500/20 to-emerald-500/10 blur-3xl rounded-full pointer-events-none"></div>

            <SmartphoneMockup
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>

        </div>
      </section>

      {/* SEÇÃO 2: ANTES VS DEPOIS (VISUAL COMPARISON) */}
      <section className="py-24 relative bg-navy-900/40 border-y border-navy-800/60">
        <div className="container mx-auto px-4 sm:px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-sky-400 uppercase bg-navy-800 px-4 py-1.5 rounded-full border border-sky-500/20">
              Transformação do Seu Negócio
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-6 tracking-tight">
              O fim do caos no <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">atendimento do WhatsApp</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Compare como funciona o atendimento manual tradicional em relação ao seu novo catálogo digital inteligente.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">

            {/* Caos Manual (Old Way) */}
            <div className="glass-card p-8 sm:p-10 rounded-3xl border-red-500/20 hover:border-red-500/40 transition-all flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-2xl rounded-full pointer-events-none"></div>

              <div>
                <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 border border-red-500/20">
                  <XCircle className="w-7 h-7 text-red-400" />
                </div>
                <span className="text-xs font-bold text-red-400 tracking-wider uppercase">Método Antigo</span>
                <h3 className="text-2xl font-black text-white mt-1 mb-6">Atendimento Manual Lento</h3>

                <ul className="space-y-4 text-slate-300 text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span>Clientes enviando áudios longos e fotos confusas de cardápios antigos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span>Erros recorrentes em anotações de sabores, adicionais e endereços.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span>Atendentes presos 15 a 20 minutos com um único cliente tirando dúvidas.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span>Plataformas tradicionais cobrando de 12% a 30% de comissão por cada venda.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-navy-800 text-xs sm:text-sm text-slate-400 italic">
                "Resultado: Clientes impacientes, vendas perdidas e margem de lucro corroída por taxas."
              </div>
            </div>

            {/* Automação Inteligente (New Way) */}
            <div className="glass-card glass-card-hover p-8 sm:p-10 rounded-3xl border-sky-500/40 relative overflow-hidden flex flex-col justify-between shadow-2xl shadow-sky-500/10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/10 blur-3xl rounded-full pointer-events-none"></div>

              <div>
                <div className="w-14 h-14 bg-gradient-to-tr from-sky-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border border-sky-500/30">
                  <CheckCircle2 className="w-7 h-7 text-sky-400" />
                </div>
                <span className="text-xs font-bold text-sky-400 tracking-wider uppercase">Com CatálogoPro</span>
                <h3 className="text-2xl font-black text-white mt-1 mb-6">Automação Inteligente</h3>

                <ul className="space-y-4 text-slate-200 text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>O próprio cliente navega pelas fotos, adicionais e escolhe seus itens.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Cálculo automático de adicionais, opções de pagamento e frete.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Pedido chega 100% pronto, organizado e formatado direto no seu WhatsApp.</span>
                  </li>
                  <li className="flex items-start gap-3 font-bold text-emerald-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>COMISSÃO ZERO: Todo o valor da venda vai direto para você.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-navy-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-sky-400" />
                  <span className="text-xs font-bold text-slate-300">Eficiência + Margem de Lucro Preservada</span>
                </div>
                <span className="text-xs font-black bg-emerald-500 text-navy-950 px-2.5 py-1 rounded-full">Lucro 100% Seu</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SEÇÃO 3: NICHOS DE ATUAÇÃO COM IMAGENS ATRACTIVAS */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-sky-400 uppercase bg-navy-800 px-4 py-1.5 rounded-full border border-sky-500/20">
              Perfeito Para Qualquer Segmento
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-6 tracking-tight">
              Feito para o <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400">seu tipo de negócio</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Independente do seu segmento, o CatálogoPro adapta-se perfeitamente às necessidades de apresentação dos seus produtos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Card Gastronomia */}
            <div className="glass-card glass-card-hover rounded-3xl overflow-hidden group flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
                  alt="Gastronomia"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
                <div className="absolute bottom-4 left-6 flex items-center gap-2">
                  <div className="p-2 bg-sky-500/20 backdrop-blur-md rounded-xl border border-sky-500/30">
                    <Utensils className="w-5 h-5 text-sky-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Gastronomia & Delivery</h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Ideal para hamburguerias, pizzarias, marmitarias e docerias. Permite ao cliente personalizar adicionais, escolher ingredientes e selecionar opções de entrega.
                </p>
                <ul className="space-y-2 text-xs font-medium text-slate-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" /> Opção de adicionais e bordas
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" /> Observações do pedido personalizadas
                  </li>
                </ul>
              </div>
            </div>

            {/* Card Moda & Varejo */}
            <div className="glass-card glass-card-hover rounded-3xl overflow-hidden group flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=600&q=80"
                  alt="Moda e Varejo"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
                <div className="absolute bottom-4 left-6 flex items-center gap-2">
                  <div className="p-2 bg-cyan-500/20 backdrop-blur-md rounded-xl border border-cyan-500/30">
                    <Shirt className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Moda & Vestuário</h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Perfeito para lojas de roupas, calçados e acessórios. Seus clientes selecionam tamanhos (P, M, G), cores e variações com facilidade e clareza.
                </p>
                <ul className="space-y-2 text-xs font-medium text-slate-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" /> Variação de tamanhos e cores
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" /> Múltiplas fotos por produto
                  </li>
                </ul>
              </div>
            </div>

            {/* Card Produtos & Serviços */}
            <div className="glass-card glass-card-hover rounded-3xl overflow-hidden group flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=600&q=80"
                  alt="Eletrônicos e Varejo"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
                <div className="absolute bottom-4 left-6 flex items-center gap-2">
                  <div className="p-2 bg-emerald-500/20 backdrop-blur-md rounded-xl border border-emerald-500/30">
                    <Store className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Varejo & Eletrônicos</h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Excelente para perfumaria, eletrônicos, cosméticos e prestadores de serviços. Exiba seus produtos com detalhes técnicos e preços sempre atualizados.
                </p>
                <ul className="space-y-2 text-xs font-medium text-slate-400">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" /> Atualizações instantâneas de estoque
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" /> Link direto e fácil de compartilhar
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SEÇÃO 4: RECURSOS RELEVANTES & FACILIDADES */}
      <section className="py-20 bg-navy-900/30 border-y border-navy-800/60">
        <div className="container mx-auto px-4 sm:px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-sky-400 uppercase bg-navy-800 px-4 py-1.5 rounded-full border border-sky-500/20">
              Recursos de Alta Conversão
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 mb-6 tracking-tight">
              Tudo o que você precisa para <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">vender mais</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="glass-card p-6 rounded-2xl border-navy-700/60 hover:border-sky-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-5">
                <Smartphone className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">100% Mobile First</h4>
              <p className="text-slate-400 text-sm">
                Desenvolvido para carregar em alta velocidade em qualquer smartphone, sem travar nem consumir dados.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border-navy-700/60 hover:border-sky-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-5">
                <LayoutDashboard className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Painel de Gestão Direto</h4>
              <p className="text-slate-400 text-sm">
                Adicione produtos, altere valores ou oculte itens sem estoque direto do seu celular em poucos cliques.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border-navy-700/60 hover:border-sky-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-5">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Integração WhatsApp</h4>
              <p className="text-slate-400 text-sm">
                Os pedidos chegam estruturados com nome, itens, valores e endereço pronto para entrega.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl border-navy-700/60 hover:border-sky-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-sky/10 flex items-center justify-center text-sky-400 mb-5">
                <DollarSign className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Sem Taxa por Venda</h4>
              <p className="text-slate-400 text-sm">
                Venda R$ 1.000 ou R$ 50.000 no mês e pague apenas a assinatura fixa sem pegadinhas ou cobranças extras.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SEÇÃO 5: PREÇO ANCORADO & ROI EXPLICITO */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">

          <div className="relative max-w-4xl mx-auto rounded-[3rem] p-1 bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 shadow-2xl shadow-sky-500/20">
            <div className="bg-navy-950 rounded-[2.9rem] p-8 sm:p-14 text-center relative overflow-hidden">

              <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 blur-[100px] rounded-full pointer-events-none"></div>

              <span className="inline-block px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-6">
                Plano Profissional
              </span>

              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-8">
                Um investimento que <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">se paga sozinho</span>
              </h2>

              <div className="flex flex-col items-center mb-10">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-bold text-slate-400">R$</span>
                  <span className="text-6xl sm:text-8xl font-black text-white tracking-tighter">49</span>
                  <span className="text-3xl font-black text-sky-400">,90</span>
                  <span className="text-lg font-bold text-slate-400">/mês</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-emerald-400 mt-2 tracking-wide uppercase">
                  Sem Fidelidade • Cancele quando quiser
                </p>
              </div>

              {/* Checklist included features */}
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left mb-10">
                {[
                  "Catálogo Interativo Ilimitado",
                  "Pedidos Diretos no WhatsApp",
                  "Painel de Controle Mobile",
                  "Sem Taxas ou Comissões por Venda",
                  "Suporte Técnico Prioritário",
                  "Link Exclusivo da Sua Loja"
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <span className="text-sm font-medium text-slate-200">{feat}</span>
                  </div>
                ))}
              </div>

              {/* ROI Box */}
              <div className="bg-navy-900/80 p-6 rounded-2xl border border-sky-500/20 mb-10 max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
                💡 <strong className="text-white">Cálculo de ROI Rápido:</strong> Se você faz vendas pelo delivery tradicional, o CatálogoPro se paga ao economizar a taxa de <strong className="text-emerald-400">apenas 2 ou 3 pedidos</strong> no mês inteiro.
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 text-xl font-black text-navy-950 bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 rounded-2xl hover:scale-105 transition-all shadow-xl shadow-cyan-500/20"
              >
                <span>CRIAR MEU CATÁLOGO AGORA</span>
                <ArrowRight className="ml-3 w-6 h-6" />
              </a>

            </div>
          </div>

        </div>
      </section>

      {/* SEÇÃO 6: PERGUNTAS FREQUENTES (FAQ) */}
      <section className="py-20 bg-navy-900/40 border-t border-navy-800/60">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">

          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest text-sky-400 uppercase bg-navy-800 px-4 py-1.5 rounded-full border border-sky-500/20">
              Tire Suas Dúvidas
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 tracking-tight">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Preciso ter um computador para gerenciar o catálogo?",
                a: "Não! Você pode gerenciar todo o seu catálogo, adicionar fotos, mudar preços e cadastrar produtos diretamente pelo seu smartphone."
              },
              {
                q: "O catálogo cobra comissão por cada pedido?",
                a: "Zero comissão! Você paga apenas o valor da mensalidade fixa e 100% do valor de cada venda é totalmente seu."
              },
              {
                q: "Como o meu cliente recebe o catálogo?",
                a: "Você recebe um link exclusivo da sua loja (ex: catalogopro.app/sualoja). Você pode colocar este link na bio do Instagram, no status do WhatsApp ou enviar diretamente aos clientes."
              },
              {
                q: "Quanto tempo leva para meu catálogo ficar pronto?",
                a: "Em menos de 5 minutos você consegue cadastrar seus dados e seus primeiros produtos para já começar a vender."
              }
            ].map((faq, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl border-navy-700/60 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 font-bold text-white hover:text-sky-300 transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-sky-400 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed border-t border-navy-800/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FLOATING QUICK WHATSAPP BUTTON */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-navy-950 px-5 py-3.5 rounded-full font-black shadow-2xl shadow-emerald-500/40 hover:scale-105 transition-all"
          title="Falar com Especialista no WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="hidden sm:inline text-sm">Criar Catálogo no WhatsApp</span>
        </a>
      </div>

      {/* FOOTER */}
      <footer className="py-12 border-t border-navy-800 bg-navy-950 text-slate-400 text-xs sm:text-sm">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-sky-500 flex items-center justify-center">
              <Zap className="text-navy-950 fill-current w-4 h-4" />
            </div>
            <span className="text-base font-black text-white uppercase tracking-tight">
              Catálogo<span className="text-sky-400">Pro</span>
            </span>
          </div>

          <div className="text-center md:text-left text-slate-400">
            © {new Date().getFullYear()} CatálogoPro. Todos os direitos reservados.
          </div>

          <div className="flex gap-6 text-slate-400">
            <a href={DEMO_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Demonstração</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Suporte</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
