import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Phone, MapPin, MessageCircle, Send, Instagram, Youtube, Linkedin, Facebook } from "lucide-react";
import { toast } from "sonner";
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import emailjs from "@emailjs/browser";

export const Route = createFileRoute("/_site/contact")({
  head: () => ({
    meta: [
      { title: "Contact Edicast — Let's tell your institution's story" },
      { name: "description", content: "Book a free consultation with Edicast. WhatsApp, email or fill the form — we respond within 24 hours." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [loading, setLoading] = useState(false);
  const services = ["Social Media Management","Reels Creation", "Other"];

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setLoading(true);

  const form = e.target as HTMLFormElement;

  const formData = new FormData(form);

try {
  await addDoc(collection(db, "inquiries"), {
    name: formData.get("name"),
    institution: formData.get("institution"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    service: formData.get("service"),
    message: formData.get("message"),
    createdAt: new Date(),
  });

  await emailjs.send(
    "service_np11bqa",
    "template_yhpoxsr",
    {
      name: formData.get("name"),
      institution: formData.get("institution"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message"),
      time: new Date().toLocaleString(),
    },
    "5YgDRnf6reNjg5aul"
  );

  toast.success(
    "Thanks! We'll get back within 24 hours."
  );

  form.reset();
} catch (error) {
    console.error(error);

    toast.error(
      "Failed to send inquiry."
    );
  }

  setLoading(false);
};

  return (
    <>
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary border border-border px-3 py-1 text-xs uppercase tracking-widest mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Contact
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] text-navy-deep">
              Let's start a <span className="text-gradient-gold italic">conversation</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Share a few details about your institution and goals. We'll respond within 24 hours with a custom proposal.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-8">
          {/* FORM */}
          <Reveal className="lg:col-span-3">
            <form onSubmit={onSubmit} className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Your name" name="name" placeholder="Aarav Sharma" required />
                <Field label="Institution name" name="institution" placeholder="Greenfield International" required />
                <Field label="Phone number" name="phone" type="tel" placeholder="+91 79767 74213" required />
                <Field label="Email" name="email" type="email" placeholder="principal@school.in" required />
                <div className="sm:col-span-2">
                  <Label>Service interested in</Label>
                  <select name="service" required className="w-full mt-2 rounded-xl border border-border bg-background px-4 py-3 text-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none">
                    <option value="">Select a service</option>
                    {services.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <Label>Message</Label>
                  <textarea name="message" rows={5} required placeholder="Tell us about your institution and what you're looking for…" className="w-full mt-2 rounded-xl border border-border bg-background px-4 py-3 text-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none resize-none" />
                </div>
              </div>
              <button
                disabled={loading}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-navy text-primary-foreground px-7 py-4 text-sm font-semibold hover:bg-navy-deep transition-colors disabled:opacity-60"
              >
                {loading ? "Sending…" : <>Send inquiry <Send className="h-4 w-4" /></>}
              </button>
            </form>
          </Reveal>

          {/* CONTACT INFO */}
          <Reveal delay={0.1} className="lg:col-span-2 space-y-5">
            <div className="rounded-3xl bg-navy text-primary-foreground p-8 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gold/20 blur-3xl" />
              <div className="relative space-y-5">
                <div className="text-xs uppercase tracking-widest text-gold">Reach us directly</div>
                <ContactItem icon={Phone} label="Call us" value="+91 7976774213, 8873980237" />
                <ContactItem icon={MessageCircle} label="WhatsApp" value="+91 7976774213" href="https://wa.me/917976774213" />
                <ContactItem icon={Mail} label="Email" value="edicastservices@edicast.com" href="https://mail.google.com/mail/?view=cm&fs=1&to=edicastservices@gmail.com" target="_blank" />
                <ContactItem icon={MapPin} label="Studio" value="Vadodara · Gujarat · Remote" />
                <div className="flex gap-3 pt-4">
                  {[Instagram, Facebook, Mail].map((Icon, i) => (
                    <a key={i} href="#" className="h-10 w-10 grid place-items-center rounded-full glass hover:bg-gold hover:text-navy-deep transition-colors">
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>



           { /*<div className="rounded-3xl overflow-hidden border border-border h-64">
              <iframe
                title="Edicast studio location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=72.82%2C19.04%2C72.90%2C19.10&amp;layer=mapnik"
                className="h-full w-full"
                loading="lazy"
              />
            </div>*/}


            
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs uppercase tracking-widest text-navy font-medium">{children}</label>;
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        {...props}
        className="w-full mt-2 rounded-xl border border-border bg-background px-4 py-3 text-sm focus:ring-2 focus:ring-gold focus:border-gold outline-none"
      />
    </div>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="h-10 w-10 rounded-xl bg-gold-gradient grid place-items-center text-navy-deep flex-shrink-0">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-primary-foreground/60">{label}</div>
        <div className="text-sm font-medium mt-0.5">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-80 transition-opacity">{content}</a> : <div>{content}</div>;
}
