import sectionImage from '../assets/about-intro.png'
import { TextAnimate } from '@/components/ui/text-animate'
import AnimateIn from './ui/AnimateIn'
import siteData from '../config/siteData'
import { colors } from '@/config/colors'

function ImageTextSection() {
  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <AnimateIn delay={0} className="w-full md:w-1/2 flex justify-center">
            <img src={sectionImage} alt="Featured image" className="w-full max-w-xl h-auto block" style={{ filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2))' }} />
          </AnimateIn>

          <div className="w-full md:w-1/2">
            <TextAnimate as="h2" animation="fadeIn" by="word" delay={0.2} once className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-10 leading-tight tracking-tight text-center md:text-left" style={{ color: colors.primary[600] }}>
              {siteData.imageText.headline}
            </TextAnimate>
            <div className="space-y-4">
              <TextAnimate as="p" animation="fadeIn" by="word" delay={0.4} once className="text-lg md:text-xl font-semibold text-secondary-600 leading-relaxed">
                {siteData.imageText.subheading}
              </TextAnimate>
              <TextAnimate as="p" animation="fadeIn" by="word" delay={0.6} once className="text-base md:text-lg text-black leading-relaxed">
                {siteData.campaign.pacDescription}
              </TextAnimate>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageTextSection
