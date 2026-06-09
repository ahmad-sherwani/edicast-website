import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Target, Eye, Heart, Sparkles, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/_site/about")({
  head: () => ({
    meta: [
      { title: "About Edicast — A creative team that lives inside India's classrooms" },
      { name: "description", content: "Our story, mission and the team behind Edicast — India's premium digital media studio for educational institutions." },
    ],
  }),
  component: About,
});

const values = [
  { icon: Heart, title: "Care for craft", desc: "Every frame, caption and pixel goes through a senior editor." },
  { icon: Target, title: "Outcome first", desc: "Our work is measured by admissions, reach and reputation." },
  { icon: Eye, title: "Honest storytelling", desc: "We capture real campus moments — never staged stock photos." },
  { icon: Sparkles, title: "Respect for institutions", desc: "We treat your brand like it's our own legacy." },
];

/*const timeline = [
  { year: "2019", title: "Edicast founded", desc: "Started with a single school in Mumbai and a borrowed camera." },
  { year: "2021", title: "First 25 schools", desc: "Expanded across Maharashtra and Gujarat with a 6-person team." },
  { year: "2023", title: "Reels studio launched", desc: "Built India's first short-form studio dedicated to education." },
  { year: "2025", title: "120+ institutions", desc: "Schools, colleges, coaching brands and universities across India." },
];
*/
const team = [
  { name: "Ahmad Sherwani", role: "Co-Founder & Creative Director" },
  { name: "Rishav Modi", role: "Co-Founder & Head of Media team" },
];

function About() {
  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary border border-border px-3 py-1 text-xs uppercase tracking-widest mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> About Edicast
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] text-navy-deep">
              A studio that lives inside <span className="text-gradient-gold italic">classrooms</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              We don't shoot weddings, products or fashion. We shoot education — and we've been doing it
              long enough to know what makes a parent stop, read and inquire.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10">
          <Reveal>
            <div className="rounded-3xl bg-navy text-primary-foreground p-10 h-full">
              <div className="text-xs uppercase tracking-widest text-gold mb-3">Our mission</div>
              <h3 className="font-display text-3xl leading-tight">To make every educational institution feel as iconic online as it is in real life.</h3>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-secondary p-10 h-full">
              <div className="text-xs uppercase tracking-widest text-navy mb-3">Our vision</div>
              <h3 className="font-display text-3xl leading-tight text-navy-deep">A future where students choose a school because of the story it tells, not just the rankings.</h3>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="What we stand for" title="Our core values" />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="rounded-3xl border border-border bg-card p-7 h-full hover:border-gold/50 transition-colors">
                  <div className="h-11 w-11 rounded-2xl bg-gold-gradient grid place-items-center text-navy-deep">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <div className="font-display text-xl mt-5">{v.title}</div>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE
      <section className="py-20 bg-secondary/50">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader eyebrow="Our journey" title="Six years of growth" />
          <div className="mt-16 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold to-transparent" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.08}>
                  <div className={`relative grid md:grid-cols-2 gap-8 items-center ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
                    <div className="md:text-right md:pr-12 pl-12 md:pl-0">
                      <div className="text-gradient-gold font-display text-5xl">{t.year}</div>
                      <div className="font-display text-2xl mt-2 text-navy-deep">{t.title}</div>
                      <p className="text-sm text-muted-foreground mt-2 max-w-sm md:ml-auto">{t.desc}</p>
                    </div>
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-gold-gradient shadow-glow" />
                    <div />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
        */}
      {/* TEAM */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="The team" title="People behind the lens" />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.05}>
                <div className="group rounded-3xl overflow-hidden border border-border bg-card">
                  <div className="aspect-[4/5] bg-gradient-to-br from-navy to-navy-deep relative grid place-items-center">
                    <div className="font-display text-6xl text-gold/50">{m.name.split(" ").map(n=>n[0]).join("")}</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="font-display text-xl text-navy-deep">{m.name}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{m.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-navy text-primary-foreground px-7 py-4 text-sm font-semibold hover:bg-navy-deep transition-colors">
            Work with our team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
