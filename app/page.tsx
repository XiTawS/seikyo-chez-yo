"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useCMS } from "@/components/cms/CMSProvider";
import EditableText from "@/components/cms/EditableText";
import EditableImage from "@/components/cms/EditableImage";
import EditableButton from "@/components/cms/EditableButton";
import LightboxProvider, { useLightbox } from "@/components/Lightbox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock, Pen, UtensilsCrossed, Wine, Users, Truck, Star, Facebook, Instagram } from "lucide-react";

function Fade({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════
   HERO — Full-screen avec bande diagonale
   ═══════════════════════════════════════════════ */
function Hero() {
  const ref = useRef<HTMLInputElement>(null);
  const { isAdmin } = useCMS();

  return (
    <section className="relative h-[90vh] overflow-hidden">
      <EditableImage contentKey="home.hero.bg"
        defaultSrc="https://res.cloudinary.com/dxcudyuno/image/upload/v1772839933/chez-yo/terrasse-plat.jpg"
        alt="Chez Yo !" fill sizes="100vw" priority
        className="object-cover" hideButton inputRef={ref} />
      {isAdmin && (
        <button onClick={() => ref.current?.click()}
          className="absolute top-20 right-6 z-[50] bg-white/80 p-2 rounded-full">
          <Pen className="w-4 h-4" />
        </button>
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-dark)] via-[var(--color-bg-dark)]/70 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-14">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
            <div className="inline-block bg-[var(--color-red)] px-3 py-1 mb-4">
              <EditableText contentKey="home.hero.badge" defaultValue="Restaurant convivial" tag="span"
                className="text-white text-xs tracking-[0.2em] uppercase" />
            </div>
            <EditableText contentKey="home.hero.title" defaultValue="Chez Yo !" tag="h1"
              className="font-display text-7xl md:text-9xl text-white leading-[0.85] mb-3" />
            <EditableText contentKey="home.hero.subtitle" defaultValue="Le rendez-vous des bons copains" tag="p"
              className="font-display italic text-xl md:text-2xl text-[var(--color-gold)] mb-8" />
            <div className="flex flex-wrap gap-3">
              <EditableButton contentKeyText="home.hero.cta1.text" contentKeyUrl="home.hero.cta1.url"
                defaultText="Réserver une table" defaultUrl="tel:0475474468"
                className="bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-[var(--color-bg-dark)] px-8 py-3.5 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300" />
              <EditableButton contentKeyText="home.hero.cta2.text" contentKeyUrl="home.hero.cta2.url"
                defaultText="La carte" defaultUrl="#carte"
                className="border border-white/30 text-white hover:bg-white/10 px-8 py-3.5 text-xs tracking-[0.2em] uppercase transition-all duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   MARQUEE — Défilé ambiance
   ═══════════════════════════════════════════════ */
function Marquee() {
  const items = ["Cuisine maison", "Produits frais", "Ambiance conviviale", "Terrasse", "Bar & cocktails", "Fait maison"];
  return (
    <div className="bg-[var(--color-red)] py-3 overflow-hidden">
      <motion.div animate={{ x: [0, -1200] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex gap-8 whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-white/80 text-xs tracking-[0.3em] uppercase flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   L'ESPRIT — Qui on est
   ═══════════════════════════════════════════════ */
function Esprit() {
  return (
    <section id="esprit" className="py-16 md:py-20 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <Fade className="md:col-span-5">
            <EditableImage contentKey="home.esprit.image"
              defaultSrc="https://res.cloudinary.com/dxcudyuno/image/upload/v1772839939/chez-yo/cuisine-planche.jpg"
              alt="Ambiance Chez Yo" width={800} height={1000}
              className="w-full aspect-[4/5] object-cover" />
          </Fade>
          <Fade delay={0.1} className="md:col-span-7">
            <EditableText contentKey="home.esprit.label" defaultValue="L'esprit" tag="p"
              className="text-[var(--color-red)] text-xs tracking-[0.4em] uppercase mb-3" />
            <EditableText contentKey="home.esprit.title" defaultValue="Bons plats, bons copains" tag="h2"
              className="font-display text-3xl md:text-5xl text-[var(--color-text)] leading-[1.1] mb-6" />
            <EditableText contentKey="home.esprit.text"
              defaultValue="Chez Yo, c'est avant tout un lieu de vie. Un endroit où l'on vient manger une cuisine maison et généreuse, préparée avec des produits frais et de saison. Ici, pas de chichis : des plats qui ont du goût, une ambiance chaleureuse et un service qui vous met à l'aise dès la porte franchie."
              tag="p" className="text-[var(--color-text-muted)] leading-relaxed mb-6" />
            <EditableText contentKey="home.esprit.quote"
              defaultValue="La bonne cuisine, c'est quand les choses ont le goût de ce qu'elles sont."
              tag="blockquote"
              className="border-l-2 border-[var(--color-gold)] pl-4 text-[var(--color-text)] italic font-display text-lg" />
          </Fade>
        </div>

        {/* Services */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          {[
            { icon: UtensilsCrossed, label: "Cuisine maison", desc: "Produits frais et de saison" },
            { icon: Wine, label: "Bar & vins", desc: "Cocktails, bières, vins" },
            { icon: Users, label: "Terrasse", desc: "Profitez des beaux jours" },
            { icon: Truck, label: "À emporter", desc: "Livraison disponible" },
          ].map((s, i) => (
            <Fade key={s.label} delay={i * 0.08}>
              <div className="bg-[var(--color-bg-warm)] p-5 text-center">
                <s.icon className="w-5 h-5 text-[var(--color-red)] mx-auto mb-3" />
                <p className="text-[var(--color-text)] text-sm font-medium">{s.label}</p>
                <p className="text-[var(--color-text-muted)] text-xs mt-1">{s.desc}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   IMAGE BREAK
   ═══════════════════════════════════════════════ */
function ImageBreak() {
  const ref = useRef<HTMLInputElement>(null);
  const { isAdmin } = useCMS();
  return (
    <section className="relative h-[35vh] overflow-hidden">
      <EditableImage contentKey="home.break.image"
        defaultSrc="https://res.cloudinary.com/dxcudyuno/image/upload/v1772839935/chez-yo/plats-maison.jpg"
        alt="Ambiance" fill sizes="100vw" className="object-cover" hideButton inputRef={ref} />
      {isAdmin && (
        <button onClick={() => ref.current?.click()}
          className="absolute top-6 right-6 z-[50] bg-white/80 p-2 rounded-full">
          <Pen className="w-4 h-4" />
        </button>
      )}
      <div className="absolute inset-0 bg-[var(--color-bg-dark)]/30" />
    </section>
  );
}

/* ═══════════════════════════════════════════════
   LA CARTE — Suggestions du moment
   ═══════════════════════════════════════════════ */
function Carte() {
  const [active, setActive] = useState(0);
  const categories = [
    {
      name: "Entrées & Planches",
      items: [
        { name: "Planche apéro", desc: "Charcuterie artisanale, fromages affinés, olives, grissini" },
        { name: "Salade César", desc: "Poulet grillé, parmesan, croûtons maison, sauce César" },
        { name: "Velouté du jour", desc: "Soupe de saison, crème fraîche, pain toasté" },
        { name: "Tartare de saumon", desc: "Saumon frais, avocat, sésame, vinaigrette agrumes" },
      ]
    },
    {
      name: "Plats",
      items: [
        { name: "Burger maison Yo", desc: "Steak haché frais, cheddar fondu, oignons caramélisés, sauce secrète, frites" },
        { name: "Entrecôte grillée", desc: "Pièce de boeuf maturée, frites maison, salade verte, beurre maître d'hôtel" },
        { name: "Poulet rôti fermier", desc: "Cuisse de poulet fermier, gratin dauphinois, jus de rôti" },
        { name: "Pavé de saumon", desc: "Saumon rôti, écrasé de pommes de terre, légumes de saison, beurre citronné" },
        { name: "Plat du jour", desc: "Cuisine du marché, renouvelée chaque jour selon les arrivages frais" },
      ]
    },
    {
      name: "Desserts",
      items: [
        { name: "Moelleux au chocolat", desc: "Coeur coulant, glace vanille, éclats de noisettes" },
        { name: "Crème brûlée", desc: "Crème vanille bourbon, cassonade caramélisée" },
        { name: "Tarte du moment", desc: "Pâte sablée maison, fruits de saison, chantilly" },
        { name: "Café gourmand", desc: "Expresso et trio de mignardises du chef" },
      ]
    },
    {
      name: "Boissons",
      items: [
        { name: "Vins de la Drôme", desc: "Sélection de rouges, blancs et rosés locaux" },
        { name: "Bières artisanales", desc: "Pression et bouteilles, brasseries régionales" },
        { name: "Cocktails maison", desc: "Créations du barman, classiques revisités" },
        { name: "Softs & cafés", desc: "Jus frais, sodas, thés, cafés torréfiés" },
      ]
    },
  ];

  return (
    <section id="carte" className="py-16 md:py-20 bg-[var(--color-bg-dark)]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <Fade className="text-center mb-10">
          <EditableText contentKey="home.carte.label" defaultValue="La carte" tag="p"
            className="text-[var(--color-gold)] text-xs tracking-[0.4em] uppercase mb-2" />
          <EditableText contentKey="home.carte.title" defaultValue="Nos suggestions" tag="h2"
            className="font-display text-3xl md:text-5xl text-white" />
        </Fade>

        {/* Onglets catégories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat, i) => (
            <button key={cat.name} onClick={() => setActive(i)}
              className={`px-5 py-2 text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                active === i
                  ? "bg-[var(--color-gold)] text-[var(--color-bg-dark)] font-medium"
                  : "text-white/40 hover:text-white/70 border border-white/10"
              }`}>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Plats de la catégorie active */}
        <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-x-12 gap-y-5 max-w-4xl mx-auto">
          {categories[active].items.map((item) => (
            <div key={item.name} className="border-b border-white/5 pb-4">
              <h3 className="text-white font-medium text-base">{item.name}</h3>
              <p className="text-white/30 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        <Fade className="text-center mt-10">
          <EditableText contentKey="home.carte.note"
            defaultValue="Carte renouvelée régulièrement selon les produits du marché et l'inspiration du chef."
            tag="p" className="text-white/30 text-xs italic" />
        </Fade>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   GALERIE
   ═══════════════════════════════════════════════ */
function Gallery() {
  const { openLightbox } = useLightbox();
  const photos = [
    { key: "g1", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772839937/chez-yo/planche-huitres.jpg", title: "Planche & huîtres" },
    { key: "g2", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772839938/chez-yo/burger-salade.jpg", title: "Burger maison" },
    { key: "g3", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772839933/chez-yo/desserts-vin.jpg", title: "Desserts & vins" },
    { key: "g4", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772839940/chez-yo/galerie1.jpg", title: "L'ambiance" },
    { key: "g5", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772839941/chez-yo/galerie2.jpg", title: "Entre copains" },
    { key: "g6", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772839935/chez-yo/plats-maison.jpg", title: "Plats du jour" },
  ];

  return (
    <section id="galerie" className="py-16 md:py-20 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Fade className="text-center mb-10">
          <EditableText contentKey="home.gallery.label" defaultValue="Galerie" tag="p"
            className="text-[var(--color-red)] text-xs tracking-[0.4em] uppercase mb-2" />
          <EditableText contentKey="home.gallery.title" defaultValue="L'ambiance Chez Yo" tag="h2"
            className="font-display text-3xl md:text-5xl text-[var(--color-text)]" />
        </Fade>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5">
          {photos.map((p, i) => (
            <Fade key={p.key} delay={i * 0.05}>
              <div className="relative overflow-hidden cursor-pointer group aspect-square" onClick={() => openLightbox(i)}>
                <EditableImage contentKey={`home.gallery.${p.key}`} defaultSrc={p.src} alt={p.title}
                  fill sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute bottom-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-lg">
                  {p.title}
                </span>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   AVIS
   ═══════════════════════════════════════════════ */
function Avis() {
  const reviews = [
    { name: "Marie L.", text: "Cuisine traditionnelle et très bonne. Un cadre agréable et un service très appréciable et attentif.", rating: 5 },
    { name: "Thomas D.", text: "Super ambiance, on se sent comme chez des amis. Les plats sont copieux et faits maison. Top !", rating: 5 },
    { name: "Sophie M.", text: "Excellent rapport qualité-prix. Le burger maison est une tuerie. On reviendra c'est sûr !", rating: 5 },
  ];

  return (
    <section className="py-16 md:py-20 bg-[var(--color-bg-warm)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Fade className="text-center mb-10">
          <EditableText contentKey="home.avis.label" defaultValue="Ce qu'ils en disent" tag="p"
            className="text-[var(--color-red)] text-xs tracking-[0.4em] uppercase mb-2" />
          <div className="flex items-center justify-center gap-2 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />
            ))}
          </div>
          <p className="text-[var(--color-text-muted)] text-xs">4.5/5 sur Tripadvisor — 13 avis</p>
        </Fade>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <Fade key={r.name} delay={i * 0.1}>
              <div className="bg-white p-6">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                  ))}
                </div>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-4 italic">"{r.text}"</p>
                <p className="text-[var(--color-text)] text-sm font-medium">{r.name}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   CONTACT + HORAIRES
   ═══════════════════════════════════════════════ */
function Contact() {
  const horaires = [
    { jour: "Lundi", h: "Fermé" },
    { jour: "Mardi", h: "12h–14h / 19h–22h" },
    { jour: "Mercredi", h: "12h–14h / 19h–22h" },
    { jour: "Jeudi", h: "12h–14h / 19h–22h" },
    { jour: "Vendredi", h: "12h–14h / 19h–22h30" },
    { jour: "Samedi", h: "12h–14h / 19h–22h30" },
    { jour: "Dimanche", h: "12h–14h" },
  ];

  return (
    <section id="contact" className="py-16 md:py-20 bg-[var(--color-bg-dark)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10">
        <Fade>
          <EditableText contentKey="home.contact.label" defaultValue="Nous trouver" tag="p"
            className="text-[var(--color-gold)] text-xs tracking-[0.4em] uppercase mb-3" />
          <EditableText contentKey="home.contact.title" defaultValue="Venez nous voir !" tag="h2"
            className="font-display text-3xl md:text-4xl text-white mb-8" />

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
              <EditableText contentKey="home.contact.address" defaultValue="1425 Rue Louis Pasteur, 26300 Chatuzange-le-Goubet" tag="p" className="text-white/60 text-sm" />
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
              <EditableText contentKey="home.contact.phone" defaultValue="04 75 47 44 68" tag="p" className="text-white/60 text-sm" />
            </div>
          </div>

          <div className="flex gap-3 mb-8">
            <a href="https://www.facebook.com/ChezYoRestaurant/" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-[var(--color-gold)]/20 transition-colors">
              <Facebook className="w-4 h-4 text-white/60" />
            </a>
          </div>

          <iframe
            src="https://maps.google.com/maps?q=Chez+Yo+Chatuzange-le-Goubet&output=embed&z=16"
            className="w-full h-48 border-0 opacity-60" loading="lazy" />
        </Fade>

        <Fade delay={0.1}>
          <div className="bg-white/5 p-8">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="w-4 h-4 text-[var(--color-gold)]" />
              <p className="text-[var(--color-gold)] text-xs tracking-[0.3em] uppercase">Horaires</p>
            </div>
            <div className="space-y-3">
              {horaires.map((h) => (
                <div key={h.jour} className={`flex justify-between text-sm pb-2 border-b border-white/5 ${h.h === "Fermé" ? "opacity-40" : ""}`}>
                  <span className="text-white/50">{h.jour}</span>
                  <span className="text-white/80">{h.h}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <EditableButton contentKeyText="home.contact.cta.text" contentKeyUrl="home.contact.cta.url"
                defaultText="Appeler pour réserver" defaultUrl="tel:0475474468"
                className="w-full bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-[var(--color-bg-dark)] px-6 py-3 text-xs tracking-[0.2em] uppercase font-medium text-center transition-all duration-300" />
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ─── MAIN ─── */
export default function Home() {
  const { loaded } = useCMS();

  if (!loaded) {
    return (
      <div className="fixed inset-0 bg-[var(--color-bg-dark)] z-[99999] flex items-center justify-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <img src="https://res.cloudinary.com/dxcudyuno/image/upload/v1772839931/chez-yo/logo.jpg" alt="Chez Yo !" className="w-20 h-20 rounded-full mx-auto mb-4" />
          <div className="w-8 h-8 border border-[var(--color-gold)] border-t-transparent rounded-full animate-spin mx-auto" />
        </motion.div>
      </div>
    );
  }

  return (
    <LightboxProvider>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Marquee />
        <Esprit />
        <ImageBreak />
        <Carte />
        <Gallery />
        <Avis />
        <Contact />
        <Footer />
      </main>
    </LightboxProvider>
  );
}