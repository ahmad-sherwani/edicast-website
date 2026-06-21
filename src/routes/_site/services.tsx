import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Camera, Video, Megaphone, Palette, Calendar, PenTool, Share2, Sparkles, Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/_site/services")({
  head: () => ({
    meta: [
      { title: "Services — Photography, Reels, Social & Branding for Schools | Edicast" },
      { name: "description", content: "Complete media services for educational institutions: social media management, photography, videography, reels, event coverage, graphic design, branding and content strategy." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Share2, title: "Social Media Management", desc: "Daily posting, community building, paid promotion and growth reporting.",
    deliverables: ["posts/month", "Story sets & highlights", "Monthly analytics", "Hashtag & SEO strategy"] },
  { icon: Camera, title: "Ads", desc: "Admission Campaigning Ads , Campus Visibility Ads, Achievements and Results.",
    deliverables: ["Paid Promotional Ads", "Stratergies for Ads", "Meta Ads", "Google Ads"] },
 /* { icon: Video, title: "Videography", desc: "Admissions films, virtual tours, faculty interviews and brand films.",
    deliverables: ["3-7 min hero film", "30s social cutdown", "Raw footage archive", "Custom voiceover & music"] },*/
  { icon: Sparkles, title: "Reels Creation", desc: "Short-form content engineered for the Instagram & YouTube algorithm.",
    deliverables: [" reels/month", "Trend-aligned scripts", "Hook optimization", "Vertical color grading"] },
  /* soon { icon: Calendar, title: "Event Coverage", desc: "Annual day, sports day, convocations, exhibitions — every memory captured.",
    deliverables: ["Multi-camera setup", "Drone coverage", "Live-edit reel within 24h", "Album + film deliverables"] },
  { icon: Megaphone, title: "Branding", desc: "Identity systems, logos, prospectus design and brand guidelines.",
    deliverables: ["Logo + identity system", "Typography & color palette", "Stationery suite", "Brand guidelines PDF"] },
  { icon: Palette, title: "Graphic Designing", desc: "Posters, hoardings, social creatives and admissions collateral.",
    deliverables: ["Unlimited revisions", "Print-ready files", "Hindi + English typography", "On-brand templates"] },
  { icon: PenTool, title: "Content Strategy", desc: "Annual editorial calendars built around your academic milestones.",
    deliverables: ["12-month calendar", "Audience personas", "Content pillars", "Quarterly reviews"] },*/
];

function Services() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary border border-border px-3 py-1 text-xs uppercase tracking-widest mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Services
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] text-navy-deep">
              Everything your institution needs, under <span className="text-gradient-gold italic">one studio</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Eight specialized services that work together to build a coherent, premium brand presence
              for your school, college or coaching institute.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 space-y-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <div className="group grid md:grid-cols-12 gap-8 rounded-3xl border border-border bg-card p-8 md:p-10 hover:border-gold/50 hover:shadow-elegant transition-all">
                <div className="md:col-span-4">
                  <div className="h-14 w-14 rounded-2xl bg-gold-gradient grid place-items-center text-navy-deep shadow-glow">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div className="font-display text-3xl mt-5 text-navy-deep">{s.title}</div>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.desc}</p>
                </div>
                <div className="md:col-span-5">
                  <div className="text-xs uppercase tracking-widest text-navy mb-4">Deliverables</div>
                  <ul className="space-y-3">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm">
                        <span className="mt-0.5 h-5 w-5 rounded-full bg-gold/15 grid place-items-center text-navy-deep flex-shrink-0">
                          <Check className="h-3 w-3" />
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-3 flex md:flex-col md:items-end md:justify-between gap-4">
                  {/*Comming soon  
                  <Link to="/pricing" className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-medium hover:bg-navy hover:text-primary-foreground transition-colors">
                    See pricing
                  </Link>
                  */}
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-navy text-primary-foreground px-5 py-3 text-sm font-medium hover:bg-navy-deep transition-colors">
                    Enquire <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <SectionHeader eyebrow="Not sure where to start?" title="We'll design a custom package for you" />
      <div className="text-center mt-8 pb-24">
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold-gradient text-navy-deep px-7 py-4 text-sm font-semibold shadow-glow hover:scale-[1.02] transition-transform">
          <Sparkles className="h-4 w-4" /> Book a free strategy call
        </Link>
      </div>
    </>
  );
}
