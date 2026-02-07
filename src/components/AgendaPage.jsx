import { Link } from 'react-router-dom'
import Footer from './Footer'
import AnimateIn from './ui/AnimateIn'
import { TextAnimate } from '@/components/ui/text-animate'
import candidatePortrait from '../assets/candidate-portrait.png'
import aboutImage from '../assets/about.png'
import siteData from '../config/siteData'
import { colors } from '@/config/colors'

function AgendaPage() {
  const agenda = siteData.agenda
  const deepNavy = '#061225'

  return (
    <div className="min-h-screen">

      {/* ===== SECTION 1: Intro — Image Left, Text Right ===== */}
      <section
        className="w-full pt-12 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32"
        style={{ backgroundColor: colors.primary[950] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <AnimateIn delay={0.2} className="w-full flex justify-center">
              <div
                className="rounded-lg overflow-hidden shadow-2xl"
                style={{ border: `3px solid ${colors.accent[400]}30` }}
              >
                <img
                  src={candidatePortrait}
                  alt={`${siteData.candidate.fullName} presenting her agenda`}
                  className="w-full max-w-xl h-auto block"
                />
              </div>
            </AnimateIn>

            {/* Text Content */}
            <div>
              <AnimateIn delay={0.1}>
                <p
                  className="text-sm font-bold uppercase tracking-widest mb-4"
                  style={{ color: colors.accent[400] }}
                >
                  {agenda.sectionLabel}
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
                {agenda.headline}
              </TextAnimate>
              {agenda.intro.map((paragraph, index) => (
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

      {/* ===== SECTION 2: Agenda Items — Full-Width Numbered Rows ===== */}
      <section
        className="w-full py-20 md:py-28 lg:py-32"
        style={{ backgroundColor: deepNavy }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16 lg:mb-20">
            <AnimateIn delay={0.1}>
              <p
                className="text-sm font-bold uppercase tracking-widest mb-4"
                style={{ color: colors.accent[400] }}
              >
                {agenda.prioritiesLabel}
              </p>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {agenda.prioritiesHeading}
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="text-white/55 text-lg max-w-2xl mx-auto">
                {agenda.prioritiesSubheading}
              </p>
            </AnimateIn>
          </div>

          {/* Vertical gold line + numbered rows */}
          <div className="relative">
            {/* Vertical connector line (desktop only) */}
            <div
              className="hidden lg:block absolute left-[60px] top-0 bottom-0 w-px"
              style={{ backgroundColor: `${colors.accent[400]}30` }}
            />

            <div className="space-y-6 lg:space-y-0">
              {agenda.priorities.map((item, index) => (
                <AnimateIn key={index} delay={0.25 + index * 0.08}>
                  <div className="relative flex items-stretch lg:items-center gap-5 lg:gap-10 group">
                    {/* Big number */}
                    <div className="flex-shrink-0 relative z-10">
                      <div
                        className="w-14 h-14 lg:w-[120px] lg:h-[120px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: deepNavy,
                          border: `2px solid ${colors.accent[400]}50`,
                        }}
                      >
                        <span
                          className="text-xl lg:text-4xl font-black tracking-tight"
                          style={{ color: colors.accent[400] }}
                        >
                          {item.number}
                        </span>
                      </div>
                    </div>

                    {/* Content card */}
                    <div
                      className="flex-1 border-b border-white/5 py-6 lg:py-10 transition-all duration-300 group-hover:border-white/15"
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
                        {item.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed max-w-2xl text-base md:text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: Key Commitments ===== */}
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
                {agenda.commitmentsLabel}
              </p>
            </AnimateIn>
            <AnimateIn delay={0.15}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                {agenda.commitmentsHeading}
              </h2>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                {agenda.commitmentsSubheading}
              </p>
            </AnimateIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {agenda.commitments.map((item, index) => (
              <AnimateIn key={index} delay={0.25 + index * 0.1}>
                <div
                  className="rounded-xl p-8 h-full border border-white/10 hover:border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
                >
                  {/* Star icon */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${colors.accent[400]}20` }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: colors.accent[400] }}
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-white/65 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: CTA — Full-Width Image Background ===== */}
      <section className="relative w-full py-28 md:py-36 lg:py-44 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={aboutImage}
            alt=""
            className="w-full h-full object-cover object-top"
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: colors.primary[950] + 'e8' }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
          <AnimateIn delay={0.1}>
            <p
              className="text-sm font-bold uppercase tracking-widest mb-4"
              style={{ color: colors.accent[400] }}
            >
              {agenda.ctaLabel}
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {agenda.ctaHeading}
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              {agenda.ctaText}
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={siteData.campaign.donateUrl}
                className="inline-block bg-accent-400 hover:bg-accent-500 text-primary-950 font-bold px-10 py-4 rounded transition-all duration-200 shadow-lg text-sm tracking-[0.15em] uppercase hover:scale-105 active:scale-95"
              >
                DONATE NOW
              </a>
              <Link
                to="/contact"
                className="inline-block border-2 border-white text-white font-bold px-10 py-4 rounded text-sm tracking-[0.15em] uppercase transition-all duration-200 hover:bg-white hover:scale-105 hover:shadow-lg active:scale-95 no-underline"
                onMouseEnter={(e) => { e.currentTarget.style.color = colors.primary[950] }}
                onMouseLeave={(e) => { e.currentTarget.style.color = colors.white }}
              >
                CONTACT US
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AgendaPage
