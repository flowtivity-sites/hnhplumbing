# H&H Plumbing - Website Rebuild

## Overview
This is a website rebuild for **H&H Plumbing**, a trades business.

## Quick Start
```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir --no-eslint
npm run dev
```

## Design Direction
- **Aesthetic:** Solution Focused
- **Display Font:** Archivo Black
- **Body Font:** Inter
- **Primary Color:** #166534
- **Accent Color:** #eab308
- **Effects:** parallax hints, decorative lines, offset elements, subtle gradients, micro-animations

## Design Variations Available
This site has 4 unique design variations to choose from. The recommended variation is applied below, but you can switch by updating `selectedVariation` in prd.json.

### Industrial Precision (variation-1) - RECOMMENDED
- **Rationale:** This design reflects H&H Plumbing's technical expertise and Gold Coast reliability with industrial-inspired aesthetics. The bold typography and structured layout convey the professionalism needed for both domestic and commercial plumbing services across their regional coverage area.
- **Palette:** Primary #1a365d, Accent #f56500
- **Fonts:** Bebas Neue / Work Sans
- **Mood:** industrial, precise, trustworthy, bold

### Coastal Professional (variation-2)
- **Rationale:** Designed to reflect H&H Plumbing's Gold Coast and Northern NSW coastal location while maintaining professional credibility. The teal and slate palette evokes the coastal environment of Currumbin while the clean typography ensures service clarity for their diverse plumbing offerings.
- **Palette:** Primary #0f4c75, Accent #14b8a6
- **Fonts:** Space Grotesk / DM Sans
- **Mood:** coastal, professional, modern, approachable

### Trade Authority (variation-3)
- **Rationale:** Emphasizes H&H Plumbing's comprehensive service range from blocked drains to complete renovations with a confident, authoritative design. The charcoal and blue palette projects strength and reliability essential for their commercial and domestic client base.
- **Palette:** Primary #374151, Accent #3b82f6
- **Fonts:** Oswald / Source Sans Pro
- **Mood:** authoritative, confident, established, comprehensive

### Solution Focused (variation-4)
- **Rationale:** Highlights H&H Plumbing's problem-solving capabilities across their specialties like skylights and solar hot water. The forest green and yellow combination suggests growth and energy efficiency, perfect for showcasing their innovative services in the competitive Gold Coast market.
- **Palette:** Primary #166534, Accent #eab308
- **Fonts:** Archivo Black / Inter
- **Mood:** solution-oriented, innovative, energetic, growth-focused


## Business Information
- **Name:** H&H Plumbing
- **Phone:** 0401 662 907

- **Address:** Currumbin 4223, Gold Coast QLD and Northern Rivers NSW regions

- **Tagline:** RELIABLE, QUALITY PLUMBING SERVICING GOLD COAST & NORTHERN NSW

## Services
### blocked drains
Professional blocked drains services

### solar hot water
Wide range of solar hot water services

### skylights installation
Professional skylights installation services

### Complete Renovations
Professional Complete Renovations services

### Kitchen And Ballroom
Professional Kitchen And Ballroom services

### All Your Plumbing Needs
Professional plumbing services

### Plumbing
Professional plumbing services

### Velux Skylight Installs
H&H plumbing specialise in skylight installations. A Velux installation can brighten the room, improve ventilation, introduce a sky or high line view, save on power consumption, connect with the great Australian outdoors, and enhance the value of your property.

### Kitchen Skylight Installations
Velux skylight or sun tunnel can enhance a kitchen. Cooks love the light and diners love the ambience. Skylights can result in a lot of potential long term cost savings.

### Bathroom Skylight Installations
Velux bathroom skylight or sky window can reduce the need to run lights in your bathroom.

### Hallway Skylight Installations
Introducing natural light via a skylight installation can make a dramatic improvement to a hall way.

### Bedroom Skylight Installations
Skylights and sky windows can bring astounding cosmetic and functionality improvements to your bedroom, office or room.

### Solar Hot Water Installations
Professional solar hot water installation services

### Gas boosted or electric boosting solution
Installation of gas boosted or electric boosting solutions for hot water tanks

### Blocked Drain Clearing
Unblocking blocked drains, pipes, sinks and toilets using commercial grade camera, locator and high pressure jet machine.

### Blocked Drain Camera & Locator
Using blocked drain camera to find the blockage, record images and video footage. Locator figures out the depth and location of the camera when a blockage is found.

### High Pressure Jet Machine
Using high pressure jet machine with serious suction to deal with blocked pipes, toilets and drains.

### Blocked Drain Service
Unblocking blocked drains, pipes, sinks and toilets using commercial grade camera, locator and high pressure jet machine.

### Domestic Plumbing
Professional domestic plumbing services

### Commercial Plumbing
Professional commercial plumbing services

### General Plumbing
Professional general plumbing services

### Kitchen, Bathroom and Toilet Plumbing
Professional kitchen, bathroom and toilet plumbing services

### Gutter mesh installation
Professional gutter mesh installation services

### Back-flow prevention and testing
Professional back-flow prevention and testing services

## Available Images
**IMPORTANT:** Use these downloaded images from the original website. Do NOT use placeholder images.

No images downloaded - use placeholder images sparingly

## Content Files
- `content/pages.json` - Scraped page content
- `content/services.json` - Service offerings
- `content/about.json` - About/team information
- `content/metadata.json` - Business contact details
- `assets/images/` - Downloaded images from original website

## PRD Stories
Complete each story in `prd.json` in order. Mark `"passes": true` when done.

1. **Project setup: Next.js + Tailwind, Cloudflare config**
2. **Homepage: hero with images, services grid, trust signals, CTA**
3. **Services page with service images**
4. **About page with team/business images**
5. **Contact page: form, map, details**
6. **Design system: Apply vertical aesthetic**
7. **Motion & polish**
8. **AEO: LocalBusiness schema, meta tags, FAQ**
9. **Mobile responsive**
10. **Image optimization with next/image**
11. **Deploy to Cloudflare Pages**

## Deployment
```bash
npm run build
npx wrangler pages deploy ./out --project-name=hnhplumbing
```

Preview URL: `https://hnhplumbing.sites.flowtivity.com.au`

---
Generated by Website Factory
