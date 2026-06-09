import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  invert?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "")}>
      {eyebrow && (
        <Reveal>
          <div className={cn(
            "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium tracking-wider uppercase mb-5",
            invert ? "bg-white/10 text-gold border border-white/10" : "bg-secondary text-navy border border-border"
          )}>
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className={cn(
          "font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]",
          invert ? "text-primary-foreground" : "text-navy-deep"
        )}>
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className={cn(
            "mt-5 text-lg leading-relaxed",
            invert ? "text-primary-foreground/70" : "text-muted-foreground"
          )}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
