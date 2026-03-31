"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowUpRight, Send, CheckCircle, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const budgetOptions = [
  "Under $1,000/mo",
  "$1,000 – $2,500/mo",
  "$2,500 – $5,000/mo",
  "$5,000 – $10,000/mo",
  "$10,000+/mo",
  "Not sure yet",
];

const productOptions = [
  "Just 1 product",
  "2–5 products",
  "6–15 products",
  "16–50 products",
  "50+ products",
];

const timelineOptions = [
  "ASAP — we have an urgent need",
  "Within the next month",
  "1–3 months",
  "3+ months from now",
  "Just exploring for now",
];

const foundUsOptions = [
  "Google search",
  "Instagram",
  "LinkedIn",
  "Referral",
  "Podcast or YouTube",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    company: "",
    projectType: "AI Furniture Photography",
    products: "",
    budget: "",
    timeline: "",
    currentPhotography: "",
    message: "",
    foundUs: "",
  });

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        website: "",
        company: "",
        projectType: "AI Furniture Photography",
        products: "",
        budget: "",
        timeline: "",
        currentPhotography: "",
        message: "",
        foundUs: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
                Let&apos;s Talk
              </span>
              <span className="w-10 h-px bg-[#D5D1CB]" />
            </div>
            <h1 className="font-brand text-[clamp(5rem,13vw,14rem)] leading-[0.87] tracking-[0.02em] text-[#1A1614] mb-6">
              START<br />HERE.
            </h1>
            <p className="font-editorial italic text-[clamp(1rem,1.5vw,1.4rem)] text-[#6B6560] max-w-sm leading-[1.5]">
              First response within 24 hours. Real answers, not sales scripts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FORM ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-16 lg:gap-24">

            {/* Left — context copy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            >
              <h2 className="font-brand text-[clamp(2.5rem,5vw,5rem)] leading-[0.9] tracking-[0.03em] text-[#1A1614] mb-6">
                TELL US<br />ABOUT YOUR<br />BRAND.
              </h2>
              <p className="text-sm text-[#6B6560] leading-[1.85] mb-10 max-w-sm">
                The more context you give us upfront, the more useful our first
                reply will be. No forms for form&apos;s sake — every question
                helps us understand if we&apos;re the right fit.
              </p>

              {/* What we need */}
              <div className="border-t border-[#D5D1CB] pt-8 mb-10">
                <p className="font-mono text-[0.56rem] tracking-[0.22em] uppercase text-[#FE7F2D] mb-4">
                  Before you fill this in
                </p>
                <ul className="space-y-3">
                  {[
                    "A link to your website or Instagram",
                    "Your product catalogue size (even an estimate)",
                    "Your current photography setup (in-house, agency, none)",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-[#6B6560]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FE7F2D] mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing context */}
              <div className="bg-[#EAE8E3] p-8">
                <p className="font-mono text-[0.56rem] tracking-[0.22em] uppercase text-[#FE7F2D] mb-4">
                  Our pricing
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="font-brand text-lg text-[#1A1614]">Launch — $2,500/mo</p>
                    <p className="text-xs text-[#6B6560] mt-1">
                      3 products · 15 scenes · 14-day turnaround
                    </p>
                  </div>
                  <div className="border-t border-[#D5D1CB] pt-4">
                    <p className="font-brand text-lg text-[#1A1614]">Studio — $6,000/mo</p>
                    <p className="text-xs text-[#6B6560] mt-1">
                      10 products · 40 scenes · 7-day turnaround · Campaign Pack add-on
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            >
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="bg-[#EAE8E3] border border-[#D5D1CB] p-10 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#FE7F2D] flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-7 h-7 text-[#080808]" />
                  </div>
                  <h3 className="font-brand text-3xl text-[#1A1614] mb-3">
                    MESSAGE IN.
                  </h3>
                  <p className="text-sm text-[#6B6560] leading-[1.7]">
                    We&apos;ve got it. Expect a reply within 24 hours —
                    usually much faster. Check your inbox at{" "}
                    <span className="text-[#1A1614] font-medium">
                      {formData.email || "your email"}
                    </span>
                    .
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#EAE8E3] border border-[#D5D1CB] p-8 md:p-10 space-y-5"
                >
                  {status === "error" && (
                    <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{errorMessage}</p>
                    </div>
                  )}

                  {/* Name + Email */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[0.56rem] tracking-[0.2em] uppercase text-[#6B6560] mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-[#F5F4F0] border border-[#D5D1CB] text-[#1A1614] text-sm placeholder:text-[#A09C97] focus:border-[#FE7F2D] focus:outline-none transition-colors disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[0.56rem] tracking-[0.2em] uppercase text-[#6B6560] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        placeholder="you@brand.com"
                        className="w-full px-4 py-3 bg-[#F5F4F0] border border-[#D5D1CB] text-[#1A1614] text-sm placeholder:text-[#A09C97] focus:border-[#FE7F2D] focus:outline-none transition-colors disabled:opacity-50"
                      />
                    </div>
                  </div>

                  {/* Website + Company */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[0.56rem] tracking-[0.2em] uppercase text-[#6B6560] mb-2">
                        Website / Instagram
                      </label>
                      <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        placeholder="yourbrand.com"
                        className="w-full px-4 py-3 bg-[#F5F4F0] border border-[#D5D1CB] text-[#1A1614] text-sm placeholder:text-[#A09C97] focus:border-[#FE7F2D] focus:outline-none transition-colors disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[0.56rem] tracking-[0.2em] uppercase text-[#6B6560] mb-2">
                        Brand / Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        placeholder="Your brand name"
                        className="w-full px-4 py-3 bg-[#F5F4F0] border border-[#D5D1CB] text-[#1A1614] text-sm placeholder:text-[#A09C97] focus:border-[#FE7F2D] focus:outline-none transition-colors disabled:opacity-50"
                      />
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block font-mono text-[0.56rem] tracking-[0.2em] uppercase text-[#6B6560] mb-2">
                      Monthly budget for creative *
                    </label>
                    <select
                      name="budget"
                      required
                      value={formData.budget}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="w-full px-4 py-3 bg-[#F5F4F0] border border-[#D5D1CB] text-[#1A1614] text-sm focus:border-[#FE7F2D] focus:outline-none transition-colors disabled:opacity-50 appearance-none cursor-pointer"
                    >
                      <option value="">Select a range</option>
                      {budgetOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Products + Timeline */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[0.56rem] tracking-[0.2em] uppercase text-[#6B6560] mb-2">
                        How many products?
                      </label>
                      <select
                        name="products"
                        value={formData.products}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        className="w-full px-4 py-3 bg-[#F5F4F0] border border-[#D5D1CB] text-[#1A1614] text-sm focus:border-[#FE7F2D] focus:outline-none transition-colors disabled:opacity-50 appearance-none cursor-pointer"
                      >
                        <option value="">Select range</option>
                        {productOptions.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block font-mono text-[0.56rem] tracking-[0.2em] uppercase text-[#6B6560] mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        className="w-full px-4 py-3 bg-[#F5F4F0] border border-[#D5D1CB] text-[#1A1614] text-sm focus:border-[#FE7F2D] focus:outline-none transition-colors disabled:opacity-50 appearance-none cursor-pointer"
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project type */}
                  <div>
                    <label className="block font-mono text-[0.56rem] tracking-[0.2em] uppercase text-[#6B6560] mb-2">
                      What do you need?
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="w-full px-4 py-3 bg-[#F5F4F0] border border-[#D5D1CB] text-[#1A1614] text-sm focus:border-[#FE7F2D] focus:outline-none transition-colors disabled:opacity-50 appearance-none cursor-pointer"
                    >
                      {[
                        "AI Furniture Photography",
                        "Video Content",
                        "Both Photography & Video",
                        "Campaign Pack (Studio only)",
                        "Not sure yet — need advice",
                      ].map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Current photography */}
                  <div>
                    <label className="block font-mono text-[0.56rem] tracking-[0.2em] uppercase text-[#6B6560] mb-2">
                      Current photography setup
                    </label>
                    <select
                      name="currentPhotography"
                      value={formData.currentPhotography}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="w-full px-4 py-3 bg-[#F5F4F0] border border-[#D5D1CB] text-[#1A1614] text-sm focus:border-[#FE7F2D] focus:outline-none transition-colors disabled:opacity-50 appearance-none cursor-pointer"
                    >
                      <option value="">Select one</option>
                      {[
                        "We do it in-house",
                        "We use a photographer / studio",
                        "We use an agency",
                        "We don't have any right now",
                        "Other",
                      ].map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-mono text-[0.56rem] tracking-[0.2em] uppercase text-[#6B6560] mb-2">
                      Tell us about your project *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      placeholder="What's the project? What are you trying to achieve? Any references or specific needs?"
                      className="w-full px-4 py-3 bg-[#F5F4F0] border border-[#D5D1CB] text-[#1A1614] text-sm placeholder:text-[#A09C97] focus:border-[#FE7F2D] focus:outline-none transition-colors resize-none disabled:opacity-50"
                    />
                  </div>

                  {/* Where did you find us */}
                  <div>
                    <label className="block font-mono text-[0.56rem] tracking-[0.2em] uppercase text-[#6B6560] mb-2">
                      How did you find us?
                    </label>
                    <select
                      name="foundUs"
                      value={formData.foundUs}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="w-full px-4 py-3 bg-[#F5F4F0] border border-[#D5D1CB] text-[#1A1614] text-sm focus:border-[#FE7F2D] focus:outline-none transition-colors disabled:opacity-50 appearance-none cursor-pointer"
                    >
                      <option value="">Select one</option>
                      {foundUsOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#FE7F2D] text-[#080808] font-mono text-[0.68rem] tracking-[0.2em] uppercase hover:bg-[#1A1614] hover:text-[#F5F4F0] transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                  >
                    {status === "loading" ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Brief</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
