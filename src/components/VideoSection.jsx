import AnimateIn from './ui/AnimateIn'
import sectionImage from '../assets/about-intro.png'
import siteData from '../config/siteData'
import { colors } from '@/config/colors'

function VideoSection() {
  return (
    <section
      className="w-full py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-16"
      style={{ backgroundColor: colors.primary[950] }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Video Thumbnail */}
        <AnimateIn delay={0.2}>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl group cursor-pointer mb-12 md:mb-16">
            <img
              src={sectionImage}
              alt={`${siteData.candidate.fullName} in the community`}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${colors.primary[950]}44 0%, rgba(0,0,0,0.35) 100%)`,
              }}
            />

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110 bg-white/90 backdrop-blur-sm">
                <svg
                  className="w-7 h-7 md:w-8 md:h-8 ml-1"
                  style={{ color: colors.primary[950] }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Heading */}
        <AnimateIn delay={0.3}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-white leading-tight tracking-tight mb-6 md:mb-8">
            {siteData.video.headline}{' '}
            <span style={{ color: colors.accent[400] }}>
              {siteData.video.highlightText}
            </span>
          </h2>
        </AnimateIn>

        {/* Sub-text */}
        <AnimateIn delay={0.4}>
          <p className="text-center text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10 md:mb-12">
            {siteData.video.description}
          </p>
        </AnimateIn>

        {/* Learn More Button */}
        <AnimateIn delay={0.5}>
          <div className="flex justify-center">
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-lg transition-all duration-200 hover:brightness-110 hover:shadow-lg"
              style={{ backgroundColor: colors.accent[400], color: colors.primary[950] }}
            >
              Learn More
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}

export default VideoSection
