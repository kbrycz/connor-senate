import Footer from './Footer'
import AnimateIn from './ui/AnimateIn'
import { TextAnimate } from '@/components/ui/text-animate'
import aboutIntroImage from '../assets/about-intro.png'
import candidatePortrait from '../assets/candidate-portrait.png'
import squareImage from '../assets/square.png'
import aboutImage from '../assets/about.png'
import siteData from '../config/siteData'
import { colors } from '@/config/colors'

function AboutPage() {
  const about = siteData.aboutPage
  const deepNavy = '#061225' // even darker than primary-950

  return (
    <div className="min-h-screen">
      {/* ===== SECTION 1: Intro (Deep Navy) ===== */}
      <section
        className="w-full pt-12 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32"
        style={{ backgroundColor: colors.primary[950] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="order-last lg:order-first text-center lg:text-left">
              <AnimateIn delay={0.1}>
                <p
                  className="text-sm font-bold uppercase tracking-widest mb-4"
                  style={{ color: colors.accent[400] }}
                >
                  {about.sectionLabel}
                </p>
              </AnimateIn>
              <TextAnimate
                as="h1"
                animation="fadeIn"
                by="word"
                delay={0.15}
                once
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight"
              >
                {about.headline}
              </TextAnimate>
              {about.intro.map((paragraph, index) => (
                <AnimateIn key={index} delay={0.3 + index * 0.1}>
                  <p className="text-white/75 text-lg leading-relaxed mb-6 text-left">
                    {paragraph}
                  </p>
                </AnimateIn>
              ))}
            </div>

            {/* Image */}
            <AnimateIn delay={0.2} className="w-full flex justify-center order-first lg:order-last">
              <div
                className="rounded-lg overflow-hidden shadow-2xl"
                style={{ border: `3px solid ${colors.accent[400]}30` }}
              >
                <img
                  src={aboutIntroImage}
                  alt="Sarah Connor speaking to supporters"
                  className="w-full max-w-xl h-auto block"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: Her Story (Darker) ===== */}
      <section
        className="w-full py-20 md:py-28 lg:py-32"
        style={{ backgroundColor: deepNavy }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-12 lg:mb-16">
            <AnimateIn delay={0.1}>
              <p
                className="text-sm font-bold uppercase tracking-widest mb-4"
                style={{ color: colors.accent[400] }}
              >
                {about.bioLabel}
              </p>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                {about.bioHeading}
              </h2>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <AnimateIn delay={0.2}>
              <div
                className="w-full overflow-hidden rounded-lg shadow-2xl"
                style={{ border: `3px solid ${colors.accent[400]}30` }}
              >
                <img
                  src={aboutImage}
                  alt={`${siteData.candidate.fullName} in the community`}
                  className="w-full aspect-[16/10] object-cover"
                />
              </div>
            </AnimateIn>

            {/* Bio Text */}
            <div>
              {about.bio.map((paragraph, index) => (
                <AnimateIn key={index} delay={0.3 + index * 0.1}>
                  <p className="text-white/75 text-lg leading-relaxed mb-6">
                    {paragraph}
                  </p>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: Core Values (Deep Navy) ===== */}
      <section
        className="w-full py-20 md:py-28 lg:py-32"
        style={{ backgroundColor: colors.primary[950] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-14 lg:mb-16">
            <AnimateIn delay={0.1}>
              <p
                className="text-sm font-bold uppercase tracking-widest mb-4"
                style={{ color: colors.accent[400] }}
              >
                {about.valuesLabel}
              </p>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {about.valuesHeading}
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                {about.valuesSubheading}
              </p>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
            {/* Values Cards */}
            <div className="space-y-6 order-last lg:order-first flex flex-col justify-between">
              {about.values.map((item, index) => (
                <AnimateIn key={index} delay={0.25 + index * 0.1}>
                  <div
                    className="rounded-lg p-6"
                    style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: colors.accent[400] }}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          style={{ color: colors.primary[950] }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-white">
                          {item.title}
                        </h3>
                        <p className="text-white/70 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>

            {/* Image */}
            <AnimateIn delay={0.2} className="order-first lg:order-last flex">
              <div
                className="w-full overflow-hidden rounded-lg shadow-xl flex"
                style={{ border: `3px solid ${colors.accent[400]}30` }}
              >
                <img
                  src={squareImage}
                  alt={`${siteData.candidate.fullName} in the community`}
                  className="w-full object-cover"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: Call to Action (Darker) ===== */}
      <section
        className="w-full py-20 md:py-28 lg:py-32"
        style={{ backgroundColor: deepNavy }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <AnimateIn delay={0.2}>
              <div
                className="w-full overflow-hidden rounded-lg shadow-2xl"
                style={{ border: `3px solid ${colors.accent[400]}30` }}
              >
                <img
                  src={candidatePortrait}
                  alt={`${siteData.candidate.fullName} portrait`}
                  className="w-full aspect-[16/10] object-cover"
                />
              </div>
            </AnimateIn>

            {/* CTA Content */}
            <div className="text-center lg:text-left">
              <AnimateIn delay={0.1}>
                <p
                  className="text-sm font-bold uppercase tracking-widest mb-4"
                  style={{ color: colors.accent[400] }}
                >
                  {about.ctaLabel}
                </p>
              </AnimateIn>
              <AnimateIn delay={0.15}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  {about.ctaHeading}
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.2}>
                <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 text-left">
                  {about.ctaText}
                </p>
              </AnimateIn>
              <AnimateIn delay={0.3}>
                <a
                  href={siteData.campaign.donateUrl}
                  className="inline-block bg-accent-400 hover:bg-accent-500 text-primary-950 font-bold px-10 py-4 rounded transition-colors duration-200 shadow-lg text-sm tracking-[0.15em] uppercase"
                >
                  DONATE NOW
                </a>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
