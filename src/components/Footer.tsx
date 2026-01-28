import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "Blocked Drains",
    "Solar Hot Water",
    "Skylights",
    "General Plumbing",
    "Renovations",
  ];

  const areas = [
    "Currumbin",
    "Tugun",
    "Gold Coast",
    "Tweed Heads",
    "Northern NSW",
  ];

  return (
    <footer className="bg-[var(--color-primary)] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="font-[var(--font-display)] text-xl font-bold text-[var(--color-accent)]">
                  H&H
                </span>
              </div>
              <span className="font-[var(--font-display)] text-xl">
                H&H PLUMBING
              </span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Reliable, quality plumbing servicing Gold Coast & Northern NSW.
              Specialists in blocked drains, solar hot water, and skylight installations.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-[var(--font-display)] text-lg mb-6 relative inline-block">
              OUR SERVICES
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[var(--color-accent)]" />
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-white/80 hover:text-[var(--color-accent)] transition-colors flex items-center gap-2"
                  >
                    <svg className="w-4 h-4 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-[var(--font-display)] text-lg mb-6 relative inline-block">
              SERVICE AREAS
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[var(--color-accent)]" />
            </h3>
            <ul className="space-y-3">
              {areas.map((area) => (
                <li key={area}>
                  <span className="text-white/80 flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-[var(--font-display)] text-lg mb-6 relative inline-block">
              CONTACT US
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[var(--color-accent)]" />
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:0401662907"
                  className="flex items-start gap-3 text-white/80 hover:text-[var(--color-accent)] transition-colors"
                >
                  <svg className="w-5 h-5 mt-0.5 text-[var(--color-accent)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-semibold text-white">0401 662 907</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <svg className="w-5 h-5 mt-0.5 text-[var(--color-accent)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  Currumbin 4223<br />
                  Gold Coast QLD
                </span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <svg className="w-5 h-5 mt-0.5 text-[var(--color-accent)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                  Mon - Fri: 7am - 5pm<br />
                  Sat: 8am - 12pm
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>&copy; {currentYear} H&H Plumbing. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/contact" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
