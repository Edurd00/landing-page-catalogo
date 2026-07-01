import React from 'react';
import {
  MessageCircle,
  CheckCircle2,
  XCircle,
  Smartphone,
  Zap,
  ShoppingBag,
  Utensils,
  Shirt,
  ArrowRight,
  TrendingUp,
  LayoutDashboard
} from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5511940662259?text=Olá!%20Quero%20criar%20meu%20catálogo%20digital.";
const DEMO_LINK = "https://meu-catalogo-profissional.vercel.app";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-slate-100 font-sans selection:bg-emerald-500/30">

      {/* SEÇÃO 1: HERO IMPACTANTE */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-48">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent -z-10"></div>

        <div className="container mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide uppercase bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
            Fature 100% Livre de Comissões
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
            Pare de entregar até <span className="text-emerald-500">30% do seu lucro</span> para aplicativos de delivery.
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
            Crie o seu catálogo digital interativo em minutos, receba pedidos organizados diretamente no seu WhatsApp e fature 100% livre de comissões ou taxas abusivas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-emerald-600 rounded-xl animate-pulse-custom hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              <Zap className="w-6 h-6 mr-2 fill-current" />
              ⚡ Quero Criar Meu Catálogo Agora
            </a>

            <a
              href={DEMO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-300 transition-all duration-200 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-zinc-800 hover:text-white"
            >
              👁️ Ver Catálogo Exemplo
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: ANTES VS DEPOIS */}
      <section className="py-24 bg-zinc-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Por que continuar no <span className="text-red-500">caos manual?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* O Caos Manual */}
            <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <XCircle className="w-24 h-24 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
                <XCircle className="w-6 h-6 mr-2" />
                Atendimento Lento no Whats
              </h3>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span> Áudios longos e cansativos de clientes.
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span> Erros constantes em tamanhos, sabores ou adicionais.
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span> Atendente perde até 15 minutos por pedido.
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span> Taxas agressivas de marketplaces (iFood/Rappi).
                </li>
              </ul>
            </div>

            {/* A Automação */}
            <div className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <CheckCircle2 className="w-24 h-24 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center">
                <CheckCircle2 className="w-6 h-6 mr-2" />
                Agilidade com o Catálogo
              </h3>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span> O cliente escolhe tudo sozinho em um menu intuitivo.
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span> Valor total somado automaticamente com frete.
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span> O pedido chega "mastigado" e organizado no seu Whats.
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span> Comissão ZERO. O lucro é 100% seu.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: RECURSOS PREMIUM (MULTINICHO) */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Feito para o seu negócio</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-16 text-lg">
            Não importa o que você vende, nosso sistema se adapta perfeitamente à sua necessidade.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-emerald-500/50 transition-colors">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Utensils className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Hamburguerias e Pizzarias</h3>
              <p className="text-slate-400">
                Adicione opcionais de bordas recheadas, ingredientes extras ou sabores combinados com facilidade.
              </p>
            </div>

            <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-emerald-500/50 transition-colors">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Shirt className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Lojas de Moda e Calçados</h3>
              <p className="text-slate-400">
                Exiba grades completas de tamanhos, cores e variações sem qualquer complicação para o cliente.
              </p>
            </div>

            <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-emerald-500/50 transition-colors">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <LayoutDashboard className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Painel Administrativo</h3>
              <p className="text-slate-400">
                Altere preços, estoque e fotos direto do seu celular, de onde você estiver, em tempo real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4: PREÇO ANCORADO & CONTADOR DE ROI */}
      <section className="py-24 bg-emerald-600">
        <div className="container mx-auto px-6 text-center text-white">
          <div className="max-w-4xl mx-auto p-12 bg-zinc-950 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-3xl -mr-32 -mt-32"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-8">Investimento que se paga sozinho</h2>

            <div className="flex flex-col items-center justify-center mb-10">
              <span className="text-slate-400 text-lg line-through">De R$ 99,90</span>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold">R$</span>
                <span className="text-7xl font-black text-emerald-500 mx-2 tracking-tighter">59,90</span>
                <span className="text-xl text-slate-400">/mês</span>
              </div>
              <p className="mt-4 text-emerald-400 font-medium">Plano Profissional Completo</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto mb-10">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-5 h-5 text-emerald-500" />
                <p className="text-slate-300">Pedidos Ilimitados</p>
              </div>
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-emerald-500" />
                <p className="text-slate-300">100% Mobile First</p>
              </div>
            </div>

            <div className="p-6 bg-zinc-900/50 border border-emerald-500/20 rounded-2xl mb-10">
              <p className="text-slate-300 italic">
                "O seu catálogo se paga sozinho ao salvar apenas 2 pedidos por mês que seriam cobrados pelas taxas dos aplicativos tradicionais."
              </p>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-12 py-5 text-xl font-bold text-zinc-950 bg-emerald-500 rounded-2xl hover:bg-emerald-400 transition-all hover:scale-105"
            >
              Quero Começar Agora <ArrowRight className="ml-2 w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5: O BOTÃO DE ACESSO AO SEU CATÁLOGO EXEMPLO */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <div className="p-16 rounded-[3rem] bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Quer ver como funciona na prática?</h2>
            <p className="text-slate-400 mb-12 text-lg max-w-xl mx-auto">
              Acesse nossa loja de demonstração e faça um pedido teste para sentir a experiência do seu cliente.
            </p>

            <a
              href={DEMO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-zinc-800 border-2 border-zinc-700 rounded-2xl hover:bg-zinc-700 hover:border-emerald-500/50 transition-all group"
            >
              👁️ Ver Catálogo de Demonstração em Tempo Real
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-zinc-900">
        <div className="container mx-auto px-6 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Catálogo Digital Pro. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
