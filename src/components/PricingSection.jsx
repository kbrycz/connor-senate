import { useState, memo } from 'react'
import { TextAnimate } from '@/components/ui/text-animate'
import AnimateIn from './ui/AnimateIn'
import siteData from '../config/siteData'
import { colors } from '@/config/colors'

function ContributionButtons() {
  const [selectedAmount, setSelectedAmount] = useState(null)
  const amounts = [...siteData.donation.amounts, 'Other']

  const handleAmountClick = (amount) => {
    setSelectedAmount(selectedAmount === amount ? null : amount)
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      {amounts.map((amount, index) => {
        const isSelected = selectedAmount === amount
        return (
          <button
            key={index}
            onClick={() => handleAmountClick(amount)}
            className="px-4 py-4 md:px-6 md:py-5 rounded-md font-semibold text-base md:text-lg transition-all duration-200 shadow-md hover:shadow-lg"
            style={{
              backgroundColor: isSelected ? colors.accent[400] : 'rgba(255,255,255,0.1)',
              border: `2px solid ${colors.accent[400]}`,
              color: isSelected ? colors.primary[950] : colors.accent[400],
            }}
            onMouseEnter={(e) => { if (!isSelected) e.target.style.backgroundColor = 'rgba(255,255,255,0.2)' }}
            onMouseLeave={(e) => { if (!isSelected) e.target.style.backgroundColor = 'rgba(255,255,255,0.1)' }}
          >
            {typeof amount === 'number' ? `$${amount}` : amount}
          </button>
        )
      })}
    </div>
  )
}

const SectionHeading = memo(function SectionHeading() {
  return (
    <TextAnimate as="h2" animation="fadeIn" by="word" delay={0.2} once className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-10 leading-tight tracking-tight text-center" style={{ color: colors.accent[400] }}>
      Choose Your Contribution
    </TextAnimate>
  )
})

const InfoText = memo(function InfoText() {
  return (
    <div className="text-center space-y-2">
      <TextAnimate as="p" animation="fadeIn" by="word" delay={0} once className="text-sm md:text-base text-white/90">
        Your support helps us continue our mission to create positive change.
      </TextAnimate>
      <TextAnimate as="p" animation="fadeIn" by="word" delay={0.1} once className="text-xs md:text-sm text-white/70">
        {siteData.donation.disclaimer}
      </TextAnimate>
    </div>
  )
})

function PricingSection() {
  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-16" style={{ backgroundColor: colors.primary[950] }}>
      <div className="max-w-6xl mx-auto">
        <SectionHeading />
        <AnimateIn delay={0.4}><ContributionButtons /></AnimateIn>
        <AnimateIn delay={0.6}><InfoText /></AnimateIn>
      </div>
    </section>
  )
}

export default PricingSection
