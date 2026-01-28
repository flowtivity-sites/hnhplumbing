import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Blocked Drains",
      description: "Commercial grade camera, locator and high pressure jet machine to clear any blockage fast.",
      image: "/images/Unblock_Driains_HIgh_Pressure_Jet_Machine_on_trailer_7C_H_26H-547w.jpg",
      link: "/services#blocked-drains",
    },
    {
      title: "Solar Hot Water",
      description: "Accredited Apricus installers offering energy-efficient solar hot water solutions.",
      image: "/images/Apricus_Solar_Hot_Water_System_7C_Gold_Coast_Northern_Rivers_7C_HnH_Plumbing.png-1920w.png",
      link: "/services#solar",
    },
    {
      title: "Skylights",
      description: "Velux skylight installations to brighten any room and save on energy costs.",
      image: "/images/Skylight_Velux_7C_Gold_Coast_Northern_Rivers_7C_HnH_Plumbing-1920w.jpg",
      link: "/services#skylights",
    },
  ];

  const trustSignals = [
    { number: "15+", label: "Years Experience" },
    { number: "1000+", label: "Jobs Completed" },
    { number: "100%", label: "Satisfaction" },
    { number: "24/7", label: "Emergency Service" },
  ];

  const testimonials = [
    { quote: "Mark and the team were fantastic. Professional, reliable, and got the job done quickly. Highly recommend!", author: "Sarah M.", location: "Currumbin" },
    { quote: "Best plumber on the Gold Coast. Fixed our blocked drain in no time and explained everything clearly.", author: "James T.", location: "Tugun" },
    { quote: "Excellent service from start to finish. Our new skylights have transformed our home!", author: "Lisa K.", location: "Tweed Heads" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Plumbing_Van_and_Trailer_7C_H_26H_Plumbing_-547w.jpg"
            alt="H&H Plumbing Van and Trailer"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/95 via-[var(--color-primary)]/80 to-[var(--color-primary)]/60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <div className="reveal">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] rounded-full text-sm font-semibold text-[var(--color-text)] mb-6">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Gold Coast & Northern NSW
                </span>
              </div>

              <h1 className="reveal reveal-delay-1 font-[var(--font-display)] text-5xl md:text-6xl lg:text-7xl text-white leading-[0.9] mb-6">
                RELIABLE,<br />
                <span className="text-[var(--color-accent)]">QUALITY</span><br />
                PLUMBING
              </h1>

              <p className="reveal reveal-delay-2 text-xl text-white/90 mb-8 leading-relaxed">
                Specialists in blocked drains, solar hot water, and skylight installations. Servicing Currumbin, Tugun, and the greater Gold Coast region.
              </p>

              <div className="reveal reveal-delay-3 flex flex-wrap gap-4">
                <a href="tel:0401662907" className="btn btn-primary">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
                <Link href="/contact" className="btn btn-secondary">Get a Free Quote</Link>
              </div>

              <div className="reveal reveal-delay-4 mt-12 flex items-center gap-6 pt-8 border-t border-white/20">
                <div className="flex items-center gap-3">
                  <Image src="/images/qbcc-logo-500w.jpg" alt="QBCC Licensed" width={50} height={35} className="rounded bg-white p-1" />
                  <span className="text-sm text-white/80">QBCC Licensed</span>
                </div>
                <div className="flex items-center gap-3">
                  <Image src="/images/velux_logo-1920w.png" alt="Velux Accredited" width={50} height={35} className="rounded bg-white p-1" />
                  <span className="text-sm text-white/80">Velux Accredited</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-2 gap-6">
              {trustSignals.map((signal, index) => (
                <div key={index} className="reveal bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div className="font-[var(--font-display)] text-4xl text-[var(--color-accent)] mb-2">{signal.number}</div>
                  <div className="text-white/80">{signal.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white relative overflow-hidden" id="services">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary)]" />

        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="reveal inline-block text-[var(--color-primary)] font-semibold text-sm tracking-wider uppercase mb-4">What We Do</span>
            <h2 className="reveal reveal-delay-1 font-[var(--font-display)] text-4xl md:text-5xl text-[var(--color-text)] mb-6 decorative-line decorative-line-center">OUR SERVICES</h2>
            <p className="reveal reveal-delay-2 text-[var(--color-text-muted)] text-lg mt-8">From blocked drains to complete renovations, we deliver reliable, quality plumbing solutions.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.link} className="reveal card group overflow-hidden" style={{ animationDelay: `${0.1 * index}s` }}>
                <div className="relative h-56 overflow-hidden">
                  <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 font-[var(--font-display)] text-2xl text-white">{service.title.toUpperCase()}</h3>
                </div>
                <div className="p-6">
                  <p className="text-[var(--color-text-muted)] mb-4">{service.description}</p>
                  <span className="inline-flex items-center text-[var(--color-primary)] font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link href="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-[var(--color-surface-dark)] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="reveal inline-block text-[var(--color-primary)] font-semibold text-sm tracking-wider uppercase mb-4">Why Choose Us</span>
              <h2 className="reveal reveal-delay-1 font-[var(--font-display)] text-4xl md:text-5xl text-[var(--color-text)] mb-8 decorative-line">SOLUTIONS YOU CAN TRUST</h2>

              <div className="space-y-6 mt-12">
                {[
                  { title: "Licensed & Fully Insured", desc: "Fully qualified plumbers with comprehensive insurance coverage." },
                  { title: "Fast Response Times", desc: "Quick service when you need it most, including emergency callouts." },
                  { title: "Transparent Pricing", desc: "Upfront quotes with no hidden fees or surprise charges." },
                  { title: "Accredited Installers", desc: "Certified Velux skylight and Apricus solar hot water specialists." },
                ].map((item, index) => (
                  <div key={index} className="reveal flex gap-4 items-start" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                    <div className="w-12 h-12 rounded-lg bg-[var(--color-primary)] text-white flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-[var(--font-display)] text-lg text-[var(--color-text)] mb-1">{item.title.toUpperCase()}</h3>
                      <p className="text-[var(--color-text-muted)]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal reveal-delay-2">
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/Hot_Water_System_Installation_7C_Gold_Coast_Northern_Rivers_7C_HnH_Plumbing-1920w.jpg"
                  alt="Hot Water System Installation"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-primary)] to-transparent p-8">
                  <h3 className="font-[var(--font-display)] text-2xl text-white mb-2">SERVING THE GOLD COAST FOR OVER 15 YEARS</h3>
                  <a href="tel:0401662907" className="btn btn-primary">Get Your Free Quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="reveal inline-block text-[var(--color-primary)] font-semibold text-sm tracking-wider uppercase mb-4">Testimonials</span>
            <h2 className="reveal reveal-delay-1 font-[var(--font-display)] text-4xl md:text-5xl text-[var(--color-text)] mb-6 decorative-line decorative-line-center">WHAT OUR CUSTOMERS SAY</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="reveal bg-[var(--color-surface)] rounded-2xl p-8 relative" style={{ animationDelay: `${0.1 * index}s` }}>
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
                <p className="text-[var(--color-text)] mb-6 italic">&quot;{testimonial.quote}&quot;</p>
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
              <span className="reveal inline-block text-[var(--color-primary)] font-semibold text-sm tracking-wider uppercase mb-4">FAQ</span>
              <h2 className="reveal reveal-delay-1 font-[var(--font-display)] text-4xl text-[var(--color-text)] decorative-line decorative-line-center">COMMON QUESTIONS</h2>
            </div>

            <div className="space-y-4 mt-12">
              {[
                { q: "What areas do you service?", a: "We service Currumbin, Tugun, the greater Gold Coast region, Tweed Heads, and Northern NSW. Contact us to confirm we cover your area." },
                { q: "How much does a blocked drain service cost?", a: "Pricing depends on the severity and location of the blockage. We provide transparent upfront quotes with no hidden fees. Basic drain clearing starts from $150." },
                { q: "Do you offer emergency plumbing services?", a: "Yes! We offer emergency callout services for urgent plumbing issues. Call us on 0401 662 907 for immediate assistance." },
                { q: "Are you licensed and insured?", a: "Absolutely. H&H Plumbing is fully licensed and comprehensively insured. We're also accredited Velux skylight and Apricus solar hot water installers." },
                { q: "How can skylights save me money?", a: "Skylights reduce the need for artificial lighting during the day, cutting electricity costs. They also improve ventilation and can increase your property value." },
              ].map((faq, index) => (
                <details key={index} className="reveal group bg-white rounded-xl overflow-hidden" style={{ animationDelay: `${0.1 * index}s` }}>
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-[var(--font-display)] text-lg text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors">
                    {faq.q}
                    <svg className="w-5 h-5 text-[var(--color-primary)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 text-[var(--color-text-muted)]">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/Skylight_Velux_7C_Gold_Coast_Northern_Rivers_7C_HnH_Plumbing-1920w.jpg" alt="Velux Skylight" fill className="object-cover" />
          <div className="absolute inset-0 bg-[var(--color-primary)]/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="reveal font-[var(--font-display)] text-4xl md:text-5xl text-white mb-6">READY TO GET STARTED?</h2>
            <p className="reveal reveal-delay-1 text-xl text-white/80 mb-10">Contact us today for a free, no-obligation quote on your plumbing project.</p>
            <div className="reveal reveal-delay-2 flex flex-wrap justify-center gap-4">
              <a href="tel:0401662907" className="btn btn-primary">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0401 662 907
              </a>
              <Link href="/contact" className="btn btn-secondary">Send Us a Message</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
