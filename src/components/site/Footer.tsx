import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-primary-foreground mt-24">
      <div className="absolute inset-0 grain opacity-50" />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-4 gap-12">
        <div className="lg:col-span-2 max-w-md">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-10 w-10 rounded-xl overflow-hidden grid place-items-center">
            <img src={logo} alt="Edicast logo" className="h-full w-full object-contain" />
            </div>

            <div className="font-display text-2xl">Edicast</div>
          </div>
          <p className="text-primary-foreground/70 leading-relaxed">
            A digital media studio crafting cinematic stories, social presence, and brand identity for India's
            most ambitious schools, colleges and coaching institutes.
          </p>
          <div className="flex gap-3 mt-6">
          <a
            href="https://www.instagram.com/_edicast?igsh=MTJpdXVuYm5kYnBuZA=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="h-10 w-10 grid place-items-center rounded-full glass hover:bg-gold hover:text-navy-deep transition-colors"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="https://www.facebook.com/share/1EQ7XCw4bV/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="h-10 w-10 grid place-items-center rounded-full glass hover:bg-gold hover:text-navy-deep transition-colors"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=edicastservices@gmail.com" target="_blank"
            aria-label="Email"
            className="h-10 w-10 grid place-items-center rounded-full glass hover:bg-gold hover:text-navy-deep transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        </div>

        <div>
          <div className="font-display text-lg mb-5 text-gold">Explore</div>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-gold">Portfolio</Link></li>
            {/*Soon<li><Link to="/pricing" className="hover:text-gold">Pricing</Link></li>*/}
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        
        <div>
          <div className="font-display text-lg mb-5 text-gold">Get in touch</div>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5 text-gold" /> edicastservices@edicast.in</li>
            <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-0.5 text-gold" /> +91 79767 774213</li>
            <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold" /> vadodara · Gujrat </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/50">
          <div>© {new Date().getFullYear()} Edicast Media. All rights reserved.</div>
          <div>Crafted for educators who care about how their story is told.</div>
        </div>
      </div>
    </footer>
  );
}
