"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowUpRight, Check } from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: EASE },
};

const plans = [
  {
    name: "Launch",
    price: "$2,500",
    period: "per month",
    tagline: "Test the water. See what's possible.",
    description:
      "Everything you need to start using AI-generated imagery for your brand. No long contracts, no agency minimums.",
    cta: "Start with Launch",
    ctaHref: "/contact",
    featured: false,
    scenes: "10–15 photorealistic scenes per month",
    products: "Up to 3 products covered",
    revisions: "3 revision rounds",
    turnaround: "14 business day turnaround",
    formats: [
      "Instagram feed",
      "Instagram Stories",
      "Facebook feed",
      "Pinterest",
      "Website hero images",
    ],
    addOns: null,
  },
  {
    name: "Studio",
    price: "$6,000",
    period: "per month",
    tagline: "Your always-on creative studio.",
    description:
      "The full service. All the imagery you need, every month, delivered at pace. Built for furniture brands going all-in on AI content.",
    cta: "Start with Studio",
    ctaHref: "/contact",
    featured: true,
    scenes: "35–50 photorealistic scenes per month",
    products: "Up to 10 products covered",
    revisions: "3 revision rounds",
    turnaround: "7 business day turnaround",
    formats: [
      "Instagram feed",
      "Instagram Stories",
      "Facebook feed",
      "Pinterest",
      "Website hero images",
      "All Meta ad sizes",
      "E-commerce product shots",
      "Lookbooks",
    ],
    addOns: {
      name: "Campaign Imagery Pack",
      price: "+$1,200",
      description:
        "Need creative for a specific campaign launch? We deliver everything in every format — ready to upload. Meta, Instagram, email, display. One flat fee.",
      note: "Studio clients only",
    },
  },
];

const faqs = [
  {
    q: "What do you mean by 'scenes'?",
    a: "One scene is one unique AI-generated image. If we create the same product in three different room settings, that's three scenes. Same product, same room, different angle — that's one scene.",
  },
  {
    q: "What if I only have one product?",
    a: "That's fine. We tailor the scope to what you actually need. If you have fewer than 3 products, Launch covers all of them. Same for Studio and the 10-product limit.",
  },
  {
    q: "What are revision rounds?",
    a: "You get three rounds of revision per brief. That means you can request changes three times — lighting, mood, composition, colour — and we'll refine until you're happy. Most briefs are locked in by round two.",
  },
  {
    q: "Can I upgrade or cancel any time?",
    a: "Yes. Launch is month-to-month — cancel whenever. Studio runs on a minimum 3-month term to start, then goes month-to-month after that. Upgrades from Launch to Studio can happen any time.",
  },
  {
    q: "Who owns the images?",
    a: "You do. Once we've delivered and you've paid, all imagery is fully licensed to your brand for commercial use. We don't retain rights or reuse your product imagery for other clients.",
  },
  {
    q: "What does the strategy call include?",
    a: "Once a month, we jump on a 45-minute call to review what landed, what's coming next, and which products should be prioritised next month. We come prepared with recommendations. You make the final call.",
  },
  {
    q: "How does the Campaign Imagery Pack work?",
    a: "Tell us your campaign — Mother's Day, summer sale, new collection launch — and we'll deliver all the imagery you need in every format for that campaign. 5–7 day turnaround. You handle the ad campaigns; we handle the creative.",
  },
  {
    q: "Do you manage paid ads?",
    a: "No. We're a content studio. We deliver the imagery in every format you need. You upload it and run your own campaigns. We don't touch ad accounts.",
  },
  {
    q: "What do you need from us to get started?",
    a: "High-resolution product photos (even on white is fine), a brief on your brand and what you're trying to achieve, and which products you want to focus on. That's it. No studio shoots, no samples, no model releases.",
  },
];

export default function PricingPage() {
  return (
    <main className="bg-[#F5F4F0] min-h-screen">
      <Navigation />

      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <section className="pt-40 pb-16 px-6 lg:px-16 border-b border-[#D5D1CB]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="flex items-center gap-4 mb-10">
              <span className="font-mono text-[0.6rem] tracking-[0.28em] uppercase text-[#FE7F2D]">
                Pricing
              </span>
              <span className="w-10 h-px bg-[#D5D1CB]" />
            </div>
            <h1 className="font-brand text-[clamp(5rem,13vw,14rem)] leading-[0.87] tracking-[0.02em] text-[#1A1614] mb-6">
              TWO<br />PLANS.<br />ONE ADD-ON.
            </h1>
            <p className="font-editorial italic text-[clamp(1rem,1.5vw,1.4rem)] text-[#6B6560] max-w-md leading-[1.5]">
              No agency minimums. No long contracts. Premium furniture
              imagery on a subscription you can actually manage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PLANS ─────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-3xl p-10 lg:p-12 flex flex-col ${
                  plan.featured
                    ? "bg-[#1A1614] text-[#F5F4F0]"
                    : "bg-white border border-[#D5D1CB]"
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-6 right-10 font-mono text-[0.56rem] tracking-[0.2em] uppercase text-[#FE7F2D]">
                    Most Popular
                  </div>
                )}

                {/* Plan header */}
                <div className="mb-10">
                  <p
                    className={`font-mono text-[0.56rem] tracking-[0.22em] uppercase mb-4 ${
                      plan.featured ? "text-[#FE7F2D]" : "text-[#6B6560]"
                    }`}
                  >
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="font-brand text-[clamp(3.5rem,6vw,5.5rem)] tracking-[0.02em] leading-none">
                      {plan.price}
                    </span>
                    <span
                      className={`font-mono text-[0.6rem] tracking-[0.15em] ${
                        plan.featured ? "text-[#6B6560]" : "text-[#6B6560]"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>
                  <p
                    className={`font-editorial italic text-sm leading-[1.5] ${
                      plan.featured ? "text-[#D5D1CB]" : "text-[#6B6560]"
                    }`}
                  >
                    {plan.tagline}
                  </p>
                </div>

                <p
                  className={`text-sm leading-[1.8] mb-10 ${
                    plan.featured ? "text-[#D5D1CB]" : "text-[#6B6560]"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-3 mb-10">
                  <p
                    className={`font-mono text-[0.56rem] tracking-[0.22em] uppercase mb-4 ${
                      plan.featured ? "text-[#6B6560]" : "text-[#6B6560]"
                    }`}
                  >
                    What You Get
                  </p>
                  {[
                    plan.scenes,
                    plan.products,
                    plan.revisions,
                    plan.turnaround,
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          plan.featured ? "text-[#FE7F2D]" : "text-[#FE7F2D]"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.featured ? "text-[#F5F4F0]" : "text-[#1A1614]"
                        }`}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Formats */}
                <div className="mb-10">
                  <p
                    className={`font-mono text-[0.56rem] tracking-[0.22em] uppercase mb-4 ${
                      plan.featured ? "text-[#6B6560]" : "text-[#6B6560]"
                    }`}
                  >
                    Image Formats
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {plan.formats.map((f) => (
                      <span
                        key={f}
                        className={`inline-block px-3 py-1.5 rounded-full text-xs font-mono tracking-wide ${
                          plan.featured
                            ? "bg-[#2A2926] text-[#D5D1CB]"
                            : "bg-[#F5F4F0] text-[#6B6560]"
                        }`}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Add-on */}
                {plan.addOns && (
                  <div
                    className={`rounded-2xl p-6 mb-10 ${
                      plan.featured ? "bg-[#2A2926]" : "bg-[#F5F4F0]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p
                        className={`font-mono text-[0.56rem] tracking-[0.22em] uppercase ${
                          plan.featured ? "text-[#FE7F2D]" : "text-[#FE7F2D]"
                        }`}
                      >
                        {plan.addOns.name}
                      </p>
                      <span
                        className={`font-mono text-[0.6rem] tracking-wide ${
                          plan.featured ? "text-[#D5D1CB]" : "text-[#6B6560]"
                        }`}
                      >
                        {plan.addOns.price}
                      </span>
                    </div>
                    <p
                      className={`text-xs leading-[1.7] mb-2 ${
                        plan.featured ? "text-[#D5D1CB]" : "text-[#6B6560]"
                      }`}
                    >
                      {plan.addOns.description}
                    </p>
                    <p
                      className={`font-mono text-[0.52rem] tracking-[0.18em] uppercase ${
                        plan.featured ? "text-[#6B6560]" : "text-[#6B6560]"
                      }`}
                    >
                      {plan.addOns.note}
                    </p>
                  </div>
                )}

                {/* CTA */}
                <Link
                  href={plan.ctaHref}
                  className={`mt-auto inline-flex items-center justify-center gap-2 py-4 px-8 font-mono text-[0.65rem] tracking-[0.18em] uppercase transition-colors duration-300 rounded-xl ${
                    plan.featured
                      ? "bg-[#FE7F2D] text-[#080808] hover:bg-[#F5F4F0]"
                      : "bg-[#1A1614] text-[#F5F4F0] hover:bg-[#FE7F2D] hover:text-[#080808]"
                  }`}
                >
                  {plan.cta}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 lg:px-16 border-t border-[#D5D1CB]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-4 mb-16">
              <span className="font-mono text-[0.6rem] tracking-[0.28em] uppercase text-[#FE7F2D]">
                FAQ
              </span>
              <span className="w-10 h-px bg-[#D5D1CB]" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
              {faqs.map((faq, i) => (
                <motion.div
                  key={faq.q}
                  {...fadeUp}
                  transition={{ delay: i * 0.05 }}
                >
                  <h3 className="font-brand text-xl tracking-[0.04em] text-[#1A1614] mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-[#6B6560] leading-[1.85]">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-28 px-6 lg:px-16 border-t-[3px] border-[#FE7F2D]">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-brand text-[clamp(4rem,9vw,10rem)] leading-[0.88] text-[#1A1614] mb-6">
              READY TO<br />STAND OUT?
            </h2>
            <p className="font-editorial italic text-[#6B6560] text-lg max-w-xs mx-auto mb-10">
              No hard sell. Just a conversation about what you need.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#FE7F2D] text-[#080808] font-mono text-[0.68rem] tracking-[0.2em] uppercase hover:bg-[#1A1614] hover:text-[#F5F4F0] transition-colors duration-300"
              >
                Start a Conversation
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
