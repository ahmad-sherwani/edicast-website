import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  /*{ to: "/pricing", label: "Pricing" },*/
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-500",
      scrolled ? "py-3" : "py-5"
    )}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className={cn(
          "flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-500",
          scrolled ? "glass-light shadow-elegant" : "bg-transparent"
        )}>
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative h-9 w-9 rounded-xl overflow-hidden grid place-items-center shadow-glow">
            <img src={logo} alt="Edicast logo" className="h-full w-full object-contain" />
            </div>

            <div className="leading-tight">
              <div className="font-display text-xl font-semibold tracking-tight">Edicast</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Education Media</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => {
              const active = location.pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full transition-colors relative",
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {l.label}
                  {active && <span className="absolute inset-x-4 -bottom-0.5 h-px bg-gold-gradient" />}
                </Link>
              );
            })}
          </nav>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-navy text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-navy-deep transition-colors"
          >
            Book Consultation
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-glow" />
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-10 w-10 grid place-items-center rounded-xl glass-light"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass-light rounded-2xl p-3 shadow-elegant animate-fade-in">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="block px-4 py-3 rounded-xl text-sm font-medium hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block mt-2 text-center bg-navy text-primary-foreground rounded-xl px-4 py-3 text-sm font-medium"
            >
              Book Consultation
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
