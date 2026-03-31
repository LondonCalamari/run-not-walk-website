"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowUpRight } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const brands = [
  {
    name: "Eva",
    tagline: "Sofa beds and modular living",
    description:
      "Australian brand specialising in space-saving furniture. We produced a full library of lifestyle scenes showcasing their signature terracotta sofa across multiple room settings.",
    sceneCount: "5 scenes",
    images: [
      "/portfolio/Eva/001-Slideaway_Sofa_Bed__Terracotta_View01.jpg",
      "/portfolio/Eva/45 Deg Wide.png",
      "/portfolio/Eva/9x16 Close Up.png",
      "/portfolio/Eva/Front on Wide Angle.png",
    ],
  },
  {
    name: "FRED Chairs",
    tagline: "Designer wooden chairs",
    description:
      "Melbourne-based chair maker. Showcased their green leather accent chair and wooden dining chairs across styled interior settings — office, dining, and desk environments.",
    sceneCount: "6 scenes",
    images: [
      "/portfolio/FRED Chairs/Green Chair.png",
      "/portfolio/FRED Chairs/Close up Wooden Chair.png",
      "/portfolio/FRED Chairs/Wooden Chair Desk.png",
      "/portfolio/FRED Chairs/Reference Chair.png",
      "/portfolio/FRED Chairs/FLORA_Onboarding_Image_Editing_Request_2026-03-18_16-33.png",
    ],
  },
  {
    name: "Jardan",
    tagline: "Australian premium furniture",
    description:
      "One of Australia's leading furniture brands. Produced editorial-style lifestyle scenes across multiple angles for their contemporary lounge and sofa range.",
    sceneCount: "4 scenes",
    images: [
      "/portfolio/Jardan/Wide 45 Deg.png",
      "/portfolio/Jardan/Wide front on.png",
      "/portfolio/Jardan/1:1 Close Up.png",
    ],
  },
  {
    name: "King Living",
    tagline: "Luxury Australian furniture",
    description:
      "Premium furniture brand with a legacy collection. Produced a full lifestyle campaign — bedroom and living scenes — showcasing their signature beds and sofas in aspirational home settings.",
    sceneCount: "4 scenes",
    images: [
      "/portfolio/King Living/Wide otherside of bed.png",
      "/portfolio/King Living/45 Deg Wide.png",
      "/portfolio/King Living/9:16 Close up.png",
    ],
  },
  {
    name: "MCM Couch",
    tagline: "Mid-century modern furniture",
    description:
      "Specialist in mid-century modern sofa design. Produced multiple lifestyle scenes — front-facing, side profile, and close-up detail shots — for their signature couch collection.",
    sceneCount: "4 scenes",
    images: [
      "/portfolio/MCM Couch/Front Couch.png",
      "/portfolio/MCM Couch/Side Couch.png",
      "/portfolio/MCM Couch/3:4 Shot Couch.png",
    ],
  },
];

const filterOptions = ["All", ...brands.map((b) => b.name)];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visible =
    activeFilter === "All"
      ? brands
      : brands.filter((b) => b.name === activeFilter);

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
              AI-generated furniture photography. No studio. No stylist. All
              premium.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FILTER ────────────────────────────────────────────────────────── */}
      <section className="py-10 px-6 lg:px-16 border-b border-[#D5D1CB]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap items-center gap-8">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-mono text-[0.62rem] tracking-[0.22em] uppercase pb-2 border-b transition-colors duration-200 ${
                  activeFilter === filter
                    ? "text-[#FE7F2D] border-[#FE7F2D]"
                    : "text-[#6B6560] border-transparent hover:text-[#1A1614] hover:border-[#6B6560]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDS ────────────────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {visible.map((brand, brandIndex) => (
            <section
              key={brand.name}
              className="py-16 px-6 lg:px-16 border-b border-[#D5D1CB]"
            >
              <div className="max-w-[1400px] mx-auto">
                {/* Brand header */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: brandIndex * 0.1,
                    ease: EASE,
                  }}
                  className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12 mb-12"
                >
                  <div>
                    <span className="font-mono text-[0.56rem] tracking-[0.22em] uppercase text-[#FE7F2D] block mb-2">
                      {brand.sceneCount}
                    </span>
                    <h2 className="font-brand text-[clamp(2.5rem,5vw,5rem)] leading-[0.9] tracking-[0.03em] text-[#1A1614]">
                      {brand.name}
                    </h2>
                    <p className="font-editorial italic text-[#FE7F2D] text-base mt-1">
                      {brand.tagline}
                    </p>
                  </div>
                  <p className="text-sm text-[#6B6560] leading-[1.85] max-w-lg md:pb-2">
                    {brand.description}
                  </p>
                </motion.div>

                {/* Image grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D5D1CB]">
                  {brand.images.map((src, i) => (
                    <motion.div
                      key={src}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: brandIndex * 0.1 + i * 0.06,
                        ease: EASE,
                      }}
                      className="group relative bg-[#EAE8E3] overflow-hidden cursor-pointer"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={src}
                          alt={`${brand.name} — image ${i + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-[#1A1614] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                        <div className="absolute top-4 right-4 w-9 h-9 bg-[#FE7F2D] flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4 text-[#080808]" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </motion.div>
      </AnimatePresence>

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
              14 business days from brief to delivery. No studio required.
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
