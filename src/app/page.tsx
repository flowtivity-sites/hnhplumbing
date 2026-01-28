import Link from "next/link";

export default function Home() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Blocked Drains",
      description: "Commercial grade camera, locator and high pressure jet machine to clear any blockage fast.",
      link: "/services#blocked-drains",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Solar Hot Water",
      description: "Accredited Apricus installers offering energy-efficient solar hot water solutions.",
      link: "/services#solar",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Skylights",
      description: "Velux skylight installations to brighten any room and save on energy costs.",
      link: "/services#skylights",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "General Plumbing",
      description: "Complete plumbing solutions for domestic and commercial properties.",
      link: "/services#general",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Renovations",
      description: "Kitchen and bathroom renovations with expert plumbing installation.",
      link: "/services#renovations",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Backflow Prevention",
      description: "Professional backflow prevention installation and testing services.",
      link: "/services#backflow",
    },
  ];

  const trustSignals = [
    { number: "15+", label: "Years Experience" },
    { number: "1000+", label: "Jobs Completed" },
    { number: "100%", label: "Satisfaction" },
    { number: "24/7", label: "Emergency Service" },
  ];

  const testimonials = [
    {
      quote: "Mark and the team were fantastic. Professional, reliable, and got the job done quickly. Highly recommend!",
      author: "Sarah M.",
      location: "Currumbin",
    },
    {
      quote: "Best plumber on the Gold Coast. Fixed our blocked drain in no time and explained everything clearly.",
      author: "James T.",
      location: "Tugun",
    },
    {
      quote: "Excellent service from start to finish. Our new skylights have transformed our home!",
      author: "Lisa K.",
      location: "Tweed Heads",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 diagonal-pattern" />

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[var(--color-primary)]/10 rounded-full blur-3xl" />

        {/* Diagonal Accent */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-primary)] hidden lg:block"
          style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)" }}
        >
          <div className="absolute inset-0 grain-texture" />
          {/* Decorative lines */}
          <div className="absolute top-20 right-20 w-32 h-1 bg-[var(--color-accent)]" />
          <div className="absolute top-28 right-20 w-20 h-1 bg-white/30" />
          <div className="absolute bottom-40 right-32 w-24 h-1 bg-[var(--color-accent)]" />
          <div className="absolute bottom-32 right-32 w-16 h-1 bg-white/30" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              <div className="reveal">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] rounded-full text-sm font-semibold text-[var(--color-text)] mb-6">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Gold Coast & Northern NSW
                </span>
              </div>

              <h1 className="reveal reveal-delay-1 font-[var(--font-display)] text-5xl md:text-6xl lg:text-7xl text-[var(--color-text)] leading-[0.9] mb-6">
                RELIABLE,
                <br />
                <span className="text-[var(--color-primary)]">QUALITY</span>
                <br />
                PLUMBING
              </h1>

              <p className="reveal reveal-delay-2 text-xl text-[var(--color-text-muted)] mb-8 leading-relaxed">
                Specialists in blocked drains, solar hot water, and skylight installations.
                Servicing Currumbin, Tugun, and the greater Gold Coast region.
              </p>

              <div className="reveal reveal-delay-3 flex flex-wrap gap-4">
                <a href="tel:0401662907" className="btn btn-primary">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
                <Link href="/contact" className="btn btn-outline">
                  Get a Free Quote
                </Link>
              </div>

              {/* Trust badges */}
              <div className="reveal reveal-delay-4 mt-12 flex items-center gap-6 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Velux & Apricus Accredited</span>
                </div>
              </div>
            </div>

            {/* Right Content - Stats on dark panel (mobile) */}
            <div className="lg:hidden">
              <div className="bg-[var(--color-primary)] rounded-2xl p-8 grain-texture">
                <div className="grid grid-cols-2 gap-6">
                  {trustSignals.map((signal, index) => (
                    <div key={index} className="text-center">
                      <div className="font-[var(--font-display)] text-4xl text-[var(--color-accent)] mb-1">
                        {signal.number}
                      </div>
                      <div className="text-white/80 text-sm">{signal.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Stats on diagonal (desktop) */}
            <div className="hidden lg:flex items-center justify-center relative">
              <div className="grid grid-cols-2 gap-8 text-white relative z-10 pl-20">
                {trustSignals.map((signal, index) => (
                  <div key={index} className="reveal text-center" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                    <div className="font-[var(--font-display)] text-5xl text-[var(--color-accent)] mb-2">
                      {signal.number}
                    </div>
                    <div className="text-white/80">{signal.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 reveal reveal-delay-5">
          <div className="w-6 h-10 rounded-full border-2 border-[var(--color-primary)] flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-[var(--color-primary)] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white relative overflow-hidden" id="services">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary)]" />

        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="reveal inline-block text-[var(--color-primary)] font-semibold text-sm tracking-wider uppercase mb-4">
              What We Do
            </span>
            <h2 className="reveal reveal-delay-1 font-[var(--font-display)] text-4xl md:text-5xl text-[var(--color-text)] mb-6 decorative-line decorative-line-center">
              OUR SERVICES
            </h2>
            <p className="reveal reveal-delay-2 text-[var(--color-text-muted)] text-lg mt-8">
              From blocked drains to complete renovations, we deliver reliable, quality plumbing solutions for all your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="reveal card group p-8 border border-gray-100 hover:border-[var(--color-primary)]/20"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="service-icon mb-6">
                  {service.icon}
                </div>
                <h3 className="font-[var(--font-display)] text-xl text-[var(--color-text)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  {service.title.toUpperCase()}
                </h3>
                <p className="text-[var(--color-text-muted)] mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-[var(--color-primary)] font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link href="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-[var(--color-surface-dark)] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <span className="reveal inline-block text-[var(--color-primary)] font-semibold text-sm tracking-wider uppercase mb-4">
                Why Choose Us
              </span>
              <h2 className="reveal reveal-delay-1 font-[var(--font-display)] text-4xl md:text-5xl text-[var(--color-text)] mb-8 decorative-line">
                SOLUTIONS YOU CAN TRUST
              </h2>

              <div className="space-y-6 mt-12">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: "Licensed & Fully Insured",
                    description: "Fully qualified plumbers with comprehensive insurance coverage.",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: "Fast Response Times",
                    description: "Quick service when you need it most, including emergency callouts.",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: "Transparent Pricing",
                    description: "Upfront quotes with no hidden fees or surprise charges.",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    ),
                    title: "Accredited Installers",
                    description: "Certified Velux skylight and Apricus solar hot water specialists.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="reveal flex gap-4 items-start"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-[var(--font-display)] text-lg text-[var(--color-text)] mb-1">
                        {item.title.toUpperCase()}
                      </h3>
                      <p className="text-[var(--color-text-muted)]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Image/Stats Card */}
            <div className="reveal reveal-delay-2">
              <div className="relative">
                {/* Offset background */}
                <div className="absolute inset-4 -right-4 -bottom-4 bg-[var(--color-accent)] rounded-2xl" />

                <div className="relative bg-[var(--color-primary)] rounded-2xl p-10 grain-texture">
                  <h3 className="font-[var(--font-display)] text-2xl text-white mb-8">
                    SERVING THE GOLD COAST FOR OVER 15 YEARS
                  </h3>

                  <div className="space-y-6">
                    {[
                      { label: "Blocked Drains Cleared", value: "500+" },
                      { label: "Skylights Installed", value: "200+" },
                      { label: "Solar Systems", value: "150+" },
                      { label: "Happy Customers", value: "1000+" },
                    ].map((stat, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-white/20 pb-4">
                        <span className="text-white/80">{stat.label}</span>
                        <span className="font-[var(--font-display)] text-2xl text-[var(--color-accent)]">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="tel:0401662907"
                    className="mt-8 w-full btn bg-white text-[var(--color-primary)] hover:bg-[var(--color-accent)] hover:text-[var(--color-text)] justify-center"
                  >
                    Get Your Free Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="reveal inline-block text-[var(--color-primary)] font-semibold text-sm tracking-wider uppercase mb-4">
              Testimonials
            </span>
            <h2 className="reveal reveal-delay-1 font-[var(--font-display)] text-4xl md:text-5xl text-[var(--color-text)] mb-6 decorative-line decorative-line-center">
              WHAT OUR CUSTOMERS SAY
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="reveal bg-[var(--color-surface)] rounded-2xl p-8 relative"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Quote mark */}
                <div className="absolute -top-4 left-8 w-8 h-8 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-[var(--color-text)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-[var(--color-text)] mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </p>

                <div>
                  <p className="font-semibold text-[var(--color-text)]">{testimonial.author}</p>
                  <p className="text-sm text-[var(--color-text-muted)]">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-[var(--color-surface-dark)]" id="faq">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="reveal inline-block text-[var(--color-primary)] font-semibold text-sm tracking-wider uppercase mb-4">
                FAQ
              </span>
              <h2 className="reveal reveal-delay-1 font-[var(--font-display)] text-4xl text-[var(--color-text)] decorative-line decorative-line-center">
                COMMON QUESTIONS
              </h2>
            </div>

            <div className="space-y-4 mt-12">
              {[
                {
                  question: "What areas do you service?",
                  answer: "We service Currumbin, Tugun, the greater Gold Coast region, Tweed Heads, and Northern NSW. Contact us to confirm we cover your area.",
                },
                {
                  question: "How much does a blocked drain service cost?",
                  answer: "Pricing depends on the severity and location of the blockage. We provide transparent upfront quotes with no hidden fees. Basic drain clearing starts from $150.",
                },
                {
                  question: "Do you offer emergency plumbing services?",
                  answer: "Yes! We offer emergency callout services for urgent plumbing issues. Call us on 0401 662 907 for immediate assistance.",
                },
                {
                  question: "Are you licensed and insured?",
                  answer: "Absolutely. H&H Plumbing is fully licensed and comprehensively insured. We're also accredited Velux skylight and Apricus solar hot water installers.",
                },
                {
                  question: "How can skylights save me money?",
                  answer: "Skylights reduce the need for artificial lighting during the day, cutting electricity costs. They also improve ventilation and can increase your property value.",
                },
              ].map((faq, index) => (
                <details
                  key={index}
                  className="reveal group bg-white rounded-xl overflow-hidden"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-[var(--font-display)] text-lg text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors">
                    {faq.question}
                    <svg
                      className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-[var(--color-text-muted)]">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 gradient-primary grain-texture" />

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-1 bg-[var(--color-accent)]" />
        <div className="absolute top-16 left-10 w-12 h-1 bg-white/30" />
        <div className="absolute bottom-10 right-10 w-20 h-1 bg-[var(--color-accent)]" />
        <div className="absolute bottom-16 right-10 w-12 h-1 bg-white/30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="reveal font-[var(--font-display)] text-4xl md:text-5xl text-white mb-6">
              READY TO GET STARTED?
            </h2>
            <p className="reveal reveal-delay-1 text-xl text-white/80 mb-10">
              Contact us today for a free, no-obligation quote on your plumbing project.
            </p>
            <div className="reveal reveal-delay-2 flex flex-wrap justify-center gap-4">
              <a href="tel:0401662907" className="btn btn-primary">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0401 662 907
              </a>
              <Link href="/contact" className="btn btn-secondary">
                Send Us a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
