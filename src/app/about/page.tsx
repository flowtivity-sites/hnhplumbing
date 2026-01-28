import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | H&H Plumbing Gold Coast",
  description: "Learn about H&H Plumbing - your trusted local plumbers in Currumbin serving Gold Coast & Northern NSW for over 15 years. Licensed, insured, and accredited.",
};

export default function AboutPage() {
  const values = [
    { title: "Reliability", description: "We show up on time, every time. When you need a plumber, you can count on us." },
    { title: "Quality", description: "We use the best materials and techniques to ensure lasting results." },
    { title: "Honesty", description: "Transparent pricing with no hidden fees. We tell it like it is." },
    { title: "Expertise", description: "Fully licensed plumbers with specialist accreditations in skylights and solar." },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/Plumbing_Van_and_Trailer_7C_H_26H_Plumbing_-547w.jpg" alt="H&H Plumbing Team" fill className="object-cover" />
          <div className="absolute inset-0 bg-[var(--color-primary)]/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="reveal inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] rounded-full text-sm font-semibold text-[var(--color-text)] mb-6">Our Story</span>
            <h1 className="reveal reveal-delay-1 font-[var(--font-display)] text-5xl md:text-6xl text-white mb-6">ABOUT H&H PLUMBING</h1>
            <p className="reveal reveal-delay-2 text-xl text-white/80">Your trusted local plumbers serving the Gold Coast and Northern NSW for over 15 years.</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <span className="inline-block text-[var(--color-primary)] font-semibold text-sm tracking-wider uppercase mb-4">Who We Are</span>
              <h2 className="font-[var(--font-display)] text-4xl text-[var(--color-text)] mb-6 decorative-line">YOUR LOCAL PLUMBING EXPERTS</h2>
              <div className="space-y-4 text-[var(--color-text-muted)] text-lg mt-8">
                <p>H&H Plumbers are based in Currumbin 4223 and provide blocked drains, solar hot water & skylights installation services in the Currumbin, Tugun, Gold Coast QLD and Northern Rivers NSW regions.</p>
                <p>We deliver reliable, quality blocked drains, solar hot water & skylight installation services. We also offer complete renovations, kitchen and bathroom services, and cater to all your plumbing needs.</p>
                <p>With over 15 years of experience, we&apos;ve built a reputation for excellence, reliability, and honest service.</p>
              </div>
            </div>

            <div className="reveal reveal-delay-2">
              <div className="relative rounded-2xl overflow-hidden">
                <Image src="/images/Solar_Hot_Water_Installation_7C_Gold_Coast_Northern_Rivers_7C_HnH_Plumbing-540w.jpg" alt="Solar Hot Water Installation" width={600} height={450} className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-[var(--color-surface-dark)]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="reveal inline-block text-[var(--color-primary)] font-semibold text-sm tracking-wider uppercase mb-4">Our Values</span>
            <h2 className="reveal reveal-delay-1 font-[var(--font-display)] text-4xl text-[var(--color-text)] decorative-line decorative-line-center">WHAT WE STAND FOR</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <div key={index} className="reveal card bg-white p-8 text-center" style={{ animationDelay: `${0.1 * index}s` }}>
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)] text-white flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-[var(--font-display)] text-xl text-[var(--color-text)] mb-3">{value.title.toUpperCase()}</h3>
                <p className="text-[var(--color-text-muted)]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="reveal inline-block text-[var(--color-primary)] font-semibold text-sm tracking-wider uppercase mb-4">Credentials</span>
            <h2 className="reveal reveal-delay-1 font-[var(--font-display)] text-4xl text-[var(--color-text)] decorative-line decorative-line-center">ACCREDITATIONS</h2>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
            <div className="reveal bg-white p-6 rounded-xl shadow-lg">
              <Image src="/images/qbcc-logo-500w.jpg" alt="QBCC Licensed" width={120} height={80} className="h-20 w-auto" />
            </div>
            <div className="reveal reveal-delay-1 bg-white p-6 rounded-xl shadow-lg">
              <Image src="/images/velux_logo-1920w.png" alt="Velux Accredited Installer" width={120} height={80} className="h-20 w-auto" />
            </div>
            <div className="reveal reveal-delay-2 bg-white p-6 rounded-xl shadow-lg">
              <Image src="/images/NSW-fair-trading-certified-logo_7C_H_26H_Plumbing-500w.png" alt="NSW Fair Trading" width={120} height={80} className="h-20 w-auto" />
            </div>
            <div className="reveal reveal-delay-3 bg-white p-6 rounded-xl shadow-lg">
              <Image src="/images/Apricus_Solar_Hot_Water_System_7C_Gold_Coast_Northern_Rivers_7C_HnH_Plumbing.png-1920w.png" alt="Apricus Accredited" width={120} height={80} className="h-20 w-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section bg-[var(--color-primary)] grain-texture">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal text-white">
              <span className="inline-block text-[var(--color-accent)] font-semibold text-sm tracking-wider uppercase mb-4">Where We Work</span>
              <h2 className="font-[var(--font-display)] text-4xl mb-6">SERVICE AREAS</h2>
              <p className="text-white/80 text-lg mb-8">Based in Currumbin, we proudly service a wide area across the Gold Coast and Northern NSW regions.</p>
              <div className="grid grid-cols-2 gap-4">
                {["Currumbin", "Tugun", "Palm Beach", "Burleigh Heads", "Gold Coast", "Tweed Heads", "Northern Rivers", "Northern NSW"].map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal reveal-delay-2">
              <div className="bg-white rounded-2xl p-8">
                <h3 className="font-[var(--font-display)] text-2xl text-[var(--color-text)] mb-4">GET IN TOUCH</h3>
                <p className="text-[var(--color-text-muted)] mb-6">Ready to discuss your plumbing needs? Contact us today for a free, no-obligation quote.</p>
                <a href="tel:0401662907" className="btn btn-primary w-full justify-center mb-4">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0401 662 907
                </a>
                <Link href="/contact" className="btn btn-outline w-full justify-center">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
