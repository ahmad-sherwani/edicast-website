import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Camera, Video, Megaphone, Palette, Calendar, PenTool, Share2, Sparkles,
  ArrowUpRight, Star, GraduationCap, Award, Clock, Heart, Rocket, Wallet,
  ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero-edicast.jpg";
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
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { StatCounter } from "@/components/site/StatCounter";

export const Route = createFileRoute("/_site/")({
  head: () => ({
    meta: [
      { title: "Edicast — Premium Digital Media for Schools, Colleges & Coaching Institutes" },
      { name: "description", content: "Edicast crafts cinematic photography, reels, social media and branding for India's leading educational institutions. Storytelling that fills seats." },
      { property: "og:title", content: "Edicast — Education's Digital Storytelling Studio" },
      { property: "og:description", content: "Photography, videography, social media management and branding built for schools, colleges and coaching institutes." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Share2, title: "Social Media Management", desc: "End-to-end content calendars, community building and growth strategy." },
  { icon: Camera, title: "Photography", desc: "Campus, event, faculty and student portrait photography." },
  { icon: Video, title: "Videography", desc: "Cinematic admissions films, tours and faculty interviews." },
  { icon: Sparkles, title: "Reels Creation", desc: "Scroll-stopping short-form content tuned for Instagram & YouTube." },


  
  /* soon { icon: Palette, title: "Graphic Designing", desc: "Posters, prospectuses, hoardings and digital creatives." },
  { icon: Megaphone, title: "Branding", desc: "Logos, identity systems and brand guidelines that earn trust." },
  { icon: Calendar, title: "Event Coverage", desc: "Annual day, sports day, graduations — captured beautifully." },
  { icon: PenTool, title: "Content Strategy", desc: "Yearly calendars built around your academic milestones." },*/
];

const whys = [
  { icon: GraduationCap, title: "Education Industry Expertise", desc: "We speak the language of principals, trustees and parents." },
  { icon: Award, title: "Professional Team", desc: "Cinematographers, designers and strategists under one roof." },
  { icon: Clock, title: "Fast Delivery", desc: "Reels in 72 hours. Event galleries in a week." },
  { icon: Heart, title: "Creative Storytelling", desc: "Every frame tells your institution's character." },
  { icon: Rocket, title: "Result Driven", desc: "We measure reach, leads and admissions impact." },
  { icon: Wallet, title: "Affordable Packages", desc: "Tiered plans that scale with your calendar." },
];

const portfolio = [
  { img: p1, title: "Annual Convocation Film", cat: "Videography", span: "row-span-2" },
  { img: p2, title: "Sports Day Coverage", cat: "Photography" },
  { img: p3, title: "Brand Identity System", cat: "Branding" },
  { img: p4, title: "Campus Reels Campaign", cat: "Reels", span: "row-span-2" },
  { img: p5, title: "", cat: "Photography" },
  { img: p6, title: "Cultural Fest 2025", cat: "Event" },
  { img: p7, title: "", cat: "Photography" },
  { img: p8, title: "", cat: "Photography" },
  { img: p9, title: "", cat: "Photography" },
  { img: p10, title: "", cat: "Photography" },
  { img: p11, title: "", cat: "Photography" },
];

const testimonials = [
  { name: "Dr. Anjali Mehra", role: "Principal · Greenfield International School", quote: "Edicast captured the soul of our campus. Our admissions inquiries grew 3× in one season." },
  { name: "Rajeev Sinha", role: "Trustee · Vidya Trust", quote: "Professional, punctual and genuinely creative. They understand what parents actually look for." },
  { name: "Pooja Khanna", role: "Director · Apex Coaching", quote: "Our reels hit 1.2M views in the first month. The team gets short-form like no one else." },
];

const stats = [
  { v: 120, s: "+", l: "Schools Served" },
  { v: 480, s: "+", l: "Projects Delivered" },
  { v: 2400, s: "+", l: "Reels Created" },
  { v: 95000, s: "+", l: "Photos Shipped" },
  { v: 18, s: "M+", l: "Social Reach Generated" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-24 pt-32 pb-24 overflow-hidden bg-hero text-primary-foreground">
        <div className="absolute inset-0 grain opacity-40" />
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-gold/20 blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-10 right-0 h-[28rem] w-[28rem] rounded-full bg-primary/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center pt-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs tracking-wider uppercase mb-6"
            >
              <Star className="h-3.5 w-3.5 text-gold fill-gold" />
              Trusted by 120+ Indian institutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight"
            >
              Transforming education through{" "}
              <span className="text-gradient-gold italic">digital storytelling</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 max-w-xl text-lg text-primary-foreground/75 leading-relaxed"
            >
              Cinematic photography, reels, social media management and branding —
              purpose-built for schools, colleges, universities and coaching institutes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient text-navy-deep px-6 py-3.5 text-sm font-semibold hover:scale-[1.02] transition-transform shadow-glow">
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold hover:bg-white/15 transition-colors">
                Book Consultation
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground/80 hover:text-gold transition-colors">
                View Portfolio <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elegant border border-white/10">
              <img src={heroImg} alt="Edicast school photography hero" className="absolute inset-0 h-full w-full object-cover" width={1600} height={1200} />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
            </div>



            {/*<motion.div
              animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-10 glass rounded-2xl p-4 w-44 shadow-elegant"
            >
              <div className="text-[10px] uppercase tracking-widest text-gold mb-1">Reach this month</div>
              <div className="font-display text-3xl">2.4M</div>
              <div className="text-xs text-primary-foreground/70">+148% MoM</div>
            </motion.div>*/}



            <motion.div
              animate={{ y: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-8 glass rounded-2xl p-4 w-52 shadow-elegant"
            >
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_,i)=>(<Star key={i} className="h-3.5 w-3.5 text-gold fill-gold" />))}
              </div>
              <div className="text-sm text-primary-foreground/90 leading-snug">"Best decision we made for admissions."</div>
              <div className="text-[10px] uppercase tracking-widest text-primary-foreground/50 mt-2"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>



      {/* STATS 
      <section className="relative -mt-12 z-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="glass-light rounded-3xl shadow-elegant px-6 md:px-10 py-8 grid grid-cols-2 md:grid-cols-5 gap-6">
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.05} className="text-center md:text-left">
                <div className="font-display text-4xl md:text-5xl text-navy-deep">
                  <StatCounter to={s.v} suffix={s.s} />
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      */}


      {/* SERVICES */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="What we do"
            title="A full creative department for your institution"
            subtitle="One team, one vision — every asset your marketing, admissions and events need across the year."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="group h-full relative rounded-3xl border border-border bg-card p-6 hover:border-gold/50 hover:-translate-y-1 transition-all duration-500 shadow-sm hover:shadow-elegant">
                  <div className="h-12 w-12 rounded-2xl bg-secondary grid place-items-center text-navy group-hover:bg-gold-gradient group-hover:text-navy-deep transition-colors">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="font-display text-xl mt-5">{s.title}</div>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-1 text-xs font-medium text-navy mt-5 group-hover:text-gold transition-colors">
                    Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="relative py-24 md:py-32 bg-navy text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 grain opacity-30" />
        <div className="absolute top-1/2 -translate-y-1/2 -left-40 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeader
            invert
            eyebrow="Why Edicast"
            title="Built for educators, not generic clients"
            subtitle="We're not a generic agency. We've spent years inside school corridors, sports fields and auditoriums."
          />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whys.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.05}>
                <div className="glass rounded-3xl p-7 h-full hover:bg-white/10 transition-colors">
                  <div className="h-11 w-11 rounded-2xl bg-gold-gradient grid place-items-center text-navy-deep">
                    <w.icon className="h-5 w-5" />
                  </div>
                  <div className="font-display text-2xl mt-5">{w.title}</div>
                  <p className="text-sm text-primary-foreground/70 mt-2 leading-relaxed">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeader align="left" eyebrow="Recent work" title="Stories that move admissions" />
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold">
              See all projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4 auto-rows-[14rem] md:auto-rows-[18rem]">
            {portfolio.map((p, i) => (
              <Reveal key={i} delay={i * 0.04} className={p.span ?? ""}>
                <div className="group relative h-full overflow-hidden rounded-3xl shadow-sm hover:shadow-elegant transition-shadow">
                  <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5 text-primary-foreground">
                    <div className="text-[10px] uppercase tracking-widest text-gold mb-1">{p.cat}</div>
                    <div className="font-display text-xl leading-tight">{p.title}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>



      {/* TESTIMONIALS 
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Trusted voices" title="What educators say about us" />
          <div className="mt-16 grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-card border border-border p-8 shadow-sm hover:shadow-elegant transition-shadow">
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 text-gold fill-gold" />)}
                  </div>
                  <p className="font-display text-xl leading-snug text-navy-deep">"{t.quote}"</p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      */}





      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-navy text-primary-foreground p-10 md:p-16 shadow-elegant">
            <div className="absolute inset-0 grain opacity-40" />
            <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-gold/30 blur-3xl" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-widest mb-5">
                  <Sparkles className="h-3.5 w-3.5 text-gold" /> Free 30-min consultation
                </div>
                <h3 className="font-display text-4xl md:text-5xl leading-tight">
                  Let's tell your institution's story <span className="text-gradient-gold italic">beautifully</span>.
                </h3>
                <p className="mt-4 text-primary-foreground/70">
                  Share your goals, calendar and audience. We'll come back with a custom proposal in 48 hours.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold-gradient text-navy-deep px-6 py-3.5 text-sm font-semibold hover:scale-[1.02] transition-transform shadow-glow">
                  Book consultation <ArrowRight className="h-4 w-4" />
                </Link>


                {/* comming soon 
                <Link to="/pricing" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold hover:bg-white/15">
                  View pricing
                </Link>
                */}

                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
