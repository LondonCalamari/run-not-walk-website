"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowUpRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const categories = ["All", "AI Photography", "Brand Identity", "Creative Campaigns"];

const projects = [
  {
    title: "Lumio Skincare",
    category: "AI Photography",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    description: "20 product scenes. One brief. Delivered in 48 hours.",
  },
  {
    title: "Volta Audio",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    description: "Full visual identity system for a premium audio brand.",
  },
  {
    title: "Drift Coffee Co.",
    category: "Creative Campaigns",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    description: "Campaign creative across social, OOH and digital.",
  },
  {
    title: "Forma Studio",
    category: "AI Photography",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80",
    description: "Editorial product photography for a minimalist homewares brand.",
  },
  {
    title: "Arc Collective",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    description: "Brand identity and asset library for a creative collective.",
  },
  {
    title: "Kōst Activewear",
    category: "Creative Campaigns",
    image: "https://images.unsplash.com/photo-1686191128892-3b37add4a934?w=800&q=80",
    description: "Launch campaign for an Australian activewear label.",
  },
  {
    title: "Noir Fragrance",
    category: "AI Photography",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80",
    description: "Luxury fragrance campaign. No studio. No stylist. No waiting.",
  },
  {
    title: "Modu Architecture",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    description: "Visual identity for a boutique architecture and interiors firm.",
  },
  {
    title: "Shelf Life",
    category: "Creative Campaigns",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    description: "Scroll-stopping social campaign for an independent bookstore.",
  },
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
                Selected Work
              </span>
              <span className="w-10 h-px bg-[#D5D1CB]" />
            </div>
            <h1 className="font-brand text-[clamp(5rem,13vw,14rem)] leading-[0.87] tracking-[0.02em] text-[#1A1614] mb-6">
              THE<br />WORK.
            </h1>
            <p className="font-editorial italic text-[clamp(1rem,1.5vw,1.4rem)] text-[#6B6560] max-w-sm leading-[1.5]">
              See what we&apos;ve built. Then decide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FILTER ────────────────────────────────────────────────────────── */}
      <section className="py-10 px-6 lg:px-16 border-b border-[#D5D1CB]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap items-center gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-[0.62rem] tracking-[0.22em] uppercase pb-2 border-b transition-colors duration-200 ${
                  activeCategory === cat
                    ? "text-[#FE7F2D] border-[#FE7F2D]"
                    : "text-[#6B6560] border-transparent hover:text-[#1A1614] hover:border-[#6B6560]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRID ──────────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D5D1CB]"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
                  className="group bg-[#F5F4F0] cursor-pointer"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-[#1A1614] opacity-0 group-hover:opacity-25 transition-opacity duration-500" />
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
                    <p className="mt-1.5 text-sm text-[#6B6560] leading-[1.7]">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-28 px-6 lg:px-16 border-t-[3px] border-[#FE7F2D]">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <h2 className="font-brand text-[clamp(4rem,9vw,10rem)] leading-[0.88] text-[#1A1614] mb-6">
              YOUR BRAND<br />COULD BE NEXT.
            </h2>
            <p className="font-editorial italic text-[#6B6560] text-lg max-w-xs mx-auto mb-10">
              Brief in. Campaign out. 48 hours.
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
