import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck,
  Sparkles,
  Activity,
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import { ActionGrid, QrSection } from "@/components/ecard/actions";
import { ProductsSection } from "@/components/ecard/products";
import {
  profile,
  heroSlides,
  about,
  services,
  whyUs,
  presence,
  founderBio,
} from "@/lib/ecard-data";

const TITLE = "Kishan Hirpara | Founder | Enreach Global Inc.";
const DESC =
  "Kishan Hirpara, Founder of Enreach Global Inc. — Global metal trading, aluminium, copper and brass scrap sourcing.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: "Kishan Hirpara | Enreach Global Inc." },
      {
        property: "og:description",
        content: "Connect with Kishan Hirpara, Founder of Enreach Global Inc.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.title,
          telephone: profile.phoneDisplay,
          email: `mailto:${profile.email}`,
          url: profile.website,
          worksFor: {
            "@type": "Organization",
            name: profile.company,
            description: profile.description,
            url: profile.website,
            address: { "@type": "PostalAddress", addressCountry: "Canada" },
          },
        }),
      },
    ],
  }),
  component: ECard,
});

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6 text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground">{title}</h2>
      <span className="mx-auto mt-4 block h-px w-20 bg-gold" />
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function ECard() {
  return (
    <main className="mx-auto w-full max-w-md px-5 pb-16 pt-5 sm:max-w-lg">
      {/* Hero / profile */}
      <section className="surface reveal overflow-hidden">
        <div className="relative h-32 w-full overflow-hidden">
          <img
            src={heroSlides[0]!.src}
            alt={heroSlides[0]!.alt}
            width={1200}
            height={500}
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/55" />
        </div>

        <div className="px-6 pb-7">
          <div className="-mt-8 flex justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-wider text-primary shadow-soft">
              <BadgeCheck className="size-3.5 text-accent" aria-hidden="true" /> Verified
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-wider text-primary shadow-soft">
              <Sparkles className="size-3.5 text-gold" aria-hidden="true" /> Premium
            </span>
          </div>

          <img
            src={profile.logo}
            alt="Enreach Global — Scrap Trading & Exporting"
            width={1536}
            height={1024}
            className="mx-auto mt-5 h-auto w-[160px] max-w-full object-contain sm:w-[180px] lg:w-[200px]"
          />

          <h1 className="mt-4 text-center text-2xl font-bold uppercase leading-tight tracking-tight text-foreground">
            {profile.company}
          </h1>
          <p className="mt-2 text-center text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            {profile.tagline}
          </p>

          <div className="mt-6 flex justify-center">
            <img
              src={profile.photo}
              alt="Kishan Hirpara, Founder of Enreach Global Inc."
              width={828}
              height={828}
              className="size-32 rounded-full border-4 border-card object-cover shadow-card ring-2 ring-accent/60"
            />
          </div>

          <p className="mt-4 text-center font-display text-xl font-bold">{profile.name}</p>
          <p className="relative mt-1 text-center text-xs uppercase tracking-[0.24em] text-muted-foreground">
            {profile.title}
            <a
              href="https://www.linkedin.com/in/kishan-hirpara-66851918b"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute left-1/2 top-full mt-0.5 inline-flex min-h-6 -translate-x-1/2 cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-[#0A66C2]/20 bg-white px-2.5 text-[11px] font-medium normal-case tracking-normal text-[#0A66C2] transition-colors duration-200 hover:border-[#0A66C2]/60 hover:bg-[#F0F7FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A66C2]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-3.5 shrink-0"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </a>
          </p>
        </div>
      </section>

      <ActionGrid />

      {/* About */}
      <section className="mt-12">
        <SectionHeading eyebrow={about.eyebrow} title={about.heading} />
        <div className="surface p-6">
          <p className="text-sm leading-relaxed text-muted-foreground">{about.body}</p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {about.stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-secondary px-3 py-4 text-center">
                <p className="font-display text-xl font-bold text-primary">{s.value}</p>
                <p className="mt-1 text-[0.68rem] uppercase leading-snug tracking-wider text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mt-12">
        <SectionHeading
          eyebrow="Services"
          title="What we deliver"
          subtitle="Sourcing, documentation and export coordination for international metal trade."
        />
        <ul className="space-y-3">
          {services.map((s) => (
            <li key={s} className="surface flex items-center gap-3 px-4 py-3.5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-accent">
                <Activity className="size-4" aria-hidden="true" />
              </span>
              <span className="text-sm font-medium">{s}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Products */}
      <section className="mt-12">
        <SectionHeading
          eyebrow="Products"
          title="Product Categories"
          subtitle="Quality-focused aluminium and copper scrap grades for global industrial buyers."
        />
        <ProductsSection />
      </section>

      {/* Founder */}
      <section className="mt-12">
        <SectionHeading eyebrow="Leadership" title="Founder" />
        <div className="surface flex flex-col items-center gap-4 p-6 text-center">
          <img
            src={profile.photo}
            alt="Kishan Hirpara, Founder of Enreach Global Inc."
            loading="lazy"
            decoding="async"
            width={828}
            height={828}
            className="size-24 rounded-full object-cover shadow-soft"
          />
          <div>
            <h3 className="font-display text-lg font-bold">{profile.name}</h3>
            <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
              {profile.title}
            </p>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">{founderBio}</p>
        </div>
      </section>

      {/* Why Enreach Global */}
      <section className="mt-12">
        <SectionHeading eyebrow="Why Enreach Global" title="Built on trust and discipline" />
        <div className="space-y-3">
          {whyUs.map((w) => (
            <div key={w.title} className="surface p-5">
              <h3 className="font-sans text-sm font-semibold">{w.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Global presence */}
      <section className="mt-12">
        <SectionHeading eyebrow="Global Presence" title="Canadian roots, global reach" />
        <div className="surface p-6">
          <p className="flex items-center justify-center gap-2 text-sm font-medium">
            <MapPin className="size-4 text-accent" aria-hidden="true" />
            {profile.roots}
          </p>
          <div className="mt-5 space-y-4">
            {presence.map((p) => (
              <div key={p.title} className="rounded-2xl bg-secondary p-4">
                <h3 className="font-sans text-sm font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mt-12">
        <SectionHeading eyebrow="Contact" title="Get in touch" />
        <div className="surface divide-y divide-border">
          <a href={profile.phoneHref} className="flex items-center gap-3 px-5 py-4">
            <Phone className="size-4 shrink-0 text-accent" aria-hidden="true" />
            <span className="text-sm font-medium">{profile.phoneDisplay}</span>
          </a>
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 px-5 py-4">
            <Mail className="size-4 shrink-0 text-accent" aria-hidden="true" />
            <span className="break-all text-sm font-medium">{profile.email}</span>
          </a>
          <a
            href={profile.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-4"
          >
            <Globe className="size-4 shrink-0 text-accent" aria-hidden="true" />
            <span className="text-sm font-medium">{profile.websiteLabel}</span>
          </a>
          <p className="flex items-center gap-3 px-5 py-4">
            <MapPin className="size-4 shrink-0 text-accent" aria-hidden="true" />
            <span className="text-sm font-medium">{profile.location}</span>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12">
        <div className="surface bg-primary p-7 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground">Ready to Trade?</h2>
          <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/80">
            Connect with Enreach Global for aluminium, copper and brass scrap sourcing, export
            coordination and industrial trading opportunities.
          </p>
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Get In Touch
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* QR / Share */}
      <section className="mt-12">
        <SectionHeading eyebrow="Scan" title="Share this digital card" />
        <QrSection />
      </section>

      {/* Footer */}
      <footer className="mt-12 text-center">
        <img
          src={profile.logo}
          alt="Enreach Global — Scrap Trading & Exporting"
          loading="lazy"
          decoding="async"
          width={1536}
          height={1024}
          className="mx-auto h-auto w-[160px] max-w-full object-contain"
        />
        <p className="mt-3 font-display text-base font-bold">{profile.company}</p>
        <p className="mx-auto mt-2 max-w-xs text-xs leading-relaxed text-muted-foreground">
          {profile.description}
        </p>
        <a
          href={profile.website}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-xs font-medium text-primary underline underline-offset-4"
        >
          {profile.websiteLabel}
        </a>
        <p className="mt-4 text-sm text-muted-foreground">
          Designed and Developed by{" "}
          <a
            href="https://vynkcard.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline underline-offset-4"
          >
            Vynkcard
          </a>
        </p>
      </footer>
    </main>
  );
}
