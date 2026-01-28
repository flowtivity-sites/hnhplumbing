import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | H&H Plumbing Gold Coast",
  description: "Get in touch with H&H Plumbing for all your plumbing needs. Call 0401 662 907 or send us a message. Serving Gold Coast & Northern NSW.",
};

export default function ContactPage() {
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
              Get In Touch
            </span>
            <h1 className="reveal reveal-delay-1 font-[var(--font-display)] text-5xl md:text-6xl text-white mb-6">
              CONTACT US
            </h1>
            <p className="reveal reveal-delay-2 text-xl text-white/80">
              Ready to discuss your plumbing needs? We&apos;re here to help with a free, no-obligation quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="reveal">
              <h2 className="font-[var(--font-display)] text-3xl text-[var(--color-text)] mb-6 decorative-line">
                SEND US A MESSAGE
              </h2>
              <p className="text-[var(--color-text-muted)] mb-8 mt-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

              <form
                action="https://formspree.io/f/xvgzqzgz"
                method="POST"
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-text)] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[var(--color-text)] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                      placeholder="0400 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-text)] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-[var(--color-text)] mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="blocked-drains">Blocked Drains</option>
                    <option value="solar-hot-water">Solar Hot Water</option>
                    <option value="skylights">Skylight Installation</option>
                    <option value="general-plumbing">General Plumbing</option>
                    <option value="renovations">Renovations</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-text)] mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your plumbing needs..."
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full md:w-auto">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="reveal reveal-delay-2">
              <div className="sticky top-28">
                <h2 className="font-[var(--font-display)] text-3xl text-[var(--color-text)] mb-6 decorative-line">
                  CONTACT DETAILS
                </h2>

                <div className="space-y-6 mt-8">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-[var(--font-display)] text-lg text-[var(--color-text)] mb-1">PHONE</h3>
                      <a href="tel:0401662907" className="text-[var(--color-primary)] font-semibold text-xl hover:text-[var(--color-accent)] transition-colors">
                        0401 662 907
                      </a>
                      <p className="text-sm text-[var(--color-text-muted)] mt-1">Available for emergency callouts</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-[var(--font-display)] text-lg text-[var(--color-text)] mb-1">LOCATION</h3>
                      <p className="text-[var(--color-text-muted)]">
                        Currumbin 4223<br />
                        Gold Coast QLD<br />
                        & Northern Rivers NSW
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-[var(--font-display)] text-lg text-[var(--color-text)] mb-1">BUSINESS HOURS</h3>
                      <p className="text-[var(--color-text-muted)]">
                        Monday - Friday: 7am - 5pm<br />
                        Saturday: 8am - 12pm<br />
                        Sunday: Closed
                      </p>
                      <p className="text-sm text-[var(--color-accent)] font-semibold mt-2">Emergency callouts available</p>
                    </div>
                  </div>
                </div>

                {/* Quick Call CTA */}
                <div className="mt-8 p-6 bg-[var(--color-primary)] rounded-2xl grain-texture">
                  <h3 className="font-[var(--font-display)] text-xl text-white mb-2">NEED URGENT HELP?</h3>
                  <p className="text-white/80 mb-4">For emergency plumbing issues, give us a call right away.</p>
                  <a href="tel:0401662907" className="btn btn-primary w-full justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-[var(--color-surface-dark)]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="reveal inline-block text-[var(--color-primary)] font-semibold text-sm tracking-wider uppercase mb-4">
              Find Us
            </span>
            <h2 className="reveal reveal-delay-1 font-[var(--font-display)] text-4xl text-[var(--color-text)] decorative-line decorative-line-center">
              OUR SERVICE AREA
            </h2>
          </div>

          <div className="reveal reveal-delay-2 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111103.6841693695!2d153.41691842206855!3d-28.194932927890674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91072fe3d2e2d1%3A0x502a35af3de8e50!2sCurrumbin%20QLD%204223%2C%20Australia!5e0!3m2!1sen!2sus!4v1706445678901!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="H&H Plumbing Service Area Map"
            />
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { area: "Gold Coast", suburbs: "Currumbin, Tugun, Palm Beach, Burleigh" },
              { area: "Tweed Region", suburbs: "Tweed Heads, Coolangatta, Kingscliff" },
              { area: "Northern NSW", suburbs: "Byron Bay, Ballina, Lismore regions" },
            ].map((region, index) => (
              <div
                key={index}
                className="reveal bg-white p-6 rounded-xl text-center"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <h3 className="font-[var(--font-display)] text-lg text-[var(--color-primary)] mb-2">
                  {region.area.toUpperCase()}
                </h3>
                <p className="text-[var(--color-text-muted)] text-sm">{region.suburbs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
