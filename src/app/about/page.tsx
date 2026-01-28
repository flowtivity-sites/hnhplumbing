import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | H&H Plumbing Gold Coast",
  description: "Learn about H&H Plumbing - your trusted local plumbers in Currumbin serving Gold Coast & Northern NSW for over 15 years. Licensed, insured, and accredited.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Reliability",
      description: "We show up on time, every time. When you need a plumber, you can count on us.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Quality",
      description: "We use the best materials and techniques to ensure lasting results.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Honesty",
      description: "Transparent pricing with no hidden fees. We tell it like it is.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Expertise",
      description: "Fully licensed plumbers with specialist accreditations in skylights and solar.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
  ];

  const accreditations = [
    "Licensed Plumber QLD",
    "Accredited Velux Installer",
    "Accredited Apricus Installer",
    "Fully Insured",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-primary grain-texture" />
        <div className="absolute top-20 right-20 w-32 h-1 bg-[var(--color-accent)]" />
        <div className="absolute top-28 right-20 w-20 h-1 bg-white/30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="reveal inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] rounded-full text-sm font-semibold text-[var(--color-text)] mb-6">
              Our Story
            </span>
            <h1 className="reveal reveal-delay-1 font-[var(--font-display)] text-5xl md:text-6xl text-white mb-6">
              ABOUT H&H PLUMBING
            </h1>
            <p className="reveal reveal-delay-2 text-xl text-white/80">
              Your trusted local plumbers serving the Gold Coast and Northern NSW for over 15 years.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <span className="inline-block text-[var(--color-primary)] font-semibold text-sm tracking-wider uppercase mb-4">
                Who We Are
              </span>
              <h2 className="font-[var(--font-display)] text-4xl text-[var(--color-text)] mb-6 decorative-line">
                YOUR LOCAL PLUMBING EXPERTS
              </h2>
              <div className="space-y-4 text-[var(--color-text-muted)] text-lg mt-8">
                <p>
                  H&H Plumbers are based in Currumbin 4223 and provide blocked drains, solar hot water & skylights installation services in the Currumbin, Tugun, Gold Coast QLD and Northern Rivers NSW regions.
                </p>
                <p>
                  We deliver reliable, quality blocked drains, solar hot water & skylight installation services. We also offer complete renovations, kitchen and bathroom services, and cater to all your plumbing needs.
                </p>
                <p>
                  With over 15 years of experience, we&apos;ve built a reputation for excellence, reliability, and honest service. Whether it&apos;s a simple blocked drain or a complete bathroom renovation, we treat every job with the same level of care and professionalism.
                </p>
              </div>
            </div>

            <div className="reveal reveal-delay-2">
              <div className="relative">
                <div className="absolute inset-4 -right-4 -bottom-4 bg-[var(--color-accent)] rounded-2xl" />
                <div className="relative bg-[var(--color-primary)] rounded-2xl p-10 grain-texture">
                  <h3 className="font-[var(--font-display)] text-2xl text-white mb-8">
                    WHY CUSTOMERS CHOOSE US
                  </h3>
                  <div className="space-y-6">
                    {[
                      "15+ Years Local Experience",
                      "Licensed & Fully Insured",
                      "Transparent Upfront Pricing",
                      "Quality Workmanship Guaranteed",
                      "Fast Response Times",
                      "Specialist Accreditations",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-white">
                        <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-[var(--color-surface-dark)]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="reveal inline-block text-[var(--color-primary)] font-semibold text-sm tracking-wider uppercase mb-4">
              Our Values
            </span>
            <h2 className="reveal reveal-delay-1 font-[var(--font-display)] text-4xl text-[var(--color-text)] decorative-line decorative-line-center">
              WHAT WE STAND FOR
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="reveal card bg-white p-8 text-center"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)] text-white flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="font-[var(--font-display)] text-xl text-[var(--color-text)] mb-3">
                  {value.title.toUpperCase()}
                </h3>
                <p className="text-[var(--color-text-muted)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="reveal inline-block text-[var(--color-primary)] font-semibold text-sm tracking-wider uppercase mb-4">
              Credentials
            </span>
            <h2 className="reveal reveal-delay-1 font-[var(--font-display)] text-4xl text-[var(--color-text)] decorative-line decorative-line-center">
              ACCREDITATIONS & CERTIFICATIONS
            </h2>
            <p className="reveal reveal-delay-2 text-[var(--color-text-muted)] text-lg mt-8">
              We maintain the highest standards through continuous training and certification.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {accreditations.map((accreditation, index) => (
              <div
                key={index}
                className="reveal flex items-center gap-3 bg-[var(--color-primary)]/5 px-6 py-4 rounded-full"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="font-semibold text-[var(--color-text)]">{accreditation}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section bg-[var(--color-surface-dark)]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="inline-block text-[var(--color-primary)] font-semibold text-sm tracking-wider uppercase mb-4">
                Where We Work
              </span>
              <h2 className="font-[var(--font-display)] text-4xl text-[var(--color-text)] mb-6 decorative-line">
                SERVICE AREAS
              </h2>
              <p className="text-[var(--color-text-muted)] text-lg mb-8 mt-8">
                Based in Currumbin, we proudly service a wide area across the Gold Coast and Northern NSW regions. Our team is always ready to help, whether you&apos;re around the corner or across the region.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Currumbin",
                  "Tugun",
                  "Palm Beach",
                  "Burleigh Heads",
                  "Gold Coast",
                  "Tweed Heads",
                  "Northern Rivers",
                  "Northern NSW",
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-[var(--color-text)]">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal reveal-delay-2">
              <div className="bg-[var(--color-primary)] rounded-2xl p-8 text-white grain-texture">
                <h3 className="font-[var(--font-display)] text-2xl mb-4">GET IN TOUCH</h3>
                <p className="text-white/80 mb-6">
                  Ready to discuss your plumbing needs? Contact us today for a free, no-obligation quote.
                </p>
                <div className="space-y-4 mb-6">
                  <a href="tel:0401662907" className="flex items-center gap-3 text-white hover:text-[var(--color-accent)] transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-semibold">0401 662 907</span>
                  </a>
                  <div className="flex items-start gap-3 text-white/80">
                    <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Currumbin 4223, Gold Coast QLD</span>
                  </div>
                </div>
                <Link href="/contact" className="btn btn-primary w-full justify-center">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
