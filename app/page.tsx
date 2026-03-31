"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollMorphHero from "@/components/ui/scroll-morph-hero";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowUpRight } from "lucide-react";

// ─── Animation presets ────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: EASE },
} as const;

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerChild = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

// ─── Section Tag ─────────────────────────────────────────────────────────────
function SectionTag({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="font-mono text-[0.6rem] tracking-[0.28em] uppercase text-[#FE7F2D]">
        {label}
      </span>
      <span className="flex-none w-10 h-px bg-[#D5D1CB]" />
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    num: "01",
    title: "AI PRODUCT PHOTOGRAPHY",
    body: "One product. Fifteen rooms. Zero studio visits. Photorealistic furniture imagery from a single brief — delivered in 14 business days.",
    tag: "Photography",
  },
  {
    num: "02",
    title: "VIDEO & MOTION",
    body: "Campaign-ready video content. From concept to delivery in 7 business days. No crew. No location. No waiting.",
    tag: "Video",
  },
  {
    num: "03",
    title: "BRAND CREATIVE",
    body: "Visual content systems built for the furniture industry. Shot once, used everywhere — social, ads, e-commerce.",
    tag: "Creative",
  },
];

const work = [
  {
    title: "King Living",
    category: "AI Product Photography",
    image: "/portfolio/King Living/Wide otherside of bed.png",
  },
  {
    title: "Jardan",
    category: "AI Product Photography",
    image: "/portfolio/Jardan/Wide 45 Deg.png",
  },
  {
    title: "Eva",
    category: "AI Product Photography",
    image: "/portfolio/Eva/45 Deg Wide.png",
  },
];

const stats = [
  { num: "14", suffix: "D", label: "Business day delivery (Launch)" },
  { num: "7", suffix: "D", label: "Business day delivery (Studio)" },
  { num: "50+", suffix: "", label: "Scenes per month" },
  { num: "0", suffix: "", label: "Studios needed" },
];

const marqueeItems = [
  "RUN NOT WALK",
  "AI CREATIVE STUDIO",
  "FURNITURE & HOMEWARES",
  "14-DAY DELIVERY",
  "NO STUDIOS",
  "PHOTOREALISTIC OUTPUT",
  "AUSTRALIAN BRANDS",
  "PREMIUM CREATIVE",
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      <Navigation />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-screen">
        <ScrollMorphHero />
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────────────────── */}
      <div className="overflow-hidden bg-[#F5F4F0] border-y border-[#D5D1CB] py-5">
        <div className="flex w-max animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-6 px-3">
              <span className="font-brand text-xl tracking-[0.18em] text-[#6B6560] whitespace-nowrap">
                {item}
              </span>
              <span className="text-[#FE7F2D] text-xs select-none">·</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section className="bg-[#F5F4F0] py-28 px-6 lg:px-16 border-b border-[#D5D1CB]">
        <div className="max-w-[1400px] mx-auto">

          <motion.div {...fadeUp}>
            <SectionTag label="01 / What We Do" />
            <h2 className="font-brand text-[clamp(4rem,8vw,8.5rem)] leading-[0.88] tracking-[0.02em] text-[#1A1614] mb-16">
              PREMIUM<br />CREATIVE.<br />WITHOUT<br />THE WAIT.
            </h2>
          </motion.div>

          {/* 1px border grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D5D1CB]"
          >
            {services.map((s) => (
              <motion.div
                key={s.num}
                variants={staggerChild}
                className="bg-[#F5F4F0] p-10"
              >
                <p className="font-brand leading-none mb-1 select-none text-[#1A1614]"
                   style={{ fontSize: "5rem", opacity: 0.04 }}>
                  {s.num}
                </p>
                <span className="font-mono text-[0.56rem] tracking-[0.22em] uppercase text-[#FE7F2D] mb-4 block">
                  {s.tag}
                </span>
                <h3 className="font-brand text-[1.45rem] tracking-[0.04em] text-[#1A1614] mb-4 leading-tight">
                  {s.title}
                </h3>
                <p className="text-sm text-[#6B6560] leading-[1.85]">{s.body}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div {...fadeUp} className="mt-10 flex justify-end">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-mono text-[0.63rem] tracking-[0.2em] uppercase text-[#FE7F2D] border border-[#FE7F2D] px-6 py-3 hover:bg-[#FE7F2D] hover:text-[#080808] transition-colors duration-300"
            >
              View All Services
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── SELECTED WORK ────────────────────────────────────────────────── */}
      <section className="bg-[#EAE8E3] py-28 px-6 lg:px-16 border-b border-[#D5D1CB]">
        <div className="max-w-[1400px] mx-auto">

          <motion.div
            {...fadeUp}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          >
            <div>
              <SectionTag label="02 / Selected Work" />
              <h2 className="font-brand text-[clamp(4rem,8vw,8.5rem)] leading-[0.88] tracking-[0.02em] text-[#1A1614]">
                THE<br />WORK
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-[0.63rem] tracking-[0.2em] uppercase text-[#6B6560] hover:text-[#1A1614] transition-colors pb-2 border-b border-[#D5D1CB] self-start md:self-end"
            >
              View All Work
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D5D1CB]"
          >
            {work.map((project) => (
              <motion.div
                key={project.title}
                variants={staggerChild}
                className="group bg-[#EAE8E3] cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[#1A1614] opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 w-9 h-9 bg-[#FE7F2D] flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-[#080808]" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="font-mono text-[0.56rem] tracking-[0.22em] uppercase text-[#FE7F2D]">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-base font-medium text-[#1A1614] group-hover:text-[#FE7F2D] transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SPEED PROPOSITION ────────────────────────────────────────────── */}
      <section className="bg-[#FE7F2D] py-24 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">

          <motion.div {...fadeUp}>
            <p className="font-mono text-[0.58rem] tracking-[0.3em] uppercase mb-8"
               style={{ color: "rgba(8,8,8,0.45)" }}>
              The proposition
            </p>
            <h2 className="font-brand text-[clamp(5rem,13vw,14rem)] leading-[0.87] tracking-[0.02em] text-[#080808] mb-10">
              BRIEF IN.<br />CAMPAIGN<br />OUT. 14<br />DAYS.
            </h2>
            <p className="text-sm mb-16 max-w-md leading-[1.85]"
               style={{ color: "rgba(8,8,8,0.6)" }}>
              No studio. No stylist. No waiting. Just exceptional AI-powered creative, on demand. That is the standard we hold ourselves to every single day.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4"
            style={{ gap: "1px", backgroundColor: "rgba(8,8,8,0.15)" }}
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={staggerChild}
                className="bg-[#FE7F2D] p-8"
              >
                <div className="font-brand text-[3rem] text-[#080808] leading-none mb-1">
                  {s.num}
                  {s.suffix && <span className="text-xl ml-1">{s.suffix}</span>}
                </div>
                <div className="font-mono text-[0.54rem] tracking-[0.18em] uppercase"
                     style={{ color: "rgba(8,8,8,0.5)" }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section className="bg-[#F5F4F0] py-28 px-6 lg:px-16 border-b border-[#D5D1CB]">
        <div className="max-w-[1400px] mx-auto">

          <motion.div {...fadeUp}>
            <SectionTag label="03 / About Us" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            <motion.div {...fadeUp}>
              <h2 className="font-brand text-[clamp(3.5rem,6vw,7rem)] leading-[0.88] tracking-[0.02em] text-[#1A1614]">
                WE ARE<br />YOUR<br />SECRET<br />WEAPON.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <p className="font-editorial italic text-[clamp(1.1rem,1.8vw,1.6rem)] leading-[1.45] text-[#1A1614] mb-6 border-l-2 border-[#FE7F2D] pl-5">
                &ldquo;We exist to give furniture brands the visual firepower of a $500K creative budget — without the photoshoot.&rdquo;
              </p>
              <p className="text-sm text-[#6B6560] leading-[1.85] mb-8">
                Run Not Walk is an AI creative studio producing premium furniture and homewares photography at a fraction of traditional costs — and in a fraction of traditional timelines.
                <br /><br />
                No studio bookings. No model releases. No three-week waits. Just photorealistic product imagery, delivered in 14 business days.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-mono text-[0.63rem] tracking-[0.2em] uppercase text-[#FE7F2D] hover:text-[#1A1614] transition-colors w-fit border-b border-[#FE7F2D] pb-1"
              >
                Learn More
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="bg-[#F5F4F0] py-28 px-6 lg:px-16 border-t-[3px] border-[#FE7F2D]">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-brand text-[clamp(4.5rem,11vw,12rem)] leading-[0.87] tracking-[0.02em] text-[#1A1614] mb-6">
              READY TO<br />RUN?
            </h2>
            <p className="font-editorial italic text-[clamp(1rem,1.5vw,1.4rem)] text-[#6B6560] max-w-sm mx-auto mb-12 leading-[1.5]">
              Send us a brief. First concepts back in 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#FE7F2D] text-[#080808] font-mono text-[0.68rem] tracking-[0.2em] uppercase hover:bg-[#1A1614] hover:text-[#F5F4F0] transition-colors duration-300"
              >
                Start a Project
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:hello@runnotwalk.studio"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#D5D1CB] text-[#6B6560] font-mono text-[0.68rem] tracking-[0.2em] uppercase hover:border-[#6B6560] hover:text-[#1A1614] transition-colors duration-300"
              >
                hello@runnotwalk.studio
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
