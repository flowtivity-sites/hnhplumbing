import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | H&H Plumbing Gold Coast",
  description: "Complete plumbing services including blocked drains, solar hot water, skylight installation, renovations, and general plumbing. Servicing Gold Coast & Northern NSW.",
};

export default function ServicesPage() {
  const mainServices = [
    {
      id: "blocked-drains",
      title: "Blocked Drain Services",
      description: "Unblocking blocked drains, pipes, sinks and toilets using commercial grade camera, locator and high pressure jet machine.",
      features: [
        "High Pressure Jet Machine - Serious suction to deal with blocked pipes, toilets and drains",
        "Blocked Drain Camera - Find the blockage, record images and video footage",
        "Locator Technology - Figures out the depth and location of the camera when a blockage is found",
        "Transparent Pricing - Upfront quotes with no hidden fees",
        "Preventative Maintenance Tips - Keep your drains flowing",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      id: "solar",
      title: "Solar Hot Water",
      description: "H&H Plumbing specialises in solar hot water installations in the Gold Coast, Northern Rivers and Northern NSW area. We offer Apricus Solar Hot Water Solutions.",
      features: [
        "Apricus Solar Hot Water Solutions - Accredited installers",
        "Gas boosted or electric boosting solutions for hot water tanks",
        "Energy efficient systems that reduce your power bills",
        "Professional installation with quality workmanship",
        "Ongoing maintenance and support",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      id: "skylights",
      title: "Skylight Installations",
      description: "H&H plumbing specialise in Velux skylight installations. A Velux installation can brighten the room, improve ventilation, save on power consumption, and enhance the value of your property.",
      features: [
        "Kitchen Skylights - Cooks love the light and diners love the ambience",
        "Bathroom Skylights - Reduce the need to run lights in your bathroom",
        "Hallway Skylights - Dramatic improvement to dark hallways",
        "Bedroom Skylights - Astounding cosmetic and functionality improvements",
        "Accredited Velux Installer",
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ];

  const additionalServices = [
    {
      id: "general",
      title: "General Plumbing",
      description: "Professional general plumbing services for all your needs.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: "domestic",
      title: "Domestic Plumbing",
      description: "Complete plumbing solutions for residential properties.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: "commercial",
      title: "Commercial Plumbing",
      description: "Comprehensive commercial plumbing services with no shortcuts.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: "renovations",
      title: "Complete Renovations",
      description: "Kitchen and bathroom renovation plumbing services.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
    },
    {
      id: "kitchen-bathroom",
      title: "Kitchen & Bathroom",
      description: "Professional kitchen, bathroom and toilet plumbing services.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
    },
    {
      id: "gutter-mesh",
      title: "Gutter Mesh Installation",
      description: "Professional gutter mesh installation to protect your gutters.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      id: "backflow",
      title: "Backflow Prevention",
      description: "Backflow prevention installation and testing services.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
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
              Our Expertise
            </span>
            <h1 className="reveal reveal-delay-1 font-[var(--font-display)] text-5xl md:text-6xl text-white mb-6">
              PROFESSIONAL PLUMBING SERVICES
            </h1>
            <p className="reveal reveal-delay-2 text-xl text-white/80">
              From blocked drains to complete renovations, we deliver reliable, quality plumbing solutions for all your needs across the Gold Coast and Northern NSW.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`reveal ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="w-20 h-20 rounded-2xl bg-[var(--color-primary)] text-white flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h2 className="font-[var(--font-display)] text-3xl md:text-4xl text-[var(--color-text)] mb-4 decorative-line">
                    {service.title.toUpperCase()}
                  </h2>
                  <p className="text-[var(--color-text-muted)] text-lg mb-8 mt-8">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-[var(--color-text)]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link href="/contact" className="btn btn-primary">
                      Get a Quote
                    </Link>
                  </div>
                </div>

                <div className={`reveal reveal-delay-2 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="relative">
                    <div className="absolute inset-4 -right-4 -bottom-4 bg-[var(--color-accent)] rounded-2xl" />
                    <div className="relative bg-[var(--color-primary)]/5 rounded-2xl p-12 flex items-center justify-center min-h-[400px]">
                      <div className="text-[var(--color-primary)]/20">
                        {service.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="section bg-[var(--color-surface-dark)]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="reveal inline-block text-[var(--color-primary)] font-semibold text-sm tracking-wider uppercase mb-4">
              More Services
            </span>
            <h2 className="reveal reveal-delay-1 font-[var(--font-display)] text-4xl text-[var(--color-text)] decorative-line decorative-line-center">
              ADDITIONAL PLUMBING SERVICES
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {additionalServices.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="reveal card bg-white p-6 hover:border-[var(--color-primary)]/20 border border-transparent"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="font-[var(--font-display)] text-lg text-[var(--color-text)] mb-2">
                  {service.title.toUpperCase()}
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="inline-block text-[var(--color-primary)] font-semibold text-sm tracking-wider uppercase mb-4">
                Coverage Area
              </span>
              <h2 className="font-[var(--font-display)] text-4xl text-[var(--color-text)] mb-6 decorative-line">
                WHERE WE SERVICE
              </h2>
              <p className="text-[var(--color-text-muted)] text-lg mb-8 mt-8">
                H&H Plumbing proudly services a wide area across the Gold Coast and Northern NSW regions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["Currumbin", "Tugun", "Gold Coast", "Tweed Heads", "Northern Rivers", "Northern NSW"].map((area) => (
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
                <h3 className="font-[var(--font-display)] text-2xl mb-4">NEED A PLUMBER?</h3>
                <p className="text-white/80 mb-6">
                  Contact us today for a free, no-obligation quote. We&apos;re available for emergency callouts.
                </p>
                <a href="tel:0401662907" className="btn btn-primary w-full justify-center mb-4">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  0401 662 907
                </a>
                <Link href="/contact" className="btn btn-secondary w-full justify-center">
                  Send Us a Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
