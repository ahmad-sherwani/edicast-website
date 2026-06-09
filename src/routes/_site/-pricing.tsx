/* import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Check, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_site/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Silver, Gold & Platinum Plans | Edicast" },
      { name: "description", content: "Transparent monthly retainer plans for schools, colleges and coaching institutes. Silver, Gold and Platinum tiers with photography, reels, posts and event coverage." },
    ],
  }),
  component: Pricing,
});

const plans = [
  {
    name: "Silver",
    price: "₹35,000",
    sub: "per month",
    desc: "Perfect starter plan for small schools building their online presence.",
    features: ["8 social media posts", "4 reels per month", "1 photography session", "Basic analytics report", "Email support"],
    excluded: ["Video coverage", "Event coverage", "Priority support"],
  },
  {
    name: "Gold",
    price: "₹75,000",
    sub: "per month",
    popular: true,
    desc: "Our most popular plan — built for growing institutions with monthly events.",
    features: ["16 social media posts", "10 reels per month", "2 photography sessions", "1 event coverage / month", "Monthly analytics + strategy", "WhatsApp support"],
    excluded: ["Brand identity refresh"],
  },
  {
    name: "Platinum",
    price: "₹1,50,000",
    sub: "per month",
    desc: "Full-service partnership for universities and large campus groups.",
    features: ["Unlimited posts", "20+ reels per month", "Weekly photo sessions", "Unlimited event coverage", "Dedicated brand manager", "Quarterly brand audits", "Priority 24/7 support"],
    excluded: [],
  },
];

const compareRows: [string, string, string, string][] = [
  ["Social Media Posts", "8/mo", "16/mo", "Unlimited"],
  ["Reels Production", "4/mo", "10/mo", "20+/mo"],
  ["Photography Sessions", "1/mo", "2/mo", "Weekly"],
  ["Video Coverage", "—", "1 event/mo", "Unlimited"],
  ["Dedicated Manager", "—", "Shared", "Dedicated"],
  ["Analytics Reports", "Basic", "Monthly + Strategy", "Weekly + Quarterly Audits"],
  ["Priority Support", "Email", "WhatsApp", "24/7 Dedicated"],
];

function Pricing() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary border border-border px-3 py-1 text-xs uppercase tracking-widest mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Subscription Plans
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] text-navy-deep">
              Transparent pricing. <span className="text-gradient-gold italic">Premium delivery.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Monthly retainers designed around your academic calendar. Cancel anytime — but our clients rarely do.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div className={cn(
                "relative h-full rounded-[2rem] p-8 md:p-10 transition-all hover:-translate-y-2 duration-500",
                p.popular
                  ? "bg-navy text-primary-foreground shadow-elegant border-2 border-gold"
                  : "bg-card border border-border hover:border-navy/50 hover:shadow-elegant"
              )}>
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gold-gradient text-navy-deep px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest shadow-glow">
                    <Sparkles className="h-3 w-3" /> Most Popular
                  </div>
                )}
                <div className={cn("text-xs uppercase tracking-widest mb-2", p.popular ? "text-gold" : "text-navy")}>{p.name} Plan</div>
                <div className="flex items-baseline gap-2">
                  <div className="font-display text-5xl">{p.price}</div>
                  <div className={cn("text-sm", p.popular ? "text-primary-foreground/60" : "text-muted-foreground")}>/{p.sub}</div>
                </div>
                <p className={cn("text-sm mt-3 leading-relaxed", p.popular ? "text-primary-foreground/70" : "text-muted-foreground")}>{p.desc}</p>

                <Link
                  to="/contact"
                  className={cn(
                    "mt-7 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-all",
                    p.popular
                      ? "bg-gold-gradient text-navy-deep hover:scale-[1.02] shadow-glow"
                      : "bg-navy text-primary-foreground hover:bg-navy-deep"
                  )}
                >
                  Get started
                </Link>

                <div className={cn("mt-8 pt-8 border-t space-y-3", p.popular ? "border-white/10" : "border-border")}>
                  {p.features.map((f) => (
                    <div key={f} className="flex items-start gap-3 text-sm">
                      <span className={cn("mt-0.5 h-5 w-5 rounded-full grid place-items-center flex-shrink-0", p.popular ? "bg-gold/20 text-gold" : "bg-gold/15 text-navy-deep")}>
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </div>
                  ))}
                  {p.excluded.map((f) => (
                    <div key={f} className={cn("flex items-start gap-3 text-sm opacity-50 line-through", p.popular ? "text-primary-foreground/60" : "text-muted-foreground")}>
                      <span className="mt-0.5 h-5 w-5 rounded-full bg-muted grid place-items-center flex-shrink-0">
                        <X className="h-3 w-3" />
                      </span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
*/

      {/* COMPARE 
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader eyebrow="Compare plans" title="Side-by-side breakdown" />
          <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card">
            <div className="grid grid-cols-4 px-6 py-5 bg-secondary text-xs uppercase tracking-widest font-medium">
              <div>Feature</div>
              <div className="text-center">Silver</div>
              <div className="text-center text-navy font-bold">Gold</div>
              <div className="text-center">Platinum</div>
            </div>
            {compareRows.map((row, i) => (
              <div key={i} className="grid grid-cols-4 px-6 py-4 text-sm border-t border-border">
                <div className="font-medium">{row[0]}</div>
                <div className="text-center text-muted-foreground">{row[1]}</div>
                <div className="text-center font-medium text-navy-deep">{row[2]}</div>
                <div className="text-center text-muted-foreground">{row[3]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center rounded-[2rem] bg-navy text-primary-foreground p-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative">
            <h3 className="font-display text-3xl md:text-4xl">Need something custom?</h3>
            <p className="mt-3 text-primary-foreground/70 max-w-xl mx-auto">Universities, multi-campus groups and one-time projects — we'll build a proposal that fits.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-gradient text-navy-deep px-7 py-4 text-sm font-semibold shadow-glow hover:scale-[1.02] transition-transform">
              Contact sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
*/}