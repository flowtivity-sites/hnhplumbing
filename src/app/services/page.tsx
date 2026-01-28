import type { Metadata } from "next";
import Image from "next/image";
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
      image: "/images/Unblock_Driains_HIgh_Pressure_Jet_Machine_on_trailer_7C_H_26H-547w.jpg",
      features: [
        "High Pressure Jet Machine - Serious suction to deal with blocked pipes, toilets and drains",
        "Blocked Drain Camera - Find the blockage, record images and video footage",
        "Locator Technology - Figures out the depth and location of the camera when a blockage is found",
        "Transparent Pricing - Upfront quotes with no hidden fees",
      ],
    },
    {
      id: "solar",
      title: "Solar Hot Water",
      description: "H&H Plumbing specialises in solar hot water installations in the Gold Coast, Northern Rivers and Northern NSW area. We offer Apricus Solar Hot Water Solutions.",
      image: "/images/Hot_Water_System_Installation_7C_Gold_Coast_Northern_Rivers_7C_HnH_Plumbing-1920w.jpg",
      features: [
        "Apricus Solar Hot Water Solutions - Accredited installers",
        "Gas boosted or electric boosting solutions for hot water tanks",
        "Energy efficient systems that reduce your power bills",
        "Professional installation with quality workmanship",
      ],
    },
    {
      id: "skylights",
      title: "Skylight Installations",
      description: "H&H plumbing specialise in Velux skylight installations. A Velux installation can brighten the room, improve ventilation, save on power consumption, and enhance the value of your property.",
      image: "/images/Skylight_Velux_7C_Gold_Coast_Northern_Rivers_7C_HnH_Plumbing-1920w.jpg",
      features: [
        "Kitchen Skylights - Cooks love the light and diners love the ambience",
        "Bathroom Skylights - Reduce the need to run lights in your bathroom",
        "Hallway Skylights - Dramatic improvement to dark hallways",
        "Accredited Velux Installer",
      ],
    },
  ];

  const skylightGallery = [
    { image: "/images/Velux_Roof_Windows_Kitchen_7C_Gold_Coast_Northern_Rivers_7C_HnH_Plumbing-1920w.png", title: "Kitchen" },
    { image: "/images/Velux_Roof_Window_Bathroom_7C_Gold_Coast_Northern_Rivers_7C_HnH_Plumbing-1920w.png", title: "Bathroom" },
    { image: "/images/Velux_Roof_Skylight_Hallway_7C_Gold_Coast_Northern_Rivers_7C_HnH_Plumbing-1920w.png", title: "Hallway" },
    { image: "/images/Velux_Roof_Skylight_Bedroom_7C_Gold_Coast_Northern_Rivers_7C_HnH_Plumbing-1920w.png", title: "Bedroom" },
  ];

  const additionalServices = [
    { title: "General Plumbing", description: "Professional general plumbing services for all your needs." },
    { title: "Domestic Plumbing", description: "Complete plumbing solutions for residential properties." },
    { title: "Commercial Plumbing", description: "Comprehensive commercial plumbing services with no shortcuts." },
    { title: "Complete Renovations", description: "Kitchen and bathroom renovation plumbing services." },
    { title: "Kitchen & Bathroom", description: "Professional kitchen, bathroom and toilet plumbing services." },
    { title: "Gutter Mesh Installation", description: "Professional gutter mesh installation to protect your gutters." },
    { title: "Backflow Prevention", description: "Backflow prevention installation and testing services." },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/Hot_Water_System_Installation_7C_Gold_Coast_Northern_Rivers_7C_HnH_Plumbing-1920w.jpg" alt="Plumbing Services" fill className="object-cover" />
          <div className="absolute inset-0 bg-[var(--color-primary)]/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="reveal inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)] rounded-full text-sm font-semibold text-[var(--color-text)] mb-6">Our Expertise</span>
            <h1 className="reveal reveal-delay-1 font-[var(--font-display)] text-5xl md:text-6xl text-white mb-6">PROFESSIONAL PLUMBING SERVICES</h1>
            <p className="reveal reveal-delay-2 text-xl text-white/80">From blocked drains to complete renovations, we deliver reliable, quality plumbing solutions for all your needs.</p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={`reveal ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <h2 className="font-[var(--font-display)] text-3xl md:text-4xl text-[var(--color-text)] mb-4 decorative-line">{service.title.toUpperCase()}</h2>
                  <p className="text-[var(--color-text-muted)] text-lg mb-8 mt-8">{service.description}</p>
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
                    <Link href="/contact" className="btn btn-primary">Get a Quote</Link>
                  </div>
                </div>

                <div className={`reveal reveal-delay-2 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image src={service.image} alt={service.title} width={600} height={400} className="w-full h-auto object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skylight Gallery */}
      <section className="section bg-[var(--color-surface-dark)]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="reveal inline-block text-[var(--color-primary)] font-semibold text-sm tracking-wider uppercase mb-4">Skylight Gallery</span>
            <h2 className="reveal reveal-delay-1 font-[var(--font-display)] text-4xl text-[var(--color-text)] decorative-line decorative-line-center">VELUX INSTALLATIONS</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {skylightGallery.map((item, index) => (
              <div key={index} className="reveal card overflow-hidden group" style={{ animationDelay: `${0.1 * index}s` }}>
                <div className="relative h-64 overflow-hidden">
                  <Image src={item.image} alt={`${item.title} Skylight`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 font-[var(--font-display)] text-xl text-white">{item.title.toUpperCase()}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="reveal inline-block text-[var(--color-primary)] font-semibold text-sm tracking-wider uppercase mb-4">More Services</span>
            <h2 className="reveal reveal-delay-1 font-[var(--font-display)] text-4xl text-[var(--color-text)] decorative-line decorative-line-center">ADDITIONAL PLUMBING SERVICES</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {additionalServices.map((service, index) => (
              <div key={index} className="reveal card bg-[var(--color-surface)] p-6 hover:border-[var(--color-primary)]/20 border border-transparent" style={{ animationDelay: `${0.1 * index}s` }}>
                <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-4">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-[var(--font-display)] text-lg text-[var(--color-text)] mb-2">{service.title.toUpperCase()}</h3>
                <p className="text-[var(--color-text-muted)] text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[var(--color-primary)] grain-texture">
        <div className="container mx-auto px-4 text-center">
          <h2 className="reveal font-[var(--font-display)] text-4xl text-white mb-4">NEED A PLUMBER?</h2>
          <p className="reveal reveal-delay-1 text-white/80 mb-8 max-w-xl mx-auto">Contact us today for a free, no-obligation quote. We&apos;re available for emergency callouts.</p>
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
      </section>
    </>
  );
}
