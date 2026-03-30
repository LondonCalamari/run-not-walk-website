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

const services = [
  {
    num: "01",
    title: "AI PRODUCT PHOTOGRAPHY",
    tag: "Photography",
    tagline: "One product. Twenty rooms. One brief.",
    description:
      "The photoshoot is dead. We produce premium product imagery — styled, lit and campaign-ready — using AI. You send us the product. We send back the shoot. No studio. No logistics. No three-week turnaround.",
    features: [
      "20+ unique scenes per brief",
      "Lifestyle, studio and editorial styles",
      "Social, e-commerce and print formats",
      "Campaign-ready in 48 hours",
      "Unlimited style directions",
    ],
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=900&q=80",
  },
  {
    num: "02",
    title: "VIDEO & MOTION",
    tag: "Video",
    tagline: "Campaign-ready video. 48 hours from brief.",
    description:
      "No crew. No location scouts. No waiting. We produce scroll-stopping video content for social, digital and broadcast using AI-powered production. Brief us on Monday. Campaign live by Wednesday.",
    features: [
      "Social-first video (Reels, TikTok, Stories)",
      "Product hero videos",
      "Brand films and manifesto content",
      "Motion graphics and animation",
      "Multi-format delivery",
    ],
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=80",
  },
  {
    num: "03",
    title: "BRAND CREATIVE",
    tag: "Branding",
    tagline: "Visual systems for the AI era.",
    description:
      "Logos, design systems and brand assets built for the modern world. We don't do generic. Every brand we work with gets a visual identity that looks like it cost five times what it did — because it should.",
    features: [
      "Logo design and brand mark",
      "Complete design system",
      "Brand guidelines and usage rules",
      "Asset library generation",
      "Digital-first brand templates",
    ],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80",
  },
];

const process = [
  {
    num: "01",
    title: "BRIEF",
    body: "Send us what you've got. A proper brief, a reference, a napkin sketch — we'll take it from there. No lengthy discovery process.",
  },
  {
    num: "02",
    title: "CONCEPT",
    body: "First concepts back within 24 hours. Not mood boards. Not presentations. Actual work you can react to.",
  },
  {
    num: "03",
    title: "REFINE",
    body: "One round of revisions included in every project. We get it right fast. If we don't, we fix it. No questions asked.",
  },
  {
    num: "04",
    title: "DELIVER",
    body: "Campaign-ready assets in every format you need. 48 hours from brief to delivery. That is the standard.",
  },
];

export default function ServicesPage() {
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
                What We Do
              </span>
              <span className="w-10 h-px bg-[#D5D1CB]" />
            </div>
            <h1 className="font-brand text-[clamp(5rem,13vw,14rem)] leading-[0.87] tracking-[0.02em] text-[#1A1614] mb-6">
              THREE<br />SERVICES.<br />ONE GOAL.
            </h1>
            <p className="font-editorial italic text-[clamp(1rem,1.5vw,1.4rem)] text-[#6B6560] max-w-md leading-[1.5]">
              Make your brand look like it&apos;s lying about its budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section className="px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          {services.map((s, index) => (
            <motion.div
              key={s.num}
              {...fadeUp}
              className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#D5D1CB] border-b border-[#D5D1CB]"
            >
              {/* Content */}
              <div className={`bg-[#F5F4F0] py-20 ${index % 2 === 1 ? "lg:order-2 lg:pl-0 lg:pr-0" : ""}`}>
                <p
                  className="font-brand leading-none mb-1 select-none text-[#1A1614]"
                  style={{ fontSize: "6rem", opacity: 0.04 }}
                >
                  {s.num}
                </p>
                <span className="font-mono text-[0.56rem] tracking-[0.22em] uppercase text-[#FE7F2D] mb-4 block">
                  {s.tag}
                </span>
                <h2 className="font-brand text-[clamp(2rem,3.5vw,3.5rem)] leading-[0.9] tracking-[0.02em] text-[#1A1614] mb-4">
                  {s.title}
                </h2>
                <p className="font-editorial italic text-[clamp(1rem,1.3vw,1.2rem)] text-[#FE7F2D] mb-6 leading-[1.4]">
                  &ldquo;{s.tagline}&rdquo;
                </p>
                <p className="text-sm text-[#6B6560] leading-[1.85] mb-8 max-w-lg">
                  {s.description}
                </p>
                <ul className="space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="text-[#FE7F2D] flex-shrink-0 mt-0.5">→</span>
                      <span className="text-sm text-[#6B6560] leading-[1.7]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className={`bg-[#EAE8E3] ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="h-full min-h-[400px] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────────── */}
      <section className="py-28 px-6 lg:px-16 border-b border-[#D5D1CB]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-4 mb-10">
              <span className="font-mono text-[0.6rem] tracking-[0.28em] uppercase text-[#FE7F2D]">
                How It Works
              </span>
              <span className="w-10 h-px bg-[#D5D1CB]" />
            </div>
            <h2 className="font-brand text-[clamp(4rem,8vw,8.5rem)] leading-[0.88] tracking-[0.02em] text-[#1A1614] mb-16">
              THE<br />PROCESS.
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#D5D1CB]"
          >
            {process.map((step) => (
              <motion.div
                key={step.num}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
                }}
                className="bg-[#F5F4F0] p-10"
              >
                <p
                  className="font-brand leading-none mb-3 select-none text-[#1A1614]"
                  style={{ fontSize: "4rem", opacity: 0.05 }}
                >
                  {step.num}
                </p>
                <h3 className="font-brand text-2xl tracking-[0.05em] text-[#FE7F2D] mb-4">
                  {step.title}
                </h3>
                <p className="text-sm text-[#6B6560] leading-[1.85]">{step.body}</p>
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
              BRIEF IN.<br />CAMPAIGN OUT.
            </h2>
            <p className="font-editorial italic text-[#6B6560] text-lg max-w-xs mx-auto mb-10">
              48 hours. No studio. No excuses.
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
