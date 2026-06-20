import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ArrowUpRight, Play } from "lucide-react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.png";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.png";
import p6 from "@/assets/portfolio-6.jpg";
import p7 from "@/assets/portfolio-7.png";
import p8 from "@/assets/portfolio-8.png";
import p9 from "@/assets/portfolio-9.png";
import p10 from "@/assets/portfolio-10.png";
import p11 from "@/assets/portfolio-11.png";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_site/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Selected work for India's schools & colleges | Edicast" },
      { name: "description", content: "A curated gallery of campus photography, admissions films, reels, branding and event coverage projects delivered by Edicast." },
    ],
  }),
  component: Portfolio,
});

type Cat = "All" | "Photography" | "Videography" | "Reels" | "Branding" | "Social Media";
const cats: Cat[] = ["All", "Photography", "Videography", "Reels", "Branding", "Social Media"];

const items = [
  { img: p1, title: "Convocation Film 2025", cat: "Videography" as const, client: "Greenfield International School" },
  { img: p2, title: "", cat: "Photography" as const, client: "" },
  { img: p3, title: "Brand Identity Refresh", cat: "Branding" as const, client: "Vidya Trust" },
  { img: p4, title: "Reels Campaign — Admissions '25", cat: "Reels" as const, client: "Apex Coaching" },
  { img: p5, title: "", cat: "Photography" as const, client: "" },
  { img: p6, title: "Annual Cultural Fest", cat: "Videography" as const, client: "Modern College" },
  { img: p4, title: "Instagram Growth — 6 months", cat: "Social Media" as const, client: "Bright Future Coaching" },
  { img: p3, title: "Prospectus & Stationery", cat: "Branding" as const, client: "Sunrise Academy" },
  { img: p7, title: "", cat: "Photography" as const, client: "" },
  { img: p8, title: "", cat: "Photography" as const, client: "" },
  { img: p9, title: "", cat: "Photography" as const, client: "" },
  { img: p10, title: "", cat: "Photography" as const, client: "" },
  { img: p11, title: "", cat: "Photography" as const, client: "" },

];

function Portfolio() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary border border-border px-3 py-1 text-xs uppercase tracking-widest mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Portfolio
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] text-navy-deep">
              Selected work across India's <span className="text-gradient-gold italic">finest campuses</span>.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="pb-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap gap-2 justify-center">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-medium transition-all border",
                active === c
                  ? "bg-navy text-primary-foreground border-navy"
                  : "bg-card text-muted-foreground border-border hover:border-navy hover:text-navy"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => (
              <Reveal key={p.title + i} delay={(i % 6) * 0.05}>
                <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl shadow-sm hover:shadow-elegant transition-shadow cursor-pointer">
                  <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/95 via-navy-deep/30 to-transparent" />
                  {(p.cat === "Videography" || p.cat === "Reels") && (
                    <div className="absolute top-5 right-5 h-10 w-10 rounded-full glass grid place-items-center">
                      <Play className="h-4 w-4 text-gold fill-gold" />
                    </div>
                  )}
                  <div className="absolute inset-x-6 bottom-6 text-primary-foreground">
                    <div className="text-[10px] uppercase tracking-widest text-gold mb-2">{p.cat}</div>
                    <div className="font-display text-2xl leading-tight">{p.title}</div>
                    <div className="text-xs text-primary-foreground/60 mt-1">{p.client}</div>
                  </div>
                  <ArrowUpRight className="absolute top-5 left-5 h-5 w-5 text-primary-foreground/0 group-hover:text-gold transition-colors" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 text-center">
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold-gradient text-navy-deep px-7 py-4 text-sm font-semibold shadow-glow hover:scale-[1.02] transition-transform">
          Start your project
        </Link>
      </section>
    </>
  );
}
