import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Sparkles,
  Smile,
  Syringe,
  Wand2,
  Sun,
  Stethoscope,
  Heart,
  Instagram,
  MessageCircle,
  MapPin,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import portraitAsset from "@/assets/dra-ianca-1.jpg.asset.json";
import fullAsset from "@/assets/dra-ianca-3.jpg.asset.json";

import resLips1 from "@/assets/result-new-lips-1.jpg.asset.json";
import resLips2 from "@/assets/result-new-lips-2.jpg.asset.json";
import resSmile from "@/assets/result-new-smile.jpg.asset.json";
import resProfile from "@/assets/result-new-profile.jpg.asset.json";
import resHarm from "@/assets/result-new-harmonization.jpg.asset.json";
import result01 from "@/assets/result01.jpeg.asset.json";
import result02 from "@/assets/result02.jpeg.asset.json";
import result03 from "@/assets/result03.jpeg.asset.json";
import result04 from "@/assets/result04.jpeg.asset.json";
import result05 from "@/assets/result05.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Ianca Dias | Dentista & Harmonização Orofacial — Porto Velho" },
      {
        name: "description",
        content:
          "Lábios naturais, botox, perfiloplastia, clareamento e harmonização orofacial em Porto Velho, RO. Dra. Ianca Dias — CRO-RO 5390.",
      },
    ],
  }),
  component: LandingPage,
});

const WHATSAPP = "https://www.contate.me/5569999556383";
const INSTAGRAM = "https://instagram.com/draiancadias";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};


function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-charcoal font-sans antialiased overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Gallery />
      <Testimonials />
      <FinalCTA />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

/* ─────────────────────────  NAV  ───────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-blush-soft/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <a href="#top" className="font-display italic text-rosewood text-xl tracking-tight">
          Dra. Ianca Dias
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm text-warm-gray">
          <a href="#sobre" className="hover:text-rosewood transition-colors">Sobre</a>
          <a href="#tratamentos" className="hover:text-rosewood transition-colors">Tratamentos</a>
          <a href="#galeria" className="hover:text-rosewood transition-colors">Resultados</a>
          <a href="#depoimentos" className="hover:text-rosewood transition-colors">Depoimentos</a>
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          aria-label="Agendar consulta no WhatsApp"
          className="hidden sm:inline-flex items-center gap-2 bg-rosewood text-cream px-5 py-2.5 rounded-full text-sm hover:bg-rosewood-soft transition-all hover:scale-[1.02]"
        >
          Agendar <ArrowRight size={14} />
        </a>
      </div>
    </header>
  );
}

/* ─────────────────────────  HERO  ───────────────────────── */
function Hero() {
  const { scrollY } = useScroll();
  const blobY = useTransform(scrollY, [0, 600], [0, 120]);
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* organic blob */}
      <motion.div
        style={{ y: blobY }}
        className="blob absolute -right-32 -top-20 lg:right-[-10rem] lg:top-[-6rem] w-[34rem] h-[34rem] lg:w-[44rem] lg:h-[44rem] bg-gradient-to-br from-blush-soft via-champagne to-blush opacity-80 -z-10"
      />
      <motion.div
        style={{ y: blobY }}
        className="blob absolute -left-40 bottom-[-10rem] w-[24rem] h-[24rem] bg-gradient-to-br from-champagne to-blush-soft opacity-40 -z-10"
      />

      {/* decorative lip curve */}
      <svg
        className="absolute top-1/3 right-10 hidden lg:block opacity-40"
        width="180" height="80" viewBox="0 0 180 80" fill="none"
      >
        <path d="M5 40 Q 45 5, 90 40 Q 135 75, 175 40" stroke="#7D4E57" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center relative">
        <div className="lg:col-span-7 max-w-2xl">
          <motion.div
            initial="hidden" animate="visible" custom={0} variants={fadeUp}
            className="label mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-rose-gold inline-block" />
            Porto Velho · RO
          </motion.div>

          <motion.h1
            initial="hidden" animate="visible" custom={1} variants={fadeUp}
            className="font-display text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[5.2rem] lg:leading-[1.02] text-charcoal"
          >
            Sorrisos que <em className="text-rosewood not-italic-fix italic">encantam</em>.
            <br />
            Beleza que <em className="text-rosewood italic">transforma</em>.
          </motion.h1>

          <motion.p
            initial="hidden" animate="visible" custom={2} variants={fadeUp}
            className="mt-7 text-warm-gray text-lg lg:text-xl font-light max-w-xl leading-relaxed"
          >
            Harmonização Orofacial & Odontologia Estética com técnica que respeita a sua beleza única.
          </motion.p>

          <motion.div
            initial="hidden" animate="visible" custom={3} variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href={WHATSAPP}
              target="_blank" rel="noreferrer"
              aria-label="Agendar consulta"
              className="inline-flex items-center justify-center gap-2 bg-rosewood text-cream px-8 py-4 rounded-full text-sm tracking-wide hover:bg-rosewood-soft hover:scale-[1.02] transition-all shadow-[0_12px_30px_-12px_rgba(125,78,87,0.6)]"
            >
              Agendar Consulta <ArrowRight size={16} />
            </a>
            <a
              href="#tratamentos"
              className="inline-flex items-center justify-center gap-2 border border-rosewood/40 text-rosewood px-8 py-4 rounded-full text-sm tracking-wide hover:bg-rosewood/5 transition-all"
            >
              Ver Tratamentos
            </a>
          </motion.div>

          <motion.div
            initial="hidden" animate="visible" custom={4} variants={fadeUp}
            className="mt-12 flex items-center gap-6 text-xs text-warm-gray"
          >
            <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-rosewood" /> CRO-RO 5390</span>
            <span className="h-3 w-px bg-blush" />
            <span className="flex items-center gap-2"><Heart size={14} className="text-rosewood" /> Resultados naturais</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative mx-auto w-[18rem] sm:w-[22rem] lg:w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_30px_80px_-30px_rgba(125,78,87,0.45)]">
            <img
              src={portraitAsset.url}
              alt="Dra. Ianca Dias — Dentista e Harmonização Orofacial"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-background/90 backdrop-blur-md border border-blush-soft rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-rosewood/10 flex items-center justify-center text-rosewood">
              <Sparkles size={18} />
            </div>
            <div>
              <p className="text-xs label !text-rosewood !tracking-[0.15em]">Especialista</p>
              <p className="text-sm text-charcoal">Harmonização Orofacial</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────  ABOUT  ───────────────────────── */
function About() {
  return (
    <section id="sobre" className="relative py-28 bg-[color:var(--cream)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]">
            <img src={fullAsset.url} alt="Dra. Ianca Dias" className="w-full h-full object-cover" />
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7">
          <p className="label mb-5">Sobre a Dra. Ianca</p>
          <h2 className="font-display text-4xl lg:text-5xl leading-tight text-charcoal max-w-xl">
            Beleza natural começa por dentro <em className="italic text-rosewood">— e pelo sorriso</em>.
          </h2>
          <div className="divider-gold my-8 w-24" />
          <p className="text-warm-gray text-lg leading-relaxed max-w-xl">
            Cirurgiã-dentista e especialista em Harmonização Orofacial, a Dra. Ianca Dias acredita que cada
            sorriso carrega uma identidade própria. Seu trabalho é guiado por uma técnica delicada, ética e
            personalizada — entregando resultados que valorizam, e nunca descaracterizam.
          </p>
          <p className="text-warm-gray text-lg leading-relaxed max-w-xl mt-5">
            Atendimento em Porto Velho, RO, com escuta humanizada e protocolos clínicos rigorosos.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {["Dentista · CRO-RO 5390", "Harmonização Orofacial", "Lábios Naturais"].map((p) => (
              <span
                key={p}
                className="text-xs label !tracking-[0.18em] !text-rosewood border border-rosewood/30 rounded-full px-4 py-2"
              >
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────  SERVICES  ───────────────────────── */
const services = [
  { icon: Smile, name: "Lábios Naturais", desc: "Preenchimento sutil com resultado delicado, respeitando o formato natural." },
  { icon: Syringe, name: "Botox", desc: "Suavização de linhas de expressão com precisão, segurança e naturalidade." },
  { icon: Wand2, name: "Perfiloplastia", desc: "Redesenho do contorno do seu perfil em harmonia com a sua face." },
  { icon: Sun, name: "Clareamento Dental", desc: "Sorriso mais branco, luminoso e saudável — sem agredir o esmalte." },
  { icon: Sparkles, name: "Harmonização Orofacial", desc: "Equilíbrio entre o sorriso e os traços do rosto, em proporções únicas." },
  { icon: Stethoscope, name: "Clínica Geral", desc: "Saúde bucal completa, com avaliação personalizada e atendimento humanizado." },
];

function Services() {
  return (
    <section id="tratamentos" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-16">
          <p className="label mb-4">Tratamentos</p>
          <h2 className="font-display text-4xl lg:text-5xl leading-tight">
            Tratamentos pensados <em className="italic text-rosewood">para você</em>.
          </h2>
          <div className="divider-gold mt-6 w-20" />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.name} i={i}>
              <article className="group h-full bg-background border border-blush-soft/70 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1.5 hover:bg-[color:var(--champagne)]/40 hover:shadow-[0_20px_40px_-20px_rgba(125,78,87,0.3)]">
                <div className="w-12 h-12 rounded-2xl bg-rosewood/8 text-rosewood flex items-center justify-center mb-6 group-hover:bg-rosewood group-hover:text-cream transition-colors duration-500">
                  <s.icon size={20} strokeWidth={1.4} />
                </div>
                <h3 className="font-display text-2xl text-charcoal mb-3">{s.name}</h3>
                <p className="text-warm-gray text-[0.95rem] leading-relaxed">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  DIFFERENTIALS  ───────────────────────── */
const diffs = [
  { n: "01", title: "Resultados Naturais", desc: "Técnica que respeita sua beleza única — sem exageros, sem padrões." },
  { n: "02", title: "Atendimento Humanizado", desc: "Você é ouvida do início ao fim. Cada plano é pensado para você." },
  { n: "03", title: "Segurança & Precisão", desc: "Protocolo clínico rigoroso, materiais de excelência e ética como base." },
];

function Differentials() {
  return (
    <section className="py-28 bg-gradient-to-b from-[color:var(--champagne)]/50 via-[color:var(--blush-soft)]/40 to-[color:var(--champagne)]/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-16">
          <p className="label mb-4">Diferenciais</p>
          <h2 className="font-display text-4xl lg:text-5xl leading-tight">
            Por que escolher a <em className="italic text-rosewood">Dra. Ianca</em>.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10">
          {diffs.map((d, i) => (
            <Reveal key={d.n} i={i}>
              <div className="relative pt-12">
                <span className="absolute -top-2 -left-2 font-display text-[8rem] leading-none text-rosewood/10 select-none pointer-events-none">
                  {d.n}
                </span>
                <h3 className="font-display text-2xl text-charcoal mb-3 relative">{d.title}</h3>
                <p className="text-warm-gray leading-relaxed relative">{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  GALLERY  ───────────────────────── */
const gallery = [
  { src: resLips1.url, label: "Preenchimento Labial" },
  { src: resSmile.url, label: "Sorriso & Estética Dental" },
  { src: resProfile.url, label: "Perfiloplastia" },
  { src: resHarm.url, label: "Harmonização Orofacial" },
  { src: resLips2.url, label: "Lábios Naturais" },
  { src: result01.url, label: "Botox" },
  { src: result02.url, label: "Preenchmento Labial" },
  { src: result03.url, label: "Clareamento Dental" },
  { src: result04.url, label: "Preenchmento Labial" },
  { src: result05.url, label: "Clareamento Dental" },
];

function Gallery() {
  return (
    <section id="galeria" className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-14">
          <p className="label mb-4">Galeria · Antes & Depois</p>
          <h2 className="font-display text-4xl lg:text-5xl leading-tight">
            Transformações <em className="italic text-rosewood">reais</em>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {gallery.map((g, i) => (
            <Reveal key={g.label} i={i}>
              <figure className="group relative overflow-hidden rounded-3xl shadow-[0_20px_50px_-25px_rgba(0,0,0,0.3)] bg-[color:var(--cream)] border border-blush-soft/60">
                <img
                  src={g.src}
                  alt={g.label}
                  loading="lazy"
                  className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-[1200ms] ease-out"
                />
                <figcaption className="px-5 py-4 flex items-center gap-4">
                  <span className="font-display italic text-lg text-rosewood whitespace-nowrap">{g.label}</span>
                  <span className="h-px flex-1 bg-rose-gold/40" />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={INSTAGRAM}
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 text-rosewood hover:gap-3 transition-all"
          >
            <Instagram size={18} /> Acompanhe no Instagram — @draiancadias <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  TESTIMONIALS  ───────────────────────── */
const tests = [
  {
    quote: "Resultado discreto e natural — exatamente como eu queria. A Dra. Ianca entendeu cada detalhe do meu rosto.",
    name: "Marina",
    treat: "Lábios Naturais",
  },
  {
    quote: "Atendimento impecável, do acolhimento ao pós-procedimento. Saí me sentindo mais bonita e ainda mais eu.",
    name: "Patrícia",
    treat: "Harmonização Orofacial",
  },
  {
    quote: "Meu sorriso ficou luminoso e saudável. Recomendo de olhos fechados — confiança total.",
    name: "Camila",
    treat: "Clareamento Dental",
  },
];

function Testimonials() {
  return (
    <section id="depoimentos" className="py-28 bg-[color:var(--cream)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-14">
          <p className="label mb-4">Depoimentos</p>
          <h2 className="font-display text-4xl lg:text-5xl leading-tight">
            O que dizem nossas <em className="italic text-rosewood">pacientes</em>.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {tests.map((t, i) => (
            <Reveal key={t.name} i={i}>
              <article className="h-full bg-background border border-blush/40 rounded-3xl p-8 shadow-[0_10px_30px_-20px_rgba(125,78,87,0.3)]">
                <p className="font-display italic text-xl text-charcoal leading-snug">
                  “{t.quote}”
                </p>
                <div className="divider-gold my-6 w-12" />
                <p className="text-sm text-rosewood">{t.name}</p>
                <p className="text-xs text-warm-gray uppercase tracking-[0.18em] mt-1">{t.treat}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────  FINAL CTA  ───────────────────────── */
function FinalCTA() {
  return (
    <section className="relative py-28 overflow-hidden bg-rosewood text-cream">
      <div className="blob absolute -right-32 -bottom-40 w-[28rem] h-[28rem] bg-blush/30 -z-0" />
      <div className="blob absolute -left-32 -top-32 w-[22rem] h-[22rem] bg-champagne/20 -z-0" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <Reveal>
          <p className="label !text-blush-soft mb-5">Sua transformação começa aqui</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Pronta para <em className="italic">sua transformação?</em>
          </h2>
          <p className="mt-7 text-cream/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Agende sua avaliação e descubra o tratamento ideal para o seu sorriso e a sua beleza.
          </p>
          <a
            href={WHATSAPP}
            target="_blank" rel="noreferrer"
            aria-label="Falar com a Dra. Ianca no WhatsApp"
            className="inline-flex items-center gap-3 mt-10 bg-cream text-rosewood px-9 py-4 rounded-full text-sm tracking-wide hover:scale-[1.03] hover:bg-background transition-all shadow-[0_18px_40px_-15px_rgba(0,0,0,0.4)]"
          >
            <MessageCircle size={18} /> Falar com a Dra. Ianca
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────  FOOTER  ───────────────────────── */
function Footer() {
  return (
    <footer className="bg-background pt-20 pb-10">
      <div className="divider-gold max-w-7xl mx-auto" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-14 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-display italic text-2xl text-rosewood">Dra. Ianca Dias</p>
          <p className="text-warm-gray mt-2 text-sm">Dentista & Harmonização Orofacial</p>
          <p className="flex items-center gap-2 text-warm-gray mt-4 text-sm">
            <MapPin size={14} className="text-rosewood" /> Porto Velho · RO
          </p>
          <p className="label !text-warm-gray !tracking-[0.18em] mt-2">CRO-RO 5390</p>
        </div>

        <div>
          <p className="label mb-4">Navegação</p>
          <ul className="space-y-2 text-sm text-warm-gray">
            <li><a href="#sobre" className="hover:text-rosewood transition-colors">Sobre</a></li>
            <li><a href="#tratamentos" className="hover:text-rosewood transition-colors">Tratamentos</a></li>
            <li><a href="#galeria" className="hover:text-rosewood transition-colors">Resultados</a></li>
            <li><a href="#depoimentos" className="hover:text-rosewood transition-colors">Depoimentos</a></li>
          </ul>
        </div>

        <div>
          <p className="label mb-4">Contato</p>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-warm-gray hover:text-rosewood transition-colors">
            <Instagram size={14} /> @draiancadias
          </a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-warm-gray hover:text-rosewood transition-colors mt-2">
            <MessageCircle size={14} /> WhatsApp
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-14 pt-6 border-t border-blush-soft/60 text-xs text-warm-gray flex flex-col sm:flex-row gap-3 justify-between">
        <p>© {new Date().getFullYear()} Dra. Ianca Dias. Todos os direitos reservados.</p>
        <p className="italic">Procedimentos realizados exclusivamente por profissional habilitada.</p>
      </div>
    </footer>
  );
}

/* ─────────────────────────  WHATSAPP FAB  ───────────────────────── */
function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="pulse-soft fixed bottom-6 right-6 z-50 bg-rosewood text-cream w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
    >
      <MessageCircle size={24} />
    </a>
  );
}

/* ─────────────────────────  REVEAL HELPER  ───────────────────────── */
function Reveal({
  children,
  className = "",
  i = 0,
}: {
  children: React.ReactNode;
  className?: string;
  i?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      custom={i}
      className={className}
    >
      {children}
    </motion.div>
  );
}
