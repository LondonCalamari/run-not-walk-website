"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowUpRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: EASE },
};

const traits = [
  {
    num: "01",
    name: "DISRUPTIVE",
    desc: "We challenge the status quo of creative production. We don't apologise for being different — we lead with it. The old way is slow and expensive. We say so, loudly.",
    quote: "The photoshoot is dead. Long live the brief.",
  },
  {
    num: "02",
    name: "EDITORIAL",
    desc: "We have taste. Cultural awareness. We don't just make content — we make content that means something. Every frame is considered, every scene intentional.",
    quote: "We don't just produce. We direct.",
  },
  {
    num: "03",
    name: "CONFIDENT",
    desc: "We don't oversell. We don't pitch. We show. Our work speaks first. Nike doesn't beg you to buy — they show you what's possible. We operate the same way.",
    quote: "See the work. Then decide.",
  },
  {
    num: "04",
    name: "SHARP",
    desc: "Direct. Punchy. No fluff, no filler. Every word earns its place. We write like we work — fast, precise, and with intention. If it can be cut, it gets cut.",
    quote: "Brief in. Campaign out. 48 hours.",
  },
  {
    num: "05",
    name: "SECRET WEAPON",
    desc: "Clients don't just hire us — they discover us. We give brands an unfair advantage. The feeling of having found something nobody else has yet.",
    quote: "Your competitors don't know about us yet.",
  },
  {
    num: "06",
    name: "RELENTLESS",
    desc: "We are always moving. Run Not Walk isn't just a name — it's an operating principle. We don't wait. We don't slow down. We deliver, then we do it again.",
    quote: "Done. What's next?",
  },
];

const stats = [
  { num: "48", suffix: "HRS", label: "Standard delivery" },
  { num: "20+", suffix: "", label: "Images per brief" },
  { num: "100%", suffix: "", label: "AI-powered" },
  { num: "0", suffix: "", label: "Studios needed" },
];

const positioning = {
  against: [
    "Slow agencies charging $10K–$30K per shoot",
    "3–6 week turnarounds that kill campaign momentum",
    "Generic AI output with no creative direction",
    "Boutique brands underinvesting in visual identity",
    "The myth that great creative requires a massive budget",
  ],
  for: [
    "Speed without compromise — 48 hour delivery as standard",
    "Creative quality that rivals the biggest agencies",
    "AI as a creative tool, not a shortcut",
    "Boutique brands that deserve to look world-class",
    "Long-term creative partnerships, not one-offs",
  ],
};

export default function AboutPage() {
  return (
    <main className="bg-[#F5F4F0] min-h-screen">
      <Navigation />

      {/* ── HEADER ────────────────────────────────────────────────────────── */}
      <section className="pt-40 pb-16 px-6 lg:px-16 border-b border-[#D5D1CB]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="flex items-center gap-4 mb-10">
              <span className="font-mono text-[0.6rem] tracking-[0.28em] uppercase text-[#FE7F2D]">
                About Us
              </span>
              <span className="w-10 h-px bg-[#D5D1CB]" />
            </div>
            <h1 className="font-brand text-[clamp(5rem,13vw,14rem)] leading-[0.87] tracking-[0.02em] text-[#1A1614] mb-6">
              RUN.<br />NOT.<br />WALK.
            </h1>
            <p className="font-editorial italic text-[clamp(1rem,1.5vw,1.4rem)] text-[#6B6560] max-w-md leading-[1.5]">
              The world&apos;s fastest AI creative studio. Based in Australia. Built for boutique brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION ───────────────────────────────────────────────────────── */}
      <section className="py-28 px-6 lg:px-16 border-b border-[#D5D1CB]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-4 mb-10">
              <span className="font-mono text-[0.6rem] tracking-[0.28em] uppercase text-[#FE7F2D]">
                01 / Who We Are
              </span>
              <span className="w-10 h-px bg-[#D5D1CB]" />
            </div>
          </motion.div>

          {/* Big ember quote block */}
          <motion.div {...fadeUp} className="bg-[#FE7F2D] p-10 lg:p-16 mb-px">
            <p
              className="font-mono text-[0.56rem] tracking-[0.22em] uppercase mb-4"
              style={{ color: "rgba(8,8,8,0.5)" }}
            >
              Core Purpose
            </p>
            <p className="font-editorial italic text-[clamp(1.4rem,2.5vw,2.2rem)] leading-[1.3] text-[#080808]">
              &ldquo;We exist to give boutique brands the visual firepower of a $500K creative budget — without the photoshoot.&rdquo;
            </p>
          </motion.div>

          {/* Mission + Vision cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D5D1CB]"
          >
            {[
              {
                label: "Mission",
                quote: "Make premium creative accessible.",
                body: "The gap between big brand creative and boutique brand creative is closing. We're the ones closing it. Every brand deserves to look world-class — regardless of budget.",
              },
              {
                label: "Vision",
                quote: "The world's fastest AI creative studio.",
                body: "From brief to campaign-ready in 48 hours. No compromises. No excuses. Just exceptional creative, on demand. That is the standard we hold ourselves to every single day.",
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                }}
                className="bg-[#F5F4F0] p-10"
              >
                <p className="font-mono text-[0.56rem] tracking-[0.22em] uppercase text-[#6B6560] mb-4">
                  {item.label}
                </p>
                <p className="font-editorial italic text-[clamp(1.1rem,1.5vw,1.4rem)] text-[#1A1614] mb-4 leading-[1.4]">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="text-sm text-[#6B6560] leading-[1.85]">{item.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────── */}
      <section className="border-b border-[#D5D1CB]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#D5D1CB]"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="bg-[#F5F4F0] py-12 px-10"
              >
                <div className="font-brand text-[3.5rem] text-[#FE7F2D] leading-none mb-1">
                  {s.num}
                  {s.suffix && <span className="text-2xl ml-1">{s.suffix}</span>}
                </div>
                <div className="font-mono text-[0.54rem] tracking-[0.18em] uppercase text-[#6B6560]">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── POSITIONING ───────────────────────────────────────────────────── */}
      <section className="py-28 px-6 lg:px-16 border-b border-[#D5D1CB]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-4 mb-10">
              <span className="font-mono text-[0.6rem] tracking-[0.28em] uppercase text-[#FE7F2D]">
                02 / Where We Stand
              </span>
              <span className="w-10 h-px bg-[#D5D1CB]" />
            </div>
            <h2 className="font-brand text-[clamp(4rem,8vw,8.5rem)] leading-[0.88] tracking-[0.02em] text-[#1A1614] mb-16">
              WHERE<br />WE STAND.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D5D1CB]">
            <motion.div {...fadeUp} className="bg-[#F5F4F0] p-10">
              <p className="font-mono text-[0.58rem] tracking-[0.22em] uppercase text-[#FF2D2D] mb-6">
                We stand against
              </p>
              <ul>
                {positioning.against.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 py-4 border-b border-[#D5D1CB] text-sm text-[#6B6560] leading-[1.6]"
                  >
                    <span className="text-[#FF2D2D] flex-shrink-0 text-xs mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="bg-[#F5F4F0] p-10"
            >
              <p className="font-mono text-[0.58rem] tracking-[0.22em] uppercase text-[#FE7F2D] mb-6">
                We stand for
              </p>
              <ul>
                {positioning.for.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 py-4 border-b border-[#D5D1CB] text-sm text-[#6B6560] leading-[1.6]"
                  >
                    <span className="text-[#FE7F2D] flex-shrink-0 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PERSONALITY ───────────────────────────────────────────────────── */}
      <section className="py-28 px-6 lg:px-16 border-b border-[#D5D1CB]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-4 mb-10">
              <span className="font-mono text-[0.6rem] tracking-[0.28em] uppercase text-[#FE7F2D]">
                03 / How We Show Up
              </span>
              <span className="w-10 h-px bg-[#D5D1CB]" />
            </div>
            <h2 className="font-brand text-[clamp(4rem,8vw,8.5rem)] leading-[0.88] tracking-[0.02em] text-[#1A1614] mb-16">
              HOW WE<br />SHOW UP.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D5D1CB]"
          >
            {traits.map((t) => (
              <motion.div
                key={t.num}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
                }}
                className="bg-[#F5F4F0] p-10"
              >
                <p
                  className="font-brand leading-none mb-2 select-none text-[#1A1614]"
                  style={{ fontSize: "4rem", opacity: 0.05 }}
                >
                  {t.num}
                </p>
                <h3 className="font-brand text-2xl tracking-[0.05em] text-[#FE7F2D] mb-4">
                  {t.name}
                </h3>
                <p className="text-sm text-[#6B6560] leading-[1.85] mb-5">{t.desc}</p>
                <div className="pt-5 border-t border-[#D5D1CB]">
                  <p
                    className="font-editorial italic text-sm text-[#1A1614]"
                    style={{ opacity: 0.3 }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-28 px-6 lg:px-16 border-t-[3px] border-[#FE7F2D]">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-brand text-[clamp(4rem,9vw,10rem)] leading-[0.88] text-[#1A1614] mb-6">
              YOUR BRIEF.<br />OUR PROBLEM.
            </h2>
            <p className="font-editorial italic text-[#6B6560] text-lg max-w-xs mx-auto mb-10">
              First concepts back in 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FE7F2D] text-[#080808] font-mono text-[0.68rem] tracking-[0.2em] uppercase hover:bg-[#1A1614] hover:text-[#F5F4F0] transition-colors duration-300"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
