import React, { useState, useEffect } from 'react';
import { 
  Check, 
  Clock, 
  Star, 
  Gift, 
  Palette, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  ChevronDown,
  ArrowRight,
  MonitorSmartphone,
  Download,
  Award,
  FolderArchive,
  RefreshCcw,
  CheckCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';

const carouselImages = [
  "https://i.postimg.cc/vZb0zYsQ/asset-0001.webp",
  "https://i.postimg.cc/qv41LJTB/asset-0002.webp",
  "https://i.postimg.cc/pLRsZWHt/asset-0003.webp",
  "https://i.postimg.cc/t4pB5qj4/asset-0004.webp",
  "https://i.postimg.cc/g2mgDzWz/asset-0005.webp",
  "https://i.postimg.cc/Mpq9D6Sz/asset-0006.webp",
];

const testimonialImages = [
  "https://i.postimg.cc/6Qmsg2WV/image.png",
  "https://i.postimg.cc/cJbq2gxR/image2.png",
  "https://i.postimg.cc/fbr4ptz0/6.png",
  "https://i.postimg.cc/R0Dry6Sw/image3.png",
  "https://i.postimg.cc/VNVyprfj/image4.png"
];

const COUNTDOWN_INITIAL = { hours: 0, minutes: 55, seconds: 19 };

export default function App() {
  const [timeLeft, setTimeLeft] = useState(COUNTDOWN_INITIAL);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    setCurrentDate(formattedDate);
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (hours === 0 && minutes === 0 && seconds === 0) return prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) hours--;
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="min-h-screen font-sans selection:bg-brand-gold-light/30">
      {/* URGENCY BANNER */}
      <div className="bg-brand-gold-light text-brand-bg text-center py-2 px-4 text-sm font-extrabold tracking-wide relative w-full z-50 shadow-md overflow-hidden border-b border-brand-gold">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12 animate-shimmer pointer-events-none"></div>
        <div className="flex items-center justify-center gap-2 max-w-7xl mx-auto flex-wrap relative z-10">
          <span>OFERTA VÁLIDA SOMENTE HOJE, {currentDate}</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="pt-8 md:pt-12 pb-12 px-4 max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 flex flex-col items-center"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-2">
            <span className="text-brand-gold">+1500 Estampas Cristãs Prontas</span><br /> para Você Estampar e Lucrar Hoje
          </h1>
          <p className="text-base md:text-lg text-brand-text leading-relaxed max-w-2xl mx-auto mb-2">
            Artes profissionais no seu negócio hoje. Você imprime, vende e lucra. Simples assim.
          </p>
          
          <img 
            src="https://i.postimg.cc/8cjvZvnX/Chat-GPT-Image-28-de-abr-de-2026-22-07-22-(1).png" 
            alt="Amostra de Estampas" 
            className="w-full max-w-3xl mx-auto -my-4"
            fetchPriority="high"
            decoding="async"
          />

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            onClick={scrollToPricing}
            className="w-full sm:w-auto bg-gradient-to-r from-brand-gold-mid via-brand-gold to-brand-gold-light text-brand-bg px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2 mx-auto relative z-10"
          >
            Quero acessar agora
            <ArrowRight size={20} />
          </motion.button>
          <div className="flex items-center justify-center gap-2 text-sm text-brand-text/70 font-medium mt-3">
            <ShieldCheck size={18} className="text-brand-gold" />
            Compra 100% segura e acesso imediato
          </div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-brand-bg relative border-y border-brand-border">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">O QUE VOCÊ VAI RECEBER</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            <FeatureCard 
              icon={<Palette size={26} />}
              title="+1500 Estampas Cristãs"
              desc="Artes exclusivas e prontas para imprimir, com variedade de estilos para todos os públicos."
            />
            <FeatureCard 
              icon={<Gift size={26} />}
              title="3 Bônus Exclusivos"
              desc="Três bônus profissionais grátis para você vender mais e crescer mais rápido."
            />
            <FeatureCard 
              icon={<FolderArchive size={26} />}
              title="Arquivos em Alta Resolução"
              desc="Artes em qualidade profissional, prontas para impressão em qualquer tamanho."
            />
            <FeatureCard 
              icon={<RefreshCcw size={26} />}
              title="Atualizações Semanais"
              desc="Todo semana artes novas no seu acesso. Sua coleção sempre crescendo."
            />
            <div className="md:col-span-2">
              <div className="max-w-[400px] mx-auto w-full">
                <FeatureCard 
                  icon={<CheckCircle size={26} />}
                  title="Garantia de 30 Dias"
                  desc="Não ficou satisfeito? Devolvemos 100% do seu dinheiro. Sem perguntas."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 w-full overflow-hidden">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Uma Amostra do Que Você Vai Encontrar 😍</h2>
        </div>
        
        <div className="w-full flex group">
          <div className="animate-carousel gap-4 pr-4">
            {[...carouselImages, ...carouselImages].map((src, idx) => (
              <img 
                key={`carouselItem1-${idx}`}
                src={src} 
                className="rounded-xl object-cover h-64 sm:h-80 w-auto hover:scale-[1.02] transition-transform border border-brand-border shrink-0" 
                alt="Amostra de Estampa" 
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
          <div className="animate-carousel gap-4 pr-4" aria-hidden="true">
            {[...carouselImages, ...carouselImages].map((src, idx) => (
              <img 
                key={`carouselItem2-${idx}`}
                src={src} 
                className="rounded-xl object-cover h-64 sm:h-80 w-auto hover:scale-[1.02] transition-transform border border-brand-border shrink-0" 
                alt="Amostra de Estampa" 
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-brand-card text-white border-y border-brand-border relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">O Que Estampadores Como Você Estão Dizendo</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* BONUSES */}
      <section className="py-20 bg-brand-bg relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 px-2">
            <div className="inline-block animate-pulse-scale bg-brand-gold text-brand-bg font-bold px-5 py-2 rounded-full mb-6 uppercase tracking-wider text-xs md:text-sm cursor-default">
              SOMENTE HOJE NO PACOTE COMPLETO
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white whitespace-nowrap sm:whitespace-normal">
              🎁 BÔNUS EXCLUSIVOS
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <BonusCard 
              num="01"
              img="https://i.postimg.cc/MHDXymwR/Chat-GPT-Image-29-de-abr-de-2026-20-21-48.png"
              title="Pack de Fontes Cristãs Selecionadas"
              desc="Tipografias cuidadosamente escolhidas para deixar suas artes ainda mais profissionais e impactantes."
              value="67,00"
            />
            <BonusCard 
              num="02"
              img="https://i.postimg.cc/d3BD8jFh/Chat-GPT-Image-29-de-abr-de-2026-20-22-01.png"
              title="Planilha de Custos e Precificação"
              desc="Acabou o 'chute' no preço! Calcule exatamente quanto cobrar, maximize seu lucro e tome decisões com segurança."
              value="47,00"
            />
            <BonusCard 
              num="03"
              img="https://i.postimg.cc/wMV3hQzN/Chat-GPT-Image-29-de-abr-de-2026-20-21-57.png"
              title="Calendário de Datas Cristãs"
              desc="Planeje suas coleções com antecedência aproveitando cada data importante do calendário evangélico."
              value="47,00"
            />
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 max-w-6xl mx-auto px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-gold/5 via-brand-bg to-brand-bg -z-10"></div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Escolha Seu Plano e Comece Agora</h2>
          
          <div className="inline-block bg-brand-card border border-brand-gold/30 rounded-xl p-4 md:p-6 mb-8 text-brand-gold">
            <p className="font-bold flex items-center justify-center gap-2 mb-3">
              <Clock size={20} className="animate-pulse" />
              O desconto do Acesso Premium expira em:
            </p>
            <div className="flex justify-center gap-2 md:gap-4 font-mono text-xl md:text-3xl font-bold">
              <div className="flex flex-col"><span className="bg-brand-bg border border-brand-border px-3 py-2 rounded shadow">{formatNumber(timeLeft.hours)}</span><span className="text-[10px] mt-1 font-sans text-brand-text">HORAS</span></div>
              <span className="py-2 text-brand-text">:</span>
              <div className="flex flex-col"><span className="bg-brand-bg border border-brand-border px-3 py-2 rounded shadow">{formatNumber(timeLeft.minutes)}</span><span className="text-[10px] mt-1 font-sans text-brand-text">MINUTOS</span></div>
              <span className="py-2 text-brand-text">:</span>
              <div className="flex flex-col"><span className="bg-brand-bg border border-brand-border px-3 py-2 rounded shadow text-white">{formatNumber(timeLeft.seconds)}</span><span className="text-[10px] mt-1 font-sans text-brand-text">SEGUNDOS</span></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          {/* BASIC PLAN */}
          <div className="bg-brand-card border text-center border-brand-border rounded-2xl p-8 hover:border-brand-gold/30 transition-colors relative">
            <h3 className="text-xl font-bold text-brand-text mb-4">Plano Básico</h3>
            <div className="text-4xl font-extrabold text-white mb-6">R$ 10,00</div>
            <ul className="space-y-4 mb-8 text-left text-brand-text">
              <li className="flex items-start gap-3"><Check size={20} className="text-brand-gold shrink-0 mt-0.5" /> <span>+1500 Estampas Cristãs</span></li>
              <li className="flex items-start gap-3 opacity-50"><Check size={20} className="text-brand-text shrink-0 mt-0.5" /> <span>Sem atualizações de artes</span></li>
              <li className="flex items-start gap-3 opacity-50"><Check size={20} className="text-brand-text shrink-0 mt-0.5" /> <span>Sem bônus inclusos</span></li>
            </ul>
            <button 
              onClick={() => setIsUpsellOpen(true)}
              className="w-full py-3.5 rounded-xl border-2 border-brand-border text-brand-text font-bold hover:bg-brand-border transition-colors block text-center"
            >
              Adquirir Plano Básico
            </button>
          </div>

          {/* PREMIUM PLAN */}
          <div className="bg-brand-card text-white border-2 border-brand-gold rounded-3xl p-8 shadow-[0_0_30px_rgba(212,175,55,0.15)] relative transform md:-translate-y-4 flex flex-col">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-brand-bg text-sm font-black px-6 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-lg shadow-brand-gold/20 whitespace-nowrap">
              <Zap size={16} fill="currentColor" /> MAIS POPULAR
            </div>
            
            <h3 className="text-2xl font-bold text-white text-center mb-6 mt-2">Acesso Premium Completo</h3>
            <div className="text-center mb-8">
              <p className="text-brand-text/60 text-xs mb-1 uppercase tracking-widest font-semibold flex items-center justify-center gap-1">DE <span className="line-through text-brand-price-old">R$ 129,00</span> POR</p>
              <div className="text-6xl font-black text-white mb-2">R$ 19,90</div>
              <p className="text-brand-gold font-bold mb-3 text-sm">pagamento único e vitalício</p>
              <p className="text-brand-gold font-bold mb-1">Economize R$ 109,10</p>
              <p className="text-sm text-brand-text">R$ 161,00 em bônus inclusos GRÁTIS</p>
            </div>

            <ul className="space-y-5 mb-8 font-medium text-white max-w-xs mx-auto w-full">
              <li className="flex items-center gap-4">
                <div className="bg-brand-gold/20 p-1 rounded-full text-brand-gold shrink-0 border border-brand-gold/30">
                  <Check size={16} />
                </div> 
                <span className="text-[15px] font-bold">+1500 Estampas Cristãs</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-brand-gold/20 p-1 rounded-full text-brand-gold shrink-0 border border-brand-gold/30">
                  <Check size={16} />
                </div> 
                <span className="text-[15px] font-bold text-left leading-tight">Artes Exclusivas e Alta Resolução</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-brand-gold/20 p-1 rounded-full text-brand-gold shrink-0 border border-brand-gold/30">
                  <Check size={16} />
                </div> 
                <span className="text-[15px] font-bold">Atualizações de Artes Novas</span>
              </li>
            </ul>

            <div className="bg-brand-gold/5 border border-brand-gold/20 rounded-xl p-5 mb-8 text-center mt-auto shadow-sm">
               <p className="text-brand-gold font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-2"><Gift size={16} /> PACK BÔNUS INCLUSO</p>
               <ul className="space-y-3 text-white font-bold text-sm">
                 <li>Pack de Fontes Cristãs Selecionadas</li>
                 <li>Planilha de Custos e Precificação</li>
                 <li>Calendário estratégico de Datas Cristãs</li>
               </ul>
            </div>

            <motion.a 
              href="https://ggcheckout.app/checkout/v5/DJ04PI0Yl3qP4sRLwSLx"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-gradient-to-r from-brand-gold-mid via-brand-gold to-brand-gold-light text-brand-bg py-4 rounded-xl font-black text-lg shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2 transition-colors relative overflow-hidden group text-center"
            >
              <span className="relative z-10 w-full text-center">Quero Meu Acesso Premium Agora</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-20 bg-brand-card border-y border-brand-border">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row gap-8 md:gap-12 items-center text-center md:text-left">
          <img 
            src="https://i.postimg.cc/59Sw-5ZxJ/Selo-de-Garantia-de-30-Dias-PNG-Transparente-Sem-Fundo.png" 
            alt="Selo de Garantia de 30 Dias" 
            className="w-48 h-48 md:w-56 md:h-56 object-contain shrink-0 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            loading="lazy"
            decoding="async"
          />
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Garantia Total de 30 Dias
            </h2>
            <p className="text-xl font-medium text-brand-gold mb-4">
              Sua compra é 100% segura e sem risco.
            </p>
            <p className="text-brand-text leading-relaxed mb-4">
              Eu acredito tanto no valor desse material que te ofereço uma garantia completa. Se por qualquer motivo você não ficar satisfeito com o que receber, basta entrar em contato em até 30 dias após a compra e devolvemos 100% do seu dinheiro.
            </p>
            <p className="text-white font-bold text-lg mb-8">
              Sem perguntas. Sem burocracia. Sem enrolação.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('pricing');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full md:w-auto px-8 bg-gradient-to-r from-brand-gold-mid via-brand-gold to-brand-gold-light text-brand-bg py-4 rounded-xl font-black text-lg shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2 transition-colors relative overflow-hidden group mx-auto md:mx-0"
            >
              <span className="relative z-10">Comprar Agora com Garantia de 30 Dias</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </motion.button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-brand-bg relative">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Dúvidas Frequentes</h2>
          
          <div className="space-y-4">
            <FaqItem 
              question="Como acesso o material depois da compra?"
              answer="O acesso é liberado na hora! Você receberá um e-mail com o link para acessar e baixar todas as artes imediatamente após a confirmação do pagamento, na nossa plataforma de membros exclusiva."
              isOpen={openFaq === 0}
              onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
            />
            <FaqItem 
              question="As artes vêm em alta resolução?"
              answer="Sim! Todas as imagens foram criadas e exportadas em altíssima resolução (300dpi), prontas para você usar em técnicas como sublimação, DTF, serigrafia e DTG sem perder qualidade."
              isOpen={openFaq === 1}
              onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
            />
            <FaqItem 
              question="Posso vender camisetas usando essas estampas?"
              answer="Com certeza. O pacote Premium inclui a licença comercial. Isso significa que você pode e deve estampar produtos físicos (camisetas, canecas, quadros) e vendê-los livremente. A única restrição é não revender as artes digitais como se fossem suas."
              isOpen={openFaq === 2}
              onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
            />
            <FaqItem 
              question="As artes são realmente exclusivas?"
              answer="Sim. O nosso estúdio desenvolve essas artes internamente acompanhando o mercado cristão, então você não está comprando um 'pacotão' sem critério da internet, mas sim uma curadoria profissional e pensada para conversão."
              isOpen={openFaq === 3}
              onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gold/10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Não Deixe Essa Oportunidade Passar
          </h2>
          
          <div className="space-y-4 text-lg md:text-xl text-brand-text mb-12 max-w-2xl mx-auto">
            <p>Você chegou até aqui porque quer transformar seu negócio de verdade. Agora é a hora de agir.</p>
            <p>Com <strong className="text-white font-bold">mais de +1500 estampas cristãs exclusivas</strong>, 3 bônus profissionais e <strong className="text-brand-gold font-bold">garantia total de 30 dias</strong>, você não tem nada a perder — só a ganhar.</p>
            <p>Centenas de empreendedores já estão lucrando com esse material. O próximo pode ser você.</p>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('pricing');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full md:w-auto px-12 bg-gradient-to-r from-brand-gold-mid via-brand-gold to-brand-gold-light text-brand-bg py-5 rounded-xl font-black text-xl shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2 transition-colors relative overflow-hidden group mx-auto"
          >
            <span className="relative z-10 w-full text-center">Quero Meu Acesso Premium Agora</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </motion.button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-footer text-brand-text py-8 text-center text-sm border-t border-brand-border">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
          <p className="mb-4">© 2026 Estampas Cristãs Premium — Todos os direitos reservados.</p>
          <div className="flex gap-4 text-xs opacity-60">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </footer>

      {/* UPSELL MODAL */}
      <AnimatePresence>
        {isUpsellOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsUpsellOpen(false)}
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md bg-[#0A0A0A] border-[3px] border-brand-gold rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.2)] flex flex-col"
            >
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-gold/10 rounded-full blur-[80px] pointer-events-none"></div>

              {/* Header Banner */}
              <div className="bg-gradient-to-r from-brand-gold-mid via-brand-gold to-brand-gold-light py-3 px-4 text-center z-10 relative shadow-md">
                <p className="text-black font-extrabold text-sm md:text-base uppercase tracking-widest flex items-center justify-center gap-2">
                  <Zap size={18} fill="currentColor" /> 
                  Espera! Oferta Especial
                </p>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col items-center z-10 relative text-center">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-6 leading-tight">
                  Por apenas <br />
                  <span className="text-3xl md:text-4xl text-brand-gold font-black inline-block mt-2 mb-2 scale-110 drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]">R$ 5,00</span><br />
                  a mais leve o Plano Premium!
                </h2>

                <div className="bg-black/50 border border-brand-gold/20 rounded-xl p-5 w-full mb-8">
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center gap-3 text-white font-medium">
                      <div className="bg-brand-gold/20 p-1 rounded-full text-brand-gold shrink-0 border border-brand-gold/30">
                        <Check size={16} strokeWidth={3} />
                      </div>
                      3 Bônus Exclusivos
                    </li>
                    <li className="flex items-center gap-3 text-white font-medium">
                      <div className="bg-brand-gold/20 p-1 rounded-full text-brand-gold shrink-0 border border-brand-gold/30">
                        <Check size={16} strokeWidth={3} />
                      </div>
                      Atualizações Semanais
                    </li>
                    <li className="flex items-center gap-3 text-white font-medium">
                      <div className="bg-brand-gold/20 p-1 rounded-full text-brand-gold shrink-0 border border-brand-gold/30">
                        <Check size={16} strokeWidth={3} />
                      </div>
                      Alta Resolução
                    </li>
                    <li className="flex items-center gap-3 text-white font-medium">
                      <div className="bg-brand-gold/20 p-1 rounded-full text-brand-gold shrink-0 border border-brand-gold/30">
                        <Check size={16} strokeWidth={3} />
                      </div>
                      Acesso Vitalício
                    </li>
                  </ul>
                </div>

                <div className="w-full space-y-3">
                  <a 
                    href="https://ggcheckout.app/checkout/v5/s6i0mdaBmGClpXRvKizZ"
                    className="w-full px-4 py-4 rounded-xl flex items-center justify-center font-black text-black text-lg bg-gradient-to-r from-brand-gold-mid via-brand-gold to-brand-gold-light hover:brightness-110 shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Sim! Quero o Premium por R$ 15,00
                  </a>
                  <a 
                    href="https://ggcheckout.app/checkout/v5/sHyCMGN1V6cqTTwMjW3c"
                    className="w-full px-4 py-3 rounded-lg flex items-center justify-center font-medium text-brand-text/50 text-xs md:text-sm bg-transparent hover:bg-white/5 transition-colors"
                  >
                    Não obrigado, quero o básico
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

// Sub-components

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-[#111111] p-5 md:p-6 rounded-[2rem] flex items-start gap-4 hover:border-brand-gold transition-colors border border-brand-gold/40 shadow-sm hover:shadow-[0_4px_30px_rgba(212,175,55,0.15)]">
      <div className="w-14 h-14 bg-brand-gold text-[#0a0a0a] shadow-[0_4px_15px_rgba(212,175,55,0.3)] rounded-[1.1rem] flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="text-left pt-1">
        <h3 className="text-lg md:text-xl font-bold text-white mb-1.5 leading-tight tracking-tight">{title}</h3>
        <p className="text-brand-gold/90 leading-relaxed text-sm">{desc}</p>
      </div>
    </div>
  );
}

function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {testimonialImages.map((src, index) => (
            <div 
              key={`testimonial-${index}`} 
              className="flex-[0_0_100%] md:flex-[0_0_33.333333%] pl-4 min-w-0"
            >
              <img 
                src={src} 
                alt={`Depoimento ${index + 1}`} 
                className="w-full rounded-2xl object-cover shadow-lg border border-brand-border"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons Desktop/Mobile */}
      <button 
        onClick={scrollPrev}
        className="absolute top-1/2 -left-3 md:-left-12 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-brand-gold hover:bg-brand-gold-light text-brand-bg shadow-lg rounded-full flex items-center justify-center transition-colors z-10"
        aria-label="Anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={scrollNext}
        className="absolute top-1/2 -right-3 md:-right-12 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-brand-gold hover:bg-brand-gold-light text-brand-bg shadow-lg rounded-full flex items-center justify-center transition-colors z-10"
        aria-label="Próximo"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

function BonusCard({ num, img, title, desc, value }: { num: string, img?: string, title: string, desc: string, value: string }) {
  return (
    <div className="bg-brand-card p-8 rounded-2xl shadow-lg border border-brand-gold/20 relative pt-12 text-center hover:border-brand-gold/40 transition-colors flex flex-col h-full">
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-bg w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]">
        {num}
      </div>
      {img && (
        <div className="mb-6 flex justify-center mt-2">
          <img src={img} alt={title} className="w-full h-auto object-cover rounded-xl border border-brand-border" loading="lazy" decoding="async" />
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-brand-text text-sm mb-6 flex-grow">{desc}</p>
      <div className="mt-auto border-t border-brand-border pt-4">
        <p className="text-brand-price-old line-through text-sm font-medium">R$ {value}</p>
        <p className="text-brand-gold-light font-bold uppercase text-sm tracking-widest mt-1"><Check size={16} className="inline mr-1 -mt-0.5" /> INCLUÍDO GRÁTIS</p>
      </div>
    </div>
  );
}

function FaqItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="bg-brand-card border text-left border-brand-border rounded-xl overflow-hidden shadow-sm">
      <button 
        onClick={onClick}
        className="w-full px-6 py-5 flex justify-between items-center bg-brand-card hover:bg-brand-bg focus:outline-none transition-colors"
      >
        <span className="font-bold text-white text-base pr-8">{question}</span>
        <ChevronDown 
          className={`shrink-0 text-brand-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          size={24} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5 text-brand-text leading-relaxed border-t border-brand-border pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
