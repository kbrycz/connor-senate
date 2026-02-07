import AnimateIn from './ui/AnimateIn'
import { TextAnimate } from '@/components/ui/text-animate'
import candidatePortrait from '../assets/about.png'
import siteData from '../config/siteData'
import { colors } from '@/config/colors'

function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#071428' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-10 lg:mb-12">
          <AnimateIn delay={0.05}>
            <p
              className="text-sm font-bold tracking-[0.2em] uppercase text-center mb-3"
              style={{ color: colors.accent[400] }}
            >
              Get to Know the Candidate
            </p>
          </AnimateIn>
          <TextAnimate as="h2" animation="fadeIn" by="word" delay={0.1} once className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
            {siteData.about.heading}
          </TextAnimate>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimateIn delay={0.2}>
            <div className="w-full overflow-hidden rounded-lg shadow-2xl">
              <img src={candidatePortrait} alt={`${siteData.candidate.fullName} in the community`} className="w-full aspect-[16/10] object-cover" />
            </div>
          </AnimateIn>

          <div>
            {siteData.about.bio.map((paragraph, index) => (
              <AnimateIn key={index} delay={0.3 + index * 0.1}>
                <p className="text-white/85 text-lg leading-relaxed mb-6">{paragraph}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
